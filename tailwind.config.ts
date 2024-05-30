import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'dark-black': '#1B1D1F',
        'light-black': '#282B30',
        'gray': '#6C727F',
        'blue': '#4E80EE',
      },
      colors: {
        'blue': '#4E80EE',
        'gray': '#6C727F',
        'white': '#D2D5DA',
      }
    },
  },
  plugins: [],
};
export default config;
