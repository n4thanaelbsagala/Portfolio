import { cn } from '@/lib/utils'
import type { Category } from '@/lib/types'

interface TagBadgeProps {
  label: string
  className?: string
}

export function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        className,
      )}
    >
      {label}
    </span>
  )
}

const categoryStyles: Record<string, string> = {
  Development: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300',
  Design: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
  'Full-stack': 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300',
}

interface CategoryBadgeProps {
  category: Category | string
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        categoryStyles[category] ?? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        className,
      )}
    >
      {category}
    </span>
  )
}
