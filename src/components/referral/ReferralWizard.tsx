'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'

import { referralSchema, stepFields, type ReferralFormValues } from '@/lib/referral-schema'
import { Button } from '@/components/ui/button'
import ProgressIndicator from '@/components/referral/ProgressIndicator'
import Step1Referrer from '@/components/referral/steps/Step1Referrer'
import Step2YoungPerson from '@/components/referral/steps/Step2YoungPerson'
import Step3Background from '@/components/referral/steps/Step3Background'
import Step4AdditionalInfo from '@/components/referral/steps/Step4AdditionalInfo'
import Step5Review from '@/components/referral/steps/Step5Review'

const STORAGE_KEY = 'mcr_referral_draft'
const TOTAL_STEPS = 5

const DEFAULT_VALUES: Partial<ReferralFormValues> = {
  sendNeeds: [],
  parentConsentGiven: undefined,
  dataProtectionAgreed: undefined,
}

export default function ReferralWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched',
  })

  const { register, handleSubmit, watch, setValue, trigger, getValues, formState: { errors, isSubmitting } } = form

  // ── Restore draft from localStorage ─────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ReferralFormValues>
        Object.entries(parsed).forEach(([key, val]) => {
          setValue(key as keyof ReferralFormValues, val as never, { shouldDirty: false })
        })
      }
    } catch {
      // Ignore corrupt storage
    }
  }, [setValue])

  // ── Auto-save to localStorage on every change ────────────────────────────
  useEffect(() => {
    const subscription = watch((values) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
      } catch {
        // Quota exceeded or private browsing
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  // ── Navigate to next step (validate current step first) ──────────────────
  async function handleNext() {
    const fields = stepFields[step]
    const valid = fields ? await trigger(fields) : true
    if (valid) setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 1))
  }

  // ── Final submit ─────────────────────────────────────────────────────────
  async function onSubmit(data: ReferralFormValues) {
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Server error')

      const { referenceNumber } = (await res.json()) as { referenceNumber: string }

      // Clear draft
      try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }

      router.push(`/for-schools/referral/confirmation?ref=${encodeURIComponent(referenceNumber)}`)
    } catch {
      toast.error('Submission failed', {
        description: 'Please try again or call us on 0161 123 4567.',
      })
    }
  }

  const values = getValues()

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressIndicator currentStep={step} />

      <div className="bg-white rounded-3xl border border-primary/8 shadow-sm p-8 sm:p-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Referral form">
          {/* Step content */}
          {step === 1 && <Step1Referrer register={register} errors={errors} />}
          {step === 2 && <Step2YoungPerson register={register} errors={errors} />}
          {step === 3 && (
            <Step3Background
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          )}
          {step === 4 && <Step4AdditionalInfo register={register} errors={errors} />}
          {step === 5 && <Step5Review values={values} />}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-primary/8">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="border-primary/20 text-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-30"
            >
              <ArrowLeft size={16} aria-hidden="true" className="mr-2" />
              Back
            </Button>

            <p className="text-neutral-dark/35 text-xs hidden sm:block">
              Step {step} of {TOTAL_STEPS}
            </p>

            {step < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 text-white font-bold focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Next
                <ArrowRight size={16} aria-hidden="true" className="ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" aria-hidden="true" />
                    Submitting…
                  </>
                ) : (
                  'Submit Referral'
                )}
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Draft note */}
      <p className="text-center text-neutral-dark/35 text-xs mt-4">
        Your progress is saved automatically. You can close this page and return later.
      </p>
    </div>
  )
}
