// src/components/button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me' },
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { variant: 'primary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const ClassNameOverride: Story = {
  render: () => (
    <Button className="rounded-xl shadow-atom2 bg-green-600 hover:bg-green-700">
      Custom Override
    </Button>
  ),
}

export const AsChildLink: Story = {
  render: () => (
    <Button asChild>
      <a href="#settings">Go to Settings</a>
    </Button>
  ),
}
