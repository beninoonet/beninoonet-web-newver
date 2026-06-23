import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Beninoonet",
  description: "Beninoonet est un développeur web et créateur de contenu passionné par la technologie, le design et l'innovation. Découvrez ses projets, suivez ses aventures sur les réseaux sociaux et soutenez son travail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${OpenSans.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
