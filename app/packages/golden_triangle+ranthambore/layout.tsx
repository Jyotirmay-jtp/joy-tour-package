
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Triangle + Ranthambore Tour",
  description:
    "8-day tour covering Delhi, Agra, Ranthambore tiger safari and Jaipur — Taj Mahal, wildlife, and royal heritage in one circuit.",
  alternates: {
    canonical:
      "https://joytoursofindia.com/packages/golden_triangle+ranthambore",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
