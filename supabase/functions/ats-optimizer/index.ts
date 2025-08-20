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
        const { resumeContent, jobDescription, analysisType = 'full' } = await req.json();

        if (!resumeContent || !jobDescription) {
            throw new Error('Resume content and job description are required for ATS optimization');
        }

        const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
        if (!openRouterApiKey) {
            throw new Error('OpenRouter API key not configured');
        }

        let prompt = '';
        switch (analysisType) {
            case 'keywords':
                prompt = `Analyze this job description and extract the most important keywords and phrases that should be included in a resume for ATS optimization:\n\nJOB DESCRIPTION:\n${jobDescription}\n\nReturn a JSON object with: {"critical_keywords": [], "important_keywords": [], "technical_skills": [], "soft_skills": []}`;
                break;
            case 'gaps':
                prompt = `Compare this resume with the job description and identify gaps or missing elements:\n\nRESUME:\n${resumeContent}\n\nJOB DESCRIPTION:\n${jobDescription}\n\nReturn a JSON object with: {"missing_keywords": [], "missing_skills": [], "weak_areas": [], "recommendations": []}`;
                break;
            case 'score':
                prompt = `Analyze how well this resume matches the job description and provide an ATS compatibility score:\n\nRESUME:\n${resumeContent}\n\nJOB DESCRIPTION:\n${jobDescription}\n\nReturn a JSON object with: {"ats_score": number (0-100), "keyword_match_percentage": number, "strengths": [], "improvements": [], "critical_issues": []}`;
                break;
            default:
                prompt = `Perform a comprehensive ATS optimization analysis comparing this resume with the job description:\n\nRESUME:\n${resumeContent}\n\nJOB DESCRIPTION:\n${jobDescription}\n\nAnalyze and return a JSON object with:\n{\n  "ats_score": number (0-100),\n  "keyword_analysis": {\n    "matched_keywords": [],\n    "missing_keywords": [],\n    "keyword_density": number\n  },\n  "sections_analysis": {\n    "experience": {"score": number, "suggestions": []},\n    "skills": {"score": number, "suggestions": []},\n    "education": {"score": number, "suggestions": []},\n    "summary": {"score": number, "suggestions": []}\n  },\n  "formatting_issues": [],\n  "improvement_recommendations": [],\n  "action_items": []\n}`;
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
                max_tokens: 2000,
                temperature: 0.3
            })
        });

        if (!aiResponse.ok) {
            const errorData = await aiResponse.text();
            throw new Error(`OpenRouter API error: ${errorData}`);
        }

        const aiData = await aiResponse.json();
        const analysisResult = aiData.choices[0].message.content;
        
        let parsedAnalysis;
        try {
            parsedAnalysis = JSON.parse(analysisResult);
        } catch (e) {
            // If JSON parsing fails, return raw analysis
            parsedAnalysis = { raw_analysis: analysisResult };
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
                            generation_type: `ats_${analysisType}`,
                            input_data: { analysisType, jobDescription: jobDescription.substring(0, 500) },
                            output_data: parsedAnalysis,
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
                analysis: parsedAnalysis,
                analysis_type: analysisType,
                timestamp: new Date().toISOString()
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('ATS optimization error:', error);

        const errorResponse = {
            error: {
                code: 'ATS_OPTIMIZATION_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});