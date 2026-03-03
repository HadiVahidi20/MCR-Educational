const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description:
      'MCR Educational launched as part of MCR HQ CIC, running its first cohort from a community space in central Manchester.',
  },
  {
    year: '2019',
    title: 'First Formal Partnerships',
    description:
      'Established formal alternative provision agreements with five Greater Manchester schools, placing our programmes on official timetables.',
  },
  {
    year: '2020',
    title: 'Adapted Through the Pandemic',
    description:
      'Delivered hybrid and online sessions throughout COVID-19 closures, ensuring continuity for vulnerable young people with no other provision.',
  },
  {
    year: '2021',
    title: '100 Students Milestone',
    description:
      'Surpassed 100 young people supported, expanding to a second permanent site and adding a dedicated wellbeing strand.',
  },
  {
    year: '2023',
    title: 'Grew to 40+ Partner Schools',
    description:
      'Deepened relationships across Greater Manchester, with referrals from 40+ schools and two local authorities recognising our outcomes data.',
  },
  {
    year: '2024',
    title: 'Digital & CMS Platform',
    description:
      'Launched a new digital platform to improve referral management, parent communication, and transparency in outcomes reporting.',
  },
]

export default function MilestonesTimeline() {
  return (
    <section
      aria-labelledby="milestones-heading"
      className="bg-neutral-light py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Journey
          </p>
          <h2
            id="milestones-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl"
          >
            Key Milestones
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-[72px] sm:left-[88px] top-0 bottom-0 w-px bg-primary/15"
            aria-hidden="true"
          />

          <ol role="list" className="space-y-10">
            {milestones.map(({ year, title, description }, index) => (
              <li key={year} className="relative flex gap-6 sm:gap-8">
                {/* Year + dot */}
                <div className="flex flex-col items-center shrink-0 w-[72px] sm:w-[88px]">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-primary mt-1.5 z-10 ${index === milestones.length - 1 ? 'bg-secondary border-secondary' : 'bg-white'}`}
                    aria-hidden="true"
                  />
                  <span className="font-stats font-bold text-primary text-sm mt-2 tabular-nums">
                    {year}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-neutral-dark/6 p-6 flex-1 shadow-sm">
                  <h3 className="font-heading font-bold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-neutral-dark/60 text-sm leading-relaxed">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
