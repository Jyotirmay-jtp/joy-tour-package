
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leh & Srinagar Tour",
  description:
    "Explore Leh and Srinagar with a memorable journey through Himalayan landscapes, mountain scenery and distinctive regional culture.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/leh_srinagar",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
