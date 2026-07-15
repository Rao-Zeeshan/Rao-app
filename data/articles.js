/**
 * Dummy article data for ZeeshanBlog.
 * In a real production app this would come from a database (MongoDB, Postgres, etc).
 * Kept in-memory here so the whole project runs with zero external services,
 * which makes it trivial to deploy on EC2 / Amplify / EKS.
 */

let articles = [
  {
    id: 1,
    title: "Building Scalable Node.js Apps in 2026",
    excerpt: "A practical guide to structuring Express applications that grow with your team and traffic.",
    content: "Scalability isn't just about handling more traffic, it's about keeping a codebase maintainable as it grows. In this article we walk through folder structure, environment configuration, caching strategies and how to prepare a Node.js application for horizontal scaling on platforms like EC2, ECS and EKS. We also cover graceful shutdowns, health checks and 12-factor app principles that make deployments predictable.",
    category: "Web",
    author: "Ahmad Raza",
    date: "2026-03-10",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Mobile Apps Every Developer Should Try",
    excerpt: "From productivity boosters to code companions, these apps make a developer's life easier.",
    content: "The app store is flooded with tools, but only a handful actually earn a permanent spot on your home screen. We tested dozens of apps and picked the ten that genuinely improve a developer's daily workflow, covering note taking, terminal access on the go, and API testing.",
    category: "Apps",
    author: "Sara Khan",
    date: "2026-03-08",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    featured: false
  },
  {
    id: 3,
    title: "The Renaissance of Digital Art in Pakistan",
    excerpt: "How local artists are blending tradition with modern digital tools to reach a global audience.",
    content: "Digital art has opened doors for a new generation of Pakistani illustrators. This piece profiles a handful of artists who mix miniature painting traditions with digital brushes, and explains how platforms like Instagram and NFT marketplaces changed their careers.",
    category: "Art",
    author: "Imran Sheikh",
    date: "2026-03-05",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80",
    featured: false
  },
  {
    id: 4,
    title: "5 Books Every Software Engineer Should Read",
    excerpt: "Timeless lessons on clean code, systems thinking, and career growth.",
    content: "Beyond documentation and tutorials, a handful of books shaped how the best engineers think about their craft. We break down the core lessons from five classics and why they still matter in an age of AI assisted coding.",
    category: "Books",
    author: "Fatima Noor",
    date: "2026-03-02",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Simple Habits That Actually Improve Your Health",
    excerpt: "Small, sustainable changes that make a measurable difference over time.",
    content: "Health advice is often overwhelming and contradictory. This article focuses on a short list of habits backed by consistent evidence: sleep consistency, short walks after meals, hydration, and mindful screen breaks.",
    category: "Health",
    author: "Dr. Ayesha Malik",
    date: "2026-02-27",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80",
    featured: false
  },
  {
    id: 6,
    title: "A Brief History of the Internet",
    excerpt: "From ARPANET to the modern web, tracing the milestones that connected the world.",
    content: "The internet as we know it today began as a research project connecting a handful of universities. We trace the key milestones, from the first email to the invention of the World Wide Web, and how each breakthrough shaped modern life.",
    category: "History",
    author: "Bilal Ahmed",
    date: "2026-02-24",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Movies That Predicted the Future of Technology",
    excerpt: "Science fiction films that quietly forecasted real innovations decades later.",
    content: "Long before smartphones and video calls, filmmakers imagined a connected future. This retrospective looks at films whose fictional gadgets eventually became everyday reality, and what they got surprisingly right.",
    category: "Movies",
    author: "Hassan Ali",
    date: "2026-02-20",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    featured: false
  },
  {
    id: 8,
    title: "Hidden Gems: Underrated Travel Spots in Northern Pakistan",
    excerpt: "Away from the crowds, these valleys offer some of the most breathtaking views on earth.",
    content: "Hunza and Skardu get all the attention, but Pakistan's north is full of quieter valleys with equally stunning scenery. We share a short guide to lesser known spots, how to reach them, and the best time of year to visit.",
    category: "Travel",
    author: "Zainab Tariq",
    date: "2026-02-17",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Understanding REST vs GraphQL in 2026",
    excerpt: "A practical comparison to help you pick the right API style for your next project.",
    content: "Both REST and GraphQL remain relevant in 2026, each with clear trade-offs. This article compares tooling, caching behavior, learning curve and performance characteristics to help you choose confidently for your next API.",
    category: "Web",
    author: "Ahmad Raza",
    date: "2026-02-14",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    featured: false
  },
  {
    id: 10,
    title: "The Best Note-Taking Apps for Students in 2026",
    excerpt: "A comparison of the most popular apps for organizing lectures, tasks and ideas.",
    content: "Choosing the right note-taking app can genuinely change how well you retain information. We compare five popular apps on sync speed, handwriting support, and offline reliability.",
    category: "Apps",
    author: "Sara Khan",
    date: "2026-02-11",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80",
    featured: false
  },
  {
    id: 11,
    title: "Street Photography as a Form of Storytelling",
    excerpt: "How candid moments captured on the street can tell richer stories than staged shoots.",
    content: "Street photography rewards patience and observation. This piece explores composition techniques and ethical considerations when photographing strangers in public spaces.",
    category: "Art",
    author: "Imran Sheikh",
    date: "2026-02-08",
    image: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=1200&q=80",
    featured: false
  },
  {
    id: 12,
    title: "Why Reading Fiction Makes You a Better Engineer",
    excerpt: "The unexpected link between empathy, narrative thinking and problem solving.",
    content: "Reading fiction strengthens the same cognitive muscles used in debugging complex systems: holding multiple variables in mind, predicting outcomes, and empathizing with users. We explore the research behind this connection.",
    category: "Books",
    author: "Fatima Noor",
    date: "2026-02-05",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
    featured: false
  },
  {
    id: 13,
    title: "Managing Screen Time Without Losing Productivity",
    excerpt: "Practical strategies to reduce digital fatigue while still getting your work done.",
    content: "Screen time isn't inherently bad, but unmanaged screen time leads to fatigue and lower focus. We share a simple framework for structuring work blocks and breaks that keeps energy levels stable throughout the day.",
    category: "Health",
    author: "Dr. Ayesha Malik",
    date: "2026-02-01",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1200&q=80",
    featured: false
  },
  {
    id: 14,
    title: "The Silk Road: Trade Routes That Shaped Civilizations",
    excerpt: "How ancient trade networks spread goods, ideas and technology across continents.",
    content: "The Silk Road wasn't a single road but a network of routes connecting East and West. We look at how it shaped economies, spread religions, and enabled the exchange of technology long before globalization was a word.",
    category: "History",
    author: "Bilal Ahmed",
    date: "2026-01-28",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80",
    featured: false
  },
  {
    id: 15,
    title: "The Evolution of Special Effects in Cinema",
    excerpt: "From practical effects to AI-assisted CGI, tracing a century of movie magic.",
    content: "Special effects have come a long way from miniature models and matte paintings. We trace the technological leaps that brought us from practical effects to the AI-assisted CGI pipelines used in blockbuster films today.",
    category: "Movies",
    author: "Hassan Ali",
    date: "2026-01-24",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
    featured: false
  },
  {
    id: 16,
    title: "A Weekend Guide to Exploring Lahore's Old City",
    excerpt: "Food, architecture and history packed into a two day itinerary.",
    content: "Lahore's walled city is a sensory overload in the best way. This guide walks through a realistic two-day itinerary covering food streets, Mughal era architecture, and quieter corners most tourists miss.",
    category: "Travel",
    author: "Zainab Tariq",
    date: "2026-01-20",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
    featured: false
  },
  {
    id: 17,
    title: "Getting Started with Docker for Web Developers",
    excerpt: "A beginner friendly introduction to containers and why they matter.",
    content: "Docker can feel intimidating at first, but the core idea is simple: package your app with everything it needs to run consistently anywhere. We cover the basics of images, containers and a simple Dockerfile you can adapt for your own projects.",
    category: "Web",
    author: "Ahmad Raza",
    date: "2026-01-16",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80",
    featured: false
  },
  {
    id: 18,
    title: "Productivity Apps That Are Actually Worth Paying For",
    excerpt: "A curated list of paid apps that deliver real value over their free alternatives.",
    content: "Not every paid app is worth the subscription, but a handful genuinely earn their price tag through polish and reliability. We break down which productivity apps are worth the upgrade in 2026.",
    category: "Apps",
    author: "Sara Khan",
    date: "2026-01-12",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=1200&q=80",
    featured: false
  },
  {
    id: 19,
    title: "Minimalism in Modern Graphic Design",
    excerpt: "Why less continues to be more in a world full of visual noise.",
    content: "Minimalist design remains popular because it respects the viewer's attention. We look at the principles behind effective minimalist design and a few brands that use it exceptionally well.",
    category: "Art",
    author: "Imran Sheikh",
    date: "2026-01-08",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    featured: false
  },
  {
    id: 20,
    title: "How Ancient Libraries Preserved Human Knowledge",
    excerpt: "From the Library of Alexandria to modern digital archives.",
    content: "Long before the internet, libraries were humanity's way of preserving and sharing knowledge across generations. We trace the story from the Library of Alexandria to the digital archives of today.",
    category: "History",
    author: "Bilal Ahmed",
    date: "2026-01-04",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80",
    featured: false
  },
  {
    id: 21,
    title: "Miscellaneous Tech Trends Worth Watching in 2026",
    excerpt: "A roundup of smaller trends that don't fit neatly into one category but matter anyway.",
    content: "Not every trend fits a tidy category. This roundup covers a handful of smaller shifts across hardware, developer tools and consumer tech that are worth keeping an eye on this year.",
    category: "Other",
    author: "Fatima Noor",
    date: "2025-12-30",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    featured: false
  },
  {
    id: 22,
    title: "Why Slow Travel Is Making a Comeback",
    excerpt: "Trading whirlwind itineraries for deeper, slower experiences.",
    content: "Slow travel favors depth over checklists, staying longer in fewer places and getting to know a destination properly. We explore why more travelers are choosing this approach in 2026.",
    category: "Travel",
    author: "Zainab Tariq",
    date: "2025-12-26",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    featured: false
  }
];

let nextId = articles.length + 1;

function getAll() {
  return articles;
}

function getById(id) {
  return articles.find((a) => a.id === Number(id));
}

function getByCategory(category) {
  if (!category || category.toLowerCase() === "all") return articles;
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

function search(query) {
  if (!query) return articles;
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}

function getCategories() {
  return [...new Set(articles.map((a) => a.category))];
}

function create({ title, excerpt, content, category, author, image }) {
  const article = {
    id: nextId++,
    title,
    excerpt: excerpt || content.slice(0, 120) + "...",
    content,
    category: category || "Other",
    author: author || "Guest Author",
    date: new Date().toISOString().slice(0, 10),
    image:
      image ||
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    featured: false
  };
  articles.unshift(article);
  return article;
}

module.exports = {
  getAll,
  getById,
  getByCategory,
  search,
  getCategories,
  create
};
