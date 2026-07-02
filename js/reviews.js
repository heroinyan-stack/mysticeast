// MysticEast - Product Reviews Data
const productReviews = {
  "obsidian-bracelet": [
    { author: "Sarah M.", location: "California, USA", rating: 5, date: "2024-01-15", text: "Absolutely beautiful bracelet! The quality is amazing and I can feel its positive energy. Shipping was fast and the packaging was so elegant. Will definitely order again!", verified: true },
    { author: "Michael T.", location: "London, UK", rating: 5, date: "2024-01-20", text: "Received this as a gift and my friend loved it! The beads are smooth and well-crafted. The spiritual significance makes it even more special.", verified: true },
    { author: "Emma L.", location: "Sydney, Australia", rating: 5, date: "2024-02-05", text: "Perfect for my meditation practice. I have noticed a real difference in my energy since wearing it. The color is even more beautiful in person!", verified: true },
    { author: "David K.", location: "Toronto, Canada", rating: 4, date: "2024-02-10", text: "Great quality for the price. The beads are genuine and well-polished. Would have given 5 stars but shipping took a bit longer than expected.", verified: true },
    { author: "Jessica R.", location: "New York, USA", rating: 5, date: "2024-02-15", text: "This has become my everyday bracelet. The energy is subtle but noticeable. My coworkers keep asking where I got it!", verified: true }
  ],
  "amethyst-bracelet": [
    { author: "Lisa C.", location: "Seattle, USA", rating: 5, date: "2024-01-10", text: "I wear this every day during meditation. The calming energy is real - I feel more centered and focused. The purple color is stunning!", verified: true },
    { author: "James W.", location: "Dublin, Ireland", rating: 5, date: "2024-01-25", text: "Bought this for my wife and she absolutely loves it. The quality exceeded my expectations. Beautiful packaging too.", verified: true },
    { author: "Sophie M.", location: "Paris, France", rating: 5, date: "2024-02-01", text: "My sleep has improved so much since I started keeping this by my bedside. The amethyst energy is very soothing.", verified: true },
    { author: "Ryan P.", location: "Austin, USA", rating: 4, date: "2024-02-08", text: "Nice bracelet with good energy. Beads are a bit smaller than I expected but that is my fault for not checking the size.", verified: true },
    { author: "Maya S.", location: "Vancouver, Canada", rating: 5, date: "2024-02-20", text: "This is my third purchase from MysticEast. Every piece has been exceptional. The amethyst is high quality and the bracelet is comfortable to wear.", verified: true }
  ],
  "rose-quartz-bracelet": [
    { author: "Amanda K.", location: "Los Angeles, USA", rating: 5, date: "2024-01-12", text: "This rose quartz bracelet is so delicate and beautiful. I love the soft pink color. It makes me feel more open and loving every time I wear it.", verified: true },
    { author: "Chris B.", location: "Chicago, USA", rating: 5, date: "2024-01-28", text: "Got this for my girlfriend for Valentine's Day. She wears it every day and says it helps her feel more peaceful. Great quality!", verified: true },
    { author: "Nicole D.", location: "Miami, USA", rating: 5, date: "2024-02-03", text: "The rose quartz beads are so pretty and the bracelet fits perfectly. I have noticed I am more patient and loving lately. Could be the crystal energy!", verified: true },
    { author: "Tom H.", location: "Manchester, UK", rating: 4, date: "2024-02-14", text: "Nice bracelet, good quality. The pink is a bit lighter than in the photos but still very nice. My partner loves it.", verified: true },
    { author: "Jennifer L.", location: "Melbourne, Australia", rating: 5, date: "2024-02-22", text: "Absolutely stunning rose quartz bracelet. The beads are high quality and the pink color is gorgeous. I get compliments every time I wear it!", verified: true }
  ],
  "citrine-bracelet": [
    { author: "Robert M.", location: "Houston, USA", rating: 5, date: "2024-01-08", text: "I swear this citrine bracelet brought me good luck! I got a promotion at work a week after I started wearing it. The golden color is beautiful.", verified: true },
    { author: "Patricia S.", location: "Phoenix, USA", rating: 5, date: "2024-01-22", text: "Beautiful sunny yellow color. The citrine beads are genuine and the bracelet is well made. I wear it every day for abundance energy.", verified: true },
    { author: "Mark J.", location: "Denver, USA", rating: 5, date: "2024-02-06", text: "Great quality citrine bracelet. The stones have a nice clarity and the yellow color is warm and inviting. Feels like sunshine on my wrist.", verified: true },
    { author: "Linda R.", location: "Portland, USA", rating: 4, date: "2024-02-12", text: "Pretty bracelet. The citrine is a bit paler than I expected but still nice. Good overall quality for the price.", verified: true },
    { author: "Kevin T.", location: "San Diego, USA", rating: 5, date: "2024-02-18", text: "This citrine bracelet has become my lucky charm. I wear it to all my business meetings. The quality is top notch!", verified: true }
  ],
  "tiger-eye-bracelet": [
    { author: "Brian S.", location: "Dallas, USA", rating: 5, date: "2024-01-05", text: "The tiger eye bracelet is absolutely stunning. The golden brown stripes are mesmerizing. It gives me confidence and focus during the day.", verified: true },
    { author: "Michelle K.", location: "Boston, USA", rating: 5, date: "2024-01-18", text: "Bought this for my husband and he loves it. The tiger eye stones are masculine and beautiful. Great quality bracelet.", verified: true },
    { author: "Steve W.", location: "Seattle, USA", rating: 5, date: "2024-02-02", text: "Beautiful tiger eye bracelet with great energy. I feel more grounded and focused when I wear it. The beads have excellent chatoyancy.", verified: true },
    { author: "Diana P.", location: "Austin, USA", rating: 4, date: "2024-02-09", text: "Nice bracelet, good quality. The tiger eye is a bit darker than in the photos but still very attractive.", verified: true },
    { author: "George F.", location: "Tampa, USA", rating: 5, date: "2024-02-21", text: "This is my favorite bracelet. The tiger eye stones are beautiful and the bracelet is very comfortable. I wear it every single day.", verified: true }
  ]
};

function getReviewsForProduct(productId) {
  return productReviews[productId] || [];
}

window.getReviewsForProduct = getReviewsForProduct;
window.productReviews = productReviews;
