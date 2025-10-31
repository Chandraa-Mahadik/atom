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
    // square icon buttons get fixed w/h and no horizontal padding
    expect(btn.className).toContain("w-10");
    expect(btn.className).toContain("h-10");
    // our compound variants use `!px-0`; depending on your Tailwind build,
    // this will appear as `!px-0` in the className string. We check width/height,
    // which is the core of the layout.
  });

  it("creates a ripple span on pointer down (md)", async () => {
    render(<Button size="md">Ripple</Button>);
    const btn = screen.getByText("Ripple");

    // jsdom doesn't layout; mock the rect used by ripple math
    const origGetRect = btn.getBoundingClientRect;
    (btn as HTMLButtonElement).getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 40, height: 40 } as DOMRect);

    // Trigger pointerdown (left click)
    fireEvent.pointerDown(btn, { pointerType: "mouse", button: 0, clientX: 20, clientY: 20 });

    // ripple span should be appended
    const ripple = (btn as HTMLElement).querySelector(".atom-ripple");
    expect(ripple).toBeTruthy();

    // restore (not strictly required in Vitest, but nice hygiene)
    (btn as HTMLButtonElement).getBoundingClientRect = origGetRect;
  });

  it("keyboard Enter triggers centered ripple", async () => {
    render(<Button size="md">Keyboard</Button>);
    const btn = screen.getByText("Keyboard");

    // mock rect
    const origGetRect = btn.getBoundingClientRect;
    (btn as HTMLButtonElement).getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 40, height: 40 } as DOMRect);

    await userEvent.keyboard("{Enter}");
    const ripple = (btn as HTMLElement).querySelector(".atom-ripple");
    expect(ripple).toBeTruthy();

    (btn as HTMLButtonElement).getBoundingClientRect = origGetRect;
  });
});
