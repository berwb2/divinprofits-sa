import { logoItems } from "../data/logos";
import { useState } from "react";

const InfiniteScrollPortfolio = () => {
  // Track which images have failed to load
  const [failedImages, setFailedImages] = useState(new Set());
  
  // Filter out failed images and create multiple copies for seamless infinite scroll
  const validLogoItems = logoItems.filter(item => !failedImages.has(item.id));
  
  // Create enough duplicates to ensure seamless scrolling
  // We need at least 3 sets to prevent any gaps during the animation cycle
  const triplicatedItems = [
    ...validLogoItems,
    ...validLogoItems,
    ...validLogoItems
  ];
  
  // Calculate total width and animation duration
  const itemWidth = 192 + 24; // w-48 (192px) + gap-6 (24px)
  const totalWidth = validLogoItems.length * itemWidth;
  const animationDuration = Math.max(20, validLogoItems.length * 2); // Minimum 20s, 2s per logo

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
          className="flex gap-6 infinite-scroll-container"
          style={{
            width: `${totalWidth * 3}px`
          }}
        >
          {triplicatedItems.map((item, index) => (
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
        
        {/* Dynamic CSS animation using CSS variables */}
        <style>
          {`
            .infinite-scroll-container {
              animation: infiniteScrollCustom ${animationDuration}s linear infinite;
            }
            @keyframes infiniteScrollCustom {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default InfiniteScrollPortfolio;
