'use client';

import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'students' | 'parents' | 'schools';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  category: Category;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Since joining MCR Educational, my confidence has grown so much. The dance sessions help me express myself and the teachers actually listen to what I say.",
    name: 'Jordan',
    role: 'Student, age 14',
    category: 'students',
    initials: 'JO',
  },
  {
    quote:
      "I actually look forward to coming in every day. It's the first time in two years I haven't been excluded. The staff here get me.",
    name: 'Tyrese',
    role: 'Student, age 15',
    category: 'students',
    initials: 'TY',
  },
  {
    quote:
      "The change in my son since he started at MCR Educational has been incredible. He's happier, calmer, and talking about his future. I wish we'd found this sooner.",
    name: 'Sarah M.',
    role: 'Parent of a Year 10 student',
    category: 'parents',
    initials: 'SM',
  },
  {
    quote:
      "We were at a loss with our daughter. MCR Educational gave her the structure she needed while still feeling human. The regular updates and communication have been brilliant.",
    name: 'David & Clare T.',
    role: 'Parents of a Year 9 student',
    category: 'parents',
    initials: 'DC',
  },
  {
    quote:
      "MCR Educational has been a genuine lifeline for students we were struggling to support. The team is professional, responsive, and the outcomes speak for themselves.",
    name: 'Ms. Patel',
    role: 'SENCO, Manchester secondary school',
    category: 'schools',
    initials: 'MP',
  },
  {
    quote:
      "I have referred several students over the past two years. Every single one has returned to us more settled, more confident, and ready to re-engage. Highly recommended.",
    name: 'Mr. Thornton',
    role: 'Deputy Headteacher',
    category: 'schools',
    initials: 'MT',
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: 'students', label: 'Students' },
  { key: 'parents', label: 'Parents' },
  { key: 'schools', label: 'Schools' },
];

export default function TestimonialsCarousel() {
  const [activeTab, setActiveTab] = useState<Category>('students');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = testimonials.filter((t) => t.category === activeTab);
  const current = filtered[activeIndex] ?? filtered[0];

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  }, [filtered.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
  }, [filtered.length]);

  if (!current) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-3"
          >
            What People Say
          </h2>
          <p className="text-neutral-dark/60 text-base sm:text-lg max-w-xl mx-auto">
            Hear from the students, parents, and schools we work with every day.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          role="tablist"
          aria-label="Testimonial categories"
          className="flex justify-center gap-2 mb-10"
        >
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={`testimonial-panel-${key}`}
              onClick={() => handleTabChange(key)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                activeTab === key
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-neutral-light text-neutral-dark/60 hover:bg-neutral-light/80 hover:text-primary'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Carousel panel */}
        <div
          id={`testimonial-panel-${activeTab}`}
          role="tabpanel"
          aria-label={`${activeTab} testimonials`}
          className="max-w-3xl mx-auto"
        >
          {/* Quote card */}
          <div className="relative bg-neutral-light rounded-3xl p-8 sm:p-12 text-center">
            {/* Decorative quote mark */}
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-md"
              aria-hidden="true"
            >
              <Quote size={18} className="text-white fill-white" />
            </div>

            {/* Quote text */}
            <blockquote className="mt-4 text-neutral-dark text-lg sm:text-xl leading-relaxed font-body italic mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold font-heading shrink-0"
                aria-hidden="true"
              >
                {current.initials}
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-dark font-heading text-sm">
                  {current.name}
                </div>
                <div className="text-neutral-dark/50 text-xs">{current.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          {filtered.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border-2 border-neutral-dark/20 flex items-center justify-center text-neutral-dark/50 hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2" role="group" aria-label="Testimonial position">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? 'true' : undefined}
                    className={cn(
                      'rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      i === activeIndex
                        ? 'w-6 h-2.5 bg-secondary'
                        : 'w-2.5 h-2.5 bg-neutral-dark/20 hover:bg-neutral-dark/40'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border-2 border-neutral-dark/20 flex items-center justify-center text-neutral-dark/50 hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
