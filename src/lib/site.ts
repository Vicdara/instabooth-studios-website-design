export const photos = (id: number | string, width = 1200) => {
  if (typeof id === "string") {
    if (id.startsWith("/") || id.startsWith("http")) return id;
    return `/instagram_photos/${id}`;
  }
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
};

export const site = {
  name: "Instabooth Studios",
  shortName: "Instabooth",
  wordmark: "Instabooth",
  suffix: "Studios",
  tagline: "Portrait studio, film crew and costume rental in Sabo, Yaba.",
  description:
    "Instabooth Studios is a photography, video and costume rental studio at Commercial Avenue, Sabo, Yaba, Lagos. Book a portrait sitting, brand shoot, event coverage or a costume fitting.",
  address: {
    lead: "1–11 Commercial Avenue",
    area: "Sabo, Yaba",
    city: "Lagos",
    country: "Nigeria",
    full: "1–11 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria",
    note: "The exact suite is shared when your session is confirmed. Call ahead before visiting.",
  },
  mapQuery: "Commercial Avenue, Sabo, Yaba, Lagos, Nigeria",
  mapEmbed:
    "https://www.google.com/maps?q=Commercial+Avenue,+Sabo,+Yaba,+Lagos,+Nigeria&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Commercial+Avenue,+Sabo,+Yaba,+Lagos,+Nigeria",
  phones: [
    {
      display: "+234 818 875 7888",
      href: "tel:+2348188757888",
      whatsapp: "2348188757888",
      label: "Main line",
    },
    {
      display: "+234 909 787 5736",
      href: "tel:+2349097875736",
      whatsapp: "2349097875736",
      label: "Second line",
    },
  ],
  email: "instaboothnigeria@gmail.com",
  instagram: "https://www.instagram.com/instabooth_studios/",
  instagramHandle: "@instabooth_studios",
  hours: [
    { day: "Monday – Friday", time: "9:00 – 19:00" },
    { day: "Saturday", time: "9:00 – 18:00" },
    { day: "Sunday", time: "By appointment" },
  ],
  hoursNote: "Sessions run by appointment. Message the studio to confirm today's opening hours.",
} as const;

export const primaryPhone = site.phones[0];

export const whatsappLink = (
  phone: string = primaryPhone.whatsapp,
  message = "Hello Instabooth Studios, I would like to book a session.",
) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/costumes", label: "Costumes" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
  includes: string[];
  duration: string;
  image: number | string;
  tag: string;
};

export const services: Service[] = [
  {
    id: "studio-portraiture",
    name: "Studio Portraiture",
    eyebrow: "01",
    summary:
      "Editorial portraits, headshots and personal-brand sets, lit and directed in our Yaba studio.",
    detail:
      "Come with a mood; we handle the light. Every sitting includes guided posing, a look change and a colour-graded, retouched gallery you can actually use.",
    includes: [
      "1–3 looks in one sitting",
      "Professional lighting & direction",
      "Retouched hi-resolution gallery",
      "Personal-brand and headshot options",
    ],
    duration: "60–180 minutes",
    image: "20260209_101934_DUiJefXCEwy_1.webp",
    tag: "Most booked",
  },
  {
    id: "photography-video",
    name: "Photography & Video",
    eyebrow: "02",
    summary:
      "On-location coverage and motion production for weddings, events, brands and creators.",
    detail:
      "Photo and film teams work together so your coverage has one look. Weddings, celebrations, campaign content and social-first video, shot across Lagos and beyond.",
    includes: [
      "Event & wedding coverage",
      "Brand films and social cutdowns",
      "Two-person photo + video crew",
      "Edited stills and motion deliverables",
    ],
    duration: "From 4 hours",
    image: "20260503_131339_DX4LTM_oL_T.jpg",
    tag: "Lagos & beyond",
  },
  {
    id: "costume-rental",
    name: "Costume Rental",
    eyebrow: "03",
    summary:
      "Aso-oke, lace, gele and editorial pieces available to rent with styling support.",
    detail:
      "Traditional and contemporary pieces, fitted in-studio before your shoot. Mix a costume with a sitting or rent it for your own production and event.",
    includes: [
      "Traditional, bridal & editorial pieces",
      "Gele and accessory styling",
      "In-studio fitting before the shoot",
      "Rental terms confirmed at fitting",
    ],
    duration: "45-minute fitting",
    image: "/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp",
    tag: "Fitting included",
  },
  {
    id: "event-photobooth",
    name: "Event Photobooth",
    eyebrow: "04",
    summary:
      "A hosted photobooth with prints, props and a backdrop that guests remember.",
    detail:
      "We bring the booth, the light and the energy. Prints, props, backdrops and an attendant are arranged around your event, indoors or outdoors.",
    includes: [
      "Prints and props",
      "Backdrop styling",
      "Attendant for your event window",
      "Digital copies after the event",
    ],
    duration: "2–5 hours",
    image: "20260911_061551_DcwPS_hI9FP.webp",
    tag: "Ask about dates",
  },
  {
    id: "studio-hire",
    name: "Studio & Set Hire",
    eyebrow: "05",
    summary:
      "Hire the space, backdrops and lighting for your own shoot, class or content day.",
    detail:
      "Blackout-ready room, seamless backdrops, strobe and continuous light, modifiers and a changing corner. Bring your crew, or ask for ours.",
    includes: [
      "Studio room with backdrops",
      "Strobe and continuous lighting",
      "Changing area and mirrors",
      "Power backup on set",
    ],
    duration: "Hourly or full day",
    image: "20260909_060520_DdDk8YHCArl_2.webp",
    tag: "For creatives",
  },
  {
    id: "creative-direction",
    name: "Creative Direction",
    eyebrow: "06",
    summary:
      "Concepts, styling direction and post-production from first moodboard to final frame.",
    detail:
      "A full creative slab: references, palette, styling notes, shoot-day direction, retouch and album layout. Useful for launches, campaigns and portfolio builds.",
    includes: [
      "Concept and moodboard",
      "Styling and palette planning",
      "High-end retouch",
      "Album and social layouts",
    ],
    duration: "Project based",
    image: "20260504_080915_DX6NVhDCDOd_2.webp",
    tag: "End to end",
  },
];

