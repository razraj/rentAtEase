// tailwind config is required for editor support
import {
  animations,
  components,
  grays,
  palettes,
  rounded,
  shade,
} from "@tailus/themer";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ...palettes.trust,
        gray: grays.neutral,
      },
    },
  },
  plugins: [shade, components, animations, rounded],
};
