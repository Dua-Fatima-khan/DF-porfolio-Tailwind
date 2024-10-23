// src/app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from '@next/font/google';
import Header from "@/components/HEADER";
import "./globals.css"; // Ensure this file exists and is set up correctly
import FOOTER from "@/components/FOOTER";

// Correctly use 'weight' instead of 'weights'
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Use 'weight' (singular) with an array
  style: ['normal', 'italic'], // Style can be specified here
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Use 'weight' (singular) with an array
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
      <body className={`${playfair.className} ${montserrat.className}`}>
        <Header />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