export type Pack = {
  name: string;
  bestFor: string;
  prices: { detail: string; amount: string }[];
  note?: string;
  featured?: boolean;
  badge?: string;
};

export const packages: Pack[] = [
  {
    name: "Personal Shoot",
    bestFor: "Portraits, birthdays and personal branding",
    prices: [
      { detail: "1 outfit · 3 edited pictures", amount: "₦18,000" },
      { detail: "2 outfits · 6 edited pictures", amount: "₦33,000" },
      { detail: "3 outfits · 9 edited pictures", amount: "₦45,000" },
    ],
  },
  {
    name: "Makeup & Photography",
    bestFor: "A styled shoot with makeup and photography",
    prices: [
      { detail: "1 outfit · 3 edited pictures", amount: "₦36,000" },
      { detail: "2 outfits · 6 edited pictures", amount: "₦51,000" },
      { detail: "3 outfits · 9 edited pictures", amount: "₦63,000" },
      { detail: "Makeup only", amount: "₦18,000" },
    ],
    featured: true,
    badge: "Makeup included",
  },
  {
    name: "Couple Shoot",
    bestFor: "Portraits for two, from one look to three",
    prices: [
      { detail: "1 outfit · 2 edited pictures", amount: "₦30,000" },
      { detail: "2 outfits · 4 edited pictures", amount: "₦40,000" },
      { detail: "3 outfits · 6 edited pictures", amount: "₦60,000" },
    ],
  },
  {
    name: "Family Shoot",
    bestFor: "Family portraits and shared milestones",
    prices: [
      { detail: "1 outfit · 2 edited pictures", amount: "₦30,000" },
      { detail: "2 outfits · 5 edited pictures", amount: "₦50,000" },
      { detail: "3 outfits · 7 edited pictures", amount: "₦70,000" },
    ],
  },
  {
    name: "Item Product Shoot",
    bestFor: "Product-only images for your catalogue",
    prices: [{ detail: "Every 5 items", amount: "₦35,000" }],
    note: "Editing is not included. Add ₦2,000 per edited image.",
  },
  {
    name: "Model Product Shoot",
    bestFor: "Products photographed on a model",
    prices: [{ detail: "Every 5 outfits", amount: "₦30,000" }],
    note: "Each extra outfit: ₦5,000 · Each edited picture: ₦3,000.",
  },
];

export const addOns = [
  "Extra retouched image",
  "Additional look",
  "Make-up artist",
  "Gele tying",
  "Costume rail access",
  "Express 48-hour delivery",
  "Print and album pack",
  "Weekend or after-hours slot",
];

export const sessionTimes = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export type GalleryImage = {
  id: number | string;
  title: string;
  category: "Editorial" | "Portraits" | "Traditional" | "Costume" | "Couples & Family";
  aspect: "portrait" | "landscape" | "square";
  note: string;
};

