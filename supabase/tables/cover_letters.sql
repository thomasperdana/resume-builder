CREATE TABLE cover_letters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    resume_id UUID,
    title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    position_title VARCHAR(255),
    hiring_manager_name VARCHAR(255),
    content TEXT NOT NULL,
    job_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);