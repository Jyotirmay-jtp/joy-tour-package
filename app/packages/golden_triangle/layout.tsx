
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Triangle Tour of India",
  description:
    "Explore Delhi, Agra and Jaipur featuring the Taj Mahal, Amber Fort and vibrant heritage streets.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/golden_triangle",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
