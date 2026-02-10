// src/components/switch/SwitchVariants.ts
import { cva, type VariantProps } from 'class-variance-authority'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export const switchVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer items-center',
    'rounded-full transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-[var(--atom-ring-color)]',
    'disabled:cursor-not-allowed disabled:opacity-50' +
    'border border-[var(--atom-theme-border-primary)]  duration-300 ease-in-out ' +
    'focus-visible:ring-[var(--atom-ring-color)] focus-visible:ring-offset-2' +
    'focus-visible:ring-offset-[var(--atom-ring-offset)] ' +
    'overflow-visible ' 
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-[color-mix(in_srgb,var(--atom-border)_40%,transparent)] data-[state=checked]:bg-[var(--atom-primary)] ',
        theme:
          'bg-[color-mix(in_srgb,var(--atom-border)_35%,transparent)] data-[state=checked]:bg-[var(--atom-primary)]',
      },
      size: {
        sm: 'h-5 w-8 p-0.5',
        md: 'h-6 w-11 p-1',
        lg: 'h-7 w-14 p-1.5',
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
 sm: { size: 'h-3 w-3', translateX: 14 },
  md: { size: 'h-4 w-4', translateX: 20 },
  lg: { size: 'h-5 w-5', translateX: 26 },
} as const

export type SwitchProps =
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>
