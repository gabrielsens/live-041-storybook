import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    'tailwind.config.ts',
    'src/styles/index.css'
  ],
  outDir: 'dist',
  minify: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json'
})
