export type Skill = {
  name: string
  category: 'frontend' | 'backend' | 'aiml' | 'devops' | 'tools' | 'languages'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript (ES6+)', category: 'languages', proficiency: 'expert' },
  { name: 'TypeScript', category: 'languages', proficiency: 'expert' },
  { name: 'Python', category: 'languages', proficiency: 'advanced' },
  { name: 'Java', category: 'languages', proficiency: 'intermediate' },
  { name: 'C', category: 'languages', proficiency: 'intermediate' },
  { name: 'Bash', category: 'languages', proficiency: 'intermediate' },
  
  // Frontend
  { name: 'React.js', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'expert' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'advanced' },
  { name: 'Redux', category: 'frontend', proficiency: 'advanced' },
  { name: 'HTML5', category: 'frontend', proficiency: 'expert' },
  { name: 'CSS3', category: 'frontend', proficiency: 'expert' },
  { name: 'SASS', category: 'frontend', proficiency: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert' },
  { name: 'Framer Motion', category: 'frontend', proficiency: 'advanced' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'expert' },
  { name: 'Express.js', category: 'backend', proficiency: 'expert' },
  { name: 'Supabase', category: 'backend', proficiency: 'advanced' },
  { name: 'Firebase', category: 'backend', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'backend', proficiency: 'advanced' },
  { name: 'PostgreSQL', category: 'backend', proficiency: 'advanced' },
  { name: 'MySQL', category: 'backend', proficiency: 'intermediate' },
  { name: 'GraphQL', category: 'backend', proficiency: 'intermediate' },
  { name: 'REST APIs', category: 'backend', proficiency: 'expert' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'aiml', proficiency: 'advanced' },
  { name: 'PyTorch', category: 'aiml', proficiency: 'advanced' },
  { name: 'scikit-learn', category: 'aiml', proficiency: 'intermediate' },
  { name: 'Keras', category: 'aiml', proficiency: 'intermediate' },
  { name: 'Pandas', category: 'aiml', proficiency: 'advanced' },
  { name: 'NumPy', category: 'aiml', proficiency: 'advanced' },
  { name: 'OpenCV', category: 'aiml', proficiency: 'intermediate' },
  { name: 'Computer Vision', category: 'aiml', proficiency: 'intermediate' },
  
  // DevOps & Tools
  { name: 'Docker', category: 'devops', proficiency: 'advanced' },
  { name: 'Git & GitHub', category: 'devops', proficiency: 'expert' },
  { name: 'Vercel', category: 'devops', proficiency: 'advanced' },
  { name: 'Railway', category: 'devops', proficiency: 'intermediate' },
  { name: 'CI/CD', category: 'devops', proficiency: 'intermediate' },
  
  // Design & Tools
  { name: 'Figma', category: 'tools', proficiency: 'advanced' },
  { name: 'VS Code', category: 'tools', proficiency: 'expert' },
  { name: 'Postman', category: 'tools', proficiency: 'advanced' },
  { name: 'Chrome DevTools', category: 'tools', proficiency: 'advanced' },
  { name: 'Jira', category: 'tools', proficiency: 'intermediate' },
]

export const skillCategories = {
  languages: {
    title: 'Programming Languages',
    color: 'text-blue-600'
  },
  frontend: {
    title: 'Frontend Development',
    color: 'text-primary'
  },
  backend: {
    title: 'Backend Development',
    color: 'text-emerald-600'
  },
  aiml: {
    title: 'AI/ML & Data Science',
    color: 'text-purple-600'
  },
  devops: {
    title: 'DevOps & Tools',
    color: 'text-orange-600'
  },
  tools: {
    title: 'Design & Tools',
    color: 'text-accent'
  }
}
