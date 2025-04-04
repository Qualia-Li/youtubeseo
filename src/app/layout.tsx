import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/scripts/GoogleAnalytics";
import Ahrefs from "@/components/scripts/Ahrefs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTubeSEO: Most Effective YouTube SEO Tool for SaaS",
  description: "Discover untapped long-tail keywords, automatically create engaging YouTube videos, and optimize for both traditional and AI search engines.",
  keywords: [
    "YouTube SEO",
    "long-tail keywords",
    "AI search optimization",
    "video content creation",
    "SEM",
    "digital marketing",
  ],
  alternates: {
    canonical: 'https://www.youtubeseo.ai'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Ahrefs />
        {children}
      </body>
    </html>
  );
}
