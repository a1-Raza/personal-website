import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavbarButton from "@/components/navbar-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Navbar imgUrl="/next.svg">
          <NavbarButton href="/">Home</NavbarButton>
          <NavbarButton href="/about">About</NavbarButton>
          <NavbarButton href="/projects">Projects</NavbarButton>
          <NavbarButton href="/resume">Resume</NavbarButton>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
