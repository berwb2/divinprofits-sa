
import React from "react";

const portfolioItems = [
  {
    title: "Blue Oasis Pools",
    tagline: "Custom Pool Builds & Outdoor Luxury",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description: "Bright, interactive website for a custom pool builder. Animated galleries, modern forms, 200% increase in leads.",
  },
  {
    title: "Sparkle Pool Cleaning",
    tagline: "Cleaning & Maintenance Platform",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    description: "Easy membership system & booking for weekly pool care. Conversion-focused and review-driven.",
  },
  {
    title: "Sunset Backyard Living",
    tagline: "Outdoor Living & Water Features",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    description: "Premium patios, fire features, and poolside projects. Before/after effects, gorgeous visuals.",
  },
  {
    title: "Palm Paradise Pools",
    tagline: "Turnkey Backyard Transformations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    description: "Lightning-fast booking and scroll experiences for this pool startup. Modern branding, custom icons.",
  },
  {
    title: "Haven Home Services",
    tagline: "Landscaping & Pool Pros",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80",
    description: "Full-service pool/landscaping packages. Portfolio filter, robust testimonials, quick contact.",
  },
  {
    title: "Prestige Pools & Spas",
    tagline: "Award-Winning Pool Contractors",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    description: "Modern, glassy UI for high-end pool builds—dramatic forms, gorgeous water effects.",
  },
  {
    title: "Sunrise Spas",
    tagline: "Luxury Spa & Pool Experts",
    image: "https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad3?w=800&q=80",
    description: "Online spa showcase & lead magnet landing. Vivid before/after galleries, super clean interface.",
  },
  {
    title: "Poolside Pros",
    tagline: "Maintenance & Equipment Specialists",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    description: "Automated inquiry flows for service needs—scheduling, repair, upgrades, all streamlined.",
  },
  {
    title: "Aqua Innovations",
    tagline: "Creative Water Features",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80",
    description: "Unique water features, fountains & playful details. Gorgeous project catalog with video."
  },
  {
    title: "Premier Backyard",
    tagline: "Complete Outdoor Living",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    description: "All-in-one outdoor & pool site. Large project gallery, showcase videos, bold branding.",
  },
];

const AUTOPLAY_INTERVAL = 2500; // ms

const PortfolioCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setFade(false), AUTOPLAY_INTERVAL - 300);
    const interval = setInterval(() => {
      setFade(true);
      setCurrent((prev) => (prev + 1) % portfolioItems.length);
      setTimeout(() => setFade(false), 300);
    }, AUTOPLAY_INTERVAL);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const item = portfolioItems[current];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center">
      <div className="w-full max-w-3xl px-4 sm:px-8">
        <div className="rounded-3xl bg-white shadow-xl px-6 py-12 relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dp-blue-dark mb-5 text-center animate-fade-in">
            Our Work for Pool & Home Brands
          </h2>
          <p className="text-lg text-dp-blue-dark mb-10 text-center animate-fade-in">
            Divin-Profits crafts conversion-boosting sites for pool and home service companies.
          </p>
          <div className="max-w-lg mx-auto">
            <div
              className={`relative w-full overflow-hidden rounded-3xl shadow-glass mb-6 group transition-all ${
                fade ? "animate-fade-in" : "animate-fade-out"
              }`}
              style={{ minHeight: 300 }}
              key={item.title}
            >
              <img
                src={item.image}
                alt={`${item.title} website`}
                className="w-full h-72 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dp-blue/10 pointer-events-none transition-all opacity-0 group-hover:opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1 bg-white/70 backdrop-blur-md rounded-b-3xl">
                <h4 className="font-display text-xl text-dp-blue-dark font-bold">{item.title}</h4>
                <span className="text-dp-blue font-semibold">{item.tagline}</span>
                <span className="text-sm text-gray-700">{item.description}</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {portfolioItems.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-dp-blue" : "bg-gray-300"
                  }`}
                  aria-label={idx === current ? "Current Slide" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
