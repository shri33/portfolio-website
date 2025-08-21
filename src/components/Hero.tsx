import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="hero-gradient">Shri</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-lg">
            Frontend Developer crafting beautiful, accessible web experiences with React and Next.js
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl focus-ring"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors focus-ring"
            >
              Download Resume
              <Download className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {/* TODO: Replace with actual profile image */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-300">
                  S
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
