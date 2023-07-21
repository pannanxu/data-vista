import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "dist"),
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: '@data-vista/runtime',
            fileName: (format) => `main.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime", "@loadable/component"],
            output: {
                globals: {
                    "react": "React",
                    "react-dom": "react-dom",
                    "react/jsx-runtime": "react/jsx-runtime",
                    "@loadable/component": "@loadable/component"
                },
                exports: "named",
            },
        },
        sourcemap: true,
    },
    define: {
        "process.env": process.env,
    },
})
