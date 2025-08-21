interface AnalyticsEvent {
  action: string
  category?: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

export function initializeAnalytics(gaId: string) {
  if (typeof window === 'undefined' || !gaId) return

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function(...args: any[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', gaId, {
    page_title: document.title,
    page_location: window.location.href,
  })
}

export function trackEvent({ action, category = 'engagement', label, value }: AnalyticsEvent) {
  if (typeof window === 'undefined' || !window.gtag) {
    console.log('Analytics event:', { action, category, label, value })
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
    page_path: url,
  })
}

// Common event trackers
export const analytics = {
  contactFormSubmit: () => trackEvent({ action: 'contact_form_submit', category: 'form' }),
  projectViewDemo: (projectName: string) => trackEvent({ action: 'view_demo', category: 'project', label: projectName }),
  projectViewCode: (projectName: string) => trackEvent({ action: 'view_code', category: 'project', label: projectName }),
  resumeDownload: () => trackEvent({ action: 'download_resume', category: 'document' }),
  generateProject: () => trackEvent({ action: 'generate_project', category: 'ai' }),
  copyToClipboard: (content: string) => trackEvent({ action: 'copy_to_clipboard', category: 'interaction', label: content }),
}
