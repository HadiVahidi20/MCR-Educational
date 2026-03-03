// FILE: src/app/news/page.tsx

import type { Metadata } from 'next'
import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'

export const metadata: Metadata = {
  title: 'News & Insights | MCR Educational',
  description:
    'Stay up to date with the latest news, student achievements, staff spotlights, and community highlights from MCR Educational.',
  openGraph: {
    title: 'News & Insights | MCR Educational',
    description:
      'Stay up to date with the latest news, student achievements, staff spotlights, and community highlights from MCR Educational.',
    url: '/news',
  },
}

export default function NewsPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <BlogHero />

      {/* ── 2. BLOG GRID ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="blog-grid-heading"
        className="bg-neutral-light py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-grid-heading" className="sr-only">
            All posts
          </h2>
          <BlogGrid />
        </div>
      </section>
    </main>
  )
}
