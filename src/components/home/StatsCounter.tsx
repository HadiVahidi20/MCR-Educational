'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Young People', sublabel: 'Supported to date' },
  { value: 95, suffix: '%', label: 'Attendance Rate', sublabel: 'Vs 62% national AP avg' },
  { value: 40, suffix: '+', label: 'Partner Schools', sublabel: 'Across Greater Manchester' },
  { value: 100, suffix: '%', label: 'Feel Safer', sublabel: 'Reported by students' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1400, active);
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div
        className="font-stats font-bold text-5xl sm:text-6xl text-white mb-1 tabular-nums"
        aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
      >
        <span aria-hidden="true">
          {count}
          {stat.suffix}
        </span>
      </div>
      <div className="font-heading font-semibold text-white text-base sm:text-lg mb-1">
        {stat.label}
      </div>
      <div className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Impact statistics"
      className="bg-primary py-16 sm:py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider lines + grid */}
        <div
          className={cn(
            'grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0',
            'divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/10'
          )}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
