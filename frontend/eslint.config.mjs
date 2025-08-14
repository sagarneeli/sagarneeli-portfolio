import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Ignore generated and vendor files
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/playwright-report/**",
      "**/dist/**",
    ],
  },
  // Project-wide rule tweaks
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  // Allow require()-style imports in config files
  {
    files: [
      "**/*.config.js",
      "**/*.config.cjs",
      "**/*.config.mjs",
      "jest.config.js",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];

export default eslintConfig;
