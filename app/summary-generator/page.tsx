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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Brain, Copy, Download, ArrowLeft, Sparkles, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { copyToClipboard, downloadAsFile } from '@/lib/utils'

interface SummaryVariation {
  version: number
  summary: string
  tone: string
}

export default function SummaryGeneratorPage() {
  const { user } = useAuth()
  const [resumeContent, setResumeContent] = useState('')
  const [summaryType, setSummaryType] = useState('professional')
  const [industryFocus, setIndustryFocus] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedSummary, setGeneratedSummary] = useState('')
  const [variations, setVariations] = useState<SummaryVariation[]>([])
  const [wordCount, setWordCount] = useState(0)

  const handleGenerate = async () => {
    if (!resumeContent.trim()) {
      toast.error('Please enter your résumé content')
      return
    }

    if (!user) {
      toast.error('Please sign in to use this feature')
      return
    }

    setIsGenerating(true)
    try {
      const { data, error } = await supabase.functions.invoke('summary-generator', {
        body: {
          resumeContent,
          summaryType,
          industryFocus: industryFocus || undefined
        }
      })

      if (error) throw error

      setGeneratedSummary(data.data.summary)
      setVariations(data.data.variations || [])
      setWordCount(data.data.word_count)
      toast.success('Professional summary generated successfully!')
    } catch (error: any) {
      console.error('Error generating summary:', error)
      toast.error(error.message || 'Failed to generate summary')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = async (text: string) => {
    try {
      await copyToClipboard(text)
      toast.success('Copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleDownload = (text: string, filename: string) => {
    downloadAsFile(text, `${filename}.txt`, 'text/plain')
    toast.success('Downloaded successfully!')
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
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">AI Summary Generator</span>
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
            AI Professional Summary Generator
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your résumé content into compelling professional summaries that capture recruiters' attention and highlight your key strengths.
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
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  Input Your Information
                </CardTitle>
                <CardDescription>
                  Provide your résumé content and preferences to generate a personalized professional summary.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="resume-content">Résumé Content *</Label>
                  <Textarea
                    id="resume-content"
                    placeholder="Paste your résumé content here, including work experience, skills, education, and achievements..."
                    value={resumeContent}
                    onChange={(e) => setResumeContent(e.target.value)}
                    className="min-h-[200px] resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Tip: Include your most important achievements and skills for better results
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="summary-type">Summary Type</Label>
                    <Select value={summaryType} onValueChange={setSummaryType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select summary type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="concise">Concise</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                        <SelectItem value="industry-specific">Industry-Specific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry-focus">Industry Focus (Optional)</Label>
                    <Input
                      id="industry-focus"
                      placeholder="e.g., Technology, Marketing, Finance"
                      value={industryFocus}
                      onChange={(e) => setIndustryFocus(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !resumeContent.trim()}
                  className="w-full btn-glow"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating Summary...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      Generate Professional Summary
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Summary */}
            {generatedSummary && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Generated Summary</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {wordCount} words
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(generatedSummary)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(generatedSummary, 'professional-summary')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {generatedSummary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Variations */}
            {variations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Alternative Versions</CardTitle>
                  <CardDescription>
                    Different tones and approaches for your professional summary
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {variations.map((variation, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary">
                          Version {variation.version} - {variation.tone}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(variation.summary)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(variation.summary, `summary-variation-${variation.version}`)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {variation.summary}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Tips Card */}
            {!generatedSummary && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tips for Better Summaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Include your years of experience and key expertise areas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Mention specific achievements with numbers when possible</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>List your most relevant technical and soft skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Specify your industry focus for more targeted results</span>
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