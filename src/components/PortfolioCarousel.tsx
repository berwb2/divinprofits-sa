import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const portfolioItems = [
  {
    title: "Zenith SaaS",
    tagline: "Conversion-Optimized B2B SaaS Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: "Stunning landing, live dashboards, 48% better engagement.",
  },
  {
    title: "Apex Commerce",
    tagline: "Award-Winning E-commerce Redesign",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    description: "Modern UX, instant checkout, +320% sales in 90 days.",
  },
  {
    title: "BrandLift Agency",
    tagline: "Vibrant Creative Portfolio",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80",
    description: "Showcases full case studies—blending story and visual impact.",
  },
  {
    title: "FinEdge App",
    tagline: "Premium Lead Gen Funnel",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    description: "Glassmorphic UI, subtle animations, +55% qualified leads.",
  },
];

const PortfolioCarousel = () => (
  <section id="portfolio" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 relative">
    <div className="container relative">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-dp-blue-dark mb-5 text-center animate-fade-in">
        Check Out Our Work
      </h2>
      <p className="text-lg text-dp-blue-dark mb-10 text-center animate-fade-in">
        See how DeepDiveProfits elevates brands with world-class design and performance.
      </p>
      <div className="relative max-w-4xl mx-auto animate-scale-in">
        <Carousel opts={{ loop: true, align: "center" }} className="overflow-visible">
          <CarouselContent>
            {portfolioItems.map((item, i) => (
              <CarouselItem key={i} className="flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-3xl shadow-glass mb-6 group transition-all hover:scale-[1.01]">
                  <img
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dp-blue/10 pointer-events-none transition-all opacity-0 group-hover:opacity-50" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1 bg-white/60 backdrop-blur-sm rounded-br-3xl rounded-bl-3xl">
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
  </section>
);

export default PortfolioCarousel;
