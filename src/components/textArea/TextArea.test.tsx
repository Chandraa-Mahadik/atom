import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { TextArea, type TextAreaProps } from "./TextArea";

describe("TextArea", () => { // ✅ Single top-level describe
  beforeEach(() => {
    // RTL auto-cleanup handles DOM
  });

  const renderTextarea = (props: Partial<TextAreaProps> = {}) => {
    return render(<TextArea data-testid="textArea" {...props} />);
  };

  const getTextarea = () => screen.getByTestId("textArea"); // ✅ Remove type cast

  it("renders TextArea with correct data-slot", () => {
    renderTextarea({ placeholder: "Enter text..." });
    expect(getTextarea()).toBeInTheDocument();
    expect(getTextarea()).toHaveAttribute("data-slot", "textArea");
  });

  it("applies default variants (variant=default, size=md)", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).toHaveClass("min-h-16");
    expect(textArea).toHaveClass("px-3");
    expect(textArea).toHaveClass("py-2");
    expect(textArea).toHaveClass("text-sm");
  });

  it("applies size sm", () => {
    renderTextarea({ size: "sm" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("min-h-10");
    expect(textArea).toHaveClass("px-2");
    expect(textArea).toHaveClass("py-1");
    expect(textArea).toHaveClass("text-xs");
    expect(textArea).toHaveClass("w-64");
  });

  it("applies size md (default)", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).toHaveClass("min-h-16");
    expect(textArea).toHaveClass("w-80");
  });

  it("applies size lg", () => {
    renderTextarea({ size: "lg" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("min-h-24");
    expect(textArea).toHaveClass("px-4");
    expect(textArea).toHaveClass("py-3");
    expect(textArea).toHaveClass("text-base");
    expect(textArea).toHaveClass("w-96");
  });

  it("applies variant default", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).not.toHaveClass("bg-transparent");
  });

  it("applies variant outline", () => {
    renderTextarea({ variant: "outline" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("bg-transparent");
  });

  it("applies variant subtle", () => {
    renderTextarea({ variant: "subtle" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass(/bg-input-background\/60/);
  });

  it("handles value and onChange", () => {
    const handleChange = vi.fn();
    renderTextarea({ value: "", onChange: handleChange });
    
    const textArea = getTextarea();
    fireEvent.change(textArea, { target: { value: "Hello World" } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textArea).toHaveValue("Hello World");
  });

  it("handles controlled state", () => {
    const { rerender } = renderTextarea({ value: "" });
    expect(getTextarea()).toHaveValue("");

    rerender(<TextArea data-testid="textArea" value="Updated" />);
    expect(getTextarea()).toHaveValue("Updated");
  });

  it("handles disabled state", () => {
    renderTextarea({ disabled: true });
    const textArea = getTextarea();
    expect(textArea).toBeDisabled();
    expect(textArea).toHaveClass("disabled:cursor-not-allowed");
    expect(textArea).toHaveClass("disabled:opacity-50");
  });

  it("handles readOnly state", () => {
    renderTextarea({ readOnly: true });
    expect(getTextarea()).toHaveAttribute("readonly");
  });

  it("applies invalid state styling", () => {
    renderTextarea({ "aria-invalid": true });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("aria-invalid:border-destructive");
    expect(textArea).toHaveClass(/aria-invalid:ring-destructive/);
  });

  it("forwards ref", () => {
    const ref: React.RefObject<HTMLTextAreaElement | null> = React.createRef();
     render(<TextArea ref={ref} data-testid="textArea" />);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("merges custom className", () => {
    renderTextarea({ className: "shadow-lg ring-2 ring-blue-500" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("shadow-lg");
    expect(textArea).toHaveClass("ring-2");
    expect(textArea).toHaveClass("ring-blue-500");
  });

  it("forwards HTML attributes", () => {
    renderTextarea({ 
      id: "test-TextArea",
      name: "description",
      rows: 5,
      maxLength: 500,
      required: true,
      title: "Description field"
    });
    const textArea = getTextarea();
    expect(textArea).toHaveAttribute("id", "test-TextArea");
    expect(textArea).toHaveAttribute("name", "description");
    expect(textArea).toHaveAttribute("rows", "5");
    expect(textArea).toHaveAttribute("maxlength", "500");
    expect(textArea).toHaveAttribute("required");
  });

  it("uses provided placeholder", () => {
    renderTextarea({ placeholder: "Custom placeholder" });
    expect(getTextarea()).toHaveAttribute("placeholder", "Custom placeholder");
  });

  it("uses default placeholder when none provided", () => {
    renderTextarea({});
    expect(getTextarea()).toHaveAttribute("placeholder", " ");
  });

  it("applies hover styling", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).toHaveClass(/hover:bg-color-mix/);
    expect(textArea).toHaveClass(/hover:border-color-mix/);
  });

  it("applies filled state styling", () => {
    renderTextarea({ value: "Filled content" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass(/placeholder-shown:border-atom-badge-archived-border/);
  });

  it("applies dark mode styling", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).toHaveClass("dark:bg-input/30");
  });

  it("applies transition styling", () => {
    renderTextarea({});
    const textArea = getTextarea();
    expect(textArea).toHaveClass("transition-[background-color,border-color,box-shadow,color]");
  });

  it("combines all variants", () => {
    renderTextarea({ variant: "outline", size: "lg", className: "mb-4" });
    const textArea = getTextarea();
    expect(textArea).toHaveClass("bg-transparent");
    expect(textArea).toHaveClass("min-h-24");
    expect(textArea).toHaveClass("mb-4");
  });

  it("handles empty value gracefully", () => {
    renderTextarea({ value: "" });
    expect(getTextarea()).toHaveValue("");
  });
})
