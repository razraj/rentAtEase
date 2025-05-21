// tailwind config is required for editor support
import {
  animations,
  components,
  grays,
  palettes,
  rounded,
  shade,
} from "@tailus/themer";
// import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
  ],
  // ! Theme related config: [https://ui.tailus.io/react/theming/palette]
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        ...palettes.trust,
      },
    },
  },
  plugins: [shade, components, animations, rounded],
};
