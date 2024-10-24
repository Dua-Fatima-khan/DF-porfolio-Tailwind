// src/app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "@/components/HEADER";
import "./globals.css"; // Ensure this file exists and is set up correctly
import FOOTER from "@/components/FOOTER";

// Correctly specify weights
const playfairNormal = Playfair_Display({
  subsets: ['latin'],
  weight: '400', // Use a single weight
  style: 'normal', // Specify normal style
});

const playfairItalic = Playfair_Display({
  subsets: ['latin'],
  weight: '700', // Use a single weight
  style: 'italic', // Specify italic style
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400', // Use a single weight
});

export const metadata: Metadata = {
  title: "Dua Fatima | Personal Portfolio",
  description: "Portfolio showcasing web development, web design, and graphic design by Dua Fatima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairNormal.className} ${playfairItalic.className} ${montserrat.className}`}>
        <Header />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
