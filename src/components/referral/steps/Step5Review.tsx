import type { ReferralFormValues } from '@/lib/referral-schema'
import { REFERRER_ROLES, SEND_NEEDS_OPTIONS } from '@/lib/referral-schema'

interface Props {
  values: ReferralFormValues
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <div className="flex gap-4 py-2.5 border-b border-primary/6 last:border-0">
      <dt className="text-neutral-dark/50 text-xs font-medium w-36 shrink-0 pt-0.5">{label}</dt>
      <dd className="text-neutral-dark text-sm leading-relaxed">{value}</dd>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-primary/8 bg-neutral-light p-6">
      <h3 className="font-heading font-bold text-primary text-base mb-4">{title}</h3>
      <dl>{children}</dl>
    </div>
  )
}

export default function Step5Review({ values }: Props) {
  const roleLabel = REFERRER_ROLES.find((r) => r.value === values.referrerRole)?.label ?? values.referrerRole
  const sendLabels = (values.sendNeeds ?? [])
    .map((v) => SEND_NEEDS_OPTIONS.find((o) => o.value === v)?.label ?? v)
    .join(', ')

  const ehcpLabel: Record<string, string> = { yes: 'Yes', no: 'No', pending: 'Pending' }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-1">
          Review &amp; Submit
        </h2>
        <p className="text-neutral-dark/55 text-sm">
          Please review the information below before submitting. You can go back to edit any
          section.
        </p>
      </div>

      <Section title="Your Details">
        <Row label="Full name" value={values.referrerName} />
        <Row label="Role" value={roleLabel} />
        <Row label="School / Organisation" value={values.referrerSchool} />
        <Row label="Email" value={values.referrerEmail} />
        <Row label="Phone" value={values.referrerPhone} />
      </Section>

      <Section title="Young Person">
        <Row label="Name" value={`${values.ypFirstName} ${values.ypLastName}`} />
        <Row label="Date of birth" value={values.ypDOB} />
        <Row label="Year group" value={values.ypYearGroup ? `Year ${values.ypYearGroup}` : undefined} />
        <Row label="Gender" value={values.ypGender} />
        <Row label="Ethnicity" value={values.ypEthnicity} />
      </Section>

      <Section title="Background">
        <Row label="Reason for referral" value={values.reasonForReferral} />
        <Row label="EHCP" value={values.hasEHCP ? ehcpLabel[values.hasEHCP] : undefined} />
        <Row label="SEND needs" value={sendLabels || undefined} />
        <Row label="Risk factors" value={values.riskFactors} />
      </Section>

      <Section title="Additional Information">
        <Row label="Attendance" value={values.currentAttendance} />
        <Row label="Exclusion history" value={values.exclusionHistory} />
        <Row label="Additional notes" value={values.additionalNotes} />
        <Row label="Parent consent" value={values.parentConsentGiven ? 'Confirmed' : 'Not given'} />
        <Row label="Data protection" value={values.dataProtectionAgreed ? 'Agreed' : 'Not agreed'} />
      </Section>

      <div className="rounded-2xl bg-secondary/8 border border-secondary/20 p-4">
        <p className="text-secondary font-semibold text-sm">
          By submitting this form, you confirm that all information provided is accurate and
          that parent/carer consent has been obtained.
        </p>
      </div>
    </div>
  )
}
