import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://joytoursofindia.com"; // replace with your real domain

  const routes = [
    "", "/about", "/contact", "/gallery", "/faqs", "/guides", "/transport",
    "/cuisine", "/family-dinner",
    "/packages/golden_triangle",
    "/packages/golden_triangle+ranthambore",
    "/packages/golden_triangle+south_india",
    "/packages/hubli_tour",
    "/packages/leh_srinagar",
    "/packages/bandhavgarh_tour",
    "/packages/golden_triangle+udaipur_jodhpur",
    "/packages/spiritual_tour",
    "/packages/nepal_tour",
    "/packages/culinary_tour",
    "/packages/family_dinner",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}