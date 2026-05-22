import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { client } from '@/sanity/lib/client'
import { getAllProjects } from '@/sanity/lib/queries'
import type { Project } from '@/lib/types'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A full collection of my development and design work.',
}

export default async function ProjectsPage() {
  let projects: Project[] = []
  try {
    projects = await client.fetch<Project[]>(getAllProjects)
  } catch {
    // Sanity not yet configured; render empty state.
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <AnimatedSection>
        <SectionHeading
          title="All Projects"
          subtitle={`${projects.length} project${projects.length !== 1 ? 's' : ''} — development, design, and everything in between`}
        />
      </AnimatedSection>
      <ProjectGrid projects={projects} />
    </main>
  )
}
