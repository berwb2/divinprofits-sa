
import React from "react";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "1. Discovery & Strategy",
    description: "We dive deep into your South African market, audience, and goals to build a winning strategy from the ground up."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "2. Design & Development",
    description: "Our team designs and engineers a pixel-perfect, high-performance website that captivates and converts in the SA market."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "3. Launch & Optimization",
    description: "We deploy your site and provide ongoing support to ensure it continues to drive results and growth."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dp-blue-dark mb-4 tracking-tighter">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">From concept to launch, we follow a proven path to digital excellence.</p>
        </div>
        <div className="relative">
          {/* Removed the connecting line that was cutting through elements */}
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`mb-8 flex items-center justify-center w-20 h-20 rounded-2xl text-dp-blue bg-white shadow-lg border border-black/5 rotate-45 transition-all duration-300 hover:scale-110 hover:rotate-[60deg]`}>
                  <div className="-rotate-45">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dp-blue-dark mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20">
          <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-full bg-dp-blue-dark text-white shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-dp-blue/30 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-dp-blue/50">
            Let's Build Together
          </a>
        </div>
      </div>
    </section>
  );
};
export default Process;
