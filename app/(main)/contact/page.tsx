import type { Metadata } from 'next'
import { Mail, Github, Linkedin } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Nathanael Sagala — let's build something together.",
}

const contactMethods = [
  {
    label: 'Email',
    value: 'nathanaelsagala357@gmail.com',
    href: 'mailto:nathanaelsagala357@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: '@nathanaelsagala',
    href: 'https://github.com/',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'Nathanael Sagala',
    href: 'https://linkedin.com/in/',
    icon: Linkedin,
  },
]

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <AnimatedSection>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Left column — info */}
        <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-8">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            I&apos;m currently open to freelance projects and full-time roles. Whether you have a
            specific idea or just want to explore possibilities, drop me a message.
          </p>

          <div className="space-y-4">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-600">{label}</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Right column — form */}
        <AnimatedSection delay={0.2} className="lg:col-span-3">
          <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
