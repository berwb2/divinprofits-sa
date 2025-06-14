
interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  text: string;
  color?: "blue";
}

const TestimonialCard = ({
  name,
  company,
  rating,
  text,
  color = "blue",
}: TestimonialCardProps) => {
  const colorClasses = {
    blue: "border-l-4 border-dp-blue bg-white/80 backdrop-blur-2xl",
  };

  const logoColors = {
    blue: "bg-dp-blue",
  };

  return (
    <div className={`max-w-xs rounded-xl shadow-glass p-4 ${colorClasses[color]} transition-transform hover:-translate-y-1`}>
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 ${logoColors[color]} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
          {company.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </div>
        <div>
          <h4 className="font-semibold text-dp-blue-dark text-sm">{company}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-3 leading-relaxed">{text}</p>
      <p className="text-gray-500 text-xs font-medium">— {name}</p>
    </div>
  );
};

export default TestimonialCard;
