import { z } from 'zod'

// ── Step 1: Referrer details ─────────────────────────────────────────────────
export const step1Schema = z.object({
  referrerName: z.string().min(2, 'Full name is required'),
  referrerRole: z.enum(
    ['teacher', 'senco', 'inclusion-manager', 'la-coordinator', 'headteacher', 'other'],
    { message: 'Please select your role' }
  ),
  referrerSchool: z.string().min(2, 'School or organisation name is required'),
  referrerEmail: z.string().email('Enter a valid email address'),
  referrerPhone: z.string().min(7, 'Enter a contact phone number'),
})

// ── Step 2: Young person details ─────────────────────────────────────────────
export const step2Schema = z.object({
  ypFirstName: z.string().min(1, 'First name is required'),
  ypLastName: z.string().min(1, 'Last name is required'),
  ypDOB: z.string().min(1, 'Date of birth is required'),
  ypYearGroup: z.enum(['7', '8', '9', '10', '11'], { message: 'Please select a year group' }),
  ypGender: z.string().optional(),
  ypEthnicity: z.string().optional(),
})

// ── Step 3: Background ───────────────────────────────────────────────────────
export const step3Schema = z.object({
  reasonForReferral: z.string().min(20, 'Please provide at least 20 characters'),
  hasEHCP: z.enum(['yes', 'no', 'pending'], { message: 'Please select one option' }),
  sendNeeds: z.array(z.string()).optional(),
  riskFactors: z.string().optional(),
})

// ── Step 4: Additional information ───────────────────────────────────────────
export const step4Schema = z.object({
  currentAttendance: z.string().min(1, 'Attendance information is required'),
  exclusionHistory: z.string().optional(),
  additionalNotes: z.string().optional(),
  parentConsentGiven: z.literal(true, {
    message: 'Parent or carer consent is required before submitting a referral',
  }),
  dataProtectionAgreed: z.literal(true, {
    message: 'You must agree to the data protection statement',
  }),
})

// ── Combined schema (Step 5 review has no new fields) ────────────────────────
export const referralSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)

export type ReferralFormValues = z.infer<typeof referralSchema>

// Fields per step — used by the wizard to trigger per-step validation
export const stepFields: Record<number, (keyof ReferralFormValues)[]> = {
  1: ['referrerName', 'referrerRole', 'referrerSchool', 'referrerEmail', 'referrerPhone'],
  2: ['ypFirstName', 'ypLastName', 'ypDOB', 'ypYearGroup'],
  3: ['reasonForReferral', 'hasEHCP'],
  4: ['currentAttendance', 'parentConsentGiven', 'dataProtectionAgreed'],
}

export const SEND_NEEDS_OPTIONS = [
  { value: 'adhd', label: 'ADHD' },
  { value: 'autism', label: 'Autism / ASD' },
  { value: 'semh', label: 'Social, Emotional & Mental Health (SEMH)' },
  { value: 'slcn', label: 'Speech, Language & Communication (SLCN)' },
  { value: 'mld', label: 'Moderate Learning Difficulties (MLD)' },
  { value: 'spld', label: 'Specific Learning Difficulties (e.g. Dyslexia)' },
  { value: 'physical', label: 'Physical / Sensory' },
  { value: 'other', label: 'Other' },
]

export const REFERRER_ROLES = [
  { value: 'teacher', label: 'Teacher' },
  { value: 'senco', label: 'SENCO' },
  { value: 'inclusion-manager', label: 'Inclusion Manager' },
  { value: 'la-coordinator', label: 'LA / EHC Coordinator' },
  { value: 'headteacher', label: 'Headteacher / Principal' },
  { value: 'other', label: 'Other' },
]
