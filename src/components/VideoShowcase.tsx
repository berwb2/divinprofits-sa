
import { Youtube } from "lucide-react";

const VIDEO_ID = "C6KqPzHf2qQ"; // Replace with your agency video or testimonial

const VideoShowcase = () => (
  <section className="container py-18 md:py-24 flex flex-col items-center" id="video">
    <h2 className="font-display text-3xl md:text-4xl text-dp-blue-dark font-bold mb-3 text-center animate-fade-in">
      See Us In Action
    </h2>
    <p className="text-lg text-gray-700 mb-8 text-center animate-fade-in">
      Watch how we craft results-driven digital experiences for our clients.
    </p>
    <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden mb-12 shadow-glass bg-white/60 backdrop-blur-xl border border-white/20 transition-all group animate-scale-in">
      <div className="relative pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&modestbranding=1&color=white&rel=0&showinfo=0`}
          title="DeepDiveProfits Agency Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute top-3 left-3 bg-white/80 flex items-center gap-2 px-3 py-1 rounded-full shadow backdrop-blur text-dp-blue-dark text-sm font-medium animate-fade-in">
          <Youtube size={18} className="inline" />
          Portfolio Walkthrough
        </div>
      </div>
    </div>
  </section>
);

export default VideoShowcase;
