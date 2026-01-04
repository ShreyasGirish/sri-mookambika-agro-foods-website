
import React from 'react';
import { Droplet, Box, Package, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  const mediaTypes = [
    { name: "Natural Vinegar (NV)", desc: "150/300 to 10/30 grades. Acidified to precise levels for global snacks." },
    { name: "Acetic Acid (AA)", desc: "Controlled fermentation and acidified media for long-term stability." },
    { name: "Salt Brine (BR)", desc: "Traditional fermentation process for authentic European style flavor." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">World-Class Gherkins & Vegetables</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Supplying semi-finished bulk gherkins, jalapeños, and assorted vegetables tailored to global industrial recipes.
            </p>
          </div>
          <div className="bg-emerald-600 text-white p-8 rounded-[2rem] flex items-center space-x-6 shadow-xl shadow-emerald-900/10">
             <Layers size={40} className="text-emerald-300/50" />
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Processing Range</p>
                <p className="text-2xl font-bold">150/300 down to 5/8</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mediaTypes.map((m, i) => (
            <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
               <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Droplet />
               </div>
               <h4 className="text-2xl font-bold text-slate-900 mb-4">{m.name}</h4>
               <p className="text-slate-500 mb-8 text-sm leading-relaxed">{m.desc}</p>
               <div className="flex items-center text-emerald-600 font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                 Learn Technical Specs <ChevronRight size={14} className="ml-1" />
               </div>
            </div>
          ))}
        </div>

        {/* Detailed Packaging Visualization */}
        <div className="bg-slate-950 rounded-[3.5rem] p-10 md:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                Bulk Solutions
              </div>
              <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Institutional <br />Packaging Standards</h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-light">
                Our logistics systems are designed for high-volume seamless export. We utilize premium HDPE drums and secure sealing technology to maintain product integrity across oceans.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "240L / 260L HDPE Drums", icon: <Box size={20} /> },
                  { label: "14,400 KGS Net Weight per FCL", icon: <Package size={20} /> },
                  { label: "100% Pre-Inspection Compliance", icon: <ShieldCheck size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-5 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-200 uppercase tracking-widest text-[11px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Gherkins', img: 'https://images.unsplash.com/photo-1589135243690-362244243851?q=80&w=300' },
                    { name: 'Jalapeños', img: 'https://images.unsplash.com/photo-1565599837634-134bc3aadce8?q=80&w=300' },
                    { name: 'Baby Corn', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=300' },
                    { name: 'Chillies', img: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=300' }
                  ].map((v, i) => (
                    <div key={i} className="group relative rounded-[2rem] overflow-hidden aspect-square border border-white/10">
                       <img src={v.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt={v.name} />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-bold tracking-widest text-[10px] uppercase bg-slate-950/80 px-4 py-2 rounded-lg border border-white/10">{v.name}</span>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-600/10 rounded-full blur-[100px] -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
