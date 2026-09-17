import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const lovableAssetHost = "https://id-preview-e4669ccc--8e1e064e-edde-40f9-8303-2eafef4f7479.lovable.app";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/yesssworks/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Lovable stores some source assets as metadata with a relative /__l5e URL.
    // Resolve those URLs when generating the standalone GitHub Pages bundle.
    mode === "production" && {
      name: "resolve-lovable-assets",
      renderChunk(code: string) {
        return {
          code: code.replaceAll('"/__l5e/', `"${lovableAssetHost}/__l5e/`),
          map: null,
        };
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
