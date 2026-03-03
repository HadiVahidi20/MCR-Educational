// FILE: src/components/blog/BlogGrid.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { POSTS } from '@/lib/blog-data'

type CategoryFilter = 'all' | 'news' | 'student-achievement' | 'staff-spotlight' | 'community'

const FILTERS: { label: string; value: CategoryFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'News', value: 'news' },
  { label: 'Student Achievement', value: 'student-achievement' },
  { label: 'Staff Spotlight', value: 'staff-spotlight' },
  { label: 'Community', value: 'community' },
]

// Explicit class maps — full strings required so Tailwind v4 detects them at build time
const STRIP_BG: Record<string, string> = {
  news: 'bg-primary',
  'student-achievement': 'bg-accent',
  'staff-spotlight': 'bg-secondary',
  community: 'bg-violet-500',
  events: 'bg-primary',
}

const BADGE_CLASSES: Record<string, string> = {
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
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  const filtered =
    activeCategory === 'all'
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter posts by category"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {FILTERS.map((filter) => {
          const isActive = activeCategory === filter.value
          return (
            <button
              key={filter.value}
              onClick={() => setActiveCategory(filter.value)}
              aria-pressed={isActive}
              className={[
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-neutral-dark border border-neutral-dark/10 hover:border-primary/30 hover:text-primary',
              ].join(' ')}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Card grid */}
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-label="Blog posts"
      >
        {filtered.map((post) => {
          const stripClass = STRIP_BG[post.category] ?? 'bg-primary'
          const badgeClass = BADGE_CLASSES[post.category] ?? 'bg-primary/10 text-primary'
          const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category

          return (
            <li key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                className={[
                  'group flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden h-full',
                  'hover:shadow-md hover:scale-[1.01] transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                ].join(' ')}
              >
                {/* Colour top strip */}
                <div className={`h-1.5 w-full shrink-0 ${stripClass}`} aria-hidden="true" />

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full capitalize ${badgeClass}`}
                    >
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading font-bold text-neutral-dark text-base leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-neutral-dark/60 leading-relaxed line-clamp-3 flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-dark/50 border-t border-neutral-dark/8 pt-3 mt-auto">
                    <span className="flex items-center gap-1.5">
                      <User size={11} aria-hidden="true" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} aria-hidden="true" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {filtered.length === 0 && (
        <p className="text-center text-neutral-dark/50 font-body py-16">
          No posts found in this category.
        </p>
      )}
    </div>
  )
}
