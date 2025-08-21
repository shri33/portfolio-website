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
    description: 'Marketing microsite for NFT drops with responsive gallery, artist showcase, and clear CTAs. Focus: conversion-driven UI and animations.',
    tech: ['React', 'HTML5', 'CSS3', 'Tailwind'],
    demo: 'https://nft-card-assignment.vercel.app',
    repo: 'https://github.com/shri33/NFT-Card-Assignment',
    image: '/images/project-nft.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'virtual-staging-ai',
    title: 'Virtual Staging AI — Image Optimizer',
    description: 'AI-assisted virtual staging & Shopify image optimizer to create staged product photos, improving perceived quality and conversion potential.',
    tech: ['Next.js', 'React', 'Tailwind', 'Python'],
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
    title: 'Journal Survey Engine — Research Survey Platform',
    description: 'A survey and journal engine built for research workflows — supports modular forms, result collection, export, and data pipeline hooks. Designed to integrate with MLOps pipelines for experiment data collection.',
    tech: ['Node.js', 'React', 'Postgres', 'Docker', 'Kubernetes (optional)', 'MLOps integration'],
    demo: '',
    repo: 'https://github.com/mlops-and-cloud-db/journal-survey-engine',
    image: '/images/project-journal-survey.svg',
    featured: false,
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
