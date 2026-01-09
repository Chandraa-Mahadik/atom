import { cva, type VariantProps } from "class-variance-authority";

export const contentCardVariants = cva(
  [
    "flex flex-col",
    "rounded-md border",
    "select-text outline-none",
    "transition-[background-color,border-color,box-shadow]",
    "duration-200",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--atom-theme-surface-primary)] border-[var(--atom-theme-border-primary)] text-[var(--atom-theme-text-primary)]",

        info:
          "bg-[color-mix(in_srgb,var(--atom-info)_8%,transparent)] border-[color-mix(in_srgb,var(--atom-info)_25%,transparent)] text-[color-mix(in_srgb,var(--atom-info)_90%,black)]",

        success:
          "bg-[color-mix(in_srgb,var(--atom-success)_8%,transparent)] border-[color-mix(in_srgb,var(--atom-success)_25%,transparent)] text-[color-mix(in_srgb,var(--atom-success)_90%,black)]",

        warning:
          "bg-[color-mix(in_srgb,var(--atom-warning)_8%,transparent)] border-[color-mix(in_srgb,var(--atom-warning)_25%,transparent)] text-[color-mix(in_srgb,var(--atom-warning)_90%,black)]",

        error:
          "bg-[color-mix(in_srgb,var(--atom-error)_8%,transparent)] border-[color-mix(in_srgb,var(--atom-error)_25%,transparent)] text-[color-mix(in_srgb,var(--atom-error)_90%,black)]",

        neutral:
          "bg-[color-mix(in_srgb,var(--atom-badge-archived-border)_6%,transparent)] border-[color-mix(in_srgb,var(--atom-badge-archived-border)_75%,transparent)] text-muted-foreground",
      },

      size: {
        sm: "p-3 text-xs gap-2",
        md: "p-4 text-sm gap-3",
        lg: "p-6 text-base gap-4",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type ContentCardVariant = NonNullable<
  VariantProps<typeof contentCardVariants>["variant"]
>;

export type ContentCardSize = NonNullable<
  VariantProps<typeof contentCardVariants>["size"]
>;
