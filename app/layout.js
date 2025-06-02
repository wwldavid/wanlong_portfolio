import { playfair, lora } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Wanlong",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lora.variable} font-body leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
