import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ESLint } from "eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "eslint-plugin",
      enforce: "pre",
      apply: "serve",
      watchChange: async () => {
        const eslint = new ESLint();
        const results = await eslint.lintFiles("./src/**/*.{js,jsx,ts,tsx}");
        const formatter = await eslint.loadFormatter("stylish");
        const resultText = formatter.format(results);
        console.log(resultText);
      },
      buildStart: async () => {
        const eslint = new ESLint();
        const results = await eslint.lintFiles("./src/**/*.{js,jsx,ts,tsx}");
        const formatter = await eslint.loadFormatter("stylish");
        const resultText = formatter.format(results);
        console.log(resultText);
      },
    },
  ],
});
