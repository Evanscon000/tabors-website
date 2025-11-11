/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
            '@/': path.resolve(__dirname, './src/') + '/',
        },
    },
    esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        include: ['**/*.{test,spec}.{ts,tsx,js,jsx}', '**/__tests__/**/*.{ts,tsx,js,jsx}'],
        coverage: { include: ['src/**'], provider: 'v8', reporter: ['text', 'lcov'] },
    },
})
