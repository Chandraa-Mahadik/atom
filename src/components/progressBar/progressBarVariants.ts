import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------------------------------
 * Track
 * ------------------------------------------------------------------------------------------------- */

export const progressTrackVariants = cva(
  [
    "w-full overflow-hidden",
    "border border-[var(--atom-theme-border-primary)]",
    "rounded-[var(--atom-radius-1)]",
  ].join(" "),
  {
    variants: {
      trackVariant: {
        default:
          "bg-[color-mix(in_srgb,var(--atom-theme-border-primary)_8%,transparent)]",
        outline: "bg-transparent",
        subtle:
          "bg-[color-mix(in_srgb,var(--atom-theme-border-primary)_6%,var(--atom-bg))]",
      },
      size: {
        sm: "h-3",
        md: "h-3.5",
        lg: "h-4",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      trackVariant: "default",
      size: "sm",
      fullWidth: true,
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Indicator
 * ------------------------------------------------------------------------------------------------- */

export const progressIndicatorVariants = cva(
  [
    "h-full",
    "rounded-[var(--atom-radius-1)]",
    "transition-all duration-300 ease-out",
  ].join(" "),
  {
    variants: {
      indicatorVariant: {
        default: "bg-[var(--atom-theme-surface-secondary)]",
        outline: "bg-[var(--atom-primary)]",
        subtle:
          "bg-[color-mix(in_srgb,var(--atom-primary)_45%,transparent)]",
      },
    },
    defaultVariants: {
      indicatorVariant: "default",
    },
  }
);

export type ProgressBarTrackVariant =
  VariantProps<typeof progressTrackVariants>["trackVariant"];

export type ProgressBarIndicatorVariant =
  VariantProps<typeof progressIndicatorVariants>["indicatorVariant"];

export type ProgressBarSize =
  VariantProps<typeof progressTrackVariants>["size"];

