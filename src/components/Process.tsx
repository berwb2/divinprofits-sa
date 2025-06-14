
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
    <section className="py-24 bg-[#f7f7f7] flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-14 bg-white rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-16 pt-9">
          <h2 className="text-3xl md:text-4xl font-bold text-dp-blue-dark mb-4 animate-fade-in">How Does it Work?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto pb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in bg-white rounded-2xl px-6 py-8 shadow-glass border border-gray-200 group relative transition-all hover:shadow-2xl"
              style={{
                animationDelay: `${index * 120}ms`,
                animationDuration: "650ms"
              }}
            >
              <div className={`mb-4 flex justify-center`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl font-extrabold shadow-glass
                  transition-transform duration-300 group-hover:scale-110
                  border-4 border-dashed
                  ${index === 0 ? "bg-gradient-to-br from-orange-100 to-orange-400 border-orange-400 text-orange-600" :
                    index === 1 ? "bg-gradient-to-br from-pink-50 to-pink-500 border-pink-400 text-pink-600" :
                    "bg-gradient-to-br from-blue-50 to-blue-600 border-blue-600 text-blue-800"}
                `}>
                  <span className="drop-shadow" style={{
                    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.10))"
                  }}>{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-dp-blue-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 pb-9 animate-scale-in">
          <a href="#contact" className="inline-block bg-gradient-to-r from-orange-400 to-dp-blue px-8 py-3 rounded-full text-white font-medium text-lg shadow-glass border-2 border-orange-300 hover:scale-105 transition-transform">
            Book a Call With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
export default Process;
