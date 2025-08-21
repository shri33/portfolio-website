import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('renders the site title', () => {
    render(<Header />)
    expect(screen.getByText('Shri Srivastava')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has accessible navigation', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Main navigation')
  })
})
