import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
}
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const ThemeSwitch: Story = {
  args: {
    variant: 'theme',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(false)
    return (
      <div className="flex items-center gap-3">
        <Switch variant="theme" checked={value} onCheckedChange={setValue} />
        <span className="text-sm">{value ? 'Dark' : 'Light'}</span>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
