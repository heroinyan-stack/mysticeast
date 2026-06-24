// MysticEast - Product Data

const products = [
  {
    id: "obsidian-bracelet",
    name: "Black Obsidian Protection Bracelet",
    category: "bracelets",
    subcategory: "protection",
    price: 29.00,
    originalPrice: 39.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=black%20obsidian%20crystal%20bracelet%20on%20dark%20mystical%20background%20with%20golden%20light%20rays%20professional%20product%20photography&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=black%20obsidian%20beads%20close%20up%20detailed%20view%20on%20velvet%20cloth%20mystical%20aesthetic&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20wearing%20black%20obsidian%20bracelet%20on%20wrist%20soft%20lighting%20wellness%20lifestyle&image_size=square"
    ],
    rating: 4.8,
    reviews: 127,
    inStock: true,
    variants: [
      { size: "8mm", price: 29.00, sku: "OBS-8MM" },
      { size: "10mm", price: 35.00, sku: "OBS-10MM" }
    ],
    description: {
      short: "Channel protection energy with this handcrafted Black Obsidian bracelet.",
      long: "Each bead is carefully selected and strung with intention, creating a powerful companion for your daily ritual. Black Obsidian has been used for centuries in Eastern traditions as a shield against negative energies.",
      meaning: "Black Obsidian is known for its powerful protective properties. Formed from volcanic lava, it carries the raw energy of the earth. In Feng Shui practice, it's believed to ward off negative energy, promote emotional clarity, and enhance personal power.",
      usage: "Wear on your left wrist to absorb negative energy and protect your personal space. For best results, cleanse under moonlight monthly and set clear intentions when first wearing."
    },
    tags: ["protection", "feng-shui", "crystal", "bracelet", "bestseller"],
    benefits: [
      "Wards off negative energy",
      "Promotes emotional clarity",
      "Enhances personal power",
      "Supports spiritual growth"
    ],
    specifications: {
      material: "100% Natural Black Obsidian (Grade A)",
      beadSize: "8mm / 10mm options",
      braceletSize: "Flexible elastic, fits most wrists (6-8 inches)",
      weight: "Approximately 25g",
      origin: "Sourced from volcanic regions"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-OBS-001",
    cjCost: 3.00
  },
  {
    id: "amethyst-bracelet",
    name: "Natural Amethyst Wisdom Bracelet",
    category: "bracelets",
    subcategory: "wisdom",
    price: 39.00,
    originalPrice: 49.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=purple%20amethyst%20crystal%20bracelet%20glowing%20mystical%20light%20dark%20background%20premium%20product%20shot&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=amethyst%20beads%20detailed%20close%20up%20purple%20crystals%20spiritual%20aesthetic&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=women%20wearing%20amethyst%20bracelet%20meditation%20peaceful%20setting%20wellness%20lifestyle&image_size=square"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    variants: [
      { size: "8mm", price: 39.00, sku: "AMT-8MM" },
      { size: "10mm", price: 45.00, sku: "AMT-10MM" }
    ],
    description: {
      short: "Unlock inner wisdom and spiritual clarity with this premium Amethyst bracelet.",
      long: "Handcrafted with Grade A Amethyst beads, this bracelet connects you to centuries of Eastern wisdom. Amethyst has been treasured by spiritual seekers for its ability to calm the mind and open the third eye.",
      meaning: "Amethyst is the stone of wisdom and spiritual growth. Its purple hue represents the crown chakra, connecting you to higher consciousness. In Eastern traditions, it's used to enhance meditation, promote peaceful sleep, and develop intuition.",
      usage: "Wear during meditation or yoga practice to deepen your connection. Place under your pillow for peaceful dreams. Best worn on the right wrist to project wisdom energy outward."
    },
    tags: ["wisdom", "meditation", "crystal", "bracelet", "spiritual"],
    benefits: [
      "Enhances meditation practice",
      "Promotes peaceful sleep",
      "Develops intuition",
      "Calms the mind"
    ],
    specifications: {
      material: "100% Natural Amethyst (Grade A)",
      beadSize: "8mm / 10mm options",
      braceletSize: "Flexible elastic, fits most wrists (6-8 inches)",
      weight: "Approximately 28g",
      origin: "Sourced from Brazil"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-AMT-002",
    cjCost: 4.00
  },
  {
    id: "citrine-bracelet",
    name: "Citrine Manifestation Bracelet",
    category: "bracelets",
    subcategory: "wealth",
    price: 35.00,
    originalPrice: 45.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=golden%20citrine%20crystal%20bracelet%20glowing%20warm%20light%20dark%20mystical%20background%20luxury%20product&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=citrine%20beads%20close%20up%20golden%20yellow%20crystals%20abundance%20energy&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20wearing%20citrine%20bracelet%20business%20setting%20success%20energy%20professional&image_size=square"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    variants: [
      { size: "8mm", price: 35.00, sku: "CIT-8MM" },
      { size: "10mm", price: 42.00, sku: "CIT-10MM" }
    ],
    description: {
      short: "Attract abundance and prosperity with this radiant Citrine bracelet.",
      long: "Known as the 'Merchant's Stone' in Feng Shui, Citrine has been used for centuries to attract wealth and success. Each bead carries the warm, golden energy of the sun.",
      meaning: "Citrine is the crystal of manifestation and abundance. Its golden energy activates the solar plexus chakra, empowering you to achieve your goals. In Feng Shui, it's placed in the wealth corner to attract prosperity.",
      usage: "Wear on your right wrist to project abundance energy outward. Place in your cash drawer or wallet for wealth attraction. Cleanse in sunlight to recharge its energy."
    },
    tags: ["wealth", "abundance", "feng-shui", "crystal", "bracelet"],
    benefits: [
      "Attracts wealth and abundance",
      "Boosts confidence and motivation",
      "Enhances manifestation power",
      "Promotes positive energy"
    ],
    specifications: {
      material: "100% Natural Citrine (Grade A)",
      beadSize: "8mm / 10mm options",
      braceletSize: "Flexible elastic, fits most wrists (6-8 inches)",
      weight: "Approximately 26g",
      origin: "Sourced from Brazil"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-CIT-003",
    cjCost: 4.00
  },
  {
    id: "crystal-tree",
    name: "Feng Shui Crystal Tree (6-inch)",
    category: "feng-shui",
    subcategory: "wealth",
    price: 49.00,
    originalPrice: 69.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=gemstone%20crystal%20tree%20with%20amethyst%20citrine%20rose%20quartz%20leaves%20on%20dark%20background%20feng%20shui%20decor&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crystal%20tree%20close%20up%20detail%20multiple%20gemstone%20types%20mystical%20home%20decor&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crystal%20tree%20on%20desk%20feng%20shui%20wealth%20corner%20home%20office%20setup&image_size=square"
    ],
    rating: 4.6,
    reviews: 78,
    inStock: true,
    variants: [
      { type: "Mixed Gems", price: 49.00, sku: "TREE-MIX" },
      { type: "Amethyst Only", price: 55.00, sku: "TREE-AMT" },
      { type: "Citrine Only", price: 59.00, sku: "TREE-CIT" }
    ],
    description: {
      short: "Invite prosperity and harmony into your space with this handcrafted Crystal Tree.",
      long: "This beautiful Feng Shui Crystal Tree features genuine gemstone leaves on a wire trunk, symbolizing growth, abundance, and eternal life. Perfect for your wealth corner or as a stunning decor piece.",
      meaning: "In Feng Shui, crystal trees represent growth, stability, and abundance. The gemstone leaves carry different energies - Amethyst for wisdom, Citrine for wealth, Rose Quartz for love. Placed in the Southeast corner, it activates wealth energy.",
      usage: "Place in the Southeast corner of your home or office for wealth attraction. On your desk, it brings career success. Regularly 'fluff' the branches to keep energy flowing."
    },
    tags: ["feng-shui", "home-decor", "wealth", "crystal", "gift"],
    benefits: [
      "Activates wealth energy",
      "Enhances home harmony",
      "Beautiful decor piece",
      "Multi-crystal benefits"
    ],
    specifications: {
      material: "Natural gemstone leaves + wire trunk + resin base",
      height: "Approximately 6 inches (15cm)",
      leafCount: "100-150 gemstone leaves",
      base: "Solid resin base for stability",
      gemstones: "Amethyst, Citrine, Rose Quartz mix"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-TREE-004",
    cjCost: 5.00
  },
  {
    id: "peach-wood-talisman",
    name: "Peach Wood Protection Talisman",
    category: "talismans",
    subcategory: "protection",
    price: 19.00,
    originalPrice: 29.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20peach%20wood%20talisman%20with%20carved%20symbols%20red%20cord%20mystical%20dark%20background&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peach%20wood%20charm%20close%20up%20traditional%20carving%20details%20taoist%20symbol&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20holding%20peach%20wood%20talisman%20spiritual%20protection%20ritual%20setting&image_size=square"
    ],
    rating: 4.5,
    reviews: 63,
    inStock: true,
    variants: [
      { type: "Protection Fu", price: 19.00, sku: "PW-PRO" },
      { type: "Wealth Fu", price: 22.00, sku: "PW-WLT" },
      { type: "Love Fu", price: 22.00, sku: "PW-LOV" }
    ],
    description: {
      short: "Carry ancient protection with this authentic Peach Wood talisman.",
      long: "Hand-carved from genuine peach wood - a material revered in Chinese tradition for its protective properties. Each talisman is inscribed with traditional symbols and comes with a red cord for wearing.",
      meaning: "Peach wood has been used in Chinese spiritual practice for over 2,000 years. It's believed to ward off negative spirits and bring blessings. The carved symbols represent ancient Taoist or Buddhist prayers for protection, wealth, or love.",
      usage: "Wear as a pendant, place in your bag for protection, or hang in your car for safe travels. Treat with respect and cleanse monthly with sage smoke."
    },
    tags: ["protection", "talisman", "chinese", "traditional", "spiritual"],
    benefits: [
      "Traditional Chinese protection",
      "Hand-carved authenticity",
      "Portable spiritual tool",
      "Cultural significance"
    ],
    specifications: {
      material: "100% Genuine Peach Wood",
      size: "Approximately 2 inches (5cm)",
      cord: "Traditional red cord included",
      carving: "Hand-carved traditional symbols",
      origin: "Crafted by traditional artisans"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-PW-005",
    cjCost: 2.00
  },
  {
    id: "rose-quartz-bracelet",
    name: "Rose Quartz Love Bracelet",
    category: "bracelets",
    subcategory: "love",
    price: 32.00,
    originalPrice: 42.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pink%20rose%20quartz%20crystal%20bracelet%20romantic%20soft%20light%20dark%20background%20premium%20product&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rose%20quartz%20beads%20close%20up%20pink%20crystals%20love%20energy%20romantic%20aesthetic&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=woman%20wearing%20rose%20quartz%20bracelet%20heart%20chakra%20meditation%20peaceful%20wellness&image_size=square"
    ],
    rating: 4.8,
    reviews: 94,
    inStock: true,
    variants: [
      { size: "8mm", price: 32.00, sku: "RQ-8MM" },
      { size: "10mm", price: 38.00, sku: "RQ-10MM" }
    ],
    description: {
      short: "Open your heart to love with this beautiful Rose Quartz bracelet.",
      long: "Rose Quartz is known as the stone of universal love. This handcrafted bracelet carries gentle, nurturing energy that opens the heart chakra and promotes self-love.",
      meaning: "Rose Quartz resonates with the heart chakra, promoting love, compassion, and emotional healing. In Eastern traditions, it's used to attract soul mates and deepen existing relationships.",
      usage: "Wear on your left wrist to receive love energy. Place under your pillow to attract romantic dreams. Carry with you to open your heart to new connections."
    },
    tags: ["love", "healing", "crystal", "bracelet", "self-love"],
    benefits: [
      "Opens the heart chakra",
      "Promotes self-love",
      "Attracts romantic love",
      "Heals emotional wounds"
    ],
    specifications: {
      material: "100% Natural Rose Quartz (Grade A)",
      beadSize: "8mm / 10mm options",
      braceletSize: "Flexible elastic, fits most wrists (6-8 inches)",
      weight: "Approximately 24g",
      origin: "Sourced from Brazil"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-RQ-006",
    cjCost: 3.50
  },
  {
    id: "tiger-eye-bracelet",
    name: "Tiger Eye Courage Bracelet",
    category: "bracelets",
    subcategory: "wealth",
    price: 28.00,
    originalPrice: 38.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tiger%20eye%20crystal%20bracelet%20golden%20brown%20striped%20stones%20dark%20mystical%20background&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tiger%20eye%20beads%20close%20up%20golden%20sheen%20courage%20energy%20premium%20crystal&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=man%20wearing%20tiger%20eye%20bracelet%20confident%20professional%20setting%20power%20energy&image_size=square"
    ],
    rating: 4.7,
    reviews: 82,
    inStock: true,
    variants: [
      { size: "8mm", price: 28.00, sku: "TE-8MM" },
      { size: "10mm", price: 34.00, sku: "TE-10MM" }
    ],
    description: {
      short: "Embrace courage and confidence with this Tiger Eye bracelet.",
      long: "Tiger Eye is the stone of protection and confidence. Its golden-brown color shimmers with strength, helping you face challenges with courage and determination.",
      meaning: "Tiger Eye combines the grounding energy of Earth with the golden light of the sun. It's believed to bring good luck, protection, and mental clarity. In Feng Shui, it's used for career success.",
      usage: "Wear on your right wrist to project confidence outward. Perfect for job interviews, presentations, or any situation requiring courage."
    },
    tags: ["courage", "confidence", "protection", "crystal", "bracelet"],
    benefits: [
      "Enhances confidence",
      "Provides protection",
      "Boosts mental clarity",
      "Attracts good luck"
    ],
    specifications: {
      material: "100% Natural Tiger Eye (Grade A)",
      beadSize: "8mm / 10mm options",
      braceletSize: "Flexible elastic, fits most wrists (6-8 inches)",
      weight: "Approximately 27g",
      origin: "Sourced from South Africa"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-TE-007",
    cjCost: 3.00
  },
  {
    id: "lucky-cat",
    name: "Maneki-Neko Lucky Cat",
    category: "feng-shui",
    subcategory: "wealth",
    price: 24.00,
    originalPrice: 34.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20lucky%20cat%20maneki%20neko%20golden%20white%20ceramic%20dark%20background&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lucky%20cat%20close%20up%20detail%20golden%20bell%20chinese%20traditional%20symbol%20wealth&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lucky%20cat%20on%20store%20counter%20feng%20shui%20wealth%20attraction%20business%20success&image_size=square"
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    variants: [
      { type: "Small (4-inch)", price: 24.00, sku: "CAT-S" },
      { type: "Medium (6-inch)", price: 34.00, sku: "CAT-M" },
      { type: "Large (8-inch)", price: 49.00, sku: "CAT-L" }
    ],
    description: {
      short: "Welcome wealth and good fortune with this authentic Lucky Cat.",
      long: "The Maneki-Neko (beckoning cat) is a traditional Japanese lucky charm that brings good luck, wealth, and customers. This beautifully crafted ceramic cat features a waving paw and golden bell.",
      meaning: "The Lucky Cat is believed to attract wealth and prosperity. The right paw raised attracts money, while the left paw attracts customers. It's a popular Feng Shui item for businesses and homes.",
      usage: "Place at your store entrance, on your desk, or near your front door. For maximum effect, position it facing the entrance so it can 'wave in' good fortune."
    },
    tags: ["feng-shui", "lucky", "wealth", "cat", "home-decor"],
    benefits: [
      "Attracts wealth and customers",
      "Traditional lucky charm",
      "Beautiful decor piece",
      "Good fortune energy"
    ],
    specifications: {
      material: "High-quality ceramic",
      size: "4 inches (small) / 6 inches (medium) / 8 inches (large)",
      color: "White with gold accents",
      feature: "Waving paw mechanism",
      origin: "Traditional craftsmanship"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-CAT-008",
    cjCost: 2.50
  },
  {
    id: "evil-eye-sticker",
    name: "Evil Eye Protection Sticker Pack",
    category: "talismans",
    subcategory: "protection",
    price: 12.00,
    originalPrice: 18.00,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20evil%20eye%20protection%20stickers%20traditional%20symbols%20red%20gold%20dark%20mystical%20background&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=evil%20eye%20sticker%20close%20up%20traditional%20chinese%20pattern%20protection%20symbol&image_size=square",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=evil%20eye%20stickers%20applied%20to%20laptop%20phone%20car%20protection%20everyday%20items&image_size=square"
    ],
    rating: 4.6,
    reviews: 203,
    inStock: true,
    variants: [
      { type: "Classic Red", price: 12.00, sku: "EE-RED" },
      { type: "Golden Premium", price: 15.00, sku: "EE-GOLD" },
      { type: "Mixed Pack", price: 18.00, sku: "EE-MIX" }
    ],
    description: {
      short: "Protect your devices and space with these authentic Evil Eye stickers.",
      long: "These traditional protection stickers feature ancient symbols believed to ward off negative energy and bad luck. Perfect for your phone, laptop, car, or any personal item.",
      meaning: "The Evil Eye is a universal symbol of protection found in many cultures. In Eastern traditions, these stickers carry the power to deflect envy and negative vibes, keeping you safe from harm.",
      usage: "Apply to your phone, laptop, car window, or any item you want to protect. Can also be placed in your home or office for space protection."
    },
    tags: ["protection", "sticker", "evil-eye", "lucky", "affordable"],
    benefits: [
      "Wards off negative energy",
      "Affordable protection",
      "Easy to apply",
      "Traditional symbolism"
    ],
    specifications: {
      material: "High-quality vinyl sticker",
      size: "Approximately 2 inches (5cm)",
      quantity: "5 stickers per pack",
      design: "Traditional Chinese protection symbols",
      durability: "Waterproof and UV resistant"
    },
    shipping: {
      freeThreshold: 49,
      standardDays: "7-15",
      expressDays: "5-7",
      standardCost: 4.99,
      expressCost: 12.99
    },
    cjProductId: "CJ-EE-009",
    cjCost: 1.00
  }
];

