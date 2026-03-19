export type Category = 'All' | 'Sports' | 'Wellness' | 'Lifestyle';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  author: string;
  imageUrl: string;
  readTime: string;
  externalUrl?: string;
  content?: string;
}

const WIX_BASE = 'https://static.wixstatic.com/media';
const wix = (id: string, ext: string = 'jpeg', w = 800, h = 533) =>
  `${WIX_BASE}/${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_90,enc_avif,quality_auto/${id}~mv2.${ext}`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "psac-womens-track-fifth",
    title: "The 2025 PSAC Championships Leave the SU Women's Track & Field Team in Fifth Place",
    excerpt: "A first-hand recap of the 2025 PSAC Outdoor Championships, where Shippensburg University's women's track & field team earned a fifth-place finish on the conference stage.",
    date: "Jun 2025",
    category: "Sports",
    author: "Jada Lee",
    readTime: "4 min",
    imageUrl: "https://snworksceo.imgix.net/slt/58305e44-e471-487a-9fb0-e51358f7377a.sized-1000x1000.png?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2025/06/the-2025-psac-championships-leave-the-su-womens-track-field-team-in-fifth-place"
  },
  {
    id: "su-track-and-field",
    title: "SU Track & Field Team Reaches New Milestones",
    excerpt: "The Raiders track and field program is hitting new heights — breaking records and building momentum heading into the postseason.",
    date: "Apr 2025",
    category: "Sports",
    author: "Jada Lee",
    readTime: "3 min",
    imageUrl: "https://snworksceo.imgix.net/slt/b8dd16e5-aa86-4b3b-9b38-abc3d8526200.sized-1000x1000.png?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2025/04/su-track-and-field-team-reaches-milestones"
  },
  {
    id: "baseball-two-wins",
    title: "Baseball Takes Two Wins in a Difficult Three",
    excerpt: "SU baseball battled through a tough weekend series, earning two hard-fought victories that showcase the team's resilience and depth.",
    date: "Mar 2025",
    category: "Sports",
    author: "Jada Lee",
    readTime: "3 min",
    imageUrl: "https://snworksceo.imgix.net/slt/30412cb3-42da-4dd6-83dc-ad2e83f2e804.sized-1000x1000.jpg?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2025/04/baseball-takes-two-wins-in-a-difficult-four-game-set"
  },
  {
    id: "give-awards-women",
    title: "The Annual Gero Awards Highlights Prominent Women Across Campus",
    excerpt: "Recognizing the women at Shippensburg University who lead with intention, inspire their peers, and make a lasting difference in campus life.",
    date: "Mar 2025",
    category: "Lifestyle",
    author: "Jada Lee",
    readTime: "4 min",
    imageUrl: "https://snworksceo.imgix.net/slt/d65dde2f-d6e9-4fa4-bc67-2a47fbcb495c.sized-1000x1000.JPG?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2025/03/the-annual-gero-awards-highlights-prominent-women-across-campus"
  },
  {
    id: "man-behind-the-camera",
    title: "The Man Behind the Camera",
    excerpt: "A profile piece on one of the unsung heroes of Shippensburg athletics — the photographer and videographer who captures every defining moment.",
    date: "Feb 2025",
    category: "Sports",
    author: "Jada Lee",
    readTime: "4 min",
    imageUrl: "https://snworksceo.imgix.net/slt/2223a2f5-6905-4ead-8cdc-01648c13d8da.sized-1000x1000.jpg?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2025/02/the-man-behind-the-camera"
  },
  {
    id: "wawa-franklin-county",
    title: "Wawa Celebrates the Expansion in Central PA With Its First Store in Franklin County",
    excerpt: "The beloved convenience brand expands into Central PA — what it means for the community and the story behind the grand opening.",
    date: "Jan 2025",
    category: "Lifestyle",
    author: "Jada Lee",
    readTime: "3 min",
    imageUrl: "https://fcfreepresspa.com/wp-content/uploads/2025/01/image-4.png",
    externalUrl: "https://fcfreepresspa.com/wawa-celebrates-the-expansion-in-central-pa-with-its-first-store-in-franklin-county/"
  },
  {
    id: "jane-offner-vision",
    title: "Jane Offner's Vision Comes to Life",
    excerpt: "A feature profile on a local entrepreneur whose creative vision and community spirit turned a dream into a thriving reality.",
    date: "Jan 2025",
    category: "Lifestyle",
    author: "Jada Lee",
    readTime: "4 min",
    imageUrl: "https://bloximages.chicago2.vip.townnews.com/shipnc.com/content/tncms/assets/v3/editorial/c/15/c15254b2-c6eb-11ef-9a1b-1fe1f9a17cef/677300f575202.image.jpg?resize=664%2C500",
    externalUrl: "https://www.shipnc.com/community/article_eca551bc-c6e8-11ef-82df-c32c67222820.html"
  },
  {
    id: "raider-pro-basketball",
    title: "A Raider in Pro Basketball",
    excerpt: "Everything you need to know about Dustin Sleva. It all started with a long car ride that led to Dustin Sleva's promising future in professional basketball.",
    date: "Dec 4, 2024",
    category: "Sports",
    author: "Jada Lee",
    readTime: "5 min",
    imageUrl: wix('e7db64_72b277bc82a74d088b097f7414d046bd', 'jpg'),
    externalUrl: "https://jadareneel932.wixsite.com/secretcuesof_mslee/post/a-raider-in-pro-basketball"
  },
  {
    id: "raiders-womens-basketball-tournament",
    title: "Raiders Women's Basketball Team Defeats St. Mary's, Advances to Day Two of Tournament",
    excerpt: "Shippensburg University's women's basketball team secured a tournament win over St. Mary's, punching their ticket to day two and keeping their postseason run alive.",
    date: "Dec 2024",
    category: "Sports",
    author: "Jada Lee",
    readTime: "3 min",
    imageUrl: "https://snworksceo.imgix.net/slt/4373c3a4-89e4-4be6-8eef-957e0dc5738c.sized-1000x1000.jpeg?w=1000",
    externalUrl: "https://www.theslateonline.com/article/2024/12/raiders-womens-basketball-team-defeats-st-marys-advances-to-day-two-of-tournament"
  },
  {
    id: "raiders-anchorup-2024",
    title: "Raiders AnchorUp for the 2024 Season",
    excerpt: "Strength, Unity, and a Season of Tribute. Shippensburg University – The Raiders finish summer camp and prepare for a groundbreaking year ahead.",
    date: "Sep 14, 2024",
    category: "Sports",
    author: "Jada Lee",
    readTime: "4 min",
    imageUrl: wix('e7db64_26376ee947454ea99ab0f38c7331268c'),
    externalUrl: "https://jadareneel932.wordpress.com/2024/09/14/raiders-anchorup-for-the-2024-season/"
  },
];

