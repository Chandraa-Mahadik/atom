// src/components/TextArea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextArea, type TextAreaProps } from "./TextArea"

const meta: Meta<typeof TextArea> = {
  title: "Input/TextArea",
  component: TextArea,
  args: {
    placeholder: "Type something…",
  },
}
export default meta

type Story = StoryObj<typeof TextArea>

/* Basic stories */

export const Default: Story = {
  args: {
    variant: "default",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    placeholder: "Outline Text Area",
  },
}

export const Subtle: Story = {
  args: {
    variant: "subtle",
    placeholder: "Subtle Text Area",
  },
}


/* Sizes in one story */

const SizesDemo = (props: TextAreaProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <TextArea {...props} size="sm" placeholder="Small Text Area" />
    <TextArea {...props} size="md" placeholder="Medium Text Area" />
    <TextArea {...props} size="lg" placeholder="Large Text Area" />
  </div>
)

export const Sizes: Story = {
  args: {
    variant: "default",
  },
  render: (args) => <SizesDemo {...args} />,
}

