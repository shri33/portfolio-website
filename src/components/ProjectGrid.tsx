import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  featured?: boolean
  limit?: number
}

export default function ProjectGrid({ featured = false, limit }: ProjectGridProps) {
  let filteredProjects = featured 
    ? projects.filter(project => project.featured)
    : projects

  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
