// src/components/StatCardB.tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'
import {
  statCardBVariants,
  type StatCardBVariantProps,
} from './statCardBVariants'


export type StatCardBVariant =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'accent'

export type StatCardBSize = 'sm' | 'md' | 'lg'

export type StatCardBAppearance = 'elevated' | 'outlined' | 'ghost' | 'soft'

export interface StatCardBProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StatCardBVariantProps {
  /** Title like "Validated", "Failed" */
  label: string
  /** Main metric value like 4, 15, 2 */
  value: React.ReactNode
  /** Optional icon in top-right */
  icon?: React.ReactNode
  /** Use Slot to render as <a>, <Link>, etc. */
  asChild?: boolean
}

export const StatCardB = React.forwardRef<HTMLDivElement, StatCardBProps>(
  (
    {
      className,
      variant,
      size,
      appearance,
      fullWidth,
      label,
      value,
      icon,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        data-slot="stat-card"
        className={cn(
          statCardBVariants({ variant, size, appearance, fullWidth }),
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-medium text-(--atom-text-muted)">
            {label}
          </span>
          {icon && (
            <span className="shrink-0 text-[11px] opacity-80">{icon}</span>
          )}
        </div>

        <div className="mt-1 text-2xl font-semibold leading-tight">
          {value}
        </div>
      </Comp>
    )
  },
)

StatCardB.displayName = 'StatCardB'
