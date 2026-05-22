'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
      {/* Subtle gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p variants={item} className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-5">
          <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400" />
          Hello, I&apos;m Nathanael
          <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400" />
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-6"
        >
          Developer &{' '}
          <span className="text-indigo-600 dark:text-indigo-400">Designer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          I craft thoughtful digital experiences — clean interfaces backed by robust, well-tested
          code. From concept to deployment.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/projects" size="lg">
            View My Work
            <ArrowRight size={18} />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get In Touch
          </Button>
          <Button href="/about" variant="ghost" size="lg">
            <Download size={16} />
            Resume
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400 dark:text-gray-600"
        >
          {[
            { value: '3+', label: 'Years building' },
            { value: '20+', label: 'Projects shipped' },
            { value: '∞', label: 'Coffee consumed' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
              <p className="text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
