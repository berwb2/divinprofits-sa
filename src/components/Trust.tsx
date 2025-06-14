
const Trust = () => {
  const features = [
    {
      title: "Content that Sells",
      description: "Compelling copy and design that converts visitors into customers with proven marketing strategies.",
      icon: "📝"
    },
    {
      title: "Designed for Conversions",
      description: "Every element optimized for maximum user engagement and conversion rates based on data-driven insights.",
      icon: "📊"
    },
    {
      title: "Captivating Branding",
      description: "Memorable brand identity that stands out in your market and builds lasting customer relationships.",
      icon: "💎"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Create Conversion-Focused Websites:
          </h2>
          <h3 className="text-2xl md:text-3xl text-orange-400 mb-6">
            Your 24/7 Sales Powerhouse
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your website into a revenue-generating machine that works around the clock to grow your business.
          </p>
        </div>

        {/* Video/Image Placeholder */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-gray-700 rounded-2xl overflow-hidden max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
              alt="Professional consultation"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <span className="text-white text-2xl ml-1">▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Your website isn't converting visitors into leads.</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't let another day go by losing potential customers. Our conversion-focused approach ensures every visitor has the best chance of becoming a paying customer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">We know it's hard to trust online, but we're here for you.</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            With over 500 successful projects and a 98% client satisfaction rate, we have the experience and dedication to deliver exceptional results for your business.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors font-medium text-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trust;
