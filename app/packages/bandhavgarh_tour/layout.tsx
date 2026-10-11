
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bandhavgarh Wildlife Tour",
  description:
    "Experience Bandhavgarh's renowned tiger reserve, wildlife safaris and natural landscapes with a personalized India travel experience.",
  alternates: {
    canonical: "https://joytoursofindia.com/packages/bandhavgarh_tour",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
