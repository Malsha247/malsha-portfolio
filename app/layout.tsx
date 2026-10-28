import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import IntroLoader from "@/components/IntroLoader";
import { siteUrl } from "./siteConfig";

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
    default: "Malsha Prabhasara | Software Developer & QA Engineer",
    template: "%s | Malsha Prabhasara",
  },

  description:
    "Explore the portfolio of Malsha Prabhasara, a software developer and QA engineer building modern web applications and testing reliable digital experiences.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Malsha Prabhasara | Software Developer & QA Engineer",
    description:
      "Explore the portfolio of Malsha Prabhasara, a software developer and QA engineer building modern web applications and testing reliable digital experiences.",
    url: "/",
    siteName: "Malsha Prabhasara | Portfolio",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/profile (2).png",
        width: 500,
        height: 620,
        alt: "Portrait of Malsha Prabhasara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malsha Prabhasara | Software Developer & QA Engineer",
    description:
      "Explore the portfolio of Malsha Prabhasara, a software developer and QA engineer building modern web applications and testing reliable digital experiences.",
    images: ["/profile (2).png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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