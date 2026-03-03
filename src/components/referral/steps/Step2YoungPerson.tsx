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

export default function Step2YoungPerson({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-1">Young Person Details</h2>
        <p className="text-neutral-dark/55 text-sm">
          Details about the young person you are referring. All information is treated in
          strict confidence.
        </p>
      </div>

      {/* First + Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ypFirstName" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            First name <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="ypFirstName"
            type="text"
            {...register('ypFirstName')}
            aria-invalid={!!errors.ypFirstName}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          <FieldError message={errors.ypFirstName?.message} />
        </div>
        <div>
          <label htmlFor="ypLastName" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Last name <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="ypLastName"
            type="text"
            {...register('ypLastName')}
            aria-invalid={!!errors.ypLastName}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          <FieldError message={errors.ypLastName?.message} />
        </div>
      </div>

      {/* DOB + Year group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ypDOB" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Date of birth <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="ypDOB"
            type="date"
            {...register('ypDOB')}
            aria-invalid={!!errors.ypDOB}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          <FieldError message={errors.ypDOB?.message} />
        </div>
        <div>
          <label htmlFor="ypYearGroup" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Year group <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <select
            id="ypYearGroup"
            {...register('ypYearGroup')}
            aria-invalid={!!errors.ypYearGroup}
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-2.5 text-sm text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
          >
            <option value="">Select…</option>
            {['7', '8', '9', '10', '11'].map((y) => (
              <option key={y} value={y}>Year {y}</option>
            ))}
          </select>
          <FieldError message={errors.ypYearGroup?.message} />
        </div>
      </div>

      {/* Gender + Ethnicity (optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ypGender" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Gender
            <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
          </label>
          <Input
            id="ypGender"
            type="text"
            placeholder="e.g. Male, Female, Non-binary…"
            {...register('ypGender')}
            className="rounded-xl border-primary/20 focus-visible:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="ypEthnicity" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Ethnicity
            <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
          </label>
          <Input
            id="ypEthnicity"
            type="text"
            placeholder="e.g. White British, Asian British…"
            {...register('ypEthnicity')}
            className="rounded-xl border-primary/20 focus-visible:ring-primary"
          />
        </div>
      </div>
    </div>
  )
}
