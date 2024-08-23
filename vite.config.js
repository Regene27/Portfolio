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
  },
};
