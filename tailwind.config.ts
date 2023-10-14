import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fbf9f9",
        },
      },
    },
  },
};
export default config;