export const gallery: GalleryImage[] = [
  // --- Portraits (Men, Women, Kids, Birthday, Headshots) ---
  {
    id: "20260209_101934_DUiJefXCEwy_1.webp",
    title: "Earthy Serenity",
    category: "Portraits",
    aspect: "portrait",
    note: "Seated female portrait in relaxed white linen against warm textured backdrop",
  },
  {
    id: "20261102_082007_DfO3QbUiHTP_3.webp",
    title: "Amber Glow",
    category: "Portraits",
    aspect: "portrait",
    note: "Radiant laughing sitting in vibrant orange silk with statement gold jewellery",
  },
  {
    id: "20260611_082651_DZcFju7DWCh_1.webp",
    title: "Princess Hour",
    category: "Portraits",
    aspect: "portrait",
    note: "Instabooth Kids sitting in ruffled ivory rosette dress and floral crystal tiara",
  },
  {
    id: "20260611_082651_DZcFju7DWCh_2.webp",
    title: "Playful Bloom",
    category: "Portraits",
    aspect: "portrait",
    note: "Children birthday sitting featuring pink heart bag and beaded jewellery",
  },
  {
    id: "20260909_060520_DdDk8YHCArl_1.webp",
    title: "Desert Sand Gaze",
    category: "Portraits",
    aspect: "portrait",
    note: "Close crop menswear editorial headshot in clean sand zip tunic",
  },
  {
    id: "20260306_113240_DVipt3WCFUn_4.webp",
    title: "Pure Radiance",
    category: "Portraits",
    aspect: "portrait",
    note: "Mother seated portrait in tailored ivory trousers, silk blouse and white heels",
  },
  {
    id: "20260306_113240_DVipt3WCFUn_5.webp",
    title: "Burgundy Tunic",
    category: "Portraits",
    aspect: "portrait",
    note: "Men's clean traditional sitting in rich wine tunic with gold watch styling",
  },
  {
    id: "20260917_062531_DdYNn99CAXk_1.webp",
    title: "Iconic Birthday",
    category: "Portraits",
    aspect: "portrait",
    note: "Celebration portrait sitting in double denim with personalized pastel cake",
  },
  {
    id: "20261022_104446_DeyzEPXCFjK_1.webp",
    title: "Party Hat Poise",
    category: "Portraits",
    aspect: "portrait",
    note: "Cozy knitwear birthday portrait with party cone hat and berry lip finish",
  },
  {
    id: "20261027_063005_De_N9m_iBtG_3.webp",
    title: "White Linen Stool",
    category: "Portraits",
    aspect: "portrait",
    note: "Full-length studio sitting on dark wood stool in tailored white coordinates",
  },
  {
    id: "20261031_070040_DfJkhT7iFtO_1.webp",
    title: "Midnight Shimmer",
    category: "Portraits",
    aspect: "portrait",
    note: "Low-key glamorous studio portrait in glittering black evening gown",
  },
  {
    id: "20261031_230546_DezA1g_Ih1B.webp",
    title: "Midnight Wish",
    category: "Portraits",
    aspect: "portrait",
    note: "Playful birthday milestone sitting in off-shoulder sheer sleeve top",
  },
  {
    id: "20260209_101934_DUiJefXCEwy_2.webp",
    title: "Poise & Cane",
    category: "Portraits",
    aspect: "portrait",
    note: "Profile sitting on teak cane armchair in effortless monochrome styling",
  },

  // --- Couples & Family (Intimate, Milestone, Multi-generation) ---
  {
    id: "20260306_113240_DVipt3WCFUn_2.webp",
    title: "Family Smile",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Intimate family portrait trio with mother, father and beaming daughter",
  },
  {
    id: "20260306_113240_DVipt3WCFUn_3.webp",
    title: "Hand in Hand",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Full-length family studio sitting holding hands in coordinated tones",
  },
  {
    id: "20260612_080053_DZenVI1iNWT.webp",
    title: "Two Hearts",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Intimate laughter study of couple sharing a joyous nose-to-nose moment",
  },
  {
    id: "20260614_080015_DZjw-JniKyv_1.webp",
    title: "Together in White",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Minimalist maternity couple sitting in pure white tailored looks",
  },
  {
    id: "20260911_061551_DcwPS_hI9FP.webp",
    title: "The Full Generation",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Six-person family sitting in iconic matching white button-ups and classic denim",
  },
  {
    id: "20260218_115729_DU5fxGoiBM7.jpg",
    title: "The Dynasty",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Three-generation family milestone celebration with matriarch and grandchildren",
  },
  {
    id: "20261028_065021_Dey_DtvIcLd.webp",
    title: "Generations of Grace",
    category: "Couples & Family",
    aspect: "portrait",
    note: "Extended family studio portrait with parents in traditional velvet lace",
  },

  // --- Editorial & Fashion ---
  {
    id: "20260504_080915_DX6NVhDCDOd_2.webp",
    title: "Shadow & Tint",
    category: "Editorial",
    aspect: "portrait",
    note: "Menswear fashion study: black structured tailoring, red lens shades, leather boots",
  },
  {
    id: "20260909_060520_DdDk8YHCArl_2.webp",
    title: "Desert Line",
    category: "Editorial",
    aspect: "portrait",
    note: "Full-length editorial movement in desert sand linen trousers and dark loafers",
  },
  {
    id: "20261105_081147_DfWkr-0CH_f_2.webp",
    title: "Sky Blue Chiffon",
    category: "Editorial",
    aspect: "portrait",
    note: "Full-length motion study in ruffled sky-blue chiffon gown beside studio palm",
  },

  // --- Traditional & Costumes (Ceremonial, Aso-Oke, Gele, Bridal) ---
  {
    id: "20260503_131339_DX4LTM_oL_T.jpg",
    title: "Emerald Union",
    category: "Traditional",
    aspect: "square",
    note: "Couple celebration in matching emerald green sequined traditional attire",
  },
  {
    id: "/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp",
    title: "Royal Crimson Agbada",
    category: "Traditional",
    aspect: "portrait",
    note: "Regal crimson Aso-Oke Agbada with embroidered motifs, layered coral beads and Fila",
  },
  {
    id: "/instagram_photos/costumes/20251129_140951_DRpKmLCCPyn_1.webp",
    title: "Crimson Fan Gele",
    category: "Traditional",
    aspect: "portrait",
    note: "Sculpted crimson fan gele with patterned blue corset and authentic coral beads",
  },
  {
    id: "/instagram_photos/costumes/20260206_073734_DUaIfyaiLAE.jpg",
    title: "Amethyst Lace & Gele",
    category: "Traditional",
    aspect: "portrait",
    note: "Lavender embellished lace buba styled with purple striped Aso-Oke headwrap",
  },
  {
    id: "/instagram_photos/costumes/20241128_201729_DC7ZulxosZ7_1.webp",
    title: "Ivory Wing Gown",
    category: "Costume",
    aspect: "portrait",
    note: "Architectural one-shoulder bridal gown with silver beading and draped wing cape",
  },
  {
    id: "/instagram_photos/costumes/20250422_102345_DIvtC1aIGVx_2.webp",
    title: "Bronze Empress Tulle",
    category: "Costume",
    aspect: "portrait",
    note: "Dramatic chocolate bronze tulle maternity gown with gold beaded corset bustier",
  },
  {
    id: "/instagram_photos/costumes/20250322_092511_DHfxsw3oBUt_6.webp",
    title: "Royal Blue Ade Tola",
    category: "Traditional",
    aspect: "portrait",
    note: "Toddler royal blue Aso-Oke Agbada set with sunglasses, coral beads and irukere",
  },
];

