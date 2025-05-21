import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "glow-conic":
    //       "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
    //   },
    // },
  },
  plugins: [],
};
export default config;
