
import React, { useState, useEffect } from 'react';

const InfiniteScrollCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically discover images in the infinitescroll directory
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
    const imageFiles = [
      '3. Home Page.webp',
      '4 - Home Page.webp',
      '5 - Home Page (1).webp',
      'alpha-traders-academy-.jpeg',
      'black-zofeur-.webp',
      'llololol-.webp',
      'portfolio-2.webp',
      'reccesol-.webp',
      'screencapture-armygymnastics-2024-09-23-14_58_45.webp',
      'screencapture-bigappleholding-2024-09-18-15_27_45.webp',
      'screencapture-cycling-tom-tour-webflow-io-2024-08-18-15_45_07.webp',
      'screencapture-epsy-03fbbe1ad1c0c93319cbc5a9ab51bb0a-webflow-io-2021-12-14-11_59_06.webp',
      'screencapture-evolutionmanagement-co-uk-2023-02-16-16_47_58.webp',
      'screencapture-holomusic-co-2024-09-22-09_43_48 (1).webp',
      'screencapture-journey-fr-le-concept-2021-12-13-23_57_09.webp',
      'screencapture-opracquetclub-2024-10-07-09_52_08.webp',
      'screencapture-pwrdetail-2024-08-18-15_26_05.webp',
      'screencapture-teamuscares-org-2025-05-21-14_45_57.webp',
      'screencapture-wrapambition-2024-09-25-19_22_05.webp',
      'shouter-landing-page-.webp'
    ];

    const imagePaths = imageFiles.map(file => `/infinitescroll/${file}`);
    setImages(imagePaths);
  }, []);

  // Triple duplicate for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dp-blue-dark mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-dp-blue-light to-dp-blue">
            Our Work in Action
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A continuous showcase of websites we've built for South African businesses
        </p>
      </div>
      
      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="flex-shrink-0 mx-3 group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100">
                {/* Browser Chrome Bar */}
                <div className="flex items-center gap-1 px-4 py-2 bg-gray-100 border-b border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <div className="ml-3 text-xs text-gray-500 truncate">Website Preview</div>
                </div>
                
                {/* Website Screenshot */}
                <div className="relative">
                  <img
                    src={image}
                    alt="Website showcase"
                    className="w-80 h-48 md:w-96 md:h-60 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      console.log(`Failed to load image: ${image}`);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dp-blue-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollCarousel;
