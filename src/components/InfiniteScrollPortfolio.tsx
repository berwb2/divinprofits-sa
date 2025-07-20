import { logoItems } from "../data/logos";
import { useState } from "react";

const InfiniteScrollPortfolio = () => {
  // Track which images have failed to load
  const [failedImages, setFailedImages] = useState(new Set());
  
  // Calculate animation duration based on number of logos
  // Each logo should be visible for ~3 seconds, with smooth scrolling
  const logoCount = logoItems.length;
  const animationDuration = logoCount * 3; // 3 seconds per logo
  
  // Debug logging
  console.log('Total logos:', logoCount);
  console.log('Animation duration:', animationDuration + 's');
  console.log('Logo paths:', logoItems.map(item => item.image));
  
  // Filter out failed images and duplicate the remaining items
  const validLogoItems = logoItems.filter(item => !failedImages.has(item.id));
  const duplicatedItems = [...validLogoItems, ...validLogoItems];

  const handleImageError = (item) => {
    console.error(`Failed to load image: ${item.image}`);
    console.log(`Image path attempted: ${item.image}`);
    
    // Add to failed images set to hide this image
    setFailedImages(prev => new Set([...prev, item.id]));
  };

  const handleImageLoad = (item) => {
    console.log(`Successfully loaded: ${item.image}`);
  };
  
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted By Over 20+ Brands
        </h2>
      </div>
      
      <div className="relative">
        {/* Main scrolling container */}
        <div 
          className="flex animate-infinite-scroll gap-6"
          style={{
            animationDuration: `${animationDuration}s`
          }}
        >
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
      </div>
    </section>
  );
};

export default InfiniteScrollPortfolio;
