import Link from 'next/link'
import { cn } from '@/lib/utils'

// button-primary: bg-primary (#cc785c), text-white, rounded-lg (8px), 12px×20px, h-10
// button-secondary: bg-canvas, text-ink, hairline border, same geometry
// button-text-link: transparent, text-ink, no border

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string; rel?: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<Variant, string> = {
  // button-primary
  primary:
    'bg-primary hover:bg-primary-active text-white dark:text-white shadow-none',
  // button-secondary
  secondary:
    'bg-canvas dark:bg-surface-dark-elevated text-ink dark:text-on-dark border border-hairline dark:border-surface-dark-elevated hover:bg-surface-card dark:hover:bg-surface-dark-soft',
  // button-text-link
  ghost:
    'text-ink dark:text-on-dark-soft hover:text-primary dark:hover:text-primary bg-transparent',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-caption font-[500]',
  md: 'px-5 py-[10px] text-nav-link font-[500]',   // 12px × 20px → height ≈ 40px
  lg: 'px-6 py-3 text-body-sm font-[500]',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className)

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
