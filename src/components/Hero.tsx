import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m <span className="hero-gradient">Shri Srivastava</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-semibold">
              Back-End Engineer
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Building scalable web applications with TypeScript, Node.js & modern technologies. 
              <span className="block mt-2">3+ years experience • Google Cybersecurity Certified</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus-ring font-semibold"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary dark:text-white rounded-xl hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 focus-ring font-semibold hover:scale-105"
            >
              Download Resume
              <Download className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 animate-float shadow-2xl group-hover:shadow-accent/50 transition-shadow duration-500">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden ring-4 ring-white/50 dark:ring-slate-700/50">
                <Image
                  src="/images/profile.png"
                  alt="Shri Srivastava"
                  width={384}
                  height={384}
                  className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
