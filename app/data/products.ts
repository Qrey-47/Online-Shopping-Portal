// /app/data/products.ts

export const products = [
  // ===== Shop (General/Unisex) =====
  {
    name: "Organic Shampoo",
    slug: "organic-shampoo",
    image: "/organicshampoo.jpg",
    price: "$20",
    originalPrice: "$25",
    badge: "Best Seller",
    category: "shop",
    description: "Nourishing shampoo made with natural plant extracts.",
    ingredients: ["Aloe Vera", "Neem Extract", "Coconut Oil", "Herbal Proteins"],
    benefits: [
      "Strengthens hair roots",
      "Reduces dandruff naturally",
      "Adds shine and softness",
      "Safe for daily use"
    ],
    howToUse: "Apply to wet hair, massage into scalp, rinse thoroughly.",
    faq: [
      { q: "Is it safe for colored hair?", a: "Yes, it is sulfate-free and safe for colored hair." },
      { q: "Can I use it daily?", a: "Yes, it’s gentle enough for everyday use." }
    ],
    rating: 4.6,
    reviews: 120
  },
  {
    name: "Herbal Conditioner",
    slug: "herbal-conditioner",
    image: "/images/shop/herbal-conditioner.jpg",
    price: "$22",
    originalPrice: "$28",
    badge: "New",
    category: "shop",
    description: "Moisturizing conditioner with herbal oils for silky smooth hair.",
    ingredients: ["Shea Butter", "Jojoba Oil", "Hibiscus Extract"],
    benefits: [
      "Deeply hydrates hair",
      "Prevents frizz and dryness",
      "Improves softness and shine"
    ],
    howToUse: "Apply after shampoo, leave for 2–3 minutes, rinse well.",
    faq: [
      { q: "Does it help with frizz?", a: "Yes, it locks in moisture and reduces frizz." },
      { q: "Is it suitable for oily hair?", a: "Yes, it balances hydration without greasiness." }
    ],
    rating: 4.4,
    reviews: 80
  },
  {
    name: "Aloe Vera Gel",
    slug: "aloe-vera-gel",
    image: "/images/shop/aloe-vera-gel.jpg",
    price: "$15",
    originalPrice: "$18",
    badge: "Trending",
    category: "shop",
    description: "Pure aloe vera gel for soothing and hydrating skin.",
    ingredients: ["100% Pure Aloe Vera", "Vitamin E"],
    benefits: [
      "Soothes sunburn instantly",
      "Hydrates and refreshes skin",
      "Reduces redness and irritation"
    ],
    howToUse: "Apply directly to skin or hair as needed.",
    faq: [
      { q: "Can it be used on hair?", a: "Yes, it works as a natural conditioner." },
      { q: "Does it have chemicals?", a: "No, it is 100% natural and safe." }
    ],
    rating: 4.7,
    reviews: 200
  },
  {
    name: "Essential Oil Pack",
    slug: "essential-oil-pack",
    image: "/images/shop/essential-oil-pack.jpg",
    price: "$30",
    originalPrice: "$38",
    badge: "Top Rated",
    category: "shop",
    description: "Set of essential oils for relaxation and wellness.",
    ingredients: ["Lavender Oil", "Tea Tree Oil", "Eucalyptus Oil", "Peppermint Oil"],
    benefits: [
      "Relieves stress and tension",
      "Improves sleep quality",
      "Boosts skin and hair health"
    ],
    howToUse: "Use a few drops in diffuser, bath, or massage oil.",
    faq: [
      { q: "Are they pure oils?", a: "Yes, all oils are 100% pure and undiluted." },
      { q: "Can I apply directly on skin?", a: "Always dilute with carrier oil before applying." }
    ],
    rating: 4.8,
    reviews: 95
  },
  {
    name: "Herbal Soap Set",
    slug: "herbal-soap-set",
    image: "/images/shop/herbal-soap-set.jpg",
    price: "$18",
    originalPrice: "$22",
    badge: "",
    category: "shop",
    description: "Pack of 4 handmade herbal soaps with natural fragrance.",
    ingredients: ["Turmeric", "Sandalwood", "Neem", "Rose Petals"],
    benefits: [
      "Cleanses skin gently",
      "Prevents acne naturally",
      "Leaves skin soft and fresh"
    ],
    howToUse: "Use daily on face and body for best results.",
    faq: [
      { q: "Is it suitable for sensitive skin?", a: "Yes, it’s chemical-free and mild." },
      { q: "Does it have artificial fragrance?", a: "No, only natural extracts are used." }
    ],
    rating: 4.3,
    reviews: 60
  },

  // ===== Men =====
  {
    name: "Herbal Face Wash",
    slug: "herbal-face-wash",
    image: "/images/men/face-wash.jpg",
    price: "$20",
    originalPrice: "$25",
    badge: "Best Seller",
    category: "men",
    description: "Gentle face wash for daily use, removes dirt and impurities.",
    ingredients: ["Neem", "Aloe Vera", "Basil"],
    benefits: [
      "Removes oil and dirt",
      "Prevents pimples",
      "Keeps skin refreshed"
    ],
    howToUse: "Apply to wet face, massage gently, rinse off.",
    faq: [
      { q: "Can it be used daily?", a: "Yes, it’s safe for daily use." },
      { q: "Does it control acne?", a: "Yes, neem and basil help reduce acne." }
    ],
    rating: 4.5,
    reviews: 110
  },
  {
    name: "Charcoal Face Scrub",
    slug: "charcoal-face-scrub",
    image: "/images/men/charcoal-scrub.jpg",
    price: "$25",
    originalPrice: "$30",
    badge: "Trending",
    category: "men",
    description: "Exfoliating scrub with activated charcoal to unclog pores.",
    ingredients: ["Activated Charcoal", "Green Tea Extract", "Lemon Peel"],
    benefits: [
      "Removes dead skin",
      "Unclogs pores",
      "Brightens complexion"
    ],
    howToUse: "Use twice a week for deep cleansing.",
    faq: [
      { q: "Is it harsh on skin?", a: "No, it’s formulated to be gentle yet effective." },
      { q: "Can women use it?", a: "Yes, it’s suitable for all skin types." }
    ],
    rating: 4.6,
    reviews: 85
  },
  {
    name: "Vitamin C Serum",
    slug: "vitamin-c-serum",
    image: "/images/men/vitamin-c-serum.jpg",
    price: "$30",
    originalPrice: "$35",
    badge: "Top Rated",
    category: "men",
    description: "Brightening serum with Vitamin C to reduce dark spots.",
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Orange Extract"],
    benefits: [
      "Fades dark spots",
      "Boosts collagen",
      "Gives glowing skin"
    ],
    howToUse: "Apply 2–3 drops daily before moisturizer.",
    faq: [
      { q: "Can it be used at night?", a: "Yes, best results when used twice daily." },
      { q: "Does it cause irritation?", a: "No, it’s dermatologically tested and safe." }
    ],
    rating: 4.7,
    reviews: 140
  },
  {
    name: "Men’s Sunscreen SPF 50",
    slug: "mens-sunscreen-spf50",
    image: "/images/men/sunscreen.jpg",
    price: "$22",
    originalPrice: "$28",
    badge: "",
    category: "men",
    description: "Broad-spectrum sunscreen designed for men's skin.",
    ingredients: ["Zinc Oxide", "Aloe Vera", "Vitamin E"],
    benefits: [
      "Protects against UVA/UVB",
      "Non-greasy formula",
      "Hydrates skin"
    ],
    howToUse: "Apply generously 15 mins before sun exposure.",
    faq: [
      { q: "Is it waterproof?", a: "Yes, lasts up to 80 mins in water." },
      { q: "Does it leave a white cast?", a: "No, it blends easily with skin." }
    ],
    rating: 4.4,
    reviews: 70
  },
  {
    name: "Beard Care Oil",
    slug: "beard-care-oil",
    image: "/images/men/beard-oil.jpg",
    price: "$15",
    originalPrice: "$20",
    badge: "New",
    category: "men",
    description: "Nourishing oil to keep beard soft, healthy, and shiny.",
    ingredients: ["Argan Oil", "Jojoba Oil", "Vitamin E"],
    benefits: [
      "Softens beard hair",
      "Prevents itchiness",
      "Promotes healthy growth"
    ],
    howToUse: "Massage a few drops into beard daily.",
    faq: [
      { q: "Does it help with beard growth?", a: "Yes, it strengthens and stimulates growth." },
      { q: "Will it make beard greasy?", a: "No, it absorbs quickly." }
    ],
    rating: 4.5,
    reviews: 65
  },

  // ===== Women =====
  {
    name: "Rose Water Toner",
    slug: "rose-water-toner",
    image: "/images/women/rose-toner.jpg",
    price: "$15",
    originalPrice: "$20",
    badge: "Best Seller",
    category: "women",
    description: "Hydrating toner infused with natural rose extracts.",
    ingredients: ["Pure Rose Extract", "Aloe Vera"],
    benefits: [
      "Tightens pores",
      "Hydrates skin",
      "Soothes irritation"
    ],
    howToUse: "Spray or apply with cotton pad after cleansing.",
    faq: [
      { q: "Is it alcohol-free?", a: "Yes, 100% alcohol-free." },
      { q: "Can I use it as a face mist?", a: "Yes, it’s perfect for hydration anytime." }
    ],
    rating: 4.6,
    reviews: 90
  },
  {
    name: "Shea Butter Moisturizer",
    slug: "shea-butter-moisturizer",
    image: "/images/women/shea-moisturizer.jpg",
    price: "$22",
    originalPrice: "$28",
    badge: "New",
    category: "women",
    description: "Rich moisturizer with shea butter for soft, glowing skin.",
    ingredients: ["Shea Butter", "Cocoa Butter", "Vitamin E"],
    benefits: [
      "Deeply nourishes skin",
      "Repairs dryness",
      "Adds long-lasting glow"
    ],
    howToUse: "Apply daily on clean skin, massage gently.",
    faq: [
      { q: "Is it good for winters?", a: "Yes, it provides intense hydration." },
      { q: "Does it feel heavy?", a: "No, it’s rich but lightweight." }
    ],
    rating: 4.7,
    reviews: 100
  },
  {
    name: "Lavender Night Cream",
    slug: "lavender-night-cream",
    image: "/images/women/lavender-night-cream.jpg",
    price: "$28",
    originalPrice: "$35",
    badge: "Trending",
    category: "women",
    description: "Nourishing night cream to repair and hydrate skin overnight.",
    ingredients: ["Lavender Oil", "Shea Butter", "Vitamin C"],
    benefits: [
      "Relaxes skin overnight",
      "Repairs fine lines",
      "Boosts hydration"
    ],
    howToUse: "Apply nightly on cleansed face before sleeping.",
    faq: [
      { q: "Is it anti-aging?", a: "Yes, it reduces fine lines over time." },
      { q: "Will it suit oily skin?", a: "Yes, it’s non-greasy and lightweight." }
    ],
    rating: 4.5,
    reviews: 88
  },
  {
    name: "Vitamin E Face Oil",
    slug: "vitamin-e-face-oil",
    image: "/images/women/vitamin-e-oil.jpg",
    price: "$25",
    originalPrice: "$30",
    badge: "Top Rated",
    category: "women",
    description: "Lightweight oil to boost radiance and skin health.",
    ingredients: ["Vitamin E Oil", "Almond Oil", "Argan Oil"],
    benefits: [
      "Brightens skin",
      "Prevents dryness",
      "Improves elasticity"
    ],
    howToUse: "Apply 2–3 drops after cleansing, before bedtime.",
    faq: [
      { q: "Can I mix with moisturizer?", a: "Yes, it blends well with creams." },
      { q: "Will it clog pores?", a: "No, it’s lightweight and non-comedogenic." }
    ],
    rating: 4.6,
    reviews: 77
  },
  {
    name: "Brightening Face Mask",
    slug: "brightening-face-mask",
    image: "/images/women/brightening-mask.jpg",
    price: "$18",
    originalPrice: "$22",
    badge: "",
    category: "women",
    description: "Clay mask with turmeric and sandalwood for glowing skin.",
    ingredients: ["Turmeric", "Sandalwood", "Multani Mitti"],
    benefits: [
      "Brightens dull skin",
      "Removes excess oil",
      "Gives natural glow"
    ],
    howToUse: "Apply evenly, leave for 15 mins, rinse with lukewarm water.",
    faq: [
      { q: "How often can I use it?", a: "2–3 times per week for best results." },
      { q: "Does it cause dryness?", a: "No, it balances oil without drying." }
    ],
    rating: 4.5,
    reviews: 69
  },

  // ===== Kids =====
  {
    name: "Gentle Kids Face Wash",
    slug: "gentle-kids-face-wash",
    image: "/images/kids/kids-face-wash.jpg",
    price: "$12",
    originalPrice: "$15",
    badge: "Best Seller",
    category: "kids",
    description: "Mild face wash safe for kids’ delicate skin.",
    ingredients: ["Aloe Vera", "Chamomile", "Oat Extract"],
    benefits: [
      "Gentle cleansing",
      "Prevents dryness",
      "Soothes skin"
    ],
    howToUse: "Apply small amount, rinse with water.",
    faq: [
      { q: "Is it tear-free?", a: "Yes, specially formulated for kids." },
      { q: "From what age can it be used?", a: "Safe for kids above 3 years." }
    ],
    rating: 4.6,
    reviews: 55
  },
  {
    name: "Kids Aloe Moisturizer",
    slug: "kids-aloe-moisturizer",
    image: "/images/kids/kids-aloe-moisturizer.jpg",
    price: "$14",
    originalPrice: "$18",
    badge: "New",
    category: "kids",
    description: "Hydrating moisturizer with aloe vera for soft, healthy skin.",
    ingredients: ["Aloe Vera", "Cucumber Extract", "Shea Butter"],
    benefits: [
      "Hydrates skin",
      "Prevents rashes",
      "Keeps skin soft"
    ],
    howToUse: "Apply after bath on clean skin.",
    faq: [
      { q: "Is it fragrance-free?", a: "Yes, mild and natural fragrance only." },
      { q: "Can adults use it?", a: "Yes, especially good for sensitive skin." }
    ],
    rating: 4.5,
    reviews: 42
  },
  {
    name: "Kids Bubble Bath",
    slug: "kids-bubble-bath",
    image: "/images/kids/kids-bubble-bath.jpg",
    price: "$10",
    originalPrice: "$12",
    badge: "Trending",
    category: "kids",
    description: "Fun and gentle bubble bath for kids’ sensitive skin.",
    ingredients: ["Aloe Vera", "Lavender Oil", "Vitamin E"],
    benefits: [
      "Creates soft bubbles",
      "Cleanses gently",
      "Moisturizes skin"
    ],
    howToUse: "Add small amount to running water in tub.",
    faq: [
      { q: "Is it safe for daily use?", a: "Yes, very gentle on skin." },
      { q: "Does it sting eyes?", a: "No, it’s tear-free formula." }
    ],
    rating: 4.4,
    reviews: 60
  },
  {
    name: "Kids Sunscreen SPF 30",
    slug: "kids-sunscreen-spf30",
    image: "/images/kids/kids-sunscreen.jpg",
    price: "$18",
    originalPrice: "$22",
    badge: "",
    category: "kids",
    description: "Safe broad-spectrum sunscreen designed for children.",
    ingredients: ["Zinc Oxide", "Aloe Vera", "Shea Butter"],
    benefits: [
      "Protects from sunburn",
      "Gentle on sensitive skin",
      "Non-sticky formula"
    ],
    howToUse: "Apply before going outdoors, reapply every 2 hours.",
    faq: [
      { q: "Is it waterproof?", a: "Yes, water-resistant up to 60 minutes." },
      { q: "From what age can kids use?", a: "Safe for 3+ years." }
    ],
    rating: 4.5,
    reviews: 48
  },
  {
    name: "Kids Hair Detangler Spray",
    slug: "kids-hair-detangler-spray",
    image: "/images/kids/kids-hair-detangler.jpg",
    price: "$12",
    originalPrice: "$16",
    badge: "New",
    category: "kids",
    description: "Gentle hair spray to remove tangles easily.",
    ingredients: ["Aloe Vera", "Chamomile Extract", "Vitamin E"],
    benefits: [
      "Detangles hair without pulling",
      "Adds shine",
      "Safe for daily use"
    ],
    howToUse: "Spray on damp hair and comb gently.",
    faq: [
      { q: "Is it safe for scalp?", a: "Yes, dermatologically tested for kids." },
      { q: "Does it have fragrance?", a: "Light natural fragrance only." }
    ],
    rating: 4.6,
    reviews: 33
  },
  {
    name: "Kids Toothpaste",
    slug: "kids-toothpaste",
    image: "/images/kids/kids-toothpaste.jpg",
    price: "$8",
    originalPrice: "$10",
    badge: "Best Seller",
    category: "kids",
    description: "Fluoride-free toothpaste suitable for children.",
    ingredients: ["Xylitol", "Calcium Carbonate", "Natural Mint Extract"],
    benefits: [
      "Prevents cavities",
      "Safe if swallowed",
      "Gentle on gums"
    ],
    howToUse: "Use a pea-sized amount to brush teeth twice daily.",
    faq: [
      { q: "Is it fluoride-free?", a: "Yes, completely safe for kids." },
      { q: "Suitable for toddlers?", a: "Recommended for 2+ years." }
    ],
    rating: 4.7,
    reviews: 72
  },
  {
    name: "Kids Hair Shampoo",
    slug: "kids-hair-shampoo",
    image: "/images/kids/kids-hair-shampoo.jpg",
    price: "$14",
    originalPrice: "$18",
    badge: "Trending",
    category: "kids",
    description: "Mild shampoo with natural extracts for kids’ hair.",
    ingredients: ["Aloe Vera", "Chamomile", "Coconut Oil"],
    benefits: [
      "Cleans gently without tears",
      "Keeps hair soft and manageable",
      "Safe for daily use"
    ],
    howToUse: "Apply to wet hair, lather, rinse thoroughly.",
    faq: [
      { q: "Does it cause tears?", a: "No, specially formulated to be tear-free." },
      { q: "Can it be used daily?", a: "Yes, very mild and safe." }
    ],
    rating: 4.5,
    reviews: 50
  }
];
