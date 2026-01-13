import { cva, type VariantProps } from 'class-variance-authority'

export const statCardBVariants = cva(
  // Base layout: like your screenshot
  'flex flex-col justify-center rounded-xl border bg-[var(--atom-theme-surface-primary] ' +
    'border-[var(--atom-theme-border-primary)] px-4 py-3' +
    'transition-colors duration-150 ease-in-out ' +
    'shadow-sm ',
  {
    variants: {
      /** Semantic tone (matches your overview items) */
      variant: {
        primary:
        'text-[var(--atom-primary)] ' ,
        neutral:
          'text-[var(--atom-text)] ' // 'border-[var(--atom-card-border)]'
          ,
        success:
          'text-[var(--atom-success)] ',  // 'border-[color-mix(in_srgb,var(--atom-success)_18%,var(--atom-card-border))]',
        warning:
          'text-[var(--atom-warning)] ', //'border-[color-mix(in_srgb,var(--atom-warning)_18%,var(--atom-card-border))]',
        danger:
          'text-[var(--atom-error)]',  //border-[color-mix(in_srgb,var(--atom-error)_18%,var(--atom-card-border))]'
        info:
          'text-[var(--atom-info)]', //border-[color-mix(in_srgb,var(--atom-info)_18%,var(--atom-card-border))]',
        accent:
          'text-[var(--atom-accent)] ', //'border-[color-mix(in_srgb,var(--atom-accent)_18%,var(--atom-card-border))]',
      },

      /** Density / size of the card */
      size: {
        sm: 'h-[72px] gap-1 w-[160px]',
        md: 'h-[84px] gap-1.5 w-[200px]',
        lg: 'h-[96px] gap-2 w-[240px]',
      },

      /** Layout style – useful if you want a more minimal look somewhere */
      appearance: {
        elevated: 'shadow-sm',
        outlined: 'shadow-none bg-transparent',
        ghost: 'shadow-none bg-transparent border-transparent border-none ',
        soft: 'shadow-none bg-[var(--atom-card-bg)] border-none',
      },

      /** Stretch to fill grid column */
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },

    compoundVariants: [
      // Outlined keeps border but removes tinted bg
      {
        appearance: 'outlined',
        class: 'bg-transparent',
      },
      // Ghost removes border too
      {
        appearance: 'ghost',
        class: 'bg-transparent border-transparent hover:bg-[var(--atom-card-bg)] ',
      },
      // Soft keeps tint but no shadow (good for dense overviews)
      {
        appearance: 'soft',
        class: 'shadow-none bg-[var(--atom-card-bg)] border-none',
      },
    ],

    defaultVariants: {
      variant: 'neutral',
      size: 'md',
      appearance: 'elevated',
      fullWidth: false,
    },
  },
);

export type StatCardBVariantProps = VariantProps<typeof statCardBVariants>