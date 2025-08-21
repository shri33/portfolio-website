import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import ProfileCard from '@/components/ProfileCard'
import SkillPill from '@/components/SkillPill'
import GenerativeProjectForm from '@/components/GenerativeProjectForm'
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
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {contactInfo.bio}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently working remotely in Web3 projects, developing React apps for blockchain applications while optimizing UI performance and collaborating with designers to implement wireframes and prototypes.
            </p>
            <div className="flex space-x-4">
              {socials.slice(0, 3).map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors focus-ring rounded"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <ProfileCard />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                  <h3 className={`text-xl font-semibold ${skillCategories[category as keyof typeof skillCategories].color}`}>
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
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in frontend development, from NFT marketing websites to AI-powered tools.
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
                <h3 className="text-xl font-semibold">Front-End Developer</h3>
                <p className="text-primary font-medium">Web3 • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">Jan 2023 - Present</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Developed React apps for blockchain/Web3 projects</li>
              <li>• Optimized UI performance and code quality</li>
              <li>• Collaborated with designers to implement wireframes and prototypes using Figma and Adobe XD</li>
            </ul>
          </div>

          {/* Freelancer */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Front-End Developer</h3>
                <p className="text-primary font-medium">Freelancer • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">May 2022 - Jul 2023</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Built responsive websites using React.js, Next.js, and modern CSS frameworks</li>
              <li>• Implemented state management and asynchronous data fetching using Redux</li>
              <li>• Gathered requirements and delivered high-quality projects</li>
            </ul>
          </div>

          {/* QA Test Engineer */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">QA Test Engineer</h3>
                <p className="text-primary font-medium">Upwork • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">Oct 2021 - May 2022</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Conducted comprehensive manual testing for web, mobile, and desktop apps</li>
              <li>• Wrote detailed test cases and maintained test documentation</li>
              <li>• Reported and tracked defects using bug tracking tools</li>
            </ul>
          </div>

          {/* Intern */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Intern</h3>
                <p className="text-primary font-medium">CrowdUpss • Remote</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">Jun 2021 - Dec 2021</span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Assisted in web app development using HTML, CSS, and JavaScript</li>
              <li>• Integrated new features and optimized existing functionality</li>
              <li>• Performed manual testing and documented bugs in Jira</li>
            </ul>
          </div>
        </div>
      </section>

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
