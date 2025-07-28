
import { logoItems } from "../data/logos";
import { useState, useEffect } from "react";

const InfiniteScrollPortfolio = () => {
  const [failedImages, setFailedImages] = useState(new Set());
  const [validItems, setValidItems] = useState(logoItems);
  
  // Filter out failed images
  useEffect(() => {
    const filtered = logoItems.filter(item => !failedImages.has(item.id));
    setValidItems(filtered);
  }, [failedImages]);

  // Create enough duplicates for seamless infinite scroll
  // We need at least 2 complete sets to ensure no gaps
  const duplicatedItems = [...validItems, ...validItems];
  
  const handleImageError = (item) => {
    console.error(`Failed to load image: ${item.image}`);
    setFailedImages(prev => new Set([...prev, item.id]));
  };

  const handleImageLoad = (item) => {
    console.log(`Successfully loaded: ${item.image}`);
  };

  // Calculate animation duration based on number of items
  const animationDuration = Math.max(30, validItems.length * 2);
  
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted By Over 20+ Brands
        </h2>
      </div>
      
      <div className="relative">
        {/* Infinite scroll container */}
        <div className="flex gap-6 animate-infinite-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-48 h-32 relative group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain filter grayscale brightness-75 contrast-105 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                  draggable={false}
                  onError={() => handleImageError(item)}
                  onLoad={() => handleImageLoad(item)}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* CSS for infinite scroll animation */}
        <style>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${(validItems.length * (192 + 24))}px);
            }
          }
          
          .animate-infinite-scroll {
            animation: infinite-scroll ${animationDuration}s linear infinite;
            width: ${duplicatedItems.length * (192 + 24)}px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default InfiniteScrollPortfolio;
