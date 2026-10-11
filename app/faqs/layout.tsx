
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about traveling in India — visas, weather, tipping, safety, packing and more, answered by Joy Tours of India.",
  alternates: {
    canonical: "https://joytoursofindia.com/faqs",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
