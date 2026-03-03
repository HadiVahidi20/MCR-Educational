import { NextResponse } from 'next/server'
import { referralSchema } from '@/lib/referral-schema'

function generateReferenceNumber(): string {
  const year = new Date().getFullYear().toString().slice(2)
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  const timestamp = Date.now().toString(36).slice(-4).toUpperCase()
  return `MCR-${year}${random}-${timestamp}`
}

export async function POST(request: Request) {
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

  // ── Send email notification ──────────────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Notify internal team
      await resend.emails.send({
        from: process.env.EMAIL_FROM ?? 'noreply@mcreducational.co.uk',
        to: 'info@mcreducational.co.uk',
        subject: `New Referral ${referenceNumber} — ${data.ypFirstName} ${data.ypLastName}`,
        text: [
          `Reference: ${referenceNumber}`,
          `Referrer: ${data.referrerName} (${data.referrerRole}) — ${data.referrerSchool}`,
          `Young person: ${data.ypFirstName} ${data.ypLastName}, Year ${data.ypYearGroup}, DOB ${data.ypDOB}`,
          '',
          `Reason: ${data.reasonForReferral}`,
          `EHCP: ${data.hasEHCP}`,
          `SEND: ${(data.sendNeeds ?? []).join(', ') || 'None specified'}`,
          '',
          `Attendance: ${data.currentAttendance}`,
          `View in CMS: ${process.env.NEXT_PUBLIC_SITE_URL}/admin`,
        ].join('\n'),
      })

      // Confirm to referrer
      await resend.emails.send({
        from: process.env.EMAIL_FROM ?? 'noreply@mcreducational.co.uk',
        to: data.referrerEmail,
        subject: `Referral Received — ${referenceNumber}`,
        text: [
          `Dear ${data.referrerName},`,
          '',
          `Thank you for submitting a referral for ${data.ypFirstName} ${data.ypLastName}.`,
          '',
          `Your reference number is: ${referenceNumber}`,
          '',
          'A member of our team will be in touch within one working day.',
          '',
          'MCR Educational',
          '0161 123 4567',
          'info@mcreducational.co.uk',
        ].join('\n'),
      })
    } catch (err) {
      console.error('[referral] Resend error:', err)
      // Non-fatal — return success anyway
    }
  }

  return NextResponse.json({ referenceNumber }, { status: 201 })
}
