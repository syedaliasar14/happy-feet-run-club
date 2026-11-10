import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { config } from "@/config";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const petitCochon = localFont({
  src: "../fonts/Petit Cochon.ttf",
  variable: "--font-petit-cochon",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${petitCochon.variable} ${bebasNeue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