// Categories data
const categories = [
  {
    id: "bracelets",
    name: "Crystal Bracelets",
    slug: "bracelets",
    description: "Handcrafted crystal bracelets for protection, wealth, love, and wisdom.",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=collection%20of%20crystal%20bracelets%20various%20colors%20mystical%20display%20dark%20elegant%20background&image_size=landscape_4_3",
    subcategories: [
      { id: "protection", name: "Protection Series", description: "Shield yourself from negative energy" },
      { id: "wealth", name: "Wealth Series", description: "Attract abundance and prosperity" },
      { id: "love", name: "Love Series", description: "Open your heart to love energy" },
      { id: "wisdom", name: "Wisdom Series", description: "Enhance intuition and clarity" }
    ],
    productCount: 3
  },
  {
    id: "feng-shui",
    name: "Feng Shui Home",
    slug: "feng-shui",
    description: "Traditional Feng Shui items to harmonize your living space.",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=feng%20shui%20home%20decor%20crystal%20tree%20wealth%20symbols%20elegant%20living%20room%20setup&image_size=landscape_4_3",
    subcategories: [
      { id: "wealth-items", name: "Wealth Symbols" },
      { id: "protection-items", name: "Protection Items" }
    ],
    productCount: 1
  },
  {
    id: "talismans",
    name: "Talismans & Charms",
    slug: "talismans",
    description: "Authentic Eastern talismans and lucky charms.",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=collection%20of%20chinese%20talismans%20peach%20wood%20charms%20red%20cords%20mystical%20display&image_size=landscape_4_3",
    subcategories: [
      { id: "taoist", name: "Taoist Talismans" },
      { id: "buddhist", name: "Buddhist Amulets" },
      { id: "lucky", name: "Lucky Charms" }
    ],
    productCount: 1
  }
];

// Helper functions
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

function getProductsByTag(tag) {
  return products.filter(p => p.tags.includes(tag));
}

function getBestSellers() {
  return products.filter(p => p.tags.includes('bestseller'));
}

function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return [];
  
  // Get products from same category or with similar tags
  const related = products.filter(p => 
    p.id !== productId && 
    (p.category === product.category || p.tags.some(tag => product.tags.includes(tag)))
  );
  
  return related.slice(0, limit);
}

function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(price);
}

function calculateDiscount(originalPrice, currentPrice) {
  return Math.round((1 - currentPrice / originalPrice) * 100);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    categories,
    getProductById,
    getProductsByCategory,
    getProductsByTag,
    getBestSellers,
    getRelatedProducts,
    formatPrice,
    calculateDiscount
  };
}