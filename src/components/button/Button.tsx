import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap select-none focus-ring " +
    "transition-colors disabled:opacity-50 disabled:pointer-events-none " +
    "rounded-atom2 font-medium",
  {
    variants: {
      variant: {
        primary:
          "text-[var(--atom-button-fg)] bg-[var(--atom-button-bg)] hover:bg-[var(--atom-button-bg-hover)]",
        ghost:
          "text-[var(--atom-button-ghost-fg)] bg-[var(--atom-button-ghost-bg)] hover:bg-[var(--atom-button-ghost-hover-bg)]",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
