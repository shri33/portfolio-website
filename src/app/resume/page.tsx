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
                Back-End Engineer
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>shrisrivastava2@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 7903696009</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Patna, Bihar, India</span>
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
                  href="https://www.linkedin.com/in/shri-srivastava-ab04a5175/" 
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </Link>
                <Link 
                  href="https://www.kaggle.com/shrihero" 
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-4 h-4">🏆</span>
                  <span>Kaggle</span>
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
              <strong>Upwork Top Rated</strong> freelancer with 91% Job Success Score, $6K+ earnings across 8 completed projects, and 370+ hours of work with 100% 5-star ratings (except 1 disputed project).
            </li>
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
              Active <strong>Kaggle contributor</strong> exploring ML/AI datasets and participating in data science competitions.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <strong>Open-source contributor</strong> to Meshery (9.4k⭐) and Pollinations (3.2k⭐) with 364 contributions in the last year.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <strong>Hacktoberfest 2025 Supercontributor</strong> — achieved all levels (0-4) and earned tree planting reward (Certificate #8289977: Incense Cedar in California).
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <strong>15+ Holopin badges</strong> from Hacktoberfest, ILLA Cloud, Appwrite, DigitalOcean, and other tech organizations.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <strong>Google Cybersecurity Certificate</strong> — 13+ certifications including Python automation, Linux, SQL, Network Security, and threat detection.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Built NFT marketing microsite with responsive gallery, achieving optimized performance through image optimization and code splitting.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Licenses & Certifications</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Google Cybersecurity Specialization</h3>
              <p className="text-gray-600 dark:text-gray-400">Google via Coursera • Issued Sep 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: 67WWH2ZOY8VR</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Complete 8-course program covering Network Security, Cybersecurity, Python, Linux & SQL</p>
              <a href="https://www.coursera.org/account/accomplishments/specialization/67WWH2ZOY8VR" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Automate Cybersecurity Tasks with Python</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Aug 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: QJJ9QDHYKC7I</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Skills: Python (Programming Language)</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/QJJ9QDHYKC7I" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Sound the Alarm: Detection and Response</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Jul 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: EH7YUFLBGL38</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/EH7YUFLBGL38" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Assets, Threats, and Vulnerabilities</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Jun 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: 7JJN7F6Z3NTX</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/7JJN7F6Z3NTX" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Tools of the Trade: Linux and SQL</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued May 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: XRKQ94JXZXWG</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/XRKQ94JXZXWG" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Connect and Protect: Networks and Network Security</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Apr 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: XYVJZ9VY9AS3</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/XYVJZ9VY9AS3" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Play It Safe: Manage Security Risks</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Mar 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: MQ53M8Z86YUM</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/MQ53M8Z86YUM" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Modern JavaScript: ES6 Basics</h3>
              <p className="text-gray-600 dark:text-gray-400">Coursera Project Network • Issued Aug 2023</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: SGVZBAPPTD5R</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">AWS S3 Basics</h3>
              <p className="text-gray-600 dark:text-gray-400">Coursera • Issued Aug 2023</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: W6M9TTZQSB9L</p>
              <a href="https://www.coursera.org/account/accomplishments/certificate/W6M9TTZQSB9L" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Introduction to HTML5</h3>
              <p className="text-gray-600 dark:text-gray-400">Coursera • Issued Aug 2023</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: PVXX6AVKW5YG</p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Foundations of Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-400">Google • Issued Feb 2023</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: 3YMTLV3DVGN4</p>
              <a href="https://www.coursera.org/account/accomplishments/certificate/3YMTLV3DVGN4" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Computer Forensics File Formats: Why you Should be Using AFF4</h3>
              <p className="text-gray-600 dark:text-gray-400">Cybrary</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Credential ID: CC-a90e19e9-4c8d-464e-8885-92388f4b912d</p>
              <a href="https://app.cybrary.it/courses/api/certificate/CC-a90e19e9-4c8d-464e-8885-92388f4b912d/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-sm mt-1 inline-block hover:underline">Show credential →</a>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">React — The Complete Guide</h3>
              <p className="text-gray-600 dark:text-gray-400">Udemy</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Modern React with Redux</h3>
              <p className="text-gray-600 dark:text-gray-400">Udemy</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">JavaScript Algorithms and Data Structures</h3>
              <p className="text-gray-600 dark:text-gray-400">freeCodeCamp</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Responsive Web Design</h3>
              <p className="text-gray-600 dark:text-gray-400">freeCodeCamp</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">WordPress Development for Beginners</h3>
              <p className="text-gray-600 dark:text-gray-400">Online Course</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Blockchain Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Online Course</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Front-End Web Developer Nanodegree</h3>
              <p className="text-gray-600 dark:text-gray-400">Udacity</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">React.js, Next.js, TypeScript, Vue.js, Vanilla JavaScript, Redux, HTML5, CSS3</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">TypeScript (backend), Node.js, Express, Supabase, Firebase (Auth, Firestore, Functions, Hosting), MongoDB, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps/Tools</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Git, Docker, Postman, Jira, Webpack, Babel, ESLint, Railway, Vercel, Figma, Chrome DevTools</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Java, C, Python</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI/ML</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">TensorFlow, PyTorch, Scikit-learn, Machine Learning, Deep Learning, LLMs, Data Pipelines</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Back-End Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Turpin</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Building scalable backend services with TypeScript & Supabase</li>
                <li>• Designing robust APIs & role-based authentication systems</li>
                <li>• Optimizing database schemas and query performance</li>
                <li>• Implementing CI/CD pipelines with zero-downtime deployments</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelance Full-Stack Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Self-Employed</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2025</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Achieved 10+ client projects with consistent 5.0/5.0 ratings</li>
                <li>• Engineered survey engine handling 200+ surveys with real-time analytics</li>
                <li>• Built e-commerce solutions processing 10K+ monthly transactions</li>
                <li>• Developed responsive UIs with 25% faster load times through optimization</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">QA & ML Testing Specialist</h3>
                  <p className="text-gray-600 dark:text-gray-400">Various Projects</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Reviewed 10K+ ML dataset images, improving model accuracy by 20%</li>
                <li>• Reduced release defects by 25% through comprehensive testing strategies</li>
                <li>• Executed 100+ manual test cases across web, mobile & desktop platforms</li>
              </ul>
            </div>

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

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UI/UX Developer Intern</h3>
                  <p className="text-gray-600 dark:text-gray-400">CrowdUpss</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2021</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Designed UI features in HTML, CSS, and JavaScript</li>
                <li>• Resolved 30+ usability issues improving user experience</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">QA Test Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Upwork (Freelance)</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2022</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Executed manual testing for web, mobile, and desktop applications</li>
                <li>• Authored comprehensive test cases and bug reports</li>
                <li>• Reduced client-reported issues by 15% through systematic testing</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graphic Designer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fiberr</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2020 - Present</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Created visual content to communicate messages effectively</li>
                <li>• Applied visual hierarchy and page layout techniques</li>
                <li>• Used typography and pictures to meet users' specific needs</li>
                <li>• Optimized user experience through interactive design logic</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graphic Designer for News</h3>
                  <p className="text-gray-600 dark:text-gray-400">Darsh News Digital</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2019 - Present</span>
              </div>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Attended client briefing meetings and studied client briefs</li>
                <li>• Led brainstorming sessions with clients and in-house teams</li>
                <li>• Worked with Brand Team to produce communication and advertisement ideas</li>
                <li>• Implemented tailored marketing strategies based on client requirements</li>
                <li>• Led design team in web, graphic, digital, and video deliverables</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Upwork Freelance Work */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upwork Freelance Projects</h2>
          <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-2xl font-bold text-green-600">91%</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Job Success Score</span>
              </div>
              <div>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">Top Rated</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">$6,000+</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Hours</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">370+</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Create Survey Engine for Website</h3>
                  <p className="text-gray-600 dark:text-gray-400">MLOps & Cloud DB LLC • Joseph Curtin</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">May - Aug 2025</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"I really enjoyed working with Shri. She's capable of shipping a whole solution with a general collection of feature direction. She also provides documentation on how to run the software"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$2,936.66 earned</span>
                <span className="text-gray-600 dark:text-gray-400">$20/hr</span>
                <span className="text-gray-600 dark:text-gray-400">147 hours</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">VueJS</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Firebase</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Shopify</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Ratatui & Rust Example</h3>
                  <p className="text-gray-600 dark:text-gray-400">MLOps & Cloud DB LLC • Joseph Curtin</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jul - Aug 2025</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"Shri is professional and great when narrowing down feature scope"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$165.00 fixed</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Rust</span>
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Ratatui</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Shopify OAuth2 Example</h3>
                  <p className="text-gray-600 dark:text-gray-400">MLOps & Cloud DB LLC • Joseph Curtin</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jun - Jul 2025</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"Great communicator and fantastic programmer"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$100.00 fixed</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Shopify</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">OAuth2</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Website Development Needed</h3>
                  <p className="text-gray-600 dark:text-gray-400">Eduard Chepurnoy</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Mar - Apr 2025</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"Great job, great communication, will hire again"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$125.00 fixed</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Image Labeling for AI Software</h3>
                  <p className="text-gray-600 dark:text-gray-400">Michael Bonacina • Mark Cowtan</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jul - Sep 2024</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"Shri is an outstanding QA person, she really helped us out with releasing new software, and reviewing AI images looking for artifacts"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$1,350.00 earned</span>
                <span className="text-gray-600 dark:text-gray-400">Reviewed 1200+ images</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">AI/ML QA</span>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Image Review</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Software Testing</h3>
                  <p className="text-gray-600 dark:text-gray-400">RightSize Marketing • Mark Cowtan</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jun - Jul 2024</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"Cooperative and easy to work and communicate with. Understood the task immediately. She stepped up to help me out at short notice"</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">$57.50 earned</span>
                <span className="text-gray-600 dark:text-gray-400">$5/hr</span>
                <span className="text-gray-600 dark:text-gray-400">11 hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">B.Sc. (Hons) Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-400">BITS Pilani</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Expected 2026 • Honours Year 2027</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Class 12 (CBSE)</h3>
              <p className="text-gray-600 dark:text-gray-400">68%</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Class 10 (CBSE)</h3>
              <p className="text-gray-600 dark:text-gray-400">9.6 CGPA</p>
            </div>
          </div>
        </section>

        {/* Languages & Soft Skills */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• English (Native)</li>
                <li>• Hindi (Native)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Agile Collaboration</li>
                <li>• Cross-functional Communication</li>
                <li>• Problem-Solving under Deadlines</li>
                <li>• Adaptability & Analytical Thinking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Areas of Interest</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">AI/ML Engineering</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">AI Applications</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Realtime Systems</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Human–Computer Interaction</span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Cloud Deployments</span>
          </div>
        </section>
      </div>
    </div>
  )
}
