import React from 'react';
import aboutFacilityImage from "../assets/images/about-facility.jpg";
import { Target, Zap, Heart, MapPin, Navigation, ArrowRight, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Customer Centric",
      description: "Custom-graded solutions meeting safe, legal, and premium global food standards.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Agile Production",
      description: "Investing in sustainable infrastructure for quality, volume, and cost efficiency.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Social Impact",
      description: "Zero child labor, community health checks, and a carbon-conscious footprint.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* IMAGE + STRATEGIC ADVANTAGE CARD */}
          <div className="lg:w-1/2 relative">
            <div
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,78,59,0.15)] border-4 border-slate-50"
              style={{
                backgroundImage: `url(${aboutFacilityImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "520px"
              }}
            >
              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/70 via-emerald-950/30 to-transparent"></div>

              {/* STATUS BADGE */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-emerald-600/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-emerald-400/30">
                  <div className="relative">
                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-lime-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    Processing Hub Active
                  </span>
                </div>
              </div>

              {/* FLOATING INFO CARD */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 leading-tight">
                        Strategic Advantage
                      </h4>
                      <p className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-[0.2em] mt-1">
                        Ranebennur, Karnataka
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl text-slate-400">
                    <Navigation size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <div className="flex items-center space-x-2 text-emerald-700 mb-1">
                      <Clock size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Freshness</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">&lt; 2 Hours</p>
                    <p className="text-[9px] text-slate-500">Farm-to-Plant Time</p>
                  </div>

                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <div className="flex items-center space-x-2 text-emerald-700 mb-1">
                      <Shield size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Integrity</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">100% Traceable</p>
                    <p className="text-[9px] text-slate-500">Field Origin Mapping</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  Our facility is situated at the absolute epicenter of the gherkin growing belt,
                  enabling uninterrupted arrival of fresh produce from sunrise to sunset.
                </p>
              </div>
            </div>

            {/* AMBIENT BLOBS */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-100 rounded-full blur-[100px] opacity-40 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-lime-100 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
          </div>

          {/* TEXT CONTENT */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-10 border border-emerald-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Quality Driven • Globally Trusted</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-[1.1]">
              The Backbone of <span className="text-emerald-600">Premium Exports.</span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed font-light">
              Sri Mookambika Agro Foods LLP (SMAF) bridges the gap between smallholder Indian farmers
              and global food giants by transforming fresh agricultural produce into industrial-grade bulk supplies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20"
                >
                  <div className="text-emerald-600 mb-6 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-6">
                    {v.icon}
                  </div>
                  <h5 className="font-bold text-slate-900 mb-3 group-hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                    {v.title}
                  </h5>
                  <p className="text-slate-500 text-xs group-hover:text-emerald-50 transition-colors leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-emerald-950 rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white font-bold text-2xl font-serif mb-2">
                    Meet our Promoters
                  </h4>
                  <p className="text-emerald-400 text-sm font-medium italic opacity-80">
                    Driving innovation with 20+ years of food processing lineage.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    {["GS", "PN"].map((i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-full border-4 border-emerald-900 bg-emerald-800 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <ArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
