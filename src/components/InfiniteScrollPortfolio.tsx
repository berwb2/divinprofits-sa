import { logoItems } from "../data/logos";
import { useState, useEffect, useMemo } from "react";

const InfiniteScrollPortfolio = () => {
  const [loadedImages, setLoadedImages] = useState(new Set<string>());
  const [failedImages, setFailedImages] = useState(new Set<string>());
  
  // Filter out failed images and only include successfully loaded ones
  const validItems = useMemo(() => {
    return logoItems.filter(item => {
      // Exclude items that have failed to load
      if (failedImages.has(item.id)) return false;
      
      // Include all items that haven't failed
      return true;
    });
  }, [failedImages]);

  const handleImageLoad = (itemId: string) => {
    setLoadedImages(prev => new Set([...prev, itemId]));
  };

  const handleImageError = (itemId: string, imageSrc?: string) => {
    console.warn(`Failed to load image: ${itemId}${imageSrc ? ` (${imageSrc})` : ''}`);
    setFailedImages(prev => new Set([...prev, itemId]));
  };

  // Create enough duplicates for seamless infinite scroll (4 sets to ensure no gaps)
  const duplicatedItems = useMemo(() => {
    const items = [...validItems, ...validItems, ...validItems, ...validItems];
    return items;
  }, [validItems]);

  // Calculate the width for one complete set
  const itemWidth = 192 + 24; // w-48 (192px) + gap-6 (24px)
  const singleSetWidth = validItems.length * itemWidth;
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted By Over 20+ Brands
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite scroll container */}
        <div 
          className="flex gap-6 will-change-transform"
          style={{
            animation: `infiniteScroll ${Math.max(30, validItems.length * 3)}s linear infinite`,
            width: `${duplicatedItems.length * itemWidth}px`
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-48 h-32 relative group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white p-6 flex items-center justify-center border border-gray-100">
                <img
                  src={item.image}
                  alt={item.alt || `${item.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale brightness-75 contrast-105 hover:grayscale-0 hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                  draggable={false}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id, item.image)}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${singleSetWidth}px);
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteScrollPortfolio;