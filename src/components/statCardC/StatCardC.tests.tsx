// src/components/StatCardC.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { StatCardC } from "./StatCardC";
import { cn } from "../../lib/cn";

describe("StatCardC", () => {
type StatCardCAllProps =
  Omit<React.ComponentPropsWithRef<typeof StatCardC>, "label" | "value"> & {
    label: string;
    value: React.ReactNode;
  };

  const renderStatCardC = (props: StatCardCAllProps) => {
    return render(
      <StatCardC data-testid="stat-card-c" {...props} />
    );
  };

  const getStatCardC = () => screen.getByTestId("stat-card-priority") as HTMLDivElement;
  const getPill = () => screen.getByTestId("priority-pill");

  it("renders basic StatCardC with required props", () => {
    renderStatCardC({ label: "High Priority", value: "6" });
    expect(getStatCardC()).toBeInTheDocument();
    expect(screen.getByText("High Priority")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("applies default variants", () => {
    renderStatCardC({ label: "Medium Priority", value: "12" });
    const card = getStatCardC();
    expect(card).toHaveClass("flex");
    expect(card).toHaveClass("items-center");
    expect(card).toHaveClass("justify-between");
    expect(card).toHaveClass("h-12"); // md height
    expect(card).toHaveClass("shadow-sm"); // elevated
  });

  it("applies variant neutral (default)", () => {
    renderStatCardC({ label: "Neutral", value: "5" });
    const card = getStatCardC();
    expect(card).toHaveClass("text-[var(--atom-text)]");
  });

  it("applies variant primary", () => {
    renderStatCardC({ variant: "primary", label: "Primary", value: "10" });
    const card = getStatCardC();
    expect(card).toHaveClass("text-[var(--atom-primary)]");
  });

  it("applies variant high", () => {
    renderStatCardC({ variant: "high", label: "High", value: "8" });
    const card = getStatCardC();
    expect(card).toHaveClass("text-[var(--atom-error)]");
  });

  it("applies variant medium", () => {
    renderStatCardC({ variant: "medium", label: "Medium", value: "15" });
    const card = getStatCardC();
    expect(card).toHaveClass("text-[var(--atom-warning)]");
  });

  it("applies variant low", () => {
    renderStatCardC({ variant: "low", label: "Low", value: "22" });
    const card = getStatCardC();
    expect(card).toHaveClass("text-[var(--atom-success)]");
  });

  it("applies size sm", () => {
    renderStatCardC({ size: "sm", label: "Small", value: "3" });
    const card = getStatCardC();
    expect(card).toHaveClass("h-10");
    expect(card).toHaveClass("text-sm");
    expect(card).toHaveClass("gap-2");
    expect(card).toHaveClass("max-w-[320px]");
  });

  it("applies size md (default)", () => {
    renderStatCardC({ label: "Medium", value: "12" });
    const card = getStatCardC();
    expect(card).toHaveClass("h-12");
    expect(card).toHaveClass("gap-3");
    expect(card).toHaveClass("max-w-[400px]");
  });

  it("applies size lg", () => {
    renderStatCardC({ size: "lg", label: "Large", value: "25" });
    const card = getStatCardC();
    expect(card).toHaveClass("h-14");
    expect(card).toHaveClass("text-base");
    expect(card).toHaveClass("gap-4");
    expect(card).toHaveClass("max-w-[480px]");
  });

  it("applies appearance elevated (default)", () => {
    renderStatCardC({ label: "Elevated", value: "7" });
    const card = getStatCardC();
    expect(card).toHaveClass("shadow-sm");
  });

  it("applies appearance outlined", () => {
    renderStatCardC({ appearance: "outlined", label: "Outlined", value: "9" });
    const card = getStatCardC();
    expect(card).toHaveClass("shadow-none");
    expect(card).toHaveClass("bg-transparent");
  });

  it("applies appearance ghost", () => {
    renderStatCardC({ appearance: "ghost", label: "Ghost", value: "4" });
    const card = getStatCardC();
    expect(card).toHaveClass("shadow-none");
    expect(card).toHaveClass("bg-transparent");
    expect(card).toHaveClass("border-transparent");
  });

  it("applies appearance soft", () => {
    renderStatCardC({ appearance: "soft", label: "Soft", value: "11" });
    const card = getStatCardC();
    expect(card).toHaveClass("shadow-none");
    expect(card).toHaveClass("border-none");
  });

  it("renders pill with correct base styling", () => {
    renderStatCardC({ 
      label: "Test", 
      value: "6",
      // "data-testid": "priority-pill"
    });
    const pill = getPill();
    expect(pill).toHaveClass("inline-flex");
    expect(pill).toHaveClass("items-center");
    expect(pill).toHaveClass("rounded-md");
    expect(pill).toHaveClass("px-2.5");
    expect(pill).toHaveClass("text-xs");
    expect(pill).toHaveClass("font-medium");
  });

  it("applies high variant pill styling", () => {
    renderStatCardC({ 
      variant: "high", 
      label: "High Priority", 
      value: "6",
      // "data-testid": "priority-pill"
    });
    const pill = getPill();
    expect(pill).toHaveClass(/bg-color-mix.*atom-error/);
    expect(pill).toHaveClass(/text-atom-error/);
  });

  it("applies medium variant pill styling", () => {
    renderStatCardC({ 
      variant: "medium", 
      label: "Medium Priority", 
      value: "12",
      // "data-testid": "priority-pill"
    });
    const pill = getPill();
    expect(pill).toHaveClass(/bg-color-mix.*atom-warning/);
    expect(pill).toHaveClass(/text-atom-warning/);
  });

  it("applies low variant pill styling", () => {
    renderStatCardC({ 
      variant: "low", 
      label: "Low Priority", 
      value: "20",
      // "data-testid": "priority-pill"
    });
    const pill = getPill();
    expect(pill).toHaveClass(/bg-color-mix.*atom-success/);
    expect(pill).toHaveClass(/text-atom-success/);
  });

  it("applies neutral variant pill styling", () => {
    renderStatCardC({ 
      variant: "neutral", 
      label: "Neutral", 
      value: "5",
      // "data-testid": "priority-pill"
    });
    const pill = getPill();
    expect(pill).toHaveClass(/bg-color-mix.*atom-border/);
    expect(pill).toHaveClass(/text-atom-text-muted/);
  });

  it("renders pillIcon correctly", () => {
    const TestIcon = <span data-testid="pill-icon">📈</span>;
    renderStatCardC({ 
      label: "With Icon", 
      value: "15", 
      pillIcon: TestIcon 
    });
    expect(screen.getByTestId("pill-icon")).toBeInTheDocument();
    expect(screen.getByText("📈")).toBeInTheDocument();
  });

  it("applies pillIcon margin styling", () => {
    renderStatCardC({ 
      label: "Icon Test", 
      value: "10", 
      pillIcon: <span data-testid="icon">⬆️</span> 
    });
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("mr-1");
    expect(icon).toHaveClass("flex");
    expect(icon).toHaveClass("items-center");
  });

  it("handles ReactNode value", () => {
    const ComplexValue = <span data-testid="complex-value">1.2k</span>;
    renderStatCardC({ label: "Priority", value: ComplexValue });
    expect(screen.getByTestId("complex-value")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref: React.RefObject<HTMLDivElement | null> = React.createRef();
    renderStatCardC({ ref, label: "Ref Test", value: "42" });
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("merges custom className", () => {
    renderStatCardC({ 
      className: "hover:shadow-lg ring-1 ring-blue-200", 
      label: "Custom", 
      value: "8" 
    });
    const card = getStatCardC();
    expect(card).toHaveClass("hover:shadow-lg");
    expect(card).toHaveClass("ring-1");
  });

  it("forwards HTML attributes", () => {
    renderStatCardC({ 
      id: "priority-1",
      title: "Priority card",
      // "data-priority": "high",
      style: { marginBottom: "8px" },
      label: "High Priority",
      value: "6"
    });
    const card = getStatCardC();
    expect(card).toHaveAttribute("id", "priority-1");
    expect(card).toHaveAttribute("title", "Priority card");
    expect(card).toHaveStyle("margin-bottom: 8px");
  });

  it("renders with asChild=false (default div)", () => {
    renderStatCardC({ label: "Default", value: "42" });
    const card = getStatCardC();
    expect(card.tagName).toBe("DIV");
  });

  it("renders with asChild=true using Slot", () => {
    const TestLink = React.forwardRef<
      HTMLAnchorElement, 
      React.AnchorHTMLAttributes<HTMLAnchorElement>
    >(({ className, children, ...props }, ref) => (
      <a 
        ref={ref} 
        className={cn("test-link", className)} 
        href="/priority" 
        role="link" 
        {...props}
      >
        {children}
      </a>
    ));
    TestLink.displayName = "TestLink";

    render(
      <TestLink>
        <StatCardC asChild label="Clickable Priority" value="42" />
      </TestLink>
    );
    
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Clickable Priority");
    expect(link).toHaveTextContent("42");
    expect(link).toHaveAttribute("href", "/priority");
  });

  it("applies data-slot attribute", () => {
    renderStatCardC({ label: "Slot Test", value: "99" });
    const card = getStatCardC();
    expect(card).toHaveAttribute("data-slot", "stat-card-priority");
  });
});
