import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../public",
    rollupOptions: {
      input: {
        main: './index.html',
        'grid-test': './grid-test.html',
        // ...
        // List all files you want in your build
      }
    }
  },
  root: "src",
});
