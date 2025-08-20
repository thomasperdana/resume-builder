'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Brain, FileText, Zap, Target, Users, Sparkles, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const features = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "AI Résumé Builder",
    description: "Create professional résumés with AI-powered content enhancement and real-time optimization suggestions."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Summary Generator",
    description: "Generate compelling professional summaries tailored to your experience and target industry."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI Cover Letter Writer",
    description: "Create personalized cover letters that align your experience with specific job requirements."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "ATS Optimization Tool",
    description: "Optimize your résumé for Applicant Tracking Systems with keyword analysis and scoring."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Interview Prep Assistant",
    description: "Practice with AI-generated interview questions and get feedback on your answers."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Advanced Theming",
    description: "Choose from professional themes with smooth animations and responsive design."
  }
]

export default function HomePage() {
  const { user, signIn, signUp, loading } = useAuth()
  const router = useRouter()
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    try {
      if (authMode === 'signin') {
        const { error } = await signIn(email, password)
        if (error) throw error
        toast.success('Welcome back!')
      } else {
        if (!fullName.trim()) {
          toast.error('Please enter your full name')
          return
        }
        const { error } = await signUp(email, password, fullName)
        if (error) throw error
        toast.success('Account created successfully!')
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AI Resume Builder</span>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Build 
                  <span className="text-primary"> AI-Powered</span>
                  <br />Résumés That Get
                  <span className="text-accent"> Noticed</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Create professional résumés, generate compelling summaries, write personalized cover letters, and prepare for interviews with our comprehensive AI toolkit.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI-Enhanced Content", "ATS Optimized", "Professional Templates", "Interview Prep"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-6 mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-hover animate-pulse-glow">
                <CardHeader>
                  <CardTitle className="text-center">
                    {authMode === 'signin' ? 'Welcome Back' : 'Get Started Free'}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {authMode === 'signin' 
                      ? 'Sign in to continue building your career' 
                      : 'Create your account and start building professional résumés'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as any)}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" className="space-y-4 mt-4">
                      <form onSubmit={handleAuth} className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button 
                          type="submit" 
                          className="w-full btn-glow" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Signing in...' : 'Sign In'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="signup" className="space-y-4 mt-4">
                      <form onSubmit={handleAuth} className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button 
                          type="submit" 
                          className="w-full btn-glow" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Creating account...' : 'Create Account'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive AI-powered toolkit provides all the tools you need to create, optimize, and perfect your job application materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Perfect Résumé?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully landed their dream jobs with our AI-powered résumé builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>AI-powered optimization</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Professional templates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">AI Resume Builder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AI Resume Builder by MiniMax Agent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}