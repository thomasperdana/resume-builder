Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        const { action, jobDescription, resumeContent, answer, questionType = 'mixed' } = await req.json();

        const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
        if (!openRouterApiKey) {
            throw new Error('OpenRouter API key not configured');
        }

        let prompt = '';
        let maxTokens = 1500;

        switch (action) {
            case 'generate_questions':
                if (!jobDescription) {
                    throw new Error('Job description is required for question generation');
                }
                
                let questionPrompt = '';
                switch (questionType) {
                    case 'behavioral':
                        questionPrompt = 'behavioral interview questions focusing on past experiences, leadership, teamwork, and problem-solving';
                        break;
                    case 'technical':
                        questionPrompt = 'technical interview questions relevant to the role and required skills';
                        break;
                    case 'situational':
                        questionPrompt = 'situational interview questions presenting hypothetical scenarios';
                        break;
                    default:
                        questionPrompt = 'a mix of behavioral, technical, and situational interview questions';
                }
                
                prompt = `Based on this job description, generate 8-10 ${questionPrompt}:\n\nJOB DESCRIPTION:\n${jobDescription}\n${resumeContent ? `\nCONDIDATE BACKGROUND:\n${resumeContent}` : ''}\n\nReturn a JSON array of questions with format: [{"question": "...", "type": "behavioral|technical|situational", "difficulty": "easy|medium|hard", "focus_area": "..."}]`;
                maxTokens = 2000;
                break;
                
            case 'evaluate_answer':
                if (!answer) {
                    throw new Error('Answer is required for evaluation');
                }
                
                prompt = `Evaluate this interview answer and provide constructive feedback:\n\nANSWER:\n${answer}\n\nProvide feedback on:\n1. Content quality and relevance\n2. Structure and clarity\n3. Use of examples and specifics\n4. Areas for improvement\n5. Overall rating (1-10)\n\nReturn a JSON object with: {"overall_score": number, "strengths": [], "improvements": [], "structure_feedback": "", "content_feedback": "", "suggestions": []}`;
                maxTokens = 1000;
                break;
                
            case 'practice_tips':
                prompt = `Provide comprehensive interview preparation tips based on this job description${resumeContent ? ' and candidate background' : ''}:\n\nJOB DESCRIPTION:\n${jobDescription}\n${resumeContent ? `\nCANDIDATE BACKGROUND:\n${resumeContent}` : ''}\n\nReturn a JSON object with: {"preparation_tips": [], "key_talking_points": [], "potential_weaknesses_to_address": [], "questions_to_ask_interviewer": [], "dress_code_suggestions": "", "follow_up_advice": ""}`;
                maxTokens = 1500;
                break;
                
            default:
                throw new Error('Invalid action. Must be generate_questions, evaluate_answer, or practice_tips');
        }

        const aiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${openRouterApiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://ai-resume-builder.space',
                'X-Title': 'AI Resume Builder'
            },
            body: JSON.stringify({
                model: 'anthropic/claude-3.5-sonnet',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: maxTokens,
                temperature: action === 'generate_questions' ? 0.8 : 0.5
            })
        });

        if (!aiResponse.ok) {
            const errorData = await aiResponse.text();
            throw new Error(`OpenRouter API error: ${errorData}`);
        }

        const aiData = await aiResponse.json();
        const result = aiData.choices[0].message.content;
        
        let parsedResult;
        try {
            parsedResult = JSON.parse(result);
        } catch (e) {
            // If JSON parsing fails, return raw result for some actions
            if (action === 'evaluate_answer') {
                parsedResult = { raw_feedback: result };
            } else {
                throw new Error('Could not parse AI response as JSON');
            }
        }

        // Log the AI generation
        const authHeader = req.headers.get('authorization');
        if (authHeader) {
            try {
                const token = authHeader.replace('Bearer ', '');
                const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
                const supabaseUrl = Deno.env.get('SUPABASE_URL');

                const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'apikey': serviceRoleKey
                    }
                });

                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    
                    await fetch(`${supabaseUrl}/rest/v1/ai_generations`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${serviceRoleKey}`,
                            'apikey': serviceRoleKey,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: userData.id,
                            generation_type: `interview_${action}`,
                            input_data: { action, questionType, jobDescription: jobDescription?.substring(0, 500) },
                            output_data: parsedResult,
                            model_used: 'anthropic/claude-3.5-sonnet',
                            tokens_used: aiData.usage?.total_tokens || 0
                        })
                    });
                }
            } catch (error) {
                console.log('Could not log AI generation:', error.message);
            }
        }

        return new Response(JSON.stringify({
            data: {
                result: parsedResult,
                action: action,
                question_type: questionType,
                timestamp: new Date().toISOString()
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Interview prep error:', error);

        const errorResponse = {
            error: {
                code: 'INTERVIEW_PREP_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});