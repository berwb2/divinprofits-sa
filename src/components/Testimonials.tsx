
const testimonials = [
    {
      company: "StarkCode",
      logo: "SC",
      rating: 5,
      text: "We got 5 new qualified leads and saw a 34% increase in conversion. The team delivered exceptional results that exceeded our expectations.",
      highlight: true,
    },
    {
      company: "Electro Ecom",
      logo: "EE",
      rating: 5,
      text: "Outstanding design and development work. Our e-commerce platform now converts 3x better than before. Highly professional team.",
      highlight: false,
    },
    {
      company: "Vast Resources",
      logo: "VR",
      rating: 5,
      text: "The website redesign transformed our business. We've seen a 250% increase in qualified leads and improved user engagement across the board.",
      highlight: true,
    },
    {
      company: "Staff.net IT",
      logo: "SI",
      rating: 5,
      text: "Professional service from start to finish. The team understood our technical requirements and delivered a solution that perfectly fits our needs.",
      highlight: false,
    },
    {
      company: "Atrous 3D",
      logo: "A3",
      rating: 5,
      text: "Incredible attention to detail and creative vision. Our 3D portfolio website showcases our work beautifully and has attracted high-value clients.",
      highlight: false,
    },
    {
      company: "GPM Community",
      logo: "GP",
      rating: 5,
      text: "The community platform they built has been instrumental in growing our user base. Clean design, excellent functionality, and ongoing support.",
      highlight: true,
    },
  ];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by our Clients
          </h2>
          <div className="w-24 h-1 bg-dp-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.company} className={`bg-white rounded-lg p-8 border ${testimonial.highlight ? 'border-dashed border-dp-orange border-2' : 'border-gray-200'} shadow-sm hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-lg mr-4">
                  {testimonial.logo}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.company}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
