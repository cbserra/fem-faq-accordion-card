import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../public",
    // rollupOptions: {
    //   input: {
    //     main: './src/index.html',
    //     'grid-test': './src/grid-test.html',
    //     // ...
    //     // List all files you want in your build
    //   }
    // }
  },
  root: "src",
});
