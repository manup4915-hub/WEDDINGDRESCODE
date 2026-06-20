import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEDDING DRESS CODE",
  description: "Wedding Dress Code inspiration for Shaneika and George’s High Tea Elegance celebration.",
  openGraph: {
    title: "WEDDING DRESS CODE",
    description: "Wedding Dress Code inspiration for Shaneika and George’s High Tea Elegance celebration.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
