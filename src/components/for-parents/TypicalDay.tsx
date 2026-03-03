// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\TypicalDay.tsx

const timelineItems = [
  {
    time: '09:00',
    title: 'Arrival & Morning Check-in',
    description: 'Students are welcomed in, register is taken, and the day ahead is introduced in a calm and positive atmosphere.',
  },
  {
    time: '09:15',
    title: 'Morning Mentor Session',
    description: 'One-to-one time with each student\'s key worker to set personal goals for the day and address any concerns before learning begins.',
  },
  {
    time: '09:45',
    title: 'Core Learning Block 1',
    description: 'Focused teaching in English, Maths, or Science — delivered in small groups with qualified teachers and adapted to each student\'s level.',
  },
  {
    time: '11:15',
    title: 'Break',
    description: 'A chance to recharge with supervised outdoor activity, free time, or quiet space — supporting wellbeing and social development.',
  },
  {
    time: '11:30',
    title: 'Core Learning Block 2 or Enrichment Subject',
    description: 'A second academic session or an enrichment subject such as art, computing, PSHE, or a vocational pathway.',
  },
  {
    time: '12:45',
    title: 'Lunch',
    description: 'A sociable, supervised lunch break. Students are encouraged to connect, relax, and reset for the afternoon.',
  },
  {
    time: '13:30',
    title: 'Creative / Vocational / Life Skills Session',
    description: 'Hands-on learning in areas such as cooking, enterprise, music, horticulture, or community projects — building confidence beyond the classroom.',
  },
  {
    time: '14:30',
    title: 'Reflection & Planning',
    description: 'Students review their progress from the day with their key worker and set personal goals for tomorrow.',
  },
  {
    time: '15:15',
    title: 'Home Time',
    description: 'A positive send-off — students leave feeling acknowledged, with any messages for families communicated promptly.',
  },
]

export default function TypicalDay() {
  return (
    <section
      aria-labelledby="typical-day-heading"
      className="bg-[#F7F8FC] py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#E85D75] font-semibold text-sm uppercase tracking-widest mb-3">
            Structure &amp; routine
          </p>
          <h2
            id="typical-day-heading"
            className="font-heading font-bold text-[#1E3A5F] text-3xl sm:text-4xl mb-4"
          >
            A Typical School Day
          </h2>
          <p className="text-[#1A1A2E]/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Predictable routines help young people feel safe. Here is what a typical day looks like
            at MCR Educational.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-[72px] sm:left-20 top-0 bottom-0 w-px bg-[#1E3A5F]/10"
            aria-hidden="true"
          />

          <ol className="space-y-0" aria-label="Typical school day timeline">
            {timelineItems.map((item, index) => (
              <li key={item.time} className="relative flex gap-6 sm:gap-8 group">
                {/* Time column */}
                <div className="flex flex-col items-end w-16 sm:w-[72px] shrink-0 pt-6">
                  <span className="font-stats font-bold text-[#2ECDA7] text-sm sm:text-base leading-none tabular-nums">
                    {item.time}
                  </span>
                </div>

                {/* Dot on the line */}
                <div
                  className="relative flex items-start pt-6 shrink-0"
                  aria-hidden="true"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2ECDA7] border-2 border-white shadow-sm z-10 mt-0.5" />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 pb-8 ${index < timelineItems.length - 1 ? '' : ''}`}
                >
                  <div
                    className={`rounded-xl p-5 border ${
                      index % 2 === 0
                        ? 'bg-white border-[#1E3A5F]/8'
                        : 'bg-[#F7F8FC] border-[#1E3A5F]/6'
                    }`}
                  >
                    <h3 className="font-heading font-bold text-[#1E3A5F] text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A2E]/60 text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
