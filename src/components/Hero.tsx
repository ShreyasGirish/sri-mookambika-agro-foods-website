import heroImage from "../assets/images/hero.jpg";

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  // Use a relative string path instead of a module import to fix browser ESM resolution issues
  const heroImage = './assets/images/hero.jpg';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
      {/* Background with local asset support */}
      <div className="absolute inset-0 z-0">
       <img
  src={heroImage}
  alt="Indian gherkin farms – Sri Mookambika Agro Foods"
  style={{
    width: "100%",
    aspectRatio: "16 / 8",
    objectFit: "cover",
    borderRadius: "18px",
    marginBottom: "32px"
  }}
/>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Company Title */}
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Sri Mookambika Agro Foods LLP
          </span>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8 tracking-tighter">
            The Crunch of <br />
            <span className="text-emerald-500">Global Confidence.</span>
          </h1>
          
          {/* Supporting Sentence */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            Empowering 1,200+ smallholder farmers to deliver premium-grade gherkins and jalapeños to the world's leading food brands with absolute traceability.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start">
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl shadow-emerald-900/40 group active:scale-95"
            >
              Explore Our Product Range
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - kept for UX but visually minimal */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <ChevronDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default Hero;
