
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Download, ArrowUpRight, ShieldCheck, Globe, MapPin, Activity, Handshake } from 'lucide-react';

const Investors: React.FC = () => {
  const data = [
    { name: '2023', val: 2.10 },
    { name: '2024', val: 2.30 },
    { name: '2025', val: 2.60 },
    { name: '2026', val: 2.85 },
    { name: '2027', val: 3.15 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4 block">Growth Strategy</span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Institutional Growth & <br /><span className="text-emerald-600">Global Opportunity</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Sri Mookambika Agro Foods LLP (SMAF) operates at the nexus of high-yield agricultural belts and global supply chains. With significant market demand from the USA, European Union, and Russia, we leverage our certified infrastructure to provide year-round supply stability and scalable production capacity for international food processing leaders.
          </p>
        </div>

        {/* Subsection 1: Why SMAF Scales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Strategic Location",
              desc: "Proximity to Ranebennur, the primary gherkin cultivation hub of India, ensuring raw material security.",
              icon: <MapPin size={24} />
            },
            {
              title: "Certified Infrastructure",
              desc: "FSSC 22000 and USFDA-compliant facility designed for high-volume, standard-grade industrial output.",
              icon: <ShieldCheck size={24} />
            },
            {
              title: "10-Month Stability",
              desc: "Extended growing cycles and climate-resilient farming models provide consistent year-round supply.",
              icon: <Activity size={24} />
            }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:border-emerald-200 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Subsection 2: Market Outlook */}
          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-10 md:p-12 rounded-[4rem] border border-slate-200 flex flex-col justify-center relative shadow-inner">
               <div className="mb-10">
                  <h4 className="text-2xl font-serif text-slate-900 mb-2">Market Volume Forecast</h4>
                  <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Global Gherkin Growth (Million Tons)</p>
               </div>
               
               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} dy={15} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                      <Tooltip 
                        cursor={{fill: '#f1f5f9'}}
                        contentStyle={{backgroundColor: '#064e3b', borderRadius: '16px', border: 'none', color: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'}}
                        itemStyle={{color: '#34d399', fontWeight: 'bold'}}
                      />
                      <Bar dataKey="val" radius={[12, 12, 0, 0]} barSize={40}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 2 ? '#059669' : '#d1fae5'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
               </div>
               
               <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Projected 10.4% YoY growth is driven by expanding food service markets and rising consumption of fermented functional foods across the Global North.
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Subsection 3: Partnership Models */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Integrated Partnership Models</h3>
              <div className="space-y-4 mb-12">
                {[
                  { title: "Private Label", desc: "End-to-end proprietary recipe development and custom retail-ready packaging." },
                  { title: "OEM / Contract Manufacturing", desc: "Strategic production hub for multi-national food labels requiring high-volume output." },
                  { title: "Institutional Supply Partnerships", desc: "Reliable, direct-from-source bulk supply for catering and hospitality networks." }
                ].map((model, i) => (
                  <div key={i} className="flex items-center p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mr-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Handshake size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{model.title}</h4>
                      <p className="text-slate-500 text-xs font-light">{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-slate-900 text-white p-6 rounded-3xl flex items-center justify-between group hover:bg-slate-800 transition-all">
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-emerald-500 mb-1">Scale Insights</p>
                  <p className="font-bold text-sm">Download Investor Kit</p>
                </div>
                <Download size={20} className="text-slate-500 group-hover:text-emerald-500 transition-colors" />
              </button>
              <button className="bg-emerald-600 text-white p-6 rounded-3xl flex items-center justify-between group hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/10">
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-emerald-100 mb-1">Direct Inquiry</p>
                  <p className="font-bold text-sm">Request Briefing</p>
                </div>
                <ArrowUpRight size={20} className="text-emerald-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
