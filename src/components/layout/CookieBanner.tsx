'use client'

// FILE: src/components/layout/CookieBanner.tsx

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const CONSENT_KEY = 'mcr_cookie_consent'
type ConsentValue = 'accepted' | 'declined'

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null
      if (!stored) {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable — show banner by default
      setVisible(true)
    }
  }, [])

  function handleConsent(value: ConsentValue) {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {
      // Silently fail if localStorage is blocked
    }
    setVisible(false)
  }

  // Avoid SSR mismatch — don't render anything until mounted on client
  if (!mounted) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
      className={[
        'fixed bottom-0 left-0 right-0 z-50',
        'bg-primary text-white',
        'transition-transform duration-300 ease-in-out',
        visible ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon */}
          <div
            className="shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hidden sm:flex"
            aria-hidden="true"
          >
            <Cookie size={16} aria-hidden="true" />
          </div>

          {/* Text */}
          <p className="font-body text-white/85 text-sm leading-relaxed flex-1">
            We use essential cookies to run this site and optional analytics cookies to
            improve your experience.{' '}
            <Link
              href="/policies/cookie-policy"
              className="underline underline-offset-2 text-accent hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-primary rounded"
            >
              Read our Cookie Policy
            </Link>
            .
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => handleConsent('accepted')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-accent text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Accept All
            </button>

            <button
              onClick={() => handleConsent('declined')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 border-2 border-white/40 text-white font-medium text-sm px-5 py-2.5 rounded-full hover:border-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Essential Only
            </button>

            {/* Close / dismiss (same as Essential Only) */}
            <button
              onClick={() => handleConsent('declined')}
              aria-label="Dismiss cookie banner"
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-primary"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
