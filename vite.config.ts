// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'


export default defineConfig({
 plugins: [
   react(),
   dts({
     include: ['src'],
     exclude: [
       'src/**/*.stories.*',
       'src/**/*.test.*',
       'src/setupTests.*',
       '.storybook/**',
     ],
     insertTypesEntry: true, // generates an entry .d.ts for exports map
   }),
 ],
 resolve: { alias: { '@': resolve(__dirname, 'src') } },
 build: {
   lib: {
     entry: resolve(__dirname, 'src/index.ts'),
     name: 'AtomUI', // only used for UMD; harmless here
     formats: ['es', 'cjs'],
     fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
   },
   rollupOptions: {
     // do not bundle these into your lib
     external: ['react', 'react-dom'],
     output: {
       globals: { react: 'React', 'react-dom': 'ReactDOM' },
       // optional: keep module structure for better treeshaking
       preserveModules: false,
     },
   },
   sourcemap: true,
   emptyOutDir: true,
 },
})