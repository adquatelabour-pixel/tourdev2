// Central data source — swap these for your CMS/database later.

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  img: string;
  duration: string;
  priceFrom: number;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kamakhya-temple",
    name: "Kamakhya Temple",
    tagline: "The revered Shakti Peetha on Nilachal Hill",
    description:
      "One of the oldest and most sacred Shakti Peethas in India, perched atop Nilachal Hill with sweeping views of the Brahmaputra. A spiritual landmark and the beating heart of Guwahati tourism.",
    img: "https://source.unsplash.com/900x700/?kamakhya,temple",
    duration: "3–4 hrs",
    priceFrom: 799,
    highlights: ["Skip-the-line darshan help", "Local guide", "Hilltop views"],
  },
  {
    slug: "umananda-temple",
    name: "Umananda Temple",
    tagline: "Shiva temple on the world's smallest river island",
    description:
      "A serene Shiva temple on Peacock Island in the middle of the Brahmaputra, reached by a short ferry ride. Peaceful, scenic and rich in legend.",
    img: "https://source.unsplash.com/900x700/?umananda,island,river",
    duration: "2–3 hrs",
    priceFrom: 649,
    highlights: ["Return ferry ride", "Island walk", "Photography stops"],
  },
  {
    slug: "brahmaputra-cruise",
    name: "Brahmaputra River Cruise",
    tagline: "Golden sunset cruises on the mighty river",
    description:
      "Glide across the Brahmaputra at golden hour with live music, snacks and unbeatable sunset views over Guwahati's skyline.",
    img: "https://source.unsplash.com/900x700/?brahmaputra,sunset,cruise",
    duration: "1.5 hrs",
    priceFrom: 999,
    highlights: ["Sunset timing", "Onboard refreshments", "Live cultural music"],
  },
  {
    slug: "pobitora-sanctuary",
    name: "Pobitora Wildlife Sanctuary",
    tagline: "Highest density of one-horned rhinos",
    description:
      "A short drive from Guwahati, Pobitora offers thrilling jeep and elephant safaris to spot the iconic one-horned rhino in lush green grasslands.",
    img: "https://source.unsplash.com/900x700/?rhino,safari,assam",
    duration: "Half day",
    priceFrom: 1899,
    highlights: ["Jeep safari", "Rhino sightings", "Round-trip transfers"],
  },
  {
    slug: "assam-state-zoo",
    name: "Assam State Zoo & Botanical Garden",
    tagline: "Tropical wildlife in the city",
    description:
      "One of the largest zoos in the North East, home to rhinos, tigers, and rare birds set within a green botanical garden.",
    img: "https://source.unsplash.com/900x700/?zoo,tiger,wildlife",
    duration: "2–3 hrs",
    priceFrom: 499,
    highlights: ["Guided walk", "Family friendly", "Entry assistance"],
  },
  {
    slug: "guwahati-tea-gardens",
    name: "Guwahati Tea Gardens",
    tagline: "Walk through misty Assam tea estates",
    description:
      "Experience the lush, rolling tea estates around Guwahati with a guided walk, tea tasting and insights into Assam's world-famous brew.",
    img: "https://source.unsplash.com/900x700/?assam,tea,garden",
    duration: "3 hrs",
    priceFrom: 899,
    highlights: ["Tea tasting", "Estate walk", "Local guide"],
  },
];

// Options used by the Itinerary Builder
export const cabOptions = [
  { id: "hatchback", label: "Hatchback (up to 3)", price: 1200 },
  { id: "sedan", label: "Sedan (up to 4)", price: 1800 },
  { id: "suv", label: "SUV / Innova (up to 6)", price: 2800 },
];

export const hotelOptions = [
  { id: "budget", label: "Budget Stay (3★)", price: 1500 },
  { id: "premium", label: "Premium Hotel (4★)", price: 3200 },
  { id: "luxury", label: "Luxury Resort (5★)", price: 6500 },
];

export const templeVisitOptions = destinations
  .filter((d) =>
    ["kamakhya-temple", "umananda-temple", "brahmaputra-cruise"].includes(d.slug)
  )
  .map((d) => ({ id: d.slug, label: d.name, price: d.priceFrom }));

// Extra detail content for per-destination pages
export const destinationDetails: Record<
  string,
  { gallery: string[]; included: string[]; timings: string; bestTime: string }
> = {
  "kamakhya-temple": {
    gallery: [
      "https://source.unsplash.com/800x600/?kamakhya,temple",
      "https://source.unsplash.com/800x600/?assam,shrine",
      "https://source.unsplash.com/800x600/?nilachal,hill",
    ],
    included: ["Local guide", "Darshan assistance", "Hotel pickup & drop"],
    timings: "5:30 AM – 10:00 PM",
    bestTime: "Oct – Apr (avoid Ambubachi Mela crowds unless desired)",
  },
  "umananda-temple": {
    gallery: [
      "https://source.unsplash.com/800x600/?umananda,island",
      "https://source.unsplash.com/800x600/?brahmaputra,ferry",
      "https://source.unsplash.com/800x600/?peacock,island",
    ],
    included: ["Return ferry ride", "Local guide", "Photography stops"],
    timings: "6:00 AM – 5:00 PM",
    bestTime: "Oct – Mar",
  },
  "brahmaputra-cruise": {
    gallery: [
      "https://source.unsplash.com/800x600/?brahmaputra,sunset",
      "https://source.unsplash.com/800x600/?river,cruise",
      "https://source.unsplash.com/800x600/?assam,boat",
    ],
    included: ["Onboard refreshments", "Live cultural music", "Sunset timing"],
    timings: "Sunset departures (approx. 4:30 PM)",
    bestTime: "Year-round; clearest skies Nov – Feb",
  },
  "pobitora-sanctuary": {
    gallery: [
      "https://source.unsplash.com/800x600/?rhino,assam",
      "https://source.unsplash.com/800x600/?safari,jeep",
      "https://source.unsplash.com/800x600/?grassland,wildlife",
    ],
    included: ["Jeep safari", "Round-trip transfers", "Park entry assistance"],
    timings: "Safari slots: morning & afternoon",
    bestTime: "Nov – Mar",
  },
  "assam-state-zoo": {
    gallery: [
      "https://source.unsplash.com/800x600/?zoo,tiger",
      "https://source.unsplash.com/800x600/?botanical,garden",
      "https://source.unsplash.com/800x600/?wildlife,birds",
    ],
    included: ["Guided walk", "Entry assistance", "Family-friendly route"],
    timings: "8:00 AM – 4:30 PM (closed Fri)",
    bestTime: "Oct – Mar",
  },
  "guwahati-tea-gardens": {
    gallery: [
      "https://source.unsplash.com/800x600/?tea,garden",
      "https://source.unsplash.com/800x600/?assam,tea",
      "https://source.unsplash.com/800x600/?tea,estate",
    ],
    included: ["Tea tasting", "Estate walk", "Local guide"],
    timings: "Day visits (9:00 AM – 4:00 PM)",
    bestTime: "Mar – May (plucking season)",
  },
};
