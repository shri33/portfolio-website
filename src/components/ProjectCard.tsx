import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'in-progress':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
      case 'coming-soon':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="project-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="h-48 relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-primary text-2xl font-bold">
            {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
          </div>
        )}
        {project.status && (
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.demo && project.status === 'completed' ? (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-white text-center py-2 rounded-lg hover:bg-primary/90 transition-colors focus-ring flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </Link>
          ) : (
            <div className="flex-1 bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300 text-center py-2 rounded-lg cursor-not-allowed flex items-center justify-center">
              {project.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
            </div>
          )}
          
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-primary text-primary text-center py-2 rounded-lg hover:bg-primary hover:text-white transition-colors focus-ring flex items-center justify-center"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
