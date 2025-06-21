
import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20"
  >
    {/* Background Shapes */}
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-dp-blue/20 via-white to-white blur-3xl opacity-80" />
    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-to-bl from-dp-blue-light/20 via-white to-white blur-3xl" />

    <div className="container relative z-10 text-center px-4">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-dp-blue-dark mb-6 drop-shadow-sm tracking-tighter leading-tight opacity-0 animate-fade-in">
      Your Website Should Be Working Harder
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-dp-blue via-dp-blue-light to-dp-accent">
          Than You Are.
        </span>
      </h1>
      <p className="max-w-3xl mx-auto mt-4 text-xl md:text-2xl text-gray-600 font-normal leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        At Divin Profits, we help brands scale through smart web design and lead generation. We combine strategy, design and automation to deliver websites that do the heavy lifting turning browsers into buyers
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-full bg-dp-blue-dark text-white shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-dp-blue/30 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-dp-blue/50"
        >
          <span> Book a call with Ethan</span>
          <MoveRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#portfolio"
          className="group inline-flex items-center px-8 py-4 font-bold text-lg rounded-full border-2 border-transparent text-dp-blue-dark bg-white/50 backdrop-blur-sm hover:border-dp-blue-dark/20 hover:bg-white transition-all duration-300"
        >
          <span>Explore Our Work</span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
