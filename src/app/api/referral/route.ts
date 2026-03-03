import { NextResponse } from 'next/server'
import { referralSchema } from '@/lib/referral-schema'
import { emailRateLimiter } from '@/lib/rate-limiter'

function generateReferenceNumber(): string {
  const year = new Date().getFullYear().toString().slice(2)
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  const timestamp = Date.now().toString(36).slice(-4).toUpperCase()
  return `MCR-${year}${random}-${timestamp}`
}

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

  const parsed = referralSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.issues },
      { status: 422 }
    )
  }

  const data = parsed.data
  const referenceNumber = generateReferenceNumber()

  // ── Save to Payload CMS when configured ─────────────────────────────────
  if (process.env.PAYLOAD_SECRET && process.env.DATABASE_URI) {
    try {
      const { getPayload } = await import('payload')
      const { default: config } = await import('@payload-config')
      const payload = await getPayload({ config })

      await payload.create({
        collection: 'referrals',
        data: {
          referenceNumber,
          status: 'new',
          referrerDetails: {
            name: data.referrerName,
            role: data.referrerRole,
            school: data.referrerSchool,
            email: data.referrerEmail,
            phone: data.referrerPhone,
          },
          youngPerson: {
            firstName: data.ypFirstName,
            lastName: data.ypLastName,
            dateOfBirth: data.ypDOB,
            yearGroup: data.ypYearGroup,
            gender: data.ypGender,
            ethnicity: data.ypEthnicity,
          },
          background: {
            reasonForReferral: data.reasonForReferral,
            hasEHCP: data.hasEHCP,
            sendNeeds: (data.sendNeeds ?? []).join(', '),
            riskFactors: data.riskFactors,
          },
          additionalInfo: {
            currentAttendance: data.currentAttendance,
            exclusionHistory: data.exclusionHistory,
            additionalNotes: data.additionalNotes,
            parentConsentGiven: data.parentConsentGiven,
            dataProtectionAgreed: data.dataProtectionAgreed,
          },
        },
      })
    } catch (err) {
      console.error('[referral] Payload error:', err)
      return NextResponse.json({ error: 'Failed to save referral' }, { status: 500 })
    }
  } else {
    console.info('[referral] New submission (Payload not configured):', {
      referenceNumber,
      referrerName: data.referrerName,
      ypName: `${data.ypFirstName} ${data.ypLastName}`,
    })
  }

  // ── Send email notifications ─────────────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const { render } = await import('@react-email/components')
      const { default: ReferralConfirmation } = await import('@/emails/ReferralConfirmation')
      const { default: ReferralNotification } = await import('@/emails/ReferralNotification')

      const resend = new Resend(process.env.RESEND_API_KEY)
      const fromAddress = process.env.EMAIL_FROM ?? 'noreply@mcreducational.co.uk'
      const teamAddress = process.env.EMAIL_TEAM ?? 'info@mcreducational.co.uk'

      await Promise.allSettled([
        // Confirmation to referrer
        resend.emails.send({
          from: fromAddress,
          to: data.referrerEmail,
          subject: `Referral Received — ${referenceNumber}`,
          html: await render(
            ReferralConfirmation({
              referrerName: data.referrerName,
              referenceNumber,
              ypFirstName: data.ypFirstName,
            })
          ),
        }),
        // Internal notification
        resend.emails.send({
          from: fromAddress,
          to: teamAddress,
          subject: `New Referral ${referenceNumber} — ${data.ypFirstName} ${data.ypLastName}`,
          html: await render(
            ReferralNotification({
              referenceNumber,
              referrerName: data.referrerName,
              referrerEmail: data.referrerEmail,
              referrerSchool: data.referrerSchool,
              ypFirstName: data.ypFirstName,
              ypLastName: data.ypLastName,
              ypDOB: data.ypDOB,
              reasonForReferral: data.reasonForReferral,
            })
          ),
        }),
      ])
    } catch (err) {
      console.error('[referral] Email error:', err)
      // Non-fatal — referral saved, email failure logged
    }
  }

  return NextResponse.json({ referenceNumber }, { status: 201 })
}
