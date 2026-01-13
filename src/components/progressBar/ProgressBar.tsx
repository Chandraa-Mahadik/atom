import * as React from "react";
import { cn } from "../../lib/cn";
    import {
    progressTrackVariants,
    progressIndicatorVariants,
    type ProgressBarTrackVariant,
    type ProgressBarIndicatorVariant,
    type ProgressBarSize,
    } from "./progressBarVariants";

export interface ProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Progress value from 0 to 100 */
  value?: number;
  /** If true, shows animated indeterminate state */
  indeterminate?: boolean;
  /** Accessible label */
  ariaLabel?: string;
  /** Visual variant (syncs track + indicator) */
  variant?: ProgressBarIndicatorVariant;
  /** Track background variant */
  trackVariant?: ProgressBarTrackVariant;
  /** Size of the progress bar */
  size?: ProgressBarSize;
  /** Whether to span full width */
  fullWidth?: boolean;
}

export const ProgressBar = React.forwardRef<
  HTMLDivElement,
  ProgressBarProps
>(
  (
    {
      className,
      value = 0,
      indeterminate = false,
      ariaLabel = "Progress",
      variant,
      trackVariant = "default",
      size,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const clamped = Math.max(0, Math.min(100, value));

    // 🔑 Indicator variant resolution
    const indicatorVariant =
      variant ?? trackVariant;

    return (
      <div
        ref={ref}
        data-slot="progress-track"
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : clamped}
        aria-valuetext={
          indeterminate ? undefined : `${clamped}%`
        }
        aria-busy={indeterminate || undefined}
        className={cn(
          progressTrackVariants({
            trackVariant,
            size,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        <div
          data-slot="progress-indicator"
          data-testid="progress-indicator"
          className={cn(
            progressIndicatorVariants({
              indicatorVariant,
            }),
            indeterminate && "animate-indeterminate"
          )}
          style={{
            width: indeterminate ? "40%" : `${clamped}%`,
            transform: indeterminate
              ? "translateX(-60%)"
              : undefined,
          }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
