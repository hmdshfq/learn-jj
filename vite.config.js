import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginMarkdown from "vite-plugin-md";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), vitePluginMarkdown()],
});
