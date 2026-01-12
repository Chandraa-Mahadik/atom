import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

/* -------------------------------------------------------------------------------------------------
 * Card Root
 * ------------------------------------------------------------------------------------------------- */

const cardVariants = cva(
  [
    "rounded-lg",
    "bg-[var(--atom-theme-surface-primary)]",
    "border border-[color-mix(in_srgb,var(--atom-theme-border-primary)_60%,transparent)]",
    "transition-all duration-200",
    "overflow-hidden",
  ].join(" "),
  {
    variants: {
      variant: {
        elevated: "shadow-md hover:shadow-lg",
        outlined: "shadow-sm",
        flat: "border-transparent shadow-none",
      },
      hoverable: {
        true: "hover:shadow-xl hover:scale-[1.02] cursor-pointer",
        false: "",
      },
      clickable: {
        true:
          "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-ring-color)] focus-visible:ring-offset-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "elevated",
      hoverable: false,
      clickable: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverable, clickable, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hoverable, clickable }), className)}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    />
  )
);
Card.displayName = "Card";

/* -------------------------------------------------------------------------------------------------
 * Card Header
 * ------------------------------------------------------------------------------------------------- */

const cardHeaderVariants = cva("px-6 pt-6", {
  variants: {
    divider: {
      true: "border-b border-[var(--atom-theme-border-primary)] pb-4",
      false: "",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    divider: false,
    align: "left",
  },
});

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {
  avatar?: React.ReactNode;
  action?: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, divider, align, avatar, action, children, ...props }, ref) => {
    if (avatar || action) {
      return (
        <div
          ref={ref}
          className={cn(cardHeaderVariants({ divider }), className)}
          {...props}
        >
          <div className="flex items-start gap-4">
            {avatar && <div className="shrink-0">{avatar}</div>}
            <div className="flex-1 min-w-0">{children}</div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardHeaderVariants({ divider, align }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

/* -------------------------------------------------------------------------------------------------
 * Card Title
 * ------------------------------------------------------------------------------------------------- */

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      "text-[var(--atom-theme-text-primary)]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/* -------------------------------------------------------------------------------------------------
 * Card Subtitle
 * ------------------------------------------------------------------------------------------------- */

export const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mt-1 text-sm text-[var(--atom-text-muted)]",
      className
    )}
    {...props}
  />
));
CardSubtitle.displayName = "CardSubtitle";

/* -------------------------------------------------------------------------------------------------
 * Card Body
 * ------------------------------------------------------------------------------------------------- */

const cardBodyVariants = cva("", {
  variants: {
    noPadding: {
      true: "",
      false: "px-6 py-4",
    },
  },
  defaultVariants: {
    noPadding: false,
  },
});

export interface CardBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBodyVariants> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, noPadding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardBodyVariants({ noPadding }), className)}
      {...props}
    />
  )
);
CardBody.displayName = "CardBody";

/* -------------------------------------------------------------------------------------------------
 * Card Footer
 * ------------------------------------------------------------------------------------------------- */

const cardFooterVariants = cva("flex items-center gap-3 px-6 pb-6", {
  variants: {
    divider: {
      true: "border-t border-[var(--atom-theme-border-primary)] pt-4",
      false: "",
    },
    align: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    divider: false,
    align: "right",
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, divider, align, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ divider, align }), className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

/* -------------------------------------------------------------------------------------------------
 * Card Media
 * ------------------------------------------------------------------------------------------------- */

const cardMediaVariants = cva("w-full", {
  variants: {
    size: {
      sm: "h-32",
      md: "h-48",
      lg: "h-64",
      xl: "h-80",
      auto: "h-auto",
    },
    objectFit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
    },
  },
  defaultVariants: {
    size: "md",
    objectFit: "cover",
  },
});

export interface CardMediaProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height">,
    VariantProps<typeof cardMediaVariants> {
  src: string;
  alt: string;
}

export const CardMedia = React.forwardRef<HTMLImageElement, CardMediaProps>(
  ({ className, size, objectFit, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(cardMediaVariants({ size, objectFit }), className)}
      {...props}
    />
  )
);
CardMedia.displayName = "CardMedia";
