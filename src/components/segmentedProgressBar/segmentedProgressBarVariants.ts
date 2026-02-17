import { cva, type VariantProps } from "class-variance-authority";

export const segmentedProgressBarRootVariants = cva(
  "w-full inline-flex items-center gap-2",
  {
    variants: {
      size: {
        sm: "h-2",
        md: "h-2.5",
        lg: "h-3",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: true,
    },
  }
);

export const segmentedProgressBarSegmentVariants = cva(
  [
    "relative flex-1 min-w-0 rounded-[var(--atom-radius-1)]",
    "transition-colors duration-200 ease-out",
  ].join(" "),
  {
    variants: {
      variant: {
        progress: "",
        navigation: "border border-[var(--atom-border)]",
      },
      status: {
        completed: "bg-[var(--atom-success)]",
        active:
          "bg-[var(--atom-primary)] ring-1 ring-[color-mix(in_srgb,var(--atom-primary)_55%,transparent)]",
        pending:
          "bg-[color-mix(in_srgb,var(--atom-theme-border-primary)_50%,transparent)]",
        blocked:
          "bg-[color-mix(in_srgb,var(--atom-error)_36%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--atom-error)_45%,transparent)]",
      },
      interactive: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-focus-ring)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "progress",
      status: "pending",
      interactive: false,
    },
    compoundVariants: [
      {
        variant: "navigation",
        status: "completed",
        className:
          "bg-[color-mix(in_srgb,var(--atom-success)_35%,var(--atom-surface))] text-[var(--atom-text-primary)]",
      },
      {
        variant: "navigation",
        status: "active",
        className:
          "bg-[color-mix(in_srgb,var(--atom-primary)_24%,var(--atom-surface))] border-[var(--atom-primary)]",
      },
      {
        variant: "navigation",
        status: "pending",
        className:
          "bg-[var(--atom-surface)] text-[var(--atom-text-muted)]",
      },
      {
        variant: "navigation",
        status: "blocked",
        className:
          "bg-[color-mix(in_srgb,var(--atom-error)_14%,var(--atom-surface))] border-[color-mix(in_srgb,var(--atom-error)_45%,transparent)]",
      },
      {
        status: "blocked",
        interactive: false,
        className: "opacity-75",
      },
    ],
  }
);

export type SegmentedProgressBarSize =
  VariantProps<typeof segmentedProgressBarRootVariants>["size"];
