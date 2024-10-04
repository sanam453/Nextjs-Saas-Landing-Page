import type { Config } from "tailwindcss";
import { mtConfig } from "@material-tailwind/react";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0BB96D",
        secondary: "#343434",
        tertiary: "#555555"
      },
    },
  },
  plugins: [mtConfig],
};
export default config;
