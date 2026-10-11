
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Dinner Experience",
  description:
    "Dine with a local Indian family at their home — an authentic evening of home-cooked food and genuine hospitality.",
  alternates: {
    canonical: "https://joytoursofindia.com/family-dinner",
  },
};

export default function FamilyDinnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
