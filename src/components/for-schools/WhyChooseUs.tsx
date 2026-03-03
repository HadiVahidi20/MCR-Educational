import { GraduationCap, LayoutTemplate, BarChart3 } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Qualified Teachers',
    description:
      'All sessions are led by qualified, DBS-checked educators with specialist experience in alternative provision, SEND, and trauma-informed practice.',
    accent: 'bg-secondary/10 text-secondary',
  },
  {
    icon: LayoutTemplate,
    title: 'Tailored Learning',
    description:
      'No two students are the same. We design individualised learning plans aligned to each young person\'s EHCP, gaps in attainment, and personal interests.',
    accent: 'bg-accent/10 text-accent',
  },
  {
    icon: BarChart3,
    title: 'Progress Reports',
    description:
      'Transparent, regular reporting for schools, parents, and local authorities — including attendance data, attainment updates, and wellbeing checks every half-term.',
    accent: 'bg-primary/10 text-primary',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Why partner with us
          </p>
          <h2
            id="why-choose-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            What Sets Us Apart
          </h2>
          <p className="text-neutral-dark/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just take referrals — we build genuine partnerships with schools to
            ensure every young person receives consistent, quality provision.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="rounded-3xl border border-primary/8 bg-neutral-light p-8 flex flex-col gap-5"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">{title}</h3>
                <p className="text-neutral-dark/65 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
