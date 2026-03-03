// FILE: src/app/news/[slug]/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { POSTS, getPost, getRelatedPosts } from '@/lib/blog-data'

type Props = {
  params: Promise<{ slug: string }>
}

// Explicit class maps — full strings required so Tailwind v4 detects them at build time
const STRIP_BG: Record<string, string> = {
  news: 'bg-primary',
  'student-achievement': 'bg-accent',
  'staff-spotlight': 'bg-secondary',
  community: 'bg-violet-500',
  events: 'bg-primary',
}

const BADGE_CLASSES: Record<string, string> = {
  news: 'bg-white/15 text-white',
  'student-achievement': 'bg-white/15 text-white',
  'staff-spotlight': 'bg-white/15 text-white',
  community: 'bg-white/15 text-white',
  events: 'bg-white/15 text-white',
}

const RELATED_STRIP_BG: Record<string, string> = {
  news: 'bg-primary',
  'student-achievement': 'bg-accent',
  'staff-spotlight': 'bg-secondary',
  community: 'bg-violet-500',
  events: 'bg-primary',
}

const RELATED_BADGE_CLASSES: Record<string, string> = {
  news: 'bg-primary/10 text-primary',
  'student-achievement': 'bg-accent/10 text-accent',
  'staff-spotlight': 'bg-secondary/10 text-secondary',
  community: 'bg-violet-500/10 text-violet-700',
  events: 'bg-primary/10 text-primary',
}

const CATEGORY_LABELS: Record<string, string> = {
  news: 'News',
  'student-achievement': 'Student Achievement',
  'staff-spotlight': 'Staff Spotlight',
  community: 'Community',
  events: 'Events',
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatShortDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} | News | MCR Educational`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | News | MCR Educational`,
      description: post.excerpt,
      url: `/news/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const related = getRelatedPosts(slug, 3)
  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category
  const badgeClass = BADGE_CLASSES[post.category] ?? 'bg-white/15 text-white'

  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="post-heading"
        className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
      >
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  News
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-white/70 line-clamp-1" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <div className="mb-4">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border border-white/20 ${badgeClass}`}
            >
              {categoryLabel}
            </span>
          </div>

          {/* Post title */}
          <h1
            id="post-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6 max-w-3xl"
          >
            {post.title}
          </h1>

          {/* Author + date row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60 mb-4">
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
          </div>

          {/* Read time badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/70 text-xs font-medium px-3 py-1 rounded-full">
            <Clock size={12} aria-hidden="true" />
            {post.readTime} read
          </div>
        </div>
      </section>

      {/* ── 2. ARTICLE BODY ──────────────────────────────────────────────── */}
      <section aria-label="Article body" className="bg-white py-16">
        <div className="max-w-prose mx-auto px-4">
          <p className="prose font-body text-neutral-dark/75 text-lg leading-relaxed">
            {post.content}
          </p>
        </div>
      </section>

      {/* ── 3. RELATED POSTS ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-posts-heading"
          className="bg-neutral-light py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-posts-heading"
              className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-8"
            >
              Related Posts
            </h2>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              aria-label="Related posts"
            >
              {related.map((relPost) => {
                const relStrip = RELATED_STRIP_BG[relPost.category] ?? 'bg-primary'
                const relBadge = RELATED_BADGE_CLASSES[relPost.category] ?? 'bg-primary/10 text-primary'
                const relLabel = CATEGORY_LABELS[relPost.category] ?? relPost.category

                return (
                  <li key={relPost.slug}>
                    <Link
                      href={`/news/${relPost.slug}`}
                      className={[
                        'group flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden h-full',
                        'hover:shadow-md hover:scale-[1.01] transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      ].join(' ')}
                    >
                      {/* Colour top strip */}
                      <div className={`h-1.5 w-full shrink-0 ${relStrip}`} aria-hidden="true" />

                      <div className="flex flex-col flex-1 p-5">
                        {/* Category badge */}
                        <div className="mb-2">
                          <span
                            className={`inline-block text-xs font-semibold px-3 py-0.5 rounded-full ${relBadge}`}
                          >
                            {relLabel}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-neutral-dark text-sm leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors flex-1">
                          {relPost.title}
                        </h3>

                        {/* Footer */}
                        <div className="flex items-center gap-3 text-xs text-neutral-dark/50 mt-3 border-t border-neutral-dark/8 pt-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} aria-hidden="true" />
                            {formatShortDate(relPost.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={10} aria-hidden="true" />
                            {relPost.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ── 4. CTA STRIP ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="post-cta-heading"
        className="bg-primary py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
            <h2
              id="post-cta-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug"
            >
              Want to know more? Get in touch.
            </h2>

            <Link
              href="/contact"
              className={[
                'inline-flex items-center gap-2 shrink-0',
                'border-2 border-white text-white font-medium text-sm sm:text-base',
                'px-7 py-3 rounded-full',
                'hover:bg-white hover:text-primary',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
              ].join(' ')}
            >
              Contact Us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
