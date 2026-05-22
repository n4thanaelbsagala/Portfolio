import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Code2, Palette, Database, Wrench } from 'lucide-react'

// feature-card spec: bg-surface-card, rounded-xl (12px), p-8 (32px)
// Section: canvas bg — back to cream after the soft-surface band

const skillGroups = [
  {
    label: 'Frontend',
    icon: Code2,
    // accent-teal tint
    iconClass: 'bg-accent-teal/10 text-accent-teal dark:bg-accent-teal/10 dark:text-accent-teal',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  },
  {
    label: 'Design',
    icon: Palette,
    // accent-amber tint
    iconClass: 'bg-accent-amber/10 text-accent-amber dark:bg-accent-amber/10 dark:text-accent-amber',
    skills: ['Figma', 'UI / UX Design', 'Responsive Design', 'Design Systems', 'Prototyping', 'Accessibility'],
  },
  {
    label: 'Backend',
    icon: Database,
    // primary/coral tint
    iconClass: 'bg-primary/10 text-primary dark:bg-primary/10 dark:text-primary',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Sanity CMS', 'Python', 'SQL'],
  },
  {
    label: 'Tooling',
    icon: Wrench,
    // muted tint
    iconClass: 'bg-surface-cream dark:bg-surface-dark-elevated text-muted dark:text-on-dark-soft',
    skills: ['Git / GitHub', 'Vercel', 'Docker', 'Jest', 'VS Code', 'CI / CD'],
  },
]

export function SkillsSection() {
  return (
    <section className="bg-canvas dark:bg-surface-dark section-padding">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Skills &amp; Tools"
            subtitle="Technologies I reach for most often"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map(({ label, icon: Icon, iconClass, skills }, i) => (
            <AnimatedSection key={label} delay={i * 0.07}>
              {/* feature-card: bg-surface-card, rounded-xl, p-8 */}
              <div className="h-full bg-surface-card dark:bg-surface-dark-elevated rounded-xl p-8 border border-hairline dark:border-surface-dark-soft">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${iconClass}`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-title-sm font-[500] text-ink dark:text-on-dark mb-4">
                  {label}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-body-sm text-body-text dark:text-on-dark-soft flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-hairline dark:bg-surface-dark-soft flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
