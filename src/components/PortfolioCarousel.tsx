
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Blue Oasis Pools",
    tagline: "Custom Pool Builds & Outdoor Luxury",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    url: "#"
  },
  {
    title: "Sparkle Pool Cleaning",
    tagline: "Cleaning & Maintenance Platform",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    url: "#"
  },
  {
    title: "Sunset Backyard Living",
    tagline: "Outdoor Living & Water Features",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    url: "#"
  },
  {
    title: "Palm Paradise Pools",
    tagline: "Turnkey Backyard Transformations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    url: "#"
  },
  {
    title: "Prestige Pools & Spas",
    tagline: "Award-Winning Pool Contractors",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    url: "#"
  },
  {
    title: "Sunrise Spas",
    tagline: "Luxury Spa & Pool Experts",
    image: "https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad3?w=800&q=80",
    url: "#"
  },
  {
    title: "Haven Home Services",
    tagline: "Landscaping & Pool Pros",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80",
    url: "#"
  },
  {
    title: "Aqua Innovations",
    tagline: "Creative Water Features",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80",
    url: "#"
  },
  {
    title: "Poolside Pros",
    tagline: "Maintenance & Equipment Specialists",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    url: "#"
  },
  {
    title: "Premier Backyard",
    tagline: "Complete Outdoor Living",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    url: "#"
  },
];

// Show 3 on desktop, 2 on tablet, 1 on mobile
const useResponsiveSlidesToShow = () => {
  const [slidesToShow, setSlidesToShow] = React.useState(3);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesToShow;
};

const PortfolioCarousel = () => {
  const slidesToShow = useResponsiveSlidesToShow();
  const [startIdx, setStartIdx] = React.useState(0);

  const maxIdx = portfolioItems.length - slidesToShow;
  const canPrev = startIdx > 0;
  const canNext = startIdx < maxIdx;

  const goPrev = () => setStartIdx((idx) => Math.max(idx - slidesToShow, 0));
  const goNext = () => setStartIdx((idx) => Math.min(idx + slidesToShow, maxIdx));

  // Every 2.7s, auto-advance, restart at 0 if at the end.
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((idx) => (idx < maxIdx ? idx + slidesToShow : 0));
    }, 2700);
    return () => clearInterval(interval);
  }, [slidesToShow, maxIdx]);

  return (
    <section id="portfolio" className="py-24 bg-[#fafbfc] flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-dp-blue-dark mb-8 text-center">
        Check Out Our Work
      </h2>
      <div className="relative w-full max-w-6xl px-2 sm:px-6">
        {/* Slider */}
        <div className="flex items-center justify-center gap-2">
          <button
            className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-glass border border-gray-200 hover:bg-blue-50 transition-all disabled:opacity-40 z-10"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeft size={28} className="text-dp-blue" />
          </button>
          <div className={`flex-1 grid grid-cols-1 sm:grid-cols-${slidesToShow} gap-6`}>
            {/* Use slice for visible cards */}
            {portfolioItems.slice(startIdx, startIdx + slidesToShow).map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-0 relative flex flex-col items-stretch overflow-hidden group h-44 sm:h-56 md:h-60 transition-all duration-300 hover:shadow-2xl"
                style={{ minWidth: 0 }}
              >
                <a href={item.url} tabIndex={-1}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-32 sm:h-36 md:h-40 rounded-t-3xl shadow hover:scale-105 transition-transform duration-400"
                  />
                </a>
                <div className="p-4 pb-3 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-dp-blue-dark text-base line-clamp-1">{item.title}</h3>
                  <span className="text-xs text-dp-blue">{item.tagline}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-glass border border-gray-200 hover:bg-blue-50 transition-all disabled:opacity-40 z-10"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRight size={28} className="text-dp-blue" />
          </button>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-1 mt-8">
          {Array.from({ length: Math.ceil(portfolioItems.length / slidesToShow) }).map((_, pg) => {
            const isActive =
              startIdx / slidesToShow === pg ||
              (pg === 0 && startIdx < slidesToShow);
            return (
              <span
                key={pg}
                className={`inline-block w-3 h-3 rounded-full mx-0.5 transition-all duration-300 ${
                  isActive
                    ? "bg-dp-blue shadow-lg scale-110"
                    : "bg-gray-300 opacity-60"
                }`}
                aria-label={isActive ? "Current Portfolio Page" : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;

