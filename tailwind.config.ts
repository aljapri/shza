import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-image": "url(/public/image/main-image.jpg)",
      },
    },
    colors: {
      springGreen: "#02c88",
      laPaima: "#0f9015",
      fern: "#5cb25d",
      green: "#005825",
      white: "white",
      blue: "#2872fd",
      red: "#a6192e",
    },
  },
  plugins: [],
};
export default config;
