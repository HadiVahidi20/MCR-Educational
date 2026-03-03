import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { ReferralFormValues } from '@/lib/referral-schema'
import { Input } from '@/components/ui/input'

interface Props {
  register: UseFormRegister<ReferralFormValues>
  errors: FieldErrors<ReferralFormValues>
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p role="alert" className="mt-1.5 text-xs text-secondary font-medium">{message}</p>
}

export default function Step4AdditionalInfo({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-1">Additional Information</h2>
        <p className="text-neutral-dark/55 text-sm">
          Attendance history, exclusions, and consent — required before we can proceed.
        </p>
      </div>

      {/* Attendance */}
      <div>
        <label htmlFor="currentAttendance" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Current attendance rate <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <Input
          id="currentAttendance"
          type="text"
          placeholder="e.g. 45% (last full term)"
          {...register('currentAttendance')}
          aria-invalid={!!errors.currentAttendance}
          className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
        />
        <FieldError message={errors.currentAttendance?.message} />
      </div>

      {/* Exclusion history */}
      <div>
        <label htmlFor="exclusionHistory" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Exclusion history
          <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
        </label>
        <textarea
          id="exclusionHistory"
          rows={3}
          placeholder="e.g. 3 fixed-term exclusions in the last 12 months for persistent disruption"
          {...register('exclusionHistory')}
          className="w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>

      {/* Additional notes */}
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Anything else we should know?
          <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
        </label>
        <textarea
          id="additionalNotes"
          rows={3}
          placeholder="Any additional context that would help us prepare for this young person…"
          {...register('additionalNotes')}
          className="w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>

      {/* Consent checkboxes */}
      <fieldset className="space-y-4 pt-2">
        <legend className="font-heading font-bold text-primary text-base mb-3">Consent &amp; Data Protection</legend>

        {/* Parent consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('parentConsentGiven')}
              aria-invalid={!!errors.parentConsentGiven}
              className="mt-0.5 w-4 h-4 rounded accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 shrink-0"
            />
            <span className="text-sm text-neutral-dark/80 leading-relaxed">
              <strong className="text-neutral-dark font-semibold">Parent / carer consent</strong> — I
              confirm that the parent or carer of the young person has given informed consent for
              this referral to be submitted and for MCR Educational to hold their child&apos;s
              personal data. <span className="text-secondary" aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError message={errors.parentConsentGiven?.message} />
        </div>

        {/* Data protection */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('dataProtectionAgreed')}
              aria-invalid={!!errors.dataProtectionAgreed}
              className="mt-0.5 w-4 h-4 rounded accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 shrink-0"
            />
            <span className="text-sm text-neutral-dark/80 leading-relaxed">
              <strong className="text-neutral-dark font-semibold">Data protection</strong> — I
              understand that the information submitted will be stored securely by MCR Educational
              in accordance with UK GDPR and used solely for the purpose of assessing and
              supporting this referral. <span className="text-secondary" aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError message={errors.dataProtectionAgreed?.message} />
        </div>
      </fieldset>
    </div>
  )
}
