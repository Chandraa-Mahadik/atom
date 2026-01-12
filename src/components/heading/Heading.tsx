import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'
import {
  headingVariants,
  type HeadingVariantProps,
} from './headingVariants'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    HeadingVariantProps {
  /**
   * Semantic heading level
   * @default 'h2'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * Render as child component (Radix Slot)
   */
  asChild?: boolean
}

const DEFAULT_SIZE_BY_AS: Record<
  NonNullable<HeadingProps['as']>,
  NonNullable<HeadingVariantProps['size']>
> = {
  h1: 'xl',
  h2: 'lg',
  h3: 'md',
  h4: 'sm',
  h5: 'xs',
  h6: 'xs',
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      as = 'h2',
      asChild = false,
      size,
      weight,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : as

    const resolvedSize =
      size ?? DEFAULT_SIZE_BY_AS[as]

    return (
      <Comp
        ref={ref}
        data-slot="heading"
        className={cn(
          headingVariants({ size: resolvedSize, weight }),
          className,
        )}
        {...props}
      />
    )
  },
)

Heading.displayName = 'Heading'
