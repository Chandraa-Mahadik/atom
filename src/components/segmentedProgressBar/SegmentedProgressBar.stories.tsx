import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";
import { SegmentedProgressBar, type Segment } from "./SegmentedProgressBar";

const baseSegments: Segment[] = [
  { id: "upload", label: "Upload", status: "completed" },
  { id: "mapping", label: "Mapping", status: "active" },
  { id: "validation", label: "Validation", status: "pending" },
  { id: "publish", label: "Publish", status: "pending" },
];

const blockedSegments: Segment[] = [
  { id: "upload", label: "Upload", status: "completed" },
  { id: "mapping", label: "Mapping", status: "completed" },
  { id: "validation", label: "Validation", status: "blocked" },
  { id: "publish", label: "Publish", status: "pending" },
];

const allRequiredCompletedSegments: Segment[] = [
  { id: "upload", label: "Upload", status: "completed" },
  { id: "mapping", label: "Mapping", status: "completed" },
  {
    id: "review",
    label: "Review",
    status: "completed",
    isOptional: true,
  },
  { id: "publish", label: "Publish", status: "completed" },
];

const meta: Meta<typeof SegmentedProgressBar> = {
  title: "Components/SegmentedProgressBar",
  component: SegmentedProgressBar,
  args: {
    segments: baseSegments,
    size: "md",
    fullWidth: true,
    showLabels: true,
    ariaLabel: "Workflow progress",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    showLabels: { control: "boolean" },
    showGlobalAction: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedProgressBar>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <SegmentedProgressBar
        {...args}
        renderSegmentAction={(segment) => (
          <button type="button" style={{ fontSize: 12 }}>
            Fix {segment.label ?? segment.id}
          </button>
        )}
      />
    </div>
  ),
};

export const WithBlockedStep: Story = {
  args: {
    segments: blockedSegments,
    showGlobalAction: false,
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <SegmentedProgressBar {...args} />
    </div>
  ),
};

export const GlobalActionVisibleWhenComplete: Story = {
  args: {
    segments: allRequiredCompletedSegments,
    showGlobalAction: true,
    globalAction: (
      <button type="button">
        Continue
      </button>
    ),
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <SegmentedProgressBar {...args} />
    </div>
  ),
};

export const ForwardBackwardNavigation: Story = {
  args: {
    showLabels: true,
    interactive: true,
    showStepControls: true,
  },
  render: (args) => {
    const [activeId, setActiveId] = useState("mapping");
    const segments = useMemo(
      () =>
        baseSegments.map((segment) => ({
          ...segment,
          status:
            segment.id === activeId
              ? "active"
              : segment.id === "upload"
                ? "completed"
                : "pending",
        })) as Segment[],
      [activeId]
    );

    return (
      <div style={{ width: 420 }}>
        <SegmentedProgressBar
          {...args}
          segments={segments}
          onSegmentChange={(segment) => setActiveId(segment.id)}
        />
      </div>
    );
  },
};

export const SegmentedPanelsNoLongScroll: Story = {
  args: {
    variant: "navigation",
    interactive: true,
    showLabels: true,
    showStepControls: true,
  },
  render: (args) => {
    const [activeId, setActiveId] = useState("profile");
    const panelSegments: Segment[] = [
      {
        id: "profile",
        label: "Profile",
        status: activeId === "profile" ? "active" : "completed",
      },
      {
        id: "billing",
        label: "Billing",
        status: activeId === "billing" ? "active" : "pending",
      },
      {
        id: "notifications",
        label: "Notifications",
        status:
          activeId === "notifications" ? "active" : "pending",
      },
      {
        id: "security",
        label: "Security",
        status: activeId === "security" ? "active" : "pending",
      },
    ];

    return (
      <div style={{ width: 520 }}>
        <SegmentedProgressBar
          {...args}
          segments={panelSegments}
          ariaLabel="Settings sections"
          onSegmentChange={(segment) => setActiveId(segment.id)}
          renderActivePanel={(segment) => (
            <div>
              <h3 style={{ marginTop: 0 }}>{segment.label}</h3>
              <p style={{ marginBottom: 0 }}>
                Only the active segment content is shown here,
                so users don&apos;t need to scroll through all
                sections.
              </p>
            </div>
          )}
        />
      </div>
    );
  },
};
