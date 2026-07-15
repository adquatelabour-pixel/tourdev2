// Central FAQ data, reused by the FAQ page and the Home page preview.
export type Faq = { q: string; a: string };
export type FaqCategory = { category: string; items: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    category: "Guwahati Tourism",
    items: [
      {
        q: "What is the best time to visit Guwahati?",
        a: "The best time to visit is from October to April. The post-monsoon and winter months offer pleasant weather, making it ideal for sightseeing and wildlife tours.",
      },
      {
        q: "What are the top attractions to visit in Guwahati?",
        a: "The top must-visit spots include the sacred Kamakhya Temple, Umananda Temple (on Peacock Island), the Assam State Zoo, and enjoying a sunset cruise on the Brahmaputra River. It is also the gateway to wildlife sanctuaries like Pobitora and Kaziranga.",
      },
      {
        q: "Is Guwahati safe for tourists?",
        a: "Yes, Guwahati is generally safe for tourists. However, as with any major city, it is always recommended to take standard precautions and avoid traveling alone at night in unfamiliar areas.",
      },
    ],
  },
  {
    category: "Kamakhya Temple Visits",
    items: [
      {
        q: "What are the timings for Kamakhya Temple Darshan?",
        a: "The temple generally opens early morning around 5:30 AM to 8:00 AM and closes around 5:30 PM to 6:00 PM (with a break in the afternoon between 1:00 PM and 2:30 PM). For free darshan, it is advisable to report by 6:00 AM.",
      },
      {
        q: "How does the VIP Darshan pass work?",
        a: "The Special VIP Darshan pass typically costs ₹501 per person. It allows you to skip the longer general queues, though wait times can still vary depending on the season.",
      },
      {
        q: "Can non-Hindus visit the Kamakhya Temple?",
        a: "Yes, the temple welcomes visitors of all faiths who wish to explore its history and spirituality. Modest dress and respectful behavior are expected from all visitors.",
      },
      {
        q: "What is the Ambubachi Mela?",
        a: "It is a major annual festival held late in June. During these days, the temple expects massive crowds of devotees and practitioners. If you want a peaceful visit, it is better to avoid this specific period.",
      },
    ],
  },
  {
    category: "Cabs & Travel",
    items: [
      {
        q: "What type of cab packages are available for Guwahati sightseeing?",
        a: "We offer flexible hourly packages (e.g., 4hr/40km, 8hr/80km, 12hr/120km) making it easy to visit multiple spots like Kamakhya Temple and Umananda without the hassle of rebooking.",
      },
      {
        q: "Are tolls and parking fees included in the cab packages?",
        a: "Fuel and driver charges are included within the kilometer limit of your package. However, tolls, parking charges, and any state taxes are typically charged extra as per actuals.",
      },
      {
        q: "Where can I board my cab at the Guwahati Airport (LGBIA)?",
        a: "You can board your pre-booked cab directly from the arrival area on the cityside of the airport.",
      },
    ],
  },
];

// Flat list of the top 4 FAQs for the Home page preview.
export const topFaqs: Faq[] = [
  faqCategories[0].items[0], // Best time to visit
  faqCategories[0].items[1], // Top attractions
  faqCategories[1].items[0], // Kamakhya timings
  faqCategories[2].items[0], // Cab packages
];
