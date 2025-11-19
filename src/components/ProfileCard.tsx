import { MapPin, Calendar, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react'
import { contactInfo } from '@/data/socials'

export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Facts</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
            <div className="font-medium">{contactInfo.location}</div>
          </div>
        </div>
        <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
            <Briefcase className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
            <div className="font-medium">{contactInfo.experience}</div>
          </div>
        </div>
        <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Education</div>
            <div className="font-medium">B.Sc. (Hons) Computer Science</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">BITS Pilani • 2026 (Honours 2027)</div>
          </div>
        </div>
        <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
            <Code2 className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Specialization</div>
            <div className="font-medium">{contactInfo.specialization}</div>
          </div>
        </div>
        <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Certifications</div>
            <div className="font-medium">Google Cybersecurity Certified</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">13+ Professional Certificates</div>
          </div>
        </div>
      </div>
    </div>
  )
}
