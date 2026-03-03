import { NextResponse } from 'next/server'
import { z } from 'zod'

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
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 422 })
  }

  const { _hp, ...data } = parsed.data

  // Silently drop honeypot-filled submissions
  if (_hp) {
    return NextResponse.json({ ok: true })
  }

  // Send email via Resend when API key is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const roleLabel: Record<string, string> = {
        school: 'School / College',
        'local-authority': 'Local Authority',
        parent: 'Parent / Carer',
        student: 'Young Person',
        other: 'Other',
      }

      await resend.emails.send({
        from: process.env.EMAIL_FROM ?? 'noreply@mcreducational.co.uk',
        to: 'info@mcreducational.co.uk',
        replyTo: data.email,
        subject: `New contact form submission from ${data.name}`,
        text: [
          `From: ${data.name} (${roleLabel[data.role] ?? data.role})`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : null,
          data.organisation ? `Organisation: ${data.organisation}` : null,
          '',
          'Message:',
          data.message,
        ]
          .filter(Boolean)
          .join('\n'),
      })
    } catch (err) {
      console.error('[contact] Resend error:', err)
      // Don't expose internal errors to the client
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
  } else {
    // Development fallback — log to console
    console.info('[contact] New submission (no RESEND_API_KEY set):', data)
  }

  return NextResponse.json({ ok: true })
}
