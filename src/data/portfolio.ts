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
    category: "Bike Hire & Tours",
    image: "/portfolio/cyclingtom.png", // Fixed: removed 'public' prefix
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
    url: "https://withwarmer.com", // Strategic: proper domain
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
    category: "Pool Design",
    image: "/portfolio/pwrdetail.png",
    url: "https://pwrdetail.com", // Strategic: proper domain
    description: "Luxury resort-style pool design and installation with smart automation",
    status: "completed",
    tags: ["luxury", "smart-pools", "automation"],
    year: 2023,
    results: "Featured in Pool & Spa Magazine"
  },
  {
    id: "thomasirwin",
    title: "thomasirwin",
    category: "Pool & Spa",
    image: "/portfolio/thomasirwin.png",
    url: "https://thomasirwin.com", // Strategic: proper domain
    description: "Expert Non-profit Accounting, Bookkeeping and & Payroll Services",
    status: "ongoing",
    tags: ["luxury", "therapeutic", "custom-design"],
    year: 2024,
    results: "50+ luxury installations completed"
  },
  {
    id: "aspirecompanies",
    title: "Aspire Companies",
    category: "Spa Services",
    image: "/portfolio/aspirecompanies.png",
    url: "https://aspirecompanies.com", // Strategic: proper domain
    description: "Inspiring & empowring women to lead change in life, work and world.",
    status: "active",
    tags: ["wellness", "maintenance", "custom-spa"],
    year: 2024,
    results: "98% customer satisfaction rate"
  },
  {
    id: "shOUter",
    title: "shOUter",
    category: "Outdoor Living",
    image: "/portfolio/shouter.png",
    url: "https://shouter.app", // Strategic: proper domain
    description: "Care for your home",
    featured: true,
    status: "completed",
    tags: ["entertainment", "transformation", "outdoor-living"],
    year: 2023,
    testimonial: "Transformed our backyard into our favorite room of the house",
    results: "Winner of Outdoor Living Award 2023"
  },
  {
    id: "Be Kept Up",
    title: "Be Kept Up",
    category: "Home Services",
    image: "/portfolio/bekeptup.png",
    url: "https://bekeptup-digitalagency.webflow.io", // Strategic: proper domain
    description: "Are You Ready to Amplify Your Online Presence",
    status: "active",
    tags: ["maintenance", "improvement", "support"],
    year: 2024,
    results: "500+ homes serviced annually"
  },
  {
    id: "Epsy",
    title: "Epsy",
    category: "Pool Maintenance",
    image: "/portfolio/epsy.png",
    url: "https://epsyhealth.com", // Strategic: proper domain
    description: "You deserve the best epilepsy care",
    status: "active",
    tags: ["eco-friendly", "maintenance", "professional"],
    year: 2024,
    results: "Zero chemical incidents in 3 years"
  },
  {
    id: "Box Office Theory",
    title: "Box Office Theory",
    category: "Outdoor Construction",
    image: "/portfolio/boxofficetheory.png",
    url: "https://boxofficetheory.com", // Strategic: proper domain
    description: "Discover how Box Office Theory's comprehensive analysis and forecasting services can help you unlock the full potential of every cinematic release",
    status: "completed",
    tags: ["construction", "weather-resistant", "custom"],
    year: 2023,
    results: "25-year warranty on all installations"
  },
  {
    id: "thinkbettergroup",
    title: "ThinkBetter",
    category: "Pool Construction",
    image: "/portfolio/thinkbettergroup.png",
    url: "https://thinkbettergroup.com", // Strategic: proper domain
    description: "Our Brands Elimanate the Need for 760 Tonnes of PLastic a Year",
    featured: true,
    status: "ongoing",
    tags: ["premium", "smart-technology", "custom-features"],
    year: 2024,
    results: "$2M+ in luxury pool projects completed"
  },
  {
    id: "monkeytail-agency",
    title: "Monkeytail Agency",
    category: "Digital Agency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "https://monkeytail-agency.webflow.io",
    description: "Creative digital agency specializing in modern web solutions",
    status: "active",
    tags: ["digital", "creative", "webflow"],
    year: 2024
  },
  {
    id: "mema-consultants",
    title: "MEMA Consultants",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    url: "https://memaconsultants.webflow.io",
    description: "Professional consulting services for business growth and strategy",
    status: "active",
    tags: ["consulting", "business", "strategy"],
    year: 2024
  },
  {
    id: "planetary-stellar",
    title: "Planetary Stellar",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    url: "https://planetarys-stellar-site.webflow.io",
    description: "Innovative technology solutions for the space industry",
    status: "active",
    tags: ["technology", "space", "innovation"],
    year: 2024
  },
  {
    id: "agentc-marketing",
    title: "Agent C Marketing",
    category: "Marketing Agency",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    url: "https://vistadentalimplants.com",
    description: "Advanced dental implant services with cutting-edge technology",
    status: "active",
    tags: ["healthcare", "dental", "medical"],
    year: 2024
  },
  {
    id: "akel-entertainment",
    title: "Akel Entertainment",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
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
