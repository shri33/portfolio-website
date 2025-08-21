export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  demo?: string
  repo?: string
  image?: string
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'coming-soon'
}

export const projects: Project[] = [
  {
    id: 'nft-marketing',
    title: 'NFT Marketing Website',
    description: 'Marketing website for NFT collections with responsive UI, collection showcase and call-to-action for buyers.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    demo: 'https://nft-card-assignment.vercel.app',
    repo: 'https://github.com/shri33/nft-marketing-website', // TODO: Update with actual repo URL
    image: '/images/project-nft.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'virtual-staging-ai',
    title: 'Virtual Staging AI',
    description: 'AI-powered Shopify image optimizer and virtual staging tool for e-commerce product photography enhancement.',
    tech: ['Next.js', 'React', 'Tailwind', 'Python'],
    demo: '', // Coming soon
    repo: 'https://github.com/shri33/AI-Powered-Shopify-Product-Image-Optimizer-Virtual-Staging-Tool',
    image: '/images/placeholder.png',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, animations, and generative project case studies.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://shri33.github.io/',
    repo: 'https://github.com/shri33/shri33.github.io',
    image: '/images/placeholder.png',
    featured: false,
    status: 'completed'
  }
]
