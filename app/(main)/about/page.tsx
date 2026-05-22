import type { Metadata } from 'next'
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

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
    <main className="bg-canvas dark:bg-surface-dark min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

        {/* Hero */}
        <AnimatedSection>
          <div className="mb-16">
            <span className="text-caption-xs font-[500] uppercase tracking-[0.1em] text-primary mb-5 block">
              About
            </span>
            {/* display-lg serif */}
            <h1 className="font-display text-display-lg font-[500] text-ink dark:text-on-dark mb-5">
              I build things<br />for the web
            </h1>
            <div className="flex items-center gap-2 text-body-sm text-muted dark:text-on-dark-soft mb-8">
              <MapPin size={13} />
              <span>Based in Vancouver, BC</span>
            </div>
            <div className="space-y-4 text-body-md text-body-text dark:text-on-dark-soft leading-relaxed max-w-2xl">
              <p>
                Hi, I&apos;m Nathanael — a full-stack developer and designer who loves building
                digital products that are both functional and beautiful. I&apos;m currently
                studying Computer Science at UBC, where I&apos;ve developed a strong foundation
                in software engineering and system design.
              </p>
              <p>
                My work sits at the intersection of engineering and design. I care about the
                whole experience — from architecture decisions that make systems reliable to the
                micro-interactions that make interfaces feel alive.
              </p>
              <p>
                When I&apos;m not shipping code, you&apos;ll find me exploring typography,
                reading about design systems, or tinkering with new frameworks.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech stack */}
        <AnimatedSection delay={0.08}>
          <section className="mb-16">
            <SectionHeading title="Tech Stack" subtitle="Tools I reach for most often" />
            {/* badge-pill row */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-caption font-[500] bg-surface-card dark:bg-surface-dark-elevated text-ink dark:text-on-dark border border-hairline dark:border-surface-dark-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Experience — feature-card per entry */}
        <AnimatedSection delay={0.12}>
          <section className="mb-16">
            <SectionHeading title="Experience" />
            <div className="space-y-5">
              {experience.map(({ role, company, period, description }) => (
                <div
                  key={role}
                  className="bg-surface-card dark:bg-surface-dark-elevated rounded-xl p-8 border border-hairline dark:border-surface-dark-soft"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                    <h3 className="text-title-sm font-[500] text-ink dark:text-on-dark">{role}</h3>
                    {/* text-link in primary per DESIGN.md */}
                    <span className="text-body-sm text-primary font-[500]">{company}</span>
                  </div>
                  <p className="text-caption text-muted dark:text-on-dark-soft mb-3">{period}</p>
                  <p className="text-body-md text-body-text dark:text-on-dark-soft leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.16}>
          <section className="mb-16">
            <SectionHeading title="Education" />
            <div className="flex items-start gap-4 bg-surface-card dark:bg-surface-dark-elevated rounded-xl p-8 border border-hairline dark:border-surface-dark-soft">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-title-sm font-[500] text-ink dark:text-on-dark">
                  Bachelor of Science — Computer Science
                </h3>
                <p className="text-body-sm text-primary font-[500] mt-0.5">
                  University of British Columbia
                </p>
                <p className="text-caption text-muted dark:text-on-dark-soft mt-0.5">2022 – Present</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA — callout-card-coral */}
        <AnimatedSection delay={0.2}>
          <div className="bg-primary rounded-2xl px-10 py-12 text-center">
            <h2 className="font-display text-display-sm font-[500] text-white mb-3">
              Want to work together?
            </h2>
            <p className="text-body-md text-white/80 mb-7">
              I&apos;m open to freelance projects and full-time opportunities.
            </p>
            {/* Inverted button on coral: cream/white background */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white text-body-sm font-[500] transition-colors"
            >
              Get in touch
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
