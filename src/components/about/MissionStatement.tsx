import { Quote } from 'lucide-react'

export default function MissionStatement() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 justify-center">
          <span className="h-px w-12 bg-secondary" aria-hidden="true" />
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest">
            Our Mission
          </p>
          <span className="h-px w-12 bg-secondary" aria-hidden="true" />
        </div>

        {/* Mission card */}
        <div className="relative rounded-3xl bg-primary overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-accent/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative z-10 px-8 py-14 sm:px-16 sm:py-20 text-center max-w-4xl mx-auto">
            <Quote
              size={40}
              className="text-accent/60 mx-auto mb-8"
              aria-hidden="true"
            />
            <h2
              id="mission-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-8"
            >
              To provide inclusive, creative, and trauma-informed education that re-engages
              young people with learning — and with themselves.
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe every young person deserves an education that sees them as a whole
              person. Our mission is to be that provision — one that listens, adapts, and
              never gives up.
            </p>

            {/* Three pillars */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  color: 'bg-secondary',
                  title: 'Inclusive',
                  desc: 'We remove barriers to participation — physical, emotional, and academic.',
                },
                {
                  color: 'bg-accent',
                  title: 'Creative',
                  desc: 'Dance, arts, and project-based work are not extras — they are the curriculum.',
                },
                {
                  color: 'bg-white/20',
                  title: 'Trauma-Informed',
                  desc: 'We understand where our students come from and meet them there, without judgement.',
                },
              ].map(({ color, title, desc }) => (
                <div key={title} className="bg-white/8 border border-white/10 rounded-2xl p-6">
                  <div className={`w-2 h-2 rounded-full ${color} mb-4`} aria-hidden="true" />
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
