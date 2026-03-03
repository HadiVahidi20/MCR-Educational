// FILE: src/components/for-students/ActivityGallery.tsx

import { Camera } from 'lucide-react'

const galleryItems = [
  {
    label: 'Music Session',
    gradient: 'from-accent/70 to-primary/80',
    aspect: 'aspect-[3/4]',
    textColor: 'text-white',
  },
  {
    label: 'Art Workshop',
    gradient: 'from-[#8B5CF6]/70 to-[#6D28D9]/80',
    aspect: 'aspect-video',
    textColor: 'text-white',
  },
  {
    label: 'Football',
    gradient: 'from-[#10B981]/70 to-[#047857]/80',
    aspect: 'aspect-square',
    textColor: 'text-white',
  },
  {
    label: 'Cooking Club',
    gradient: 'from-[#F59E0B]/70 to-[#D97706]/80',
    aspect: 'aspect-[3/4]',
    textColor: 'text-white',
  },
  {
    label: 'Science',
    gradient: 'from-primary/70 to-[#2ECDA7]/60',
    aspect: 'aspect-video',
    textColor: 'text-white',
  },
  {
    label: 'Drama',
    gradient: 'from-secondary/70 to-[#BE185D]/80',
    aspect: 'aspect-square',
    textColor: 'text-white',
  },
  {
    label: 'Outdoor Trip',
    gradient: 'from-[#065F46]/70 to-[#10B981]/60',
    aspect: 'aspect-[3/4]',
    textColor: 'text-white',
  },
  {
    label: 'Awards Day',
    gradient: 'from-[#1E3A5F]/80 to-[#E85D75]/60',
    aspect: 'aspect-video',
    textColor: 'text-white',
  },
]

export default function ActivityGallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-neutral-dark py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-white/10 text-accent font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-accent/30">
              <Camera size={14} aria-hidden="true" />
              Gallery
            </span>
          </div>
          <h2
            id="gallery-heading"
            className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            Life at MCR
          </h2>
          <p className="font-body text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            A glimpse into a typical day — activities, learning, laughing, and growing together.
          </p>
        </div>

        {/* Masonry-style columns grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {galleryItems.map(({ label, gradient, aspect, textColor }) => (
            <div key={label} className="break-inside-avoid mb-3 sm:mb-4">
              <div
                className={`${aspect} relative w-full rounded-2xl bg-gradient-to-br ${gradient} overflow-hidden group`}
              >
                {/* Photo placeholder body */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  {/* Simulated image texture */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                      backgroundSize: '10px 10px',
                    }}
                  />
                  <Camera
                    aria-hidden="true"
                    size={28}
                    className={`${textColor} opacity-30 mb-2 group-hover:opacity-60 transition-opacity duration-300`}
                  />
                  <span
                    className={`${textColor} font-heading font-bold text-xs sm:text-sm text-center leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Consent note */}
        <p className="mt-8 text-center font-body text-white/35 text-xs sm:text-sm max-w-xl mx-auto">
          Photos taken with full consent from students, parents, and carers.
        </p>
      </div>
    </section>
  )
}
