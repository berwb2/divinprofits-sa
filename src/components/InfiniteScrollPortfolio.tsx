
import { useState, useEffect } from 'react';

const InfiniteScrollPortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Define the WebP files available in public/infinitescroll/
    const webpFiles = [
      {
        id: 1,
        filename: '3. Home Page.webp',
        title: 'Home Page Design',
        category: 'Web Design',
        description: 'Modern homepage design with conversion optimization'
      },
      {
        id: 2,
        filename: '4 - Home Page.webp',
        title: 'Landing Page',
        category: 'Web Development',
        description: 'High-converting landing page with modern aesthetics'
      },
      {
        id: 3,
        filename: '5 - Home Page (1).webp',
        title: 'Business Homepage',
        category: 'Web Design',
        description: 'Professional business homepage with clear CTAs'
      },
      {
        id: 4,
        filename: 'alpha-traders-academy-.jpeg',
        title: 'Alpha Traders Academy',
        category: 'Educational Platform',
        description: 'Trading education platform with course management'
      },
      {
        id: 5,
        filename: 'black-zofeur-.webp',
        title: 'Black Zofeur',
        category: 'Transportation',
        description: 'Premium ride-sharing service platform'
      },
      {
        id: 6,
        filename: 'llololol-.webp',
        title: 'Creative Portfolio',
        category: 'Portfolio',
        description: 'Creative agency portfolio showcase'
      },
      {
        id: 7,
        filename: 'portfolio-2.webp',
        title: 'Portfolio Design',
        category: 'Web Design',
        description: 'Modern portfolio website with interactive elements'
      },
      {
        id: 8,
        filename: 'reccesol-.webp',
        title: 'Reccesol',
        category: 'Business Solutions',
        description: 'B2B solutions platform with integrated tools'
      },
      {
        id: 9,
        filename: 'screencapture-armygymnastics-2024-09-23-14_58_45.webp',
        title: 'Army Gymnastics',
        category: 'Fitness',
        description: 'Fitness training platform with booking system'
      },
      {
        id: 10,
        filename: 'screencapture-bigappleholding-2024-09-18-15_27_45.webp',
        title: 'Big Apple Holding',
        category: 'Corporate',
        description: 'Corporate holding company website'
      },
      {
        id: 11,
        filename: 'screencapture-cycling-tom-tour-webflow-io-2024-08-18-15_45_07.webp',
        title: 'Cycling Tom Tours',
        category: 'Tourism',
        description: 'Bike tour booking platform with route planning'
      },
      {
        id: 12,
        filename: 'screencapture-epsy-03fbbe1ad1c0c93319cbc5a9ab51bb0a-webflow-io-2021-12-14-11_59_06.webp',
        title: 'Epsy Medical',
        category: 'Healthcare',
        description: 'Medical care platform for epilepsy patients'
      },
      {
        id: 13,
        filename: 'screencapture-evolutionmanagement-co-uk-2023-02-16-16_47_58.webp',
        title: 'Evolution Management',
        category: 'Business Services',
        description: 'Management consulting services platform'
      },
      {
        id: 14,
        filename: 'screencapture-holomusic-co-2024-09-22-09_43_48 (1).webp',
        title: 'Holo Music',
        category: 'Entertainment',
        description: 'Music streaming and discovery platform'
      },
      {
        id: 15,
        filename: 'screencapture-journey-fr-le-concept-2021-12-13-23_57_09.webp',
        title: 'Journey Concept',
        category: 'Travel',
        description: 'Travel planning and booking platform'
      },
      {
        id: 16,
        filename: 'screencapture-opracquetclub-2024-10-07-09_52_08.webp',
        title: 'OPR Racquet Club',
        category: 'Sports',
        description: 'Racquet club booking and membership platform'
      },
      {
        id: 17,
        filename: 'screencapture-pwrdetail-2024-08-18-15_26_05.webp',
        title: 'PWR Detail',
        category: 'Automotive',
        description: 'Car detailing service booking platform'
      },
      {
        id: 18,
        filename: 'screencapture-teamuscares-org-2025-05-21-14_45_57.webp',
        title: 'Team Us Cares',
        category: 'Non-Profit',
        description: 'Community care and support platform'
      },
      {
        id: 19,
        filename: 'screencapture-wrapambition-2024-09-25-19_22_05.webp',
        title: 'Wrap Ambition',
        category: 'Automotive',
        description: 'Vehicle wrapping service showcase'
      },
      {
        id: 20,
        filename: 'shouter-landing-page-.webp',
        title: 'Shouter Landing',
        category: 'Marketing',
        description: 'Social media marketing platform'
      }
    ];

    // Transform into portfolio items with proper image paths
    const items = webpFiles.map(file => ({
      id: file.id,
      title: file.title,
      category: file.category,
      description: file.description,
      image: `/infinitescroll/${file.filename}`,
      url: '#' // Since these are screenshots, we'll use placeholder URLs
    }));

    setPortfolioItems(items);
  }, []);

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
              <div className="block w-full h-full">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <picture>
                    <source 
                      srcSet={item.image} 
                      type="image/webp" 
                    />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                      loading="lazy"
                    />
                  </picture>
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{item.category}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
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

export default InfiniteScrollPortfolio;
