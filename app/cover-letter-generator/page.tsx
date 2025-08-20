'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Zap, Copy, Download, ArrowLeft, Sparkles, RefreshCw, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { copyToClipboard, downloadAsFile } from '@/lib/utils'

export default function CoverLetterGeneratorPage() {
  const { user } = useAuth()
  const [resumeContent, setResumeContent] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [hiringManagerName, setHiringManagerName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('')
  const [coverLetterId, setCoverLetterId] = useState<string | null>(null)
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)

  const handleGenerate = async () => {
    if (!resumeContent.trim() || !jobDescription.trim() || !companyName.trim() || !positionTitle.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!user) {
      toast.error('Please sign in to use this feature')
      return
    }

    setIsGenerating(true)
    try {
      const { data, error } = await supabase.functions.invoke('cover-letter-generator', {
        body: {
          resumeContent,
          jobDescription,
          companyName,
          positionTitle,
          hiringManagerName: hiringManagerName || undefined
        }
      })

      if (error) throw error

      setGeneratedCoverLetter(data.data.cover_letter)
      setCoverLetterId(data.data.cover_letter_id)
      setWordCount(data.data.word_count)
      setCharacterCount(data.data.character_count)
      toast.success('Cover letter generated successfully!')
    } catch (error: any) {
      console.error('Error generating cover letter:', error)
      toast.error(error.message || 'Failed to generate cover letter')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = async () => {
    try {
      await copyToClipboard(generatedCoverLetter)
      toast.success('Cover letter copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleDownload = () => {
    const filename = `cover-letter-${companyName.replace(/\s+/g, '-').toLowerCase()}-${positionTitle.replace(/\s+/g, '-').toLowerCase()}`
    downloadAsFile(generatedCoverLetter, `${filename}.txt`, 'text/plain')
    toast.success('Cover letter downloaded successfully!')
  }

  const clearForm = () => {
    setResumeContent('')
    setJobDescription('')
    setCompanyName('')
    setPositionTitle('')
    setHiringManagerName('')
    setGeneratedCoverLetter('')
    setCoverLetterId(null)
    setWordCount(0)
    setCharacterCount(0)
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
                <Zap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">AI Cover Letter Writer</span>
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
            AI-Powered Cover Letter Generator
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create personalized, compelling cover letters that align your experience with specific job requirements and demonstrate your perfect fit for the role.
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
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Job Information
                </CardTitle>
                <CardDescription>
                  Provide details about the position and company
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name *</Label>
                    <Input
                      id="company-name"
                      placeholder="e.g., Google, Microsoft, Startup Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position-title">Position Title *</Label>
                    <Input
                      id="position-title"
                      placeholder="e.g., Software Engineer, Marketing Manager"
                      value={positionTitle}
                      onChange={(e) => setPositionTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hiring-manager">Hiring Manager Name (Optional)</Label>
                  <Input
                    id="hiring-manager"
                    placeholder="e.g., John Smith, Sarah Johnson"
                    value={hiringManagerName}
                    onChange={(e) => setHiringManagerName(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  Content Input
                </CardTitle>
                <CardDescription>
                  Provide your résumé content and the job description
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resume-content">Your Résumé Content *</Label>
                  <Textarea
                    id="resume-content"
                    placeholder="Paste your résumé content including experience, skills, and achievements..."
                    value={resumeContent}
                    onChange={(e) => setResumeContent(e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-description">Job Description *</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the full job description including requirements, responsibilities, and qualifications..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating || !resumeContent.trim() || !jobDescription.trim() || !companyName.trim() || !positionTitle.trim()}
                className="flex-1 btn-glow"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Generating Cover Letter...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={clearForm}
                disabled={isGenerating}
              >
                Clear
              </Button>
            </div>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {generatedCoverLetter ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Generated Cover Letter</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {wordCount} words, {characterCount} characters
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDownload}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  {coverLetterId && (
                    <CardDescription>
                      Cover letter saved to your account
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="whitespace-pre-wrap leading-relaxed text-sm">
                      {generatedCoverLetter}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tips for Better Cover Letters</CardTitle>
                  <CardDescription>
                    Follow these guidelines for optimal results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Be specific:</strong> Include exact company name and position title</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Complete job description:</strong> Paste the full job posting for better alignment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Include achievements:</strong> Quantifiable accomplishments improve quality</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Hiring manager:</strong> Personal touch when you know their name</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Review keywords:</strong> Include relevant terms from the job description</span>
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