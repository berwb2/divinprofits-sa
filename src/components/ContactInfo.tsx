
import { Mail, Phone, Calendar, MapPin, Star, Users, Clock, Shield } from "lucide-react";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email Response",
      value: "Within 4 hours",
      detail: "ethan@divin-profits.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Direct Line",
      value: "+1 (555) 123-4567",
      detail: "Available 9 AM - 6 PM EST"
    },
    {
      icon: <Calendar size={24} />,
      label: "Free Consultation",
      value: "30 minutes",
      detail: "Strategy session included"
    },
    {
      icon: <MapPin size={24} />,
      label: "Time Zone",
      value: "EST Business Hours",
      detail: "Quick response guaranteed"
    }
  ];

  const trustBadges = [
    {
      icon: <Users size={20} />,
      count: "100+",
      label: "Happy Clients"
    },
    {
      icon: <Star size={20} />,
      rating: "5.0",
      label: "Client Rating"
    },
    {
      icon: <Clock size={20} />,
      guarantee: "24hr",
      label: "Response Guarantee"
    }
  ];

  return (
    <div className="relative">
      {/* Main Contact Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl animate-fade-in">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Start Your Success Story
          </h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Join businesses that have transformed their online presence and saw real growth. 
            Your free consultation is just one step away.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-dp-accent to-dp-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white">
                {method.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/70 text-sm font-medium">{method.label}</span>
                </div>
                <p className="text-white font-semibold text-lg">{method.value}</p>
                <p className="text-white/60 text-sm">{method.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-dp-accent">
                {badge.icon}
              </div>
              <div className="text-white font-bold text-xl">
                {badge.count || badge.rating || badge.guarantee}
              </div>
              <div className="text-white/70 text-xs font-medium">
                {badge.label}
              </div>
            </div>
          ))}
        </div>

        {/* Security Assurance */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
          <Shield size={20} className="text-dp-accent" />
          <div className="text-sm text-white/80">
            <span className="font-semibold">100% Secure & Confidential</span>
            <br />
            Your information is safe and will never be shared.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
