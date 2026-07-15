import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guwahati Tours & Visits | Book Tours, Cabs, Hotels & Flights in Assam",
    template: "%s | Guwahati Tours & Visits",
  },
  description:
    "Your all-in-one platform for booking tourist visits, cabs, hotels and flights in Guwahati, Assam. Verified local guides, 24/7 support, secure payments.",
  keywords:
    "Guwahati tours, Kamakhya Temple, Umananda, Assam travel, Guwahati cabs, Assam hotels",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Guwahati Tours & Visits | Book Tours, Cabs, Hotels & Flights in Assam",
    description:
      "Book tours, cabs, hotels and flights in Guwahati, Assam. Verified local guides, 24/7 support, secure payments.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guwahati Tours & Visits",
    description:
      "Book tours, cabs, hotels and flights in Guwahati, Assam. Verified local guides, 24/7 support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-cream font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
