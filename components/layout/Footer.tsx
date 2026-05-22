import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// footer spec: bg surface-dark, text on-dark-soft, padding 64px
// Always dark — the dark surface IS the footer signal; no dark-mode inversion needed.

const socials = [
  { href: 'https://github.com/', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://linkedin.com/in/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:nathanaelsagala357@gmail.com', label: 'Email', icon: Mail },
]

const footerLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// ✦ Spike mark for footer wordmark
function SpikeMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0 L9 7 L16 8 L9 9 L8 16 L7 9 L0 8 L7 7 Z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark text-on-dark-soft">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand wordmark: spike mark + name in on-dark */}
          <Link
            href="/"
            className="flex items-center gap-2 text-on-dark hover:opacity-75 transition-opacity"
          >
            <SpikeMark />
            <span className="font-display text-[17px] font-[500] tracking-[-0.01em]">
              Nathanael Sagala
            </span>
          </Link>

          {/* Nav links — body-sm / on-dark-soft */}
          <nav className="flex items-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-body-sm text-on-dark-soft hover:text-on-dark transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-on-dark-soft hover:text-on-dark hover:bg-surface-dark-elevated transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Hairline divider */}
        <div className="mt-10 pt-8 border-t border-surface-dark-elevated flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption-xs text-muted-soft uppercase tracking-[0.1em]">
            © {year} Nathanael Sagala
          </p>
          <p className="text-caption-xs text-muted-soft">
            Built with Next.js &amp; Sanity
          </p>
        </div>
      </div>
    </footer>
  )
}
