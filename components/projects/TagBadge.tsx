import { cn } from '@/lib/utils'
import type { Category } from '@/lib/types'

// badge-pill: bg-surface-card, text-ink, caption (13px/500), rounded-full, px-3 py-0.5
interface TagBadgeProps {
  label: string
  className?: string
}

export function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-0.5 rounded-full',
        'text-caption font-[500] text-ink dark:text-on-dark',
        'bg-surface-card dark:bg-surface-dark-elevated',
        className,
      )}
    >
      {label}
    </span>
  )
}

// Category badges use DESIGN.md accent tones:
//   Development → accent-teal
//   Design      → accent-amber
//   Full-stack  → primary (coral)
const categoryStyles: Record<string, string> = {
  Development:
    'bg-accent-teal/10 text-accent-teal dark:bg-accent-teal/10 dark:text-accent-teal border border-accent-teal/20',
  Design:
    'bg-accent-amber/10 text-accent-amber dark:bg-accent-amber/10 dark:text-accent-amber border border-accent-amber/20',
  'Full-stack':
    'bg-primary/10 text-primary dark:bg-primary/10 dark:text-primary border border-primary/20',
}

interface CategoryBadgeProps {
  category: Category | string
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-0.5 rounded-full text-caption font-[500]',
        categoryStyles[category] ??
          'bg-surface-card dark:bg-surface-dark-elevated text-ink dark:text-on-dark',
        className,
      )}
    >
      {category}
    </span>
  )
}
