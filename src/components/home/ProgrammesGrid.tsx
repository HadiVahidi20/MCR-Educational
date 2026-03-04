import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Music, Heart, Briefcase } from 'lucide-react';

const programmes = [
  {
    Icon: BookOpen,
    title: 'Academic Pathway',
    slug: 'academic-pathway',
    description:
      'GCSE English & Maths, functional skills, and accredited qualifications — delivered in small groups with personalised support.',
    tags: ['GCSE', 'Functional Skills', 'Accredited'],
    color: 'bg-primary',
    lightColor: 'bg-primary/8',
    textColor: 'text-primary',
    image: '/images/programmes/academic.jpg',
    imageAlt: 'Students studying together in a classroom',
  },
  {
    Icon: Music,
    title: 'Creative & Performing Arts',
    slug: 'creative-arts',
    description:
      'Dance, music, drama, and visual art programmes that build confidence, self-expression, and recognised arts qualifications.',
    tags: ['Dance', 'Music', 'Drama', 'Art'],
    color: 'bg-secondary',
    lightColor: 'bg-secondary/8',
    textColor: 'text-secondary',
    image: '/images/programmes/creative-arts.jpg',
    imageAlt: 'Young people dancing and performing',
  },
  {
    Icon: Heart,
    title: 'Wellbeing & Mentoring',
    slug: 'wellbeing',
    description:
      '1:1 key worker support, therapeutic activities, emotional regulation, and counselling to support mental health and resilience.',
    tags: ['SEMH', '1:1 Support', 'Counselling'],
    color: 'bg-accent',
    lightColor: 'bg-accent/8',
    textColor: 'text-accent',
    image: '/images/programmes/wellbeing.jpg',
    imageAlt: 'Mentoring and wellbeing support session',
  },
  {
    Icon: Briefcase,
    title: 'Life Skills & Employability',
    slug: 'life-skills',
    description:
      'Cooking, financial literacy, CV writing, mock interviews, and work experience placements preparing young people for adulthood.',
    tags: ['Employability', 'Work Experience', 'Life Skills'],
    color: 'bg-neutral-dark',
    lightColor: 'bg-neutral-dark/6',
    textColor: 'text-neutral-dark',
    image: '/images/programmes/life-skills.jpg',
    imageAlt: 'Young people developing employability skills',
  },
];

export default function ProgrammesGrid() {
  return (
    <section
      aria-labelledby="programmes-heading"
      className="bg-neutral-light py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2
              id="programmes-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-2"
            >
              What We Offer
            </h2>
            <p className="text-neutral-dark/60 text-base sm:text-lg max-w-lg">
              A holistic curriculum built around the whole young person — not
              just their academic attainment.
            </p>
          </div>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            View all programmes
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Programme cards */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programmes.map(({ Icon, title, slug, description, tags, color, lightColor, textColor, image, imageAlt }) => (
            <li key={slug}>
              <Link
                href={`/programmes/${slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-lg hover:border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {/* Programme image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${color}`} aria-hidden="true" />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${lightColor} ${textColor} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-lg text-neutral-dark mb-2 group-hover:${textColor} transition-colors duration-150`}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-dark/60 text-sm leading-relaxed flex-1 mb-5">
                    {description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${lightColor} ${textColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-primary/70 group-hover:text-primary group-hover:gap-2 transition-all duration-150 mt-auto">
                    Learn more
                    <ArrowRight
                      size={13}
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
