import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/lib/auth'
import { ThemeProvider } from '@/lib/theme'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'AI Resume Builder - Create Professional Resumes with AI',
  description: 'Build stunning resumes with AI-powered tools. Generate summaries, cover letters, optimize for ATS, and prepare for interviews.'
}

export const viewport: Viewport = {
  maximumScale: 1
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen transition-colors duration-500`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
              {children}
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'hsl(var(--card))',
                  color: 'hsl(var(--card-foreground))',
                  border: '1px solid hsl(var(--border))',
                },
              }}
            />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}