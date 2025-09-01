import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',     // Includes actions, controls, docs, etc.
    '@storybook/addon-a11y',           // Accessibility checker
    '@storybook/addon-interactions',   // For interaction testing
    '@storybook/addon-vitest',         // Integrates with Vitest test runner
    '@chromatic-com/storybook',        // Optional: for Chromatic visual testing
    '@storybook/addon-onboarding',     // Optional: keep if you liked the onboarding flow
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
