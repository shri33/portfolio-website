import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react'
import { contactInfo } from '@/data/socials'

export default function ProfileCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span>{contactInfo.location}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Briefcase className="w-5 h-5 text-primary" />
          <span>{contactInfo.experience}</span>
        </div>
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span>{contactInfo.education}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-primary" />
          <span>{contactInfo.specialization}</span>
        </div>
      </div>
    </div>
  )
}
