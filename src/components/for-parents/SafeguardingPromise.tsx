// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\SafeguardingPromise.tsx
import { Shield } from 'lucide-react'

const commitments = [
  {
    title: 'Designated Safeguarding Lead on Site',
    description:
      'A trained Designated Safeguarding Lead (DSL) is present on site at all times during the school day, ready to act immediately if a concern arises.',
  },
  {
    title: 'DBS Checked & Regularly Trained Staff',
    description:
      'Every member of our team holds an enhanced DBS certificate and undertakes regular safeguarding refresher training in line with Keeping Children Safe in Education.',
  },
  {
    title: 'Clear Protocols — Parents Always Informed',
    description:
      'We have transparent procedures for handling concerns. Parents and carers are always informed promptly and are included in any safeguarding conversations that involve their child.',
  },
]

export default function SafeguardingPromise() {
  return (
    <section
      aria-labelledby="safeguarding-heading"
      className="relative bg-[#1E3A5F] py-20 sm:py-24 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E85D75]/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#2ECDA7]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centred icon + heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className="w-20 h-20 rounded-2xl bg-[#2ECDA7]/15 flex items-center justify-center mb-6"
            aria-hidden="true"
          >
            <Shield size={44} className="text-[#2ECDA7]" aria-hidden="true" />
          </div>
          <p className="text-[#2ECDA7] font-semibold text-sm uppercase tracking-widest mb-3">
            Your child&apos;s safety
          </p>
          <h2
            id="safeguarding-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4 max-w-2xl"
          >
            Our Safeguarding Promise
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed font-body">
            Keeping children safe is not just a legal duty — it is at the heart of everything we
            do. Every family can trust that their child is in a secure, well-monitored environment.
          </p>
        </div>

        {/* Commitment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {commitments.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/12 bg-white/6 p-7 flex flex-col gap-3"
            >
              <div
                className="w-2 h-2 rounded-full bg-[#2ECDA7] shrink-0"
                aria-hidden="true"
              />
              <h3 className="font-heading font-bold text-white text-base leading-snug">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-body">{description}</p>
            </div>
          ))}
        </div>

        {/* Policy link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[#E85D75] underline underline-offset-4 text-sm font-semibold hover:text-[#E85D75]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A5F] rounded-sm"
          >
            View our Safeguarding Policy →
          </a>
        </div>
      </div>
    </section>
  )
}
