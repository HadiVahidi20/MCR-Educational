'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  role: z.enum(['school', 'local-authority', 'parent', 'student', 'other'], {
    message: 'Please select who you are',
  }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  _hp: z.string().max(0), // honeypot — must stay empty
})

type FormValues = z.infer<typeof schema>

const roleOptions = [
  { value: 'school', label: 'A school or college' },
  { value: 'local-authority', label: 'A local authority' },
  { value: 'parent', label: 'A parent or carer' },
  { value: 'student', label: 'A young person' },
  { value: 'other', label: 'Other' },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: '' },
  })

  async function onSubmit(data: FormValues) {
    // Silently drop honeypot-triggered submissions
    if (data._hp) return

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Server error')

      toast.success('Message sent!', {
        description: "Thanks for getting in touch. We'll reply within 48 hours.",
      })
      setSubmitted(true)
      reset()
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or call us on 0161 123 4567.',
      })
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-accent/10 border border-accent/30 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-5">
          <Send size={24} aria-hidden="true" />
        </div>
        <h3 className="font-heading font-bold text-primary text-xl mb-2">Message received!</h3>
        <p className="text-neutral-dark/60 text-sm leading-relaxed max-w-xs mx-auto mb-6">
          Thank you for reaching out. A member of our team will respond within 48 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSubmitted(false)}
          className="border-primary/30 text-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-6"
    >
      {/* Honeypot — visually hidden, must never be filled */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_hp">Leave this field empty</label>
        <input id="_hp" tabIndex={-1} autoComplete="off" {...register('_hp')} />
      </div>

      {/* I am a */}
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-semibold text-neutral-dark mb-1.5"
        >
          I am a <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <select
          id="role"
          {...register('role')}
          aria-describedby={errors.role ? 'role-error' : undefined}
          aria-invalid={!!errors.role}
          className="w-full rounded-xl border border-primary/20 bg-white px-4 py-2.5 text-sm text-neutral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
        >
          <option value="">Select…</option>
          {roleOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.role && (
          <p id="role-error" role="alert" className="mt-1.5 text-xs text-secondary font-medium">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Full name <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            {...register('name')}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-secondary font-medium">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Email address <span className="text-secondary" aria-hidden="true">*</span>
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            {...register('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            className="rounded-xl border-primary/20 focus-visible:ring-primary aria-[invalid=true]:border-secondary"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-secondary font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-1.5">
            Phone number
            <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
          </label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900000"
            {...register('phone')}
            className="rounded-xl border-primary/20 focus-visible:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-semibold text-neutral-dark mb-1.5"
          >
            Organisation
            <span className="text-neutral-dark/40 font-normal ml-1 text-xs">(optional)</span>
          </label>
          <Input
            id="organisation"
            type="text"
            autoComplete="organization"
            placeholder="School or company name"
            {...register('organisation')}
            className="rounded-xl border-primary/20 focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-neutral-dark mb-1.5"
        >
          Message <span className="text-secondary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help…"
          {...register('message')}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          className="w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-[invalid=true]:border-secondary"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-secondary font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold px-8 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send size={15} className="ml-2" aria-hidden="true" />
          </>
        )}
      </Button>

      <p className="text-neutral-dark/40 text-xs">
        <span aria-hidden="true">*</span> Required fields. We never share your data with third
        parties.
      </p>
    </form>
  )
}
