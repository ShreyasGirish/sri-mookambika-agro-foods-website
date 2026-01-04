
import React from 'react';
import { ShieldCheck, Search, Activity, RotateCcw, Microscope, ClipboardList, FlaskConical, CheckCircle } from 'lucide-react';

const Quality = () => {
  const certifications = [
    "FSSC 22000 Version 6",
    "FSSAI Licensed",
    "USFDA Compliant",
    "STAR-K Kosher",
    "APEDA RCMC",
    "IEC Export Certified"
  ];

  const qualitySystems = [
    { 
      title: "Manual Quality Sorting (100%)", 
      desc: "Every vegetable is hand-inspected for size, color, and defect-free integrity.", 
      icon: <Search size={20} /> 
    },
    { 
      title: "HACCP & PRPs", 
      desc: "Rigorous Hazard Analysis Critical Control Point implementation across all production lines.", 
      icon: <ShieldCheck size={20} /> 
    },
    { 
      title: "pH Monitoring & Calibration", 
      desc: "Continuous automated monitoring of pH levels (<3.3) for absolute acidified stability.", 
      icon: <Activity size={20} /> 
    },
    { 
      title: "Traceability & Pre-Inspection", 
      desc: "End-to-end digital tracking from farm origin to container seal, verified before loading.", 
      icon: <RotateCcw size={20} /> 
    },
    { 
      title: "Water Filtration & Hygiene", 
      desc: "Multi-stage filtration and rigid personnel hygiene protocols ensuring 0% contamination.", 
      icon: <ClipboardList size={20} /> 
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">Compliance Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Quality Control & <br /><span className="text-emerald-500">Global Compliance</span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
            Our facility operates under the highest international food safety benchmarks, ensuring every industrial batch meets stringent global regulatory demands.
          </p>
        </div>

        {/* Subsection 1: Certifications */}
        <div className="mb-20">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Accreditations & Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex items-center space-x-4">
                <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                <span className="text-sm font-bold tracking-wide">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Quality Systems */}
        <div className="mb-20">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Integrated Quality Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySystems.map((system, i) => (
              <div key={i} className="p-8 bg-slate-800/30 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all group">
                <div className="w-10 h-10 bg-emerald-600/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {system.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{system.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 3: Laboratory Capability */}
        <div className="bg-emerald-950 rounded-[3rem] p-10 md:p-16 border border-emerald-900/50 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start">
                <div className="bg-emerald-600/20 p-3 rounded-2xl">
                  <FlaskConical className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white">Laboratory Capability</h3>
              </div>
              <p className="text-emerald-100/70 text-base leading-relaxed font-light">
                Our in-house laboratory is equipped for real-time microbial and pesticide residue monitoring. Continuous compliance verification ensures that all shipments strictly adhere to USFDA and European Union food safety protocols before dispatch.
              </p>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-xl px-12 py-10 rounded-3xl border border-emerald-500/20 text-center min-w-[200px]">
              <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Verification Score</p>
              <p className="text-6xl font-bold text-white tracking-tighter">A+</p>
              <div className="flex items-center justify-center space-x-2 mt-4 text-[10px] font-bold text-emerald-300/60 uppercase">
                <ShieldCheck size={14} />
                <span>Certified Excellence</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
