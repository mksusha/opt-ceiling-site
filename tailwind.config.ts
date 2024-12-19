import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000000",
        gray: "#E0E9E9",
        orange: "#FF551A",
        darkGray: "#232323",
        midGray: "#333333",
        lightGray: "#ECECEC",
        lightOrange: "#ff884d",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
