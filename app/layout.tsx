import { cx } from "@/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import ScriptTheme from "@/components/ScriptTheme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata: Metadata = {
  title: "Kon Yap",
  description: "Expand your Tech knowledges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark "
        )}
      >
        <ScriptTheme />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
