
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comfortable Transportation",
  description:
    "Air-conditioned sedans, SUVs, tempo travellers and coaches with professional drivers — reliable transport for every India tour.",
  alternates: {
    canonical: "https://joytoursofindia.com/transport",
  },
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
