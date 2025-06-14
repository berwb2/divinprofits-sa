
const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-[72vh] py-20 bg-dp-blue bg-dp-gradient"
  >
    <div className="absolute inset-0 bg-dp-glass-grad opacity-80 blur-xl z-0 pointer-events-none" />
    <div className="relative z-10 max-w-3xl text-center mx-auto p-8 rounded-3xl bg-white/30 backdrop-blur shadow-glass border border-white/10">
      <h1 className="font-display text-5xl md:text-6xl font-extrabold text-dp-blue-dark mb-4 drop-shadow-lg animate-fade-in">
        Award-Winning Web Experiences <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          for Ambitious Brands
        </span>
      </h1>
      <p className="mt-4 text-xl text-gray-800 font-medium leading-relaxed animate-fade-in">
        DeepDiveProfits transforms your vision into high-converting, agency-quality websites. We blend stunning design, technical excellence, and strategy—on every single project.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
        <a href="#portfolio" className="px-8 py-3 font-bold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-glass hover:scale-105 transition-transform text-lg">
          See Our Work
        </a>
        <a href="#contact" className="px-8 py-3 font-bold rounded-full border-2 border-dp-blue text-dp-blue-dark bg-white/60 backdrop-blur hover:bg-dp-blue-dark hover:text-white shadow hover:border-dp-accent focus:outline-none transition-all text-lg">
          Book a Free Consultation
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
