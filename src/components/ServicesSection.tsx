
import { Globe, TrendingUp, Target, Users } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Custom Digital Assets That Sell",
    category: "Website Solutions",
    desc: "We don't just build websites; we build digital assets that sell. Your site should convert, not just look pretty. We design high-performing websites that turn traffic into leads, reflect your brand, and lead visitors through a seamless journey to maximize conversions.",
    subServices: ["Custom Web Design", "Strategy, Copywriting & SEO-Ready", "Built for Speed, Style & Scale"]
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Strategic Sales Funnels That Convert",
    category: "Funnel Systems",
    desc: "We turn visitors into clients with funnels that do the heavy lifting. From first impression to final call to action, our funnels guide visitors through a seamless journey. We craft each step to maximize conversions and close prospects faster online.",
    subServices: ["Sales Pages & Squeeze Pages", "Email Capture & Follow-Up Plans", "Conversion Optimization"]
  },
  {
    icon: <Target size={28} />,
    title: "Landing Pages That Convert",
    category: "Lead Generation",
    desc: "High-converting landing pages designed to capture qualified leads. Every element is strategically placed to guide visitors toward taking action, whether that's downloading a lead magnet or booking a consultation call.",
    subServices: ["Sales Pages & Squeeze Pages", "Email Capture & Follow-Up Plans", "A/B Testing & Optimization"]
  },
  {
    icon: <Users size={28} />,
    title: "Attract the Right Prospects Consistently",
    category: "Lead Generation Strategy",
    desc: "We help you attract the right people consistently. No more hoping for word of mouth or random organic traffic. We build lead-gen systems that put qualified prospects on repeat — with positioning, strategy, and follow-up plans.",
    subServices: ["Offer & CTA Strategy", "Lead Magnets & Opt-In Design", "Email Marketing & Follow-Up Campaigns"]
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-white">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-dp-blue-dark mb-6 animate-fade-in">
          We Build Systems That Grow Your Business
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Websites, Funnels, and lead-gen built to drive traffic, capture leads, and close more clients
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group bg-white/80 backdrop-blur-2xl shadow-glass rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] border border-dp-blue/10 hover:border-dp-blue/30 hover:shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-dp-blue-light to-dp-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-[-2deg] transition-transform text-white">
                {service.icon}
              </div>
              <div>
                <span className="text-dp-blue text-sm font-semibold uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="font-display text-xl font-bold text-dp-blue-dark mt-1">
                  {service.title}
                </h3>
              </div>
            </div>
            
            <p className="text-gray-700 font-medium mb-6 leading-relaxed">
              {service.desc}
            </p>
            
            <div className="space-y-2 mb-6">
              {service.subServices.map((subService, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-dp-blue rounded-full"></div>
                  <span className="text-gray-600 font-medium">{subService}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-dp-blue-light to-dp-blue text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
              Book a Call with Ethan
            </button>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-dp-blue-light to-dp-blue text-white px-10 py-5 rounded-full font-bold shadow-glass hover:scale-105 transition-all duration-300 text-lg hover:shadow-2xl"
        >
          <span>Ready to Grow Your Business?</span>
          <span className="text-2xl">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
