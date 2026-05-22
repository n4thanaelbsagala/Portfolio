import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

// display-md: 36px serif, weight 500, lineHeight 1.15, tracking -0.015em
// subtitle: body-md sans, muted color
export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="font-display text-display-md font-[500] text-ink dark:text-on-dark">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-3 text-body-md text-muted dark:text-on-dark-soft max-w-2xl',
          centered && 'mx-auto',
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
