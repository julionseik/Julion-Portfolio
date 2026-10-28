import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Award, 
  ExternalLink, 
  Sparkles,
  Languages,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
  lang: 'id' | 'en';
  setLang: (lang: 'id' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', labelId: 'Tentang', labelEn: 'About' },
    { id: 'skills', labelId: 'Keahlian', labelEn: 'Skills' },
    { id: 'projects', labelId: 'Proyek', labelEn: 'Projects' },
    { 
      id: 'certificates', 
      labelId: 'Sertifikat', 
      labelEn: 'Certificates', 
      badge: '7' 
    },
    { id: 'experience', labelId: 'Pendidikan & Karir', labelEn: 'Experience' },
    { id: 'contact', labelId: 'Kontak', labelEn: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Portfolio Title */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>Soleman Julion Seik</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold tracking-wider uppercase">
                  Portfolio
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Sistem Informasi • FIKTI Gunadarma
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-indigo-600 shadow-sm shadow-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {lang === 'id' ? link.labelId : link.labelEn}
                  {link.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white text-indigo-700' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/70 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors"
              title="Ganti Bahasa / Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-[11px] uppercase tracking-wider">{lang}</span>
            </button>

            {/* Quick CV Modal Button */}
            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-md shadow-indigo-600/25 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Lihat CV' : 'View CV'}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{lang === 'id' ? link.labelId : link.labelEn}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge} {lang === 'id' ? 'Sertifikat' : 'Certs'}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'id' ? 'Buka Ringkasan & Unduh CV' : 'Open & Download CV'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
