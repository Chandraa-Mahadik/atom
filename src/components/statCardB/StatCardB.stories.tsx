// src/components/StatCardB.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCardB, type StatCardBProps } from './StatCardB'
import { CheckCircle2, AlertTriangle, XCircle, Inbox, Archive } from 'lucide-react'

const meta: Meta<StatCardBProps> = {
  title: 'Components/StatCardB',
  component: StatCardB,
  tags: ['autodocs'],
  args: {
    label: 'Total Files',
    value: 15,
    variant: 'neutral',
    size: 'md',
    appearance: 'elevated',
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'info', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    appearance: {
      control: 'select',
      options: ['elevated', 'outlined', 'ghost', 'soft'],
    },
    fullWidth: { control: 'boolean' },
    asChild: { control: false },
    className: { control: false },
    icon: { control: false },
  },
}

export default meta
type Story = StoryObj<StatCardBProps>

export const Playground: Story = {}

export const Primary: Story = {
    args:{
        label:'Validated',
        value:5,
        variant:'primary',
        icon:<CheckCircle2 className='w-4 h-4'/>
    }
}
export const WithSingleIcon: Story = {
  args: {
    label: 'Validated',
    value: 4,
    variant: 'success',
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
}

export const Neutral: Story = {
  args: {
    label: 'Total Files',
    value: 15,
    variant: 'neutral',
  },
}

export const Success: Story = {
  args: {
    label: 'Validated',
    value: 4,
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Quarantined',
    value: 2,
    variant: 'warning',
  },
}

export const Danger: Story = {
  args: {
    label: 'Failed',
    value: 2,
    variant: 'danger',
  },
}

export const Info: Story = {
  args: {
    label: 'Incoming',
    value: 4,
    variant: 'info',
  },
}

export const Accent: Story = {
  args: {
    label: 'Archived',
    value: 3,
    variant: 'accent',
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <StatCardB {...args} size="sm" />
      <StatCardB {...args} size="md" />
      <StatCardB {...args} size="lg" />
    </div>
  ),
  args: {
    label: 'Total Files',
    value: 15,
    variant: 'neutral',
  },
}

export const Appearances: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <StatCardB {...args} appearance="elevated" label="Elevated" />
      <StatCardB {...args} appearance="outlined" label="Outlined" />
      <StatCardB {...args} appearance="soft" label="Soft" />
      <StatCardB {...args} appearance="ghost" label="Ghost" />
    </div>
  ),
  args: {
    value: 15,
    variant: 'neutral',
  },
}

export const WithIconsRow: Story = {
  render: () => (
    <div className="flex gap-4">
      <StatCardB
        label="Validated"
        value={4}
        size="sm"
        variant="success"
        icon={<CheckCircle2 className="w-4 h-4" />}
      />
      <StatCardB
        label="Quarantined"
        value={2}
        size="md"
        variant="warning"
        icon={<AlertTriangle className="w-4 h-4" />}
      />
      <StatCardB
        label="Failed"
        value={2}
        size="lg"
        variant="danger"
        icon={<XCircle className="w-4 h-4" />}
      />
      <StatCardB
        label="Incoming"
        value={4}
        size="md"
        variant="info"
        icon={<Inbox className="w-4 h-4" />}
      />
      <StatCardB
        label="Archived"
        value={3}
        size="sm"
        variant="accent"
        icon={<Archive className="w-4 h-4" />}
      />
    </div>
  ),
}

