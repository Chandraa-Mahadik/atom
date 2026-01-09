import { cva } from "class-variance-authority";

/* -------------------------------------------------------------------------------------------------
 * Overlay
 * ------------------------------------------------------------------------------------------------- */

export const dialogOverlayVariants = cva(
  [
    "fixed inset-0 z-[9998]",
    "bg-black/50",
    "backdrop-blur-[1px]",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
  ].join(" ")
);

/* -------------------------------------------------------------------------------------------------
 * Content
 * ------------------------------------------------------------------------------------------------- */

export const dialogContentVariants = cva(
  [
    "fixed left-1/2 top-1/2 z-[9999]",
    "-translate-x-1/2 -translate-y-1/2",
    "w-full max-w-lg max-h-[90vh] overflow-y-auto",

    "bg-[var(--atom-theme-surface-primary)]",
    "border border-[var(--atom-theme-border-primary)]",
    "rounded-lg shadow-2xl",

    "flex flex-col",

    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
    "data-[state=open]:slide-in-from-top-[48%]",
    "data-[state=closed]:slide-out-to-top-[48%]",

    "duration-200",
  ].join(" ")
);
