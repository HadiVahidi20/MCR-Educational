const steps = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description:
      'Contact us by phone, email, or our online form. Tell us about the young person and what support they need. We respond within one working day.',
  },
  {
    number: '02',
    title: 'Referral Submission',
    description:
      'Complete our straightforward referral form (online or paper). We\'ll ask for a brief educational history, EHCP if applicable, and any relevant SEND information.',
  },
  {
    number: '03',
    title: 'Assessment & Planning',
    description:
      'We meet with the young person and their family to carry out an initial assessment. An individualised learning plan is created within five working days.',
  },
  {
    number: '04',
    title: 'Placement Begins',
    description:
      'The young person joins our programme, typically within two weeks of the referral being accepted. Schools receive a placement confirmation and timetable.',
  },
  {
    number: '05',
    title: 'Ongoing Reporting',
    description:
      'You receive attendance updates weekly and a full progress report every half-term. We hold a review meeting each term with school, family, and student.',
  },
]

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-neutral-light py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Simple process
          </p>
          <h2
            id="how-it-works-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            How the Referral Process Works
          </h2>
          <p className="text-neutral-dark/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From first contact to placement, we keep the process straightforward so you can
            focus on your student.
          </p>
        </div>

        {/* Steps */}
        <ol role="list" className="relative max-w-3xl mx-auto space-y-0">
          {/* Vertical connector line */}
          <div
            className="absolute left-[27px] sm:left-[35px] top-10 bottom-10 w-px bg-primary/15 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map(({ number, title, description }, index) => (
            <li key={number} className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
              {/* Number bubble */}
              <div className="shrink-0 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-stats font-bold text-lg
                    ${index === 0
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                      : 'bg-white border-2 border-primary/15 text-primary'
                    }`}
                >
                  {number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2 pb-2">
                <h3 className="font-heading font-bold text-primary text-lg mb-1.5">{title}</h3>
                <p className="text-neutral-dark/65 text-sm leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
