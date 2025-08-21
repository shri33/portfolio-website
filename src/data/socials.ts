export type Social = {
  name: string
  url: string
  icon: string
  username?: string
}

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shri-srivastava-ab04a5175/',
    icon: 'linkedin',
    username: 'shri-srivastava'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/shri33',
    icon: 'github',
    username: 'shri33'
  },
  {
    name: 'Portfolio',
    url: 'https://shri33.github.io/',
    icon: 'globe',
    username: 'shri33.github.io'
  },
  {
    name: 'Email',
    url: 'mailto:shrisrivastava2@gmail.com',
    icon: 'mail',
    username: 'shrisrivastava2@gmail.com'
  },
  {
    name: 'Phone',
    url: 'tel:+917903696009',
    icon: 'phone',
    username: '+91 7903696009'
  }
]

export const contactInfo = {
  name: 'Shri Srivastava',
  displayName: 'Shri',
  title: 'Frontend Developer',
  location: 'Patna, India',
  email: 'shrisrivastava2@gmail.com',
  phone: '+91 7903696009',
  bio: 'Innovative Frontend Developer with 3+ years of experience building responsive UIs using React.js, Next.js, Redux, and modern web technologies. Skilled at bridging design & engineering to produce fast, accessible experiences.',
  experience: '3+ Years Experience',
  education: 'Computer Science Student',
  specialization: 'Web3 & Blockchain'
}
