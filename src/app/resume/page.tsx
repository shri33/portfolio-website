import { Metadata } from 'next'
import Link from 'next/link'
import { Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume — Shri Srivastava',
  description: 'Resume of Shri Srivastava — Frontend Developer with 3+ years of experience in React, Next.js, and modern web technologies',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Shri Srivastava
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Frontend Developer • React, Next.js, Tailwind • Web3 & AI interest
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>shrisrivastava33@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 8989562233</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Link 
                  href="https://github.com/shri33" 
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/shri33</span>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/shri-srivastava/" 
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Selected Achievements */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Selected Achievements</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Built <strong>Image Magic</strong> — a virtual staging and product image optimization prototype that automates background removal and staging for e-commerce catalogs; prototype demonstrates batch processing & preview UI.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Open-sourced the pipeline and demo for the Shopify image optimizer — includes Dockerized scripts for reproducible local runs.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Contributed to <strong>Journal Survey Engine</strong> (mlops-and-cloud-db) — research-focused survey platform designed for ML experiment data collection, export-ready for MLOps pipelines.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Built NFT marketing microsite with responsive gallery, achieving optimized performance through image optimization and code splitting.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>HTML5/CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tools</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Vercel</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>API Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Image Magic — Virtual Staging & Shopify Image Optimizer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Demo: image-magic-fmvp.vercel.app | Repo: github.com/shri33/AI-Powered-Shopify-Product-Image-Optimizer-Virtual-Staging-Tool
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                AI-driven virtual staging and Shopify product image optimizer with background removal, staging templates, and batch processing pipeline.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Next.js</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Python</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">OpenCV</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                NFT Marketing Website
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Demo: nft-card-assignment.vercel.app | Repo: github.com/shri33/NFT-Card-Assignment
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Marketing microsite for NFT drops with responsive gallery, artist showcase, and conversion-focused UI design.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">React</span>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Tailwind</span>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Responsive</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Journal Survey Engine
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Repo: github.com/mlops-and-cloud-db/journal-survey-engine
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Research-focused survey platform with modular forms, data export, and MLOps pipeline integration.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Node.js</span>
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">React</span>
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                  <p className="text-gray-600 dark:text-gray-400">Celebal Technologies</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 - Aug 2024</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Developed responsive web applications using React.js and modern JavaScript</li>
                <li>• Integrated new features and optimized existing functionality</li>
                <li>• Performed manual testing and documented bugs in Jira</li>
                <li>• Collaborated in agile development environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h3>
            <p className="text-gray-600 dark:text-gray-400">Computer Science & Engineering</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Engineering College</p>
          </div>
        </section>

        {/* Career Objective */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Career Objective</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Seeking frontend/React roles in product teams or startups where I can apply my skills in modern web technologies, 
            contribute to user-focused development, and grow expertise in scalable application architecture.
          </p>
        </section>
      </div>
    </div>
  )
}
