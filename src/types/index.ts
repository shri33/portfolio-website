export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  demo?: string
  repo?: string
  image?: string
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'coming-soon'
  highlights?: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'aiml' | 'devops'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface Social {
  name: string
  url: string
  icon: string
  username?: string
}

export interface ContactInfo {
  name: string
  displayName: string
  title: string
  location: string
  email: string
  phone: string
  bio: string
  experience: string
  education: string
  specialization: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  type: 'Remote' | 'On-site' | 'Hybrid'
  startDate: string
  endDate: string | 'Present'
  description: string[]
  featured?: boolean
}

export interface GenerativeProject {
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
