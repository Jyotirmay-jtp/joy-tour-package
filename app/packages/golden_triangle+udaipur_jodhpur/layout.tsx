
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Triangle + Udaipur & Jodhpur Tour",
  description:
    "Discover Delhi, Agra and Jaipur alongside Rajasthan's romantic Udaipur lakes, Jodhpur's blue streets and magnificent forts.",
  alternates: {
    canonical:
      "https://joytoursofindia.com/packages/golden_triangle+udaipur_jodhpur",
  },
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
