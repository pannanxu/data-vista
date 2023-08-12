import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": process.env,
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "PluginStarter",
            formats: ["iife"],
            fileName: () => "main.js",
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime", "@data-vista/plugin"],
            output: {
                globals: {
                    react: "React",
                    "react/jsx-runtime": "jsxRuntime",
                    "react-dom": "ReactDOM",
                },
                exports: "named",
            },
        },
    },
});
