import { Star, Zap, Palette, HandHeart } from 'lucide-react';

const values = [
  {
    Icon: Star,
    title: 'Respect',
    description:
      'We treat every young person with dignity, listen without judgement, and build genuine relationships built on trust.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    Icon: Zap,
    title: 'Resilience',
    description:
      "We support young people to face challenges, bounce back from setbacks, and believe in what they're capable of achieving.",
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    Icon: Palette,
    title: 'Creativity',
    description:
      'We use art, dance, and expression as tools for learning, healing, and discovering strengths that traditional education can miss.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    Icon: HandHeart,
    title: 'Community',
    description:
      'We work together — students, families, schools, and partners — because lasting change happens when everyone plays their part.',
    color: 'text-neutral-dark',
    bg: 'bg-neutral-dark/8',
  },
];

export default function ValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-primary py-20 sm:py-24 relative overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="values-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl mb-3"
          >
            Our Values
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Everything we do is guided by four principles that put young people
            at the centre.
          </p>
        </div>

        {/* Value cards */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map(({ Icon, title, description, color, bg }) => (
            <li
              key={title}
              className="bg-white/8 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/12 transition-colors duration-200"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center mb-5`}
                aria-hidden="true"
              >
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-xl mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
