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



export const metadata = {
  title: "Joy Tours of India | Curated Travel Across India",
  description: "Handcrafted India tours — Golden Triangle, wildlife safaris, heritage walks and more. Personalized itineraries, expert guides, luxury transport.",
  openGraph: {
    title: "Joy Tours of India",
    description: "Handcrafted India tours — Golden Triangle, wildlife safaris, heritage walks and more.",
    images: ["/images/logo.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
