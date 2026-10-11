
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Triangle + South India Tour",
  description:
    "Pair India's Golden Triangle heritage with South India's temples, cultural experiences and scenic backwaters.",
  alternates: {
    canonical:
      "https://joytoursofindia.com/packages/golden_triangle+south_india",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
