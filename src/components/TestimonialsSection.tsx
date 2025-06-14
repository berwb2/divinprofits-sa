
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
  <section id="clients" className="py-24 bg-[#f7f7f7] flex justify-center">
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">
      <div className="rounded-3xl bg-white shadow-xl min-h-[420px] px-4 py-12 flex flex-col">
        <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-dp-blue-dark mb-2 animate-fade-in">
          Loved by our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 items-stretch">
          {testimonials.map((t, i) => (
            <div
              className={`flex flex-col max-w-md mx-auto rounded-2xl bg-white/95 shadow-lg p-8 relative
                ${t.highlight ? "border-2 border-orange-400 border-dashed animate-color-pop" : "border border-gray-200"}
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group
                animate-scale-in`}
              key={t.name}
              style={{
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
              {t.highlight && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold animate-fade-in shadow">Top Client</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
