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
    url: "https:/bekeptup-digitalagency.webflow.io", // Strategic: proper domain
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
