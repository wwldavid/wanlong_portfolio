import localFont from "next/font/local";

export const lora = localFont({
  src: "./fonts/lora/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
  display: "swap",
});

export const playfair = localFont({
  src: "./fonts/playfair/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  display: "swap",
});
