import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import {
  dialogOverlayVariants,
  dialogContentVariants,
} from "./dialogVariants";

/* -------------------------------------------------------------------------------------------------
 * Root & Trigger
 * ------------------------------------------------------------------------------------------------- */

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

/* -------------------------------------------------------------------------------------------------
 * Portal (app-root aware)
 * ------------------------------------------------------------------------------------------------- */

const DialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const appRoot = document.getElementById("app-root");
    if (appRoot) {
      setContainer(appRoot);
    } else {
      console.warn("atom-theme container not found, using document.body");
      setContainer(document.body);
    }
  }, []);

  if (!container) return null;

  return (
    <DialogPrimitive.Portal container={container} {...props}>
      {children}
    </DialogPrimitive.Portal>
  );
};
DialogPortal.displayName = "DialogPortal";

/* -------------------------------------------------------------------------------------------------
 * Overlay
 * ------------------------------------------------------------------------------------------------- */

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(dialogOverlayVariants(), className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/* -------------------------------------------------------------------------------------------------
 * Content
 * ------------------------------------------------------------------------------------------------- */

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  showClose?: boolean;
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showClose = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      role="dialog"
      className={cn(dialogContentVariants(), className)}
      {...props}
    >
      {children}

      {showClose && (
        <DialogPrimitive.Close
          aria-label="Close"
          className={cn(
            "absolute right-4 top-4",
            "inline-flex h-8 w-8 items-center justify-center rounded-md",
            "text-[var(--atom-text-muted)]",
            "hover:bg-[var(--atom-surface-alt)] hover:text-[var(--atom-text)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-primary)]"
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/* -------------------------------------------------------------------------------------------------
 * Structural Subcomponents
 * ------------------------------------------------------------------------------------------------- */

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 px-6 pt-6 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("px-6 py-4 text-[var(--atom-card-fg)]", className)}
    {...props}
  />
);
DialogBody.displayName = "DialogBody";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-2 px-6 pb-6 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

/* -------------------------------------------------------------------------------------------------
 * Typography
 * ------------------------------------------------------------------------------------------------- */

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-tight tracking-tight",
      "text-[var(--atom-card-fg)]",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[var(--atom-text-muted)]", className)}
    {...props}
  />
));
DialogDescription.displayName =
  DialogPrimitive.Description.displayName;

/* -------------------------------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------------------------------- */

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
