
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example sites -- swap out images/URLs as desired
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

// Responsive config: number of columns per breakpoints
function useResponsiveCols() {
  const [cols, setCols] = React.useState(5);
  React.useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else if (window.innerWidth < 1280) setCols(4);
      else setCols(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

const PortfolioCarousel = () => {
  const cols = useResponsiveCols();
  const rows = 2;
  const sitesPerPage = cols * rows;
  const [pageIdx, setPageIdx] = React.useState(0);

  // Wrap around logic for pages
  const totalPages = Math.ceil(portfolioItems.length / sitesPerPage);

  // Auto-advance every 3.5s
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPageIdx((i) => (i + 1) % totalPages);
    }, 3500);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handlePrev = () => {
    setPageIdx((i) => (i - 1 + totalPages) % totalPages);
  };
  const handleNext = () => {
    setPageIdx((i) => (i + 1) % totalPages);
  };

  // Sliced data
  const start = pageIdx * sitesPerPage;
  const pageSites = [];
  for (let r = 0; r < rows; r++) {
    const rowSites = [];
    for (let c = 0; c < cols; c++) {
      const idx = start + r * cols + c;
      if (portfolioItems[idx]) rowSites.push(portfolioItems[idx]);
    }
    pageSites.push(rowSites);
  }

  return (
    <section id="portfolio" className="py-24 bg-[#fafbfc] flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-dp-blue-dark mb-8 text-center">
        Check Out Our Work
      </h2>
      <div className="relative w-full max-w-6xl px-2 sm:px-6">
        {/* Arrows */}
        <button
          className="hidden md:flex absolute z-20 left-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-blue-50 transition-all disabled:opacity-40"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <ChevronLeft size={30} className="text-dp-blue" />
        </button>
        <button
          className="hidden md:flex absolute z-20 right-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-blue-50 transition-all disabled:opacity-40"
          onClick={handleNext}
          aria-label="Next"
        >
          <ChevronRight size={30} className="text-dp-blue" />
        </button>
        {/* Grid */}
        <div className={`transition-all duration-500 ease-in-out grid gap-7 md:gap-8`} style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
        }}>
          {pageSites.flat().map((site, i) => (
            <a
              key={site.title + i}
              href={site.url}
              className="group relative rounded-2xl shadow-lg bg-white border border-gray-150 flex flex-col justify-start overflow-hidden transition-transform duration-300
              hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
              style={{ minHeight: 120 }}
              target="_blank" rel="noopener noreferrer"
            >
              {/* Browser chrome mockup */}
              <div className="flex items-center gap-1 px-4 py-2 bg-gray-50 border-b border-gray-100">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400 mr-1"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 mr-1"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
                <span className="ml-3 font-semibold text-xs text-gray-400 truncate">{site.title}</span>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gray-200">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                />
                {/* Overlay for "visit site" on hover */}
                <span className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="bg-dp-blue-dark text-xs text-white rounded px-2 py-1 shadow hover:scale-105 transition-transform font-medium">View site</span>
                </span>
              </div>
              {/* Title below (mobile) */}
              <div className="block sm:hidden text-xs px-4 py-2 font-medium text-gray-700 truncate">{site.title}</div>
            </a>
          ))}
        </div>
        {/* Pagination Dots (desktop, optional) */}
        <div className="flex justify-center gap-1 mt-6">
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
