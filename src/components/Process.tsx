
import React from "react";

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
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Does it Work?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className={`mb-6 flex items-center justify-center w-16 h-16 rounded-full text-3xl font-bold text-white shadow-md bg-dp-orange`}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-dp-orange px-10 py-4 rounded-md text-white font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg">
            Book a Call With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
export default Process;
