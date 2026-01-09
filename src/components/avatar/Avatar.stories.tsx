import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, type AvatarProps } from './Avatar'

import avatarImg_boy from '../../assets/avatar_boy.jpg'
import avatarImg_girl from '../../assets/avatar_girl.jpg'

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    initials: 'JD',
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    shape: 'circle',
    withRing: false,
    decorative: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'neutral',
        'success',
        'warning',
        'danger',
        'info',
        'accent',
      ],
    },
    appearance: {
      control: 'select',
      options: ['subtle', 'solid', 'outline', 'ghost', 'soft'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'pill'],
    },
    withRing: { control: 'boolean' },
    decorative: { control: "boolean" },
    asChild: { control: false },
    children: { control: false },
    src: { control: 'text' },
    alt: { control: 'text' },
    className: { control: false },
  },
}

export default meta
type Story = StoryObj<AvatarProps>

export const Playground: Story = {}

// export const WithImage: Story = {
//   args: {
//     // src: "/avatar.jpg",
//     src: avatarImg_,
//     alt: "John Doe",
//     initials: "JD",
//     variant: "neutral",
//     appearance: "subtle",
//   },
// };

export const WithImage: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <div className="flex  items-center gap-4">
        <Avatar
          src={avatarImg_boy}
          alt="John Doe"
          initials="JD"
          variant="neutral"
          appearance="subtle"
          size="sm"
        />
        <Avatar
          src={avatarImg_girl}
          alt="Ruby Doe"
          initials="RD"
          variant="neutral"
          appearance="subtle"
          size="sm"
        />
      </div>
      <div className="flex  items-center gap-4">
        <Avatar
          src={avatarImg_boy}
          alt="John Doe"
          initials="JD"
          variant="neutral"
          appearance="subtle"
          size="md"
        />
        <Avatar
          src={avatarImg_girl}
          alt="Ruby Doe"
          initials="RD"
          variant="neutral"
          appearance="subtle"
          size="md"
        />
      </div>
      <div className="flex  items-center gap-4">
        <Avatar
          src={avatarImg_boy}
          alt="John Doe"
          initials="JD"
          variant="neutral"
          appearance="subtle"
          size="lg"
        />
        <Avatar
          src={avatarImg_girl}
          alt="Ruby Doe"
          initials="RD"
          variant="neutral"
          appearance="subtle"
          size="lg"
        />
      </div>
    </div>
  ),
}

export const Solid: Story = {
  args: {
    initials: 'OK',
    variant: 'primary',
    appearance: 'solid',
    withRing: false,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
  args: {
    initials: 'JD',
    variant: 'accent',
    appearance: 'subtle',
  },
}

export const Shapes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Avatar {...args} shape="circle" />
      <Avatar {...args} shape="square" />
    </div>
  ),
  args: {
    initials: 'JD',
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
  },
}

export const Decorative: Story = {
  args: {
    src: avatarImg_boy,
    decorative: true,
  },
};
