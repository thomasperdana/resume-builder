CREATE TABLE ai_generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    generation_type VARCHAR(100) NOT NULL,
    input_data JSONB NOT NULL,
    output_data JSONB NOT NULL,
    model_used VARCHAR(100),
    tokens_used INTEGER,
    processing_time_ms INTEGER,
    status VARCHAR(50) DEFAULT 'completed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);