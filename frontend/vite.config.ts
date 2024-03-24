import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: true,
  //   port: 8080,
  //   watch: {
  //     usePolling: true,
  //   },
  // },
  // preview: {
  //   port: 8080,
  //   strictPort: true,
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
