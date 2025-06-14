
const testimonials = [
  {
    name: "Isabella Chen, CEO @ Apex Commerce",
    text:
      "DeepDiveProfits delivered a 320% conversion lift. The process was smooth, transparent, and the team exceeded all expectations. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Samuel Patel, Head of Growth @ Zenith SaaS",
    text:
      "Their attention to UX, delightful animations, and deep technical skills set them apart. Our SaaS signups soared within weeks.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Lea Müller, Marketing @ BrandLift",
    text:
      "The team turned our ideas into a breathtaking site. Our brand now looks as elite as it feels—clients notice!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="clients" className="py-16 bg-gradient-to-br from-blue-100 to-white/90">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-dp-blue-dark mb-4 animate-fade-in">
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-10">
        {testimonials.map((t, i) => (
          <div
            className="flex-1 max-w-md mx-auto bg-white/80 backdrop-blur shadow-glass rounded-2xl p-8 transition-transform hover:scale-105 border border-dp-blue/10"
            key={t.name}
          >
            <div className="flex items-center mb-4 gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-blue-200 shadow"
              />
              <div>
                <div className="flex gap-1 pb-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="font-semibold text-dp-blue-dark">{t.name}</div>
              </div>
            </div>
            <p className="text-gray-700 italic font-medium">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
