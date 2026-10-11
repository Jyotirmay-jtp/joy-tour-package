
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisine Experiences",
  description:
    "Savour local cuisines and heritage bazaars with Joy Tours of India — food walks that reveal the true soul of each city.",
  alternates: {
    canonical: "https://joytoursofindia.com/cuisine",
  },
};

export default function CuisineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
