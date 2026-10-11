
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Tour of India",
  description:
    "Explore India's spiritual heritage, sacred destinations, historic temples and meaningful cultural experiences with Joy Tours of India.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/spiritual_tour",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
