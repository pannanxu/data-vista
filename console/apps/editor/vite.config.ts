import {defineConfig} from "vite";
import {resolve} from "path";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {}
    }

    // resolve: {
    //     alias: {
    //         '@': resolve(__dirname, 'src')
    //         // "@": fileURLToPath(new URL("./src", import.meta.url)),
    //     }
    // }
});
