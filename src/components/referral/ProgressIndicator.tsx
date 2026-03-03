import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const STEPS = [
  { number: 1, label: 'Your Details' },
  { number: 2, label: 'Young Person' },
  { number: 3, label: 'Background' },
  { number: 4, label: 'Additional Info' },
  { number: 5, label: 'Review' },
]

interface ProgressIndicatorProps {
  currentStep: number
}

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Form progress" className="mb-10">
      <ol role="list" className="flex items-center justify-between">
        {STEPS.map((step, index) => {
          const isCompleted = currentStep > step.number
          const isCurrent = currentStep === step.number

          return (
            <li key={step.number} className="flex items-center flex-1 last:flex-none">
              {/* Step bubble */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors',
                    isCompleted && 'bg-accent text-white',
                    isCurrent && 'bg-primary text-white shadow-md shadow-primary/30',
                    !isCompleted && !isCurrent && 'bg-primary/10 text-primary/40'
                  )}
                  aria-current={isCurrent ? 'step' : undefined}
                  aria-label={`Step ${step.number}: ${step.label}${isCompleted ? ' (completed)' : isCurrent ? ' (current)' : ''}`}
                >
                  {isCompleted ? (
                    <Check size={16} aria-hidden="true" />
                  ) : (
                    <span aria-hidden="true">{step.number}</span>
                  )}
                </div>
                <span
                  className={cn(
                    'hidden sm:block text-xs font-medium text-center leading-tight max-w-[72px]',
                    isCurrent ? 'text-primary' : isCompleted ? 'text-accent' : 'text-primary/35'
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-px mx-2 sm:mx-3 mb-5 transition-colors',
                    isCompleted ? 'bg-accent' : 'bg-primary/10'
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
