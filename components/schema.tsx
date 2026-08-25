export function OrgSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "TravelAgency",
      name: "Joy Tours of India", url: "https://joytoursofindia.com",
      telephone: "+91-9352744747", email: "info@joytoursofindia.com",
      address: { "@type": "PostalAddress", streetAddress: "101, Vaishali Marg, Vaishali Nagar", addressLocality: "Jaipur", postalCode: "302021", addressCountry: "IN" },
      areaServed: "IN", foundingDate: "2018",
    }) }} />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
    }) }} />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }) }} />
  );
}

export function TourSchema({ name, description, days, price, url, image }: { name: string; description: string; days: string; price?: string; url: string; image: string }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "TouristTrip",
      name, description, image, url,
      itinerary: { "@type": "ItemList", name: days },
      provider: { "@type": "TravelAgency", name: "Joy Tours of India" },
      ...(price && { offers: { "@type": "Offer", priceCurrency: "INR", price } }),
    }) }} />
  );
}
