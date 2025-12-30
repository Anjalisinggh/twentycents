import { Inter } from "next/font/google";
import HtmlLangSetter from "../components/layout/HtmlLangSetter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} antialiased`}>
        <HtmlLangSetter />
        {children}
      </body>
    </html>
  );
}
