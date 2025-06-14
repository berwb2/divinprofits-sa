
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React from "react";

// AUTOPLAY LOGIC
import useEmblaCarousel from "embla-carousel-react";

// Images: You can use Unsplash or similar placeholder images for each company
const portfolioItems = [
  {
    title: "Blue Oasis Pools",
    tagline: "Custom Pool Builds & Outdoor Luxury",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description: "Bright, interactive website for a custom pool builder. Featured animated project galleries and lead form—200% increase in quotes.",
  },
  {
    title: "Sparkle Pool Cleaning",
    tagline: "Cleaning & Maintenance Platform",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    description: "Membership system and scheduling workflows for weekly pool care offers. Conversion-focused, with auto-quoting and reviews.",
  },
  {
    title: "Sunset Backyard Living",
    tagline: "Outdoor Living & Water Features",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    description: "Showcases premium patios, fire features, and luxury poolside living projects with immersive before/after effects.",
  },
  {
    title: "Palm Paradise Pools",
    tagline: "Turnkey Backyard Transformations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    description: "Gorgeous scroll experiences for a fast-growing pool startup. Modern branding, custom icon sets, and lightning-quick booking.",
  },
  {
    title: "Haven Home Services",
    tagline: "Landscaping & Pool Pros",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80",
    description: "Full-service pool and landscaping bundles. Robust testimonials, portfolio filter, and vibrant contact flow.",
  },
  {
    title: "Prestige Pools & Spas",
    tagline: "Award-Winning Pool Contractors",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    description: "Modern, glassy UI for high-end pool builds—dramatic forms, animated water effects, and vivid before/after galleries.",
  },
];

const AUTOPLAY_INTERVAL = 3500;

const PortfolioCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });

  // Autoplay effect (already enabled previously)
  React.useEffect(() => {
    if (!embla) return;
    let autoplay = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(autoplay);
  }, [embla]);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 relative">
        <div className="rounded-3xl bg-white shadow-xl px-6 py-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dp-blue-dark mb-5 text-center animate-fade-in">
            Pool & Home Companies: Our Sites in Action
          </h2>
          <p className="text-lg text-dp-blue-dark mb-10 text-center animate-fade-in">
            Divin-Profits elevates pool & outdoor brands with beautiful, conversion-focused websites.
          </p>
          <div className="relative max-w-4xl mx-auto animate-scale-in">
            <div ref={emblaRef}>
              <Carousel opts={{ loop: true, align: "center" }} className="overflow-visible select-none">
                <CarouselContent>
                  {portfolioItems.map((item, i) => (
                    <CarouselItem key={i} className="flex flex-col items-center animate-fade-in">
                      <div className="relative w-full overflow-hidden rounded-3xl shadow-glass mb-6 group transition-all hover:scale-105 hover:shadow-2xl animate-scale-in ring-1 ring-gray-200">
                        <img
                          src={item.image}
                          alt={`${item.title} screenshot`}
                          className="w-full h-72 object-cover group-hover:scale-110 group-hover:opacity-95 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-dp-blue/10 pointer-events-none transition-all opacity-0 group-hover:opacity-50" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1 bg-white/70 backdrop-blur-md rounded-br-3xl rounded-bl-3xl">
                          <h4 className="font-display text-xl text-dp-blue-dark font-bold">{item.title}</h4>
                          <span className="text-dp-blue font-bold">{item.tagline}</span>
                          <span className="text-sm text-gray-700">{item.description}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
