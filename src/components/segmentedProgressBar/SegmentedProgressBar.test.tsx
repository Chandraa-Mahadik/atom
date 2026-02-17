import { describe, expect, it, vi } from "vitest";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import {
  SegmentedProgressBar,
  type Segment,
} from "./SegmentedProgressBar";

const segments: Segment[] = [
  { id: "step-1", label: "Step 1", status: "completed" },
  { id: "step-2", label: "Step 2", status: "active" },
  { id: "step-3", label: "Step 3", status: "pending" },
  { id: "step-4", label: "Step 4", status: "blocked" },
];

describe("SegmentedProgressBar", () => {
  it("renders all segments from parent-provided state", () => {
    render(<SegmentedProgressBar segments={segments} />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveAttribute("data-status", "completed");
    expect(items[1]).toHaveAttribute("data-status", "active");
    expect(items[2]).toHaveAttribute("data-status", "pending");
    expect(items[3]).toHaveAttribute("data-status", "blocked");
  });

  it("marks only active segment as current step", () => {
    render(<SegmentedProgressBar segments={segments} />);

    expect(screen.getByLabelText("Step 2: active")).toHaveAttribute(
      "aria-current",
      "step"
    );
    expect(screen.getByLabelText("Step 1: completed")).not.toHaveAttribute(
      "aria-current"
    );
  });

  it("renders segment action only for active segment", () => {
    render(
      <SegmentedProgressBar
        segments={segments}
        showLabels
        renderSegmentAction={(segment) => (
          <button type="button">Action for {segment.id}</button>
        )}
      />
    );

    expect(
      screen.getByRole("button", { name: "Action for step-2" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Action for step-1" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Action for step-4" })
    ).not.toBeInTheDocument();
  });

  it("renders global action only when parent enables it", () => {
    const { rerender } = render(
      <SegmentedProgressBar
        segments={segments}
        showGlobalAction={false}
        globalAction={<button type="button">Continue</button>}
      />
    );

    expect(
      screen.queryByRole("button", { name: "Continue" })
    ).not.toBeInTheDocument();

    rerender(
      <SegmentedProgressBar
        segments={segments}
        showGlobalAction
        globalAction={<button type="button">Continue</button>}
      />
    );

    expect(
      screen.getByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("allows moving between segments via previous/next controls", () => {
    const onSegmentChange = vi.fn();
    render(
      <SegmentedProgressBar
        segments={segments}
        interactive
        onSegmentChange={onSegmentChange}
        showStepControls
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    expect(onSegmentChange).toHaveBeenCalledWith(
      segments[0],
      0
    );

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(onSegmentChange).toHaveBeenCalledWith(
      segments[2],
      2
    );
  });

  it("disables next when next segment is blocked in progress mode", () => {
    const blockedNext: Segment[] = [
      { id: "a", label: "A", status: "completed" },
      { id: "b", label: "B", status: "active" },
      { id: "c", label: "C", status: "blocked" },
    ];

    render(
      <SegmentedProgressBar
        segments={blockedNext}
        interactive
        onSegmentChange={() => {}}
        showStepControls
      />
    );

    expect(
      screen.getByRole("button", { name: "Next" })
    ).toBeDisabled();
  });

  it("renders active panel only for active segment", () => {
    render(
      <SegmentedProgressBar
        segments={segments}
        renderActivePanel={(segment) => (
          <div>Panel for {segment.id}</div>
        )}
      />
    );

    expect(
      screen.getByText("Panel for step-2")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Panel for step-1")
    ).not.toBeInTheDocument();
  });
});
