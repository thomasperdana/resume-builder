CREATE TABLE resumes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    template_id UUID,
    summary TEXT,
    contact_info JSONB,
    experience JSONB[],
    education JSONB[],
    skills JSONB[],
    achievements JSONB[],
    certifications JSONB[],
    projects JSONB[],
    languages JSONB[],
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);