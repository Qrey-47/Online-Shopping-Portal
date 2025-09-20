const products = [
  // --- Skincare ---
  {
    name: 'Herbal Face Wash',
    image: '/images/herbal-face-wash.png',
    longDescription: 'A multi-value, gentle face wash that works wonders. Meet SatvaSkin Herbal Face Wash, a hydrating, skin-repairing cleanser that nourishes with a gentle texture so skin looks and feels stronger and healthier. Formulated with natural herbs that help reinforce skin’s moisture barrier.',
    ingredients: ['Neem Extract: Purifies the skin and prevents breakouts.', 'Turmeric: Contains antioxidants and anti-inflammatory components.', 'Aloe Vera: Soothes and moisturizes the skin.'],
    howToUse: 'Moisten face, apply a small quantity of Face Wash and gently work up a lather using a circular motion. Wash off and pat dry. Use twice daily.',
    category: 'Skincare',
    variants: [
      { size: '50 ml', price: 99, countInStock: 100 },
      { size: '100 ml', price: 179, countInStock: 150 },
      { size: '150 ml', price: 249, countInStock: 80 },
    ],
  },
  {
    name: 'Rose Water Toner',
    image: '/images/rose-water-toner.png',
    longDescription: 'A refreshing rose water toner that hydrates and balances the skin’s pH. What makes it good: The natural astringent properties of rose help to tighten pores and gently tone the skin. It leaves your skin feeling fresh and revitalized.',
    ingredients: ['Rosa Damascena Flower Water: Known for its soothing and hydrating properties.', 'Glycerin: A humectant that attracts moisture to the skin.'],
    howToUse: 'After cleansing, spray directly on your face and neck, or on a cotton pad. Gently wipe your face in an upward motion. Follow with a moisturizer.',
    category: 'Skincare',
    variants: [
        { size: '100 ml', price: 149, countInStock: 120 },
        { size: '200 ml', price: 249, countInStock: 90 },
    ],
  },
  {
    name: 'Aloe Vera Gel Moisturizer',
    image: '/images/aloe-vera-gel-moisturizer.png',
    longDescription: 'A lightweight, non-greasy moisturizer made with pure aloe vera gel. This fast-absorbing gel provides instant hydration, soothes irritated skin, and helps reduce inflammation. Perfect for oily and acne-prone skin types.',
    ingredients: ['Pure Aloe Vera Gel: Soothes inflammation and redness.', 'Vitamin E: Provides antioxidant protection and nourishes the skin.'],
    howToUse: 'Apply a small amount to a clean face and neck after cleansing and toning. Can be used day and night.',
    category: 'Skincare',
    variants: [
      { size: '50 gm', price: 129, countInStock: 110 },
      { size: '100 gm', price: 229, countInStock: 85 },
    ],
  },
  {
    name: 'Vitamin C Serum',
    image: '/images/vitamin-c-serum.png',
    longDescription: 'A potent Vitamin C serum that brightens the skin, reduces dark spots, and fights signs of aging. Formulated with Hyaluronic Acid, it also provides a boost of hydration, leaving skin plump and radiant.',
    ingredients: ['3-O-Ethyl Ascorbic Acid (Vitamin C): A stable form of Vitamin C that brightens skin tone.', 'Hyaluronic Acid: Deeply hydrates and plumps the skin.', 'Ferulic Acid: An antioxidant that boosts the effects of Vitamin C.'],
    howToUse: 'Apply 2-3 drops to a clean, dry face in the morning. Follow with moisturizer and sunscreen.',
    category: 'Skincare',
    variants: [
      { size: '30 ml', price: 449, countInStock: 70 },
    ],
  },
  {
    name: 'Multani Mitti Face Pack',
    image: '/images/multani-mitti-face-pack.png',
    longDescription: 'A traditional clay mask featuring Multani Mitti (Fuller\'s Earth) that deep cleanses pores, absorbs excess oil, and improves skin tone. Regular use helps in preventing acne and pimples.',
    ingredients: ['Multani Mitti (Fuller\'s Earth): Absorbs excess oil and impurities.', 'Sandalwood Powder: Soothes the skin and provides a cooling effect.'],
    howToUse: 'Mix a small amount with rose water or plain water to form a paste. Apply evenly on face and neck, avoiding the eye area. Allow it to dry for 15 minutes, then rinse off.',
    category: 'Skincare',
    variants: [
      { size: '100 gm', price: 159, countInStock: 100 },
    ],
  },
  {
    name: 'Mineral Sunscreen SPF 30',
    image: '/images/mineral-sunscreen-spf-30.png',
    longDescription: 'A broad-spectrum mineral sunscreen that provides effective protection against UVA and UVB rays without harsh chemicals. Its non-greasy formula blends easily into the skin without leaving a white cast.',
    ingredients: ['Zinc Oxide: A natural mineral that provides physical sun protection.', 'Titanium Dioxide: Another mineral filter that blocks UV radiation.', 'Shea Butter: Moisturizes and nourishes the skin.'],
    howToUse: 'Apply liberally to all exposed skin 15 minutes before sun exposure. Reapply at least every 2 hours.',
    category: 'Skincare',
    variants: [
      { size: '50 gm', price: 349, countInStock: 100 },
    ],
  },
  // --- Lip Care ---
  {
    name: 'Shea Butter Lip Balm',
    image: '/images/shea-butter-lip-balm.png',
    longDescription: 'An ultra-hydrating lip balm with shea butter to nourish and protect dry, chapped lips. Enriched with natural oils, it leaves your lips feeling soft, smooth, and healthy.',
    ingredients: ['Organic Shea Butter: Deeply moisturizes and heals chapped lips.', 'Coconut Oil: Provides hydration and a protective barrier.', 'Beeswax: Seals in moisture.'],
    howToUse: 'Apply liberally to lips as often as needed, particularly in dry, cold, or windy conditions.',
    category: 'Lip Care',
    variants: [
      { size: '5 gm', price: 89, countInStock: 200 },  
      { size: '10 gm', price: 119, countInStock: 150 },
    ],
  },
  {
    name: 'Beetroot Tinted Lip Balm',
    image: '/images/beetroot-tinted-lip-balm.png',
    longDescription: 'A natural tinted lip balm that gives a beautiful hint of rosy color while moisturizing your lips. Made with beetroot extract for a natural, subtle tint.',
    ingredients: ['Beetroot Extract: Provides a natural red tint.', 'Almond Oil: Nourishes and softens the lips.', 'Cocoa Butter: Hydrates and creates a protective layer.'],
    howToUse: 'Glide on lips for a hint of color and moisture. Re-apply for a more intense shade.',
    category: 'Lip Care',
    variants: [
      { size: '5 gm', price: 99, countInStock: 180 },
      { size: '10 gm', price: 149, countInStock: 130 },
    ],
  },
  // --- Haircare ---
  {
    name: 'Hibiscus Herbal Shampoo',
    image: '/images/hibiscus-herbal-shampoo.png',
    longDescription: 'A gentle herbal shampoo with hibiscus extract to strengthen roots, reduce hair fall, and promote healthy hair growth. This sulfate-free formula cleanses without stripping natural oils.',
    ingredients: ['Hibiscus Flower Extract: Conditions hair and prevents hair fall.', 'Amla Extract: Rich in Vitamin C, it strengthens hair follicles.', 'Reetha: A natural cleanser that produces a gentle lather.'],
    howToUse: 'Gently massage a small amount into wet hair and scalp. Rinse thoroughly. Repeat if necessary.',
    category: 'Haircare',
    variants: [
      { size: '200 ml', price: 249, countInStock: 120 },
      { size: '400 ml', price: 499, countInStock: 60 },
    ],
  },
  {
    name: 'Argan Oil Conditioner',
    image: '/images/argan-oil-conditioner.png',
    longDescription: 'A rich and creamy conditioner infused with Moroccan Argan Oil to leave hair smooth, shiny, and frizz-free. It helps detangle and restore moisture for incredibly soft hair.',
    ingredients: ['Argan Oil: Nourishes and protects hair from damage.', 'Shea Butter: Provides intense moisture.', 'Silk Protein: Strengthens and adds shine.'],
    howToUse: 'After shampooing, apply conditioner generously to hair, working through to ends. Wait 2-3 minutes, then rinse hair thoroughly.',
    category: 'Haircare',
    variants: [
      { size: '200 ml', price: 299, countInStock: 100 },
      { size: '350 ml', price: 449, countInStock: 90 },
    ],
  },
  {
    name: 'Ayurvedic Hair Oil',
    image: '/images/ayurvedic-hair-oil.png',
    longDescription: 'A traditional Ayurvedic hair oil with Bhringraj and Amla to reduce hair fall and nourish the scalp. This potent blend of herbs helps in promoting thicker, stronger hair growth.',
    ingredients: ['Bhringraj: Known as the "king of herbs" for hair, it revitalizes follicles.', 'Amla: Strengthens the hair from the roots.', 'Brahmi: Nourishes the scalp and reduces split ends.'],
    howToUse: 'Gently massage the oil into your scalp and hair. Leave it on for at least an hour or overnight. Wash off with a mild shampoo.',
    category: 'Haircare',
    variants: [
      { size: '150 ml', price: 259, countInStock: 80 },
    ],
  },
  {
    name: 'Frizz Control Hair Serum',
    image: '/images/frizz-control-hair-serum.png',
    longDescription: 'A lightweight serum that tames frizz, protects from humidity, and adds instant shine to your hair. Our formula with Argan Oil smooths hair without weighing it down, leaving it silky and manageable.',
    ingredients: ['Argan Oil: Rich in fatty acids and vitamin E, it nourishes and protects hair.', 'Cyclopentasiloxane: A silicone that provides slip and shine.'],
    howToUse: 'Take a small amount of serum in your palms. Rub palms together and apply evenly along the lengths of your damp or dry hair.',
    category: 'Haircare',
    variants: [
      { size: '50 ml', price: 299, countInStock: 90 },
      { size: '100 ml', price: 499, countInStock: 70 },
    ],
  },
  // --- Bodycare ---
  {
    name: 'Cocoa Butter Body Lotion',
    image: '/images/cocoa-butter-body-lotion.png',
    longDescription: 'A luxurious body lotion with cocoa butter to provide deep moisturization and improve skin elasticity. Its rich formula absorbs quickly, leaving skin soft, smooth, and glowing.',
    ingredients: ['Cocoa Butter: Deeply hydrates and nourishes the skin.', 'Shea Butter: Softens and smoothens dry skin.', 'Vitamin E: An antioxidant that helps protect skin.'],
    howToUse: 'Massage lotion all over the body until absorbed. Best used after bathing when your skin is most receptive to hydration.',
    category: 'Bodycare',
    variants: [
      { size: '200 ml', price: 359, countInStock: 90 },
      { size: '400 ml', price: 529, countInStock: 60 },
    ],
  },
  {
    name: 'Coffee Body Scrub',
    image: '/images/coffee-body-scrub.png',
    longDescription: 'An invigorating body scrub with coffee grounds to exfoliate dead skin cells, reduce the appearance of cellulite, and awaken your skin. The aroma of fresh coffee provides a refreshing experience.',
    ingredients: ['Ground Coffee Beans: Exfoliates and stimulates blood flow.', 'Coconut Oil: Moisturizes and nourishes the skin.', 'Brown Sugar: A natural exfoliant.'],
    howToUse: 'In the shower, apply a scoop of scrub to damp skin. Gently rub in circular motions. Rinse thoroughly and pat dry.',
    category: 'Bodycare',
    variants: [
      { size: '200 gm', price: 379, countInStock: 70 },
    ],
  },
  {
    name: 'Charcoal Soap Bar',
    image: '/images/charcoal-soap-bar.png',
    longDescription: 'A detoxifying soap bar with activated charcoal to draw out impurities, toxins, and excess oil from the skin. Ideal for oily and combination skin types, it leaves your skin feeling clean and refreshed.',
    ingredients: ['Activated Charcoal: Deep cleanses and detoxifies pores.', 'Tea Tree Oil: Known for its antibacterial properties.', 'Coconut Oil: Provides a rich, moisturizing lather.'],
    howToUse: 'Lather between hands with water, and apply generously to face and body. This soap is gentle enough to use every day.',
    category: 'Bodycare',
    variants: [
      { size: '125 gm', price: 199, countInStock: 100 },
    ],
  },
  {
    name: 'Lavender Body Wash',
    image: '/images/lavender-body-wash.png',
    longDescription: 'A calming body wash with lavender essential oil to soothe your senses and gently cleanse your skin. This relaxing formula helps wash away stress and provides a peaceful bathing experience.',
    ingredients: ['Lavender Essential Oil: Calms the mind and soothes the skin.', 'Glycerin: Hydrates the skin.', 'Sulfate-Free Cleansers: Gently clean without drying.'],
    howToUse: 'Pour a small amount onto a wet loofah or your hands. Work into a rich lather and rinse off.',
    category: 'Bodycare',
    variants: [
      { size: '250 ml', price: 349, countInStock: 90 },
      { size: '375 ml', price: 499, countInStock: 70 },
    ],
  },
  // --- Special/Wellness ---
  {
    name: 'Lavender Essential Oil',
    image: '/images/lavender-essential-oil.png',
    longDescription: '100% pure and natural lavender essential oil for aromatherapy, relaxation, and promoting restful sleep. Can be used in a diffuser, added to bath water, or mixed with a carrier oil for massage.',
    ingredients: ['Pure Lavandula Angustifolia (Lavender) Oil.'],
    howToUse: 'For aromatherapy, use 3-4 drops in a diffuser. For topical use, dilute with a carrier oil like coconut or jojoba oil.',
    category: 'Wellness',
    variants: [
      { size: '15 ml', price: 299, countInStock: 100 },
      { size: '30 ml', price: 499, countInStock: 70 },
    ],
  },
  {
    name: 'Herbal Face Mist (Cucumber)',
    image: '/images/herbal-face-mist-cucumber.png',
    longDescription: 'A cooling and hydrating face mist with cucumber extract to refresh your skin anytime, anywhere. It instantly boosts hydration and provides a dewy glow. Perfect for a midday pick-me-up.',
    ingredients: ['Cucumber Extract: Soothes and cools the skin.', 'Mint Extract: Provides a refreshing sensation.', 'Rose Water: Tones and hydrates.'],
    howToUse: 'Hold the bottle a few inches from your face and spray lightly. Can be used on clean skin or over makeup.',
    category: 'Wellness',
    variants: [
      { size: '50 ml', price: 129, countInStock: 100 },  
      { size: '100 ml', price: 259, countInStock: 80 },
    ],
  },
  // --- Combos/Kits ---
  {
    name: 'Skincare Kit (Face Wash + Toner + Moisturizer)',
    image: '/images/skincare-kit.png',
    longDescription: 'A complete daily skincare routine kit for clean, toned, and moisturized skin. Features our best-selling Herbal Face Wash, Rose Water Toner, and Aloe Vera Gel Moisturizer. A perfect starter set or gift.',
    ingredients: ['See individual products for full ingredient lists.'],
    howToUse: 'Step 1: Cleanse with the Herbal Face Wash. Step 2: Tone with the Rose Water Toner. Step 3: Moisturize with the Aloe Vera Gel.',
    category: 'Combo',
    variants: [
      { size: '1 Kit (100 ml + 100 ml + 50 gm)', price: 599, countInStock: 60 },
    ],
  },
  {
    name: 'Haircare Kit (Oil + Shampoo + Conditioner)',
    image: '/images/haircare-kit.png',
    longDescription: 'The ultimate haircare combo for nourishing your scalp and achieving strong, smooth, and beautiful hair. Includes our Ayurvedic Hair Oil, Hibiscus Herbal Shampoo, and Argan Oil Conditioner.',
    ingredients: ['See individual products for full ingredient lists.'],
    howToUse: 'Step 1: Nourish with the Ayurvedic Hair Oil (leave for 1 hour). Step 2: Cleanse with the Hibiscus Shampoo. Step 3: Condition with the Argan Oil Conditioner.',
    category: 'Combo',
    variants: [
      { size: '1 Kit(150 ml + 200 ml + 200 ml)', price: 899, countInStock: 50 },
    ],
  },
];

export default products;
