import * as React from "react";
import { cn } from "../../lib/cn";
import { checkboxVariants, type CheckboxSize } from "./checkboxVariants";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode;
  size?: CheckboxSize;
  indeterminate?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      size,
      id,
      label,
      indeterminate = false,
      wrapperClassName,
      labelClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const internalRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => internalRef.current!, []);

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <div className={cn("inline-flex items-center gap-2", wrapperClassName)}>
        <input
          ref={internalRef}
          id={inputId}
          type="checkbox"
          data-slot="checkbox"
          className={cn(checkboxVariants({ size }), className)}
          disabled={disabled}
          {...props}
        />

        {label != null && (
          <label
            htmlFor={inputId}
            className={cn(
              "select-none text-sm font-medium",
              "text-[var(--atom-text)]",
              disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
