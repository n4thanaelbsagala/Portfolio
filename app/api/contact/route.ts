import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// In-memory sliding-window rate limiter (per IP, 3 requests / 60 s)
const submissions = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const times = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (times.length >= MAX_PER_WINDOW) return true
  submissions.set(ip, [...times, now])
  return false
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message } = body as Record<string, unknown>

  // Server-side validation
  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof subject !== 'string' || !subject.trim() ||
    typeof message !== 'string' || !message.trim()
  ) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  if (name.length > 100 || subject.length > 200 || message.length > 2000) {
    return NextResponse.json({ error: 'One or more fields exceed the maximum length.' }, { status: 400 })
  }

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#4F46E5;border-bottom:1px solid #e5e7eb;padding-bottom:12px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 0;color:#6b7280;width:80px;vertical-align:top;">From</td><td style="padding:8px 0;font-weight:500;">${name.trim()} &lt;${email.trim()}&gt;</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Subject</td><td style="padding:8px 0;">${subject.trim()}</td></tr>
          </table>
          <div style="background:#f9fafb;border-radius:8px;padding:20px;white-space:pre-wrap;line-height:1.6;">${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px;">Sent from your portfolio contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 })
  }
}
