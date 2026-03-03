import { NextResponse } from 'next/server'
import { z } from 'zod'
import { emailRateLimiter } from '@/lib/rate-limiter'

const schema = z.object({
  role: z.enum(['school', 'local-authority', 'parent', 'student', 'other']),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  message: z.string().min(10),
  _hp: z.string().max(0), // honeypot
})

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'anonymous'

  if (!emailRateLimiter.isAllowed(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': '60' },
      }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.issues },
      { status: 422 }
    )
  }

  const { _hp, ...data } = parsed.data

  if (_hp) {
    return NextResponse.json({ ok: true })
  }

  const roleLabel: Record<string, string> = {
    school: 'School / Teacher',
    'local-authority': 'Local Authority',
    parent: 'Parent / Carer',
    student: 'Student / Young Person',
    other: 'Other',
  }

  // Send emails via Resend when API key is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const { render } = await import('@react-email/components')
      const { default: ContactAcknowledgment } = await import('@/emails/ContactAcknowledgment')
      const { default: ContactNotification } = await import('@/emails/ContactNotification')

      const resend = new Resend(process.env.RESEND_API_KEY)
      const fromAddress = process.env.EMAIL_FROM ?? 'noreply@mcreducational.co.uk'
      const teamAddress = process.env.EMAIL_TEAM ?? 'info@mcreducational.co.uk'

      await Promise.allSettled([
        // Acknowledgment to sender
        resend.emails.send({
          from: fromAddress,
          to: data.email,
          subject: 'We received your message — MCR Educational',
          html: await render(ContactAcknowledgment({ name: data.name, message: data.message })),
        }),
        // Internal notification
        resend.emails.send({
          from: fromAddress,
          to: teamAddress,
          subject: `New Contact Form Submission — ${data.name}`,
          html: await render(
            ContactNotification({
              name: data.name,
              email: data.email,
              phone: data.phone,
              role: roleLabel[data.role] ?? data.role,
              organisation: data.organisation,
              message: data.message,
            })
          ),
        }),
      ])
    } catch (err) {
      console.error('[contact] Email error:', err)
      // Non-fatal — form submission succeeded, log for monitoring
    }
  } else {
    console.info('[contact] New submission (Resend not configured):', {
      name: data.name,
      email: data.email,
      role: data.role,
    })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
