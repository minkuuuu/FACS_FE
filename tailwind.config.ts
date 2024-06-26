import type { Config } from "tailwindcss";


const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./types/page.tsx",
    // "./types/layout.tsx",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
});
export default config;
