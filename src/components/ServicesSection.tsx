
import { Zap, TrendingUp, Code } from "lucide-react";

const services = [
  {
    icon: <Zap size={28} />,
    title: "Conversion-Driven Design",
    desc: "Websites engineered for results—every visual optimized for action.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Growth-Ready Development",
    desc: "Technical best practices, scalable infrastructure, and lightning speed.",
  },
  {
    icon: <Code size={28} />,
    title: "Custom Integrations",
    desc: "From CMS to analytics, we build for your stack and workflows.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-white">
    <div className="container max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-dp-blue-dark mb-4 animate-fade-in">
        Our Specialties
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 my-10">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="flex-1 bg-white/80 backdrop-blur-2xl shadow-glass rounded-2xl p-8 transition-transform hover:scale-105 group border border-dp-blue/10 hover:border-dp-blue"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400 rounded-xl flex items-center justify-center shadow mb-4 group-hover:rotate-[-2deg] transition-transform">
              {service.icon}
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-dp-blue-dark">{service.title}</h3>
            <p className="text-gray-700 font-medium">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-glass hover:scale-105 transition-transform text-lg"
        >
          Let's Build Something Great
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
