import "./globals.css";
import { Press_Start_2P, VT323 } from "next/font/google";
import type React from "react";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata = {
  title: "Dennis",
  description:
    "Programmer, Designer, and Freelancer. I'm a software developer with a passion for creating beautiful and functional websites. I'm also a designer and a freelancer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} font-sans bg-gray-900 text-green-400 dark:bg-gray-900 dark:text-green-400`}
      >
        {children}
      </body>
    </html>
  );
}
