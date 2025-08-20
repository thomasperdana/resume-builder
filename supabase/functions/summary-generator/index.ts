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
        const { resumeContent, summaryType = 'professional', industryFocus } = await req.json();

        if (!resumeContent || resumeContent.trim().length === 0) {
            throw new Error('Resume content is required for summary generation');
        }

        const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
        if (!openRouterApiKey) {
            throw new Error('OpenRouter API key not configured');
        }

        let prompt = '';
        switch (summaryType) {
            case 'concise':
                prompt = `Create a concise, impactful 2-3 sentence professional summary based on this resume content. Focus on the most impressive achievements and core competencies:\n\n${resumeContent}${industryFocus ? `\n\nFocus on ${industryFocus} industry.` : ''}`;
                break;
            case 'detailed':
                prompt = `Create a detailed 4-5 sentence professional summary based on this resume content. Include key skills, experience highlights, and career objectives:\n\n${resumeContent}${industryFocus ? `\n\nFocus on ${industryFocus} industry.` : ''}`;
                break;
            case 'industry-specific':
                prompt = `Create an industry-specific professional summary tailored for ${industryFocus || 'the target industry'} based on this resume content. Emphasize relevant skills and experience:\n\n${resumeContent}`;
                break;
            default:
                prompt = `Create a professional summary based on this resume content. Make it compelling and ATS-friendly:\n\n${resumeContent}${industryFocus ? `\n\nFocus on ${industryFocus} industry.` : ''}`;
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
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!aiResponse.ok) {
            const errorData = await aiResponse.text();
            throw new Error(`OpenRouter API error: ${errorData}`);
        }

        const aiData = await aiResponse.json();
        const generatedSummary = aiData.choices[0].message.content;

        // Generate multiple variations
        const variationsPrompt = `Based on this professional summary, create 2 alternative versions with different tones and emphasis:\n\n${generatedSummary}\n\nReturn as a JSON array with format: [{"version": 1, "summary": "...", "tone": "..."}, ...]`;
        
        const variationsResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
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
                        content: variationsPrompt
                    }
                ],
                max_tokens: 800,
                temperature: 0.8
            })
        });

        let variations = [];
        if (variationsResponse.ok) {
            const variationsData = await variationsResponse.json();
            try {
                variations = JSON.parse(variationsData.choices[0].message.content);
            } catch (e) {
                console.log('Could not parse variations JSON');
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
                            generation_type: 'summary_generation',
                            input_data: { resumeContent, summaryType, industryFocus },
                            output_data: { summary: generatedSummary, variations },
                            model_used: 'anthropic/claude-3.5-sonnet',
                            tokens_used: (aiData.usage?.total_tokens || 0) + (variationsData?.usage?.total_tokens || 0)
                        })
                    });
                }
            } catch (error) {
                console.log('Could not log AI generation:', error.message);
            }
        }

        return new Response(JSON.stringify({
            data: {
                summary: generatedSummary,
                summary_type: summaryType,
                industry_focus: industryFocus,
                variations: variations,
                word_count: generatedSummary.split(' ').length
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Summary generation error:', error);

        const errorResponse = {
            error: {
                code: 'SUMMARY_GENERATION_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});