// src/components/switch/SwitchVariants.ts
import { cva, type VariantProps } from 'class-variance-authority'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export const switchVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer items-center',
    'rounded-full transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-[var(--atom-ring-color)]',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-[color-mix(in_srgb,var(--atom-border)_40%,transparent)] data-[state=checked]:bg-[var(--atom-primary)]',
        theme:
          'bg-[color-mix(in_srgb,var(--atom-border)_35%,transparent)] data-[state=checked]:bg-[var(--atom-primary)]',
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
)

export const thumbConfig = {
  sm: { size: 'h-4 w-4', translateX: 16 },
  md: { size: 'h-5 w-5', translateX: 20 },
  lg: { size: 'h-6 w-6', translateX: 28 },
} as const

export type SwitchProps =
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>
