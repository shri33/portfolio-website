import Link from 'next/link'
import { Github, Linkedin, Mail, Globe, Phone } from 'lucide-react'
import { socials } from '@/data/socials'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  globe: Globe,
  phone: Phone
}

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg">Shri Srivastava</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Frontend Developer specializing in React, Next.js, and modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus-ring rounded">
                About
              </Link>
              <Link href="#projects" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus-ring rounded">
                Projects
              </Link>
              <Link href="#skills" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus-ring rounded">
                Skills
              </Link>
              <Link href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus-ring rounded">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socials.slice(0, 2).map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus-ring rounded"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Shri Srivastava. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
