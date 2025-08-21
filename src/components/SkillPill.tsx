import { Skill } from '@/types'

interface SkillPillProps {
  skill: Skill
}

export default function SkillPill({ skill }: SkillPillProps) {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20'
      case 'advanced':
        return 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20'
      case 'intermediate':
        return 'border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
      case 'beginner':
        return 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/20'
      default:
        return 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/20'
    }
  }

  return (
    <span 
      className={`skill-pill px-3 py-2 rounded-full text-sm border transition-all duration-300 ${getProficiencyColor(skill.proficiency)}`}
      title={`${skill.name} - ${skill.proficiency} level`}
    >
      {skill.name}
    </span>
  )
}
