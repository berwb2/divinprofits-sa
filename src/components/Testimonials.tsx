
const Testimonials = () => {
  const testimonials = [
    {
      company: "Dreamcatcher",
      logo: "DC",
      rating: 5,
      text: "We got 5 new qualified leads and saw a 34% increase in conversion. The team delivered exceptional results that exceeded our expectations.",
      color: "bg-orange-500"
    },
    {
      company: "Electro Ecom",
      logo: "EE",
      rating: 5,
      text: "Outstanding design and development work. Our e-commerce platform now converts 3x better than before. Highly professional team.",
      color: "bg-green-500"
    },
    {
      company: "Vast Resources",
      logo: "VR",
      rating: 5,
      text: "The website redesign transformed our business. We've seen a 250% increase in qualified leads and improved user engagement across the board.",
      color: "bg-blue-500"
    },
    {
      company: "Staff.net IT",
      logo: "SI",
      rating: 5,
      text: "Professional service from start to finish. The team understood our technical requirements and delivered a solution that perfectly fits our needs.",
      color: "bg-orange-500"
    },
    {
      company: "Atrous 3D",
      logo: "A3",
      rating: 5,
      text: "Incredible attention to detail and creative vision. Our 3D portfolio website showcases our work beautifully and has attracted high-value clients.",
      color: "bg-green-500"
    },
    {
      company: "GPM Community",
      logo: "GP",
      rating: 5,
      text: "The community platform they built has been instrumental in growing our user base. Clean design, excellent functionality, and ongoing support.",
      color: "bg-purple-500"
    },
    {
      company: "LuxBand Lodge",
      logo: "LL",
      rating: 5,
      text: "Our booking website is now our best sales tool. The user experience is seamless and we've seen a significant increase in direct bookings.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by our Clients
          </h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4`}>
                  {testimonial.logo}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.company}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
