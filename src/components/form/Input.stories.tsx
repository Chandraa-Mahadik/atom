import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
    />
  </svg>
);

const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  parameters: { layout: "padded" },
  args: { placeholder: "Type here…" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    leftIcon: <Search />,
    rightIcon: <Check />,
    hint: "Helper text goes here",
  },
};

export const Invalid: Story = {
  args: {
    leftIcon: <Search />,
    errorText: "This field is required",
    tone: "invalid",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Input size="sm" placeholder="Small" leftIcon={<Search />} rightIcon={<Check />} />
      <Input size="md" placeholder="Medium" leftIcon={<Search />} rightIcon={<Check />} />
      <Input size="lg" placeholder="Large" leftIcon={<Search />} rightIcon={<Check />} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, value: "Disabled value" },
};
