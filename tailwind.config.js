/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-lora)"],
      },
      colors: {
        lightHover: "#f8f4e6",
        darkHover: "#475950",
        darkTheme: "#0d0015",
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      animation: {
        spinSlow: "spin 4s linear infinite",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
