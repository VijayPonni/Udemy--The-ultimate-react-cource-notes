import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint"; // import vite-plugin-eslint package

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()], // add the eslint to this array
});
