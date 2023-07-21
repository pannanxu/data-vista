import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "dist"),
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: '@data-vista/core',
            fileName: (format) => `main.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    "react": "React",
                    "react-dom": "react-dom",
                    "react/jsx-runtime": "react/jsx-runtime"
                },
                exports: "named",
            },
        },
        sourcemap: true,
    },
})
