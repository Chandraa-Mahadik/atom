import { cva } from "class-variance-authority";

/* -------------------------------------------------------------------------------------------------
 * Overlay
 * ------------------------------------------------------------------------------------------------- */

export const drawerOverlayVariants = cva(
  [
    "fixed inset-0 z-[9998]",
    // "bg-black/50",
    "bg-black/60",
    // "backdrop-blur-[1px]",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
  ].join(" ")
);

/* -------------------------------------------------------------------------------------------------
 * Drawer Content
 * ------------------------------------------------------------------------------------------------- */

export const drawerContentVariants = cva(
  [
    "fixed z-[9999]",
    "bg-[var(--atom-card-bg)]",   // NOT theme bg
    "text-[var(--atom-card-fg)]",
    "border border-[var(--atom-border)]",
    "shadow-2xl",                 // elevation
    "flex flex-col",
    "overflow-hidden",
    "isolate",                    // prevents backdrop bleed
    "transition-transform",
    "duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        right:
          "right-0 top-0 h-full data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full",
        left:
          "left-0 top-0 h-full data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full",
        top:
          "top-0 left-0 w-full data-[state=open]:translate-y-0 data-[state=closed]:-translate-y-full",
        bottom:
          "bottom-0 left-0 w-full data-[state=open]:translate-y-0 data-[state=closed]:translate-y-full",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    compoundVariants: [
      { variant: "right", size: "sm", className: "w-64" },
      { variant: "right", size: "md", className: "w-96" },
      { variant: "right", size: "lg", className: "w-[32rem]" },
      { variant: "right", size: "xl", className: "w-[40rem]" },

      { variant: "left", size: "sm", className: "w-64" },
      { variant: "left", size: "md", className: "w-96" },
      { variant: "left", size: "lg", className: "w-[32rem]" },
      { variant: "left", size: "xl", className: "w-[40rem]" },

      { variant: "top", size: "sm", className: "h-40" },
      { variant: "top", size: "md", className: "h-64" },
      { variant: "top", size: "lg", className: "h-80" },
      { variant: "top", size: "xl", className: "h-[32rem]" },

      { variant: "bottom", size: "sm", className: "h-40" },
      { variant: "bottom", size: "md", className: "h-64" },
      { variant: "bottom", size: "lg", className: "h-80" },
      { variant: "bottom", size: "xl", className: "h-[32rem]" },
    ],
    defaultVariants: {
      variant: "right",
      size: "md",
    },
  }
);
