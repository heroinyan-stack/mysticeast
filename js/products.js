// MysticEast - Product Data (Updated with Correct Images)
// Last Updated: 2026-07-06

const products = [
  // ========== Crystal Bracelets ==========
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
    images: ['https://images.unsplash.com/photo-1615109398623-88346a601842?w=800&q=80'],
    description: {
      short: 'Powerful black obsidian bracelet for protection against negative energy.',
      long: 'This Black Obsidian Protection Bracelet is carefully handcrafted with 8mm genuine volcanic black obsidian beads. Black obsidian has been used for centuries as a powerful protective stone, believed to shield its wearer from negativity, absorb harmful energies, and promote emotional grounding.',
      meaning: 'Black Obsidian is known as the "Stone of Truth" and is one of the most powerful protective crystals.',
      usage: 'Wear on your left hand for maximum protective benefits.'
    },
    variants: [
      { size: '6mm', price: 24.99 },
      { size: '8mm', price: 29.99 },
      { size: '10mm', price: 34.99 }
    ],
    benefits: ['Protection from negative energy', 'Grounding and stability', 'Emotional healing', 'Truth and clarity'],
    specifications: { material: 'Natural Black Obsidian', beadSize: '6mm / 8mm / 10mm', braceletSize: 'Adjustable', weight: '15-25g', origin: 'Mexico' }
  },
  {
    id: 'amethyst-bracelet',
    name: 'Amethyst Wisdom Bracelet',
    shortName: 'Amethyst',
    category: 'Bracelet',
    subcategory: 'Spiritual',
    sku: 'ME-AME-002',
    price: 34.99,
    originalPrice: 49.99,
    cost: 6.82,
    shippingCost: 2.50,
    rating: 4.9,
    reviews: 189,
    tags: ['premium'],
    images: ['https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80'],
    description: {
      short: 'Beautiful purple amethyst bracelet for spiritual growth and intuition.',
      long: 'This stunning Amethyst Wisdom Bracelet features genuine 8mm amethyst beads, known as the "Stone of Spiritual Growth." Amethyst is revered for its calming energy and ability to enhance intuition and spiritual awareness.',
      meaning: 'Amethyst opens the third eye and crown chakras, promoting spiritual enlightenment and inner peace.',
      usage: 'Wear during meditation or place under your pillow for peaceful sleep.'
    },
    variants: [
      { size: '6mm', price: 29.99 },
      { size: '8mm', price: 34.99 },
      { size: '10mm', price: 39.99 }
    ],
    benefits: ['Spiritual growth', 'Enhanced intuition', 'Calming energy', 'Protection'],
    specifications: { material: 'Natural Amethyst', beadSize: '6mm / 8mm / 10mm', braceletSize: 'Adjustable', weight: '18-28g', origin: 'Brazil' }
  },
  {
    id: 'rose-quartz-bracelet',
    name: 'Rose Quartz Love Bracelet',
    shortName: 'Rose Quartz',
    category: 'Bracelet',
    subcategory: 'Love',
    sku: 'ME-ROS-003',
    price: 27.99,
    originalPrice: 39.99,
    cost: 1.50,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 167,
    tags: ['bestseller', 'love'],
    images: ['https://images.unsplash.com/photo-1603626976643-470d51a88a03?w=800&q=80'],
    description: {
      short: 'Pink rose quartz bracelet for attracting love and emotional healing.',
      long: 'This Rose Quartz Love Bracelet is made with genuine 8mm pink rose quartz beads, known as the "Stone of Unconditional Love." Rose quartz opens the heart chakra, promoting self-love, compassion, and emotional healing.',
      meaning: 'Rose quartz is the ultimate stone of love - it attracts love, deepens existing relationships, and heals emotional wounds.',
      usage: 'Wear daily to open your heart and attract loving energy into your life.'
    },
    variants: [
      { size: '6mm', price: 22.99 },
      { size: '8mm', price: 27.99 },
      { size: '10mm', price: 32.99 }
    ],
    benefits: ['Attracts love', 'Emotional healing', 'Self-love', 'Compassion'],
    specifications: { material: 'Natural Rose Quartz', beadSize: '6mm / 8mm / 10mm', braceletSize: 'Adjustable', weight: '15-25g', origin: 'Brazil' }
  },
  {
    id: 'tiger-eye-bracelet',
    name: 'Tiger Eye Courage Bracelet',
    shortName: 'Tiger Eye',
    category: 'Bracelet',
    subcategory: 'Wealth',
    sku: 'ME-TIG-004',
    price: 29.99,
    originalPrice: 42.99,
    cost: 2.07,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 145,
    tags: ['bestseller', 'wealth'],
    images: ['https://images.unsplash.com/photo-1555421689-445016219898?w=800&q=80'],
    description: {
      short: 'Golden tiger eye bracelet for courage, strength, and abundance.',
      long: 'This Tiger Eye Courage Bracelet features genuine 8mm golden tiger eye beads. Tiger eye is a powerful stone that boosts confidence, courage, and personal power. It is also associated with wealth and prosperity.',
      meaning: 'Tiger eye helps you see clearly and make decisions with confidence. It attracts prosperity and good fortune.',
      usage: 'Wear when facing challenges or important decisions. Place in your wallet or cash register for abundance.'
    },
    variants: [
      { size: '6mm', price: 24.99 },
      { size: '8mm', price: 29.99 },
      { size: '10mm', price: 34.99 }
    ],
    benefits: ['Courage and confidence', 'Wealth and abundance', 'Protection', 'Strength'],
    specifications: { material: 'Natural Tiger Eye', beadSize: '6mm / 8mm / 10mm', braceletSize: 'Adjustable', weight: '18-28g', origin: 'South Africa' }
  },
  {
    id: 'red-string-bracelet',
    name: 'Red String Protection Bracelet',
    shortName: 'Red String',
    category: 'Bracelet',
    subcategory: 'Protection',
    sku: 'ME-RED-005',
    price: 14.99,
    originalPrice: 19.99,
    cost: 4.75,
    shippingCost: 2.50,
    rating: 4.6,
    reviews: 123,
    tags: ['protection'],
    images: ['https://images.unsplash.com/photo-1614527005839-42658a945c5d?w=800&q=80'],
    description: {
      short: 'Traditional red string Kabbalah bracelet for protection and good luck.',
      long: 'This Red String Protection Bracelet is inspired by the ancient Kabbalah tradition. The red string symbolizes protection from the evil eye and brings good fortune, love, and prosperity to the wearer.',
      meaning: 'The red string is worn on the left wrist (the receiving side) to attract positive energy and repel negativity.',
      usage: 'Tie the string on your left wrist with seven knots while making a wish. When the string breaks, your wish has been granted.'
    },
    variants: [{ size: 'Standard', price: 14.99 }],
    benefits: ['Protection from evil eye', 'Good luck', 'Love and prosperity', 'Energy protection'],
    specifications: { material: 'Cotton String with Silver Charm', beadSize: 'N/A', braceletSize: 'Adjustable', weight: '5g', origin: 'Israel' }
  },
  // ========== Necklaces ==========
  {
    id: 'seven-chakra-necklace',
    name: 'Seven Chakra Healing Necklace',
    shortName: '7 Chakra',
    category: 'Necklace',
    subcategory: 'Healing',
    sku: 'ME-CHK-006',
    price: 19.99,
    originalPrice: 27.99,
    cost: 1.09,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 98,
    tags: ['healing'],
    images: ['https://images.unsplash.com/photo-1635704019225-f216a1d7b1a8?w=800&q=80'],
    description: {
      short: 'Seven chakra crystal necklace for balancing all energy centers.',
      long: 'This Seven Chakra Healing Necklace features seven beautiful crystals representing each of the seven chakras: Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown. Wearing this necklace helps balance your energy centers and promote overall well-being.',
      meaning: 'Each crystal corresponds to a chakra: Red Jasper (Root), Orange Calcite (Sacral), Yellow Citrine (Solar Plexus), Green Aventurine (Heart), Blue Lace Agate (Throat), Indigo Fluorite (Third Eye), Purple Amethyst (Crown).',
      usage: 'Wear daily to maintain chakra balance. Place on your altar during meditation.'
    },
    variants: [{ size: '18 inches', price: 19.99 }, { size: '20 inches', price: 22.99 }],
    benefits: ['Chakra balancing', 'Energy healing', 'Emotional balance', 'Spiritual alignment'],
    specifications: { material: 'Natural Crystals', beadSize: '8mm', necklaceLength: '18-20 inches', weight: '20g', origin: 'Mixed' }
  },
  {
    id: 'tarot-pendant-necklace',
    name: 'Tarot Moon Pendant Necklace',
    shortName: 'Tarot Moon',
    category: 'Necklace',
    subcategory: 'Divination',
    sku: 'ME-TAR-007',
    price: 24.99,
    originalPrice: 34.99,
    cost: 2.09,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 76,
    tags: ['divination'],
    images: ['https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80'],
    description: {
      short: 'Mystical tarot moon pendant necklace for intuition and magic.',
      long: 'This Tarot Moon Pendant Necklace features an intricate moon and star design, inspired by the Tarot\'s Major Arcana. The moon represents intuition, mystery, and feminine energy, making this piece perfect for those drawn to divination and magic.',
      meaning: 'The moon symbolizes inner wisdom, dreams, and the subconscious. It enhances intuition and psychic abilities.',
      usage: 'Wear during tarot readings or meditation to enhance your intuitive connection.'
    },
    variants: [{ size: '18 inches', price: 24.99 }, { size: '22 inches', price: 27.99 }],
    benefits: ['Enhanced intuition', 'Psychic abilities', 'Moon energy', 'Divination'],
    specifications: { material: 'Stainless Steel with Enamel', beadSize: 'N/A', necklaceLength: '18-22 inches', weight: '15g', origin: 'China' }
  },
  // ========== Feng Shui ==========
  {
    id: 'brass-pixiu',
    name: 'Brass Pixiu Wealth Figurine',
    shortName: 'Brass Pixiu',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-PIX-008',
    price: 59.99,
    originalPrice: 84.99,
    cost: 2.13,
    shippingCost: 5.00,
    rating: 4.9,
    reviews: 127,
    tags: ['bestseller', 'wealth'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Traditional brass Pixiu statue for attracting wealth and prosperity.',
      long: 'This Brass Pixiu Wealth Figurine is a traditional Chinese feng shui charm. Pixiu is a mythical creature that attracts wealth and protects against financial loss. Made of solid brass, this beautifully crafted statue brings positive energy to your home or office.',
      meaning: 'Pixiu is believed to have the power to attract wealth from all directions. It is especially beneficial for business owners and those seeking financial prosperity.',
      usage: 'Place facing the entrance of your home or office to attract wealth. Keep in your wallet or cash register.'
    },
    variants: [{ size: 'Small (3cm)', price: 39.99 }, { size: 'Medium (5cm)', price: 59.99 }, { size: 'Large (8cm)', price: 89.99 }],
    benefits: ['Attracts wealth', 'Financial protection', 'Good fortune', 'Prosperity'],
    specifications: { material: 'Solid Brass', beadSize: 'N/A', braceletSize: 'N/A', weight: '100-300g', origin: 'China' }
  },
  {
    id: 'money-frog-statue',
    name: 'Three-Legged Money Frog Statue',
    shortName: 'Money Frog',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-FROG-009',
    price: 44.99,
    originalPrice: 64.99,
    cost: 2.09,
    shippingCost: 5.00,
    rating: 4.8,
    reviews: 156,
    tags: ['wealth'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Traditional Chinese three-legged money frog for wealth luck.',
      long: 'This Three-Legged Money Frog Statue is a classic feng shui symbol of wealth and abundance. The frog sits on a bed of coins, with one coin in its mouth, symbolizing prosperity and good fortune.',
      meaning: 'The three-legged frog is said to appear during a full moon near houses where wealth will accumulate. It brings financial luck and opportunities.',
      usage: 'Place near your front door facing inward, or in your wealth corner (southeast). Do not place in bedrooms or bathrooms.'
    },
    variants: [{ size: 'Small (5cm)', price: 29.99 }, { size: 'Medium (8cm)', price: 44.99 }, { size: 'Large (12cm)', price: 69.99 }],
    benefits: ['Wealth luck', 'Financial abundance', 'Good fortune', 'Opportunities'],
    specifications: { material: 'Resin with Gold Finish', beadSize: 'N/A', braceletSize: 'N/A', weight: '200-500g', origin: 'China' }
  },
  {
    id: 'lucky-cat-figurine',
    name: 'Solar-Powered Lucky Cat Figurine',
    shortName: 'Lucky Cat',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-CAT-010',
    price: 34.99,
    originalPrice: 49.99,
    cost: 4.39,
    shippingCost: 3.00,
    rating: 4.7,
    reviews: 167,
    tags: ['bestseller'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Cute solar-powered lucky cat waving its paw for good luck.',
      long: 'This Solar-Powered Lucky Cat Figurine is a charming addition to any home or business. The cat waves its paw automatically when exposed to light, inviting good fortune and customers into your space.',
      meaning: 'The Japanese lucky cat (Maneki-neko) is a symbol of good luck, prosperity, and happiness. A cat with its right paw raised attracts wealth, while the left paw attracts customers.',
      usage: 'Place near your store entrance, office desk, or home entrance. No batteries needed - runs on solar power.'
    },
    variants: [{ size: 'Small (10cm)', price: 24.99 }, { size: 'Medium (15cm)', price: 34.99 }],
    benefits: ['Good luck', 'Attracts customers', 'Prosperity', 'Solar-powered'],
    specifications: { material: 'Ceramic with Solar Panel', beadSize: 'N/A', braceletSize: 'N/A', weight: '300-500g', origin: 'China' }
  },
  {
    id: 'feng-shui-fountain',
    name: 'Feng Shui Tabletop Water Fountain',
    shortName: 'Water Fountain',
    category: 'Feng Shui',
    subcategory: 'Harmony',
    sku: 'ME-FTN-011',
    price: 89.99,
    originalPrice: 129.99,
    cost: 11.76,
    shippingCost: 8.00,
    rating: 4.8,
    reviews: 89,
    tags: ['premium'],
    images: ['https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80'],
    description: {
      short: 'Beautiful tabletop water fountain for peace and positive energy.',
      long: 'This Feng Shui Tabletop Water Fountain brings the calming sound of flowing water into your space. Water is a powerful feng shui element that symbolizes wealth, abundance, and harmony.',
      meaning: 'Flowing water represents prosperity and positive energy flow. The sound of water has a calming effect and helps reduce stress.',
      usage: 'Place in your living room, bedroom, or office. Change water weekly to keep energy fresh.'
    },
    variants: [{ size: 'Small (20cm)', price: 59.99 }, { size: 'Medium (30cm)', price: 89.99 }],
    benefits: ['Positive energy', 'Stress relief', 'Wealth flow', 'Harmony'],
    specifications: { material: 'Resin and Ceramic', beadSize: 'N/A', braceletSize: 'N/A', weight: '2-3kg', origin: 'China' }
  },
  // ========== Crystals ==========
  {
    id: 'amethyst-cluster',
    name: 'Natural Amethyst Cluster',
    shortName: 'Amethyst Cluster',
    category: 'Crystal',
    subcategory: 'Spiritual',
    sku: 'ME-AMC-012',
    price: 49.99,
    originalPrice: 69.99,
    cost: 7.42,
    shippingCost: 5.00,
    rating: 4.9,
    reviews: 78,
    tags: ['premium'],
    images: ['https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80'],
    description: {
      short: 'Beautiful natural amethyst crystal cluster for healing and meditation.',
      long: 'This Natural Amethyst Cluster is a stunning piece of nature\'s art. Amethyst clusters are powerful healing tools that emit strong positive energy. Each cluster is unique and hand-selected for its beauty and energy.',
      meaning: 'Amethyst clusters purify the energy of a space, creating a calm and peaceful environment for meditation and spiritual work.',
      usage: 'Place on your altar, desk, or nightstand. Use during meditation or energy healing sessions.'
    },
    variants: [{ size: 'Small (5-8cm)', price: 34.99 }, { size: 'Medium (8-12cm)', price: 49.99 }, { size: 'Large (12-15cm)', price: 79.99 }],
    benefits: ['Energy purification', 'Meditation aid', 'Spiritual growth', 'Protection'],
    specifications: { material: 'Natural Amethyst', beadSize: 'N/A', braceletSize: 'N/A', weight: '200-500g', origin: 'Brazil' }
  },
  {
    id: 'crystal-ball',
    name: 'Crystal Ball for Divination',
    shortName: 'Crystal Ball',
    category: 'Crystal',
    subcategory: 'Divination',
    sku: 'ME-CRB-013',
    price: 19.99,
    originalPrice: 29.99,
    cost: 1.09,
    shippingCost: 3.00,
    rating: 4.6,
    reviews: 65,
    tags: ['divination'],
    images: ['https://images.unsplash.com/photo-1605104234588-59648437685c?w=800&q=80'],
    description: {
      short: 'Beautiful crystal ball for scrying and intuitive readings.',
      long: 'This Crystal Ball for Divination is perfect for scrying, meditation, and intuitive work. Crystal balls have been used for centuries as tools for divination, helping the user connect with their inner wisdom and see beyond the ordinary.',
      meaning: 'The crystal ball is a portal to the subconscious mind. It helps you access intuition and gain insight into situations.',
      usage: 'Place on a dark cloth during readings. Gaze into the ball and allow images and impressions to come to you.'
    },
    variants: [{ size: '50mm', price: 14.99 }, { size: '60mm', price: 19.99 }, { size: '80mm', price: 34.99 }],
    benefits: ['Divination', 'Intuition', 'Scrying', 'Meditation'],
    specifications: { material: 'Natural Quartz Crystal', beadSize: 'N/A', braceletSize: 'N/A', weight: '100-300g', origin: 'Brazil' }
  },
  {
    id: 'feng-shui-crystal-tree',
    name: 'Feng Shui Crystal Money Tree',
    shortName: 'Crystal Tree',
    category: 'Crystal',
    subcategory: 'Wealth',
    sku: 'ME-TRE-014',
    price: 59.99,
    originalPrice: 84.99,
    cost: 13.00,
    shippingCost: 5.00,
    rating: 4.7,
    reviews: 112,
    tags: ['wealth'],
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80'],
    description: {
      short: 'Beautiful feng shui crystal money tree for attracting wealth.',
      long: 'This Feng Shui Crystal Money Tree is a stunning decorative piece that attracts wealth and positive energy. The tree features numerous crystal "leaves" on a wire frame, mounted on a natural stone base.',
      meaning: 'The crystal tree symbolizes growth, abundance, and prosperity. Each crystal amplifies positive energy and attracts wealth.',
      usage: 'Place in your wealth corner (southeast), office, or living room. Dust regularly to keep energy flowing.'
    },
    variants: [{ size: 'Small (20cm)', price: 39.99 }, { size: 'Medium (30cm)', price: 59.99 }, { size: 'Large (40cm)', price: 89.99 }],
    benefits: ['Attracts wealth', 'Positive energy', 'Prosperity', 'Good luck'],
    specifications: { material: 'Crystals with Wire Frame', beadSize: 'N/A', braceletSize: 'N/A', weight: '500-1000g', origin: 'China' }
  },
  // ========== Tarot & Divination ==========
  {
    id: 'tarot-cards-deck',
    name: 'Rider-Waite Tarot Deck',
    shortName: 'Tarot Deck',
    category: 'Tarot',
    subcategory: 'Divination',
    sku: 'ME-TAR-015',
    price: 24.99,
    originalPrice: 34.99,
    cost: 2.41,
    shippingCost: 3.00,
    rating: 4.9,
    reviews: 203,
    tags: ['bestseller', 'divination'],
    images: ['https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80'],
    description: {
      short: 'Classic Rider-Waite tarot deck for professional readings.',
      long: 'This Rider-Waite Tarot Deck is the most popular and widely used tarot deck in the world. Created by Pamela Colman Smith and A.E. Waite in 1910, these cards feature beautiful, detailed illustrations that make interpretation easy for both beginners and professionals.',
      meaning: 'The Rider-Waite deck is known for its vivid imagery and intuitive symbolism. It is perfect for personal growth, self-reflection, and divination.',
      usage: 'Use for daily draws, full readings, or meditation. Keep your deck in a special bag and cleanse regularly.'
    },
    variants: [{ type: 'Standard', price: 24.99 }, { type: 'Deluxe with Guidebook', price: 34.99 }],
    benefits: ['Divination', 'Self-reflection', 'Personal growth', 'Intuition'],
    specifications: { material: 'Cardboard', beadSize: 'N/A', braceletSize: 'N/A', weight: '150g', origin: 'USA' }
  },
  {
    id: 'i-ching-coins-set',
    name: 'I Ching Coins Set',
    shortName: 'I Ching Coins',
    category: 'Tarot',
    subcategory: 'Divination',
    sku: 'ME-ICH-016',
    price: 14.99,
    originalPrice: 19.99,
    cost: 2.56,
    shippingCost: 2.50,
    rating: 4.5,
    reviews: 45,
    tags: ['divination'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Traditional Chinese I Ching divination coins set.',
      long: 'This I Ching Coins Set includes three traditional Chinese coins for casting the I Ching (Book of Changes). The I Ching is an ancient Chinese divination system that has been used for over 2,000 years to gain insight into life\'s questions.',
      meaning: 'The I Ching helps you connect with universal wisdom and gain clarity about important decisions. Each coin represents heaven, earth, and humanity.',
      usage: 'Hold the coins in your hand, focus on your question, and toss them six times to create a hexagram.'
    },
    variants: [{ type: 'Brass', price: 14.99 }, { type: 'Bronze', price: 17.99 }],
    benefits: ['Divination', 'Wisdom', 'Clarity', 'Decision-making'],
    specifications: { material: 'Brass or Bronze', beadSize: 'N/A', braceletSize: 'N/A', weight: '30g', origin: 'China' }
  },
  // ========== Incense & Burners ==========
  {
    id: 'agarwood-incense-sticks',
    name: 'Premium Agarwood Incense Sticks',
    shortName: 'Agarwood Incense',
    category: 'Incense',
    subcategory: 'Meditation',
    sku: 'ME-AGR-017',
    price: 49.99,
    originalPrice: 69.99,
    cost: 24.90,
    shippingCost: 3.00,
    rating: 4.8,
    reviews: 201,
    tags: ['premium', 'bestseller'],
    images: ['https://images.unsplash.com/photo-1505673542862-770b6f24f625?w=800&q=80'],
    description: {
      short: 'Luxurious agarwood incense sticks for meditation and ritual.',
      long: 'These Premium Agarwood Incense Sticks are made from genuine agarwood (oud), one of the most precious and aromatic woods in the world. Agarwood has been used for centuries in religious ceremonies, meditation, and spiritual practices.',
      meaning: 'Agarwood incense creates a sacred atmosphere for meditation and prayer. Its rich, woody aroma helps calm the mind and connect with higher consciousness.',
      usage: 'Light one stick during meditation, yoga, or before sleep. Burn in a well-ventilated area.'
    },
    variants: [{ type: '20 sticks', price: 29.99 }, { type: '50 sticks', price: 49.99 }, { type: '100 sticks', price: 89.99 }],
    benefits: ['Meditation', 'Relaxation', 'Spiritual connection', 'Purification'],
    specifications: { material: 'Agarwood Powder with Bamboo Core', beadSize: 'N/A', braceletSize: 'N/A', weight: '50-150g', origin: 'Vietnam' }
  },
  {
    id: 'backflow-incense-burner',
    name: 'Backflow Incense Burner',
    shortName: 'Backflow Burner',
    category: 'Incense',
    subcategory: 'Decor',
    sku: 'ME-BFB-018',
    price: 34.99,
    originalPrice: 49.99,
    cost: 1.33,
    shippingCost: 4.00,
    rating: 4.7,
    reviews: 134,
    tags: ['decor'],
    images: ['https://images.unsplash.com/photo-1505673542862-770b6f24f625?w=800&q=80'],
    description: {
      short: 'Beautiful backflow incense burner for waterfall smoke effect.',
      long: 'This Backflow Incense Burner creates a mesmerizing waterfall smoke effect as the incense smoke flows downward instead of upward. The ceramic burner features intricate designs and comes with a pack of backflow incense cones.',
      meaning: 'The downward flow of smoke symbolizes letting go, releasing negative energy, and grounding. It creates a peaceful, meditative atmosphere.',
      usage: 'Place on a heat-resistant surface. Light the incense cone and watch the smoke flow like a waterfall.'
    },
    variants: [{ type: 'Mountain', price: 29.99 }, { type: 'Dragon', price: 34.99 }, { type: 'Lotus', price: 39.99 }],
    benefits: ['Meditation', 'Aromatherapy', 'Decor', 'Relaxation'],
    specifications: { material: 'Ceramic', beadSize: 'N/A', braceletSize: 'N/A', weight: '400-600g', origin: 'China' }
  },
  // ========== Buddhist & Sound ==========
  {
    id: '108-mala-beads',
    name: 'Tibetan 108 Mala Prayer Beads',
    shortName: 'Mala Beads',
    category: 'Buddhist',
    subcategory: 'Meditation',
    sku: 'ME-MAL-019',
    price: 14.99,
    originalPrice: 19.99,
    cost: 1.43,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 234,
    tags: ['bestseller'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Traditional Tibetan 108 mala prayer beads for meditation.',
      long: 'These Tibetan 108 Mala Prayer Beads are perfect for meditation, mantra recitation, and mindfulness practice. The 108 beads represent the 108 earthly desires or negative emotions that need to be overcome.',
      meaning: 'Mala beads help you stay focused during meditation and count your mantras. They are a powerful tool for spiritual practice.',
      usage: 'Hold the mala in your right hand, starting from the guru bead, and move through each bead as you recite your mantra.'
    },
    variants: [{ type: 'Sandwood', price: 14.99 }, { type: 'Lotus Seed', price: 17.99 }, { type: 'Bodhi Seed', price: 19.99 }],
    benefits: ['Meditation', 'Mindfulness', 'Spiritual practice', 'Focus'],
    specifications: { material: 'Sandwood / Lotus Seed / Bodhi Seed', beadSize: '8mm', braceletSize: 'N/A', weight: '40g', origin: 'Nepal' }
  },
  {
    id: 'tibetan-singing-bowl',
    name: 'Tibetan Singing Bowl',
    shortName: 'Singing Bowl',
    category: 'Buddhist',
    subcategory: 'Sound Healing',
    sku: 'ME-BOWL-020',
    price: 179.99,
    originalPrice: 249.99,
    cost: 5.77,
    shippingCost: 10.00,
    rating: 4.9,
    reviews: 45,
    tags: ['premium'],
    images: ['https://images.unsplash.com/photo-1544197762-654612b63749?w=800&q=80'],
    description: {
      short: 'Handcrafted Tibetan singing bowl for sound healing and meditation.',
      long: 'This Tibetan Singing Bowl is handcrafted in Nepal using traditional methods. When struck with the mallet, it produces a beautiful, resonant sound that creates deep relaxation and healing vibrations.',
      meaning: 'Singing bowls have been used in Tibetan Buddhism for centuries. The sound vibrations help balance the chakras, reduce stress, and promote deep relaxation.',
      usage: 'Strike the bowl gently with the mallet or rub the rim in a circular motion. Use during meditation, yoga, or sound healing sessions.'
    },
    variants: [{ size: 'Small (10cm)', price: 89.99 }, { size: 'Medium (15cm)', price: 179.99 }, { size: 'Large (20cm)', price: 299.99 }],
    benefits: ['Sound healing', 'Meditation', 'Stress relief', 'Chakra balancing'],
    specifications: { material: 'Hand-hammered Metal', beadSize: 'N/A', braceletSize: 'N/A', weight: '500-1500g', origin: 'Nepal' }
  }
];

// Helper functions for product management
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

function getFeaturedProducts() {
  return products.filter(p => p.tags.includes('bestseller')).slice(0, 8);
}

function getRelatedProducts(productId) {
  const product = getProductById(productId);
  if (!product || !product.tags) return [];
  return products.filter(p => 
    p.id !== productId && 
    p.tags && 
    p.tags.some(tag => product.tags.includes(tag))
  ).slice(0, 4);
}

function getAllCategories() {
  return [...new Set(products.map(p => p.category))];
}

function calculateDiscount(product) {
  if (!product.originalPrice || !product.price) return 0;
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

// Expose to global scope
window.products = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getFeaturedProducts = getFeaturedProducts;
window.getRelatedProducts = getRelatedProducts;
window.getAllCategories = getAllCategories;
window.calculateDiscount = calculateDiscount;
window.formatPrice = formatPrice;