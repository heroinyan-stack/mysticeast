// MysticEast - Product Data
// Last Updated: 2026-07-22
// Loaded from Cloudflare Worker KV with local fallback

const localProducts = [
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
    images: ['https://cf.cjdropshipping.com/32bbd96e-5d39-4a4a-aa77-138491a9f8fe.jpg', 'https://cf.cjdropshipping.com/6f6a3b44-861f-445a-b4ae-8c1f170c7d87.jpg', 'https://cf.cjdropshipping.com/4194d01d-5cf5-4159-8f84-1fe66bec919e.png', 'https://cf.cjdropshipping.com/ad954aa1-a324-493f-9c18-78e4332ccfc2.jpg', 'https://cf.cjdropshipping.com/f1fa0c44-98de-454a-97e4-20b03c47f322.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2054831428697612290',
    cjSku: 'CJSL2890587',
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
    images: ['https://cf.cjdropshipping.com/a603fc99-5be1-4b73-8bf3-3749acde6774.jpg', 'https://cf.cjdropshipping.com/28b2a369-8482-4071-a1df-439a17cb5969.jpg', 'https://cf.cjdropshipping.com/9c19bfe9-67d7-4e23-b62f-b81c7c42d8a3.jpg', 'https://cf.cjdropshipping.com/b7c908b4-55f8-43c3-a258-1efa968829ec.jpg', 'https://cf.cjdropshipping.com/6c1ca4b6-eb3d-45ff-b08b-2a53de6e10e6.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1452537710823739392',
    cjSku: 'CJSL1330310',
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
    images: ['https://cf.cjdropshipping.com/5a5331cc-8011-44c3-93a6-6e573ebbe5e7.jpg', 'https://cf.cjdropshipping.com/b1f70069-fd34-404d-a92e-f686c003cda6.jpg', 'https://cf.cjdropshipping.com/df73a895-6192-4c80-a833-e2df46230949.jpg', 'https://cf.cjdropshipping.com/5636d48c-cc0c-47b0-87fc-68a1fa089cb5.jpg', 'https://cf.cjdropshipping.com/6722cd47-f7a6-42fa-ba15-b8d66385f831.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1922994943931604993',
    cjSku: 'CJSL2377380',
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
    images: ['https://cf.cjdropshipping.com/20200626/998734483233.jpg', 'https://cf.cjdropshipping.com/20200626/4442912367379.jpg', 'https://cf.cjdropshipping.com/20200626/1393979786571.jpg', 'https://cf.cjdropshipping.com/20200626/33296461462587.jpg', 'https://cf.cjdropshipping.com/20200626/483579242302.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=CD63DF4C-A8C5-4465-9B02-CDD782190B4F',
    cjSku: 'CJZBLXSL03620',
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
    images: ['https://cf.cjdropshipping.com/833c0be0-5217-41c9-a077-c2bdb51c7ccf.jpg', 'https://cf.cjdropshipping.com/4408c570-bedd-45e5-93d6-ad5b9cd9b6e8.jpg', 'https://cf.cjdropshipping.com/d1efc01b-689f-433e-9f8d-06fcb424eee3.jpg', 'https://cf.cjdropshipping.com/ca41cd81-cf40-4d39-af0e-73adb6afe6d0.jpg', 'https://cf.cjdropshipping.com/523c998c-4d34-4ec7-99bc-57a15b740380.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1483270965990395904',
    cjSku: 'CJJT1402047',
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
    images: ['https://cf.cjdropshipping.com/d0f859fd-cb9f-46ef-b793-43e30a71a9f5.jpg', 'https://cf.cjdropshipping.com/d053bd05-4b84-49cc-966a-5ab6558b7a5b.jpg', 'https://cf.cjdropshipping.com/f8adf89e-5d25-4640-a34b-59c69bd17bd5.jpg', 'https://cf.cjdropshipping.com/c63dd5c4-b4e5-425e-ad0f-666955b3cc60.jpg', 'https://cf.cjdropshipping.com/f896d788-faca-4462-b195-4d25a8b32fc4.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1454370133597360128',
    cjSku: 'CJLX1335931',
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
    images: ['https://cf.cjdropshipping.com/52e029e0-eaeb-451e-9bb8-dda5568ecf8c.jpg', 'https://cf.cjdropshipping.com/47532f75-0b14-438e-bee9-aeb170c17027.png'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1643807592482869248',
    cjSku: 'CJLX1726182',
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
    images: ['https://cf.cjdropshipping.com/405f0cee-7a81-4aa6-95d4-554d7839c988.jpg', 'https://cf.cjdropshipping.com/de62e2ab-80ce-4992-b1fd-2ce423ca33f9.jpg', 'https://cf.cjdropshipping.com/7b90df58-5917-4ee4-91dd-8b8cddbb1c3e.png', 'https://cf.cjdropshipping.com/f9b5c676-8f4e-4093-b011-5103264aec71.jpg', 'https://cf.cjdropshipping.com/b5d55323-a00c-45ab-9482-cd8847fe6f4e.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2062500440342978561',
    cjSku: 'CJDZ2922022',
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
    images: ['https://cf.cjdropshipping.com/41018953-8c75-47a9-99a0-af40a2e6579c.jpg', 'https://cf.cjdropshipping.com/68b91183-661d-4572-bcd2-5eb06b2ee664.jpg', 'https://cf.cjdropshipping.com/67ff636d-2bd9-4629-a543-59d950689ec4.jpg', 'https://cf.cjdropshipping.com/decbb7a5-7ffc-4369-9c65-baf49cc64b94.jpg', 'https://cf.cjdropshipping.com/e998cfb4-34e2-4532-86ef-845ae97befa2.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1689816124411617280',
    cjSku: 'CJJT1819552',
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
    images: ['https://cf.cjdropshipping.com/20200114/5340152912586.jpg', 'https://cf.cjdropshipping.com/20200114/2560991366957.jpg', 'https://cf.cjdropshipping.com/20200114/57400751289134.jpg', 'https://cf.cjdropshipping.com/20200114/507946125254.jpg', 'https://cf.cjdropshipping.com/15789312/3021750878454.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=BB59236E-950A-42ED-8D64-4E2217261C5A',
    cjSku: 'CJJJJTJT06332',
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
    images: ['https://cf.cjdropshipping.com/b111bd91-4a40-43bc-aa4b-0a1e3a48a0b5.jpg', 'https://cf.cjdropshipping.com/94959763-aa0d-4607-98cb-658deac11704.jpg', 'https://cf.cjdropshipping.com/5f9be0ec-9ffc-4bbd-b150-159ecc3f92af.jpg', 'https://cf.cjdropshipping.com/233f423f-6b9f-40ee-89c1-69d0611f02df.jpg', 'https://cf.cjdropshipping.com/a6090158-5673-4b80-9833-5051be24ee2f.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1502223714518315008',
    cjSku: 'CJJT1435688',
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
    images: ['https://cf.cjdropshipping.com/806a0381-6241-49f3-9438-fc66b452769a.jpg', 'https://cf.cjdropshipping.com/2198eebd-4f09-4152-94a5-0812eb8b6dbf.jpg', 'https://cf.cjdropshipping.com/6e8eba2d-63a1-49c6-a053-3eb0a71480e9.jpg', 'https://cf.cjdropshipping.com/0b036c95-2544-4a22-bd22-8d6579f73d76.jpg', 'https://cf.cjdropshipping.com/b3d4017d-c1dc-4a4d-9b23-8a750966d27b.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1607214444940111872',
    cjSku: 'CJZS1649402',
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
    images: ['https://cf.cjdropshipping.com/bf43faa7-8630-409f-a693-b14307930a14.jpg', 'https://cf.cjdropshipping.com/0604c488-cf9a-4e83-ac09-c526246ae3fe.jpg', 'https://cf.cjdropshipping.com/8045f3d1-c788-4de9-abae-9c608434ce76.jpg', 'https://cf.cjdropshipping.com/4010b285-061a-46b5-94f2-202e6bd675a3.jpg', 'https://cf.cjdropshipping.com/27e6344c-e36d-4c5f-b49e-e58670d64387.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1607666043151986688',
    cjSku: 'CJJT1650995',
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
    images: ['https://cf.cjdropshipping.com/fa9bd155-7a9a-4864-89d3-210456598621.jpg', 'https://cf.cjdropshipping.com/f90e9911-9606-45f0-84a6-8ed22c5fcb7b.jpg', 'https://cf.cjdropshipping.com/0a64925f-b66c-4487-9432-41df9e1f75b0.jpg', 'https://cf.cjdropshipping.com/4c23db75-b7c2-45f0-9480-6fa34f20ff8d.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2035924925105815554',
    cjSku: 'CJHD2799955',
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
    images: ['https://cf.cjdropshipping.com/1615444347701.jpg', 'https://cf.cjdropshipping.com/1615444347168.jpg', 'https://cf.cjdropshipping.com/1615444347448.jpg', 'https://cf.cjdropshipping.com/1615444347295.jpg', 'https://cf.cjdropshipping.com/1615444347133.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1369899700534251520',
    cjSku: 'CJYZ1038403',
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
    images: ['https://cf.cjdropshipping.com/2351439f-83d2-4210-93a3-ddf40f8027a4.jpg', 'https://cf.cjdropshipping.com/6fbc6a72-d4e8-435d-b3ab-f56bb4b6ece0.jpg', 'https://cf.cjdropshipping.com/61995c3a-6ea5-4f6f-b70c-4790338890c9.jpg', 'https://cf.cjdropshipping.com/348096f6-c117-408f-baa4-6486a29a9161.jpg', 'https://cf.cjdropshipping.com/bfa43fff-652c-4f81-9e9a-011f5c895290.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1677138890546745344',
    cjSku: 'CJYD1795013',
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
    images: ['https://cf.cjdropshipping.com/a25ec9ca-269f-441d-af3a-30d8b91223ec.png', 'https://cf.cjdropshipping.com/135a9e98-40c5-424d-87c2-f90ac409ca11.png', 'https://cf.cjdropshipping.com/fe49822c-a209-4f35-ac1a-6b99d669a110.png', 'https://cf.cjdropshipping.com/2f324702-51ea-4e35-8ad1-8ade0450da9c.png', 'https://cf.cjdropshipping.com/2550d4c6-bee5-4fdb-8945-6b0bc6fa0359.png'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2039685973532233730',
    cjSku: 'CJJY2817159',
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
    images: ['https://cf.cjdropshipping.com/1623911902237.jpg', 'https://cf.cjdropshipping.com/1623911902886.jpg', 'https://cf.cjdropshipping.com/1623911902568.jpg', 'https://cf.cjdropshipping.com/1623911900830.jpg', 'https://cf.cjdropshipping.com/1623911901915.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1405422296105095168',
    cjSku: 'CJZS1178238',
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
    images: ['https://cf.cjdropshipping.com/quick/product/21cf838b-68d7-44d7-8d54-c5fd01541e0d.jpg', 'https://cf.cjdropshipping.com/quick/product/dff87181-58dc-4c3a-a887-2f52b5ba16cc.jpg', 'https://cf.cjdropshipping.com/quick/product/587cf606-4d36-421b-98fd-22c701fa4d05.jpg', 'https://cf.cjdropshipping.com/quick/product/0425b076-0136-4771-becd-8f6b0140438f.jpg', 'https://cf.cjdropshipping.com/quick/product/0ce223d8-65a6-43c3-9075-4bcd243ca372.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2508180145231606200',
    cjSku: 'CJYD2459721',
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
    images: ['https://cf.cjdropshipping.com/33e57656-6b07-4cd1-a1b2-7228ca7ff894.jpg', 'https://cf.cjdropshipping.com/620287c0-a2d8-4c58-b469-bda678f4fa91.jpg', 'https://cf.cjdropshipping.com/d1ca6567-844c-45c9-bb90-eb1cbc675c1a.jpg', 'https://cf.cjdropshipping.com/fcdf7f54-335a-420b-bbbe-7afb4a4dcf62.jpg', 'https://cf.cjdropshipping.com/511e64f0-685e-4ab6-95b4-4588547b7a8b.jpg'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1655419029978353664',
    cjSku: 'CJJT1752980',
    description: {
      short: 'Handcrafted Tibetan singing bowl for sound healing and meditation.',
      long: 'This Tibetan Singing Bowl is handcrafted in Nepal using traditional methods. When struck with the mallet, it produces a beautiful, resonant sound that creates deep relaxation and healing vibrations.',
      meaning: 'Singing bowls have been used in Tibetan Buddhism for centuries. The sound vibrations help balance the chakras, reduce stress, and promote deep relaxation.',
      usage: 'Strike the bowl gently with the mallet or rub the rim in a circular motion. Use during meditation, yoga, or sound healing sessions.'
    },
    variants: [{ size: 'Small (10cm)', price: 89.99 }, { size: 'Medium (15cm)', price: 179.99 }, { size: 'Large (20cm)', price: 299.99 }],
    benefits: ['Sound healing', 'Meditation', 'Stress relief', 'Chakra balancing'],
    specifications: { material: 'Hand-hammered Metal', beadSize: 'N/A', braceletSize: 'N/A', weight: '500-1500g', origin: 'Nepal' }
  },
  {
    id: 'obsidian-pixiu-bracelet',
    name: 'Black Obsidian Pixiu Wealth Bracelet',
    shortName: 'Obsidian Pixiu',
    category: 'Bracelet',
    subcategory: 'Wealth',
    sku: 'ME-PIX-021',
    price: 39.99,
    originalPrice: 59.99,
    cost: 3.50,
    shippingCost: 2.50,
    rating: 4.9,
    reviews: 312,
    tags: ['bestseller', 'wealth', 'new'],
    images: ['https://images.pexels.com/photos/11266559/pexels-photo-11266559.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/10460464/pexels-photo-10460464.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/15041263/pexels-photo-15041263.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/32752695/pexels-photo-32752695.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/14397127/pexels-photo-14397127.jpeg?auto=compress&cs=tinysrgb&w=800'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=2054831428697612290',
    cjSku: 'CJSL2890587-PX',
    description: {
      short: 'Powerful black obsidian pixiu bracelet for attracting wealth and protection.',
      long: 'This Black Obsidian Pixiu Wealth Bracelet combines the protective power of black obsidian with the wealth-attracting energy of the mythical Pixiu. Handcrafted with 10mm genuine black obsidian beads and a gold-plated Pixiu charm, this bracelet is a powerful feng shui tool for financial abundance.',
      meaning: 'Pixiu is a celestial creature from Chinese mythology famous for its appetite for gold and silver. It is believed to attract wealth from all directions and prevent financial loss. Black obsidian provides strong protection against negative energy.',
      usage: 'Wear on your left hand with the Pixiu head facing outward (toward your pinky) to attract wealth. Cleanse regularly with sage or moonlight.'
    },
    variants: [{ size: '8mm', price: 34.99 }, { size: '10mm', price: 39.99 }, { size: '12mm', price: 49.99 }],
    benefits: ['Attracts wealth', 'Financial protection', 'Negative energy shield', 'Good fortune'],
    specifications: { material: 'Natural Black Obsidian + Gold Plated Pixiu', beadSize: '8mm / 10mm / 12mm', braceletSize: 'Adjustable', weight: '20-35g', origin: 'China' }
  },
  {
    id: 'tiger-eye-pixiu-bracelet',
    name: "Tiger's Eye Pixiu Prosperity Bracelet",
    shortName: "Tiger's Eye Pixiu",
    category: 'Bracelet',
    subcategory: 'Wealth',
    sku: 'ME-PIX-022',
    price: 44.99,
    originalPrice: 64.99,
    cost: 4.20,
    shippingCost: 2.50,
    rating: 4.8,
    reviews: 256,
    tags: ['wealth', 'new', 'trending'],
    images: ['https://images.pexels.com/photos/9207042/pexels-photo-9207042.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/3419947/pexels-photo-3419947.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/37401661/pexels-photo-37401661.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/16918125/pexels-photo-16918125.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/3695875/pexels-photo-3695875.jpeg?auto=compress&cs=tinysrgb&w=800'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=CD63DF4C-A8C5-4465-9B02-CDD782190B4F',
    cjSku: 'CJZBLXSL03620-PX',
    description: {
      short: "Golden tiger's eye pixiu bracelet for courage and financial success.",
      long: "This Tiger's Eye Pixiu Prosperity Bracelet features stunning golden tiger's eye beads paired with a detailed gold Pixiu charm. Tiger's eye is known as the stone of courage and confidence, while the Pixiu amplifies wealth energy — perfect for 2026 Fire Horse year.",
      meaning: "Tiger's eye combines the energy of the sun and earth, providing grounding confidence and mental clarity. When paired with Pixiu, it creates a powerful synergy for attracting business success and financial opportunities.",
      usage: 'Wear on your left wrist for maximum wealth absorption. Ideal for business owners, entrepreneurs, and anyone seeking career advancement.'
    },
    variants: [{ size: '8mm', price: 39.99 }, { size: '10mm', price: 44.99 }, { size: '12mm', price: 54.99 }],
    benefits: ['Wealth & prosperity', 'Courage & confidence', 'Career success', 'Decision making'],
    specifications: { material: "Natural Tiger's Eye + Gold Plated Pixiu", beadSize: '8mm / 10mm / 12mm', braceletSize: 'Adjustable', weight: '20-35g', origin: 'South Africa / China' }
  },
  {
    id: 'five-emperor-coins',
    name: 'Five Emperor Coins Feng Shui Set',
    shortName: 'Five Emperor Coins',
    category: 'Feng Shui',
    subcategory: 'Wealth',
    sku: 'ME-FEC-023',
    price: 24.99,
    originalPrice: 34.99,
    cost: 2.00,
    shippingCost: 2.50,
    rating: 4.7,
    reviews: 178,
    tags: ['wealth', 'new', 'traditional'],
    images: ['https://images.pexels.com/photos/37731862/pexels-photo-37731862.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/7364068/pexels-photo-7364068.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/15872245/pexels-photo-15872245.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/37731862/pexels-photo-37731862.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/7364068/pexels-photo-7364068.jpeg?auto=compress&cs=tinysrgb&w=800'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1677138890546745344',
    cjSku: 'CJYD1795013-5E',
    description: {
      short: 'Traditional five emperor coins feng shui charm for wealth and protection.',
      long: 'This Five Emperor Coins Feng Shui Set features five authentic-style bronze coins representing the five most prosperous emperors of the Qing Dynasty: Shunzhi, Kangxi, Yongzheng, Qianlong, and Jiaqing. Tied with a red mystic knot cord, this powerful feng shui charm attracts wealth and protects your home or office.',
      meaning: 'Each coin corresponds to one of the five feng shui elements (Metal, Wood, Water, Fire, Earth) and carries the prosperous qi of a golden age. The red cord represents fire, which strengthens the metal energy of the coins through the generating cycle.',
      usage: 'Hang near your front door to attract wealth, place in your wallet or purse for money luck, or hang in your car for safe travels. Place with the Yang side (Chinese characters) facing up.'
    },
    variants: [{ type: 'Standard Set', price: 24.99 }, { type: 'Deluxe with Tassel', price: 34.99 }],
    benefits: ['Wealth attraction', 'Home protection', 'Good fortune', 'Harmonious energy'],
    specifications: { material: 'Bronze Alloy Coins + Red Silk Cord', beadSize: 'N/A', braceletSize: 'N/A', weight: '30-50g', origin: 'China' }
  },
  {
    id: 'clear-quartz-wand',
    name: 'Clear Quartz Healing Wand',
    shortName: 'Clear Quartz Wand',
    category: 'Crystal',
    subcategory: 'Healing',
    sku: 'ME-CQW-024',
    price: 34.99,
    originalPrice: 49.99,
    cost: 5.50,
    shippingCost: 3.00,
    rating: 4.8,
    reviews: 189,
    tags: ['healing', 'new', 'bestseller'],
    images: ['https://images.pexels.com/photos/6468511/pexels-photo-6468511.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/6474102/pexels-photo-6474102.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/10545696/pexels-photo-10545696.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/3725729/pexels-photo-3725729.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/6468511/pexels-photo-6468511.jpeg?auto=compress&cs=tinysrgb&w=800'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1607214444940111872',
    cjSku: 'CJZS1649402-WD',
    description: {
      short: 'Natural clear quartz crystal wand for energy healing and meditation.',
      long: 'This Clear Quartz Healing Wand is a powerful tool for energy work, meditation, and chakra balancing. Known as the "Master Healer," clear quartz amplifies energy and intention. Each wand is hand-cut and polished to create a smooth, single-pointed termination perfect for directing energy.',
      meaning: 'Clear quartz is the most versatile healing crystal. It amplifies the energy of other stones, enhances psychic abilities, and clears energy blockages. The wand shape directs energy precisely where it is needed.',
      usage: 'Hold during meditation to amplify your intentions. Use in reiki healing sessions to direct energy. Place on your altar or use in crystal grids.'
    },
    variants: [{ size: 'Small (5-7cm)', price: 24.99 }, { size: 'Medium (8-10cm)', price: 34.99 }, { size: 'Large (11-14cm)', price: 54.99 }],
    benefits: ['Energy amplification', 'Chakra balancing', 'Meditation aid', 'Healing & clarity'],
    specifications: { material: 'Natural Clear Quartz', beadSize: 'N/A', braceletSize: 'N/A', weight: '30-100g', origin: 'Brazil' }
  },
  {
    id: 'chakra-tumbled-stones',
    name: '7 Chakra Tumbled Stones Kit',
    shortName: 'Chakra Stones Kit',
    category: 'Crystal',
    subcategory: 'Healing',
    sku: 'ME-CTS-025',
    price: 29.99,
    originalPrice: 42.99,
    cost: 3.80,
    shippingCost: 3.00,
    rating: 4.7,
    reviews: 234,
    tags: ['bestseller', 'healing', 'new'],
    images: ['https://images.pexels.com/photos/6634238/pexels-photo-6634238.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/7947784/pexels-photo-7947784.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1147946/pexels-photo-1147946.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/4040638/pexels-photo-4040638.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/6634238/pexels-photo-6634238.jpeg?auto=compress&cs=tinysrgb&w=800'],
    cjLink: 'https://www.cjdropshipping.com/product-detail?pid=1607214444940111872',
    cjSku: 'CJZS1649402-7C',
    description: {
      short: 'Complete 7 chakra tumbled stones kit for healing and balance.',
      long: 'This 7 Chakra Tumbled Stones Kit includes one polished tumble stone for each of the seven main chakras. Perfect for beginners and experienced practitioners alike, this set comes with a velvet pouch and a detailed guide explaining each stone\'s properties and how to use them for chakra balancing.',
      meaning: 'The seven chakras are energy centers along the spine that govern different aspects of physical, emotional, and spiritual health. When chakras are balanced, energy flows freely, promoting overall well-being.',
      usage: 'Place stones on corresponding chakra points during meditation. Carry in your pocket for all-day balance. Use in crystal grids or place around your home for positive energy.'
    },
    variants: [{ type: '7 Stones + Pouch', price: 29.99 }, { type: 'Deluxe Set + Guidebook', price: 44.99 }],
    benefits: ['Chakra balancing', 'Energy healing', 'Beginner friendly', 'Portable'],
    specifications: { material: 'Natural Tumbled Crystals', beadSize: 'N/A', braceletSize: 'N/A', weight: '100-150g', origin: 'Mixed' }
  }
];

let products = [...localProducts];
let productsLoaded = false;

async function loadProductsFromAPI() {
  if (productsLoaded) return products;

  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('API not available');

    const data = await response.json();
    if (data.products && data.products.length > 0) {
      products = data.products;
      productsLoaded = true;
      return products;
    }
  } catch (e) {
    console.log('Using local product data (API unavailable)');
  }

  productsLoaded = true;
  return products;
}

function getCustomProducts() {
  const stored = localStorage.getItem('mysticeast_custom_products');
  return stored ? JSON.parse(stored) : {};
}

function getMergedProducts() {
  const custom = getCustomProducts();
  return products.map(p => {
    if (custom[p.id]) {
      return { ...p, ...custom[p.id] };
    }
    return p;
  });
}

function getProductById(id) {
  return getMergedProducts().find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (category === 'all') return getMergedProducts();
  return getMergedProducts().filter(p => p.category === category);
}

function getFeaturedProducts() {
  return getMergedProducts().filter(p => p.tags && p.tags.includes('bestseller')).slice(0, 8);
}

function getRelatedProducts(productId) {
  const product = getProductById(productId);
  if (!product || !product.tags) return [];
  return getMergedProducts().filter(p => 
    p.id !== productId && 
    p.tags && 
    p.tags.some(tag => product.tags.includes(tag))
  ).slice(0, 4);
}

function getAllCategories() {
  return [...new Set(getMergedProducts().map(p => p.category))];
}

function calculateDiscount(originalPriceOrProduct, price) {
  let originalPrice, currentPrice;
  
  if (typeof originalPriceOrProduct === 'object' && originalPriceOrProduct !== null) {
    originalPrice = originalPriceOrProduct.originalPrice;
    currentPrice = originalPriceOrProduct.price;
  } else {
    originalPrice = originalPriceOrProduct;
    currentPrice = price;
  }
  
  if (!originalPrice || !currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

window.products = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getFeaturedProducts = getFeaturedProducts;
window.getRelatedProducts = getRelatedProducts;
window.getAllCategories = getAllCategories;
window.calculateDiscount = calculateDiscount;
window.formatPrice = formatPrice;