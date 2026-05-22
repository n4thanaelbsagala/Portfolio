import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { getProjectBySlug } from '@/sanity/lib/queries'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import type { Project } from '@/lib/types'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const projects = await client.fetch<Pick<Project, 'slug'>[]>(`
      *[_type == "project"]{ slug }
    `)
    return projects.map((p) => ({ slug: p.slug.current }))
  } catch {
    // Sanity not configured yet; pages will be generated on-demand via ISR.
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch<Pick<Project, 'title' | 'description'> | null>(
    `*[_type == "project" && slug.current == $slug][0]{ title, description }`,
    { slug },
  )

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await client.fetch<Project | null>(getProjectBySlug, { slug })

  if (!project) notFound()

  return <ProjectDetail project={project} />
}
