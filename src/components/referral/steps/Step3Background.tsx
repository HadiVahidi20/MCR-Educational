import type { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form'
import type { ReferralFormValues } from '@/lib/referral-schema'
import { SEND_NEEDS_OPTIONS } from '@/lib/referral-schema'

interface Props {
  register: UseFormRegister<ReferralFormValues>
  errors: FieldErrors<ReferralFormValues>
  watch: UseFormWatch<ReferralFormValues>
  setValue: UseFormSetValue<ReferralFormValues>
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p role="alert" className="mt-1.5 text-xs text-secondary font-medium">{message}</p>
}

export default function Step3Background({ register, errors, watch, setValue }: Props) {
  const selectedNeeds = (watch('sendNeeds') as string[] | undefined) ?? []

  function toggleNeed(value: string) {
    const updated = selectedNeeds.includes(value)
      ? selectedNeeds.filter((v) => v !== value)
      : [...selectedNeeds, value]
    setValue('sendNeeds', updated, { shouldDirty: true })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-1">Background</h2>
        <p className="text-neutral-dark/55 text-sm">
          Help us understand why this young person is being referred and what support they need.
        </p>
      </div>

      {/* Reason for referral */}
      <div>
        <label htmlFor="reasonForReferral" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Reason for referral <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="reasonForReferral"
          rows={5}
          placeholder="Describe why this young person is being referred to MCR Educational…"
          {...register('reasonForReferral')}
          aria-invalid={!!errors.reasonForReferral}
          aria-describedby={errors.reasonForReferral ? 'reason-error' : undefined}
          className="w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
        />
        <FieldError message={errors.reasonForReferral?.message} />
      </div>

      {/* EHCP status */}
      <div>
        <label htmlFor="hasEHCP" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Does the young person have an EHCP? <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <select
          id="hasEHCP"
          {...register('hasEHCP')}
          aria-invalid={!!errors.hasEHCP}
          className="w-full rounded-xl border border-primary/20 bg-white px-4 py-2.5 text-sm text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
        >
          <option value="">Select…</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="pending">Pending / under assessment</option>
        </select>
        <FieldError message={errors.hasEHCP?.message} />
      </div>

      {/* SEND needs checkboxes */}
      <fieldset>
        <legend className="block text-sm font-semibold text-neutral-dark mb-3">
          SEND needs
          <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(select all that apply)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SEND_NEEDS_OPTIONS.map(({ value, label }) => {
            const checked = selectedNeeds.includes(value)
            return (
              <label
                key={value}
                className="flex items-center gap-3 p-3 rounded-xl border border-primary/10 cursor-pointer hover:bg-primary/3 transition-colors"
              >
                <input
                  type="checkbox"
                  value={value}
                  checked={checked}
                  onChange={() => toggleNeed(value)}
                  className="w-4 h-4 rounded accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  aria-label={label}
                />
                <span className="text-sm text-neutral-dark/80">{label}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Risk factors */}
      <div>
        <label htmlFor="riskFactors" className="block text-sm font-semibold text-neutral-dark mb-1.5">
          Known risk factors or safeguarding concerns
          <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
        </label>
        <textarea
          id="riskFactors"
          rows={3}
          placeholder="Any relevant safeguarding information, risk factors, or safety considerations…"
          {...register('riskFactors')}
          className="w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>
    </div>
  )
}
