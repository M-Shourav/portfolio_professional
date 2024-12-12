import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const raleway = localFont({
  src: "./fonts/raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Masum Ahmed | Personal portfolio",
  description: "A portfolio for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
