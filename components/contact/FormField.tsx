import { cn } from '@/lib/utils'

// text-input spec: bg-canvas, text-ink, body-md, hairline border, rounded-lg (8px), 10px×14px padding
// text-input-focused: coral 3px ring

interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  type?: string
  as?: 'input' | 'textarea'
  placeholder?: string
  rows?: number
  className?: string
  required?: boolean
}

export function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  as = 'input',
  placeholder,
  rows = 4,
  className,
  required,
}: FormFieldProps) {
  const inputClasses = cn(
    'w-full px-3.5 py-2.5 rounded-lg border text-body-md font-sans',
    'bg-canvas dark:bg-surface-dark-elevated',
    'text-ink dark:text-on-dark',
    'placeholder:text-muted-soft dark:placeholder:text-on-dark-soft/50',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
    error
      ? 'border-error/60 dark:border-error/50'
      : 'border-hairline dark:border-surface-dark-elevated hover:border-hairline-soft dark:hover:border-surface-dark-soft',
  )

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={name} className="text-body-sm font-[500] text-ink dark:text-on-dark">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={cn(inputClasses, 'resize-y min-h-[120px]')}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}

      {error && (
        <p id={`${name}-error`} role="alert" className="text-caption text-error">
          {error}
        </p>
      )}
    </div>
  )
}
