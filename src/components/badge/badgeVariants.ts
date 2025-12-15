import { cva } from "class-variance-authority";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "accent";

export type BadgeTone = "low" | "medium" | "high";

export const badgeVariants = cva(
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
      tone: { low: "", medium: "", high: "" },
    },
    compoundVariants: [
      { variant: "primary", tone: "low", className: "bg-[var(--atom-badge-primary-bg-low)] text-[var(--atom-badge-primary-fg-low)] border-[var(--atom-badge-primary-border-low)]" },
      { variant: "primary", tone: "medium", className: "bg-[var(--atom-badge-primary-bg-medium)] text-[var(--atom-badge-primary-fg-medium)] border-[var(--atom-badge-primary-border-medium)]" },
      { variant: "primary", tone: "high", className: "bg-[var(--atom-badge-primary-bg-high)] text-[var(--atom-badge-primary-fg-high)] border-[var(--atom-badge-primary-border-high)]" },

      { variant: "secondary", tone: "low", className: "bg-[var(--atom-badge-secondary-bg-low)] text-[var(--atom-badge-secondary-fg-low)] border-[var(--atom-badge-secondary-border-low)]" },
      { variant: "secondary", tone: "medium", className: "bg-[var(--atom-badge-secondary-bg-medium)] text-[var(--atom-badge-secondary-fg-medium)] border-[var(--atom-badge-secondary-border-medium)]" },
      { variant: "secondary", tone: "high", className: "bg-[var(--atom-badge-secondary-bg-high)] text-[var(--atom-badge-secondary-fg-high)] border-[var(--atom-badge-secondary-border-high)]" },

      { variant: "success", tone: "low", className: "bg-[var(--atom-badge-success-bg-low)] text-[var(--atom-badge-success-fg-low)] border-[var(--atom-badge-success-border-low)]" },
      { variant: "success", tone: "medium", className: "bg-[var(--atom-badge-success-bg-medium)] text-[var(--atom-badge-success-fg-medium)] border-[var(--atom-badge-success-border-medium)]" },
      { variant: "success", tone: "high", className: "bg-[var(--atom-badge-success-bg-high)] text-[var(--atom-badge-success-fg-high)] border-[var(--atom-badge-success-border-high)]" },

      { variant: "warning", tone: "low", className: "bg-[var(--atom-badge-warning-bg-low)] text-[var(--atom-badge-warning-fg-low)] border-[var(--atom-badge-warning-border-low)]" },
      { variant: "warning", tone: "medium", className: "bg-[var(--atom-badge-warning-bg-medium)] text-[var(--atom-badge-warning-fg-medium)] border-[var(--atom-badge-warning-border-medium)]" },
      { variant: "warning", tone: "high", className: "bg-[var(--atom-badge-warning-bg-high)] text-[var(--atom-badge-warning-fg-high)] border-[var(--atom-badge-warning-border-high)]" },

      { variant: "danger", tone: "low", className: "bg-[var(--atom-badge-danger-bg-low)] text-[var(--atom-badge-danger-fg-low)] border-[var(--atom-badge-danger-border-low)]" },
      { variant: "danger", tone: "medium", className: "bg-[var(--atom-badge-danger-bg-medium)] text-[var(--atom-badge-danger-fg-medium)] border-[var(--atom-badge-danger-border-medium)]" },
      { variant: "danger", tone: "high", className: "bg-[var(--atom-badge-danger-bg-high)] text-[var(--atom-badge-danger-fg-high)] border-[var(--atom-badge-danger-border-high)]" },

      { variant: "info", tone: "low", className: "bg-[var(--atom-badge-info-bg-low)] text-[var(--atom-badge-info-fg-low)] border-[var(--atom-badge-info-border-low)]" },
      { variant: "info", tone: "medium", className: "bg-[var(--atom-badge-info-bg-medium)] text-[var(--atom-badge-info-fg-medium)] border-[var(--atom-badge-info-border-medium)]" },
      { variant: "info", tone: "high", className: "bg-[var(--atom-badge-info-bg-high)] text-[var(--atom-badge-info-fg-high)] border-[var(--atom-badge-info-border-high)]" },

      { variant: "neutral", tone: "low", className: "bg-[var(--atom-badge-neutral-bg-low)] text-[var(--atom-badge-neutral-fg-low)] border-[var(--atom-badge-neutral-border-low)]" },
      { variant: "neutral", tone: "medium", className: "bg-[var(--atom-badge-neutral-bg-medium)] text-[var(--atom-badge-neutral-fg-medium)] border-[var(--atom-badge-neutral-border-medium)]" },
      { variant: "neutral", tone: "high", className: "bg-[var(--atom-badge-neutral-bg-high)] text-[var(--atom-badge-neutral-fg-high)] border-[var(--atom-badge-neutral-border-high)]" },

      { variant: "accent", tone: "low", className: "bg-[var(--atom-badge-accent-bg-low)] text-[var(--atom-badge-accent-fg-low)] border-[var(--atom-badge-accent-border-low)]" },
      { variant: "accent", tone: "medium", className: "bg-[var(--atom-badge-accent-bg-medium)] text-[var(--atom-badge-accent-fg-medium)] border-[var(--atom-badge-accent-border-medium)]" },
      { variant: "accent", tone: "high", className: "bg-[var(--atom-badge-accent-bg-high)] text-[var(--atom-badge-accent-fg-high)] border-[var(--atom-badge-accent-border-high)]" },
    ],
    defaultVariants: { variant: "primary", tone: "low" },
  }
);
