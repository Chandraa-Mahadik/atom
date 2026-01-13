// src/components/StatCardC.tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'
import {
  statCardCVariants,
  type StatCardCVariantProps,
} from './statCardCVariants'

export type StatCardPriorityVariant =
  | 'primary'
  | 'high'
  | 'medium'
  | 'low'
  | 'neutral'
export type StatCardPrioritySize = 'sm' | 'md' | 'lg'
export type StatCardPriorityAppearance =
  | 'elevated'
  | 'outlined'
  | 'ghost'
  | 'soft'

export interface StatCardCProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StatCardCVariantProps {
  /** Label like "High Priority" */
  label: string
  /** Numeric value on the right pill */
  value: React.ReactNode
  /** Optional icon inside the pill (e.g. trend arrow) */
  pillIcon?: React.ReactNode
  /** Render as child via Slot */
  asChild?: boolean
}

export const StatCardC = React.forwardRef<
  HTMLDivElement,
  StatCardCProps
>(
  (
    {
      className,
      variant,
      size,
      appearance,
      label,
      value,
      pillIcon,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        data-slot="stat-card-priority"
        className={cn(
          statCardCVariants({ variant, size, appearance }),
          className,
        )}
        {...props}
      >
        {/* Left: label */}
        <span className="text-(--atom-text)">{label}</span>

        {/* Right: colored pill with value */}
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-md px-2.5 py-1 ' +
              'text-xs font-medium',
            // match priority variant colors for the pill
            variant === 'high' &&
              'bg-[color-mix(in_srgb,var(--atom-error)_15%,transparent)] text-(--atom-error) border-[color-mix(in_srgb,var(--atom-error)_40%,var(--atom-card-border))] border',
            variant === 'medium' &&
              'bg-[color-mix(in_srgb,var(--atom-warning)_15%,transparent)] text-(--atom-warning) border-[color-mix(in_srgb,var(--atom-warning)_40%,var(--atom-card-border))] border',
            variant === 'low' &&
              'bg-[color-mix(in_srgb,var(--atom-success)_15%,transparent)] text-(--atom-success) border-[color-mix(in_srgb,var(--atom-success)_40%,var(--atom-card-border))] border',
            variant === 'primary' &&
              'bg-[color-mix(in_srgb,var(--atom-theme-surface-primary)_10%,transparent)] text-(--atom-theme-text-primary) border border-(--atom-theme-border-primary)',
            variant === 'neutral' &&
              'bg-[color-mix(in_srgb,var(--atom-border)_12%,transparent)] text-(--atom-text-muted) border-(--atom-card-border) border',
          )}
        >
          {pillIcon && (
            <span className="mr-1 flex items-center">{pillIcon}</span>
          )}
          {value}
        </span>
      </Comp>
    )
  },
)

StatCardC.displayName = 'StatCardC'
