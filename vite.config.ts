import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Only generate sitemap for production builds
    mode === 'production' && sitemap({
      hostname: "https://alpukat-hass-jawabarat.lovable.app",
      changefreq: "daily",
      priority: 0.7,
      // Remove robots config to avoid file system issues during build
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
