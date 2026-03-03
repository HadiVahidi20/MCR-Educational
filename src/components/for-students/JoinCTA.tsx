// FILE: src/components/for-students/JoinCTA.tsx

import { School, Users, Phone, HeartHandshake } from 'lucide-react'

const routes = [
  {
    icon: School,
    title: 'Ask Your School',
    description:
      'Talk to your form tutor, SENCO, head of year, or pastoral lead. They can contact MCR Educational and start the process on your behalf.',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    border: 'border-primary/10',
  },
  {
    icon: Users,
    title: 'Talk to a Parent',
    description:
      'Parents and carers can also reach out to us directly. We work closely with families to make sure every young person gets the right support.',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    border: 'border-secondary/10',
  },
]

export default function JoinCTA() {
  return (
    <section
      aria-labelledby="join-cta-heading"
      className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-secondary via-secondary to-[#C44D64]"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          aria-hidden="true"
          className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-2xl mb-6 mx-auto"
        >
          <HeartHandshake size={32} className="text-white" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="join-cta-heading"
          className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
        >
          Interested in Joining Us?
        </h2>

        <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Talk to your school or parent&#47;carer about getting in touch with MCR Educational.
          We&rsquo;d love to meet you.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {routes.map(({ icon: Icon, title, description, iconBg, iconColor, border }) => (
            <div
              key={title}
              className={`bg-white border ${border} rounded-2xl p-6 sm:p-8 text-left shadow-xl shadow-black/10`}
            >
              <div className={`${iconBg} ${iconColor} inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-neutral-dark text-lg mb-3">{title}</h3>
              <p className="font-body text-neutral-dark/65 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance + phone */}
        <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 inline-block">
          <p className="font-body text-white/90 text-sm sm:text-base mb-3">
            <span className="font-semibold">If you&rsquo;re worried or need someone to talk to,</span>{' '}
            we&rsquo;re here.
          </p>
          <a
            href="tel:01611234567"
            className="inline-flex items-center gap-2 bg-white text-secondary font-heading font-bold text-base sm:text-lg px-6 py-2.5 rounded-full shadow-md hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary focus-visible:outline-none"
          >
            <Phone size={18} aria-hidden="true" />
            0161 123 4567
          </a>
        </div>
      </div>
    </section>
  )
}
