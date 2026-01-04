import React from "react";
import {
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Heart,
  Droplets,
  Utensils,
  Star,
  Leaf,
} from "lucide-react";

import gherkinPickleImg from "../assets/images/gherkinpickle.jpg";
import babyPickleImg from "../assets/images/babypickle.jpg";
import kokumBottleImg from "../assets/images/kokumjuice.jpg";
import vinegarBottleImg from "../assets/images/vinegar.jpg";

const PrakritvaBrand = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-[#FCF9F2] border-t border-amber-100">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Handcrafted Consumer Brand
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-4">
            Prakritva
          </h2>
          <p className="text-amber-700 italic text-xl mb-6">
            Taste the Natural Way
          </p>

          <p className="text-slate-600 text-lg font-light">
            Rooted in Indian tradition, Prakritva offers handcrafted pickles,
            natural beverages, and wellness foods made without artificial
            preservatives or colors.
          </p>
        </div>

        {/* PICKLES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Utensils size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">
                Traditional Pickles
              </h3>
              <p className="text-amber-700/60 text-sm">
                Sun-cured in mustard oil & heritage spices
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Artisanal Gherkin Pickle",
                img: gherkinPickleImg,
                desc: "Bold, tangy gherkins made using mustard oil and traditional Indian spices.",
              },
              {
                name: "Crunchy Babycorn Pickle",
                img: babyPickleImg,
                desc: "Hand-cut babycorn marinated for the perfect crunch and flavor.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[3rem] p-8 flex flex-col lg:flex-row gap-8 border border-amber-50 shadow-sm hover:shadow-xl transition"
              >
                <div className="lg:w-2/5 aspect-square rounded-2xl bg-white overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:w-3/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-serif text-slate-900 mb-3">
                      {p.name}
                    </h4>
                    <p className="text-slate-500 font-light">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400">
                      FSSAI 11224999000900
                    </span>
                    <Heart className="text-amber-300" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BEVERAGES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Droplets size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">
                Natural Beverages
              </h3>
              <p className="text-amber-700/60 text-sm">
                Traditional fruit-based wellness drinks
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-amber-800 text-white rounded-[3rem] p-12 shadow-2xl">
              <img
                src={kokumBottleImg}
                alt="Kokum Zest"
                className="h-64 mx-auto mb-8 object-contain"
              />
              <h4 className="text-3xl font-serif mb-4">Kokum Zest</h4>
              <p className="font-light mb-6">
                Cooling digestive beverage made from kokum concentrate.
              </p>
              <div className="flex gap-6 text-sm font-bold">
                <span>Electrolyte Rich</span>
                <span>9 Month Shelf Life</span>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 border border-amber-100 shadow-lg">
              <img
                src={vinegarBottleImg}
                alt="Natural Vinegar"
                className="h-64 mx-auto mb-8 object-contain"
              />
              <h4 className="text-3xl font-serif text-slate-900 mb-4">
                Natural Vinegar Elixir
              </h4>
              <p className="text-slate-600 font-light">
                Naturally fermented vinegar supporting digestion and metabolism.
              </p>
            </div>
          </div>
        </div>

        {/* WELLNESS POWDERS (TEXT ONLY – SAFE) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-slate-900">
                Wellness Powders
              </h3>
              <p className="text-amber-700/60 text-sm">
                Plant-based daily nutrition
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[3rem] p-12 border border-amber-50">
              <h4 className="text-2xl font-serif mb-2">ABC Powder</h4>
              <p className="text-slate-500 font-light">
                Apple–Beetroot–Carrot blend supporting energy, circulation,
                and skin health.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-12 border border-amber-50">
              <h4 className="text-2xl font-serif mb-2">Rosella Powder</h4>
              <p className="text-slate-500 font-light">
                Hibiscus-based antioxidant powder rich in Vitamin C.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-[4rem] p-16 text-center border border-amber-100">
          <h4 className="text-3xl font-serif mb-4">
            Interested in Retail Distribution?
          </h4>
          <p className="text-slate-500 mb-10">
            Join our network of health-focused distributors and retailers.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-amber-800 text-white px-10 py-5 rounded-2xl font-bold inline-flex items-center gap-3"
          >
            <ShoppingBag size={20} />
            Bulk Retail Inquiry
          </button>
        </div>

      </div>
    </section>
  );
};

export default PrakritvaBrand;
