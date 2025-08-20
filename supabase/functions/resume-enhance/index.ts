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
        const { content, type = 'enhance', section = 'general' } = await req.json();

        if (!content || content.trim().length === 0) {
            throw new Error('Content is required for AI enhancement');
        }

        const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
        if (!openRouterApiKey) {
            throw new Error('OpenRouter API key not configured');
        }

        let prompt = '';
        switch (type) {
            case 'enhance':
                prompt = `Enhance the following résumé ${section} section content to be more professional, impactful, and ATS-friendly. Keep the core information but improve the language, add action verbs, and make it more compelling:\n\n${content}\n\nReturn only the enhanced content without any explanations.`;
                break;
            case 'suggestions':
                prompt = `Provide 3-5 specific suggestions to improve this ${section} section of a résumé:\n\n${content}\n\nReturn a JSON array of improvement suggestions.`;
                break;
            case 'keywords':
                prompt = `Extract and suggest relevant keywords for this ${section} section that would improve ATS scoring:\n\n${content}\n\nReturn a JSON array of recommended keywords.`;
                break;
            default:
                throw new Error('Invalid enhancement type');
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
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (!aiResponse.ok) {
            const errorData = await aiResponse.text();
            throw new Error(`OpenRouter API error: ${errorData}`);
        }

        const aiData = await aiResponse.json();
        const enhancedContent = aiData.choices[0].message.content;

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
                            generation_type: `resume_${type}`,
                            input_data: { content, section, type },
                            output_data: { enhanced_content: enhancedContent },
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
                enhanced_content: enhancedContent,
                original_content: content,
                type: type,
                section: section
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Resume enhancement error:', error);

        const errorResponse = {
            error: {
                code: 'RESUME_ENHANCEMENT_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});