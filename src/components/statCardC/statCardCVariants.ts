
import { cva, type VariantProps } from 'class-variance-authority'

export const statCardCVariants = cva(
  'flex items-center justify-between rounded-xl border bg-[var(--atom-theme-surface-primary)] ' +
    'border-[var(--atom-theme-border-primary)] px-4 py-3 w-full ' +
    'transition-colors duration-150 ease-in-out shadow-sm border-[var(--atom-theme-border-primary)]',
  {
    variants: {
      /** Semantic tone: primary + priority levels */
      variant: {
        primary:
          'text-[var(--atom-primary)]',  //border-[color-mix(in_srgb,var(--atom-primary)_18%,var(--atom-card-border))]',
        high: 'text-[var(--atom-error)]', //border-[color-mix(in_srgb,var(--atom-error)_18%,var(--atom-card-border))]',
        medium:
          'text-[var(--atom-warning)]', //border-[color-mix(in_srgb,var(--atom-warning)_18%,var(--atom-card-border))]',
        low: 'text-[var(--atom-success)]', //border-[color-mix(in_srgb,var(--atom-success)_18%,var(--atom-card-border))]',
        neutral: 'text-[var(--atom-text)]', //border-[var(--atom-card-border)]',
      },

      /** Size of the row and pill */
      size: {
        sm: 'h-10 text-sm gap-2 w-full max-w-[320px]',
        md: 'h-12 text-sm gap-3 w-full max-w-[400px]',
        lg: 'h-14 text-base gap-4 w-full max-w-[480px]',
      },
      /** Appearance of the container */
      appearance: {
        elevated: 'shadow-sm',
        outlined: 'shadow-none bg-transparent',
        ghost: 'shadow-none bg-transparent border-transparent',
        soft: 'shadow-none bg-[var(--atom-card-bg)] border-none',
      },
    },

    compoundVariants: [
      { appearance: 'outlined', class: 'bg-transparent' },
      {
        appearance: 'ghost',
        class:
          'bg-transparent border-transparent hover:bg-[var(--atom-card-bg)] border-[var(--atom-card-border)]',
      },
      {
        appearance: 'soft',
        class: 'shadow-none bg-[var(--atom-card-bg)] border-none',
      },
    ],

    defaultVariants: {
      variant: 'neutral',
      size: 'md',
      appearance: 'elevated',
    },
  },
);

export type StatCardCVariantProps = VariantProps<typeof statCardCVariants>
