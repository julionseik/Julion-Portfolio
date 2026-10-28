import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowUp, 
  FileText, 
  Award, 
  Linkedin, 
  Mail, 
  Phone, 
  ShieldCheck,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface FooterProps {
  onOpenCvModal: () => void;
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal, lang }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 sm:py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Credential */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-tight">
                  {profile.fullName}, {profile.degree}
                </h3>
                <p className="text-xs text-indigo-400">
                  {lang === 'id' ? profile.titleId : profile.titleEn}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === 'id'
                ? 'Portofolio digital dan verifikasi kompetensi akademik lulusan Sistem Informasi Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI) Universitas Gunadarma.'
                : 'Digital portfolio and verified academic credentials of Information Systems graduate from Faculty FIKTI Gunadarma University.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IPK {profile.gpa} • 7 Sertifikat Resmi Gunadarma</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">
                {lang === 'id' ? 'Navigasi' : 'Navigation'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">
                    Beranda / Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
                    {lang === 'id' ? 'Tentang Saya' : 'About Me'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">
                    {lang === 'id' ? 'Keahlian Teknis' : 'Skills'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">
                    {lang === 'id' ? 'Proyek Akademik' : 'Projects'}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">
                {lang === 'id' ? 'Kredensial' : 'Credentials'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollTo('certificates')} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                    <span>Sertifikat Kursus (7)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">
                    Pendidikan & Magang
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCvModal} className="hover:text-indigo-400 transition-colors">
                    Curriculum Vitae (CV)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
                    Hubungi Saya
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Documents & Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-2">
              {lang === 'id' ? 'Dokumen Resmi' : 'Official Documents'}
            </h4>

            <button
              onClick={onOpenCvModal}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Lihat Dokumen CV</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">PDF</span>
            </button>

            <a
              href={profile.allCertificatesPdfUrl}
              download="Soleman_Julion_Seik_Semua_Sertifikat.pdf"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <span className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Unduh 7 Sertifikat</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">14 Hal</span>
            </a>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${profile.whatsappClean}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Soleman Julion Seik, S.Kom. Hak Cipta Dilindungi Undang-Undang.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
