'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 glass-effect">
      <nav className="max-w-6xl mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 focus-ring rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg">Shri Srivastava</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-primary transition-colors focus-ring rounded">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors focus-ring rounded">Projects</Link>
            <Link href="#skills" className="hover:text-primary transition-colors focus-ring rounded">Skills</Link>
            <Link href="/resume" className="hover:text-primary transition-colors focus-ring rounded">Resume</Link>
            <Link href="#contact" className="hover:text-primary transition-colors focus-ring rounded">Contact</Link>
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 focus-ring" 
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href="#about" 
                className="hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link 
                href="#skills" 
                className="hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
              <Link 
                href="/resume" 
                className="hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
              <Link 
                href="#contact" 
                className="hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
