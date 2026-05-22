'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// hero-band: canvas bg, display-xl serif h1, coral CTA
// Adapted from the 6-6 spec to centered single-column (no hero illustration asset)

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section className="relative bg-canvas dark:bg-surface-dark overflow-hidden">
      {/* Subtle warm gradient — reinforces cream canvas depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full bg-surface-soft/60 dark:bg-surface-dark-elevated/30 blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Caption label — caption-xs / uppercase per DESIGN.md badge-coral */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-caption-xs font-[500] uppercase tracking-[0.1em] text-primary mb-6">
              <span className="w-6 h-px bg-primary" />
              Developer &amp; Designer
            </span>
          </motion.div>

          {/* display-xl: 64px / Cormorant / weight 500 / -0.025em tracking */}
          <motion.h1
            variants={item}
            className="font-display text-display-xl font-[500] text-ink dark:text-on-dark mb-6"
          >
            Building things<br />
            for the{' '}
            <em className="not-italic text-primary">internet.</em>
          </motion.h1>

          {/* body-md: 16px / 1.55 lh / body-text color */}
          <motion.p
            variants={item}
            className="text-body-md text-body-text dark:text-on-dark-soft max-w-xl mb-10"
          >
            I craft thoughtful digital experiences — clean interfaces backed by
            robust, well-tested code. From concept to deployment.
          </motion.p>

          {/* CTA cluster: coral primary + cream secondary */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href="/projects" size="lg">
              View my work
              <ArrowRight size={15} />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: '3+', label: 'Years building' },
              { value: '20+', label: 'Projects shipped' },
              { value: '∞', label: 'Coffee consumed' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-display-sm font-[500] text-ink dark:text-on-dark">
                  {value}
                </p>
                <p className="text-caption text-muted dark:text-on-dark-soft mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
