'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain, 
  FileText, 
  Zap, 
  Target, 
  Users, 
  Settings, 
  LogOut,
  Plus,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

interface DashboardStats {
  resumeCount: number
  coverLetterCount: number
  aiGenerationsCount: number
}

export default function DashboardPage() {
  const { user, signOut, loading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({ resumeCount: 0, coverLetterCount: 0, aiGenerationsCount: 0 })
  const [recentResumes, setRecentResumes] = useState<any[]>([])
  const [loadingStats, setLoadingStats] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user])

  const loadDashboardData = async () => {
    try {
      setLoadingStats(true)

      // Get stats
      const [resumesResult, coverLettersResult, aiGenerationsResult] = await Promise.all([
        supabase.from('resumes').select('id', { count: 'exact' }).eq('user_id', user!.id),
        supabase.from('cover_letters').select('id', { count: 'exact' }).eq('user_id', user!.id),
        supabase.from('ai_generations').select('id', { count: 'exact' }).eq('user_id', user!.id)
      ])

      setStats({
        resumeCount: resumesResult.count || 0,
        coverLetterCount: coverLettersResult.count || 0,
        aiGenerationsCount: aiGenerationsResult.count || 0
      })

      // Get recent resumes
      const { data: resumes } = await supabase
        .from('resumes')
        .select('*')
        .eq('user_id', user!.id)
        .order('updated_at', { ascending: false })
        .limit(5)

      setRecentResumes(resumes || [])
    } catch (error: any) {
      console.error('Error loading dashboard data:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoadingStats(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Signed out successfully')
      router.push('/')
    } catch (error: any) {
      toast.error('Error signing out')
    }
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  const quickActions = [
    {
      title: 'Résumé Builder',
      description: 'Create and edit professional résumés',
      icon: <FileText className="h-6 w-6" />,
      href: '/resume-builder',
      color: 'bg-blue-500'
    },
    {
      title: 'AI Summary Generator',
      description: 'Generate compelling professional summaries',
      icon: <Brain className="h-6 w-6" />,
      href: '/summary-generator',
      color: 'bg-purple-500'
    },
    {
      title: 'Cover Letter Writer',
      description: 'Create personalized cover letters',
      icon: <Zap className="h-6 w-6" />,
      href: '/cover-letter-generator',
      color: 'bg-green-500'
    },
    {
      title: 'ATS Optimizer',
      description: 'Optimize for Applicant Tracking Systems',
      icon: <Target className="h-6 w-6" />,
      href: '/ats-optimizer',
      color: 'bg-orange-500'
    },
    {
      title: 'Interview Prep',
      description: 'Practice with AI-generated questions',
      icon: <Users className="h-6 w-6" />,
      href: '/interview-prep',
      color: 'bg-pink-500'
    }
  ]

  const statCards = [
    {
      title: 'Résumés Created',
      value: stats.resumeCount,
      icon: <FileText className="h-5 w-5" />,
      change: '+2 this week'
    },
    {
      title: 'Cover Letters',
      value: stats.coverLetterCount,
      icon: <Zap className="h-5 w-5" />,
      change: '+1 this week'
    },
    {
      title: 'AI Generations',
      value: stats.aiGenerationsCount,
      icon: <Brain className="h-5 w-5" />,
      change: '+5 this week'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AI Resume Builder</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                Welcome, {user.user_metadata?.full_name || user.email}
              </span>
              <ThemeSwitcher />
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome to Your Career Dashboard
          </h1>
          <p className="text-muted-foreground">
            Create, optimize, and perfect your job application materials with our AI-powered tools.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {statCards.map((stat, index) => (
            <Card key={stat.title} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{loadingStats ? '-' : stat.value}</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Access all AI-powered tools to build your career materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={action.title} href={action.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-md text-white ${action.color}`}>
                            {action.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{action.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {action.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Résumés
                </CardTitle>
                <CardDescription>
                  Your latest résumé projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loadingStats ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : recentResumes.length > 0 ? (
                  <div className="space-y-3">
                    {recentResumes.map((resume) => (
                      <div key={resume.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="p-1 bg-primary/10 rounded text-primary">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{resume.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Updated {new Date(resume.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Link href="/resume-builder">
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Résumé
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-3">
                      No résumés yet
                    </p>
                    <Link href="/resume-builder">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Résumé
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Getting Started</h3>
                  <p className="text-sm text-muted-foreground">
                    You're on your way to creating professional job application materials. 
                    Try the AI Summary Generator to get started!
                  </p>
                </div>
                <Link href="/summary-generator">
                  <Button className="ml-auto">
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}