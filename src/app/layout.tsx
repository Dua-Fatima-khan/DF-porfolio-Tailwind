import type { Metadata } from "next";
import { Playfair_Display, Montserrat} from '@next/font/google';
import Header from "@/components/HEADER";
import "./globals.css";
import FOOTER from "@/components/FOOTER";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export const metadata: Metadata = {
  title: "Dua Fatima | Personal Portfolio",
  description: "portfolio, web development, web design, graphic design, Dua fatima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${montserrat.className} `}
      >
        <Header/>
        {children}
        <FOOTER/>
      </body>
    </html>
  );
}
