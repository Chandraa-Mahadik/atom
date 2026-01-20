import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const inputVariants = cva(
  [
    'block w-full rounded-md outline-none leading-none',
    'bg-[var(--atom-input-bg)] text-[var(--atom-input-fg)]',
    'border border-[var(--atom-theme-border-primary)]',
    'transition-[background-color,border-color,box-shadow,color] duration-150 ease-in-out',

    'placeholder:text-[color-mix(in_srgb,var(--atom-input-fg)_55%,transparent)]',
    'caret-[var(--atom-primary)]',
    'selection:bg-[color-mix(in_srgb,var(--atom-primary)_30%,transparent)]',

    'hover:bg-[color-mix(in_srgb,var(--atom-primary)_1%,transparent)]',
    'hover:border-[color-mix(in_srgb,var(--atom-input-border)_70%,var(--atom-primary)_30%)]',
    'focus-visible:border-[var(--atom-input-focus,var(--atom-primary))]',
    'focus-visible:ring-1 focus-visible:ring-[color-mix(in_srgb,var(--atom-primary)_35%,transparent)]',
    'focus-visible:ring-offset-0',

    'disabled:opacity-60 disabled:cursor-not-allowed',
    'disabled:hover:bg-[var(--atom-input-bg)] disabled:hover:border-[var(--atom-input-border)]',
    'read-only:bg-[color-mix(in_srgb,var(--atom-input-bg)_90%,var(--atom-border)_10%)] read-only:cursor-default',
    'read-only:hover:bg-[color-mix(in_srgb,var(--atom-input-bg)_90%,var(--atom-border)_10%)]',

    'placeholder:text-muted-foreground ' +
      '[&:not(:placeholder-shown)]:border-[color-mix(in_srgb,var(--atom-theme-border-primary)_70%,var(--atom-primary))]' +
      'focus-visible:border-[var(--atom-primary)]',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-3.5 text-sm',
        lg: 'h-11 px-4 text-base',
      },
      tone: {
        default: '',
        invalid:
          'border-[var(--atom-error)] focus-visible:border-[var(--atom-error)]',
        success: 'border-[var(--atom-success)]',
      },
      hasLeft: { true: 'pl-9' },
      hasRight: { true: 'pr-9' },
    },
    defaultVariants: { size: 'md', tone: 'default' },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  hint?: string
  errorText?: string
  loading?: boolean
  id?: string

  /** ✅ NEW (additive) */
  label?: string
  required?: boolean
  requiredText?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      tone = 'default',
      leftIcon,
      rightIcon,
      hint,
      errorText,
      loading = false,
      id: idProp,
      placeholder,
      label,
      required = false,
      requiredText = 'This field is required',
      value,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId()
    const inputId = idProp ?? `inp_${reactId}`

    const [touched, setTouched] = React.useState(false)

    const hasLeft = !!leftIcon
    const hasRight = !!rightIcon || loading

    const isEmpty =
      required &&
      touched &&
      !errorText &&
      (value === '' || value === undefined)

    const finalErrorText = errorText ?? (isEmpty ? requiredText : undefined)

    const hintId = hint ? `${inputId}__hint` : undefined
    const errId = finalErrorText ? `${inputId}__err` : undefined

    const describedBy = [hintId, errId].filter(Boolean).join(' ') || undefined

    const isInvalid = tone === 'invalid' || !!finalErrorText

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-[var(--atom-text)]"
          >
            {label}
            {required && (
              <span className="ml-0.5 text-[var(--atom-error)]">*</span>
            )}
          </label>
        )}

        <div className="relative">
          {hasLeft && (
            <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 flex w-9 items-center justify-center">
              {leftIcon}
            </span>
          )}

          {hasRight && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2 flex w-9 items-center justify-center">
              {loading ? (
                <svg
                  viewBox="0 0 24 24"
                  className="animate-spin h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="9" strokeOpacity=".2" strokeWidth="3" />
                  <path
                    d="M21 12a9 9 0 0 1-9 9"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                rightIcon
              )}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ size, tone, hasLeft, hasRight }),
              isInvalid && 'border-[var(--atom-error)]',
              className,
            )}
            value={value}
            placeholder={placeholder ?? ' '}
            aria-required={required || undefined}
            aria-invalid={isInvalid || undefined}
            aria-errormessage={errId}
            aria-describedby={describedBy}
            onBlur={(e) => {
              setTouched(true)
              onBlur?.(e)
            }}
            {...props}
          />
        </div>

        {(hint || finalErrorText) && (
          <div className="mt-1 text-xs leading-snug">
            {finalErrorText && (
              <p id={errId} className="text-[var(--atom-error)]">
                {finalErrorText}
              </p>
            )}
            {hint && !finalErrorText && (
              <p id={hintId} className="text-[var(--atom-text-muted)]">
                {hint}
              </p>
            )}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
