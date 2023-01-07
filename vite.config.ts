import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    appType: "custom",
    clearScreen: false,
    publicDir: false,
    build: {
        lib: {
            fileName: "script",
            entry: resolve("scripts", "main.ts"),
            formats: ["cjs"],
        },
        outDir: resolve("static"),
        emptyOutDir: false,
        assetsDir: "",
    },
    server: {
        port: 8001,
    },
});
