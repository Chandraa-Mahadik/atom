import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "accent";

type BadgeTone = "low" | "medium" | "high";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap shrink-0 w-fit",
    "gap-1",
    "rounded-md border",
    "px-2 py-0.5",
    "text-xs font-medium",
    "[&>svg]:size-3 [&>svg]:pointer-events-none",
    "transition-[color,background-color,border-color,box-shadow]",
    "overflow-hidden",
    "focus-visible:outline-none",
    // token-driven focus ring (your theme maps ring vars)
    "focus-visible:ring-[3px] focus-visible:ring-[color:var(--atom-ring-color)]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--atom-ring-offset)]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
        neutral: "",
        accent: "",
      },
      tone: {
        low: "",
        medium: "",
        high: "",
      },
    },
    compoundVariants: [
      // PRIMARY
      {
        variant: "primary",
        tone: "low",
        className:
          "bg-[var(--atom-badge-primary-bg-low)] text-[var(--atom-badge-primary-fg-low)] border-[var(--atom-badge-primary-border-low)]",
      },
      {
        variant: "primary",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-primary-bg-medium)] text-[var(--atom-badge-primary-fg-medium)] border-[var(--atom-badge-primary-border-medium)]",
      },
      {
        variant: "primary",
        tone: "high",
        className:
          "bg-[var(--atom-badge-primary-bg-high)] text-[var(--atom-badge-primary-fg-high)] border-[var(--atom-badge-primary-border-high)]",
      },

      // SECONDARY
      {
        variant: "secondary",
        tone: "low",
        className:
          "bg-[var(--atom-badge-secondary-bg-low)] text-[var(--atom-badge-secondary-fg-low)] border-[var(--atom-badge-secondary-border-low)]",
      },
      {
        variant: "secondary",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-secondary-bg-medium)] text-[var(--atom-badge-secondary-fg-medium)] border-[var(--atom-badge-secondary-border-medium)]",
      },
      {
        variant: "secondary",
        tone: "high",
        className:
          "bg-[var(--atom-badge-secondary-bg-high)] text-[var(--atom-badge-secondary-fg-high)] border-[var(--atom-badge-secondary-border-high)]",
      },

      // SUCCESS
      {
        variant: "success",
        tone: "low",
        className:
          "bg-[var(--atom-badge-success-bg-low)] text-[var(--atom-badge-success-fg-low)] border-[var(--atom-badge-success-border-low)]",
      },
      {
        variant: "success",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-success-bg-medium)] text-[var(--atom-badge-success-fg-medium)] border-[var(--atom-badge-success-border-medium)]",
      },
      {
        variant: "success",
        tone: "high",
        className:
          "bg-[var(--atom-badge-success-bg-high)] text-[var(--atom-badge-success-fg-high)] border-[var(--atom-badge-success-border-high)]",
      },

      // WARNING
      {
        variant: "warning",
        tone: "low",
        className:
          "bg-[var(--atom-badge-warning-bg-low)] text-[var(--atom-badge-warning-fg-low)] border-[var(--atom-badge-warning-border-low)]",
      },
      {
        variant: "warning",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-warning-bg-medium)] text-[var(--atom-badge-warning-fg-medium)] border-[var(--atom-badge-warning-border-medium)]",
      },
      {
        variant: "warning",
        tone: "high",
        className:
          "bg-[var(--atom-badge-warning-bg-high)] text-[var(--atom-badge-warning-fg-high)] border-[var(--atom-badge-warning-border-high)]",
      },

      // DANGER
      {
        variant: "danger",
        tone: "low",
        className:
          "bg-[var(--atom-badge-danger-bg-low)] text-[var(--atom-badge-danger-fg-low)] border-[var(--atom-badge-danger-border-low)]",
      },
      {
        variant: "danger",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-danger-bg-medium)] text-[var(--atom-badge-danger-fg-medium)] border-[var(--atom-badge-danger-border-medium)]",
      },
      {
        variant: "danger",
        tone: "high",
        className:
          "bg-[var(--atom-badge-danger-bg-high)] text-[var(--atom-badge-danger-fg-high)] border-[var(--atom-badge-danger-border-high)]",
      },

      // INFO
      {
        variant: "info",
        tone: "low",
        className:
          "bg-[var(--atom-badge-info-bg-low)] text-[var(--atom-badge-info-fg-low)] border-[var(--atom-badge-info-border-low)]",
      },
      {
        variant: "info",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-info-bg-medium)] text-[var(--atom-badge-info-fg-medium)] border-[var(--atom-badge-info-border-medium)]",
      },
      {
        variant: "info",
        tone: "high",
        className:
          "bg-[var(--atom-badge-info-bg-high)] text-[var(--atom-badge-info-fg-high)] border-[var(--atom-badge-info-border-high)]",
      },

      // NEUTRAL
      {
        variant: "neutral",
        tone: "low",
        className:
          "bg-[var(--atom-badge-neutral-bg-low)] text-[var(--atom-badge-neutral-fg-low)] border-[var(--atom-badge-neutral-border-low)]",
      },
      {
        variant: "neutral",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-neutral-bg-medium)] text-[var(--atom-badge-neutral-fg-medium)] border-[var(--atom-badge-neutral-border-medium)]",
      },
      {
        variant: "neutral",
        tone: "high",
        className:
          "bg-[var(--atom-badge-neutral-bg-high)] text-[var(--atom-badge-neutral-fg-high)] border-[var(--atom-badge-neutral-border-high)]",
      },

      // ACCENT
      {
        variant: "accent",
        tone: "low",
        className:
          "bg-[var(--atom-badge-accent-bg-low)] text-[var(--atom-badge-accent-fg-low)] border-[var(--atom-badge-accent-border-low)]",
      },
      {
        variant: "accent",
        tone: "medium",
        className:
          "bg-[var(--atom-badge-accent-bg-medium)] text-[var(--atom-badge-accent-fg-medium)] border-[var(--atom-badge-accent-border-medium)]",
      },
      {
        variant: "accent",
        tone: "high",
        className:
          "bg-[var(--atom-badge-accent-bg-high)] text-[var(--atom-badge-accent-fg-high)] border-[var(--atom-badge-accent-border-high)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      tone: "low",
    },
  }
);

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    variant?: BadgeVariant;
    tone?: BadgeTone;
  };

function Badge({
  className,
  variant,
  tone,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, tone }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
