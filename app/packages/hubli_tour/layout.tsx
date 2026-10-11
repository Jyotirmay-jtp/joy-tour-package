
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubli Tour",
  description:
    "Discover Hubli and its surrounding attractions with personalized travel arrangements and comfortable transportation from Joy Tours of India.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/hubli_tour",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
