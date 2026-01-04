import React from 'react';
import farmersImage from "../assets/images/farmers.jpg";
import { Sprout, ShieldCheck, Clock, Factory, CheckCircle, Users } from 'lucide-react';

const Sustainability = () => {
  const workflowStages = [
    { 
      id: "01", 
      title: "Community Selection", 
      desc: "Sourcing produce from 1,200+ verified smallholder families within a 100km radius.",
      icon: <Users size={24} /> 
    },
    { 
      id: "02", 
      title: "IPM-Controlled Cultivation", 
      desc: "Dedicated field officers providing technical mentorship and pest management guidance.",
      icon: <Sprout size={24} /> 
    },
    { 
      id: "03", 
      title: "Fresh Harvest & Arrival", 
      desc: "Logistics optimized to ensure raw material reaches the facility within 2 hours of harvest.",
      icon: <Clock size={24} /> 
    },
    { 
      id: "04", 
      title: "Controlled Processing", 
      desc: "Immediate semi-finished processing in Vinegar, Acetic Acid, or Brine media.",
      icon: <Factory size={24} /> 
    },
    { 
      id: "05", 
      title: "Quality Validation", 
      desc: "Multi-stage inspections and lab testing adhering to FSSC 22000 v6 standards.",
      icon: <ShieldCheck size={24} /> 
    },
    { 
      id: "06", 
      title: "Community Impact", 
      desc: "Ethical fair-wage distribution and health initiatives for 12,000+ rural laborers.",
      icon: <CheckCircle size={24} /> 
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Integrated Agricultural Model
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Sustainability Through <span className="text-emerald-500 italic">Operational Integrity.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl leading-relaxed">
            Our proprietary model ensures full traceability from the initial sowing to the final export, supporting local ecosystems while meeting global safety standards.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Workflow */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {workflowStages.map((stage) => (
                <div key={stage.id} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {stage.icon}
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-[10px] font-bold text-emerald-500/50 uppercase tracking-tighter">
                      {stage.id}
                    </span>
                    <h4 className="font-bold text-lg text-white">{stage.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Card */}
          <div className="lg:w-1/3">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-800 border border-slate-700">

              {/* Image */}
              <div className="relative">
                <img
                  src={farmersImage}
                  alt="SMAF Integrated Farming Support"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                      <p className="text-3xl font-bold text-white">1,200+</p>
                      <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                        Partner Farmers
                      </p>
                    </div>
                    <Users className="text-slate-600" size={32} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-white">12,000+</p>
                      <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                        Impacted Laborers
                      </p>
                    </div>
                    <CheckCircle className="text-slate-600" size={32} />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    “Every gherkin processed reflects a commitment to ethical sourcing and sustainable soil health practices.”
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;
