import * as React from "react";
import { cn } from "../../lib/cn";
import {
  segmentedProgressBarRootVariants,
  segmentedProgressBarSegmentVariants,
  type SegmentedProgressBarSize,
} from "./segmentedProgressBarVariants";

export type SegmentStatus =
  | "pending"
  | "active"
  | "completed"
  | "blocked";

export type Segment = {
  id: string;
  label?: string;
  status: SegmentStatus;
  isOptional?: boolean;
};

export type SegmentedProgressBarVariant =
  | "progress"
  | "navigation";

export interface SegmentedProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Ordered list of workflow segments. */
  segments: Segment[];
  /** Component intent: workflow progress or segmented navigation. */
  variant?: SegmentedProgressBarVariant;
  /** Size of each segment bar. */
  size?: SegmentedProgressBarSize;
  /** Whether component should take all available width. */
  fullWidth?: boolean;
  /** Accessible label for workflow progress. */
  ariaLabel?: string;
  /** Whether segment labels should be rendered. */
  showLabels?: boolean;
  /** Global CTA visibility is computed and controlled by parent. */
  showGlobalAction?: boolean;
  /** Global CTA content shown only when showGlobalAction is true. */
  globalAction?: React.ReactNode;
  /** Segment-level action renderer; only rendered for active segment. */
  renderSegmentAction?: (segment: Segment) => React.ReactNode;
  /** Enable segment click/keyboard navigation. */
  interactive?: boolean;
  /** Notifies parent when a segment is selected. */
  onSegmentChange?: (
    segment: Segment,
    index: number
  ) => void;
  /** Show previous/next controls for active segment navigation. */
  showStepControls?: boolean;
  /** Label for previous step action button. */
  previousLabel?: string;
  /** Label for next step action button. */
  nextLabel?: string;
  /** Optional active segment panel renderer, useful for long forms. */
  renderActivePanel?: (segment: Segment) => React.ReactNode;
  /** Optional class name for active panel container. */
  panelClassName?: string;
}

const STATUS_TEXT: Record<SegmentStatus, string> = {
  pending: "pending",
  active: "active",
  completed: "completed",
  blocked: "blocked",
};

export const SegmentedProgressBar = React.forwardRef<
  HTMLDivElement,
  SegmentedProgressBarProps
>(
  (
    {
      className,
      segments,
      variant = "progress",
      size,
      fullWidth,
      ariaLabel = "Workflow progress",
      showLabels = false,
      showGlobalAction = false,
      globalAction,
      renderSegmentAction,
      interactive = false,
      onSegmentChange,
      showStepControls = false,
      previousLabel = "Previous",
      nextLabel = "Next",
      renderActivePanel,
      panelClassName,
      ...props
    },
    ref
  ) => {
    const activeIndex = segments.findIndex(
      (segment) => segment.status === "active"
    );
    const activeSegment =
      activeIndex >= 0 ? segments[activeIndex] : undefined;
    const prevSegment =
      activeIndex > 0 ? segments[activeIndex - 1] : undefined;
    const nextSegment =
      activeIndex >= 0 && activeIndex < segments.length - 1
        ? segments[activeIndex + 1]
        : undefined;

    const isSegmentInteractive = interactive && Boolean(onSegmentChange);

    const canGoPrevious =
      Boolean(prevSegment) && isSegmentInteractive;
    const canGoNext =
      Boolean(nextSegment) &&
      isSegmentInteractive &&
      !(
        variant === "progress" &&
        nextSegment?.status === "blocked"
      );

    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        data-slot="segmented-progress-root"
        {...props}
      >
        <div
          role="list"
          aria-label={ariaLabel}
          className={cn(
            segmentedProgressBarRootVariants({
              size,
              fullWidth,
            })
          )}
        >
          {segments.map((segment) => (
            <button
              key={segment.id}
              role="listitem"
              type="button"
              data-slot="segmented-progress-item"
              data-segment-id={segment.id}
              data-status={segment.status}
              data-optional={segment.isOptional ? "true" : "false"}
              aria-current={
                segment.status === "active" ? "step" : undefined
              }
              aria-label={
                segment.label
                  ? `${segment.label}: ${STATUS_TEXT[segment.status]}`
                  : STATUS_TEXT[segment.status]
              }
              disabled={
                !isSegmentInteractive ||
                (variant === "progress" &&
                  segment.status === "blocked")
              }
              onClick={() => {
                if (!onSegmentChange) return;
                const index = segments.findIndex(
                  (s) => s.id === segment.id
                );
                if (index < 0) return;
                onSegmentChange(segment, index);
              }}
              className={cn(
                segmentedProgressBarSegmentVariants({
                  variant,
                  status: segment.status,
                  interactive: isSegmentInteractive,
                })
              )}
            />
          ))}
        </div>

        {showLabels ? (
          <div className="mt-2 flex items-start gap-2">
            {segments.map((segment) => (
              <div
                key={`${segment.id}-label`}
                data-slot="segmented-progress-label"
                data-status={segment.status}
                className="min-w-0 flex-1 text-xs"
              >
                <span
                  className={cn(
                    "truncate",
                    segment.status === "active" &&
                      "text-[var(--atom-primary)] font-medium",
                    segment.status === "completed" &&
                      "text-[var(--atom-success)]",
                    segment.status === "pending" &&
                      "text-[var(--atom-text-muted)]",
                    segment.status === "blocked" &&
                      "text-[var(--atom-error)]"
                  )}
                >
                  {segment.label ?? segment.id}
                  {segment.isOptional ? " (Optional)" : ""}
                </span>
                {segment.status === "active" &&
                renderSegmentAction ? (
                  <div className="mt-1">
                    {renderSegmentAction(segment)}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {showStepControls ? (
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (!prevSegment || !onSegmentChange) return;
                onSegmentChange(prevSegment, activeIndex - 1);
              }}
              disabled={!canGoPrevious}
              className="inline-flex items-center rounded-[var(--atom-radius-1)] border border-[var(--atom-border)] px-3 py-1.5 text-sm text-[var(--atom-text-primary)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {previousLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                if (!nextSegment || !onSegmentChange) return;
                onSegmentChange(nextSegment, activeIndex + 1);
              }}
              disabled={!canGoNext}
              className="inline-flex items-center rounded-[var(--atom-radius-1)] border border-[var(--atom-border)] px-3 py-1.5 text-sm text-[var(--atom-text-primary)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {nextLabel}
            </button>
          </div>
        ) : null}

        {renderActivePanel && activeSegment ? (
          <div
            data-slot="segmented-progress-panel"
            className={cn(
              "mt-4 rounded-[var(--atom-radius-2)] border border-[var(--atom-border)] bg-[var(--atom-surface)] p-4",
              panelClassName
            )}
          >
            {renderActivePanel(activeSegment)}
          </div>
        ) : null}

        {showGlobalAction && globalAction ? (
          <div
            data-slot="segmented-progress-global-action"
            className="mt-3"
          >
            {globalAction}
          </div>
        ) : null}
      </div>
    );
  }
);

SegmentedProgressBar.displayName = "SegmentedProgressBar";
