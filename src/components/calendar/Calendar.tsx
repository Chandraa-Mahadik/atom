import * as React from "react";
import type { DayButtonProps } from "react-day-picker";
import {
  DayPicker,
  getDefaultClassNames,
  type DayPickerProps,
} from "react-day-picker";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../lib/cn";
import { Button, type ButtonVariant } from "../button";

export type CalendarProps = DayPickerProps & {
  navButtonVariant?: ButtonVariant;
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "dropdown",
  formatters,
  components,
  navButtonVariant = "iconSquareGhost",
  ...props
}: CalendarProps) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      className={cn(
        "p-3 rounded-md border border-[var(--atom-border)]",
        "bg-[var(--atom-bg)] text-[var(--atom-text)]",
        "shadow-[var(--atom-shadow-sm)] w-fit",
        className
      )}
      classNames={{
        root: cn("w-fit", defaults.root),

        months: cn("relative flex flex-col gap-4 md:flex-row", defaults.months),
        month: cn("flex w-full flex-col gap-4", defaults.month),

        nav: cn(
          "absolute inset-x-0 top-0 flex items-center justify-between px-1",
          defaults.nav
        ),

        button_previous: cn(
            // Base button look
            "inline-flex items-center justify-center",
            "h-7 w-7 rounded-md",

            // Visual surface
            "bg-[var(--atom-card-bg)]",
            "border border-[color-mix(in_srgb,var(--atom-primary)_15%,transparent)]",

            // Interaction
            "opacity-60 hover:opacity-100",
            "transition-opacity",

            // Focus & accessibility
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-primary)] focus-visible:ring-offset-1",

            // Cursor
            "cursor-pointer",

            defaults.button_previous
        ),

        button_next: cn(
            "inline-flex items-center justify-center",
            "h-7 w-7 rounded-md",

            "bg-[var(--atom-card-bg)]",
            "border border-[color-mix(in_srgb,var(--atom-primary)_15%,transparent)]",

            "opacity-60 hover:opacity-100",
            "transition-opacity",

            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-primary)] focus-visible:ring-offset-1",

            "cursor-pointer",

            defaults.button_next
        ),

        month_caption: cn(
          "flex h-7 w-full items-center justify-center gap-2",
          defaults.month_caption
        ),

        dropdowns: cn(
          "flex items-center gap-2 text-sm font-medium",
          defaults.dropdowns
        ),

        dropdown_root: cn(
          "relative flex items-center rounded-md border border-[var(--atom-border)]",
          "bg-[var(--atom-bg)] px-2 py-1 shadow-xs",
          defaults.dropdown_root
        ),

        dropdown: cn(
          "absolute inset-0 opacity-0 cursor-pointer",
          defaults.dropdown
        ),

        // caption_label: cn(
        //   "flex items-center gap-2 select-none text-md font-medium",
        //   defaults.caption_label
        // ),

        caption_label: cn(
          "inline-flex items-center gap-2 select-none text-md font-medium",
          defaults.caption_label
        ),

        month_grid: cn("w-full border-collapse", defaults.month_grid),
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn(
          "flex-1 select-none text-[0.75rem] font-normal opacity-60 text-center",
          defaults.weekday
        ),

        week: cn("mt-2 flex w-full", defaults.week),
        // day: cn(
        //   "relative aspect-square w-8 h-8 p-0 text-center",
        //   defaults.day
        // ),

        day: cn(
          "relative aspect-square w-8 h-8 p-0 text-center",

        //   // Today: outline only, no fill
        //   "data-[today=true]:bg-transparent",
        //   "data-[today=true]:hover:bg-[color-mix(in_srgb,var(--atom-border)_70%,transparent)]",

        defaults.day
        ),

        outside: cn("opacity-40", defaults.outside),
        disabled: cn("opacity-30 pointer-events-none", defaults.disabled),
        hidden: cn("invisible", defaults.hidden),

        range_start: cn("rounded-l-md", defaults.range_start),
        range_end: cn("rounded-r-md", defaults.range_end),
        range_middle: cn("rounded-none", defaults.range_middle),

        today: cn(
        //   "relative",
          "rounded-md",
          "bg-[var(--atom-primary-100)]",
        //   "bg-[var(--atom-theme-surface-tertiary)]",
          defaults.today
        ),

        // today: cn(
        //   "rounded-md",
        //   "bg-[color-mix(in_srgb,var(--atom-border)_35%,transparent)]",
        //   "ring-1 ring-[var(--atom-primary)] ring-offset-1 ring-offset-[var(--atom-bg)]",
        //   defaults.today
        // ),

        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...p }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...p}
          />
        ),

        Chevron: ({ className, orientation, ...p }) => {
          if (orientation === "left")
            return <ChevronLeft className={cn("size-4", className)} {...p} />;
          if (orientation === "right")
            return <ChevronRight className={cn("size-4", className)} {...p} />;
          return <ChevronDown className={cn("size-4", className)} {...p} />;
        },

        DayButton: (p) => <CalendarDayButton {...p} />,

        WeekNumber: ({ children, ...p }) => (
          <td {...p}>
            <div className="flex items-center justify-center text-xs opacity-60">
              {children}
            </div>
          </td>
        ),

        ...components,
      }}
      {...props}
    />
  );

  function CalendarDayButton({
    className: dayBtnClassName,
    day,
    modifiers,
    ...dayBtnProps
  }: DayButtonProps) {
    const ref = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
      if (modifiers.focused) ref.current?.focus();
    }, [modifiers.focused]);

    const isSingleSelected =
      !!modifiers.selected &&
      !modifiers.range_start &&
      !modifiers.range_end &&
      !modifiers.range_middle;

    return (
      <Button
        ref={ref}
        variant={navButtonVariant}
        size="sm"
        data-day={day.date.toLocaleDateString()}
        data-selected-single={isSingleSelected || undefined}
        data-range-start={modifiers.range_start || undefined}
        data-range-end={modifiers.range_end || undefined}
        data-range-middle={modifiers.range_middle || undefined}
        disabled={modifiers.disabled}
        className={cn(
          "!px-0 !py-0 w-full h-full",

          // Selected single
          "data-[selected-single=true]:bg-[var(--atom-primary)]",
          "data-[selected-single=true]:!text-[var(--atom-primary-contrast)]",

          // Range
          "data-[range-start=true]:bg-[var(--atom-primary)] data-[range-start=true]:!text-[var(--atom-primary-contrast)]",
          "data-[range-end=true]:bg-[var(--atom-primary)] data-[range-end=true]:!text-[var(--atom-primary-contrast)]",
          "data-[range-middle=true]:bg-[color-mix(in_srgb,var(--atom-primary)_18%,transparent)]",

          // Hover
          "hover:bg-[color-mix(in_srgb,var(--atom-border)_70%,transparent)]",

          dayBtnClassName,
          className
        )}
        {...dayBtnProps}
      />
    );
  }
}
