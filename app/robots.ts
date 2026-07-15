import type { MetadataRoute } from "next";

// Served by Next.js at /robots.txt.
// - Allows all bots to crawl the site.
// - Disallows the checkout/booking path (no SEO value, keeps it out of the index).
// - Points crawlers to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/booking",
      },
    ],
    sitemap: "https://guwahatitours.co/sitemap.xml",
  };
}
