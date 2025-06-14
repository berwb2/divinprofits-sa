
const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Market Research & Analysis",
      description: "We start by understanding your business, target audience, and competitive landscape to create a strategic foundation."
    },
    {
      number: "2",
      title: "Copy & Design",
      description: "Our team creates compelling copy and stunning visuals that resonate with your audience and drive conversions."
    },
    {
      number: "3",
      title: "Launch & Scale",
      description: "We deploy your website with ongoing optimization and support to ensure maximum performance and growth."
    }
  ];

  return (
    <section className="py-20 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dp-blue-dark mb-4">How Does it Work?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-dp-blue-light to-dp-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glass text-white border-4 border-white">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-dp-blue-light/20 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-dp-blue-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="bg-gradient-to-r from-dp-blue-light to-dp-blue px-8 py-3 rounded-full text-white font-medium text-lg shadow-glass hover:scale-105 transition-transform">
            Book a Call With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
export default Process;