export const galleryCategories = [
  "All",
  "Portraits",
  "Couples & Family",
  "Editorial",
  "Traditional",
  "Costume",
] as const;

export type Costume = {
  id: number | string;
  name: string;
  category: "Bridal & Lace" | "Aso-Oke & Ankara" | "Gele & Headwear" | "Editorial";
  note: string;
  tags: string[];
};

export const costumes: Costume[] = [
  {
    id: "/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp",
    name: "Royal Crimson Agbada",
    category: "Aso-Oke & Ankara",
    note: "Regal crimson Aso-Oke Agbada featuring hand-stitched traditional embroidery, paired with layered coral beads, red tinted shades, and a coordinating beaded Fila.",
    tags: ["Aso-Oke", "Agbada", "Royal", "Coral Beads"],
  },
  {
    id: "/instagram_photos/costumes/20251129_140951_DRpKmLCCPyn_1.webp",
    name: "Imperial Gele & Corset",
    category: "Gele & Headwear",
    note: "Sculpted fan gele in vivid crimson paired with an authentic patterned corset buba, striped Aso-Oke iro wrapper, and cascading coral beads.",
    tags: ["Gele", "Bridal", "Corset", "Traditional"],
  },
  {
    id: "/instagram_photos/costumes/20260206_073734_DUaIfyaiLAE.jpg",
    name: "Royal Amethyst Lace & Gele",
    category: "Bridal & Lace",
    note: "Intricately embellished lavender lace buba styled with a multi-striped Aso-Oke headwrap, layered coral necklaces, and gold filigree accents.",
    tags: ["Bridal", "Lace", "Gele", "Coral"],
  },
  {
    id: "/instagram_photos/costumes/20241128_201729_DC7ZulxosZ7_1.webp",
    name: "Ivory Wing Bridal Gown",
    category: "Bridal & Lace",
    note: "Architectural one-shoulder bridal gown in pure ivory with silver-beaded neckline trimming and an asymmetric draped wing cape.",
    tags: ["Bridal", "Couture", "Cape", "Reception"],
  },
  {
    id: "/instagram_photos/costumes/20241128_201729_DC7ZulxosZ7_4.webp",
    name: "Chartreuse Organza Bloom",
    category: "Editorial",
    note: "High-fashion puff-sleeved sheer organza top featuring botanical embroidery and bow tie, styled with satin tailored trousers.",
    tags: ["Editorial", "Organza", "High Fashion", "Lagos"],
  },
  {
    id: "/instagram_photos/costumes/20250317_095906_DHS9mz0o7zW_2.webp",
    name: "Golden Olive Silk Robe",
    category: "Editorial",
    note: "Fluid floor-length silk kimono robe in luminous golden chartreuse with a cinched sash belt, high slit, and gold jewellery styling.",
    tags: ["Editorial", "Silk", "Boudoir", "Statement"],
  },
  {
    id: "/instagram_photos/costumes/20250322_092511_DHfxsw3oBUt_3.webp",
    name: "Miniature Prince Aso-Oke",
    category: "Aso-Oke & Ankara",
    note: "Handcrafted miniature striped Aso-Oke dashiki set tailored for toddlers, complete with silver chest embroidery and coral neck beads.",
    tags: ["Toddler", "Aso-Oke", "1st Birthday", "Heritage"],
  },
  {
    id: "/instagram_photos/costumes/20250322_092511_DHfxsw3oBUt_6.webp",
    name: "Royal Blue Agbada & Fila",
    category: "Aso-Oke & Ankara",
    note: "Deep royal blue textured Aso-Oke Agbada with matching Fila cap, coral anklets, sunglasses, and horsetail irukere for milestone birthdays.",
    tags: ["Aso-Oke", "Agbada", "Kids Royalty", "Ceremony"],
  },
  {
    id: "/instagram_photos/costumes/20250422_102345_DIvtC1aIGVx_2.webp",
    name: "Bronze Empress Tulle",
    category: "Editorial",
    note: "Dramatic chocolate bronze layered tulle maternity gown with an ornate metallic gold corset bustier and tribal brass neck choker.",
    tags: ["Maternity", "Tulle", "Corset", "Editorial"],
  },
  {
    id: "/instagram_photos/costumes/20251104_073342_DQoFYxpiHJ5_1.webp",
    name: "Lilac Asymmetric Mesh",
    category: "Editorial",
    note: "Contemporary lilac printed mesh evening dress with asymmetric neckline, flare cuffs, and chunky gold statement accessories.",
    tags: ["Editorial", "Contemporary", "Lilac", "Fashion"],
  },
  {
    id: "/instagram_photos/costumes/20260204_091234_DUVJ1dyiAXt_2.webp",
    name: "Avant-Garde Bermuda Tux",
    category: "Editorial",
    note: "Sharp tailored double-breasted tuxedo jacket paired with architectural Bermuda shorts and polished oxblood brogues.",
    tags: ["Menswear", "Tailoring", "Editorial", "Modern"],
  },
  {
    id: "/instagram_photos/costumes/20250808_152445_DNGVRE-IBEa.jpg",
    name: "Heritage Brocade Agbada",
    category: "Aso-Oke & Ankara",
    note: "Youth ceremonial champagne gold floral brocade Agbada ensemble with embroidered chest panel, staff, and beaded accents.",
    tags: ["Traditional", "Brocade", "Agbada", "Kids"],
  },
];

