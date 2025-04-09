import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dennis —— Software & Web Developer",
  description:
    "I'm a software and web developer with 5 years of programming experience, explore my website and blog!",
  keywords: [
    "Dennis",
    "Software Developer",
    "Web Developer",
    "Programming",
    "Blog",
    "Portfolio",
  ],
  authors: [{ name: "Dennis", url: "https://myferr.foo.ng" }],
  openGraph: {
    title: "Dennis —— Software & Web Developer",
    description:
      "I'm a software and web developer with 5 years of programming experience, explore my website and blog!",
    url: "https://myferr.foo.ng",
    siteName: "Dennis' Portfolio",
    images: [
      {
        url: "https://github.com/myferr.png",
        width: 1200,
        height: 630,
        alt: "Dennis —— Software & Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis —— Software & Web Developer",
    description:
      "I'm a software and web developer with 5 years of programming experience, explore my website and blog!",
    images: ["https://github.com/myferr.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
