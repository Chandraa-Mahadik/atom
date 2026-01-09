import { cva, type VariantProps } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "inline-flex items-center justify-center",
    "select-none shrink-0 overflow-hidden",
    "font-medium uppercase tracking-wide",
    "border",
    "transition-[color,background-color,border-color,box-shadow,transform]",
    "duration-150 ease-in-out",
    "motion-reduce:transition-none",
    "focus-visible:outline-none",
    // token-driven focus ring (aligned to your Badge approach)
    "focus-visible:ring-[3px] focus-visible:ring-[color:var(--atom-ring-color)]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--atom-ring-offset)]",
  ].join(" "),
  {
    variants: {
      /**
       * Semantic color variant. Reuses Badge tokens (low/high) so theme stays consistent.
       */
      variant: {
        primary:
          "bg-[var(--atom-badge-primary-bg-low)] text-[var(--atom-badge-primary-fg-low)] border-[var(--atom-badge-primary-border-low)]",
        secondary:
          "bg-[var(--atom-badge-secondary-bg-low)] text-[var(--atom-badge-secondary-fg-low)] border-[var(--atom-badge-secondary-border-low)]",
        neutral:
          "bg-[var(--atom-badge-neutral-bg-low)] text-[var(--atom-badge-neutral-fg-low)] border-[var(--atom-badge-neutral-border-low)]",
        success:
          "bg-[var(--atom-badge-success-bg-low)] text-[var(--atom-badge-success-fg-low)] border-[var(--atom-badge-success-border-low)]",
        warning:
          "bg-[var(--atom-badge-warning-bg-low)] text-[var(--atom-badge-warning-fg-low)] border-[var(--atom-badge-warning-border-low)]",
        danger:
          "bg-[var(--atom-badge-danger-bg-low)] text-[var(--atom-badge-danger-fg-low)] border-[var(--atom-badge-danger-border-low)]",
        info:
          "bg-[var(--atom-badge-info-bg-low)] text-[var(--atom-badge-info-fg-low)] border-[var(--atom-badge-info-border-low)]",
        accent:
          "bg-[var(--atom-badge-accent-bg-low)] text-[var(--atom-badge-accent-fg-low)] border-[var(--atom-badge-accent-border-low)]",
      },

      /**
       * Appearance intensity / fill level.
       * - subtle: default (uses low tokens via `variant`)
       * - solid: uses high tokens via compoundVariants
       * - outline: transparent bg
       * - ghost: no border + subtle hover tint
       * - soft: no border (good for dense lists)
       */
      appearance: {
        subtle: "",
        solid: "border-transparent",
        outline: "bg-transparent",
        ghost:
          "bg-transparent border-transparent hover:bg-[var(--atom-badge-neutral-bg-low)]",
        soft: "border-none",
      },

      shape: {
        circle: "rounded-full",
        square: "rounded-md",
        pill: "rounded-full px-3",
      },

      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },

      /**
       * Optional ring highlighting (selected/active user).
       * Uses tokens and keeps offset coherent with theme.
       */
      withRing: {
        true: "ring-2 ring-[var(--atom-primary)] ring-offset-2 ring-offset-[var(--atom-bg)]",
        false: "",
      },
    },

    compoundVariants: [
      // Solid uses *-high tokens for each semantic variant
      {
        appearance: "solid",
        variant: "primary",
        className:
          "bg-[var(--atom-badge-primary-bg-high)] text-[var(--atom-badge-primary-fg-high)] border-[var(--atom-badge-primary-border-high)]",
      },
      {
        appearance: "solid",
        variant: "secondary",
        className:
          "bg-[var(--atom-badge-secondary-bg-high)] text-[var(--atom-badge-secondary-fg-high)] border-[var(--atom-badge-secondary-border-high)]",
      },
      {
        appearance: "solid",
        variant: "neutral",
        className:
          "bg-[var(--atom-badge-neutral-bg-high)] text-[var(--atom-badge-neutral-fg-high)] border-[var(--atom-badge-neutral-border-high)]",
      },
      {
        appearance: "solid",
        variant: "success",
        className:
          "bg-[var(--atom-badge-success-bg-high)] text-[var(--atom-badge-success-fg-high)] border-[var(--atom-badge-success-border-high)]",
      },
      {
        appearance: "solid",
        variant: "warning",
        className:
          "bg-[var(--atom-badge-warning-bg-high)] text-[var(--atom-badge-warning-fg-high)] border-[var(--atom-badge-warning-border-high)]",
      },
      {
        appearance: "solid",
        variant: "danger",
        className:
          "bg-[var(--atom-badge-danger-bg-high)] text-[var(--atom-badge-danger-fg-high)] border-[var(--atom-badge-danger-border-high)]",
      },
      {
        appearance: "solid",
        variant: "info",
        className:
          "bg-[var(--atom-badge-info-bg-high)] text-[var(--atom-badge-info-fg-high)] border-[var(--atom-badge-info-border-high)]",
      },
      {
        appearance: "solid",
        variant: "accent",
        className:
          "bg-[var(--atom-badge-accent-bg-high)] text-[var(--atom-badge-accent-fg-high)] border-[var(--atom-badge-accent-border-high)]",
      }
    ],

    defaultVariants: {
      variant: "primary",
      appearance: "subtle",
      shape: "circle",
      size: "md",
      withRing: false,
    },
  }
);

export type AvatarVariants = VariantProps<typeof avatarVariants>;

export type AvatarVariant =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "accent";

export type AvatarAppearance = "subtle" | "solid" | "outline" | "ghost" | "soft";
export type AvatarSize = "sm" | "md" | "lg";
export type AvatarShape = "circle" | "square" | "pill";
