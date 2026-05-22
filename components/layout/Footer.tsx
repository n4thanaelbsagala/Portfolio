import Link from 'next/link'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const socials = [
  { href: 'https://github.com/', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:nathanaelsagala357@gmail.com', label: 'Email', icon: Mail },
]

const footerLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Code2 size={20} className="text-indigo-600" />
            <span>Nathanael Sagala</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-600">
          © {year} Nathanael Sagala. Built with Next.js & Sanity.
        </p>
      </div>
    </footer>
  )
}
