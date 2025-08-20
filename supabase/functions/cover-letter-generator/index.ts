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
        const { resumeContent, jobDescription, companyName, positionTitle, hiringManagerName } = await req.json();

        if (!resumeContent || !jobDescription || !companyName || !positionTitle) {
            throw new Error('Resume content, job description, company name, and position title are required');
        }

        const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');
        if (!openRouterApiKey) {
            throw new Error('OpenRouter API key not configured');
        }

        const prompt = `Create a personalized cover letter based on the following information:

RESUME CONTENT:
${resumeContent}

JOB DESCRIPTION:
${jobDescription}

COMPANY: ${companyName}
POSITION: ${positionTitle}
${hiringManagerName ? `HIRING MANAGER: ${hiringManagerName}` : ''}

Write a compelling cover letter that:
1. Opens with enthusiasm for the specific role and company
2. Highlights relevant experience and skills from the resume that match the job requirements
3. Demonstrates knowledge of the company and role
4. Explains why the candidate is a perfect fit
5. Closes with a strong call to action

Make it professional, engaging, and tailored specifically to this opportunity. The tone should be confident but not arrogant.`;

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
                max_tokens: 1500,
                temperature: 0.7
            })
        });

        if (!aiResponse.ok) {
            const errorData = await aiResponse.text();
            throw new Error(`OpenRouter API error: ${errorData}`);
        }

        const aiData = await aiResponse.json();
        const generatedCoverLetter = aiData.choices[0].message.content;

        // Save cover letter to database
        const authHeader = req.headers.get('authorization');
        let coverLetterId = null;
        
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
                    
                    // Save cover letter
                    const coverLetterResponse = await fetch(`${supabaseUrl}/rest/v1/cover_letters`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${serviceRoleKey}`,
                            'apikey': serviceRoleKey,
                            'Content-Type': 'application/json',
                            'Prefer': 'return=representation'
                        },
                        body: JSON.stringify({
                            user_id: userData.id,
                            title: `Cover Letter for ${positionTitle} at ${companyName}`,
                            company_name: companyName,
                            position_title: positionTitle,
                            hiring_manager_name: hiringManagerName,
                            content: generatedCoverLetter,
                            job_description: jobDescription
                        })
                    });

                    if (coverLetterResponse.ok) {
                        const coverLetterData = await coverLetterResponse.json();
                        coverLetterId = coverLetterData[0].id;
                    }

                    // Log AI generation
                    await fetch(`${supabaseUrl}/rest/v1/ai_generations`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${serviceRoleKey}`,
                            'apikey': serviceRoleKey,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: userData.id,
                            generation_type: 'cover_letter',
                            input_data: { companyName, positionTitle, hiringManagerName, jobDescription },
                            output_data: { cover_letter: generatedCoverLetter },
                            model_used: 'anthropic/claude-3.5-sonnet',
                            tokens_used: aiData.usage?.total_tokens || 0
                        })
                    });
                }
            } catch (error) {
                console.log('Could not save cover letter or log AI generation:', error.message);
            }
        }

        return new Response(JSON.stringify({
            data: {
                cover_letter: generatedCoverLetter,
                cover_letter_id: coverLetterId,
                company_name: companyName,
                position_title: positionTitle,
                word_count: generatedCoverLetter.split(' ').length,
                character_count: generatedCoverLetter.length
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Cover letter generation error:', error);

        const errorResponse = {
            error: {
                code: 'COVER_LETTER_GENERATION_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});