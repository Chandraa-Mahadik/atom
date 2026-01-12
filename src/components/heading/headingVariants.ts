import { cva, type VariantProps } from 'class-variance-authority'

export const headingVariants = cva(
  'text-[var(--atom-text)] leading-tight tracking-tight',
  {
    variants: {
      size: {
        none: '',
        xs: 'text-[calc(var(--atom-text-xs))]',
        sm: 'text-[calc(var(--atom-text-sm))]',
        md: 'text-[calc(var(--atom-text-md))]',
        lg: 'text-[calc(var(--atom-text-lg))]',
        xl: 'text-[calc(var(--atom-text-xl))]',
      },
      weight: {
        normal: 'font-[var(--atom-font-weight-normal)]',
        medium: 'font-[var(--atom-font-weight-medium)]',
        bold: 'font-[var(--atom-font-weight-bold)]',
      },
    },
    defaultVariants: {
      size: undefined,
      weight: undefined,
    },
  }
)

export type HeadingVariantProps = VariantProps<typeof headingVariants>
