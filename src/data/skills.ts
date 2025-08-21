export type Skill = {
  name: string
  category: 'frontend' | 'tools' | 'backend'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', proficiency: 'expert' },
  { name: 'CSS3', category: 'frontend', proficiency: 'expert' },
  { name: 'JavaScript (ES6+)', category: 'frontend', proficiency: 'expert' },
  { name: 'React.js', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'advanced' },
  { name: 'Redux', category: 'frontend', proficiency: 'advanced' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'advanced' },
  
  // Tools & Build
  { name: 'Git', category: 'tools', proficiency: 'expert' },
  { name: 'Webpack', category: 'tools', proficiency: 'intermediate' },
  { name: 'Babel', category: 'tools', proficiency: 'intermediate' },
  { name: 'ESLint', category: 'tools', proficiency: 'advanced' },
  { name: 'Figma', category: 'tools', proficiency: 'advanced' },
  { name: 'VS Code', category: 'tools', proficiency: 'expert' },
  { name: 'Chrome DevTools', category: 'tools', proficiency: 'advanced' },
  { name: 'Jira', category: 'tools', proficiency: 'intermediate' },
  { name: 'Trello', category: 'tools', proficiency: 'intermediate' },
  { name: 'Postman', category: 'tools', proficiency: 'intermediate' },
  
  // Backend & Data
  { name: 'Java', category: 'backend', proficiency: 'intermediate' },
  { name: 'C', category: 'backend', proficiency: 'intermediate' },
  { name: 'SQL', category: 'backend', proficiency: 'intermediate' },
  { name: 'MongoDB', category: 'backend', proficiency: 'intermediate' },
]

export const skillCategories = {
  frontend: {
    title: 'Frontend',
    color: 'text-primary'
  },
  tools: {
    title: 'Tools & Build',
    color: 'text-accent'
  },
  backend: {
    title: 'Backend & Data',
    color: 'text-emerald-600'
  }
}
