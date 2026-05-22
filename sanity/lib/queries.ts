// Shared projection — avoids repeating heavy fields in list queries
const projectCard = `
  _id,
  title,
  slug,
  description,
  mainImage { asset, alt },
  tags,
  category,
  featured,
  liveUrl,
  githubUrl,
  publishedAt
`

export const getAllProjects = `
  *[_type == "project"] | order(publishedAt desc) {
    ${projectCard}
  }
`

export const getFeaturedProjects = `
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    ${projectCard}
  }
`

export const getProjectBySlug = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    body,
    mainImage { asset, alt, hotspot },
    images[] { asset, alt, hotspot },
    tags,
    category,
    featured,
    liveUrl,
    githubUrl,
    publishedAt
  }
`
