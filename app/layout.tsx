import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import IntroLoader from "@/components/IntroLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Malsha Prabhasara | Portfolio",
    template: "%s | Malsha Prabhasara",
  },

  description:
    "Portfolio of Malsha Prabhasara - Software Developer and QA Engineer.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={`${geistSans.className} min-h-screen`}>
        <IntroLoader />

        {children}
      </body>
    </html>
  );
}