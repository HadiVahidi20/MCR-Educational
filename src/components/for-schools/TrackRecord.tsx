'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Young people supported', sublabel: 'Since 2018' },
  { value: 95, suffix: '%', label: 'Attendance rate', sublabel: 'vs 62% national AP average' },
  { value: 40, suffix: '+', label: 'Partner schools', sublabel: 'Across Greater Manchester' },
  { value: 87, suffix: '%', label: 'Progress on targets', sublabel: 'Reported each half-term' },
]

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1400, active)
  return (
    <div className="text-center px-6 py-8">
      <p
        className="font-stats font-bold text-5xl sm:text-6xl text-white mb-2 tabular-nums"
        aria-label={`${stat.value}${stat.suffix} — ${stat.label}`}
      >
        <span aria-hidden="true">
          {count}
          {stat.suffix}
        </span>
      </p>
      <p className="font-heading font-semibold text-white text-base sm:text-lg mb-1">
        {stat.label}
      </p>
      <p className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</p>
    </div>
  )
}

export default function TrackRecord() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-labelledby="track-record-heading"
      className="relative bg-neutral-dark py-20 sm:py-24 overflow-hidden"
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our track record
          </p>
          <h2
            id="track-record-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl"
          >
            Outcomes You Can Show Your Governors
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          Data from internal outcomes reporting, 2023–24 academic year.
        </p>
      </div>
    </section>
  )
}
