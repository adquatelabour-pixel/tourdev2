# Guwahati Tours & Visits

A modern, mobile-first tourism booking website for Guwahati, Assam — built with
**Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Resend** for
email delivery.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

- `RESEND_API_KEY` — from https://resend.com/api-keys
- `LEAD_TO_EMAIL` — `ghytours@gmail.com,contact@guwahatitours.co`
- `LEAD_FROM_EMAIL` — `onboarding@resend.dev` until your domain is verified

### 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the project |

## Project structure

```text
app/                 Routes (Home, destinations, services, booking, faq, about, etc.)
  api/               API routes for lead & booking emails (Resend)
  destinations/      Listing + dynamic [slug] detail pages
components/          Reusable UI (Navbar, Footer, BookingWidget, LeadForm, etc.)
lib/                 Data (data.ts), validation, faqs, seo helpers
```

## Deployment

Deploy to **Vercel** or **Netlify** for automatic HTTPS/SSL. Add the same
environment variables in the hosting dashboard. Drop a real 1200×630 branded
image at `public/og.jpg` for social link previews.
