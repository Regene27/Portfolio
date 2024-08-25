import { resolve } from "path";
import path from "path";

export default {
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "public"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Resolve path for index.html
        about_me: resolve(__dirname, "src/about_me.html"), // Resolve path for about_me.html
        contact: resolve(__dirname, "src/contact.html"), // Resolve path for contact.html
        projects: resolve(__dirname, "src/projects.html"), // Resolve path for projects.html
        csl_detection: resolve(__dirname, "src/csl_detection.html"), // Resolve path for csl_detection.html
      },
    },
  },
};
