// FILE: src/components/for-students/WhatWeDo.tsx

import { Music, Dumbbell, Palette, BookOpen, ChefHat, Briefcase } from 'lucide-react'

const activities = [
  {
    icon: Music,
    title: 'Music & Performing Arts',
    description: 'Songwriting, instruments, drama, and live performance — find your stage.',
    iconColor: 'text-white',
    iconBg: 'bg-accent',
    topAccent: 'bg-accent',
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor Education',
    description: 'Football, gym sessions, outdoor trips, teamwork, and physical wellbeing.',
    iconColor: 'text-white',
    iconBg: 'bg-secondary',
    topAccent: 'bg-secondary',
  },
  {
    icon: Palette,
    title: 'Art & Creative Media',
    description: 'Painting, photography, digital art, and design to spark your creativity.',
    iconColor: 'text-white',
    iconBg: 'bg-[#8B5CF6]',
    topAccent: 'bg-[#8B5CF6]',
  },
  {
    icon: BookOpen,
    title: 'English & Maths Support',
    description: 'Build confidence in core skills at a pace that works for you.',
    iconColor: 'text-white',
    iconBg: 'bg-primary',
    topAccent: 'bg-primary',
  },
  {
    icon: ChefHat,
    title: 'Life Skills & Cooking',
    description: 'Practical cooking, budgeting, and everyday skills for independent living.',
    iconColor: 'text-white',
    iconBg: 'bg-[#F59E0B]',
    topAccent: 'bg-[#F59E0B]',
  },
  {
    icon: Briefcase,
    title: 'Employability & Work Experience',
    description: 'CVs, mock interviews, real placements — get ready for the world of work.',
    iconColor: 'text-white',
    iconBg: 'bg-[#10B981]',
    topAccent: 'bg-[#10B981]',
  },
]

export default function WhatWeDo() {
  return (
    <section
      id="activities"
      aria-labelledby="what-we-do-heading"
      className="bg-neutral-light py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-accent/15 text-accent font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-accent/20">
            Activities &amp; Learning
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="what-we-do-heading"
            className="font-heading font-extrabold text-neutral-dark text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            Something for Everyone
          </h2>
          <p className="font-body text-neutral-dark/60 text-base sm:text-lg max-w-2xl mx-auto">
            Whatever you&rsquo;re into — or whatever you&rsquo;re trying to figure out — we&rsquo;ve
            got something that fits.
          </p>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(({ icon: Icon, title, description, iconColor, iconBg, topAccent }) => (
            <article
              key={title}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Top colour accent line */}
              <div className={`${topAccent} h-1 w-full`} aria-hidden="true" />

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`${iconBg} ${iconColor} inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-neutral-dark text-lg leading-snug mb-2">
                  {title}
                </h3>
                <p className="font-body text-neutral-dark/60 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
