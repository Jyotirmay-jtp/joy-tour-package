
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Joy Tours of India — call, WhatsApp, or email us to plan your personalized India tour.",
  alternates: {
    canonical: "https://joytoursofindia.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
