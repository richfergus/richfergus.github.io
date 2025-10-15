import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard D. Ferguson - CTO, National Security Expert, US Army Commander",
  description: "Experienced CTO specializing in FedRAMP, cybersecurity, and cloud infrastructure. Former White House Chief of Engineering, Harvard National Security Fellow, US Army Aviation Commander, and Presidential Award recipient.",
  keywords: [
    "Richard D. Ferguson",
    "CTO",
    "Chief Technology Officer",
    "FedRAMP",
    "Cybersecurity",
    "Cloud Security",
    "National Security",
    "Presidential",
    "The White House",
    "Harvard",
    "US Army",
    "DoD",
    "Government Technology",
    "RMF",
    "NIST",
  ],
  authors: [{ name: "Richard D. Ferguson" }],
  creator: "Richard D. Ferguson",
  metadataBase: new URL("https://richfergus.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richfergus.github.io",
    title: "Richard D. Ferguson - CTO, National Security Expert, US Army Commander",
    description: "Experienced CTO with 30+ years leading technology initiatives across government, military, and enterprise sectors. FedRAMP expert, Presidential Award recipient, and Harvard National Security Fellow.",
    siteName: "Richard D. Ferguson Resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard D. Ferguson - CTO & National Security Expert",
    description: "30+ years technology leadership | FedRAMP | White House | Harvard NSF | US Army Commander",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}
