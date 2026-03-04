import Image from 'next/image'
import { BookOpen, Users, GraduationCap } from 'lucide-react'

const highlights = [
  { Icon: BookOpen, value: '6+', label: 'Years operating' },
  { Icon: Users, value: '150+', label: 'Young people supported' },
  { Icon: GraduationCap, value: '40+', label: 'Partner schools' },
]

export default function OurStory() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="bg-neutral-light py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2
              id="our-story-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl leading-tight mb-6"
            >
              Born out of a need for something different
            </h2>
            <div className="space-y-4 text-neutral-dark/70 text-base sm:text-lg leading-relaxed">
              <p>
                MCR Educational was founded in 2018 when a group of educators, youth workers, and
                dancers in Greater Manchester recognised a gap: young people being excluded from
                mainstream school with nowhere meaningful to go.
              </p>
              <p>
                We started with a single cohort in a community hall. Today we run structured
                programmes across multiple sites, supporting young people whose needs haven&apos;t
                been met by traditional provision.
              </p>
              <p>
                Our approach puts creativity at the centre — using dance, arts, and real-world
                projects to build the academic confidence and life skills that help young people
                thrive beyond education.
              </p>
            </div>
          </div>

          {/* Image + Stats card column */}
          <div className="relative space-y-6">
            {/* Story image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/our-story.jpg"
                alt="Young people collaborating in a creative learning environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-accent/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white rounded-3xl shadow-sm border border-neutral-dark/6 p-8 sm:p-10">
              <p className="font-heading font-bold text-primary text-base mb-8">
                Our impact so far
              </p>
              <ul role="list" className="space-y-6">
                {highlights.map(({ Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-stats font-bold text-primary text-2xl leading-none">
                        {value}
                      </p>
                      <p className="text-neutral-dark/60 text-sm mt-0.5">{label}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Bottom accent */}
              <div className="mt-8 pt-8 border-t border-neutral-dark/8">
                <p className="text-neutral-dark/50 text-xs leading-relaxed">
                  Every number represents a young person who needed a different path — and found
                  one with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
