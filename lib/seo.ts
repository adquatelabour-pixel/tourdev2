// Central SEO constants reused across metadata and JSON-LD.
export const SITE_URL = "https://guwahatitours.co";
export const SITE_NAME = "Guwahati Tours & Visits";
// Open Graph image placeholder — replace with a real 1200x630 branded image at /og.jpg.
export const OG_IMAGE = `${SITE_URL}/og.jpg`;

// Build a BreadcrumbList schema from an ordered list of { name, path } crumbs.
// Example: breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }])
export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
