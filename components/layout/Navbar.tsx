'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// ✦ Radial spike mark — 4-point asterisk glyph per DESIGN.md brand mark
function SpikeMark({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8 0 L9 7 L16 8 L9 9 L8 16 L7 9 L0 8 L7 7 Z" />
    </svg>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg text-muted hover:text-ink dark:text-on-dark-soft dark:hover:text-on-dark hover:bg-surface-card dark:hover:bg-surface-dark-elevated transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-canvas/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-hairline dark:border-surface-dark-elevated'
          : 'bg-canvas dark:bg-surface-dark',
      )}
    >
      {/* top-nav: 64px tall per DESIGN.md */}
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo: spike mark + initials */}
        <Link
          href="/"
          className="flex items-center gap-2 text-ink dark:text-on-dark hover:opacity-80 transition-opacity"
        >
          <SpikeMark className="text-primary" />
          <span className="font-display text-[17px] font-[500] tracking-[-0.01em]">NS</span>
        </Link>

        {/* Desktop nav links — nav-link: 14px / 500 */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-nav-link font-[500] transition-colors',
                  pathname === href
                    ? 'text-primary dark:text-primary'
                    : 'text-muted dark:text-on-dark-soft hover:text-ink dark:hover:text-on-dark hover:bg-surface-card dark:hover:bg-surface-dark-elevated',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right cluster: theme toggle + primary CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary hover:bg-primary-active text-white text-nav-link font-[500] transition-colors"
          >
            Contact
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-muted dark:text-on-dark-soft hover:bg-surface-card dark:hover:bg-surface-dark-elevated transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — cream sheet slide-down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden border-t border-hairline dark:border-surface-dark-elevated bg-canvas dark:bg-surface-dark"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block px-3.5 py-3 rounded-lg text-nav-link font-[500] transition-colors',
                      pathname === href
                        ? 'text-primary bg-surface-card dark:bg-surface-dark-elevated'
                        : 'text-muted dark:text-on-dark-soft hover:text-ink dark:hover:text-on-dark hover:bg-surface-card dark:hover:bg-surface-dark-elevated',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block text-center px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-active text-white text-nav-link font-[500] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
