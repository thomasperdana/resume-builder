# AI-Powered Résumé Builder - Technical Documentation

## 🏗️ Architecture Overview

This technical guide provides comprehensive documentation for developers, system administrators, and technical teams working with the AI-powered résumé builder platform.

## 📋 Table of Contents

1. [System Architecture](#system-architecture)
2. [Technology Stack](#technology-stack)
3. [Installation & Setup](#installation--setup)
4. [Database Schema](#database-schema)
5. [API Integration](#api-integration)
6. [Frontend Components](#frontend-components)
7. [Theme System](#theme-system)
8. [AI Integration](#ai-integration)
9. [Deployment Guide](#deployment-guide)
10. [Security Implementation](#security-implementation)
11. [Performance Optimization](#performance-optimization)
12. [Monitoring & Maintenance](#monitoring--maintenance)

## 🏛️ System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    Frontend     │    │    Backend      │    │   External APIs │
│   (React App)   │◄──►│   (Supabase)    │◄──►│   (OpenRouter)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│                 │    │                 │    │                 │
│ • React 18      │    │ • PostgreSQL    │    │ • LLM Models    │
│ • TypeScript    │    │ • Auth Service  │    │ • AI Processing │
│ • Tailwind CSS  │    │ • Edge Functions│    │ • Content Gen   │
│ • Next.js       │    │ • Storage       │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Component Architecture

```
App/
├── Dashboard/
│   ├── Navigation
│   ├── Quick Actions
│   └── Recent Documents
├── Resume Builder/
│   ├── Form Components
│   ├── Real-time Preview
│   ├── Template Engine
│   └── AI Integration
├── AI Tools/
│   ├── Summary Generator
│   ├── Cover Letter Creator
│   ├── ATS Optimizer
│   └── Interview Prep
└── Shared/
    ├── Theme Provider
    ├── Auth Components
    └── UI Components
```

## 🛠️ Technology Stack

### Frontend Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 3.x
- **UI Components:** Custom component library
- **State Management:** React Context + useState/useReducer
- **Animation:** CSS transitions and Tailwind animations
- **Build Tool:** Turbo (Turborepo)

### Backend Stack
- **Platform:** Supabase
- **Database:** PostgreSQL 15
- **Authentication:** Supabase Auth (JWT-based)
- **Storage:** Supabase Storage
- **Edge Functions:** Deno runtime
- **Real-time:** Supabase Realtime

### External Services
- **AI Provider:** OpenRouter API
- **Models:** GPT-4, Claude-3, and other LLMs
- **Deployment:** MiniMax hosting platform
- **Version Control:** GitHub

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and pnpm
- Git
- Supabase account
- OpenRouter API key

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/thomasperdana/resume-builder.git
cd resume-builder

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Configure environment variables
# Edit .env.local with your credentials
```

### Environment Variables

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenRouter AI Configuration
OPENROUTER_API_KEY=your_openrouter_api_key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Run tests
pnpm test
```

## 🗄️ Database Schema

### Core Tables

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  theme_preference VARCHAR(50) DEFAULT 'dark-blue',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Resumes Table
```sql
CREATE TABLE resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content JSONB NOT NULL,
  template_id VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Cover Letters Table
```sql
CREATE TABLE cover_letters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  resume_id UUID REFERENCES resumes(id) ON DELETE SET NULL,
  company_name VARCHAR(255),
  position_title VARCHAR(255),
  content TEXT,
  job_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### AI Interactions Table
```sql
CREATE TABLE ai_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tool_type VARCHAR(100) NOT NULL, -- 'summary', 'cover_letter', 'ats_optimization', 'interview_prep'
  input_data JSONB,
  output_data JSONB,
  model_used VARCHAR(100),
  tokens_used INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Indexes and Constraints

```sql
-- Indexes for performance
CREATE INDEX idx_resumes_user_id ON resumes(user_id);
CREATE INDEX idx_resumes_updated_at ON resumes(updated_at DESC);
CREATE INDEX idx_cover_letters_user_id ON cover_letters(user_id);
CREATE INDEX idx_ai_interactions_user_id ON ai_interactions(user_id);
CREATE INDEX idx_ai_interactions_tool_type ON ai_interactions(tool_type);

-- Row Level Security (RLS)
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE cover_letters ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_interactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access their own resumes" ON resumes
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only access their own cover letters" ON cover_letters
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only access their own AI interactions" ON ai_interactions
  FOR ALL USING (auth.uid() = user_id);
```

## 🔌 API Integration

### Supabase Client Configuration

```typescript
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
```

### OpenRouter Integration

```typescript
// lib/ai/openrouter.ts
interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
  usage: {
    total_tokens: number
  }
}

export async function callOpenRouter(
  prompt: string,
  model: string = 'anthropic/claude-3-haiku',
  maxTokens: number = 1000
): Promise<OpenRouterResponse> {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL,
      'X-Title': 'AI Resume Builder'
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature: 0.7
    })
  })

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.statusText}`)
  }

  return response.json()
}
```

### Edge Functions

#### AI Summary Generator Function
```typescript
// supabase/functions/generate-summary/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const { resumeContent, summaryType } = await req.json()
    
    const prompt = `Generate a ${summaryType} professional summary based on this resume: ${resumeContent}`
    
    const aiResponse = await callOpenRouter(prompt)
    
    return new Response(
      JSON.stringify({ summary: aiResponse.choices[0].message.content }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```

## 🎨 Frontend Components

### Component Structure

```
components/
├── ui/                    # Basic UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── ThemeToggle.tsx
├── resume/                # Resume-specific components
│   ├── ResumeBuilder.tsx
│   ├── ResumePreview.tsx
│   ├── SectionEditor.tsx
│   └── TemplateSelector.tsx
├── ai-tools/              # AI feature components
│   ├── SummaryGenerator.tsx
│   ├── CoverLetterCreator.tsx
│   ├── ATSOptimizer.tsx
│   └── InterviewPrep.tsx
└── dashboard/             # Dashboard components
    ├── DashboardLayout.tsx
    ├── QuickActions.tsx
    └── RecentDocuments.tsx
```

### Example Component: Resume Builder

```tsx
// components/resume/ResumeBuilder.tsx
import { useState, useCallback } from 'react'
import { ResumePreview } from './ResumePreview'
import { SectionEditor } from './SectionEditor'
import { useResume } from '@/hooks/useResume'

interface ResumeBuilderProps {
  resumeId?: string
}

export function ResumeBuilder({ resumeId }: ResumeBuilderProps) {
  const { resume, updateResume, saveResume } = useResume(resumeId)
  const [activeSection, setActiveSection] = useState('contact')

  const handleSectionUpdate = useCallback((section: string, data: any) => {
    updateResume({ [section]: data })
  }, [updateResume])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Editor Panel */}
      <div className="space-y-6">
        <SectionEditor
          section={activeSection}
          data={resume?.[activeSection]}
          onUpdate={(data) => handleSectionUpdate(activeSection, data)}
        />
      </div>
      
      {/* Preview Panel */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ResumePreview resume={resume} />
      </div>
    </div>
  )
}
```

## 🎭 Theme System

### Theme Configuration

```typescript
// lib/theme/config.ts
export const themes = {
  'dark-blue': {
    name: 'Dark Blue Shader',
    colors: {
      background: 'from-slate-900 to-blue-900',
      primary: 'rgb(56, 189, 248)', // Electric blue
      secondary: 'rgb(30, 41, 59)',
      text: 'rgb(248, 250, 252)',
      accent: 'rgb(14, 165, 233)'
    }
  },
  'light-green': {
    name: 'Light Green Shader',
    colors: {
      background: 'from-green-50 to-mint-100',
      primary: 'rgb(34, 197, 94)', // Vibrant green
      secondary: 'rgb(243, 244, 246)',
      text: 'rgb(17, 24, 39)',
      accent: 'rgb(22, 163, 74)'
    }
  }
}
```

### Theme Provider Implementation

```tsx
// components/providers/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark-blue' | 'light-green'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark-blue')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark-blue' ? 'light-green' : 'dark-blue')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### CSS Animation Configuration

```css
/* styles/globals.css */
:root {
  --transition-theme: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-hover: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark-blue"] {
  --bg-primary: theme(colors.slate.900);
  --bg-secondary: theme(colors.blue.900);
  --text-primary: theme(colors.slate.100);
  --accent-primary: theme(colors.blue.400);
}

[data-theme="light-green"] {
  --bg-primary: theme(colors.green.50);
  --bg-secondary: theme(colors.mint.100);
  --text-primary: theme(colors.gray.900);
  --accent-primary: theme(colors.green.500);
}

/* Smooth theme transitions */
* {
  transition: var(--transition-theme);
}

/* Hover animations */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

## 🤖 AI Integration

### AI Service Architecture

```typescript
// lib/ai/services.ts
export class AIService {
  private apiKey: string
  private baseUrl: string = 'https://openrouter.ai/api/v1'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async generateSummary(
    resumeContent: string,
    type: 'concise' | 'detailed' | 'industry-specific',
    industry?: string
  ): Promise<string> {
    const prompt = this.buildSummaryPrompt(resumeContent, type, industry)
    const response = await this.callLLM(prompt)
    return response.choices[0].message.content
  }

  async generateCoverLetter(
    resumeContent: string,
    jobDescription: string,
    companyName: string,
    hiringManager?: string
  ): Promise<string> {
    const prompt = this.buildCoverLetterPrompt(
      resumeContent,
      jobDescription,
      companyName,
      hiringManager
    )
    const response = await this.callLLM(prompt, 'anthropic/claude-3-sonnet')
    return response.choices[0].message.content
  }

  async optimizeForATS(
    resumeContent: string,
    jobDescription: string
  ): Promise<{
    score: number
    missingKeywords: string[]
    suggestions: string[]
  }> {
    const prompt = this.buildATSPrompt(resumeContent, jobDescription)
    const response = await this.callLLM(prompt)
    return JSON.parse(response.choices[0].message.content)
  }

  async generateInterviewQuestions(
    jobDescription: string
  ): Promise<{
    behavioral: string[]
    technical: string[]
    situational: string[]
  }> {
    const prompt = this.buildInterviewQuestionsPrompt(jobDescription)
    const response = await this.callLLM(prompt)
    return JSON.parse(response.choices[0].message.content)
  }

  private async callLLM(
    prompt: string,
    model: string = 'anthropic/claude-3-haiku',
    maxTokens: number = 1500
  ) {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error(`AI service error: ${response.statusText}`)
    }

    return response.json()
  }

  private buildSummaryPrompt(
    resumeContent: string,
    type: string,
    industry?: string
  ): string {
    const typeInstructions = {
      'concise': 'Write a 2-3 sentence professional summary',
      'detailed': 'Write a 4-5 sentence comprehensive summary',
      'industry-specific': `Write a summary tailored for the ${industry} industry`
    }

    return `
      ${typeInstructions[type]} based on this resume:
      
      ${resumeContent}
      
      Focus on key achievements, skills, and value proposition.
      Make it compelling and professional.
    `
  }

  // Additional prompt building methods...
}
```

### AI Hooks for React Components

```typescript
// hooks/useAI.ts
import { useState } from 'react'
import { AIService } from '@/lib/ai/services'

export function useAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const ai = new AIService(process.env.NEXT_PUBLIC_OPENROUTER_API_KEY!)

  const generateSummary = async (
    resumeContent: string,
    type: 'concise' | 'detailed' | 'industry-specific',
    industry?: string
  ) => {
    setLoading(true)
    setError(null)
    
    try {
      const summary = await ai.generateSummary(resumeContent, type, industry)
      return summary
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const generateCoverLetter = async (
    resumeContent: string,
    jobDescription: string,
    companyName: string,
    hiringManager?: string
  ) => {
    setLoading(true)
    setError(null)
    
    try {
      const coverLetter = await ai.generateCoverLetter(
        resumeContent,
        jobDescription,
        companyName,
        hiringManager
      )
      return coverLetter
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    generateSummary,
    generateCoverLetter,
    loading,
    error
  }
}
```

## 🚀 Deployment Guide

### Production Build

```bash
# Install dependencies
pnpm install

# Build the application
pnpm build

# Start production server
pnpm start
```

### Environment Setup

```bash
# Production environment variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENROUTER_API_KEY=your_openrouter_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_ENV=production
```

### Supabase Setup

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-id

# Push database changes
supabase db push

# Deploy edge functions
supabase functions deploy
```

### Performance Optimizations

```typescript
// next.config.js
module.exports = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['your-supabase-url.supabase.co']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}
```

## 🔒 Security Implementation

### Authentication Flow

```typescript
// lib/auth/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session }
  } = await supabase.auth.getSession()

  // Protected routes
  const protectedPaths = ['/dashboard', '/resume-builder', '/ai-tools']
  const isProtectedPath = protectedPaths.some(path => 
    req.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
```

### Data Validation

```typescript
// lib/validation/schemas.ts
import { z } from 'zod'

export const resumeSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  contact: z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email format'),
    phone: z.string().optional(),
    location: z.string().optional(),
    linkedin: z.string().url().optional(),
    portfolio: z.string().url().optional()
  }),
  summary: z.string().max(1000).optional(),
  experience: z.array(z.object({
    company: z.string().min(1, 'Company name is required'),
    position: z.string().min(1, 'Position is required'),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    description: z.string().optional(),
    achievements: z.array(z.string()).default([])
  })).default([]),
  education: z.array(z.object({
    institution: z.string().min(1, 'Institution is required'),
    degree: z.string().min(1, 'Degree is required'),
    field: z.string().optional(),
    graduationDate: z.string(),
    gpa: z.number().min(0).max(4).optional()
  })).default([]),
  skills: z.array(z.string()).default([])
})

export const coverLetterSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  positionTitle: z.string().min(1, 'Position title is required'),
  hiringManager: z.string().optional(),
  jobDescription: z.string().min(1, 'Job description is required'),
  resumeContent: z.string().min(1, 'Resume content is required')
})
```

### Rate Limiting

```typescript
// lib/rate-limit/config.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Configure rate limiting for AI endpoints
export const aiRateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 requests per minute
  analytics: true
})

