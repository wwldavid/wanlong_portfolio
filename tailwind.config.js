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
        lightHover: "#fcfeff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
