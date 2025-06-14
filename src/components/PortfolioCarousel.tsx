
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// List of portfolio items (replace images/links for your real work)
const portfolioItems = [
  {
    title: "Blue Oasis Pools",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    url: "#"
  },
  {
    title: "Aqua Essence Landscaping",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80",
    url: "#"
  },
  {
    title: "Palm Paradise Pools",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    url: "#"
  },
  {
    title: "Prestige Pools & Spas",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    url: "#"
  },
  {
    title: "Sunrise Spas",
    image: "https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad3?w=800&q=80",
    url: "#"
  },
  {
    title: "Backyard Living Co.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    url: "#"
  },
  {
    title: "Haven Home Services",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80",
    url: "#"
  },
  {
    title: "ClearView Pool Cleaning",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    url: "#"
  },
  {
    title: "Sunset Decks & Patios",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    url: "#"
  },
  {
    title: "Elite Pool Builds",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80",
    url: "#"
  },
];

// Responsive rows/cols for different screen sizes
function useResponsiveGrid() {
  const [cols, setCols] = React.useState(5);
  React.useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 900) setCols(2);
      else if (window.innerWidth < 1280) setCols(3);
      else setCols(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cols;
}

const AUTO_ADVANCE_MS = 4500;
const ROWS = 2;

const PortfolioCarousel = () => {
  const cols = useResponsiveGrid();
  const sitesPerPage = cols * ROWS;

  // Create 'pages' based on visible slots
  const totalPages = Math.ceil(portfolioItems.length / sitesPerPage);
  const [pageIdx, setPageIdx] = React.useState(0);

  // Auto-advance, but pause on hover
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) return; // pause when user hovers
    const timer = setInterval(() => setPageIdx(i => (i + 1) % totalPages), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [totalPages, isHovered]);

  const handlePrev = () => setPageIdx(i => (i - 1 + totalPages) % totalPages);
  const handleNext = () => setPageIdx(i => (i + 1) % totalPages);

  // Slice grid data for the current 'slide'
  const start = pageIdx * sitesPerPage;
  const displayItems = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const idx = start + r * cols + c;
      if (portfolioItems[idx]) row.push(portfolioItems[idx]);
    }
    displayItems.push(row);
  }

  return (
    <section
      id="portfolio"
      className="py-24 flex flex-col items-center bg-[#fafbfc]"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-dp-blue-dark mb-8 text-center tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-dp-blue-light to-dp-blue">
          Check Out Our Work
        </span>
      </h2>
      <div
        className="relative w-full max-w-6xl px-4 sm:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Nav Arrows (desktop) */}
        <button
          className="hidden md:flex absolute z-20 left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-blue-50 transition-all active:scale-90"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <ChevronLeft size={32} className="text-dp-blue" />
        </button>
        <button
          className="hidden md:flex absolute z-20 right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-blue-50 transition-all active:scale-90"
          onClick={handleNext}
          aria-label="Next"
        >
          <ChevronRight size={32} className="text-dp-blue" />
        </button>
        {/* Cool Glassy Grid */}
        <div
          className="grid gap-8 md:gap-10 transition-all duration-500 ease-in-out animate-fade-in"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {displayItems.flat().map((site, i) => (
            <a
              key={site.title + i}
              href={site.url}
              className={`group relative rounded-2xl bg-white/70 backdrop-blur shadow-glass border border-gray-100 flex flex-col justify-start
                items-stretch overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none`}
              style={{ minHeight: 120, animationDelay: `${i * 70}ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Chrome Bar */}
              <div className="flex items-center gap-1 px-4 py-2 bg-gray-50/70 border-b border-gray-100">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400 mr-1"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 mr-1"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
                <span className="ml-3 font-semibold text-xs text-gray-400 truncate">{site.title}</span>
              </div>
              {/* Image */}
              <div className="flex-1 relative overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-28 sm:h-36 md:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                />
                {/* Overlay on hover */}
                <span className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  <span className="bg-dp-blue-dark text-xs text-white rounded px-2 py-1 shadow hover:scale-105 transition-transform font-medium">
                    View site
                  </span>
                </span>
              </div>
              {/* Bottom Title (mobile/small) */}
              <div className="block sm:hidden text-xs px-4 py-2 font-medium text-gray-700 truncate">
                {site.title}
              </div>
            </a>
          ))}
        </div>
        {/* Paging dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, pg) => (
            <span
              key={pg}
              className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
                pg === pageIdx
                  ? "bg-dp-blue shadow-lg scale-110"
                  : "bg-gray-300 opacity-60"
              }`}
              aria-label={pg === pageIdx ? "Current Portfolio Page" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