export const generalRateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 requests per minute
  analytics: true
})
```

## 📊 Performance Optimization

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const ResumeBuilder = dynamic(() => import('@/components/resume/ResumeBuilder'), {
  loading: () => <div>Loading Resume Builder...</div>,
  ssr: false
})

const AITools = dynamic(() => import('@/components/ai-tools'), {
  loading: () => <div>Loading AI Tools...</div>
})
```

### Caching Strategy

```typescript
// lib/cache/strategy.ts
export const cacheConfig = {
  resumes: {
    ttl: 300, // 5 minutes
    maxSize: 100
  },
  aiResponses: {
    ttl: 3600, // 1 hour
    maxSize: 50
  },
  userPreferences: {
    ttl: 86400, // 24 hours
    maxSize: 1000
  }
}

// React Query configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  }
})
```

### Image Optimization

```typescript
// components/ui/OptimizedImage.tsx
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-all duration-300
          ${isLoading ? 'blur-sm' : 'blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        quality={85}
        priority={false}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      />
    </div>
  )
}
```

## 📈 Monitoring & Maintenance

### Error Tracking

```typescript
// lib/monitoring/error-tracking.ts
export class ErrorTracker {
  static logError(error: Error, context?: Record<string, any>) {
    console.error('Application Error:', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    })

    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(error, context)
    }
  }

  private static async sendToErrorService(error: Error, context?: Record<string, any>) {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: {
            message: error.message,
            stack: error.stack
          },
          context,
          timestamp: new Date().toISOString()
        })
      })
    } catch (err) {
      console.error('Failed to send error to tracking service:', err)
    }
  }
}
```

