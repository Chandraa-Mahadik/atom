import * as React from "react";
import { cn } from "../../lib/cn";
import {
  contentCardVariants,
  type ContentCardVariant,
  type ContentCardSize,
} from "./contentCardVariants";

export interface ContentCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContentCardVariant;
  size?: ContentCardSize;
  title?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentCard = React.forwardRef<
  HTMLDivElement,
  ContentCardProps
>(
  (
    { className, variant = "default", size = "md", title, icon, children, footer, ...props },
    ref
  ) => {
    const ariaLive =
      variant === "error" || variant === "warning" ? "polite" : "off";

    return (
      <div
        ref={ref}
        role="region"
        aria-live={ariaLive}
        data-slot="content-card"
        className={cn(contentCardVariants({ variant, size }), className)}
        {...props}
      >
        {(title || icon) && (
          <div className="flex items-start gap-2">
            {icon && (
              <span
                aria-hidden="true"
                className={cn(
                  "shrink-0 mt-0.5",
                  variant === "info" && "text-[var(--atom-info)]",
                  variant === "success" && "text-[var(--atom-success)]",
                  variant === "warning" && "text-[var(--atom-warning)]",
                  variant === "error" && "text-[var(--atom-error)]",
                  variant === "neutral" && "text-muted-foreground",
                  variant === "default" &&
                    "text-[var(--atom-theme-text-primary)]"
                )}
              >
                {icon}
              </span>
            )}

            {title && title.trim() !== "" && (
              <h3 className="font-semibold leading-tight">
                {title}
              </h3>
            )}
          </div>
        )}

        <div className="flex-1 leading-relaxed">
          {children}
        </div>

        {footer && (
          <div className="text-xs opacity-80 border-t border-current/10 pt-2 mt-1">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

ContentCard.displayName = "ContentCard";
