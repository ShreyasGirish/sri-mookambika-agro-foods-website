
import React from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Briefcase, ShoppingBag, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Contact Information */}
            <div className="lg:w-5/12 p-12 md:p-16 bg-emerald-950 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-serif mb-12 leading-tight">Connect with Sri Mookambika & Prakritva.</h2>
                
                <div className="space-y-12">
                  {/* Subsection 1: Corporate & B2B Sales */}
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <Briefcase className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">Corporate & B2B Sales</p>
                      <p className="text-lg font-bold tracking-tight mb-1">+91 87626 28968</p>
                      <p className="text-sm text-emerald-100/60 mb-2">sales.smafoodsindia@gmail.com</p>
                      <p className="text-[10px] text-emerald-100/40 leading-relaxed uppercase tracking-tighter italic">
                        Export • Private Label • OEM • Bulk Supply
                      </p>
                    </div>
                  </div>

                  {/* Subsection 2: Prakritva Retail & Distribution */}
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <ShoppingBag className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">Prakritva Retail & Distribution</p>
                      <p className="text-lg font-bold tracking-tight mb-1">prakritvafoodsindia@gmail.com</p>
                      <p className="text-[10px] text-emerald-100/40 leading-relaxed uppercase tracking-tighter italic">
                        Domestic Retail • Exhibitions • Distributors
                      </p>
                    </div>
                  </div>

                  {/* Manufacturing Unit Details */}
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 shrink-0">
                      <MapPin className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-2">Manufacturing Unit</p>
                      <p className="text-xs leading-relaxed text-emerald-100/70 font-light">
                        RS 64/1 & 64/2A, Hunasekatte Road,<br />
                        Kamadod Village, Ranebennur Taluk,<br />
                        Haveri Dist, Karnataka - 581145, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Footer */}
              <div className="mt-16 pt-8 border-t border-emerald-900 flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-emerald-900/30 px-5 py-2.5 rounded-xl border border-emerald-800">
                   <ShieldCheck className="text-emerald-500" size={16} />
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em]">FSSAI: 11224999000900</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-500/50">
                  <Globe size={16} />
                  <span className="text-[10px] font-bold uppercase">Global Origin</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:w-7/12 p-12 md:p-16">
              <div className="max-w-xl mx-auto">
                <h3 className="text-3xl font-serif text-slate-900 mb-2">Submit Inquiry</h3>
                <p className="text-slate-500 mb-12 font-light text-sm">Please select the appropriate category to ensure your request reaches the correct department.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none transition-all text-sm" 
                        placeholder="e.g. John Doe" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none transition-all text-sm" 
                        placeholder="company@email.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                    <select 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select category...</option>
                      <option value="export">Export / Bulk Supply</option>
                      <option value="oem">Private Label / OEM</option>
                      <option value="retail">Retail / Distribution</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={5} 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none transition-all text-sm resize-none" 
                      placeholder="Please specify volumes or target markets if applicable..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10 group active:scale-[0.98]"
                  >
                    Submit Inquiry
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </button>
                  
                  <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest pt-4">
                    Response estimated within 24-48 business hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
