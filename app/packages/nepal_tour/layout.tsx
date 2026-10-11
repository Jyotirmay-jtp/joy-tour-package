
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nepal Tour Package",
  description:
    "Discover Nepal's Himalayan scenery, cultural heritage, historic temples and memorable travel experiences with personalized tour planning.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/nepal_tour",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
