import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { ReferralFormValues } from '@/lib/referral-schema'
import { REFERRER_ROLES } from '@/lib/referral-schema'
import { Input } from '@/components/ui/input'

interface Props {
  register: UseFormRegister<ReferralFormValues>
  errors: FieldErrors<ReferralFormValues>
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 text-xs text-secondary font-medium">
      {message}
    </p>
  )
}

export default function Step1Referrer({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-1">Your Details</h2>
        <p className="text-neutral-dark/55 text-sm">
          Tell us about yourself so we can follow up with you directly.
        </p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="referrerName" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Full name <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <Input
          id="referrerName"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          {...register('referrerName')}
          aria-invalid={!!errors.referrerName}
          aria-describedby={errors.referrerName ? 'referrerName-error' : undefined}
          className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
        />
        <FieldError message={errors.referrerName?.message} />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="referrerRole" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Your role <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <select
          id="referrerRole"
          {...register('referrerRole')}
          aria-invalid={!!errors.referrerRole}
          className="w-full rounded-xl border border-primary/20 bg-white px-4 py-2.5 text-sm text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
        >
          <option value="">Select role…</option>
          {REFERRER_ROLES.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <FieldError message={errors.referrerRole?.message} />
      </div>

      {/* School */}
      <div>
        <label htmlFor="referrerSchool" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          School or organisation <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <Input
          id="referrerSchool"
          type="text"
          autoComplete="organization"
          placeholder="e.g. Salford City Academy"
          {...register('referrerSchool')}
          aria-invalid={!!errors.referrerSchool}
          className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
        />
        <FieldError message={errors.referrerSchool?.message} />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="referrerEmail" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Email address <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="referrerEmail"
            type="email"
            autoComplete="email"
            placeholder="jane@school.co.uk"
            {...register('referrerEmail')}
            aria-invalid={!!errors.referrerEmail}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          <FieldError message={errors.referrerEmail?.message} />
        </div>
        <div>
          <label htmlFor="referrerPhone" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Phone number <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="referrerPhone"
            type="tel"
            autoComplete="tel"
            placeholder="0161 000 0000"
            {...register('referrerPhone')}
            aria-invalid={!!errors.referrerPhone}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          <FieldError message={errors.referrerPhone?.message} />
        </div>
      </div>
    </div>
  )
}