export const costumeCategories = ["All", "Bridal & Lace", "Aso-Oke & Ankara", "Gele & Headwear", "Editorial"] as const;

export const studioImages: (string | number)[] = [
  "20261028_065021_Dey_DtvIcLd.webp",
  "20261102_082007_DfO3QbUiHTP_3.webp",
  "20260909_060520_DdDk8YHCArl_2.webp",
  "20260504_080915_DX6NVhDCDOd_2.webp",
  "20260611_082651_DZcFju7DWCh_1.webp",
  "20260306_113240_DVipt3WCFUn_2.webp",
  "20261027_063005_De_N9m_iBtG_3.webp",
  "20261105_081147_DfWkr-0CH_f_2.webp",
];

export const studioFeatures = [
  { title: "Blackout-ready room", note: "Control daylight and build the light you actually want." },
  { title: "Seamless backdrops", note: "Neutral, black and colour papers swapped on set." },
  { title: "Strobe & continuous light", note: "Studio strobes, LED panels, softboxes, grids and reflectors." },
  { title: "Changing corner", note: "Full-length mirror, rail and space to get event-ready." },
  { title: "Power backup", note: "A session does not stop because the grid does." },
  { title: "Yaba location", note: "On Commercial Avenue, reachable from Yaba, Ebute Metta and Surulere." },
];

