import type { Metadata } from 'next'
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Nathanael Sagala — developer, designer, and builder.',
}

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 – Present',
    description:
      'Designing and building end-to-end web applications for clients across different industries. Focus on performance, accessibility, and clean code.',
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Tech Studio',
    period: '2022 – 2023',
    description:
      'Collaborated on design systems, conducted user research, and shipped responsive interfaces used by thousands of users.',
  },
]

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Sanity CMS', 'Figma',
  'Framer Motion', 'Vercel', 'Git', 'Docker',
]

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Hero */}
      <AnimatedSection>
        <div className="mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            I build things for the web
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <MapPin size={14} />
            <span>Based in Vancouver, BC</span>
          </div>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Hi, I&apos;m Nathanael — a full-stack developer and designer who loves building digital
              products that are both functional and beautiful. I&apos;m currently studying Computer
              Science at UBC, where I&apos;ve developed a strong foundation in software engineering
              and system design.
            </p>
            <p>
              My work sits at the intersection of engineering and design. I care about the whole
              experience — from the architecture decisions that make systems reliable to the
              micro-interactions that make interfaces feel alive.
            </p>
            <p>
              When I&apos;m not shipping code, you&apos;ll find me exploring typography, reading
              about design systems, or tinkering with new frameworks.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech stack */}
      <AnimatedSection delay={0.1}>
        <section className="mb-16">
          <SectionHeading title="Tech Stack" subtitle="Tools I reach for most often" />
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.2}>
        <section className="mb-16">
          <SectionHeading title="Experience" />
          <div className="space-y-8">
            {experience.map(({ role, company, period, description }) => (
              <div
                key={role}
                className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-indigo-600 before:dark:bg-indigo-400"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{role}</h3>
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                    {company}
                  </span>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-600 mb-2">{period}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.3}>
        <section className="mb-16">
          <SectionHeading title="Education" />
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Bachelor of Science — Computer Science
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-0.5">
                University of British Columbia
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-600 mt-0.5">2022 – Present</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.4}>
        <div className="p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Want to work together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I&apos;m open to freelance projects and full-time opportunities.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
            <ArrowRight size={16} />
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}
