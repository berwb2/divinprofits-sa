
import TestimonialCard from "./TestimonialCard";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Web Design Agency <br />
            <span className="text-orange-500">driving Growth for</span> <br />
            Businesses just like you
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We create conversion-focused websites that turn visitors into customers. 
            From stunning designs to powerful functionality, we build digital experiences that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:-translate-y-1 font-medium text-lg shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors font-medium text-lg">
              View Our Work
            </button>
          </div>
        </div>

        {/* Floating Testimonials */}
        <div className="relative mt-20">
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-8 z-10 hidden lg:block">
            <TestimonialCard
              name="Sarah Johnson"
              company="Staff.net IT"
              rating={5}
              text="Outstanding service! Our website conversion rate increased by 300% after working with Shibui Digital."
              color="orange"
            />
          </div>
          
          <div className="absolute top-20 right-1/4 transform translate-x-1/2 z-10 hidden lg:block">
            <TestimonialCard
              name="Michael Chen"
              company="Atrous 3D"
              rating={5}
              text="Professional team that delivered exactly what we needed. The design is beautiful and functional."
              color="green"
            />
          </div>

          <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-8 z-10 hidden lg:block">
            <TestimonialCard
              name="Emily Rodriguez"
              company="GPM Community"
              rating={5}
              text="Exceptional results! Our online presence has never been stronger. Highly recommend their services."
              color="blue"
            />
          </div>

          <div className="absolute bottom-20 right-1/3 transform translate-x-1/2 z-10 hidden lg:block">
            <TestimonialCard
              name="David Park"
              company="LuxBand Lodge"
              rating={5}
              text="The team understood our vision perfectly. The website exceeded our expectations in every way."
              color="purple"
            />
          </div>

          {/* Central Search Mockup */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">The Search is Over</h3>
                <p className="text-gray-600">You've found the Digital Agency with the best offer on the market</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Your Website</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500 space-y-2">
                  <p>✓ Mobile-responsive design</p>
                  <p>✓ SEO optimized</p>
                  <p>✓ Fast loading speed</p>
                  <p>✓ Conversion focused</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Your Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
