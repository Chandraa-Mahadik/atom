import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "./Calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },
    navButtonVariant: {
      control: "select",
      options: ["iconSquareGhost", "iconGhost", "ghost", "secondary", "primary"],
    },
    showOutsideDays: { control: "boolean" },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledSingle(args: React.ComponentProps<typeof Calendar>) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar {...args} mode="single" selected={date} onSelect={setDate} />
      <div className="text-xs opacity-70">
        Selected: {date ? date.toLocaleDateString() : "none"}
      </div>
    </div>
  );
}

export const Default: Story = {
  render: (args) => <ControlledSingle {...args} />,
  args: {
    captionLayout: "dropdown",
    navButtonVariant: "iconSquareGhost",
    showOutsideDays: true,
  },
};

export const LabelLayout: Story = {
  render: (args) => <ControlledSingle {...args} />,
  args: {
    captionLayout: "label",
    navButtonVariant: "iconSquareGhost",
    showOutsideDays: true,
  },
};

export const RangePicker: Story = {
  render: (args) => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    });

    return (
      <div className="flex flex-col items-center gap-3">
        <Calendar {...args} mode="range" selected={range} onSelect={setRange} />
        <div className="text-xs opacity-70 text-center">
          From: {range?.from?.toLocaleDateString() || "none"}
          <br />
          To: {range?.to?.toLocaleDateString() || "none"}
        </div>
      </div>
    );
  },
  args: {
    captionLayout: "dropdown",
    navButtonVariant: "iconSquareGhost",
    showOutsideDays: true,
  },
};

export const NoOutsideDays: Story = {
  render: (args) => <ControlledSingle {...args} />,
  args: {
    captionLayout: "dropdown",
    navButtonVariant: "iconSquareGhost",
    showOutsideDays: false,
  },
};

export const MultipleMonths: Story = {
  render: (args) => <ControlledSingle {...args} />,
  args: {
    captionLayout: "dropdown",
    navButtonVariant: "iconSquareGhost",
    showOutsideDays: true,
    numberOfMonths: 2,
  },
};
