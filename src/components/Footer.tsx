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
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <div>
                <div className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Shri Srivastava</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Back-End Engineer</div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Back-End Engineer with 3+ years of experience building scalable applications with TypeScript, Node.js, and modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:translate-x-1 duration-300 focus-ring rounded">
                → About
              </Link>
              <Link href="#projects" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:translate-x-1 duration-300 focus-ring rounded">
                → Projects
              </Link>
              <Link href="#skills" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:translate-x-1 duration-300 focus-ring rounded">
                → Skills
              </Link>
              <Link href="/resume" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:translate-x-1 duration-300 focus-ring rounded">
                → Resume
              </Link>
              <Link href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:translate-x-1 duration-300 focus-ring rounded">
                → Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials.slice(0, 4).map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-white hover:bg-primary dark:hover:bg-primary transition-all duration-300 focus-ring hover:scale-110 shadow-md"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </Link>
                )
              })}
            </div>
            <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Google Certified</div>
              <div className="text-sm font-semibold text-primary">Cybersecurity Professional</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Shri Srivastava. Built with <span className="text-primary">Next.js</span>, <span className="text-accent">TypeScript</span>, and <span className="text-primary">Tailwind CSS</span>.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            All rights reserved. Patna, Bihar, India
          </p>
        </div>
      </div>
    </footer>
  )
}
