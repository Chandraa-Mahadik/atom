import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'
import {
  paperVariants,
  type PaperVariantProps,
} from './paperVariants'

export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaperVariantProps {
  asChild?: boolean
}

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      className,
      variant,
      size,
      padding,
      radius,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        data-slot="paper"
        className={cn(
          paperVariants({
            variant,
            size,
            padding,
            radius,
          }),
          className,
        )}
        {...props}
      />
    )
  },
)

Paper.displayName = 'Paper'
