import type { Preview } from '@storybook/react-vite';
import '../src/index.css'; // global styles

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true, // ✅ expands controls in the UI
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      element: '#storybook-root', // ✅ limits a11y checks to this element
      test: 'todo',               // 'todo' shows violations in UI; doesn't fail CI
    },
  },
};

export default preview;

