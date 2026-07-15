/** @type {import('next').NextConfig} */

// Strict security headers applied to every response.
// - HSTS forces browsers to use HTTPS (SSL) for 2 years, including subdomains.
// - The others mitigate clickjacking, MIME sniffing, referrer leakage and
//   restrict powerful browser APIs.
const securityHeaders = [
  {
    // HSTS — enforce HTTPS. Only takes effect once the site is served over HTTPS.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Basic Content-Security-Policy. Allows Unsplash placeholder images and
    // Google Fonts. Tighten `img-src`/`connect-src` when you add real assets
    // or a payment gateway (e.g. add Razorpay/Stripe domains).
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' https://source.unsplash.com https://images.unsplash.com data:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "script-src 'self' 'unsafe-inline'",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // hide the "X-Powered-By: Next.js" fingerprint
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
