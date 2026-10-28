import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  ArrowUpRight,
  Database,
  Cpu,
  Workflow,
  ShieldCheck,
  Building
} from 'lucide-react';

interface AboutSectionProps {
  lang: 'id' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const { profile } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: <Workflow className="w-5 h-5 text-indigo-400" />,
      titleId: "Sistem Informasi & Analisis UML",
      titleEn: "Information Systems & UML Analysis",
      descId: "Mampu memetakan kebutuhan bisnis nyata ke dalam spesifikasi sistem perangkat lunak terstruktur dengan Use Case, Activity, Class, dan Sequence Diagrams.",
      descEn: "Translating business needs into structured software blueprints using comprehensive UML modeling and architectural methodologies.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      titleId: "Rekayasa Web Modern & Database",
      titleEn: "Modern Web Engineering & Databases",
      descId: "Fasih mengembangkan antarmuka web interaktif menggunakan TypeScript, React.js, dan JavaScript, ditunjang manajemen relasi data MySQL dan SQLite.",
      descEn: "Developing interactive web applications using TypeScript, React.js, and JavaScript, backed by relational data management in MySQL and SQLite.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      titleId: "Jaringan Komputer Cisco Bersertifikat",
      titleEn: "Certified Cisco Computer Networks",
      descId: "Menguasai arsitektur Local Area Network (LAN) & Wide Area Network (WAN), konfigurasi Cisco IOS, dynamic routing (OSPF/EIGRP), VLAN, dan ACL Security.",
      descEn: "Proficient in LAN and WAN architecture, Cisco IOS configuration, dynamic routing protocols (OSPF/EIGRP), VLAN segmentation, and ACL security.",
    },
    {
      icon: <Building className="w-5 h-5 text-amber-400" />,
      titleId: "Pemahaman ERP Enterprise",
      titleEn: "Enterprise Resource Planning (ERP)",
      descId: "Memahami modul integrasi rantai pasok (purchasing, sales order, bill of materials/BOM) dalam ekosistem sistem ERP modern seperti ADempiere, NAV, dan SAP.",
      descEn: "Understanding core enterprise ERP workflows including supply chain, purchasing, sales order cycles, BOM modeling, and SAP fundamentals.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Profil Pribadi & Latar Belakang' : 'Personal Profile & Background'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Tentang Soleman Julion Seik' : 'About Soleman Julion Seik'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Mengenal lebih dekat perjalanan akademik, visi rekayasa teknologi, dan dedikasi profesional dalam bidang Sistem Informasi.'
              : 'Discovering my academic foundation, software engineering philosophy, and professional readiness in Information Systems.'}
          </p>
        </div>

        {/* Two-Column Grid: Academic Profile Details & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Academic Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Universitas Gunadarma</h3>
                  <p className="text-xs text-indigo-300">Fakultas Ilmu Komputer & TI (FIKTI)</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 block uppercase font-mono">Gelar & Program Studi</span>
                  <span className="font-semibold text-slate-100">Sarjana Komputer (S.Kom) - Sistem Informasi</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[11px] text-slate-500 block uppercase font-mono">Periode Studi</span>
                    <span className="font-semibold text-slate-100">2021 – 2026</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[11px] text-slate-500 block uppercase font-mono">Indeks Prestasi (IPK)</span>
                    <span className="font-bold text-amber-300 font-mono text-base">3.4</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 block uppercase font-mono mb-1">Domisili & Kontak</span>
                  <p className="text-slate-300 text-xs mb-1">Bekasi Barat, Jawa Barat, Indonesia (17412)</p>
                  <p className="text-cyan-400 text-xs font-mono">{profile.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                Ijazah & Transkrip Terverifikasi
              </span>
              <span className="font-mono text-slate-500">FIKTI-UG</span>
            </div>
          </div>

          {/* Right Column: 4 Core Competency Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-slate-950 w-fit mb-4 border border-slate-800/80 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {lang === 'id' ? pillar.titleId : pillar.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {lang === 'id' ? pillar.descId : pillar.descEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center gap-1 text-[11px] font-semibold text-indigo-400">
                  <span>{lang === 'id' ? 'Kompetensi Terintegrasi' : 'Core Discipline'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
