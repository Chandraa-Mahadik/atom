import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Press me</Button>);
    expect(screen.getByText("Press me")).toBeInTheDocument();
  });

  it("applies variant class (ghost)", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByText("Ghost");
    expect(btn.className).toContain("bg-[var(--atom-button-ghost-bg)]");
  });

  it("supports className override", () => {
    render(<Button className="rounded-xl">Override</Button>);
    const btn = screen.getByText("Override");
    expect(btn.className).toContain("rounded-xl");
  });

  it("applies secondary (outlined) variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByText("Secondary");
    expect(btn.className).toContain("border-[var(--atom-border)]");
    expect(btn.className).toContain("bg-transparent");
  });

  it("applies icon sizing for icon variant (md)", () => {
    render(<Button variant="icon" size="md" aria-label="Icon" />);
    const btn = screen.getByRole("button", { name: "Icon" });
    expect(btn.className).toContain("w-10");
    expect(btn.className).toContain("h-10");
  });

  it("creates a ripple span on pointer down (md)", () => {
    render(<Button size="md">Ripple</Button>);
    const btn = screen.getByText("Ripple") as HTMLButtonElement;

    const origGetRect = btn.getBoundingClientRect;
    btn.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 40, height: 40 } as DOMRect);

    fireEvent.pointerDown(btn, {
      pointerType: "mouse",
      button: 0,
      clientX: 20,
      clientY: 20,
    });

    const ripple = (btn as HTMLElement).querySelector(".atom-ripple");
    expect(ripple).toBeTruthy();

    btn.getBoundingClientRect = origGetRect;
  });

  it("defaults to type='button' when not specified", () => {
    render(<Button>Default type</Button>);
    const btn = screen.getByRole("button", { name: "Default type" });
    expect(btn).toHaveAttribute("type", "button");
  });

  it("respects explicit type='submit'", () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole("button", { name: "Submit" });
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("asChild + disabled uses aria-disabled and data-disabled without disabled attr", () => {
    render(
      <Button asChild disabled>
        <a href="#settings">Settings</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: "Settings" });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("data-disabled");
    expect(link).not.toHaveAttribute("disabled");
  });
});
