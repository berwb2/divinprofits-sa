
import React from "react";

const testimonials = [
  {
    name: "Laura Martinez",
    company: "Blue Oasis Pools",
    text: "Divin-Profits totally transformed our website. Our pool installation requests shot up by 250%! The site feels premium and every client mentions it.",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
    highlight: true,
  },
  {
    name: "Michael Rivers",
    company: "Prestige Pools & Spas",
    text: "Absolutely seamless process! Our bookings doubled, the animations and booking flows are just awesome.",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    highlight: false,
  },
  {
    name: "Tina Patel",
    company: "Sparkle Pool Cleaning",
    text: "Clients say they found us because the website stood out. Divin-Profits gets the pool business and made us look unique!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    highlight: true,
  },
  {
    name: "James Harper",
    company: "Sunset Backyard Living",
    text: "Super smooth experience. The dashboard, the forms—everything just works and looks beautiful. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5,
    highlight: false,
  },
  {
    name: "Emily Nguyen",
    company: "Palm Paradise Pools",
    text: "The new website tells our story and showcases pools perfectly. We went from local to leader in one summer.",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    highlight: true,
  },
];

const TestimonialsSection = () => (
  <section id="clients" className="py-24 bg-[#f7f7f7] flex justify-center">
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">
      <div className="rounded-3xl bg-white shadow-xl min-h-[420px] px-4 py-12 flex flex-col">
        <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-dp-blue-dark mb-2 animate-fade-in">
          Loved by our Pool & Home Service Clients
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
