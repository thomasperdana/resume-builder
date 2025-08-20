'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Users, ArrowLeft, Sparkles, RefreshCw, MessageSquare, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

interface InterviewQuestion {
  question: string
  type: 'behavioral' | 'technical' | 'situational'
  difficulty: 'easy' | 'medium' | 'hard'
  focus_area: string
}

interface AnswerEvaluation {
  overall_score: number
  strengths: string[]
  improvements: string[]
  structure_feedback: string
  content_feedback: string
  suggestions: string[]
  raw_feedback?: string
}

export default function InterviewPrepPage() {
  const { user } = useAuth()
  const [jobDescription, setJobDescription] = useState('')
  const [resumeContent, setResumeContent] = useState('')
  const [questionType, setQuestionType] = useState('mixed')
  const [answer, setAnswer] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState<InterviewQuestion | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [questions, setQuestions] = useState<InterviewQuestion[]>([])
  const [evaluation, setEvaluation] = useState<AnswerEvaluation | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleGenerateQuestions = async () => {
    if (!jobDescription.trim()) {
      toast.error('Please provide a job description')
      return
    }

    if (!user) {
      toast.error('Please sign in to use this feature')
      return
    }

    setIsGenerating(true)
    try {
      const { data, error } = await supabase.functions.invoke('interview-prep', {
        body: {
          action: 'generate_questions',
          jobDescription,
          resumeContent: resumeContent || undefined,
          questionType
        }
      })

      if (error) throw error

      setQuestions(data.data.result)
      setSelectedQuestion(data.data.result[0] || null)
      setCurrentQuestionIndex(0)
      setAnswer('')
      setEvaluation(null)
      toast.success(`Generated ${data.data.result.length} interview questions!`)
    } catch (error: any) {
      console.error('Error generating questions:', error)
      toast.error(error.message || 'Failed to generate questions')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleEvaluateAnswer = async () => {
    if (!answer.trim()) {
      toast.error('Please provide an answer to evaluate')
      return
    }

    if (!user) {
      toast.error('Please sign in to use this feature')
      return
    }

    setIsEvaluating(true)
    try {
      const { data, error } = await supabase.functions.invoke('interview-prep', {
        body: {
          action: 'evaluate_answer',
          answer
        }
      })

      if (error) throw error

      setEvaluation(data.data.result)
      toast.success('Answer evaluated successfully!')
    } catch (error: any) {
      console.error('Error evaluating answer:', error)
      toast.error(error.message || 'Failed to evaluate answer')
    } finally {
      setIsEvaluating(false)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextIndex)
      setSelectedQuestion(questions[nextIndex])
      setAnswer('')
      setEvaluation(null)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1
      setCurrentQuestionIndex(prevIndex)
      setSelectedQuestion(questions[prevIndex])
      setAnswer('')
      setEvaluation(null)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'behavioral': return 'bg-blue-100 text-blue-800'
      case 'technical': return 'bg-purple-100 text-purple-800'
      case 'situational': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
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
                <Users className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">AI Interview Prep Assistant</span>
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
            AI Interview Preparation Assistant
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practice with AI-generated interview questions tailored to your target role. Get instant feedback and improve your interview performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Job Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                  Generate Interview Questions
                </CardTitle>
                <CardDescription>
                  Provide job details to generate relevant practice questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Description *</label>
                  <Textarea
                    placeholder="Paste the job description to generate targeted interview questions..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Background (Optional)</label>
                  <Textarea
                    placeholder="Paste your résumé or relevant experience to get personalized questions..."
                    value={resumeContent}
                    onChange={(e) => setResumeContent(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Question Type</label>
                  <Select value={questionType} onValueChange={setQuestionType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select question type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mixed">Mixed (All Types)</SelectItem>
                      <SelectItem value="behavioral">Behavioral</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="situational">Situational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleGenerateQuestions}
                  disabled={isGenerating || !jobDescription.trim()}
                  className="w-full btn-glow"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating Questions...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Interview Questions
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Practice Section */}
            {selectedQuestion && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      Practice Your Answer
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Answer</label>
                    <Textarea
                      placeholder="Type your answer here and get AI feedback..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleEvaluateAnswer}
                      disabled={isEvaluating || !answer.trim()}
                      className="flex-1"
                    >
                      {isEvaluating ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Evaluating...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Get Feedback
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={previousQuestion}
                      disabled={currentQuestionIndex === 0}
                    >
                      Previous
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={nextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Current Question */}
            {selectedQuestion && (
              <Card>
                <CardHeader>
                  <CardTitle>Interview Question</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(selectedQuestion.difficulty)}>
                      {selectedQuestion.difficulty}
                    </Badge>
                    <Badge className={getTypeColor(selectedQuestion.type)}>
                      {selectedQuestion.type}
                    </Badge>
                    <Badge variant="outline">
                      {selectedQuestion.focus_area}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-lg leading-relaxed">
                      {selectedQuestion.question}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Answer Evaluation */}
            {evaluation && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Answer Evaluation</span>
                    <div className={`text-2xl font-bold ${getScoreColor(evaluation.overall_score)}`}>
                      {evaluation.overall_score}/10
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {evaluation.strengths && evaluation.strengths.length > 0 && (
                    <div>
                      <h4 className="font-medium text-green-600 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Strengths
                      </h4>
                      <ul className="space-y-1">
                        {evaluation.strengths.map((strength, index) => (
                          <li key={index} className="text-sm text-green-700 bg-green-50 p-2 rounded">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {evaluation.improvements && evaluation.improvements.length > 0 && (
                    <div>
                      <h4 className="font-medium text-orange-600 mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Areas for Improvement
                      </h4>
                      <ul className="space-y-1">
                        {evaluation.improvements.map((improvement, index) => (
                          <li key={index} className="text-sm text-orange-700 bg-orange-50 p-2 rounded">
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {evaluation.suggestions && evaluation.suggestions.length > 0 && (
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2 flex items-center">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Suggestions
                      </h4>
                      <ul className="space-y-1">
                        {evaluation.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-blue-700 bg-blue-50 p-2 rounded">
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {evaluation.raw_feedback && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">{evaluation.raw_feedback}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            {!selectedQuestion && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interview Preparation Tips</CardTitle>
                  <CardDescription>
                    Best practices for successful interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>STAR Method:</strong> Structure answers with Situation, Task, Action, Result</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Be specific:</strong> Use concrete examples and quantifiable achievements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Practice out loud:</strong> Rehearse your answers before the interview</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Prepare questions:</strong> Have thoughtful questions about the role and company</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Show enthusiasm:</strong> Demonstrate genuine interest in the opportunity</span>
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