import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      include: ["src"],
      exclude: [
        "src/**/*.stories.*",
        "src/**/*.test.*",
        "src/setupTests.*",
        "src/main.*",
        "src/App.*",
        ".storybook/**",
      ],
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AtomUI",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "atom.css";
          return assetInfo.name ?? "[name][extname]";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
