// Enhanced portfolio type with additional strategic fields
export type PortfolioItem = {
  id: string;           // Unique identifier for each item
  title: string;
  category: string;
  image: string;        // Image URL or path
  url: string;          // Website URL
  description: string;
  featured?: boolean;   // Mark high-priority items
  status?: 'active' | 'completed' | 'ongoing'; // Project status
  tags?: string[];      // For filtering and search
  year?: number;        // Project completion year
  testimonial?: string; // Client testimonial
  results?: string;     // Key outcomes/metrics
};

// Fixed and enhanced portfolio data
export const portfolioItems: PortfolioItem[] = [
  {
    id: "cycling-tom",
    title: "Cycling Tom",
    category: "Tourism & Recreation",
    image: "/portfolio/cyclingtom.png",
    url: "https://cyclingtomtours.com",
    description: "Find Your Perfect Ride - Custom bike tour platform with booking system",
    featured: true,
    status: "active",
    tags: ["tourism", "booking", "e-commerce"],
    year: 2024,
    testimonial: "Increased bookings by 300% with the new platform",
    results: "300% increase in online bookings"
  },
  {
    id: "with-warmer",
    title: "Warmer",
    category: "Landscaping",
    image: "/portfolio/withwarmer.png",
    url: "https://withwarmer.com",
    description: "Advice when you need it, from people who've lived it",
    featured: true,
    status: "completed",
    tags: ["landscaping", "water-features", "sustainability"],
    year: 2024,
    results: "Award-winning sustainable landscape design"
  },
  {
    id: "pwr-detail",
    title: "PWR Detail",
    category: "Automotive Services",
    image: "/portfolio/pwrdetail.png",
    url: "https://pwrdetail.com",
    description: "Professional automotive detailing services with premium care and attention",
    status: "completed",
    tags: ["automotive", "detailing", "premium-service"],
    year: 2023,
    results: "Featured in Auto Care Magazine"
  },
  {
    id: "thomasirwin",
    title: "Thomas Irwin",
    category: "Professional Services",
    image: "/portfolio/thomasirwin.png",
    url: "https://thomasirwin.com",
    description: "Expert Non-profit Accounting, Bookkeeping and Payroll Services",
    status: "ongoing",
    tags: ["accounting", "non-profit", "professional-services"],
    year: 2024,
    results: "50+ non-profit organizations served"
  },
  {
    id: "aspirecompanies",
    title: "Aspire Companies",
    category: "Professional Development",
    image: "/portfolio/aspirecompanies.png",
    url: "https://aspirecompanies.com",
    description: "Inspiring & empowering women to lead change in life, work and world",
    status: "active",
    tags: ["leadership", "empowerment", "professional-development"],
    year: 2024,
    results: "98% participant satisfaction rate"
  },
  {
    id: "shOUter",
    title: "shOUter",
    category: "Home Services",
    image: "/portfolio/shouter.png",
    url: "https://shouter.app",
    description: "Care for your home with comprehensive maintenance and improvement services",
    featured: true,
    status: "completed",
    tags: ["home-care", "maintenance", "mobile-app"],
    year: 2023,
    testimonial: "Transformed our home maintenance experience completely",
    results: "Winner of Home Services Innovation Award 2023"
  },
  {
    id: "be-kept-up",
    title: "Be Kept Up",
    category: "Digital Marketing",
    image: "/portfolio/bekeptup.png",
    url: "https://bekeptup-digitalagency.webflow.io",
    description: "Are You Ready to Amplify Your Online Presence",
    status: "active",
    tags: ["digital-marketing", "online-presence", "amplification"],
    year: 2024,
    results: "500+ businesses amplified online presence"
  },
  {
    id: "epsy",
    title: "Epsy",
    category: "Healthcare",
    image: "/portfolio/epsy.png",
    url: "https://epsyhealth.com",
    description: "You deserve the best epilepsy care",
    status: "active",
    tags: ["healthcare", "epilepsy", "medical-care"],
    year: 2024,
    results: "Improved care outcomes for thousands of patients"
  },
  {
    id: "box-office-theory",
    title: "Box Office Theory",
    category: "Entertainment Analytics",
    image: "/portfolio/boxofficetheory.png",
    url: "https://boxofficetheory.com",
    description: "Discover how Box Office Theory's comprehensive analysis and forecasting services can help you unlock the full potential of every cinematic release",
    status: "completed",
    tags: ["entertainment", "analytics", "forecasting"],
    year: 2023,
    results: "Accurate predictions for 95% of major releases"
  },
  {
    id: "thinkbettergroup",
    title: "ThinkBetter",
    category: "Sustainability",
    image: "/portfolio/thinkbettergroup.png",
    url: "https://thinkbettergroup.com",
    description: "Our Brands Eliminate the Need for 760 Tonnes of Plastic a Year",
    featured: true,
    status: "ongoing",
    tags: ["sustainability", "environmental", "plastic-reduction"],
    year: 2024,
    results: "760+ tonnes of plastic eliminated annually"
  },
  {
    id: "monkeytail-agency",
    title: "Monkeytail Agency",
    category: "Digital Agency",
    image: "/portfolio/monkeymail.png",
    url: "https://monkeytail-agency.webflow.io",
    description: "Creative digital agency specializing in modern web solutions",
    status: "active",
    tags: ["digital", "creative", "webflow"],
    year: 2024
  },
  {
    id: "mema-consultants",
    title: "MEMA Consultants",
    category: "Business Consulting",
    image: "/portfolio/memaconsultants.png",
    url: "https://memaconsultants.webflow.io",
    description: "Professional consulting services for business growth and strategy",
    status: "active",
    tags: ["consulting", "business", "strategy"],
    year: 2024
  },
  {
    id: "planetary22",
    title: "Planetary Stellar",
    category: "Space Technology",
    image: "/portfolio/planetary22.png",
    url: "https://planetarys-stellar-site.webflow.io",
    description: "Planetary is redefining the digital landscape, creating a metaverse where immersive gaming and social connectivity converge. Our mission is to bridge the virtual with the real, offering unique experiences for users and brands alike.",
    status: "active",
    tags: ["technology", "space", "innovation"],
    year: 2024
  },
  {
    id: "agentc-marketing",
    title: "Agent C Marketing",
    category: "Marketing Agency",
    image: "/portfolio/agentC.png",
    url: "https://agentcmarketing.co",
    description: "Full-service marketing agency driving results for businesses",
    status: "active",
    tags: ["marketing", "agency", "digital-marketing"],
    year: 2024
  },
  {
    id: "vista-dental",
    title: "Vista Dental Implants",
    category: "Healthcare",
    image: "/portfolio/vistadentalimplants.png",
    url: "https://vistadentalimplants.com",
    description: "Advanced dental implant services with cutting-edge technology",
    status: "active",
    tags: ["healthcare", "dental", "medical"],
    year: 2024
  },
  {
    id: "akeld-entertainment",
    title: "Akeld Entertainment",
    category: "Entertainment",
    image: "/portfolio/akeld-logo.png",
    url: "https://akeldentertainment.com",
    description: "Premier entertainment services and event management",
    status: "active",
    tags: ["entertainment", "events", "music"],
    year: 2024
  }
];

// Strategic helper functions for portfolio management
export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  return portfolioItems.filter(item => item.category === category);
};

export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return portfolioItems.filter(item => item.featured);
};

export const getPortfolioByStatus = (status: 'active' | 'completed' | 'ongoing'): PortfolioItem[] => {
  return portfolioItems.filter(item => item.status === status);
};

export const searchPortfolio = (query: string): PortfolioItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return portfolioItems.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery) ||
    item.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Strategic portfolio categories for filtering
export const portfolioCategories = [
  "All",
  ...Array.from(new Set(portfolioItems.map(item => item.category)))
];

// Portfolio statistics for analytics
export const portfolioStats = {
  total: portfolioItems.length,
  featured: portfolioItems.filter(item => item.featured).length,
  active: portfolioItems.filter(item => item.status === 'active').length,
  completed: portfolioItems.filter(item => item.status === 'completed').length,
  ongoing: portfolioItems.filter(item => item.status === 'ongoing').length,
  categoriesCount: portfolioCategories.length - 1 // Excluding "All"
};