### Health Checks

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    // Check database connection
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    
    const { error } = await supabase
      .from('users')
      .select('count')
      .limit(1)
    
    if (error) throw error

    // Check AI service
    const aiHealthCheck = await fetch('https://openrouter.ai/api/v1/models', {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
      }
    })
    
    if (!aiHealthCheck.ok) throw new Error('AI service unavailable')

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'operational',
        ai: 'operational'
      }
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
```

### Analytics Implementation

```typescript
// lib/analytics/tracking.ts
export class Analytics {
  static trackPageView(page: string) {
    if (typeof window !== 'undefined') {
      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      })
    }
  }

  static trackAIUsage(tool: string, model: string, tokensUsed: number) {
    gtag('event', 'ai_tool_usage', {
      tool_name: tool,
      model_used: model,
      tokens_consumed: tokensUsed
    })
  }

  static trackResumeAction(action: string, resumeId: string) {
    gtag('event', 'resume_action', {
      action_type: action,
      resume_id: resumeId
    })
  }

  static trackThemeChange(fromTheme: string, toTheme: string) {
    gtag('event', 'theme_change', {
      from_theme: fromTheme,
      to_theme: toTheme
    })
  }
}
```

## 🛠️ Development Workflow

### Git Workflow

```bash
# Feature development
git checkout -b feature/new-ai-tool
git add .
git commit -m "feat: add new AI optimization tool"
git push origin feature/new-ai-tool

# Create pull request
# After review and approval, merge to main
```

### Testing Strategy

```bash
# Run all tests
pnpm test

# Run specific test suites
pnpm test:unit
pnpm test:integration
pnpm test:e2e

# Test coverage
pnpm test:coverage
```

### Code Quality

```bash
# Linting
pnpm lint
pnpm lint:fix

# Type checking
pnpm type-check

# Formatting
pnpm format

# Pre-commit hooks (via Husky)
npx husky add .husky/pre-commit "pnpm lint && pnpm type-check"
```

---

## 📞 Support & Maintenance

For technical support, deployment issues, or feature requests:

1. **Documentation:** Check this technical guide first
2. **Repository Issues:** Create issues in the GitHub repository
3. **Emergency Support:** Contact the development team for critical issues

**Technical Stack Versions:**
- Next.js: 14.x
- React: 18.x
- TypeScript: 5.x
- Supabase: Latest
- Tailwind CSS: 3.x

**Last Updated:** August 2025  
**Version:** 1.0.0  
**Author:** MiniMax Agent