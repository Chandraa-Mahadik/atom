import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

// Simple inline SVGs for icon slots (avoid build/plugin differences)
const LeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
  </svg>
);
const RightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" />
  </svg>
);

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Type here…" />);
    const inp = screen.getByPlaceholderText("Type here…");
    expect(inp).toBeInTheDocument();
  });

  it("applies size variant classes", () => {
    const { rerender } = render(<Input size="sm" placeholder="sm" />);
    let inp = screen.getByPlaceholderText("sm");
    expect(inp.className).toContain("h-9"); // sm height

    rerender(<Input size="md" placeholder="md" />);
    inp = screen.getByPlaceholderText("md");
    expect(inp.className).toContain("h-10");

    rerender(<Input size="lg" placeholder="lg" />);
    inp = screen.getByPlaceholderText("lg");
    expect(inp.className).toContain("h-11");
  });

  it("adds padding when left/right icons provided", () => {
    render(<Input placeholder="icons" leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />);
    const inp = screen.getByPlaceholderText("icons");
    // hasLeft → pl-9, hasRight → pr-9 (from Input.tsx variants)
    expect(inp.className).toContain("pl-9");
    expect(inp.className).toContain("pr-9");
  });

  it("sets invalid tone and aria-invalid when errorText provided", () => {
    render(<Input placeholder="err" errorText="This field is required" />);
    const inp = screen.getByPlaceholderText("err");
    expect(inp).toHaveAttribute("aria-invalid", "true");
    // The class with error border var should be present
    expect(inp.className).toContain("border-[var(--atom-error)]");
    // Error text should be rendered and referenced via aria-describedby
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    const describedBy = inp.getAttribute("aria-describedby") || "";
    // It should include the error id suffix `__err`
    expect(describedBy).toMatch(/__err/);
  });

  it("renders hint and wires aria-describedby", () => {
    render(<Input placeholder="hinted" hint="Helper text" />);
    const inp = screen.getByPlaceholderText("hinted");
    expect(screen.getByText("Helper text")).toBeInTheDocument();
    const describedBy = inp.getAttribute("aria-describedby") || "";
    expect(describedBy).toMatch(/__hint/);
  });

  it("is controllable and accepts typing", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="type" />);
    const inp = screen.getByPlaceholderText("type") as HTMLInputElement;
    await user.type(inp, "hello");
    expect(inp.value).toBe("hello");
  });

  it("respects disabled", () => {
    render(<Input placeholder="disabled" disabled />);
    const inp = screen.getByPlaceholderText("disabled") as HTMLInputElement;
    expect(inp.disabled).toBe(true);
  });
});
