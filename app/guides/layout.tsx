
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Tourist Guides",
  description:
    "Government-approved, licensed local tourist guides — the cultural ambassadors who bring India's history and traditions to life on your tour.",
  alternates: {
    canonical: "https://joytoursofindia.com/guides",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
