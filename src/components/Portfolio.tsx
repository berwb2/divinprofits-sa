
import { portfolioItems } from "../data/portfolio";

const Portfolio = () => {
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Check Out Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses grow their online presence and achieve their goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Your All-in-One Design Partner */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Your All-in-One Design Partner</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Web Design", "UI/UX", "Branding", "E-commerce", "Mobile Apps", "SEO", "Marketing", "Analytics"].map((service) => (
              <span key={service} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-orange-500 text-sm font-medium">{item.category}</span>
                <h4 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
