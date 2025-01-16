import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
});
