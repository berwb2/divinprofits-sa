
import React from "react";

const testimonials = [
  {
    name: "Isabella Chen",
    company: "Apex Commerce",
    text: "DeepDiveProfits delivered a 320% conversion lift. The process was smooth, transparent, and the team exceeded all expectations. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    highlight: true,
  },
  {
    name: "Samuel Patel",
    company: "Zenith SaaS",
    text: "Their attention to UX, delightful animations, and deep technical skills set them apart. Our SaaS signups soared within weeks.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    highlight: false,
  },
  {
    name: "Lea Müller",
    company: "BrandLift",
    text: "The team turned our ideas into a breathtaking site. Our brand now looks as elite as it feels—clients notice!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    highlight: true,
  },
];

const TestimonialsSection = () => (
  <section id="clients" className="py-16 bg-white/70">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-dp-blue-dark mb-3 animate-fade-in">
        Loved by our Clients
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-10">
        {testimonials.map((t, i) => (
          <div
            className={`flex-1 max-w-md mx-auto rounded-2xl bg-white/90 backdrop-blur-xl shadow-glass p-8 
              border-l-4 ${t.highlight ? "border-dp-blue border-dashed" : "border-dp-blue/20"}
              transition-transform hover:scale-105 animate-scale-in
            `}
            key={t.name}
            style={{
              borderWidth: t.highlight ? 2 : 1,
              borderStyle: t.highlight ? "dashed" : "solid",
              animationDelay: `${i * 110}ms`,
              animationDuration: "700ms",
            }}
          >
            <div className="flex items-center mb-4 gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-dp-blue/30 shadow pulse"
              />
              <div>
                <div className="flex gap-1 pb-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="font-semibold text-dp-blue-dark">{t.name} <span className="text-xs text-gray-500">({t.company})</span></div>
              </div>
            </div>
            <p className="text-gray-700 italic font-medium">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

