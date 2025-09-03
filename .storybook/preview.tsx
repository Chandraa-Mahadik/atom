// .storybook/preview.tsx
import type { Preview } from '@storybook/react'
import '../src/styles/tailwind.css' // tokens + base

// Theme toolbar control
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light/Dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
}

// Wrap every story in the themed container
const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'light'
  return (
    <div
      className="atom-theme"
      data-theme={theme}
      style={{ padding: 16, minHeight: '100vh' }}
    >
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    a11y: { element: '#storybook-root', test: 'todo' },
  },
}

export default preview
