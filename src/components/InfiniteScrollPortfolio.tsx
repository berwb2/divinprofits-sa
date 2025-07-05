
import { portfolioItems } from "../data/portfolio";

const InfiniteScrollPortfolio = () => {
  // Duplicate the portfolio items to create seamless infinite scroll
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted By Over 20+ South African Brands
        </h2>
        <p className="text-lg text-gray-600">
          See what we've been building for our clients
        </p>
      </div>
      
      <div className="relative">
        {/* Main scrolling container */}
        <div className="flex animate-infinite-scroll gap-6">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-80 h-48 relative group cursor-pointer"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{item.category}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollPortfolio;
