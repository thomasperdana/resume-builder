
Deno.serve(async (req) => {
    const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    };

    if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
    }

    try {
    // Get service role key from environment
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');

    if (!serviceRoleKey || !supabaseUrl) {
        return new Response(JSON.stringify({
        error: { code: 'CONFIG_ERROR', message: 'Missing Supabase configuration' }
        }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
        });
    }

    // Extract project ref from URL
    const projectRef = supabaseUrl.split('.')[0].replace('https://', '');

    // Storage API endpoint
    const storageUrl = `${supabaseUrl}/storage/v1/bucket`;

    // Prepare bucket configuration
    const bucketConfig = {
        id: 'resume-files',
        name: 'resume-files',
        public: true
    };

    // Add optional configurations
    bucketConfig.allowed_mime_types = ["application/pdf", "image/*", "text/*"];
    bucketConfig.file_size_limit = 10485760;

    // Create bucket using Storage API
    const response = await fetch(storageUrl, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${serviceRoleKey}`,
        'apikey': serviceRoleKey,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(bucketConfig)
    });

    const responseData = await response.json();

    if (!response.ok) {
        return new Response(JSON.stringify({
        error: {
            code: 'BUCKET_CREATION_FAILED',
            message: responseData.error || responseData.message || 'Failed to create bucket',
            status: response.status
        }
        }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: response.status,
        });
    }

    // Create public access policies for the bucket
    const policyQueries = [
        // Allow public to view objects in this bucket
        `CREATE POLICY "Public Access for resume-files" ON storage.objects FOR SELECT USING (bucket_id = 'resume-files');`,
        // Allow public to insert objects in this bucket
        `CREATE POLICY "Public Upload for resume-files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resume-files');`,
        // Allow public to update objects in this bucket
        `CREATE POLICY "Public Update for resume-files" ON storage.objects FOR UPDATE USING (bucket_id = 'resume-files');`,
        // Allow public to delete objects in this bucket
        `CREATE POLICY "Public Delete for resume-files" ON storage.objects FOR DELETE USING (bucket_id = 'resume-files');`
    ];

    // Execute policy creation queries
    const policyResults = [];
    for (const query of policyQueries) {
        try {
        const policyResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${serviceRoleKey}`,
            'Content-Type': 'application/json',
            'apikey': serviceRoleKey,
            },
            body: JSON.stringify({ query: query })
        });

        if (policyResponse.ok) {
            policyResults.push(`Policy created: ${query.split(' ')[2]}`);
        } else {
            const errorText = await policyResponse.text();
            policyResults.push(`Policy failed: ${query.split(' ')[2]} - ${errorText}`);
        }
        } catch (policyError) {
        policyResults.push(`Policy error: ${policyError.message}`);
        }
    }

    // Return success response
    return new Response(JSON.stringify({
        success: true,
        message: 'Bucket created successfully with public access policies',
        bucket: {
        name: 'resume-files',
        public: true,
        allowed_mime_types: ["application/pdf", "image/*", "text/*"],
        file_size_limit: 10485760,
        policies: policyResults
        }
    }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

    } catch (error) {
    return new Response(JSON.stringify({
        error: { code: 'FUNCTION_ERROR', message: error.message }
    }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
    });
    }
});