export const process = [
  {
    step: "01",
    title: "Tell us the idea",
    text: "Send a message with the service, date and mood you have in mind. Screenshots and references are welcome.",
  },
  {
    step: "02",
    title: "Plan and quote",
    text: "We reply with availability, a clear quote and what is included. No surprise line items; add-ons are agreed before the day.",
  },
  {
    step: "03",
    title: "Shoot day",
    text: "Arrive to a set room, a styled rail and direction from the first frame. Costume fittings are handled before the sitting when needed.",
  },
  {
    step: "04",
    title: "Delivery",
    text: "You receive a private gallery and retouched favourites. Standard turnaround is 10–14 working days, with an express option available.",
  },
];

export const stats = [
  { value: 6, suffix: "", label: "Creative services", note: "Under one roof in Yaba" },
  { value: 24, suffix: "h", label: "Quote turnaround", note: "Usually same working day" },
  { value: 2, suffix: "", label: "Direct phone lines", note: "Call or WhatsApp" },
  { value: 48, suffix: "h", label: "Express delivery", note: "On request after the shoot" },
];

export const faqs = [
  {
    q: "Where exactly is Instabooth Studios?",
    a: "We are on Commercial Avenue, Sabo, Yaba, Lagos. The exact suite is confirmed when your session is booked so you are not walking a corridor looking for us. Call or WhatsApp ahead before any visit.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes. Sessions and studio hire are by appointment so the room, lighting and team are ready for you. Message either phone line with your preferred date and we will confirm the slot.",
  },
  {
    q: "What do sessions cost?",
    a: "Rates depend on the service, duration, number of looks, costume pieces and whether photo or video crew is required. Send your brief and you will get a written quote, usually within 24 hours.",
  },
  {
    q: "Can I rent a costume without booking a shoot?",
    a: "Yes, costume rental is available on its own, subject to fit and availability. Tell us the look, your date and measurements, and we will arrange a fitting before the rental.",
  },
  {
    q: "Do you shoot outside the studio?",
    a: "Yes. Weddings, events, brand films and location portraits are covered across Lagos and beyond. Travel outside Yaba can add a location fee, which is quoted up front.",
  },
  {
    q: "How long until I get my photos?",
    a: "Standard delivery is 10–14 working days after a sitting. Express 48-hour delivery can be arranged on request. Event galleries are quoted with a delivery window in writing.",
  },
  {
    q: "Is make-up or styling included?",
    a: "Make-up, gele tying, styling and additional looks can be added to any package. We can also work with your own artist. Let us know in the booking brief so the day is planned properly.",
  },
  {
    q: "Which phone number should I use?",
    a: "The main line is +234 818 875 7888. The second line, +234 909 787 5736, is also available for calls and WhatsApp. If one is busy on set, try the other.",
  },
];

export const contactTopics = [
  "Book a session",
  "Costume rental",
  "Studio hire",
  "Event photobooth",
  "Brand / campaign",
  "Collaboration",
  "Something else",
];

export const serviceOptions = [
  "Studio Portraiture",
  "Photography & Video",
  "Costume Rental",
  "Event Photobooth",
  "Studio & Set Hire",
  "Creative Direction",
  "Not sure yet",
];

export const lookbookQuote = {
  text: "Lagos is the backdrop. The studio is where we slow it down, dress the frame and make it last.",
  attribution: "Instabooth Studios",
};
