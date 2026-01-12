import { cva, type VariantProps } from 'class-variance-authority'

export const paperVariants = cva(
  [
    'transition-colors duration-200',
    'bg-[var(--atom-theme-surface-primary)]',
    'shadow-[var(--atom-border-xs2)]',
  ].join(' '),
  {
    variants: {
      variant: {
        outlined: 'border border-[var(--atom-theme-border)]',
        flat: '',
        dashed:
          'bg-transparent border border-dashed border-[var(--atom-border)]',
      },
      size: {
        none: '',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
      padding: 'md',
      radius: 'md',
    },
  }
)

export type PaperVariantProps = VariantProps<typeof paperVariants>
