
import React from "react";
import { Play, CheckCircle } from "lucide-react";

const VideoShowcase = () => {
  const benefits = [
    "Generate more qualified leads automatically",
    "Convert visitors into paying customers 24/7", 
    "Establish your brand as the market leader",
    "Scale your business without hiring more staff"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dp-blue-dark via-dp-blue to-dp-blue-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Build Systems That{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Grow
                </span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Your website should work as hard as you do. Our proven systems turn your online presence into a lead-generating machine that operates 24/7.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">150%</div>
                <div className="text-white/80">Average lead increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">R50k+</div>
                <div className="text-white/80">Monthly revenue growth</div>
              </div>
            </div>
          </div>

          {/* Video Side */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Business growth visualization"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-8 h-8 text-dp-blue-dark ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-white/80 mt-4 text-sm">
                See how we transformed a local business into a lead-generating powerhouse
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full blur-xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