export const GALLERY_IMAGES = [
  { url: wix('e7db64_25a73ccb0ee845d19f58b0f579d222d9', 'png', 600, 600), alt: 'Gallery photo 1' },
  { url: wix('e7db64_2cedc75fbb894be596d00dc1f01e18c8', 'jpeg', 600, 600), alt: 'Gallery photo 2' },
  { url: wix('e7db64_424c36e977784c88a9d3df9a6fc837ef', 'jpeg', 600, 600), alt: 'Gallery photo 3' },
  { url: wix('e7db64_579ab2898d7746a6a95a2cd6b3239d7f', 'jpeg', 600, 600), alt: 'Gallery photo 4' },
  { url: wix('e7db64_93046df994524178acb66b0ba6b7c31b', 'jpeg', 600, 600), alt: 'Gallery photo 5' },
  { url: wix('e7db64_9a077ffce4d1405a8304025bc340a36d', 'jpeg', 600, 600), alt: 'Gallery photo 6' },
  { url: wix('e7db64_a95e28a1d2974fafa50e73571fb906c6', 'jpeg', 600, 600), alt: 'Gallery photo 7' },
  { url: wix('e7db64_ad47bd34018d4947abf685985fe43747', 'jpeg', 600, 600), alt: 'Gallery photo 8' },
  { url: wix('e7db64_b504021f9a0e4323a85b65ae2b4be7bc', 'jpeg', 600, 600), alt: 'Gallery photo 9' },
  { url: wix('e7db64_d61222273e034b0288563ee5b42bb9c9', 'jpeg', 600, 600), alt: 'Gallery photo 10' },
  { url: wix('e7db64_e5d4dc49d439482cb5211428988af0ca', 'jpeg', 600, 600), alt: 'Gallery photo 11' },
  { url: wix('e7db64_eac5a59c752040ff8836876f1b231db5', 'jpeg', 600, 600), alt: 'Gallery photo 12' },
];

export const PORTRAIT_URL = wix('e7db64_d3187a6ebf6d4d8d9e3533120ef065ee', 'jpeg', 600, 800);
