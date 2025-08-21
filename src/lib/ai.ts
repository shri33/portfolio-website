interface GenerativeProjectRequest {
  repoUrl?: string
  projectNotes?: string
  tech?: string[]
}

interface GenerativeProjectResponse {
  title: string
  description: string
  features: string[]
  techStack: string[]
  caseStudy: string
  challenges?: string
  solutions?: string
  repo?: string
  demo?: string
}

export async function generateProjectCaseStudy(request: GenerativeProjectRequest): Promise<GenerativeProjectResponse> {
  // TODO: Replace with actual OpenAI API call when OPENAI_API_KEY is available
  const apiKey = process.env.OPENAI_API_KEY
  
  if (!apiKey) {
    console.warn('OPENAI_API_KEY not found, using mock data')
    return generateMockProject(request)
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a professional technical writer helping create project case studies for a developer portfolio. 
            Generate a comprehensive project case study including title, description, key features, tech stack, 
            implementation details, challenges, and solutions. Format the response as JSON.`
          },
          {
            role: 'user',
            content: `Create a case study for this project:
            Repository URL: ${request.repoUrl || 'Not provided'}
            Project Notes: ${request.projectNotes || 'Not provided'}
            Technologies: ${request.tech?.join(', ') || 'Not specified'}
            
            Please provide a realistic and professional case study suitable for a frontend developer portfolio.`
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    try {
      return JSON.parse(content)
    } catch {
      // If JSON parsing fails, create structured response from text
      return parseTextToProject(content, request)
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    return generateMockProject(request)
  }
}

function generateMockProject(request: GenerativeProjectRequest): GenerativeProjectResponse {
  const projectName = request.repoUrl 
    ? request.repoUrl.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Project'
    : 'Custom Project'

  return {
    title: projectName,
    description: request.projectNotes || 'A modern web application built with cutting-edge technologies, focusing on user experience and performance optimization.',
    features: [
      'Responsive design optimized for all devices',
      'Modern UI/UX with smooth animations',
      'Performance-optimized with lazy loading',
      'Accessibility-first approach (WCAG AA compliant)',
      'Cross-browser compatibility',
      'SEO optimized',
    ],
    techStack: request.tech || ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    caseStudy: `Built using modern JavaScript frameworks and best practices, this project demonstrates clean code architecture and component-based design principles. The application leverages state management for optimal user interactions and includes comprehensive error handling.`,
    challenges: 'Overcame cross-browser compatibility issues by implementing progressive enhancement and fallback strategies.',
    solutions: 'Optimized performance through code splitting and efficient asset loading strategies.',
    repo: request.repoUrl || '',
    demo: '',
  }
}

function parseTextToProject(text: string, request: GenerativeProjectRequest): GenerativeProjectResponse {
  // Basic text parsing fallback
  const lines = text.split('\n').filter(line => line.trim())
  
  return {
    title: lines[0] || 'Generated Project',
    description: lines[1] || 'A professional web application built with modern technologies.',
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Performance optimized',
      'Accessibility focused',
    ],
    techStack: request.tech || ['React', 'TypeScript', 'CSS'],
    caseStudy: text.slice(0, 500) + '...',
    challenges: 'Technical challenges were addressed through careful planning and implementation.',
    solutions: 'Solutions were implemented using industry best practices.',
    repo: request.repoUrl || '',
    demo: '',
  }
}

export { type GenerativeProjectRequest, type GenerativeProjectResponse }
