
interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  text: string;
  color: 'orange' | 'green' | 'blue' | 'purple';
}

const TestimonialCard = ({ name, company, rating, text, color }: TestimonialCardProps) => {
  const colorClasses = {
    orange: 'border-l-orange-500 bg-orange-50',
    green: 'border-l-green-500 bg-green-50',
    blue: 'border-l-blue-500 bg-blue-50',
    purple: 'border-l-purple-500 bg-purple-50'
  };

  const logoColors = {
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className={`max-w-xs bg-white rounded-lg shadow-lg border-l-4 p-4 transform hover:-translate-y-1 transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 ${logoColors[color]} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
          {company.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{company}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-3 leading-relaxed">{text}</p>
      <p className="text-gray-600 text-xs font-medium">— {name}</p>
    </div>
  );
};

export default TestimonialCard;
