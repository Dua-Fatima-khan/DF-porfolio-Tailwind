// src/app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "@/components/HEADER";
import "./globals.css"; // Ensure this file exists and is set up correctly
import FOOTER from "@/components/FOOTER";

// Specify weights and styles for Playfair Display
const playfairNormal = Playfair_Display({
  subsets: ['latin'],
  weight: '400', // Normal weight
  style: 'normal', // Normal style
});

const playfairBoldItalic = Playfair_Display({
  subsets: ['latin'],
  weight: '700', // Bold weight
  style: 'italic', // Italic style
});

// Montserrat font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400', // Normal weight
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Dua Fatima | Personal Portfolio",
  description: "Portfolio showcasing web development, web design, and graphic design by Dua Fatima.",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairNormal.className} ${playfairBoldItalic.className} ${montserrat.className}`}>
        <Header />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
