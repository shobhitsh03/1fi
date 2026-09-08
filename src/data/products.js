export const PRODUCTS = [
  {
    id: "prod-1",
    title: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    rating: 4.9,
    reviewsCount: 1420,
    price: 144900,
    originalPrice: 159900,
    discountPercent: 9,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
    badge: "0% No-Cost EMI",
    isBestSeller: true,
    highlights: [
      "Grade 5 Titanium design with textured matte glass back",
      "A18 Pro chip with 6-core GPU & Apple Intelligence",
      "48MP Fusion camera system with 5x Telephoto optical zoom",
      "Up to 33 hours video playback battery life"
    ],
    variants: {
      colors: [
        { id: "natural", name: "Natural Titanium", hex: "#c2bcba", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop" },
        { id: "black", name: "Black Titanium", hex: "#2f3134", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop" },
        { id: "white", name: "White Titanium", hex: "#f2f2f2", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop" },
        { id: "desert", name: "Desert Titanium", hex: "#d5c3b4", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "256gb", label: "256 GB", priceDelta: 0 },
        { id: "512gb", label: "512 GB", priceDelta: 20000 },
        { id: "1tb", label: "1 TB", priceDelta: 40000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 3000, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 4500, recommended: true },
      { tenureMonths: 9, interestRate: 0, processingFee: 199, downPayment: 0, cashback: 2000, recommended: false },
      { tenureMonths: 12, interestRate: 6.99, processingFee: 499, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 18, interestRate: 9.99, processingFee: 799, downPayment: 0, cashback: 0, recommended: false },
      { tenureMonths: 24, interestRate: 11.99, processingFee: 999, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 180000
  },
  {
    id: "prod-2",
    title: "MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "Laptops",
    rating: 4.95,
    reviewsCount: 890,
    price: 249900,
    originalPrice: 279900,
    discountPercent: 11,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    badge: "1Fi Special 0% EMI",
    isBestSeller: true,
    highlights: [
      "Apple M3 Max Chip with 16-Core CPU & 40-Core GPU",
      "36GB Unified Memory & 1TB Superfast SSD Storage",
      "16.2-inch Liquid Retina XDR display (120Hz ProMotion)",
      "Up to 22 hours of battery life with MagSafe 3"
    ],
    variants: {
      colors: [
        { id: "space-black", name: "Space Black", hex: "#1f2226", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" },
        { id: "silver", name: "Silver", hex: "#e1e4e7", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "36gb-1tb", label: "36GB / 1TB SSD", priceDelta: 0 },
        { id: "48gb-1tb", label: "48GB / 1TB SSD", priceDelta: 30000 },
        { id: "64gb-2tb", label: "64GB / 2TB SSD", priceDelta: 70000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 5000, recommended: false },
      { tenureMonths: 12, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 7500, recommended: true },
      { tenureMonths: 18, interestRate: 7.5, processingFee: 999, downPayment: 0, cashback: 3000, recommended: false },
      { tenureMonths: 24, interestRate: 9.9, processingFee: 1499, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 300000
  },
  {
    id: "prod-3",
    title: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "Audio",
    rating: 4.8,
    reviewsCount: 3410,
    price: 26990,
    originalPrice: 34900,
    discountPercent: 23,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    badge: "Instant Approval",
    isBestSeller: false,
    highlights: [
      "Industry-leading noise canceling with 8 microphones & Auto NC Optimizer",
      "Magnificent sound engineered with High-Resolution Audio",
      "Up to 30-hour battery life with quick charging (3 min for 3 hours)",
      "Ultra comfortable lightweight design with soft fit leather"
    ],
    variants: {
      colors: [
        { id: "black", name: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" },
        { id: "silver", name: "Platinum Silver", hex: "#d8d4cd", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" },
        { id: "blue", name: "Midnight Blue", hex: "#1b2a47", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "standard", label: "Standard Edition", priceDelta: 0 },
        { id: "travel-bundle", label: "Travel Case + Adapter Bundle", priceDelta: 1990 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 1000, recommended: true },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 1500, recommended: false },
      { tenureMonths: 9, interestRate: 4.5, processingFee: 199, downPayment: 0, cashback: 500, recommended: false },
      { tenureMonths: 12, interestRate: 6.5, processingFee: 299, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 35000
  },
  {
    id: "prod-4",
    title: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "Smartphones",
    rating: 4.85,
    reviewsCount: 2150,
    price: 129999,
    originalPrice: 144999,
    discountPercent: 10,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop",
    badge: "0% Interest",
    isBestSeller: true,
    highlights: [
      "Galaxy AI integration: Circle to Search, Live Translate & Note Assist",
      "200MP Main camera with ProVisual Engine & 100x Space Zoom",
      "Titanium frame with Corning Gorilla Armor scratch resistance",
      "Built-in S Pen for effortless sketching, productivity & navigation"
    ],
    variants: {
      colors: [
        { id: "titanium-gray", name: "Titanium Gray", hex: "#7d7d7d", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop" },
        { id: "titanium-black", name: "Titanium Black", hex: "#1f1f1f", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop" },
        { id: "titanium-violet", name: "Titanium Violet", hex: "#5d5483", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "256gb", label: "12GB RAM / 256GB", priceDelta: 0 },
        { id: "512gb", label: "12GB RAM / 512GB", priceDelta: 10000 },
        { id: "1tb", label: "12GB RAM / 1TB", priceDelta: 30000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 2500, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 4000, recommended: true },
      { tenureMonths: 9, interestRate: 0, processingFee: 299, downPayment: 0, cashback: 2000, recommended: false },
      { tenureMonths: 12, interestRate: 5.99, processingFee: 499, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 18, interestRate: 8.99, processingFee: 799, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 160000
  },
  {
    id: "prod-5",
    title: "iPad Air M2 11-inch",
    brand: "Apple",
    category: "Laptops",
    rating: 4.88,
    reviewsCount: 940,
    price: 59900,
    originalPrice: 64900,
    discountPercent: 8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
    badge: "No Down Payment",
    isBestSeller: false,
    highlights: [
      "Apple M2 chip delivering supercharged performance for graphics & AI",
      "11-inch Liquid Retina display with P3 wide color & True Tone",
      "Landscape 12MP Ultra Wide front camera with Center Stage",
      "Supports Apple Pencil Pro & Magic Keyboard"
    ],
    variants: {
      colors: [
        { id: "space-gray", name: "Space Gray", hex: "#4b4c4e", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop" },
        { id: "starlight", name: "Starlight", hex: "#e7e4d8", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000&auto=format&fit=crop" },
        { id: "purple", name: "Purple", hex: "#b8b2cb", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "128gb", label: "128 GB (Wi-Fi)", priceDelta: 0 },
        { id: "256gb", label: "256 GB (Wi-Fi)", priceDelta: 10000 },
        { id: "128gb-cellular", label: "128 GB (Wi-Fi + Cellular)", priceDelta: 15000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 1500, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 2500, recommended: true },
      { tenureMonths: 9, interestRate: 0, processingFee: 199, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 12, interestRate: 5.5, processingFee: 399, downPayment: 0, cashback: 500, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 75000
  },
  {
    id: "prod-6",
    title: "Sony PlayStation 5 Digital Slim Edition",
    brand: "Sony",
    category: "Gaming",
    rating: 4.92,
    reviewsCount: 1890,
    price: 44990,
    originalPrice: 49990,
    discountPercent: 10,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
    badge: "0% Interest EMI",
    isBestSeller: true,
    highlights: [
      "Ultra-high speed 1TB Custom SSD for near-instant load times",
      "Stunning 4K-TV gaming with up to 120fps output & Ray Tracing",
      "DualSense Wireless Controller with Haptic Feedback & Adaptive Triggers",
      "Compact 30% smaller slim chassis design"
    ],
    variants: {
      colors: [
        { id: "white", name: "Signature White", hex: "#f0f0f5", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "digital", label: "Digital Edition (1TB)", priceDelta: 0 },
        { id: "disc", label: "Disc Edition (1TB)", priceDelta: 10000 },
        { id: "bundle-2ctrl", label: "Dual Controller Bundle", priceDelta: 5000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 2000, recommended: true },
      { tenureMonths: 9, interestRate: 3.99, processingFee: 199, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 12, interestRate: 6.99, processingFee: 399, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 60000
  },
  {
    id: "prod-7",
    title: "Apple Watch Ultra 2 GPS + Cellular",
    brand: "Apple",
    category: "Smartwatches",
    rating: 4.87,
    reviewsCount: 760,
    price: 89900,
    originalPrice: 89900,
    discountPercent: 0,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000&auto=format&fit=crop",
    badge: "1Fi Credit Special",
    isBestSeller: false,
    highlights: [
      "49mm aerospace-grade titanium case with flat sapphire front crystal",
      "Brightest Apple display ever at 3000 nits peak brightness",
      "S9 SiP chip enabling Double Tap gesture without touching screen",
      "Up to 36 hours normal use & 72 hours in Low Power Mode"
    ],
    variants: {
      colors: [
        { id: "titanium", name: "Natural Titanium", hex: "#cfcfcf", image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000&auto=format&fit=crop" },
        { id: "black-titanium", name: "Satin Black", hex: "#1f1f1f", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "ocean-band", label: "Ocean Band (Blue)", priceDelta: 0 },
        { id: "alpine-loop", label: "Alpine Loop (Tan)", priceDelta: 0 },
        { id: "trail-loop", label: "Trail Loop (Green)", priceDelta: 0 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 2000, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 3500, recommended: true },
      { tenureMonths: 9, interestRate: 0, processingFee: 199, downPayment: 0, cashback: 1500, recommended: false },
      { tenureMonths: 12, interestRate: 6.99, processingFee: 499, downPayment: 0, cashback: 500, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 110000
  },
  {
    id: "prod-8",
    title: "Dyson V15 Detect Cordless Vacuum",
    brand: "Dyson",
    category: "Appliances",
    rating: 4.82,
    reviewsCount: 530,
    price: 62900,
    originalPrice: 69900,
    discountPercent: 10,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop",
    badge: "0% Interest EMI",
    isBestSeller: false,
    highlights: [
      "Laser reveals microscopic dust on hard floors",
      "Piezo sensor continuously sizes and counts dust particles",
      "Up to 60 minutes run time with swappable click-in battery",
      "Digital Motorbar cleaner head anti-tangle technology"
    ],
    variants: {
      colors: [
        { id: "yellow-nickel", name: "Yellow / Nickel", hex: "#eab308", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop" }
      ],
      storage: [
        { id: "v15-standard", label: "Standard V15 Kit", priceDelta: 0 },
        { id: "v15-complete", label: "Absolute Extra Tool Kit", priceDelta: 6000 }
      ]
    },
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 1500, recommended: false },
      { tenureMonths: 6, interestRate: 0, processingFee: 0, downPayment: 0, cashback: 2500, recommended: true },
      { tenureMonths: 9, interestRate: 0, processingFee: 199, downPayment: 0, cashback: 1000, recommended: false },
      { tenureMonths: 12, interestRate: 6.99, processingFee: 399, downPayment: 0, cashback: 0, recommended: false }
    ],
    mfPledgeEligible: true,
    minMFCollateralRequired: 80000
  }
];

export const MOCK_USER_PORTFOLIO = {
  name: "Shobhit Shukla",
  totalPortfolioValue: 540000, // Total Mutual Fund investment
  pledgedValue: 120000,
  availableCreditLimit: 250000, // Active Loan Against MF limit
  usedCreditLimit: 45000,
  funds: [
    { name: "Mirae Asset Large Cap Fund", category: "Equity", units: 1420.5, nav: 112.4, val: 159664, eligibleLTV: "85%" },
    { name: "Parag Parikh Flexi Cap Fund", category: "Equity", units: 2890.1, nav: 78.2, val: 226005, eligibleLTV: "85%" },
    { name: "ICICI Prudential Small Cap Fund", category: "SmallCap", units: 1850.0, nav: 83.4, val: 154331, eligibleLTV: "75%" }
  ]
};
