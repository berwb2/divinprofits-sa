import { Globe, TrendingUp, Target, Settings } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Custom Digital Assets That Sell",
    category: "Website Solutions",
    desc: "We don't just build websites; we build digital assets that convert. Your site should perform, not just look good. We design high-impact websites that reflect your brand, turn traffic into leads, and guide visitors through a seamless journey to maximize conversions.",
    subServices: ["Custom Web Design", "Strategy, Copywriting & SEO-Ready", "Built for Speed, Style & Scale"]
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Strategic Sales Funnels That Convert",
    category: "Funnel Systems",
    desc: "We design funnels that guide visitors from first impression to final action. Each step is crafted to close prospects faster and automate your online sales process.",
    subServices: ["Sales Pages & Squeeze Pages", "Email Capture & Follow-Up Plans", "Conversion Optimization"]
  },
  {
    icon: <Target size={28} />,
    title: "Predictable Prospecting That Scales",
    category: "Lead Generation Systems",
    desc: "We build lead-gen systems that consistently attract qualified prospects. From landing pages to lead magnets to automated follow-up, every piece is engineered for performance and repeatability.",
    subServices: ["Offer & CTA Strategy", "Lead Magnets & Opt-In Design", "Email Marketing & Nurture Campaigns", "A/B Testing & Optimization"]
  },
  {
    icon: <Settings size={28} />,
    title: "Long-Term Growth with Continuous Improvement",
    category: "Optimization & Support",
    desc: "We don't vanish after launch. We monitor, test, and refine your digital systems to keep them sharp. More traffic. Better leads. Higher conversions, month after month.",
    subServices: ["Launch Performance Monitoring", "UX and Conversion Audits", "Monthly A/B Testing & Reporting", "Technical Support & Site Maintenance"]
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
            
            <div className="space-y-2">
              {service.subServices.map((subService, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-dp-blue rounded-full"></div>
                  <span className="text-gray-600 font-medium">{subService}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <a
          href="https://calendly.com/ethanwilliams083"
          target="_blank"
          rel="noopener noreferrer"
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
