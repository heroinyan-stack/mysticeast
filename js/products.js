// MysticEast - Product Data (Updated with Diverse Categories)
// Last Updated: 2026-06-24

const products = [
  // ========== 水晶手链类 ==========
  {
    id: 'obsidian-bracelet',
    name: 'Black Obsidian Protection Bracelet',
    shortName: 'Black Obsidian',
    category: 'Bracelet',
    subcategory: 'Protection',
    sku: 'ME-OBS-001',
    price: 29.99,
    originalPrice: 45.99,
    cost: 3.00,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 234,
    tags: ['bestseller', 'protection'],
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
    ],
    description: {
      short: 'Powerful black obsidian bracelet for protection against negative energy. Handcrafted with genuine volcanic glass beads.',
      long: 'This Black Obsidian Protection Bracelet is carefully handcrafted with 8mm genuine volcanic black obsidian beads. Black obsidian has been used for centuries as a powerful protective stone, believed to shield its wearer from negativity, absorb harmful energies, and promote emotional grounding. Each bracelet features an adjustable cord that fits most wrist sizes, making it perfect for both men and women. The natural glossy finish of each bead makes this piece as visually striking as it is spiritually meaningful.',
      meaning: 'Black Obsidian is known as the "Stone of Truth" and is one of the most powerful protective crystals. It helps to pull negativity away from you, making it ideal for empaths and those who work in high-stress environments. Many believe it helps to release emotional blockages and promotes a sense of clarity and focus.',
      usage: 'Wear on your left hand (receiving hand) for maximum protective benefits. For cleansing, rinse under running water weekly and let charge under moonlight. Avoid exposure to harsh chemicals and extreme temperatures.'
    },
    variants: [
      { size: '6mm', price: 24.99 },
      { size: '8mm', price: 29.99 },
      { size: '10mm', price: 34.99 }
    ],
    benefits: [
      'Protection from negative energy',
      'Grounding and stability',
      'Emotional healing',
      'Truth and clarity'
    ],
    specifications: {
      material: 'Natural Black Obsidian',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable (fits 6-9 inches)',
      weight: '15-25g',
      origin: 'Mexico'
    }
  },
  {
    id: 'amethyst-bracelet',
    name: 'Amethyst Wisdom Bracelet',
    shortName: 'Amethyst',
    category: 'Bracelet',
    subcategory: 'Wisdom',
    sku: 'ME-AMT-001',
    price: 32.99,
    originalPrice: 48.99,
    cost: 3.50,
    shippingCost: 2.50,
    rating: 4.9,
    reviews: 189,
    tags: ['bestseller', 'wisdom'],
    images: [
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'
    ],
    description: {
      short: 'Beautiful amethyst bracelet for spiritual growth and inner peace. Known as the stone of transmutation.',
      long: 'Our Amethyst Wisdom Bracelet features genuine 8mm amethyst beads, prized for their stunning purple hues ranging from light lavender to deep violet. Amethyst has been revered since ancient times as a stone of wisdom, spiritual protection, and calm. This bracelet is perfect for meditation practitioners, healers, or anyone seeking to enhance their intuition and connect with higher consciousness.',
      meaning: 'Amethyst is known as the "Stone of Spirituality and Contentment." It is believed to activate the Third Eye and Crown Chakras, enhancing dream recall, spiritual awareness, and psychic abilities. Many use it for meditation, stress relief, and to promote restful sleep.',
      usage: 'Best worn during meditation or spiritual practices. Place beside your bed for peaceful sleep. Cleanse monthly with sage smoke or by placing on a quartz cluster. The purple color deepens with regular wear.'
    },
    variants: [
      { size: '6mm', price: 27.99 },
      { size: '8mm', price: 32.99 },
      { size: '10mm', price: 39.99 }
    ],
    benefits: [
      'Spiritual awareness',
      'Enhanced intuition',
      'Stress relief',
      'Better sleep quality'
    ],
    specifications: {
      material: 'Natural Amethyst',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable',
      weight: '15-25g',
      origin: 'Brazil'
    }
  },
  {
    id: 'rose-quartz-bracelet',
    name: 'Rose Quartz Love Bracelet',
    shortName: 'Rose Quartz',
    category: 'Bracelet',
    subcategory: 'Love',
    sku: 'ME-RSQ-001',
    price: 27.99,
    originalPrice: 39.99,
    cost: 2.80,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 156,
    tags: ['love', 'popular'],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80'
    ],
    description: {
      short: 'Delicate rose quartz bracelet to attract love and open the heart. The ultimate stone of unconditional love.',
      long: 'This Rose Quartz Love Bracelet showcases the soft, feminine beauty of genuine rose quartz, the stone universally associated with love, compassion, and emotional healing. The pale pink beads are carefully selected for their uniform color and gentle translucency. Whether worn as a personal reminder of self-love or given as a meaningful gift to someone special, this bracelet carries the essence of unconditional affection.',
      meaning: 'Rose Quartz is known as the stone of unconditional love. It teaches the true essence of love by opening the heart to give and receive love from others. It helps dissolve emotional wounds and old resentments, replacing them with feelings of peace and harmony.',
      usage: 'Wear daily as a reminder to practice self-love. Place on your nightstand to attract romantic dreams. Pair with rose quartz crystal nearby for amplified love energy.'
    },
    variants: [
      { size: '6mm', price: 24.99 },
      { size: '8mm', price: 27.99 },
      { size: '10mm', price: 32.99 }
    ],
    benefits: [
      'Heart chakra activation',
      'Self-love and acceptance',
      'Attracting romantic love',
      'Emotional healing'
    ],
    specifications: {
      material: 'Natural Rose Quartz',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable',
      weight: '15-25g',
      origin: 'Madagascar'
    }
  },
  {
    id: 'citrine-bracelet',
    name: 'Citrine Abundance Bracelet',
    shortName: 'Citrine',
    category: 'Bracelet',
    subcategory: 'Wealth',
    sku: 'ME-CTR-001',
    price: 32.99,
    originalPrice: 49.99,
    cost: 3.20,
    shippingCost: 2.50,
    rating: 4.6,
    reviews: 98,
    tags: ['wealth', 'success'],
    images: [
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80'
    ],
    description: {
      short: 'Sunny citrine bracelet for prosperity and success. Known as the merchants stone for attracting wealth.',
      long: 'Our Citrine Abundance Bracelet features vibrant, golden-yellow citrine beads that capture the warmth and energy of the sun. Citrine is one of the few stones that never needs cleansing as it does not hold negative energies. This solar-powered crystal is prized for its ability to attract abundance, manifest goals, and infuse life with joy and optimism.',
      meaning: 'Citrine is known as the "Stone of Abundance" and "Merchant Stone." It radiates the energy of personal power, success, and prosperity. Many believe it helps attract wealth, improves motivation, and activates the solar plexus chakra for greater self-confidence.',
      usage: 'Wear on your dominant hand (giving hand) to manifest your intentions into reality. Place in your wealth corner (southeast) of your home or office. Ideal for business owners and entrepreneurs.'
    },
    variants: [
      { size: '6mm', price: 28.99 },
      { size: '8mm', price: 32.99 },
      { size: '10mm', price: 39.99 }
    ],
    benefits: [
      'Attracting prosperity',
      'Manifestation power',
      'Positive energy',
      'Self-confidence boost'
    ],
    specifications: {
      material: 'Natural Citrine',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable',
      weight: '15-25g',
      origin: 'Brazil'
    }
  },
  {
    id: 'tiger-eye-bracelet',
    name: 'Tiger Eye Courage Bracelet',
    shortName: 'Tiger Eye',
    category: 'Bracelet',
    subcategory: 'Strength',
    sku: 'ME-TIE-001',
    price: 29.99,
    originalPrice: 44.99,
    cost: 2.90,
    shippingCost: 2.50,
    rating: 4.5,
    reviews: 87,
    tags: ['courage', 'strength'],
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'
    ],
    description: {
      short: 'Bold tiger eye bracelet for strength and protection. The chatoyant bands bring focus and determination.',
      long: 'This Tiger Eye Courage Bracelet showcases the remarkable chatoyant effect of genuine tiger eye gemstone, with golden-brown bands that shimmer like a cats eye. Tiger eye is treasured for its grounding properties and ability to balance emotions while promoting mental clarity and practical decision-making.',
      meaning: 'Tiger Eye is known as the "Stone of Focus and Courage." It helps you set clear intentions and take decisive action toward your goals. Many believe it protects travelers, brings good luck, and helps manifest ideas into reality.',
      usage: 'Wear during times when you need extra courage or focus. Ideal for interviews, presentations, or important decisions. Place on your desk for enhanced productivity.'
    },
    variants: [
      { size: '6mm', price: 25.99 },
      { size: '8mm', price: 29.99 },
      { size: '10mm', price: 35.99 }
    ],
    benefits: [
      'Mental clarity',
      'Courage and confidence',
      'Grounding energy',
      'Good luck charm'
    ],
    specifications: {
      material: 'Natural Tiger Eye',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable',
      weight: '18-28g',
      origin: 'South Africa'
    }
  },

  // ========== 水晶项链类 ==========
  {
    id: 'seven-chakra-necklace',
    name: '7 Chakra Raw Crystal Necklace',
    shortName: '7 Chakra Necklace',
    category: 'Necklace',
    subcategory: 'Balance',
    sku: 'ME-7CH-001',
    price: 34.99,
    originalPrice: 54.99,
    cost: 4.50,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 145,
    tags: ['bestseller', 'chakra', 'balance'],
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80'
    ],
    description: {
      short: '7 chakra healing necklace with genuine raw crystals. Perfect for energy balancing and spiritual practice.',
      long: 'This stunning 7 Chakra Raw Crystal Necklace features seven genuine semi-precious stones corresponding to each of the bodys main energy centers: Root (Red Jasper), Sacral (Carnelian), Solar Plexus (Tiger Eye), Heart (Rose Quartz), Throat (Sodalite), Third Eye (Amethyst), and Crown (Clear Quartz). Each crystal is hand-selected for its natural beauty and energy properties, creating a powerful tool for spiritual practitioners and energy healing.',
      meaning: 'The 7 chakra system is an ancient concept from Eastern traditions describing the bodys main energy centers. Each chakra governs different aspects of physical, emotional, and spiritual well-being. Balancing all seven chakras is believed to promote overall harmony and vitality.',
      usage: 'Wear as a daily reminder to maintain energetic balance. Place on a crystal grid during meditation to amplify healing work. Cleanse weekly by setting on a selenite charging plate.'
    },
    variants: [
      { type: 'Raw Crystal', price: 34.99 },
      { type: 'Polished Beads', price: 32.99 },
      { type: 'With Pendant', price: 39.99 }
    ],
    benefits: [
      'Full chakra balancing',
      'Energy alignment',
      'Spiritual awareness',
      'Holistic healing support'
    ],
    specifications: {
      material: '7 Natural Crystals',
      beadSize: '8-10mm each',
      length: '18-20 inches',
      cord: 'Adjustable Elastic',
      origin: 'Mixed'
    }
  },
  {
    id: 'crystal-point-necklace',
    name: 'Raw Crystal Point Pendant Necklace',
    shortName: 'Crystal Point Necklace',
    category: 'Necklace',
    subcategory: 'Clarity',
    sku: 'ME-CPN-001',
    price: 29.99,
    originalPrice: 45.99,
    cost: 3.50,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 112,
    tags: ['popular', 'clarity'],
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80'
    ],
    description: {
      short: 'Elegant raw crystal point pendant necklace. Natural terminator crystal for energy direction.',
      long: 'This Raw Crystal Point Pendant Necklace features a genuine faceted crystal point suspended on an adjustable silver-tone chain. Crystal points are natural energy conductors that can draw in, store, or direct energy depending on intention. The points single termination makes it especially powerful for sending healing energy outward or into other crystals.',
      meaning: 'Crystal points are considered master healers in the crystal kingdom. They amplify energy and intention, making them perfect for meditation, crystal grids, or as a personal power amulet. Points directed upward channel energy from above; points directed downward draw energy from the earth.',
      usage: 'Point directed DOWN = draws grounding energy. Point directed UP = channels spiritual energy. Choose based on your intention. Cleanse regularly by smudging or using sound (singing bowl).'
    },
    variants: [
      { type: 'Clear Quartz', price: 27.99 },
      { type: 'Amethyst', price: 29.99 },
      { type: 'Rose Quartz', price: 29.99 },
      { type: 'Black Obsidian', price: 29.99 }
    ],
    benefits: [
      'Energy amplification',
      'Clarity of thought',
      'Manifestation boost',
      'Meditation enhancement'
    ],
    specifications: {
      material: 'Natural Crystal Point',
      pointSize: '2-3cm',
      chain: '18 inches (adjustable)',
      metal: 'Silver-plated Alloy',
      origin: 'Brazil / Madagascar'
    }
  },

  // ========== 风水摆件类 ==========
  {
    id: 'feng-shui-crystal-tree',
    name: '7 Color Crystal Wealth Tree',
    shortName: 'Crystal Wealth Tree',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-FCT-001',
    price: 54.99,
    originalPrice: 79.99,
    cost: 6.50,
    shippingCost: 4.00,
    rating: 4.6,
    reviews: 89,
    tags: ['fengshui', 'wealth', 'home'],
    images: [
      'https://images.unsplash.com/photo-1594488518160-8d596e86cb88?w=600&q=80',
      'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
    ],
    description: {
      short: 'Handcrafted 7-color crystal wealth tree for abundance. Brings positive energy and prosperity to any space.',
      long: 'This magnificent 7 Color Crystal Wealth Tree features hundreds of tiny crystal beads in seven auspicious colors representing all the major chakras and energy meridians. Each tree is carefully handcrafted with genuine crystal chips mounted on a wooden trunk. According to Feng Shui principles, the crystal wealth tree activates the wealth corner of your space while attracting positive chi and neutralizing negative energy.',
      meaning: 'In Feng Shui, Crystal Wealth Trees symbolize growth, vitality, and prosperity. Placing one in the southeast corner of your home or office is believed to activate the wealth and abundance sector. The 7 colors correspond to different types of luck: health, love, career, creativity, wisdom, spirituality, and finances.',
      usage: 'Place in the southeast corner of your living room, office, or shop for maximum wealth-attracting power. Position on a surface at waist level or higher. Keep healthy by dusting weekly. Does not require cleansing as it continuously generates positive energy.'
    },
    variants: [
      { size: 'Small (15cm)', price: 44.99 },
      { size: 'Medium (20cm)', price: 54.99 },
      { size: 'Large (28cm)', price: 69.99 }
    ],
    benefits: [
      'Wealth attraction',
      'Positive energy flow',
      'Space harmonization',
      'Decorative beauty'
    ],
    specifications: {
      material: 'Crystal Beads + Wooden Base',
      height: '15-28cm (selectable)',
      base: '6cm diameter',
      weight: '200-400g',
      origin: 'Handcrafted'
    }
  },
  {
    id: 'lucky-cat-figurine',
    name: 'Solar-Powered Lucky Cat',
    shortName: 'Lucky Cat',
    category: 'Feng Shui',
    subcategory: 'Prosperity',
    sku: 'ME-LCF-001',
    price: 34.99,
    originalPrice: 49.99,
    cost: 4.50,
    shippingCost: 3.00,
    rating: 4.8,
    reviews: 167,
    tags: ['fengshui', 'popular', 'home'],
    images: [
      'https://images.unsplash.com/photo-1578899952107-9c342f9bf006?w=600&q=80',
      'https://images.unsplash.com/photo-1582711010-7b2f5cbd6c42?w=600&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80'
    ],
    description: {
      short: 'Adorable solar-powered Maneki Neko that waves continuously. Brings good fortune, customers, and positive energy.',
      long: 'This charming Solar-Powered Lucky Cat (Maneki Neko) features an adorable cat in traditional Japanese style, perpetually waving its paw to invite good fortune and customers. The built-in solar panel powers a small motor that keeps the paw waving all day without batteries. Made from high-quality resin with gold and white coloring, its both a powerful Feng Shui symbol and a delightful decorative piece.',
      meaning: 'Maneki Neko (Beckoning Cat) has been a staple of Japanese and Chinese business culture for over 400 years. The left paw beckons customers and good luck; the right paw invites wealth and money. Having one in your shop, restaurant, or home is believed to attract prosperity, protection, and success.',
      usage: 'Place in the front of your business or home, facing toward the entrance. The white and gold combination symbolizes purity and wealth. Best positioned at the height of your cash register or main entrance table. Place on your left side (wealth side) for maximum effect.'
    },
    variants: [
      { type: 'White/Gold (Small)', price: 24.99 },
      { type: 'White/Gold (Medium)', price: 34.99 },
      { type: 'White/Gold (Large)', price: 44.99 }
    ],
    benefits: [
      'Customer attraction',
      'Wealth activation',
      'Good fortune',
      'Space beautification'
    ],
    specifications: {
      material: 'Resin + Solar Panel',
      color: 'White + Gold',
      size: '10-18cm',
      power: 'Solar (no batteries needed)',
      origin: 'China'
    }
  },
  {
    id: 'feng-shui-wind-chime',
    name: 'Metal 7-Tube Wind Chime',
    shortName: 'Wind Chime',
    category: 'Feng Shui',
    subcategory: 'Harmony',
    sku: 'ME-FWC-001',
    price: 39.99,
    originalPrice: 59.99,
    cost: 5.00,
    shippingCost: 4.00,
    rating: 4.5,
    reviews: 76,
    tags: ['fengshui', 'harmony', 'outdoor'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'
    ],
    description: {
      short: 'Traditional 7-tube metal wind chime for positive energy. Perfect for outdoor spaces and garden decoration.',
      long: 'This Traditional 7-Tube Wind Chime combines ancient Feng Shui wisdom with beautiful craftsmanship. The seven tubes represent the seven notes of the musical scale and the seven stars of the Big Dipper constellation. When the wind blows, the gentle tones are believed to attract positive chi, disperse negative energy, and bring peace and harmony to your environment.',
      meaning: 'Wind chimes have been used in Eastern cultures for thousands of years as tools for energy cultivation. The gentle sounds they produce are thought to activate stagnant energy, making it flow more freely. In Feng Shui, they are used to remedy Sha Qi (killing energy) and to enhance the flow of beneficial chi.',
      usage: 'Hang near entrances, in gardens, on porches, or in any area where energy feels stagnant. Best positioned where gentle breezes can activate the tubes. Avoid hanging directly over beds as the sounds may disturb sleep. Place in the center or corners of your space for energy circulation.'
    },
    variants: [
      { type: 'Silver', price: 39.99 },
      { type: 'Gold', price: 44.99 },
      { type: 'Bronze', price: 44.99 }
    ],
    benefits: [
      'Energy circulation',
      'Negative energy dispersion',
      'Peace and tranquility',
      'Sound healing'
    ],
    specifications: {
      material: 'Iron + Copper Tubes',
      tubes: '7 tubes',
      length: '50cm',
      weight: '350g',
      origin: 'China'
    }
  },

  // ========== 塔罗/占卜类 ==========
  {
    id: 'tarot-cards-deck',
    name: 'Rider-Waite Tarot Deck',
    shortName: 'Tarot Deck',
    category: 'Tarot',
    subcategory: 'Divination',
    sku: 'ME-TTD-001',
    price: 24.99,
    originalPrice: 39.99,
    cost: 3.00,
    shippingCost: 2.00,
    rating: 4.9,
    reviews: 203,
    tags: ['bestseller', 'tarot', 'spiritual'],
    images: [
      'https://images.unsplash.com/photo-1509813682913-3e3b1f2af3f3?w=600&q=80',
      'https://images.unsplash.com/photo-1573455494055-c703f7b7fb59?w=600&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80'
    ],
    description: {
      short: 'The classic Rider-Waite-Smith tarot deck. 78 cards with comprehensive guide booklet for beginners.',
      long: 'This is the iconic Rider-Waite Tarot Deck, created by Pamela Colman Smith under the direction of Arthur Edward Waite in 1909. Widely regarded as the most influential tarot deck in history, it features vivid symbolic imagery on every card that has inspired millions of readers worldwide. This high-quality replica includes all 78 cards plus an English instruction guide explaining the meanings and reading techniques.',
      meaning: 'The Rider-Waite deck is the gold standard for tarot readers, offering clear, intuitive symbolism that works for both beginners and experienced readers. The Major Arcana (22 cards) represent major life themes and spiritual lessons, while the Minor Arcana (56 cards) reflect everyday situations and challenges.',
      usage: 'Ideal for daily card draws, one-card meditations, or full 3-card past-present-future spreads. The included guide makes it perfect for beginners learning tarot. Shuffle daily and draw one card for the day ahead, or use for in-depth Celtic Cross readings as you advance.'
    },
    variants: [
      { type: 'Standard Edition', price: 24.99 },
      { type: 'Gold Border Edition', price: 29.99 },
      { type: 'Luxe Box Set', price: 34.99 }
    ],
    benefits: [
      'Beginner-friendly guide included',
      'High-quality cardstock',
      'Vibrant full-color imagery',
      '78 cards (complete deck)'
    ],
    specifications: {
      cards: '78 cards',
      dimensions: '12 x 7cm (standard tarot size)',
      material: '350gsm cardstock',
      finish: 'Semi-gloss with lamination',
      origin: 'Printed in EU'
    }
  },
  {
    id: 'crystal-ball',
    name: 'Amethyst Crystal Ball Stand Set',
    shortName: 'Crystal Ball',
    category: 'Divination',
    subcategory: 'Scrying',
    sku: 'ME-CBL-001',
    price: 49.99,
    originalPrice: 79.99,
    cost: 8.00,
    shippingCost: 5.00,
    rating: 4.7,
    reviews: 94,
    tags: ['divination', 'spiritual', 'meditation'],
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80'
    ],
    description: {
      short: 'Beautiful amethyst crystal ball on wooden stand. Perfect for scrying, meditation, and energy work.',
      long: 'This stunning Amethyst Crystal Ball Set includes a handcrafted natural amethyst sphere mounted on an elegant wooden stand. Amethyst has been used for scrying and spiritual work since ancient times, believed to enhance intuitive abilities and connect users to higher realms of consciousness. The smooth, perfectly round ball is ideal for meditation, crystal gazing, and creating a focal point for energy work.',
      meaning: 'Crystal balls have been used for thousands of years as tools for divination and spiritual insight. Amethyst specifically is known as the stone of spiritual protection and wisdom, making it ideal for scrying and psychic work. Many believe that gazing into an amethyst sphere helps quiet the mind and opens pathways to intuitive knowledge.',
      usage: 'Place in your meditation space, altar, or any area where you practice spiritual work. For scrying, dim the lights and gaze softly into the sphere, allowing images to form without forcing them. Cleanse monthly with sage smoke or by placing in direct moonlight. The amethyst color deepens over time with regular use.'
    },
    variants: [
      { size: 'Small (5cm)', price: 39.99 },
      { size: 'Medium (6cm)', price: 49.99 },
      { size: 'Large (8cm)', price: 69.99 }
    ],
    benefits: [
      'Enhanced intuition',
      'Spiritual insight',
      'Meditation focal point',
      'Space energy enhancement'
    ],
    specifications: {
      material: 'Natural Amethyst',
      diameter: '5-8cm (selectable)',
      stand: 'Wooden',
      weight: '300-600g',
      origin: 'Brazil'
    }
  },

  // ========== 香薰/净化类 ==========
  {
    id: 'white-sage-smudge-kit',
    name: 'California White Sage Smudge Kit',
    shortName: 'White Sage',
    category: 'Smudging',
    subcategory: 'Cleansing',
    sku: 'ME-WSK-001',
    price: 14.99,
    originalPrice: 24.99,
    cost: 1.50,
    shippingCost: 1.50,
    rating: 4.8,
    reviews: 312,
    tags: ['cleansing', 'spiritual', 'bestseller'],
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80'
    ],
    description: {
      short: 'Authentic California white sage bundle for energy cleansing. Includes abalone shell and feather for traditional smudging.',
      long: 'This White Sage Smudge Kit contains three premium California White Sage bundles, an abalone shell (traditional smudge vessel), and a sage hen feather for fanning the smoke. White sage has been used by indigenous cultures for thousands of years as a sacred cleansing tool, believed to purify spaces, objects, and people of negative energies. The included guide explains traditional smudging practices.',
      meaning: 'White sage is considered a sacred plant with powerful cleansing properties. Burning sage, known as smudging, is believed to release negative ions that neutralize harmful energies. Many use it to cleanse a new home, purify objects, prepare for rituals, or clear personal energy after difficult situations.',
      usage: 'Light the tip of the sage bundle, let it flame briefly, then blow out to produce smoke. Fan the smoke around your space, over yourself, or over objects you wish to cleanse. Keep the abalone shell underneath to catch ashes. Allow the bundle to burn out safely in a fireproof dish. Never leave unattended.'
    },
    variants: [
      { type: '3 Bundle Pack', price: 14.99 },
      { type: 'Smudge Kit (with shell)', price: 19.99 },
      { type: 'Large Bundle + Palo Santo', price: 24.99 }
    ],
    benefits: [
      'Space purification',
      'Negative energy removal',
      'Spiritual preparation',
      'Meditation enhancement'
    ],
    specifications: {
      material: 'California White Sage',
      bundleSize: '3-4 inches',
      quantity: '3 bundles',
      includes: 'Abalone Shell + Feather (selectable)',
      origin: 'USA'
    }
  },
  {
    id: 'healing-crystal-candle',
    name: 'Rose Quartz Crystal Candle',
    shortName: 'Crystal Candle',
    category: 'Candles',
    subcategory: 'Meditation',
    sku: 'ME-HCC-001',
    price: 29.99,
    originalPrice: 44.99,
    cost: 4.50,
    shippingCost: 3.00,
    rating: 4.6,
    reviews: 128,
    tags: ['candle', 'love', 'gift'],
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80'
    ],
    description: {
      short: 'Hand-poured soy crystal candle with real rose quartz. Burns for 45+ hours with natural lavender scent.',
      long: 'This Hand-Poured Rose Quartz Crystal Candle combines the beauty of genuine rose quartz with the aromatherapy benefits of natural soy wax. Each candle is crafted with sustainable soy wax, infused with calming lavender essential oil, and topped with authentic rose quartz chips that float beautifully as the wax melts. The warm, soft glow creates the perfect ambiance for meditation, relaxation, and romantic evenings.',
      meaning: 'Rose quartz symbolizes unconditional love and emotional healing. Combined with lavender for calm and peace, this candle creates an atmosphere of love, harmony, and spiritual connection. Light it during heart-opening meditations, love rituals, or whenever you need to create a nurturing space.',
      usage: 'Trim wick to 1/4 inch before each use. Burn for at least 2 hours to prevent tunneling. Keep away from drafts. The rose quartz chips on top can be removed and used for meditation once the wax cools. The candle jar can be repurposed after use.'
    },
    variants: [
      { type: 'Rose Quartz (Love)', price: 29.99 },
      { type: 'Amethyst (Spiritual)', price: 29.99 },
      { type: 'Clear Quartz (Clarity)', price: 29.99 }
    ],
    benefits: [
      'Natural soy wax (non-toxic)',
      'Real crystals embedded',
      'Long 45+ hour burn time',
      'Gift-ready packaging'
    ],
    specifications: {
      material: 'Soy Wax + Real Rose Quartz',
      scent: 'Lavender',
      burnTime: '45+ hours',
      size: '8oz / 230ml',
      origin: 'Handcrafted'
    }
  },

  // ========== 水晶原石类 ==========
  {
    id: 'amethyst-cluster',
    name: 'Natural Amethyst Cluster',
    shortName: 'Amethyst Cluster',
    category: 'Crystals',
    subcategory: 'Protection',
    sku: 'ME-ACL-001',
    price: 59.99,
    originalPrice: 89.99,
    cost: 10.00,
    shippingCost: 6.00,
    rating: 4.9,
    reviews: 67,
    tags: ['crystals', 'rare', 'home'],
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'
    ],
    description: {
      short: 'Stunning natural amethyst cluster with deep purple points. Each piece is unique - a true collector piece.',
      long: 'This Natural Amethyst Cluster features beautiful deep purple crystal points growing from a natural matrix. Each cluster is completely unique, formed over millions of years in volcanic rock. The rich purple color and perfect crystal terminations make this a stunning display piece for any space. Clusters of this quality are highly prized by crystal collectors and energy practitioners alike.',
      meaning: 'Amethyst clusters are considered among the most powerful forms of amethyst for energy work. Unlike points or tumbled stones, clusters generate and radiate energy continuously without needing to be directed. Place one in your home or workspace to create a protective field of high-vibration energy. Clusters can also be used to charge and cleanse other crystals.',
      usage: 'Place in living spaces for continuous protective and calming energy. Position near computers and electronics to neutralize EMF radiation. Use as a charging station for other crystals by placing them on top overnight. Does not require cleansing - just dust occasionally.'
    },
    variants: [
      { size: 'Small (100-150g)', price: 44.99 },
      { size: 'Medium (200-300g)', price: 59.99 },
      { size: 'Large (400-500g)', price: 89.99 }
    ],
    benefits: [
      'Continuous energy generation',
      'Space protection',
      'Crystal charging station',
      'Stunning home decor'
    ],
    specifications: {
      material: 'Natural Amethyst',
      weight: '100-500g (selectable)',
      color: 'Deep Purple',
      origin: 'Uruguay / Brazil',
      note: 'Natural product - size and shape vary'
    }
  },
  {
    id: 'raw-crystal-set',
    name: '7 Chakra Raw Crystal Healing Set',
    shortName: 'Crystal Set',
    category: 'Crystals',
    subcategory: 'Healing',
    sku: 'ME-RCS-001',
    price: 29.99,
    originalPrice: 45.99,
    cost: 4.00,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 156,
    tags: ['healing', 'beginners', 'gift'],
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80'
    ],
    description: {
      short: 'Complete 7 chakra healing crystal set. Perfect for beginners, crystal grids, or meaningful gift.',
      long: 'This Complete 7 Chakra Healing Set includes seven genuine raw crystal points, one for each energy center of the body. Each stone is hand-selected for its color and energy properties, corresponding to the seven main chakras: Root (Red Jasper), Sacral (Orange Carnelian), Solar Plexus (Golden Tiger Eye), Heart (Pink Rose Quartz), Throat (Blue Sodalite), Third Eye (Purple Amethyst), and Crown (White Clear Quartz). Comes in a velvet pouch with chakra guide.',
      meaning: 'This set provides everything you need to work with the chakra system. Place stones on corresponding body areas during meditation, arrange them in a grid pattern, or simply keep them nearby to maintain energetic balance. Each stone carries the unique vibration of its associated chakra.',
      usage: 'Place stones on your body during meditation: Root at the base of spine, Sacral below navel, Solar Plexus above navel, Heart on chest, Throat at throat, Third Eye on forehead, Crown on top of head. Or arrange in a straight line from Root to Crown. Keep the pouch handy for travel or when you need quick chakra balancing.'
    },
    variants: [
      { type: '7 Stones (Beginner)', price: 24.99 },
      { type: '7 Stones + Pouch + Guide', price: 29.99 },
      { type: '12 Stones (Zodiac Set)', price: 34.99 }
    ],
    benefits: [
      'Complete chakra set',
      'Travel-friendly pouch included',
      'Hand-selected quality',
      'Ideal gift for beginners'
    ],
    specifications: {
      material: '7 Natural Crystals',
      stoneSize: '2-3cm each',
      quantity: '7 stones',
      includes: 'Velvet Pouch + Chakra Guide',
      origin: 'Mixed origins'
    }
  },

  // ========== 护身符/挂饰类 ==========
  {
    id: 'evil-eye-bracelet',
    name: 'Turkish Evil Eye Protection Bracelet',
    shortName: 'Evil Eye',
    category: 'Talisman',
    subcategory: 'Protection',
    sku: 'ME-EEB-001',
    price: 19.99,
    originalPrice: 29.99,
    cost: 1.50,
    shippingCost: 1.50,
    rating: 4.8,
    reviews: 245,
    tags: ['protection', 'popular', 'gift'],
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'
    ],
    description: {
      short: 'Traditional Turkish evil eye bracelet for protection. Recognized worldwide as a powerful protective amulet.',
      long: 'This Turkish Evil Eye Protection Bracelet features the iconic nazar (evil eye) charm - a blue and white concentric circle that has served as a powerful protective amulet across Mediterranean and Middle Eastern cultures for over 5,000 years. The charm is crafted from glass using traditional techniques, creating that distinctive swirling pattern. The adjustable cord fits most wrist sizes and can also be worn as an anklet.',
      meaning: 'The evil eye (nazar) is one of the most universally recognized symbols of protection against malevolent gazes and negative energy. Believed to reflect harmful looks back to their source, this charm has been worn and displayed across Turkey, Greece, and the Middle East for millennia. Many believe it protects the wearer from curses, envious glances, and general misfortune.',
      usage: 'Wear on your left wrist (receiving side) for personal protection. Can also be worn as an anklet or hung in homes, cars, and offices. Common placements include above doorways, near entrances, or facing outward from the home. Replace if the glass becomes cracked or chipped.'
    },
    variants: [
      { type: 'Blue/White (Classic)', price: 19.99 },
      { type: 'Gold/Blue (Premium)', price: 24.99 },
      { type: 'Set of 3', price: 29.99 }
    ],
    benefits: [
      'Universal protection symbol',
      'Lightweight and comfortable',
      'Adjustable fit',
      'Suitable for all ages'
    ],
    specifications: {
      material: 'Handcrafted Glass Nazar',
      cord: 'Adjustable Cotton',
      charmSize: '1.5cm',
      origin: 'Turkey'
    }
  },
  {
    id: 'pentagram-altar-cloth',
    name: 'Mystical Pentagram Altar Cloth',
    shortName: 'Altar Cloth',
    category: 'Altar',
    subcategory: 'Decorations',
    sku: 'ME-PAC-001',
    price: 22.99,
    originalPrice: 34.99,
    cost: 3.00,
    shippingCost: 2.00,
    rating: 4.5,
    reviews: 78,
    tags: ['altar', 'spiritual', 'decor'],
    images: [
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
      'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&q=80',
      'https://images.unsplash.com/photo-1509813682913-3e3b1f2af3f3?w=600&q=80'
    ],
    description: {
      short: 'Black velvet altar cloth with silver pentagram. Essential for spiritual practitioners and altar setup.',
      long: 'This Black Velvet Altar Cloth features an elegant silver-thread pentagram embroidered in the center, surrounded by a delicate moon and star border. Made from premium soft velvet, it drapes beautifully and protects your altar surface while creating a sacred space for ritual and meditation work. The 50x50cm size is perfect for most home altars and meditation spaces.',
      meaning: 'The pentagram has been used as a symbol of protection and spiritual wholeness across many traditions for thousands of years. When enclosed in a circle, it represents the mastery of spirit over the elements. This altar cloth creates a defined sacred space that helps practitioners shift into a spiritual mindset during rituals and meditations.',
      usage: 'Spread over your altar table or sacred space before any ritual or meditation. Place candles, crystals, and other ritual tools on top. Can also be used as a meditation cushion cover or wall hanging. Spot clean only to preserve the embroidery. Store folded in a sacred place when not in use.'
    },
    variants: [
      { size: '40x40cm (Small)', price: 18.99 },
      { size: '50x50cm (Medium)', price: 22.99 },
      { size: '60x60cm (Large)', price: 27.99 }
    ],
    benefits: [
      'Creates sacred space',
      'Protects altar surface',
      'High-quality embroidery',
      'Machine washable velvet'
    ],
    specifications: {
      material: 'Black Velvet + Silver Thread',
      size: '40-60cm (selectable)',
      design: 'Pentagram + Moon & Stars',
      care: 'Spot clean only',
      origin: 'Handcrafted'
    }
  },

  // ========== 其他玄学产品 ==========
  {
    id: 'tarot-cloth-set',
    name: 'Tarot Reading Cloth with Bag',
    shortName: 'Tarot Cloth Set',
    category: 'Tarot',
    subcategory: 'Accessories',
    sku: 'ME-TCS-001',
    price: 24.99,
    originalPrice: 39.99,
    cost: 3.50,
    shippingCost: 2.00,
    rating: 4.6,
    reviews: 92,
    tags: ['tarot', 'gift', 'accessories'],
    images: [
      'https://images.unsplash.com/photo-1509813682913-3e3b1f2af3f3?w=600&q=80',
      'https://images.unsplash.com/photo-1573455494055-c703f7b7fb59?w=600&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80'
    ],
    description: {
      short: 'Mystical tarot reading cloth with matching storage bag. Features celestial design with moon and stars.',
      long: 'This Mystical Tarot Reading Cloth set includes a beautifully designed reading cloth and matching drawstring bag for storing your deck. The cloth features a deep purple background with an elegant mandala center design, surrounded by moons, stars, and mystical symbols. Made from satin-finish polyester, it drapes beautifully and protects your cards during readings. The matching bag keeps your tarot deck safe and adds a touch of magic to your practice.',
      meaning: 'Having a dedicated reading cloth creates a sacred, intentional space for tarot work. The act of laying out your cloth signals to your subconscious that you are entering a space of reflection and insight. Many practitioners believe this ritualistic preparation enhances the accuracy and depth of readings.',
      usage: 'Spread the cloth on a flat surface before any tarot reading. Place your shuffled deck on the cloth, draw cards, and arrange them within the sacred space. Use the bag to store your deck between readings. The mystical design also works beautifully as a wall hanging or altar decoration.'
    },
    variants: [
      { type: 'Purple Mandala', price: 24.99 },
      { type: 'Black & Gold', price: 24.99 },
      { type: 'Celestial Blue', price: 24.99 }
    ],
    benefits: [
      'Complete reading set',
      'Protects your cards',
      'Enhances reading focus',
      'Beautiful gift packaging'
    ],
    specifications: {
      material: 'Satin Polyester',
      clothSize: '50 x 50cm',
      bagSize: '15 x 20cm',
      design: 'Mystical Celestial Print',
      care: 'Hand wash recommended',
      origin: 'Handcrafted'
    }
  },

  // ========== 风水吉祥摆件类 ==========
  {
    id: 'brass-pixiu',
    name: 'Brass Pixiu Wealth Figurine',
    shortName: 'Pixiu Figurine',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-PIX-001',
    price: 59.99,
    originalPrice: 89.99,
    cost: 8.00,
    shippingCost: 6.00,
    rating: 4.9,
    reviews: 127,
    tags: ['fengshui', 'bestseller', 'wealth', 'chinese'],
    images: [
      'https://images.unsplash.com/photo-1594488518160-8d596e86cb88?w=600&q=80',
      'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
    ],
    description: {
      short: 'Handcrafted brass Pixiu (Pi Yao) figurine for wealth attraction. The most powerful feng shui wealth symbol.',
      long: 'This exquisite Brass Pixiu Figurine is carefully handcrafted from solid brass, capturing every detail of this mythical Chinese creature. Pixiu (also known as Pi Yao) is one of the most powerful feng shui symbols for attracting and preserving wealth. With its dragon head, lion body, and wings, this celestial creature is believed to seek out gold and treasures, bringing prosperity to its owner. This figurine makes a stunning addition to any home, office, or business space.',
      meaning: 'Pixiu is a mythical Chinese creature known as the "Ninth Son of the Dragon King." Legend says it has a voracious appetite for gold, silver, and jewels, and because it has no anus, wealth only comes in and never goes out. It is widely revered in Chinese culture as the ultimate symbol of wealth attraction, protection, and good fortune.',
      usage: 'Place facing the main entrance of your home or business to invite wealth and prosperity. For maximum effect, position in the wealth corner (southeast area). Never place in the bedroom or bathroom. Wipe regularly with a soft cloth to keep bright and shiny. Traditionally, placing a pair (one male, one female) offers the strongest protection.'
    },
    variants: [
      { size: 'Small (8cm)', price: 39.99 },
      { size: 'Medium (12cm)', price: 59.99 },
      { size: 'Large (18cm) - Pair', price: 89.99 }
    ],
    benefits: [
      'Powerful wealth attraction',
      'Protection from negative energy',
      'Business prosperity',
      'Beautiful decorative piece'
    ],
    specifications: {
      material: 'Solid Brass',
      height: '8-18cm (selectable)',
      weight: '200-800g',
      finish: 'Polished Brass',
      origin: 'Handcrafted in China'
    }
  },
  {
    id: 'five-emperor-coins',
    name: 'Five Emperor Coins Lucky Tassel',
    shortName: 'Five Emperor Coins',
    category: 'Feng Shui',
    subcategory: 'Protection',
    sku: 'ME-FEC-001',
    price: 19.99,
    originalPrice: 29.99,
    cost: 2.00,
    shippingCost: 1.50,
    rating: 4.7,
    reviews: 198,
    tags: ['fengshui', 'popular', 'chinese', 'protection'],
    images: [
      'https://images.unsplash.com/photo-1578899952107-9c342f9bf006?w=600&q=80',
      'https://images.unsplash.com/photo-1582711010-7b2f5cbd6c42?w=600&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80'
    ],
    description: {
      short: 'Traditional five emperor coins with red tassel. Brings good luck, protection, and wealth energy.',
      long: 'This Five Emperor Coins Lucky Tassel features five bronze coins connected by a traditional red braided cord with an elegant Chinese knot and tassel. Each coin represents one of the five most prosperous emperors of the Qing Dynasty: Shunzhi, Kangxi, Yongzheng, Qianlong, and Jiaqing. Together they symbolize the power and prosperity of one of Chinas greatest golden ages.',
      meaning: 'In Chinese feng shui, five emperor coins are one of the most versatile and powerful protective charms. They combine the energy of heaven, earth, and mankind. The round shape represents heaven, the square hole represents earth, and the emperors name represents mankind. Hanging them is believed to attract wealth, ward off evil, and bring good fortune.',
      usage: 'Hang near the front door to protect your home from negative energy. Place in your wallet or purse to attract wealth. Hang in your car for safe travels. Hang near your cash register or work desk for business prosperity. The red cord and tassel amplify the protective and lucky energy.'
    },
    variants: [
      { type: 'Classic Red', price: 19.99 },
      { type: 'Gold & Red Deluxe', price: 24.99 },
      { type: 'Set of 3', price: 29.99 }
    ],
    benefits: [
      'Wealth and prosperity',
      'Negative energy protection',
      'Safe travels',
      'Business success'
    ],
    specifications: {
      material: 'Bronze Alloy Coins + Red Cord',
      coins: '5 coins (Qing Dynasty)',
      totalLength: '28-35cm',
      coinDiameter: '2.4cm',
      origin: 'China'
    }
  },
  {
    id: 'money-frog-statue',
    name: 'Three-Legged Money Frog Feng Shui',
    shortName: 'Money Frog',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-MFR-001',
    price: 44.99,
    originalPrice: 64.99,
    cost: 6.00,
    shippingCost: 4.00,
    rating: 4.8,
    reviews: 156,
    tags: ['fengshui', 'wealth', 'popular', 'chinese'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1594488518160-8d596e86cb88?w=600&q=80',
      'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80'
    ],
    description: {
      short: 'Classic three-legged money frog with coin in mouth. The legendary feng shui wealth charm for abundance.',
      long: 'This Three-Legged Money Frog (Chan Chu) figurine is a beloved feng shui symbol of wealth and prosperity. Depicted sitting on a bed of coins and ingots with a gold coin in its mouth, this golden frog is said to appear during the full moon near homes or businesses that will receive good fortune and monetary gain. The three legs represent heaven, earth, and humanity.',
      meaning: 'The Money Frog (or Three-Legged Toad) is a legendary creature in Chinese folklore. It is said that this mythical frog would appear in front of houses where great fortune was about to arrive. The coin in its mouth represents wealth being delivered to the household. In feng shui, it is one of the most powerful symbols for attracting money and financial abundance.',
      usage: 'Place near the front entrance, facing inward (not facing out the door), to invite wealth into your home. Position on your desk or near your cash register for business prosperity. Ideal placement is in the southeast (wealth) corner or the front left corner (the money corner) when standing at the front door facing inward.'
    },
    variants: [
      { size: 'Small (7cm)', price: 29.99 },
      { size: 'Medium (10cm)', price: 44.99 },
      { size: 'Large (15cm)', price: 59.99 }
    ],
    benefits: [
      'Attracts wealth and money',
      'Business prosperity',
      'Good fortune',
      'Decorative conversation piece'
    ],
    specifications: {
      material: 'Resin with Gold Finish',
      height: '7-15cm',
      width: '8-16cm',
      coinInMouth: 'Yes',
      origin: 'China'
    }
  },
  {
    id: 'bagua-mirror',
    name: 'Bagua Protection Mirror Convex',
    shortName: 'Bagua Mirror',
    category: 'Feng Shui',
    subcategory: 'Protection',
    sku: 'ME-BGM-001',
    price: 29.99,
    originalPrice: 44.99,
    cost: 4.00,
    shippingCost: 3.00,
    rating: 4.6,
    reviews: 89,
    tags: ['fengshui', 'protection', 'chinese', 'bagua'],
    images: [
      'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1594488518160-8d596e86cb88?w=600&q=80'
    ],
    description: {
      short: 'Traditional bagua convex mirror for protection. Repels negative energy and protects your space.',
      long: 'This Bagua Convex Mirror features the classic eight trigrams (bagua) symbol surrounding a convex mirror, all set in a beautifully carved wooden frame. The bagua is the fundamental concept of Chinese cosmology, representing the eight fundamental principles of reality. The convex mirror shape disperses and deflects negative energy (Sha Qi) away from your home or workplace.',
      meaning: 'The bagua (eight trigrams) is an ancient Chinese symbol from the I Ching (Book of Changes). Each trigram represents a different aspect of life: heaven, earth, thunder, wind, water, fire, mountain, and lake. Together they represent the totality of the universe. When combined with a mirror, it creates a powerful protective amulet that reflects and disperses negative influences.',
      usage: 'Hang above or beside entrances, windows, or doors that face sharp corners, T-junctions, or other sources of negative energy. Convex mirrors disperse energy outward. Note: Always hang convex mirrors OUTSIDE facing outward to deflect negative energy. Do not hang inside the home facing inward. Wipe the mirror surface regularly for maximum effectiveness.'
    },
    variants: [
      { type: 'Convex (Protection)', price: 29.99 },
      { type: 'Concave (Focus/Attract)', price: 29.99 },
      { type: 'Set of 2 (Both Types)', price: 49.99 }
    ],
    benefits: [
      'Negative energy protection',
      'Space clearing',
      'Feng shui remedy',
      'Traditional chinese symbolism'
    ],
    specifications: {
      material: 'Wood Frame + Glass Mirror',
      diameter: '12-15cm',
      design: 'Bagua Eight Trigrams',
      mirrorType: 'Convex / Concave',
      origin: 'China'
    }
  },

  // ========== 佛珠/佛教用品类 ==========
  {
    id: '108-mala-beads',
    name: 'Tibetan 108 Mala Prayer Beads',
    shortName: '108 Mala Beads',
    category: 'Buddhist',
    subcategory: 'Meditation',
    sku: 'ME-MAL-001',
    price: 34.99,
    originalPrice: 54.99,
    cost: 5.00,
    shippingCost: 2.50,
    rating: 4.9,
    reviews: 234,
    tags: ['bestseller', 'buddhist', 'meditation', 'mala'],
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80'
    ],
    description: {
      short: 'Traditional 108-bead Tibetan mala for meditation and mindfulness. Hand-knotted with guru bead and tassel.',
      long: 'This traditional 108-bead Mala is handcrafted using ancient techniques passed down through Tibetan Buddhist lineages. Each bead is separated by a hand-tied knot, creating a tactile and spiritual tool for meditation, mantra recitation, and mindfulness practice. The mala includes a traditional guru bead (3-holed bead representing the Buddha, Dharma, and Sangha) and a beautiful silk tassel symbolizing compassion and the connection to all sentient beings.',
      meaning: '108 beads is the sacred number in many Eastern spiritual traditions, representing the 108 defilements (kleshas) that must be overcome to attain enlightenment. Other interpretations include the 108 sacred sites in India, 108 marma points in Ayurveda, and 108 nadis (energy channels) in the body.',
      usage: 'Hold the mala in your right hand, draping it over your middle finger. Use your thumb to count beads, pulling each one toward you as you recite your mantra (Om Mani Padme Hum or any sacred phrase). Start at the guru bead, move through all 108 beads, then reverse direction to return. Never pass over the guru bead. Can also be worn as a necklace or bracelet for continuous spiritual benefit.'
    },
    variants: [
      { material: 'Bodhi Seed', price: 34.99 },
      { material: 'Sandalwood', price: 39.99 },
      { material: 'Black Obsidian', price: 34.99 },
      { material: 'Rosewood', price: 29.99 }
    ],
    benefits: [
      'Meditation focus tool',
      'Stress and anxiety relief',
      'Spiritual connection',
      'Wearable mindfulness reminder'
    ],
    specifications: {
      material: 'Selectable (see variants)',
      beadCount: '108 beads + guru bead',
      beadSize: '8mm',
      totalLength: '80-90cm',
      includes: 'Guru bead + Silk tassel',
      origin: 'Handcrafted in Nepal / Tibet'
    }
  },
  {
    id: 'cinnabar-bracelet',
    name: 'Cinnabar Protection Bracelet',
    shortName: 'Cinnabar Bracelet',
    category: 'Taoist',
    subcategory: 'Protection',
    sku: 'ME-CIN-001',
    price: 39.99,
    originalPrice: 59.99,
    cost: 6.00,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 167,
    tags: ['taoist', 'protection', 'chinese', 'cinnabar'],
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80'
    ],
    description: {
      short: 'Genuine cinnabar (vermilion) bracelet for powerful protection. The most sacred stone in Taoism.',
      long: 'This Cinnabar Protection Bracelet features genuine cinnabar (also known as vermilion or zhu sha) beads carefully hand-strung on a durable elastic cord. Cinnabar has been revered in Chinese culture for over 5,000 years as the most powerful protective stone. Its distinctive deep red color is associated with life force, vitality, and the power to ward off evil spirits and negative energies.',
      meaning: 'In Taoism, cinnabar is considered the stone of immortality and spiritual transformation. It was used by Taoist alchemists in their quest for longevity and enlightenment. Cinnabar is also strongly associated with protection, good fortune, and prosperity. The rich red color symbolizes fire, yang energy, and the power to transform negativity into positive energy.',
      usage: 'Wear on your left hand (receiving hand) to absorb the protective energy. Can also be worn on the right hand to project protective energy outward. Cinnabar is naturally warming and increases circulation. Do not ingest cinnabar. Avoid prolonged contact with skin if you have mercury sensitivities. Clean with a soft cloth, do not use harsh chemicals.'
    },
    variants: [
      { size: '6mm beads', price: 34.99 },
      { size: '8mm beads', price: 39.99 },
      { size: '10mm beads', price: 49.99 },
      { style: 'With Pixiu Charm', price: 49.99 }
    ],
    benefits: [
      'Powerful negative energy protection',
      'Good fortune and prosperity',
      'Vitality and life force',
      'Sacred taoist talisman'
    ],
    specifications: {
      material: 'Genuine Cinnabar',
      beadSize: '6mm / 8mm / 10mm',
      braceletSize: 'Adjustable elastic',
      color: 'Deep Vermilion Red',
      origin: 'Hunan, China'
    }
  },
  {
    id: 'peach-wood-sword',
    name: 'Taoist Peach Wood Sword',
    shortName: 'Peach Wood Sword',
    category: 'Taoist',
    subcategory: 'Protection',
    sku: 'ME-PWS-001',
    price: 29.99,
    originalPrice: 44.99,
    cost: 4.00,
    shippingCost: 3.00,
    rating: 4.7,
    reviews: 112,
    tags: ['taoist', 'protection', 'chinese', 'peachwood'],
    images: [
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&q=80'
    ],
    description: {
      short: 'Traditional Taoist peach wood sword for home protection. Wards off evil spirits and negative energy.',
      long: 'This Taoist Peach Wood Sword is hand-carved from genuine peach wood, the most revered protective wood in Chinese Taoism. The sword features intricate carvings of Taoist symbols including the bagua (eight trigrams) and the Taijitu (yin-yang symbol). Since ancient times, peach wood has been considered one of the most powerful materials for exorcising evil and protecting against negative supernatural influences.',
      meaning: 'In Chinese folklore and Taoism, the peach tree is considered the "Tree of Immortals" and its wood has powerful demon-repelling properties. The legendary Taoist master Zhang Daoling is said to have used a peach wood sword to subdue demons and evil spirits. Peach wood swords remain one of the most iconic tools of Taoist ritual practice.',
      usage: 'Hang above your front door or main entrance to protect your home from negative energy and evil spirits. Can be hung in bedrooms to prevent nightmares. Hang in the hallway facing the entrance. Does not need to be displayed openly - it works even when placed behind a door or in a closet. Replace or re-energize if it cracks or breaks (it has absorbed negative energy on your behalf).'
    },
    variants: [
      { size: 'Small (15cm) - Keychain', price: 14.99 },
      { size: 'Medium (25cm) - Wall Hang', price: 29.99 },
      { size: 'Large (40cm) - Display', price: 49.99 }
    ],
    benefits: [
      'Evil spirit protection',
      'Home blessing',
      'Nightmare prevention',
      'Traditional taoist protection'
    ],
    specifications: {
      material: 'Genuine Peach Wood',
      length: '15-40cm (selectable)',
      design: 'Bagua + Taiji carvings',
      includes: 'Red cord for hanging',
      origin: 'Hand-carved in China'
    }
  },

  // ========== 易经占卜类 ==========
  {
    id: 'i-ching-coins-set',
    name: 'I Ching Divination Coin Set',
    shortName: 'I Ching Coins',
    category: 'Divination',
    subcategory: 'I Ching',
    sku: 'ME-ICH-001',
    price: 34.99,
    originalPrice: 49.99,
    cost: 5.00,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 145,
    tags: ['divination', 'iching', 'chinese', 'oracle'],
    images: [
      'https://images.unsplash.com/photo-1509813682913-3e3b1f2af3f3?w=600&q=80',
      'https://images.unsplash.com/photo-1573455494055-c703f7b7fb59?w=600&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80'
    ],
    description: {
      short: 'Complete I Ching divination set with 3 coins, cloth, and English guide book. The ancient Chinese oracle.',
      long: 'This complete I Ching (Book of Changes) Divination Set includes three authentic Chinese bronze coins, a beautiful silk divination cloth, and a comprehensive English guidebook explaining the 64 hexagrams and how to perform readings. The I Ching is one of the oldest books in the world, dating back over 3,000 years to ancient China. It offers profound wisdom and guidance for lifes questions and decisions.',
      meaning: 'The I Ching (Yijing), or Book of Changes, is an ancient Chinese divination text and philosophical treatise. It is based on the concept that everything in the universe is in a state of flux, and that by understanding the patterns of change, we can make better decisions and align ourselves with the natural flow of the Tao. The 64 hexagrams represent all possible states of change.',
      usage: 'Place the three coins in your palm, focus on your question, shake, and toss them. Heads (dragon side) = 3, tails (character side) = 2. Sum the total. Odd = Yang (solid line), Even = Yin (broken line). Build your hexagram from bottom to top with six throws. Look up the hexagram in the guidebook for your answer. The included cloth creates a sacred space for your readings.'
    },
    variants: [
      { type: 'Basic Set (3 coins + guide)', price: 24.99 },
      { type: 'Deluxe Set (coins + cloth + book)', price: 34.99 },
      { type: 'Premium Set (wood box + everything)', price: 49.99 }
    ],
    benefits: [
      'Ancient wisdom and guidance',
      'Decision-making tool',
      'Spiritual insight',
      'Beautiful keepsake set'
    ],
    specifications: {
      includes: '3 Bronze Coins + Cloth + English Guidebook',
      coinDiameter: '2.4cm',
      clothSize: '30 x 30cm (deluxe)',
      guidebook: '64 hexagrams explained in English',
      origin: 'China'
    }
  },

  // ========== 香道/养生类 ==========
  {
    id: 'agarwood-incense-sticks',
    name: 'Premium Agarwood Incense Sticks',
    shortName: 'Agarwood Incense',
    category: 'Incense',
    subcategory: 'Meditation',
    sku: 'ME-AGR-001',
    price: 24.99,
    originalPrice: 34.99,
    cost: 3.50,
    shippingCost: 2.00,
    rating: 4.9,
    reviews: 201,
    tags: ['incense', 'meditation', 'agarwood', 'bestseller'],
    images: [
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
    ],
    description: {
      short: 'Premium natural agarwood (oud) incense sticks. Hand-rolled for meditation, relaxation, and space cleansing.',
      long: 'Our Premium Agarwood Incense Sticks are hand-rolled using genuine agarwood (also known as oud or aloeswood), one of the most precious and aromatic woods in the world. The rich, deep, woody fragrance has been prized in Eastern cultures for thousands of years for its calming, grounding, and spiritually uplifting properties. Each stick burns for approximately 45 minutes, filling your space with a warm, earthy aroma that promotes deep relaxation and inner peace.',
      meaning: 'Agarwood (chen xiang) is known as the "King of Incense" and has been used in sacred ceremonies across Buddhist, Hindu, and Islamic traditions for millennia. In Chinese medicine, it is used to move qi, calm the spirit, and open the heart. The fragrance is said to help quiet the mind, deepen meditation, and create an atmosphere of serenity and sacredness.',
      usage: 'Light the tip of the incense stick, let the flame catch for a few seconds, then gently blow out. Place in an incense holder on a heatproof surface. For meditation, light 1-2 sticks before beginning your practice. For space cleansing, walk around your space carrying the burning stick, moving clockwise. Always use in a well-ventilated area. Never leave burning incense unattended.'
    },
    variants: [
      { type: 'Agarwood (Classic)', price: 24.99 },
      { type: 'Sandalwood', price: 22.99 },
      { type: 'Mixed Pack (6 Scents)', price: 29.99 },
      { size: 'Box of 50 sticks', price: 24.99 }
    ],
    benefits: [
      'Deep relaxation and calm',
      'Meditation enhancement',
      'Space purification',
      'Stress and anxiety relief'
    ],
    specifications: {
      material: 'Natural Agarwood Powder + Bamboo Stick',
      quantity: '50 sticks per box',
      burnTime: '45 min per stick',
      length: '21cm',
      note: '100% natural, no synthetic fragrances',
      origin: 'Vietnam / Southeast Asia'
    }
  },

  // ========== 颂钵/声疗类 ==========
  {
    id: 'tibetan-singing-bowl',
    name: 'Himalayan Tibetan Singing Bowl',
    shortName: 'Singing Bowl',
    category: 'Sound Healing',
    subcategory: 'Meditation',
    sku: 'ME-SBW-001',
    price: 79.99,
    originalPrice: 119.99,
    cost: 18.00,
    shippingCost: 8.00,
    rating: 4.9,
    reviews: 178,
    tags: ['bestseller', 'meditation', 'soundhealing', 'premium'],
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80'
    ],
    description: {
      short: 'Authentic hand-hammered Tibetan singing bowl for sound healing and meditation. Produces deeply resonant tones.',
      long: 'This authentic Himalayan Singing Bowl is handcrafted in the traditional manner by Tibetan artisans using a secret alloy of seven metals, each corresponding to one of the seven chakras or planets. The bowl produces a deeply resonant, harmonic tone when struck or rubbed with the included wooden mallet. Singing bowls have been used for thousands of years in Tibetan Buddhism for meditation, ritual, and sound healing therapy.',
      meaning: 'Singing bowls (also known as Himalayan bowls or singing bowls) are believed to have originated in the Himalayan regions of Tibet, Nepal, and Bhutan over 2,500 years ago. The sound they produce is said to affect brainwave patterns, inducing deep meditative states. Many believe the vibrations can balance the chakras, clear negative energy, and promote physical, emotional, and spiritual healing.',
      usage: 'Place the bowl on the cushion in the palm of your hand. Gently tap the side of the bowl with the mallet to start the sound. For the "singing" effect, run the mallet slowly and evenly around the outside rim with consistent pressure. Experiment with speed and pressure to find the sweet spot. For meditation, simply listen to the sound and let your mind follow it into stillness. Can also be used for chakra balancing by placing on or near the body.'
    },
    variants: [
      { size: 'Small (10cm) - Beginner', price: 59.99 },
      { size: 'Medium (12cm) - Popular', price: 79.99 },
      { size: 'Large (15cm) - Premium', price: 99.99 }
    ],
    benefits: [
      'Deep meditation states',
      'Stress and anxiety relief',
      'Chakra balancing',
      'Beautiful ambient sound'
    ],
    specifications: {
      material: '7-Metal Alloy (Copper, Tin, etc.)',
      diameter: '10-15cm (selectable)',
      includes: 'Singing Bowl + Malet + Cushion',
      weight: '300-600g',
      origin: 'Handmade in Nepal / Tibet'
    }
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
