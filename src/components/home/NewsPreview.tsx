import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

// Placeholder items — will be replaced by live Payload CMS data in Phase 3
const posts = [
  {
    slug: 'mcr-educational-opens-doors-2026',
    type: 'news' as const,
    tag: 'Announcement',
    tagColor: 'bg-secondary/10 text-secondary',
    date: '18 Feb 2026',
    title: 'MCR Educational Welcomes Its Largest Cohort Yet This Spring',
    excerpt:
      'With 42 young people now enrolled, Spring 2026 marks our biggest intake and introduces two new creative arts programmes.',
    readTime: '3 min read',
  },
  {
    slug: 'dance-showcase-april-2026',
    type: 'event' as const,
    tag: 'Event',
    tagColor: 'bg-accent/10 text-accent',
    date: '4 Apr 2026',
    title: 'Spring Dance Showcase — Open to Families & Schools',
    excerpt:
      "Join us for an afternoon celebrating our students' creativity and hard work. All are welcome. Free entry, refreshments provided.",
    readTime: 'Event · 4 Apr 2026',
  },
  {
    slug: 'alternative-provision-why-it-works',
    type: 'news' as const,
    tag: 'Blog',
    tagColor: 'bg-primary/10 text-primary',
    date: '1 Mar 2026',
    title: 'Why Alternative Provision Works: The Evidence Behind the Approach',
    excerpt:
      'We explore the research behind creative alternative provision and why schools across Greater Manchester are choosing MCR Educational.',
    readTime: '6 min read',
  },
];

export default function NewsPreview() {
  return (
    <section
      aria-labelledby="news-heading"
      className="bg-neutral-light py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2
              id="news-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-2"
            >
              Latest News &amp; Events
            </h2>
            <p className="text-neutral-dark/60 text-base sm:text-lg max-w-lg">
              Stay up to date with what's happening at MCR Educational.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            View all news
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Cards grid */}
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {posts.map(({ slug, tag, tagColor, date, title, excerpt, readTime }) => (
            <li key={slug}>
              <Link
                href={`/news/${slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-lg hover:border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {/* Placeholder image area */}
                <div
                  className="h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
                    <Tag size={20} className="text-primary/40" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Tag + date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
                      {tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-neutral-dark/40">
                      <Calendar size={11} aria-hidden="true" />
                      {date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-neutral-dark text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-150">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-dark/55 text-sm leading-relaxed flex-1 mb-4">
                    {excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-neutral-dark/35">{readTime}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all duration-150">
                      Read more
                      <ArrowRight
                        size={12}
                        aria-hidden="true"
                        className="transition-transform duration-150 group-hover:translate-x-1"
                      />
                    </span>
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
