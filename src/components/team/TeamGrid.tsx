// FILE: src/components/team/TeamGrid.tsx
'use client'

import { useState } from 'react'
import { TEAM_MEMBERS } from '@/lib/team-data'

// Explicit class maps — full strings required so Tailwind v4 detects them at build time
const STRIP_BG: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
}

const AVATAR_BG: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
}

type FilterValue = 'all' | 'leadership' | 'teaching' | 'pastoral' | 'support'

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Teaching', value: 'teaching' },
  { label: 'Pastoral', value: 'pastoral' },
  { label: 'Support', value: 'support' },
]

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  return (
    <div>
      {/* Filter buttons */}
      <div
        role="group"
        aria-label="Filter team by department"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14"
        aria-label="Team members"
      >
        {TEAM_MEMBERS.map((member) => {
          const isVisible =
            activeFilter === 'all' || member.department === activeFilter
          const stripClass = STRIP_BG[member.accentColor] ?? 'bg-primary'
          const avatarClass = AVATAR_BG[member.accentColor] ?? 'bg-primary'

          return (
            <li
              key={member.id}
              className={[
                'pt-10 transition-all duration-300 ease-in-out',
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none',
              ].join(' ')}
              aria-hidden={!isVisible}
            >
              {/* Card */}
              <article className="relative bg-white rounded-2xl shadow-sm border border-neutral-dark/5 overflow-visible h-full flex flex-col">
                {/* Colour strip */}
                <div className={`h-1.5 w-full rounded-t-2xl shrink-0 ${stripClass}`} aria-hidden="true" />

                {/* Card body */}
                <div className="flex flex-col items-center px-5 pb-6 flex-1">
                  {/* Avatar */}
                  <div
                    className={[
                      '-mt-10 w-20 h-20 rounded-full flex items-center justify-center',
                      'text-xl font-bold font-heading text-white shrink-0',
                      'ring-4 ring-white shadow-md',
                      avatarClass,
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>

                  {/* Text content */}
                  <div className="mt-4 text-center flex flex-col flex-1 w-full">
                    <h3 className="font-heading font-bold text-neutral-dark text-base leading-snug">
                      {member.name}
                    </h3>

                    <p className="text-sm text-secondary font-medium mt-0.5">
                      {member.role}
                    </p>

                    {/* Department badge */}
                    <div className="mt-2 flex justify-center">
                      <span className="inline-block bg-neutral-light text-neutral-dark/60 text-xs font-medium px-3 py-0.5 rounded-full capitalize">
                        {member.department}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="font-body text-sm text-neutral-dark/60 leading-relaxed mt-3 line-clamp-3 text-left">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
