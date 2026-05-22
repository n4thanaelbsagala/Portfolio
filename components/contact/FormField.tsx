import { cn } from '@/lib/utils'

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
    'w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-600',
    'focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition',
    error
      ? 'border-red-300 dark:border-red-800'
      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600',
  )

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
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
        <p id={`${name}-error`} role="alert" className="text-xs text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
