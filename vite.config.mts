import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve("scripts", "main.js"),
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: resolve("static", "build"),
  },
  publicDir: false,
  clearScreen: false,
});
