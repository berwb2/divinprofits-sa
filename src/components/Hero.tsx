
import React from "react";

const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-[92vh] md:min-h-[720px] py-24 overflow-hidden bg-gradient-to-br from-dp-blue-light/35 via-white to-dp-blue/90"
  >
    {/* Floating accent blobs */}
    <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-dp-blue-light/60 via-blue-200/40 to-white/0 blur-3xl opacity-60 animate-fade-in" />
    <div className="absolute -bottom-36 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-dp-blue/70 via-dp-blue-dark/90 to-blue-900/0 blur-2xl opacity-50 animate-fade-in" />
    {/* Glassy central card */}
    <div className="relative z-10 max-w-3xl w-full text-center mx-auto px-8 py-16 sm:px-12 rounded-3xl bg-white/70 ring-2 ring-white/40 backdrop-blur-2xl shadow-glass-lg border border-dp-blue/10 animate-scale-in">
      <h1 className="font-display text-5xl md:text-6xl font-extrabold text-dp-blue-dark mb-4 drop-shadow-lg tracking-tight leading-tight">
        Transforming Your Vision <br />
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-dp-blue-light via-dp-accent to-dp-blue-dark animate-fade-in">
          Into Digital Brilliance
        </span>
      </h1>
      <p className="mt-5 text-2xl text-gray-800/90 font-normal leading-relaxed animate-fade-in">
        We craft conversion-first, glassy web experiences <span className="font-display font-bold tracking-tight text-dp-blue">for brands who demand results</span>. Stand out &amp; win more clients with premium design, strategy, and technology—together.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center items-center animate-scale-in">
        <a href="#portfolio" className="px-9 py-4 font-bold text-lg rounded-full bg-gradient-to-r from-dp-blue-light via-dp-accent to-dp-blue text-white shadow-lg hover:scale-105 transition-transform duration-200 hover:ring-2 hover:ring-dp-accent/80 focus:outline-none focus:ring-2 focus:ring-dp-blue">
          See Our Work
        </a>
        <a href="#contact" className="px-9 py-4 font-bold text-lg rounded-full border-2 border-dp-blue text-dp-blue-dark bg-white/80 backdrop-blur hover:bg-dp-blue-dark hover:text-white shadow hover:border-dp-blue-light focus:outline-none transition-all">
          Book a Free Consultation
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

