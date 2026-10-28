import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Award, 
  FileDown, 
  ExternalLink, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Linkedin, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Code2,
  Network,
  Bot
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
  lang: 'id' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, lang }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Credentials */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span>Halo, Saya</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                Julion
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-sm sm:text-base font-semibold shadow-sm align-middle animate-pulse">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                <span className="font-mono">Hai!</span>
              </span>
            </h1>

            {/* Subtitle / Role Tag */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-300 font-medium mb-6">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <GraduationCap className="w-4 h-4" />
                Lulusan Sistem Informasi
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">
                Fakultas FIKTI Gunadarma
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs border border-indigo-500/30">
                IPK {profile.gpa}
              </span>
            </div>

            {/* Bio summary paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {lang === 'id' ? profile.bioId : profile.bioEn}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('certificates')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>{lang === 'id' ? 'Eksplorasi 7 Sertifikat Resmi' : 'Explore 7 Official Certificates'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'id' ? 'Lihat / Unduh CV' : 'View / Download CV'}</span>
              </button>
            </div>

            {/* Quick Contact Icons */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between sm:justify-start gap-4 text-xs text-slate-400">
              <a 
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-indigo-500/50">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span>{profile.email}</span>
              </a>

              <a 
                href={`https://wa.me/${profile.whatsappClean}?text=Halo%20Soleman%20Julion%20Seik,%20saya%20melihat%20portofolio%20dan%20CV%20Anda.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>{profile.phone}</span>
              </a>

              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span>LinkedIn Profil</span>
              </a>
            </div>

          </div>

          {/* Right Column: Photo on Left & Stats (IPK, Sertifikat, Spesialisasi) on Right */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-xl">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600 rounded-3xl blur-lg opacity-35 transition duration-700 pointer-events-none" />

              {/* Unified Card Container */}
              <div className="relative rounded-3xl bg-slate-900/95 border border-slate-700/70 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                  
                  {/* Photo on the Left (Normal standard size on mobile and desktop) */}
                  <div className="sm:col-span-5 relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] w-full max-w-[260px] sm:max-w-none min-h-[260px] sm:min-h-[290px] mx-auto sm:mx-0 shadow-lg border border-slate-800/80 group">
                    <img
                      src={profile.photoUrl}
                      alt={`${profile.fullName}, ${profile.degree} - Sarjana Komputer Sistem Informasi Universitas Gunadarma`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Gentle gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Top Badge: Gunadarma FIKTI */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <div className="px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 flex items-center gap-1.5 text-[10px] font-semibold text-slate-200 shadow-md">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        <span>FIKTI Gunadarma</span>
                      </div>
                    </div>

                    {/* Bottom Name on photo: includes S.Kom */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-center">
                      <div className="text-white font-bold text-xs flex items-center justify-center gap-1">
                        <span>{profile.fullName}, {profile.degree}</span>
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">
                        Sistem Informasi
                      </p>
                    </div>
                  </div>

                  {/* Right Column: IPK, Sertifikat, Spesialisasi */}
                  <div className="sm:col-span-7 flex flex-col justify-between gap-3">
                    
                    {/* 1. IPK Card */}
                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-amber-500/40 transition-colors flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                          {lang === 'id' ? 'IPK Kumulatif' : 'Cumulative GPA'}
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 font-mono tracking-tight mt-0.5">
                          {profile.gpa}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          FIKTI Gunadarma
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                    </div>

                    {/* 2. Sertifikat Card */}
                    <button
                      onClick={() => scrollTo('certificates')}
                      className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all text-left group/cert flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                          {lang === 'id' ? 'Sertifikat Kursus' : 'Certifications'}
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mt-0.5 flex items-baseline gap-1.5">
                          <span>7</span>
                          <span className="text-xs font-semibold text-cyan-300 font-sans tracking-normal">Resmi</span>
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 group-hover/cert:text-cyan-400 transition-colors">
                          <span>Universitas Gunadarma</span>
                          <span className="text-cyan-400 text-[10px] font-mono group-hover/cert:translate-x-0.5 transition-transform">→</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover/cert:scale-110 transition-transform shrink-0">
                        <Award className="w-5 h-5 text-cyan-400" />
                      </div>
                    </button>

                    {/* 3. Spesialisasi Card (Hapus Cisco Network) */}
                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-indigo-500/40 transition-colors flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                          {lang === 'id' ? 'Spesialisasi Utama' : 'Core Specialization'}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-100 tracking-tight mt-0.5">
                          Web & Basis Data
                        </div>
                        <div className="text-[11px] text-slate-500">
                          TypeScript, React.js & Database
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
