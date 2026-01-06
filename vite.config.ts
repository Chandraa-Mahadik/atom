import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  publicDir: false,
  plugins: [react()],
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  build: {
    emptyOutDir: false,
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
  },
});
