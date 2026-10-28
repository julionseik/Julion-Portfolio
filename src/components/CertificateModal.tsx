import React, { useState } from 'react';
import { CertificateItem, PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Award, 
  Calendar, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Layers, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'front' | 'back'>('front');
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyNo = () => {
    navigator.clipboard.writeText(certificate.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  {certificate.number}
                </span>
                <span className="text-[11px] text-slate-400">
                  {certificate.issuer}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1 mt-0.5">
                {lang === 'id' ? certificate.titleId : certificate.titleEn}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* View Tab Switcher: Halaman Depan (Sertifikat) vs Halaman Belakang (Silabus & Transkrip) */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('front')}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'front'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Halaman 1: Sertifikat Pelatihan' : 'Page 1: Certificate'}</span>
              </button>
              <button
                onClick={() => setActiveTab('back')}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'back'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Halaman 2: Transkrip Materi & Silabus' : 'Page 2: Syllabus & Subjects'}</span>
              </button>
            </div>

            <button
              onClick={handleCopyNo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : certificate.number}</span>
            </button>
          </div>

          {/* Certificate Image Canvas */}
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-2 sm:p-4 flex items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            <img
              src={activeTab === 'front' ? certificate.frontImage : certificate.backImage}
              alt={certificate.titleId}
              className="max-h-[520px] w-auto object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
            
            <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-300 font-mono flex items-center gap-1.5 shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dokumen Resmi Gunadarma</span>
            </div>
          </div>

          {/* Detailed Syllabus Grid */}
          <div className="bg-slate-950/60 rounded-2xl p-4 sm:p-5 border border-slate-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {lang === 'id' ? 'Materi & Silabus Pembelajaran' : 'Curriculum & Subjects Taught'}
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {certificate.syllabus.length} {lang === 'id' ? 'Modul Topik' : 'Modules'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certificate.syllabus.map((topic, i) => (
                <div 
                  key={i} 
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <span className="font-mono text-[10px] text-indigo-400 bg-indigo-950 px-1.5 py-0.5 rounded font-bold">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-medium text-slate-200">
                      {lang === 'id' ? topic.id : topic.en}
                    </p>
                    {lang === 'id' && (
                      <p className="text-[11px] text-slate-500 italic mt-0.5">{topic.en}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Issuer & Verification Metadata */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <span className="text-slate-500 block uppercase font-mono text-[10px]">Penyelenggara</span>
              <span className="text-slate-200 font-semibold">{certificate.issuer}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-mono text-[10px]">Tanggal Terbit</span>
              <span className="text-slate-200 font-semibold">{certificate.issueDateFormatted}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-mono text-[10px]">Penandatangan</span>
              <span className="text-slate-200 font-semibold">{certificate.signatory}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500">
            Tersertifikasi resmi dengan tanda tangan elektronik berstandar hukum.
          </p>
          
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.allCertificatesPdfUrl}
              download="Soleman_Julion_Seik_Semua_Sertifikat.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Unduh PDF Semua Sertifikat (14 Hal)' : 'Download Full Certs PDF'}</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
