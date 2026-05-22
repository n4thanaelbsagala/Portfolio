import type { Metadata } from 'next'
import { Mail, Linkedin } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Nathanael Sagala — let's build something together.",
}

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const contactMethods = [
  {
    label: 'Email',
    value: 'nathanaelsagala357@gmail.com',
    href: 'mailto:nathanaelsagala357@gmail.com',
    Icon: ({ size }: { size: number }) => <Mail size={size} />,
  },
  {
    label: 'GitHub',
    value: '@nathanaelsagala',
    href: 'https://github.com/',
    Icon: ({ size }: { size: number }) => <GitHubIcon size={size} />,
  },
  {
    label: 'LinkedIn',
    value: 'Nathanael Sagala',
    href: 'https://linkedin.com/in/',
    Icon: ({ size }: { size: number }) => <Linkedin size={size} />,
  },
]

export default function ContactPage() {
  return (
    <main className="bg-canvas dark:bg-surface-dark min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

        {/* Hero */}
        <AnimatedSection>
          <div className="mb-14">
            <span className="text-caption-xs font-[500] uppercase tracking-[0.1em] text-primary mb-5 block">
              Contact
            </span>
            <h1 className="font-display text-display-lg font-[500] text-ink dark:text-on-dark mb-5">
              Let&apos;s work<br />together
            </h1>
            <p className="text-body-md text-body-text dark:text-on-dark-soft leading-relaxed max-w-xl">
              I&apos;m currently open to freelance projects and full-time roles. Whether you have a
              specific idea or just want to explore possibilities, drop me a message.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — contact methods */}
          <AnimatedSection delay={0.08} className="lg:col-span-2">
            <div className="space-y-3">
              {contactMethods.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-xl border border-hairline dark:border-surface-dark-elevated bg-surface-card dark:bg-surface-dark-elevated hover:border-primary/30 dark:hover:border-primary/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-caption text-muted dark:text-on-dark-soft">{label}</p>
                    <p className="text-body-sm font-[500] text-ink dark:text-on-dark group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.14} className="lg:col-span-3">
            <div className="bg-surface-card dark:bg-surface-dark-elevated rounded-xl p-8 border border-hairline dark:border-surface-dark-elevated">
              <h2 className="font-display text-display-sm font-[500] text-ink dark:text-on-dark mb-6">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}
