import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/types'

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description',
  tech: ['React', 'TypeScript', 'Tailwind'],
  demo: 'https://example.com',
  repo: 'https://github.com/user/repo',
  status: 'completed',
  featured: true
}

describe('ProjectCard Component', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders technology tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
  })

  it('renders demo and repo links when available', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('View Demo')).toBeInTheDocument()
    expect(screen.getByText('View Code')).toBeInTheDocument()
  })

  it('shows status badge', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })
})
