import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  url?: string
  image?: string
  type?: 'website' | 'article'
}

export function generateSEO({
  title = 'Shri Srivastava — Frontend Developer',
  description = 'Innovative Frontend Developer with 3+ years of experience in React, Next.js, and modern web technologies',
  keywords = ['Shri Srivastava', 'Frontend Developer', 'React', 'Next.js', 'Web Developer', 'JavaScript', 'TypeScript'],
  author = 'Shri Srivastava',
  url = 'https://shri33.github.io',
  image = '/images/og-image.jpg',
  type = 'website'
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    openGraph: {
      title,
      description,
      type,
      locale: 'en_US',
      url,
      siteName: 'Shri Srivastava Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateStructuredData(props: {
  name: string
  jobTitle: string
  description: string
  url: string
  email: string
  telephone: string
  location: string
  sameAs: string[]
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name,
    alternateName: 'Shiljit',
    jobTitle: props.jobTitle,
    description: props.description,
    url: props.url,
    email: props.email,
    telephone: props.telephone,
    image: props.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: props.location.split(',')[0],
      addressCountry: 'India',
    },
    sameAs: props.sameAs,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Birla Institute of Technology and Science, Pilani',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Frontend Development',
      'Web3',
      'Blockchain',
      'UI/UX Design',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
    ],
  }
}
