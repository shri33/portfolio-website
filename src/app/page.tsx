import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import ProfileCard from '@/components/ProfileCard'
import SkillPill from '@/components/SkillPill'
import GenerativeProjectForm from '@/components/GenerativeProjectForm'
import Achievements from '@/components/Achievements'
import { skills, skillCategories } from '@/data/skills'
import { contactInfo, socials } from '@/data/socials'
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Calendar, Phone, Globe } from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  globe: Globe,
  phone: Phone
}

export default function HomePage() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {contactInfo.bio}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Currently building scalable backend services at <span className="font-semibold text-primary">Turpin</span> with TypeScript and Supabase. Active open-source contributor to projects like <span className="font-semibold">Meshery (9.4k⭐)</span> and <span className="font-semibold">Pollinations (3.2k⭐)</span>, with 364 contributions in the last year.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {socials.slice(0, 3).map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 focus-ring hover:scale-105 shadow-md"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="text-sm font-medium">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
          
          <ProfileCard />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4 group">
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${skillCategories[category as keyof typeof skillCategories].color} group-hover:scale-105 transition-transform duration-300`}>
                    <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                    {skillCategories[category as keyof typeof skillCategories].title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillPill key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development, from AI-powered tools to scalable web applications.
          </p>
        </div>
        
        <ProjectGrid featured={true} />

        {/* Generative Projects Section */}
        <GenerativeProjectForm />
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {/* Current Role */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Back-End Engineer</h3>
                <p className="text-primary font-medium">Turpin • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">2025 - Present</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Building scalable backend services with TypeScript & Supabase</li>
              <li>• Designing robust APIs & role-based authentication systems</li>
              <li>• Optimizing database schemas and query performance</li>
              <li>• Implementing CI/CD pipelines with zero-downtime deployments</li>
            </ul>
          </div>

          {/* Freelancer */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Freelance Full-Stack Developer</h3>
                <p className="text-primary font-medium">Self-Employed • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">2025</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Achieved 10+ client projects with consistent 5.0/5.0 ratings</li>
              <li>• Engineered survey engine handling 200+ surveys with real-time analytics</li>
              <li>• Built e-commerce solutions processing 10K+ monthly transactions</li>
              <li>• Developed responsive UIs with 25% faster load times</li>
            </ul>
          </div>

          {/* QA & ML Testing */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">QA & ML Testing Specialist</h3>
                <p className="text-primary font-medium">Various Projects • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">2024</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Reviewed 10K+ ML dataset images, improving model accuracy by 20%</li>
              <li>• Reduced release defects by 25% through comprehensive testing</li>
              <li>• Executed 100+ manual test cases across web, mobile & desktop</li>
            </ul>
          </div>

          {/* Intern */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                <p className="text-primary font-medium">Celebal Technologies • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">Jun 2024 - Aug 2024</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Developed responsive web applications using React.js and modern JavaScript</li>
              <li>• Integrated new features and optimized existing functionality</li>
              <li>• Performed manual testing and documented bugs in Jira</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements & Open Source */}
      <Achievements />

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <Link href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors focus-ring rounded">
                    {contactInfo.email}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <Link href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors focus-ring rounded">
                    {contactInfo.phone}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus-ring"
                    >
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                      <span className="text-sm">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white focus-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white focus-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white focus-ring"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium focus-ring"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">BSc Computer Science</h3>
                    <p className="text-primary font-medium mb-2">Birla Institute of Technology and Science, Pilani</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">2023 - 2026 • Pilani, Rajasthan</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Relevant Courses: Software Engineering, Web Development, Databases, Data Structures and Algorithms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
