import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("applies icon square sizing (md)", () => {
    render(<Button variant="icon" size="md" aria-label="Icon" />);
    const btn = screen.getByRole("button", { name: "Icon" });
    expect(btn.className).toContain("w-10");
    expect(btn.className).toContain("h-10");
  });

  it("creates a ripple span on pointer down (md)", async () => {
    render(<Button size="md">Ripple</Button>);
    const btn = screen.getByText("Ripple") as HTMLButtonElement;

    const origGetRect = btn.getBoundingClientRect;
    btn.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 40, height: 40 } as DOMRect);

    fireEvent.pointerDown(btn, { pointerType: "mouse", button: 0, clientX: 20, clientY: 20 });

    const ripple = (btn as HTMLElement).querySelector(".atom-ripple");
    expect(ripple).toBeTruthy();

    btn.getBoundingClientRect = origGetRect;
  });

  it("keyboard Enter triggers centered ripple", async () => {
    render(<Button size="md">Keyboard</Button>);
    const btn = screen.getByText("Keyboard") as HTMLButtonElement;

    const origGetRect = btn.getBoundingClientRect;
    btn.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 40, height: 40 } as DOMRect);

    await userEvent.keyboard("{Enter}");
    const ripple = (btn as HTMLElement).querySelector(".atom-ripple");
    expect(ripple).toBeTruthy();

    btn.getBoundingClientRect = origGetRect;
  });
});
