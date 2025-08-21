import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://shri33.github.io'),
  title: 'Shri Srivastava — Frontend Developer',
  description: 'Portfolio of Shri Srivastava — Innovative Frontend Developer with 3+ years of experience in React, Next.js, and modern web technologies',
  keywords: ['Shri Srivastava', 'Frontend Developer', 'React', 'Next.js', 'Web Developer', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Shri Srivastava' }],
  creator: 'Shri Srivastava',
  openGraph: {
    title: 'Shri Srivastava — Frontend Developer',
    description: 'Innovative Frontend Developer with 3+ years of experience in React, Next.js, and modern web technologies',
    type: 'website',
    locale: 'en_US',
    url: 'https://shri33.github.io',
    siteName: 'Shri Srivastava Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Srivastava — Frontend Developer',
    description: 'Innovative Frontend Developer with 3+ years of experience in React, Next.js, and modern web technologies',
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
  verification: {
    // TODO: Add verification tokens for search consoles
    // google: 'your-google-verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialColorMode() {
                  const persistedColorPreference = window.localStorage.getItem('theme');
                  const hasPersistedPreference = typeof persistedColorPreference === 'string';
                  
                  if (hasPersistedPreference) {
                    return persistedColorPreference;
                  }
                  
                  const mql = window.matchMedia('(prefers-color-scheme: dark)');
                  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                  
                  if (hasMediaQueryPreference) {
                    return mql.matches ? 'dark' : 'light';
                  }
                  
                  return 'light';
                }
                
                const colorMode = getInitialColorMode();
                
                if (colorMode === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        {/* Skip to content link */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:z-50"
        >
          Skip to content
        </a>
        
        <Header />
        <main id="main">{children}</main>
        <Footer />
        
        {/* Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // TODO: Add analytics code here
              // Example for Google Analytics:
              // window.dataLayer = window.dataLayer || [];
              // function gtag(){dataLayer.push(arguments);}
              // gtag('js', new Date());
              // gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}');
            `,
          }}
        />
      </body>
    </html>
  )
}
