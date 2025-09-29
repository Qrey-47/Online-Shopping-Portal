// app/data/products.ts

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Product {
  slug: string;
  name: string;
  price: string;
  originalPrice: string;
  image: string; // always stored in /public folder
  badge: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    slug: "aloe-vera-gel-moisturizer",
    name: "Aloe Vera Gel Moisturizer",
    price: "$15",
    originalPrice: "$20",
    image: "/aloe-vera-gel-moisturizer.png",
    badge: "Best Seller",
    reviews: [
      { user: "Pranav M.", rating: 5, comment: "Very soothing and hydrating on my skin." },
      { user: "Sneha D.", rating: 4, comment: "Absorbs quickly, no sticky feeling." },
      { user: "Anjali R.", rating: 5, comment: "Helped calm my sunburn instantly." },
      { user: "Aman S.", rating: 5, comment: "My daily go-to moisturizer." },
      { user: "Simran L.", rating: 4, comment: "Packaging could be better but product is great." }
    ]
  },
  {
    slug: "argan-oil-conditioner",
    name: "Argan Oil Conditioner",
    price: "$22",
    originalPrice: "$28",
    image: "/argan-oil-conditioner.png",
    badge: "Hydrating",
    reviews: [
      { user: "Divya K.", rating: 5, comment: "Leaves hair super soft and manageable." },
      { user: "Ravi P.", rating: 4, comment: "Nice fragrance and texture." },
      { user: "Ananya B.", rating: 5, comment: "My hair feels nourished after every wash." },
      { user: "Gaurav C.", rating: 5, comment: "Best conditioner I've tried so far." },
      { user: "Kavita N.", rating: 4, comment: "Good for frizz control." }
    ]
  },
  {
    slug: "ayurvedic-hair-oil",
    name: "Ayurvedic Hair Oil",
    price: "$18",
    originalPrice: "$25",
    image: "/ayurvedic-hair-oil.png",
    badge: "Herbal Care",
    reviews: [
      { user: "Sonal M.", rating: 5, comment: "Reduced my hair fall significantly." },
      { user: "Nikhil R.", rating: 4, comment: "Smells very herbal and natural." },
      { user: "Priya S.", rating: 5, comment: "Great for scalp massage." },
      { user: "Mohit V.", rating: 5, comment: "Improved my hair texture in 2 weeks." },
      { user: "Rhea G.", rating: 4, comment: "Packaging was slightly leaky but oil is superb." }
    ]
  },
  {
    slug: "beetroot-tinted-lip-balm",
    name: "Beetroot Tinted Lip Balm",
    price: "$10",
    originalPrice: "$15",
    image: "/beetroot-tinted-lip-balm.png",
    badge: "Premium",
    reviews: [
      { user: "Tanya S.", rating: 5, comment: "Gives a natural pink tint to my lips." },
      { user: "Shivam L.", rating: 4, comment: "Keeps lips moisturized all day." },
      { user: "Komal P.", rating: 5, comment: "Smells delicious and feels light." },
      { user: "Neha J.", rating: 5, comment: "Perfect for daily wear." },
      { user: "Rohit K.", rating: 4, comment: "Color fades slightly but still good." }
    ]
  },
  {
    slug: "charcoal-soap-bar",
    name: "Charcoal Soap Bar",
    price: "$12",
    originalPrice: "$18",
    image: "/charcoal-soap-bar.png",
    badge: "Deep Clean",
    reviews: [
      { user: "Deepak P.", rating: 5, comment: "Cleanses skin thoroughly without drying." },
      { user: "Mahima S.", rating: 4, comment: "Good for oily skin." },
      { user: "Harsh B.", rating: 5, comment: "Love the fresh feel after use." },
      { user: "Kritika J.", rating: 5, comment: "Helped reduce acne." },
      { user: "Sagar D.", rating: 4, comment: "Nice scent, lasts long." }
    ]
  },
  {
    slug: "cocoa-butter-body-lotion",
    name: "Cocoa Butter Body Lotion",
    price: "$25",
    originalPrice: "$32",
    image: "/cocoa-butter-body-lotion.png",
    badge: "Hydrating",
    reviews: [
      { user: "Rhea", rating: 5, comment: "Super moisturizing for winter." },
      { user: "Arjun", rating: 4, comment: "Smells great and lasts long." },
      { user: "Kavya", rating: 5, comment: "My dry skin loves this." },
      { user: "Dev", rating: 4, comment: "Non-sticky and soft." },
      { user: "Priya", rating: 5, comment: "Will repurchase for sure." }
    ]
  },
  {
    slug: "coffee-body-scrub",
    name: "Coffee Body Scrub",
    price: "$18",
    originalPrice: "$24",
    image: "/coffee-body-scrub.png",
    badge: "Exfoliating",
    reviews: [
      { user: "Simran", rating: 5, comment: "Leaves my skin smooth." },
      { user: "Jay", rating: 4, comment: "Nice coffee aroma, works well." },
      { user: "Aarti", rating: 5, comment: "Great for removing tan." },
      { user: "Karan", rating: 3, comment: "Good but a bit rough." },
      { user: "Neha", rating: 5, comment: "Best scrub for summer." }
    ]
  },
  {
    slug: "frizz-control-hair-serum",
    name: "Frizz Control Hair Serum",
    price: "$22",
    originalPrice: "$30",
    image: "/frizz-control-hair-serum.png",
    badge: "Smooth Finish",
    reviews: [
      { user: "Ritika", rating: 5, comment: "Made my hair silky instantly." },
      { user: "Ajay", rating: 4, comment: "Good serum for curly hair." },
      { user: "Meera", rating: 5, comment: "No frizz even in humidity." },
      { user: "Tarun", rating: 3, comment: "Works okay for the price." },
      { user: "Pooja", rating: 5, comment: "Highly recommended!" }
    ]
  },
  {
    slug: "haircare-kit",
    name: "Haircare Kit",
    price: "$55",
    originalPrice: "$70",
    image: "/haircare-kit.png",
    badge: "Complete Care",
    reviews: [
      { user: "Anushka", rating: 5, comment: "All-in-one solution for my hair." },
      { user: "Rahul", rating: 4, comment: "Covers all basic needs." },
      { user: "Shreya", rating: 5, comment: "Best haircare combo." },
      { user: "Kabir", rating: 4, comment: "Shampoo and oil are great." },
      { user: "Nisha", rating: 5, comment: "Packaging was perfect." }
    ]
  },
  {
    slug: "herbal-face-mist",
    name: "Herbal Face Mist",
    price: "$15",
    originalPrice: "$22",
    image: "/herbal-face-mist.png",
    badge: "Refreshing",
    reviews: [
      { user: "Komal", rating: 5, comment: "Instant freshness on the go." },
      { user: "Aakash", rating: 4, comment: "Good for summer." },
      { user: "Lavanya", rating: 5, comment: "Calms my skin instantly." },
      { user: "Yash", rating: 3, comment: "Nice but bottle is small." },
      { user: "Seema", rating: 5, comment: "Love the herbal fragrance." }
    ]
  },
  {
    slug: "herbal-face-wash",
    name: "Herbal Face Wash",
    price: "$14",
    originalPrice: "$20",
    image: "/herbal-face-wash.png",
    badge: "Gentle Clean",
    reviews: [
      { user: "Ravi", rating: 5, comment: "Very mild yet effective." },
      { user: "Bhavna", rating: 4, comment: "Good for sensitive skin." },
      { user: "Preeti", rating: 5, comment: "Cleans without drying." },
      { user: "Om", rating: 3, comment: "Average but okay." },
      { user: "Alisha", rating: 5, comment: "Staple in my routine." }
    ]
  },
  {
    slug: "hibiscus-herbal-shampoo",
    name: "Hibiscus Herbal Shampoo",
    price: "$28",
    originalPrice: "$35",
    image: "/hibiscus-herbal-shampoo.png",
    badge: "Strengthening",
    reviews: [
      { user: "Tina", rating: 5, comment: "Hair feels stronger and thicker." },
      { user: "Mohan", rating: 4, comment: "Good for hair fall control." },
      { user: "Isha", rating: 5, comment: "Love the hibiscus scent." },
      { user: "Zoya", rating: 3, comment: "Takes time to show results." },
      { user: "Ramesh", rating: 5, comment: "Highly nourishing." }
    ]
  },
  {
    slug: "lavender-body-wash",
    name: "Lavender Body Wash",
    price: "$20",
    originalPrice: "$28",
    image: "/lavender-body-wash.png",
    badge: "Calming",
    reviews: [
      { user: "Sneha", rating: 5, comment: "So relaxing after a long day." },
      { user: "Deepak", rating: 4, comment: "Soft lather, nice fragrance." },
      { user: "Naina", rating: 5, comment: "Perfect for night showers." },
      { user: "Gopal", rating: 3, comment: "Good but a bit pricey." },
      { user: "Shalini", rating: 5, comment: "Would buy again." }
    ]
  },
  {
    slug: "lavender-essential-oil",
    name: "Lavender Essential Oil",
    price: "$30",
    originalPrice: "$42",
    image: "/lavender-essential-oil.png",
    badge: "Aromatherapy",
    reviews: [
      { user: "Aarti", rating: 5, comment: "Great for diffusers." },
      { user: "Rehan", rating: 4, comment: "Strong and pure." },
      { user: "Vidya", rating: 5, comment: "Calms my nerves instantly." },
      { user: "Harsh", rating: 3, comment: "Bottle could be bigger." },
      { user: "Maya", rating: 5, comment: "Very authentic smell." }
    ]
  }
];
