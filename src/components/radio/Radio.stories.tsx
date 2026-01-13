import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  Radio,
  RadioLabel,
  RadioOption,
  RadioDescription,
} from './Radio'
import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
}
export default meta

type Story = StoryObj<typeof meta>

/* ---------------------------------------------------------
 * BASIC USAGE
 * --------------------------------------------------------- */

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="one">
      <RadioOption>
        <Radio value="one" id="one" />
        <RadioLabel htmlFor="one">Option One</RadioLabel>
      </RadioOption>
      <RadioOption>
        <Radio value="two" id="two" />
        <RadioLabel htmlFor="two">Option Two</RadioLabel>
      </RadioOption>
    </RadioGroup>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="basic" className="space-y-3">
      <div>
        <RadioOption>
          <Radio value="basic" id="basic" />
          <RadioLabel htmlFor="basic">Basic</RadioLabel>
        </RadioOption>
        <RadioDescription className="ml-6">
          Standard features
        </RadioDescription>
      </div>

      <div>
        <RadioOption>
          <Radio value="pro" id="pro" />
          <RadioLabel htmlFor="pro">Pro</RadioLabel>
        </RadioOption>
        <RadioDescription className="ml-6">
          Advanced features for teams
        </RadioDescription>
      </div>
    </RadioGroup>
  ),
}

/* ---------------------------------------------------------
 * CONTROLLED
 * --------------------------------------------------------- */

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('a')
    return (
      <>
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioOption>
            <Radio value="a" id="a" />
            <RadioLabel htmlFor="a">Option A</RadioLabel>
          </RadioOption>
          <RadioOption>
            <Radio value="b" id="b" />
            <RadioLabel htmlFor="b">Option B</RadioLabel>
          </RadioOption>
        </RadioGroup>
        <p className="mt-2 text-sm">Selected: {value}</p>
      </>
    )
  },
}

/* ---------------------------------------------------------
 * LAYOUT VARIANTS
 * --------------------------------------------------------- */

export const Horizontal: Story = {
  render: () => (
    <RadioGroup direction="horizontal" defaultValue="yes">
      <RadioOption>
        <Radio value="yes" id="yes" />
        <RadioLabel htmlFor="yes">Yes</RadioLabel>
      </RadioOption>
      <RadioOption>
        <Radio value="no" id="no" />
        <RadioLabel htmlFor="no">No</RadioLabel>
      </RadioOption>
      <RadioOption>
        <Radio value="maybe" id="maybe" />
        <RadioLabel htmlFor="maybe">Maybe</RadioLabel>
      </RadioOption>
    </RadioGroup>
  ),
}

/* ---------------------------------------------------------
 * STATES
 * --------------------------------------------------------- */

export const DisabledOptions: Story = {
  render: () => (
    <RadioGroup defaultValue="enabled">
      <RadioOption>
        <Radio value="enabled" id="enabled" />
        <RadioLabel htmlFor="enabled">Enabled</RadioLabel>
      </RadioOption>
      <RadioOption>
        <Radio value="disabled" id="disabled" disabled />
        <RadioLabel htmlFor="disabled">Disabled</RadioLabel>
      </RadioOption>
    </RadioGroup>
  ),
}

/* ---------------------------------------------------------
 * LONG LABELS / WRAPPING
 * --------------------------------------------------------- */

export const LongLabels: Story = {
  render: () => (
    <RadioGroup defaultValue="long">
      <RadioOption className="items-start">
        <Radio value="long" id="long" className="mt-1" />
        <RadioLabel htmlFor="long">
          This is a very long radio label that wraps onto multiple
          lines to test alignment and spacing in real layouts
        </RadioLabel>
      </RadioOption>
    </RadioGroup>
  ),
}

/* ---------------------------------------------------------
 * REAL-WORLD EXAMPLES
 * --------------------------------------------------------- */

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-[320px] space-y-3">
      <h3 className="text-sm font-semibold">Theme preference</h3>
      <RadioGroup defaultValue="system">
        <RadioOption>
          <Radio value="light" id="light" />
          <RadioLabel htmlFor="light">Light</RadioLabel>
        </RadioOption>
        <RadioOption>
          <Radio value="dark" id="dark" />
          <RadioLabel htmlFor="dark">Dark</RadioLabel>
        </RadioOption>
        <RadioOption>
          <Radio value="system" id="system" />
          <RadioLabel htmlFor="system">System</RadioLabel>
        </RadioOption>
      </RadioGroup>
    </div>
  ),
}

export const PlanSelector: Story = {
  render: () => (
    <div className="w-[360px] space-y-4">
      <h3 className="text-sm font-semibold">Choose a plan</h3>
      <RadioGroup defaultValue="starter" className="space-y-3">
        <div className="p-3 border rounded-md">
          <RadioOption>
            <Radio value="starter" id="starter" />
            <RadioLabel htmlFor="starter">Starter</RadioLabel>
          </RadioOption>
          <RadioDescription className="ml-6">
            For individuals getting started
          </RadioDescription>
        </div>

        <div className="p-3 border rounded-md">
          <RadioOption>
            <Radio value="pro" id="plan-pro" />
            <RadioLabel htmlFor="plan-pro">Pro</RadioLabel>
          </RadioOption>
          <RadioDescription className="ml-6">
            Best for professionals
          </RadioDescription>
        </div>
      </RadioGroup>
    </div>
  ),
}
