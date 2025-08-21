'use client'

import { useState } from 'react'
import { Loader2, Copy, RefreshCw, Sparkles } from 'lucide-react'

interface GenerativeProjectFormProps {
  onGenerate?: (project: any) => void
}

export default function GenerativeProjectForm({ onGenerate }: GenerativeProjectFormProps) {
  const [repoUrl, setRepoUrl] = useState('')
  const [projectNotes, setProjectNotes] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!repoUrl && !projectNotes) {
      alert('Please provide either a GitHub repository URL or project description.')
      return
    }

    setIsLoading(true)
    setShowResults(true)
    setResult(null)

    // Simulate AI generation (replace with actual API call in production)
    setTimeout(() => {
      const projectName = repoUrl 
        ? repoUrl.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Project'
        : 'Custom Project'

      const generatedProject = {
        title: projectName,
        description: projectNotes || 'A modern web application built with cutting-edge technologies, focusing on user experience and performance optimization.',
        features: [
          'Responsive design optimized for all devices',
          'Modern UI/UX with smooth animations',
          'Performance-optimized with lazy loading',
          'Accessibility-first approach (WCAG AA compliant)',
          'Cross-browser compatibility',
          'SEO optimized'
        ],
        techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        caseStudy: `Built using React.js and modern JavaScript ES6+ features, this project demonstrates clean code architecture and component-based design principles. The application leverages state management for optimal user interactions and includes comprehensive error handling.`,
        challenges: 'Overcame cross-browser compatibility issues by implementing progressive enhancement and fallback strategies.',
        solutions: 'Optimized performance through code splitting and efficient asset loading strategies.',
        repo: repoUrl || '',
        demo: ''
      }

      setResult(generatedProject)
      setIsLoading(false)
      onGenerate?.(generatedProject)
    }, 2000)
  }

  const copyToClipboard = () => {
    if (result) {
      const content = `
# ${result.title}

## Overview
${result.description}

## Key Features
${result.features.map((feature: string) => `• ${feature}`).join('\n')}

## Technical Implementation
${result.caseStudy}

## Challenges & Solutions
**Challenges:** ${result.challenges}
**Solutions:** ${result.solutions}

## Tech Stack
${result.techStack.join(', ')}
      `.trim()

      navigator.clipboard.writeText(content).then(() => {
        alert('Case study copied to clipboard!')
      })
    }
  }

  const generateAgain = () => {
    handleSubmit(new Event('submit') as any)
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-accent" />
          Generative Project Assistant
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Turn your GitHub repos or project ideas into polished case studies using AI
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="repo-url" className="block text-sm font-medium mb-2">
                GitHub Repository URL
              </label>
              <input 
                type="url" 
                id="repo-url"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/repo-name"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white focus-ring"
              />
            </div>
            
            <div className="text-center text-slate-400">or</div>
            
            <div>
              <label htmlFor="project-notes" className="block text-sm font-medium mb-2">
                Project Description / Key Features
              </label>
              <textarea 
                id="project-notes"
                rows={4}
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                placeholder="• Built with React and TypeScript&#10;• Implemented user authentication&#10;• Real-time data updates&#10;• Mobile-responsive design"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white focus-ring"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating Case Study...
                </>
              ) : (
                'Generate Project Case Study'
              )}
            </button>
          </form>
          
          {/* Results area */}
          {showResults && (
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              {isLoading ? (
                <div className="text-center py-8">
                  <Loader2 className="inline-block animate-spin h-8 w-8 text-primary mb-2" />
                  <p className="text-slate-600 dark:text-slate-300">Generating case study...</p>
                </div>
              ) : result ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">{result.title}</h4>
                  <div className="prose dark:prose-invert max-w-none">
                    <p><strong>Overview:</strong> {result.description}</p>
                    
                    <p><strong>Key Features:</strong></p>
                    <ul>
                      {result.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <p><strong>Technical Implementation:</strong> {result.caseStudy}</p>
                    
                    <p><strong>Challenges & Solutions:</strong> {result.challenges} {result.solutions}</p>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-ring"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Case Study
                    </button>
                    <button 
                      onClick={generateAgain}
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors focus-ring"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Generate Again
                    </button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> This is a demo version. In production, this would use OpenAI&apos;s API to generate detailed case studies from repository analysis.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
