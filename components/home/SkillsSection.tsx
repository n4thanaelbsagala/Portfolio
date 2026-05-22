import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Code2, Palette, Database, Wrench } from 'lucide-react'

const skillGroups = [
  {
    label: 'Frontend',
    icon: Code2,
    color: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS'],
  },
  {
    label: 'Design',
    icon: Palette,
    color: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping', 'Accessibility'],
  },
  {
    label: 'Backend',
    icon: Database,
    color: 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Sanity CMS', 'Python', 'SQL'],
  },
  {
    label: 'Tooling',
    icon: Wrench,
    color: 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400',
    skills: ['Git / GitHub', 'Vercel', 'Docker', 'Jest', 'VS Code', 'CI/CD'],
  },
]

export function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Skills & Tools"
            subtitle="Technologies I work with day-to-day"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ label, icon: Icon, color, skills }, i) => (
            <AnimatedSection key={label} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 h-full hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{label}</h3>
                <ul className="space-y-1.5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
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
