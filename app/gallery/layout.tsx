
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from our India tours — heritage sites, wildlife safaris, cultural experiences and landscapes across Rajasthan and beyond.",
  alternates: {
    canonical: "https://joytoursofindia.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
