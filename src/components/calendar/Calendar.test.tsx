import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Calendar } from "./Calendar";

describe("Calendar", () => {
  it("renders and exposes data-slot calendar root", () => {
    const { container } = render(<Calendar />);
    expect(screen.getByRole("application")).toBeInTheDocument();

    const root = container.querySelector('[data-slot="calendar"]');
    expect(root).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    const { container } = render(<Calendar className="my-calendar" />);
    const root = container.querySelector('[data-slot="calendar"]');
    expect(root).toHaveClass("my-calendar");
  });

  it("renders dropdown caption by default (comboboxes exist)", () => {
    render(<Calendar />);
    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBeGreaterThan(0);
  });

  it("renders label caption when captionLayout='label' (no combobox)", () => {
    render(<Calendar captionLayout="label" />);
    expect(screen.queryAllByRole("combobox").length).toBe(0);
  });

  it("day buttons include data-day attribute for selection hooks", () => {
    render(<Calendar />);
    const dayButtons = screen
      .getAllByRole("button")
      .filter((b) => b.hasAttribute("data-day"));

    expect(dayButtons.length).toBeGreaterThan(0);
    expect(dayButtons[0]).toHaveAttribute("data-day");
  });

  it("marks selected single day with data-selected-single", () => {
    const selected = new Date(2026, 0, 15);
    render(<Calendar mode="single" selected={selected} defaultMonth={selected} />);

    const selectedBtn = screen
      .getAllByRole("button")
      .find((b) => b.getAttribute("data-selected-single") === "true");

    expect(selectedBtn).toBeTruthy();
  });
});
