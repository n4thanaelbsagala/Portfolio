'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { FormField } from './FormField'
import { Button } from '@/components/ui/Button'
import type { ContactFormData } from '@/lib/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

type FormErrors = Partial<Record<keyof ContactFormData, string>>

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  else if (data.name.length > 100) errors.name = 'Name must be under 100 characters.'

  if (!data.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.'

  if (!data.subject.trim()) errors.subject = 'Subject is required.'
  else if (data.subject.length > 200) errors.subject = 'Subject must be under 200 characters.'

  if (!data.message.trim()) errors.message = 'Message is required.'
  else if (data.message.length < 10) errors.message = 'Message must be at least 10 characters.'
  else if (data.message.length > 2000) errors.message = 'Message must be under 2000 characters.'

  return errors
}

const empty: ContactFormData = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(empty)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message sent!</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your name"
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
          required
        />
      </div>
      <FormField
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="What's this about?"
        required
      />
      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell me about your project or just say hi..."
        rows={6}
        required
      />

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          'Sending…'
        ) : (
          <>
            Send message
            <Send size={16} />
          </>
        )}
      </Button>
    </form>
  )
}
