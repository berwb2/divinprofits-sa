
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
    <section className="py-20 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dp-blue-dark mb-4 animate-fade-in">
            How Does it Work?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 110}ms`, animationDuration: "600ms" }}
            >
              <div className="relative mb-6 flex justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto shadow-glass text-white border-4 
                  ${index===0 ? "bg-gradient-to-br from-dp-blue-light to-orange-400 border-orange-300" :
                    index===1 ? "bg-gradient-to-br from-dp-blue-light to-pink-500 border-pink-400" :
                    "bg-gradient-to-br from-dp-blue-light to-dp-blue border-dp-blue"}
                  group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`drop-shadow`} style={{
                    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.16))"
                  }}>{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-dp-blue-light/20 -z-10 animate-fade-in"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-dp-blue-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-scale-in">
          <a href="#contact" className="bg-gradient-to-r from-dp-blue-light to-dp-blue px-8 py-3 rounded-full text-white font-medium text-lg shadow-glass hover:scale-105 transition-transform">
            Book a Call With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
export default Process;
