import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    manifest: false,
    rollupOptions: {
      input: resolve("scripts", "main.js"),
      output: {
        entryFileNames: "[name].js",
      },
    },
    minify: true,
    outDir: resolve("static"),
    emptyOutDir: false,
    assetsDir: "",
  },
  publicDir: false,
  clearScreen: false,
});
