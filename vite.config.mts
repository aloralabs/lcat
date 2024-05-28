import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  clearScreen: false,
  publicDir: false,
  build: {
    manifest: false,
    rollupOptions: {
      input: resolve("scripts", "main.ts"),
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      },
    },
    outDir: resolve("static"),
    emptyOutDir: false,
    assetsDir: "",
  }
});
