import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { SkillsSection } from '@/components/home/SkillsSection'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { client } from '@/sanity/lib/client'
import { getFeaturedProjects } from '@/sanity/lib/queries'
import type { Project } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Nathanael Sagala — Developer & Designer',
}

export default async function HomePage() {
  let featuredProjects: Project[] = []
  try {
    featuredProjects = await client.fetch<Project[]>(getFeaturedProjects)
  } catch {
    // Sanity not yet configured; render without featured projects.
  }

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <SkillsSection />
      <AboutSnippet />
    </>
  )
}
