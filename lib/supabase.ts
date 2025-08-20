import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface UserProfile {
  id: string
  user_id: string
  email: string
  full_name?: string
  phone?: string
  location?: string
  linkedin_url?: string
  portfolio_url?: string
  created_at: string
  updated_at: string
}

export interface Resume {
  id: string
  user_id: string
  title: string
  template_id?: string
  summary?: string
  contact_info?: any
  experience?: any[]
  education?: any[]
  skills?: any[]
  achievements?: any[]
  certifications?: any[]
  projects?: any[]
  languages?: any[]
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface ResumeTemplate {
  id: string
  name: string
  description?: string
  category?: string
  design_config: any
  css_styles?: string
  is_premium: boolean
  is_active: boolean
  preview_image_url?: string
  created_at: string
}

export interface CoverLetter {
  id: string
  user_id: string
  resume_id?: string
  title: string
  company_name?: string
  position_title?: string
  hiring_manager_name?: string
  content: string
  job_description?: string
  created_at: string
  updated_at: string
}

export interface AIGeneration {
  id: string
  user_id: string
  generation_type: string
  input_data: any
  output_data: any
  model_used?: string
  tokens_used?: number
  processing_time_ms?: number
  status: string
  created_at: string
}