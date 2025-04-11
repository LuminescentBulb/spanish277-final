import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import { Merriweather } from 'next/font/google';
import "./globals.css";
import { Masthead } from "@/components/masthead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Mi Periódico | Noticias hechas por estudiantes",
  description: "Periódico digital con noticias escritas por estudiantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <Masthead/>
        {children}
      </body>
    </html>
  );
}
