'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Target, ArrowLeft, Sparkles, RefreshCw, AlertCircle, CheckCircle, TrendingUp, Search, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

interface ATSAnalysis {
  ats_score?: number
  keyword_analysis?: {
    matched_keywords: string[]
    missing_keywords: string[]
    keyword_density: number
  }
  sections_analysis?: {
    experience: { score: number; suggestions: string[] }
    skills: { score: number; suggestions: string[] }
    education: { score: number; suggestions: string[] }
    summary: { score: number; suggestions: string[] }
  }
  formatting_issues?: string[]
  improvement_recommendations?: string[]
  action_items?: string[]
  critical_keywords?: string[]
  important_keywords?: string[]
  technical_skills?: string[]
  soft_skills?: string[]
  missing_skills?: string[]
  weak_areas?: string[]
  recommendations?: string[]
  raw_analysis?: string
}

export default function ATSOptimizerPage() {
  const { user } = useAuth()
  const [resumeContent, setResumeContent] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [analysisType, setAnalysisType] = useState('full')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<ATSAnalysis | null>(null)

  const handleAnalyze = async () => {
    if (!resumeContent.trim() || !jobDescription.trim()) {
      toast.error('Please provide both résumé content and job description')
      return
    }

    if (!user) {
      toast.error('Please sign in to use this feature')
      return
    }

    setIsAnalyzing(true)
    try {
      const { data, error } = await supabase.functions.invoke('ats-optimizer', {
        body: {
          resumeContent,
          jobDescription,
          analysisType
        }
      })

      if (error) throw error

      setAnalysis(data.data.analysis)
      toast.success('ATS analysis completed successfully!')
    } catch (error: any) {
      console.error('Error analyzing résumé:', error)
      toast.error(error.message || 'Failed to analyze résumé')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100'
    if (score >= 60) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">ATS Optimization Tool</span>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            ATS Optimization & Keyword Analysis
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Optimize your résumé for Applicant Tracking Systems. Get keyword analysis, compatibility scoring, and improvement suggestions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Input Documents
                </CardTitle>
                <CardDescription>
                  Provide your résumé and target job description for analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs value={analysisType} onValueChange={setAnalysisType}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="full">Full Analysis</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="gaps">Gaps</TabsTrigger>
                    <TabsTrigger value="score">Score</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Résumé Content *</label>
                    <Textarea
                      placeholder="Paste your current résumé content here..."
                      value={resumeContent}
                      onChange={(e) => setResumeContent(e.target.value)}
                      className="min-h-[200px] resize-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Description *</label>
                    <Textarea
                      placeholder="Paste the complete job description including requirements, responsibilities, and qualifications..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="min-h-[200px] resize-none"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !resumeContent.trim() || !jobDescription.trim()}
                  className="w-full btn-glow"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Target className="h-4 w-4 mr-2" />
                      Analyze ATS Compatibility
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {analysis ? (
              <>
                {/* ATS Score */}
                {analysis.ats_score !== undefined && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>ATS Compatibility Score</span>
                        <div className={`text-2xl font-bold ${getScoreColor(analysis.ats_score)}`}>
                          {analysis.ats_score}/100
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={analysis.ats_score} className="w-full mb-4" />
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className={`p-3 rounded-lg ${analysis.ats_score >= 80 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
                          <div className="font-semibold">Excellent</div>
                          <div className="text-xs">80-100</div>
                        </div>
                        <div className={`p-3 rounded-lg ${analysis.ats_score >= 60 && analysis.ats_score < 80 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100'}`}>
                          <div className="font-semibold">Good</div>
                          <div className="text-xs">60-79</div>
                        </div>
                        <div className={`p-3 rounded-lg ${analysis.ats_score < 60 ? 'bg-red-100 text-red-800' : 'bg-gray-100'}`}>
                          <div className="font-semibold">Needs Work</div>
                          <div className="text-xs">0-59</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Keyword Analysis */}
                {analysis.keyword_analysis && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Search className="h-5 w-5 mr-2" />
                        Keyword Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-green-600 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Matched Keywords ({analysis.keyword_analysis.matched_keywords.length})
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {analysis.keyword_analysis.matched_keywords.map((keyword, index) => (
                              <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600 mb-2 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            Missing Keywords ({analysis.keyword_analysis.missing_keywords.length})
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {analysis.keyword_analysis.missing_keywords.map((keyword, index) => (
                              <Badge key={index} variant="destructive" className="bg-red-100 text-red-800">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Keyword Density</span>
                          <span className="font-medium">{analysis.keyword_analysis.keyword_density}%</span>
                        </div>
                        <Progress value={analysis.keyword_analysis.keyword_density} className="mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Section Analysis */}
                {analysis.sections_analysis && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Section Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(analysis.sections_analysis).map(([section, data]) => (
                          <div key={section} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium capitalize">{section}</h4>
                              <div className={`text-lg font-bold ${getScoreColor(data.score)}`}>
                                {data.score}/100
                              </div>
                            </div>
                            <Progress value={data.score} className="mb-3" />
                            {data.suggestions.length > 0 && (
                              <ul className="text-sm space-y-1">
                                {data.suggestions.map((suggestion, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-muted-foreground">{suggestion}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Improvement Recommendations */}
                {analysis.improvement_recommendations && analysis.improvement_recommendations.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Sparkles className="h-5 w-5 mr-2" />
                        Improvement Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {analysis.improvement_recommendations.map((recommendation, index) => (
                          <li key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm">{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Raw Analysis Fallback */}
                {analysis.raw_analysis && !analysis.ats_score && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Analysis Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm">{analysis.raw_analysis}</pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ATS Optimization Tips</CardTitle>
                  <CardDescription>
                    Best practices for ATS-friendly résumés
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Use exact keywords:</strong> Match job description terminology precisely</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Standard formatting:</strong> Avoid tables, images, and complex layouts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Include all variations:</strong> Use both acronyms and full terms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Section headers:</strong> Use standard headings like "Experience" and "Skills"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Complete job description:</strong> Paste the entire posting for best results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}