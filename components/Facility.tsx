import React from 'react';
import facilityImage from "../assets/images/facility.jpg";
import farmersImage from "../assets/images/farmers.jpg";
import { MapPin, Clock, ShieldCheck, RefreshCw, Zap, Package } from 'lucide-react';

const Facility = () => {
  const certifications = [
    "FSSC 22000 v6 Certified",
    "FSSAI Food License",
    "STAR-K Kosher Approved",
    "APEDA RCMC Registered",
    "USFDA Compliance Standard",
    "IEC Export-Ready"
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-600 mb-4">
            <MapPin size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">Processing Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Strategic Advantage – Ranebennur, Karnataka
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl">
            Situated at the absolute epicenter of India's gherkin growing belt, our facility provides a logistical and qualitative edge that global partners rely on.
          </p>
        </div>

        {/* Proof Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Clock size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Proximity Advantage</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Farm-to-Plant Time:
                <span className="font-bold ml-1 text-slate-900">&lt; 2 Hours</span>
              </li>
              <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5"></span>
                Supported by local agriculture belt positioning.
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Traceability & Integrity</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                100% traceable sourcing
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Field-origin mapping
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <RefreshCw size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Continuous Supply</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Uninterrupted arrival: Sunrise to Sunset
              </li>
              <li className="flex items-center text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                10-month supply stability
              </li>
            </ul>
          </div>
        </div>

        {/* Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-[3rem] overflow-hidden h-[400px] shadow-2xl group">
            <img
              src={facilityImage}
              alt="SMAF Processing Plant Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex flex-col justify-end p-10">
              <h5 className="text-white font-bold text-2xl mb-2">Advanced Industrial Plant</h5>
              <p className="text-emerald-200 text-sm font-light">
                Equipped for high-throughput 2.5 MT/hour capacity.
              </p>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden h-[400px] shadow-2xl group">
            <img
              src={farmersImage}
              alt="Nearby farms sourcing gherkins"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex flex-col justify-end p-10">
              <h5 className="text-white font-bold text-2xl mb-2">Integrated Farming Belt</h5>
              <p className="text-emerald-200 text-sm font-light">
                Sourcing directly from 1,200+ local smallholder farms.
              </p>
            </div>
          </div>
        </div>

        {/* Capacity & Compliance */}
        <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-serif mb-8 leading-tight">
                Operational Excellence
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Zap className="text-emerald-400 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-lg mb-1">2.5 MT/hour</p>
                    <p className="text-emerald-100/60 text-xs uppercase tracking-widest">
                      Processing Speed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Package className="text-emerald-400 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-lg mb-1">3,000 MT</p>
                    <p className="text-emerald-100/60 text-xs uppercase tracking-widest">
                      Annual Throughput
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 lg:pt-0 lg:border-l lg:border-emerald-900 lg:pl-16">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 mb-8">
                Compliance Portfolio
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <ShieldCheck className="text-emerald-500" size={16} />
                    <span className="text-sm font-medium text-emerald-100/80">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facility;
