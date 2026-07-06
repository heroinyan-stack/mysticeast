// MysticEast - Product Data (Updated with Diverse Categories)
// Last Updated: 2026-07-05

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
    originalPrice: 42.99,
    cost: 4.00,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 234,
    tags: ['bestseller', 'protection'],
    images: ['images/products/obsidian-bracelet.jpg'],
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
    originalPrice: 46.99,
    cost: 4.50,
    shippingCost: 2.50,
    rating: 4.9,
    reviews: 189,
    tags: ['bestseller', 'wisdom'],
    images: ['images/products/amethyst-bracelet.jpg'],
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
    cost: 3.50,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 156,
    tags: ['love', 'popular'],
    images: ['images/products/rose-quartz-bracelet.jpg'],
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
    id: 'tiger-eye-bracelet',
    name: 'Tiger Eye Courage Bracelet',
    shortName: 'Tiger Eye',
    category: 'Bracelet',
    subcategory: 'Strength',
    sku: 'ME-TIE-001',
    price: 29.99,
    originalPrice: 42.99,
    cost: 3.80,
    shippingCost: 2.50,
    rating: 4.5,
    reviews: 87,
    tags: ['courage', 'strength'],
    images: ['images/products/tiger-eye-bracelet.jpg'],
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
  {
    id: 'red-string-bracelet',
    name: 'Kabbalah Red String Protection Bracelet',
    shortName: 'Red String Bracelet',
    category: 'Bracelet',
    subcategory: 'Protection',
    sku: 'ME-RSB-001',
    price: 11.49,
    originalPrice: 15.99,
    cost: 1.49,
    shippingCost: 1.50,
    rating: 4.8,
    reviews: 287,
    tags: ['protection', 'popular', 'bestseller'],
    images: ['images/products/red-string-bracelet.jpg'],
    description: {
      short: 'Authentic Kabbalah red string bracelet for protection. Worn by millions worldwide to ward off the evil eye.',
      long: 'This Authentic Kabbalah Red String Bracelet is tied from a continuous red thread blessed for protection. The red string tradition dates back thousands of years, rooted in Kabbalistic wisdom and embraced by cultures across the Mediterranean, Middle East, and Latin America. The bracelet is believed to ward off the evil eye and protect the wearer from envy and negative energy. Adjustable and lightweight, it is suitable for all ages and can be worn alone or stacked with other bracelets.',
      meaning: 'The red string tradition originates from Kabbalah, the ancient mystical tradition of Judaism. According to legend, the red string is wound seven times around Rachels Tomb in the Holy Land before being cut into individual bracelets. Rachel represents protection against negative forces. Worn on the left wrist (the receiving side in Kabbalah), the red string intercepts negative energy directed at the wearer.',
      usage: 'Have someone you love tie the red string on your left wrist. Make a wish or set an intention as it is tied. When the string naturally falls off, your wish is said to be heard. Replace with a new one to continue protection. Can be worn by adults and children alike.'
    },
    variants: [
      { type: 'Single Bracelet', price: 11.49 },
      { type: 'Set of 3', price: 24.99 },
      { type: 'Set of 5 (Family Pack)', price: 34.99 }
    ],
    benefits: [
      'Protection from evil eye',
      'Ward off negative energy',
      'Lightweight and comfortable',
      'Suitable for all ages'
    ],
    specifications: {
      material: 'Blessed Red Cotton Thread',
      braceletSize: 'Adjustable (fits all wrist sizes)',
      color: 'Crimson Red',
      origin: 'Tradition from Israel'
    }
  },

  // ========== 项链类 ==========
  {
    id: 'seven-chakra-necklace',
    name: '7 Chakra Raw Crystal Necklace',
    shortName: '7 Chakra Necklace',
    category: 'Necklace',
    subcategory: 'Balance',
    sku: 'ME-7CH-001',
    price: 34.99,
    originalPrice: 49.99,
    cost: 4.50,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 145,
    tags: ['bestseller', 'chakra', 'balance'],
    images: ['images/products/seven-chakra-necklace.jpg'],
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
    id: 'tarot-pendant-necklace',
    name: 'Tarot Card Pendant Necklace',
    shortName: 'Tarot Pendant',
    category: 'Necklace',
    subcategory: 'Divination',
    sku: 'ME-TPN-001',
    price: 24.99,
    originalPrice: 34.99,
    cost: 3.50,
    shippingCost: 2.00,
    rating: 4.7,
    reviews: 134,
    tags: ['tarot', 'necklace', 'popular', 'gift'],
    images: ['images/products/tarot-pendant-necklace.jpg'],
    description: {
      short: 'Mystical tarot card pendant necklace. Wear your favorite Major Arcana card as a personal amulet.',
      long: 'This Mystical Tarot Card Pendant Necklace features a delicately engraved tarot card from the Major Arcana, suspended on an adjustable silver-tone chain. Each card carries profound symbolic meaning drawn from centuries of esoteric wisdom. Whether you choose The Sun for joy, The Star for hope, The Moon for intuition, or The Lovers for connection, this necklace lets you carry the energy of your chosen card close to your heart. A perfect gift for tarot enthusiasts and spiritual seekers.',
      meaning: 'The Major Arcana of the tarot represent the major life themes and spiritual lessons we encounter on our journey. Wearing a specific card as a pendant serves as a daily reminder of its energy and wisdom. The Sun represents joy and vitality, The Star brings hope and inspiration, The Moon enhances intuition, The Lovers symbolize love and choice, The Empress embodies abundance and creativity, and The World signifies completion and wholeness.',
      usage: 'Choose the card that resonates with your current intention or life situation. Wear daily as a personal talisman. Cleanse the pendant by placing it on a selenite charging plate or under moonlight. The adjustable chain allows you to position it at heart chakra level for maximum energetic connection.'
    },
    variants: [
      { type: 'The Sun (Joy)', price: 24.99 },
      { type: 'The Star (Hope)', price: 24.99 },
      { type: 'The Moon (Intuition)', price: 24.99 },
      { type: 'The Lovers (Love)', price: 24.99 }
    ],
    benefits: [
      'Personal spiritual talisman',
      'Daily intention reminder',
      'Beautiful symbolic jewelry',
      'Meaningful gift for tarot lovers'
    ],
    specifications: {
      material: 'Stainless Steel + Silver-tone Chain',
      pendantSize: '3 x 4cm',
      chain: '20 inches (adjustable)',
      design: 'Major Arcana Tarot Card',
      origin: 'Designed in USA'
    }
  },

  // ========== 风水摆件类 ==========
  {
    id: 'brass-pixiu',
    name: 'Brass Pixiu Wealth Figurine',
    shortName: 'Pixiu Figurine',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-PIX-001',
    price: 59.99,
    originalPrice: 84.99,
    cost: 8.00,
    shippingCost: 6.00,
    rating: 4.9,
    reviews: 127,
    tags: ['fengshui', 'bestseller', 'wealth', 'chinese'],
    images: ['https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80'],
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
    images: ['images/products/money-frog.jpg'],
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
    images: ['images/products/lucky-cat.jpg'],
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
    id: 'feng-shui-fountain',
    name: 'Feng Shui Tabletop Water Fountain',
    shortName: 'Feng Shui Fountain',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-FSF-001',
    price: 89.99,
    originalPrice: 129.99,
    cost: 15.00,
    shippingCost: 8.00,
    rating: 4.7,
    reviews: 89,
    tags: ['fengshui', 'wealth', 'home', 'decor'],
    images: ['images/products/feng-shui-fountain.jpg'],
    description: {
      short: 'Beautiful tabletop feng shui water fountain with rolling crystal ball. Attracts wealth and prosperity.',
      long: 'This elegant Feng Shui Tabletop Water Fountain combines the ancient principles of water energy with modern design. In feng shui, flowing water represents the continuous flow of wealth and abundance. This fountain features a self-contained pump that circulates water gently, creating a soothing sound that masks background noise while activating positive chi. The design includes a rolling crystal ball that spins with the water flow, symbolizing the rolling in of fortune and prosperity.',
      meaning: 'In feng shui philosophy, water is one of the most powerful elements for attracting wealth and abundance. The Chinese word for water (shui) sounds similar to the word for wealth. Moving water is especially auspicious as it symbolizes the active flow of prosperity into your life. The rolling crystal ball represents the constant turning of fortune in your favor, while the gentle sound of water promotes relaxation and mental clarity.',
      usage: 'Place in the southeast corner of your home or office (the wealth sector) to activate prosperity energy. Alternatively, place near the entrance of your business to invite customers and money. Keep the water level topped up to ensure continuous flow. Add a few drops of essential oil for aromatherapy benefits. Clean the pump monthly for optimal performance.'
    },
    variants: [
      { type: 'Bamboo Style (Small)', price: 69.99 },
      { type: 'Crystal Ball Style (Medium)', price: 89.99 },
      { type: 'Multi-Tier Style (Large)', price: 119.99 }
    ],
    benefits: [
      'Wealth and prosperity activation',
      'Relaxing water sounds',
      'Air humidification',
      'Beautiful home decor'
    ],
    specifications: {
      material: 'Resin + Glass + Built-in Pump',
      size: '25 x 20 x 30cm',
      power: 'USB or AC Adapter',
      waterCapacity: '500ml',
      origin: 'China'
    }
  },

  // ========== 水晶矿石类 ==========
  {
    id: 'amethyst-cluster',
    name: 'Natural Amethyst Cluster',
    shortName: 'Amethyst Cluster',
    category: 'Crystals',
    subcategory: 'Protection',
    sku: 'ME-ACL-001',
    price: 59.99,
    originalPrice: 84.99,
    cost: 10.00,
    shippingCost: 6.00,
    rating: 4.9,
    reviews: 67,
    tags: ['crystals', 'rare', 'home'],
    images: ['images/products/amethyst-cluster.jpg'],
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
    id: 'crystal-ball',
    name: 'Amethyst Crystal Ball Stand Set',
    shortName: 'Crystal Ball',
    category: 'Divination',
    subcategory: 'Scrying',
    sku: 'ME-CBL-001',
    price: 49.99,
    originalPrice: 69.99,
    cost: 7.50,
    shippingCost: 5.00,
    rating: 4.7,
    reviews: 94,
    tags: ['divination', 'spiritual', 'meditation'],
    images: ['images/products/crystal-ball.jpg'],
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
  {
    id: 'feng-shui-crystal-tree',
    name: '7 Color Crystal Wealth Tree',
    shortName: 'Crystal Wealth Tree',
    category: 'Crystals',
    subcategory: 'Wealth',
    sku: 'ME-FCT-001',
    price: 54.99,
    originalPrice: 79.99,
    cost: 7.00,
    shippingCost: 4.00,
    rating: 4.6,
    reviews: 89,
    tags: ['fengshui', 'wealth', 'home'],
    images: ['images/products/crystal-tree.jpg'],
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

  // ========== 塔罗占卜类 ==========
  {
    id: 'tarot-cards-deck',
    name: 'Rider-Waite Tarot Deck',
    shortName: 'Tarot Deck',
    category: 'Tarot',
    subcategory: 'Divination',
    sku: 'ME-TTD-001',
    price: 24.99,
    originalPrice: 34.99,
    cost: 3.50,
    shippingCost: 2.00,
    rating: 4.9,
    reviews: 203,
    tags: ['bestseller', 'tarot', 'spiritual'],
    images: ['https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80'],
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
    images: ['images/products/i-ching-coins.jpg'],
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

  // ========== 香薰类 ==========
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
    images: ['https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80'],
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
  {
    id: 'backflow-incense-burner',
    name: 'Backflow Incense Burner Fountain',
    shortName: 'Backflow Burner',
    category: 'Incense',
    subcategory: 'Burner',
    sku: 'ME-BIB-001',
    price: 34.99,
    originalPrice: 49.99,
    cost: 4.50,
    shippingCost: 3.00,
    rating: 4.8,
    reviews: 156,
    tags: ['incense', 'meditation', 'popular', 'decor'],
    images: ['images/products/backflow-incense-burner.jpg'],
    description: {
      short: 'Mesmerizing backflow incense burner that creates a smoke waterfall. Perfect for meditation and relaxation.',
      long: 'This mesmerizing Backflow Incense Burner creates a stunning waterfall effect as smoke flows downward instead of rising. Used with special backflow incense cones (10 included), the smoke cascades down the intricate design like a gentle stream, creating a hypnotic and calming visual display. The burner features a beautiful design that doubles as a decorative piece when not in use. Perfect for meditation spaces, yoga studios, bedrooms, or any area where you want to create a serene atmosphere.',
      meaning: 'Incense has been used for thousands of years across cultures to purify spaces, deepen meditation, and connect with the divine. The backflow effect symbolizes the downward flow of blessings and the grounding of spiritual energy into the physical realm. Watching the smoke cascade is itself a meditative practice, helping to quiet the mind and induce a state of calm awareness.',
      usage: 'Place the burner on a flat, heatproof surface away from drafts. Light a backflow incense cone, let it flame briefly, then blow out. Place the cone on the top of the burner. The smoke will begin to flow downward through the design. Use in a still room for best effect. Clean regularly by wiping with a damp cloth. Includes 10 backflow cones to get started.'
    },
    variants: [
      { type: 'Lotus Design', price: 34.99 },
      { type: 'Buddha Design', price: 39.99 },
      { type: 'Mountain Design', price: 34.99 }
    ],
    benefits: [
      'Mesmerizing visual effect',
      'Meditation enhancement',
      'Space purification',
      'Beautiful decorative piece'
    ],
    specifications: {
      material: 'Ceramic',
      height: '15-20cm',
      includes: 'Burner + 10 Backflow Cones',
      usage: 'Backflow Incense Cones Only',
      origin: 'China'
    }
  },

  // ========== 佛教/冥想类 ==========
  {
    id: '108-mala-beads',
    name: 'Tibetan 108 Mala Prayer Beads',
    shortName: '108 Mala Beads',
    category: 'Buddhist',
    subcategory: 'Meditation',
    sku: 'ME-MAL-001',
    price: 14.99,
    originalPrice: 19.99,
    cost: 1.89,
    shippingCost: 2.00,
    rating: 4.9,
    reviews: 234,
    tags: ['bestseller', 'buddhist', 'meditation', 'mala'],
    images: ['https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80'],
    description: {
      short: 'Traditional 108-bead Tibetan mala for meditation and mindfulness. Hand-knotted with guru bead and tassel.',
      long: 'This traditional 108-bead Mala is handcrafted using ancient techniques passed down through Tibetan Buddhist lineages. Each bead is separated by a hand-tied knot, creating a tactile and spiritual tool for meditation, mantra recitation, and mindfulness practice. The mala includes a traditional guru bead (3-holed bead representing the Buddha, Dharma, and Sangha) and a beautiful silk tassel symbolizing compassion and the connection to all sentient beings.',
      meaning: '108 beads is the sacred number in many Eastern spiritual traditions, representing the 108 defilements (kleshas) that must be overcome to attain enlightenment. Other interpretations include the 108 sacred sites in India, 108 marma points in Ayurveda, and 108 nadis (energy channels) in the body.',
      usage: 'Hold the mala in your right hand, draping it over your middle finger. Use your thumb to count beads, pulling each one toward you as you recite your mantra (Om Mani Padme Hum or any sacred phrase). Start at the guru bead, move through all 108 beads, then reverse direction to return. Never pass over the guru bead. Can also be worn as a necklace or bracelet for continuous spiritual benefit.'
    },
    variants: [
      { material: 'Bodhi Seed', price: 14.99 },
      { material: 'Sandalwood', price: 19.99 },
      { material: 'Black Obsidian', price: 14.99 },
      { material: 'Rosewood', price: 12.99 }
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
    id: 'tibetan-singing-bowl',
    name: 'Himalayan Tibetan Singing Bowl',
    shortName: 'Singing Bowl',
    category: 'Sound Healing',
    subcategory: 'Meditation',
    sku: 'ME-SBW-001',
    price: 179.99,
    originalPrice: 239.99,
    cost: 40.00,
    shippingCost: 12.00,
    rating: 4.9,
    reviews: 178,
    tags: ['bestseller', 'meditation', 'soundhealing', 'premium'],
    images: ['images/products/singing-bowl.jpg'],
    description: {
      short: 'Authentic hand-hammered Tibetan singing bowl for sound healing and meditation. Produces deeply resonant tones.',
      long: 'This authentic Himalayan Singing Bowl is handcrafted in the traditional manner by Tibetan artisans using a secret alloy of seven metals, each corresponding to one of the seven chakras or planets. The bowl produces a deeply resonant, harmonic tone when struck or rubbed with the included wooden mallet. Singing bowls have been used for thousands of years in Tibetan Buddhism for meditation, ritual, and sound healing therapy.',
      meaning: 'Singing bowls (also known as Himalayan bowls or singing bowls) are believed to have originated in the Himalayan regions of Tibet, Nepal, and Bhutan over 2,500 years ago. The sound they produce is said to affect brainwave patterns, inducing deep meditative states. Many believe the vibrations can balance the chakras, clear negative energy, and promote physical, emotional, and spiritual healing.',
      usage: 'Place the bowl on the cushion in the palm of your hand. Gently tap the side of the bowl with the mallet to start the sound. For the "singing" effect, run the mallet slowly and evenly around the outside rim with consistent pressure. Experiment with speed and pressure to find the sweet spot. For meditation, simply listen to the sound and let your mind follow it into stillness. Can also be used for chakra balancing by placing on or near the body.'
    },
    variants: [
      { size: 'Small (10cm) - Beginner', price: 149.99 },
      { size: 'Medium (12cm) - Popular', price: 179.99 },
      { size: 'Large (15cm) - Premium', price: 219.99 }
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
      includes: 'Singing Bowl + Mallet + Cushion',
      weight: '300-600g',
      origin: 'Handmade in Nepal / Tibet'
    }
  }
];

// ===== Helper Functions =====
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getRelatedProducts(product, limit = 4) {
  if (!product || !product.id) return [];
  
  return products
    .filter(p => p.id !== product.id && (
      p.category === product.category || 
      (product.tags && p.tags && p.tags.some(tag => product.tags.includes(tag)))
    ))
    .slice(0, limit);
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

function calculateDiscount(original, current) {
  if (!original || original <= current) return 0;
  return Math.round((1 - current / original) * 100);
}

// Make products and functions globally available
window.products = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getRelatedProducts = getRelatedProducts;
window.formatPrice = formatPrice;
window.calculateDiscount = calculateDiscount;

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
