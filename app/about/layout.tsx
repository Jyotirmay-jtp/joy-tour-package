
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Joy Tours of India — a Jaipur-based travel company established in 2018, offering personalized India tours with local expertise and dedicated service.",
  alternates: {
    canonical: "https://joytoursofindia.com/about",
  },
  openGraph: {
    title: "About Joy Tours of India",
    description: "A trusted Jaipur-based travel company since 2018.",
    url: "https://joytoursofindia.com/about",
    images: ["/images/hero-poster.webp"],
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
