import { cva, type VariantProps } from "class-variance-authority";

export const checkboxVariants = cva(
  [
    "shrink-0 rounded-[var(--atom-radius-1)]",
    "border border-[var(--atom-card-border)]",
    "bg-[var(--atom-input-bg)]",
    "transition-[background-color,border-color,box-shadow,color]",
    "disabled:cursor-not-allowed disabled:opacity-50",

    "hover:border-[color-mix(in_srgb,var(--atom-card-border)_70%,var(--atom-text))]",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[color-mix(in_srgb,var(--atom-primary)_35%,transparent)]",
    "focus-visible:ring-offset-0",

    "accent-[var(--atom-primary)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type CheckboxSize = NonNullable<
  VariantProps<typeof checkboxVariants>["size"]
>;
