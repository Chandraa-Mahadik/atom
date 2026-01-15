import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "jsdom",

    // ✅ REQUIRED for @testing-library/jest-dom matchers
    setupFiles: ["./src/setupTests.ts"],

    globals: true,

    // ✅ CRITICAL: never load stories
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.storybook/**",
      "**/*.stories.*",
      "**/*.story.*"
    ],

    // ❌ DO NOT use browser mode for a UI library
    browser: {
      enabled: false
    }
  }
});
