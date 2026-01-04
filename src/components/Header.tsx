
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'sustainability', 'brand', 'products', 'facility', 'quality', 'investors', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Prakritva Brand', id: 'brand' },
    { name: 'B2B Products', id: 'products' },
    { name: 'Facility', id: 'facility' },
    { name: 'Food Safety', id: 'quality' },
    { name: 'Investors', id: 'investors' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-header shadow-xl py-3' : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Leaf className="text-white" size={22} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold leading-none text-lg transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Sri Mookambika</span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-emerald-700' : 'text-emerald-400'}`}>Agro Foods LLP</span>
          </div>
        </div>

        <nav className="hidden xl:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
              } ${activeSection === link.id ? 'text-emerald-500' : ''}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transition-transform duration-300 origin-left ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-emerald-500/30 active:scale-95"
          >
            Inquire Now
          </button>
        </nav>

        <button 
          className={`xl:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] border-t border-slate-100' : 'max-h-0'}`}>
        <div className="py-8 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`text-slate-800 text-lg font-bold pb-3 border-b border-slate-50 flex justify-between items-center text-left ${activeSection === link.id ? 'text-emerald-600' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
              {activeSection === link.id && <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 text-white px-5 py-4 rounded-2xl text-center font-bold shadow-lg"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
