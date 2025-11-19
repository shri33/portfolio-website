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
    id: 'meshery-contribution',
    title: 'Meshery - Cloud Native Manager (Open Source)',
    description: 'Active contributor to Meshery, the cloud native manager. Contributed to improving infrastructure management capabilities and user experience.',
    tech: ['JavaScript', 'Go', 'Kubernetes', 'Docker', 'Cloud Native'],
    demo: 'https://meshery.io',
    repo: 'https://github.com/meshery/meshery',
    image: '/images/project-meshery.svg',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 'pollinations-contribution',
    title: 'Pollinations - Open-Source Gen-AI Platform (Open Source)',
    description: 'Contributor to Pollinations, your friendly open-source generative AI platform. Helping build accessible AI tools for everyone.',
    tech: ['JavaScript', 'AI/ML', 'Node.js', 'Python', 'Generative AI'],
    demo: 'https://pollinations.ai',
    repo: 'https://github.com/pollinations/pollinations',
    image: '/images/project-pollinations.svg',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 'tourpin-contribution',
    title: 'TourPin - Travel Platform (Open Source)',
    description: 'Major contributor implementing authentication, profile endpoints, and Supabase schema integration. Applied full backend architecture with role-based access control.',
    tech: ['TypeScript', 'Supabase', 'PostgreSQL', 'Next.js', 'Authentication'],
    demo: '',
    repo: 'https://github.com/Marcusqw/TourPin',
    image: '/images/project-tourpin.svg',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 'ai-benchmark-tracker',
    title: 'Lightweight AI Benchmark Tracker',
    description: 'Self-hosted MLOps platform for experiment tracking, metrics visualization, model comparison, and comprehensive reporting. Tracked 50+ model evaluations with real-time metrics dashboard.',
    tech: ['Python', 'TensorFlow', 'Plotly', 'Data Visualization', 'MLOps'],
    demo: '',
    repo: 'https://github.com/shri33/Lightweight-AI-Benchmark-Tracker',
    image: '/images/project-ai-benchmark.svg',
    featured: true,
    status: 'completed'
  },
  {
    id: 'nft-marketing',
    title: 'NFT Marketing Website',
    description: 'Marketing microsite for NFT drops with responsive gallery, artist showcase, and clear CTAs. 500+ active users at launch with Web3 wallet integration.',
    tech: ['React', 'HTML5', 'CSS3', 'Tailwind', 'Web3.js', 'Ethereum'],
    demo: 'https://nft-card-assignment.vercel.app',
    repo: 'https://github.com/shri33/NFT-Card-Assignment',
    image: '/images/project-nft.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'virtual-staging-ai',
    title: 'AI-Powered Shopify Image Optimizer & Virtual Staging',
    description: 'Revolutionary generative AI pipeline featuring advanced image preprocessing, neural style transfer, and automated optimization workflows. 40% reduction in image load size with enhanced product visualization.',
    tech: ['TensorFlow', 'PyTorch', 'Python', 'Computer Vision', 'Next.js', 'React', 'Tailwind'],
    demo: 'https://image-magic-fmvp.vercel.app/',
    repo: 'https://github.com/shri33/AI-Powered-Shopify-Product-Image-Optimizer-Virtual-Staging-Tool',
    image: '/images/project-virtual-staging.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'image-magic-virtual-staging',
    title: 'Image Magic — Virtual Staging & Shopify Image Optimizer',
    description: 'AI-driven virtual staging and Shopify product image optimizer: remove background, stage rooms, and create multiple optimized marketing images to improve conversion. Includes a web UI and batch processing pipeline.',
    tech: ['Next.js', 'React', 'Tailwind', 'Node.js', 'Python (AI backend)', 'OpenAI / custom model', 'ImageMagick', 'Cloud storage'],
    demo: 'https://image-magic-fmvp.vercel.app/',
    repo: 'https://github.com/shri33/AI-Powered-Shopify-Product-Image-Optimizer-Virtual-Staging-Tool',
    image: '/images/project-image-magic.svg',
    featured: false,
    status: 'completed'
  },
  {
    id: 'journal-survey-engine',
    title: 'Survey Engine Platform — Enterprise Survey Management',
    description: 'Enterprise-grade survey management system with advanced admin controls, real-time analytics, and multi-format exports. Managed 200+ surveys with 30% faster setup time.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'REST APIs', 'Docker'],
    demo: '',
    repo: 'https://github.com/mlops-and-cloud-db/journal-survey-engine',
    image: '/images/project-journal-survey.svg',
    featured: true,
    status: 'completed'
  },
  {
    id: 'spotify-inspired-ui',
    title: 'Music Player UI — Spotify Inspired',
    description: 'A pixel-perfect, responsive music player UI built with React + Tailwind. Includes keyboard shortcuts, search-as-you-type, and accessible controls.',
    tech: ['React', 'Tailwind', 'TypeScript'],
    demo: '',
    repo: '',
    image: '/images/project-spotify.svg',
    featured: false,
    status: 'coming-soon'
  },
  {
    id: 'realtime-collab-editor',
    title: 'Realtime Collaborative Editor',
    description: 'A production-style collaborative document editor with CRDT-based conflict resolution, WebRTC peer sync, presence indicators, and offline edits that sync when online.',
    tech: ['TypeScript', 'Next.js', 'React', 'WebRTC', 'Yjs/Automerge', 'Redis (presence)', 'Docker', 'Vitest'],
    demo: '',
    repo: '',
    image: '/images/project-realtime-collab.svg',
    featured: false,
    status: 'coming-soon'
  },
  {
    id: 'ecommerce-microfrontend',
    title: 'E-commerce Microfrontend (Performance-first)',
    description: 'A production-grade product page built as a microfrontend using edge SSR, image optimization, critical CSS, and analytics instrumentation for product experiments.',
    tech: ['Next.js (app router)', 'Vercel Edge Functions', 'Tailwind', 'Lighthouse optimized', 'Split.io (feature flags)'],
    demo: '',
    repo: '',
    image: '/images/project-ecommerce-mf.svg',
    featured: false,
    status: 'coming-soon'
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
