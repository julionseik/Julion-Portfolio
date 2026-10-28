import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';
import { 
  Award, 
  Search, 
  Calendar, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  FileCheck,
  ShieldAlert,
  ArrowRight,
  Filter
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  lang: 'id' | 'en';
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cardFlipState, setCardFlipState] = useState<Record<string, 'front' | 'back'>>({});

  const categories = [
    { id: 'all', labelId: 'Semua Sertifikat', labelEn: 'All Certificates', count: 7 },
    { id: 'programming', labelId: 'Pemrograman Java', labelEn: 'Java Programming', count: 2 },
    { id: 'networking', labelId: 'Jaringan Cisco & Net', labelEn: 'Cisco & Networks', count: 3 },
    { id: 'systems', labelId: 'Desain Sistem & ERP', labelEn: 'Systems & ERP', count: 2 },
  ];

  const filteredCertificates = useMemo(() => {
    return PORTFOLIO_DATA.certificates.filter((cert) => {
      const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        cert.titleId.toLowerCase().includes(q) ||
        cert.titleEn.toLowerCase().includes(q) ||
        cert.number.toLowerCase().includes(q) ||
        cert.syllabus.some(s => s.id.toLowerCase().includes(q) || s.en.toLowerCase().includes(q)) ||
        cert.highlightTags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleCardFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardFlipState(prev => ({
      ...prev,
      [id]: prev[id] === 'back' ? 'front' : 'back',
    }));
  };

  return (
    <section id="certificates" className="py-20 sm:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kredensial & Sertifikasi Resmi' : 'Official Credentials & Certifications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? '7 Sertifikat Kursus Gunadarma' : '7 Gunadarma Training Certificates'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Sertifikasi kompetensi resmi yang diterbitkan dan ditandatangani oleh Rektor Universitas Gunadarma, mencakup Rekayasa Perangkat Lunak Java, Arsitektur Jaringan WAN & LAN Cisco, Desain Pengembangan Sistem, serta Enterprise Resource Planning (ERP).'
              : 'Official competency certifications issued and electronically authenticated by the Rector of Gunadarma University, covering Java Engineering, Cisco WAN & LAN Networks, System Development Design, and Enterprise Resource Planning (ERP).'}
          </p>
        </div>

        {/* Master PDF Download Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4 z-10 text-left">
            <div className="p-3.5 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300">
              <FileCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                  Dokumen Master Asli
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">14 Halaman Lengkap</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {lang === 'id' ? 'Berkas Bundel Sertifikat & Transkrip Kursus' : 'Complete Certificates & Transcripts Bundle'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                {lang === 'id'
                  ? 'File PDF lengkap yang memuat seluruh 7 sertifikat beserta silabus transkrip nilai resmi bertanda tangan digital hukum.'
                  : 'Full original 14-page PDF document containing all 7 certificates with syllabus transcripts and electronic signatures.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto z-10">
            <a
              href={PORTFOLIO_DATA.profile.allCertificatesPdfUrl}
              download="Soleman_Julion_Seik_Semua_Sertifikat_Kursus.pdf"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'id' ? 'Unduh PDF Lengkap' : 'Download Complete PDF'}</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.allCertificatesPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'id' ? 'Buka di Tab Baru' : 'Open in New Tab'}</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-2xl border border-slate-800 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{lang === 'id' ? cat.labelId : cat.labelEn}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white text-indigo-700 font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari judul, topik, no sertifikat...' : 'Search title, syllabus, cert no...'}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredCertificates.map((cert) => {
            const currentSide = cardFlipState[cert.id] || 'front';
            return (
              <div
                key={cert.id}
                className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1"
              >
                {/* Visual Thumbnail Area with Flip control */}
                <div className="relative bg-slate-950 p-4 border-b border-slate-800 overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
                  
                  {/* Image container */}
                  <div 
                    onClick={() => onSelectCertificate(cert)} 
                    className="cursor-pointer relative w-full h-[180px] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300"
                  >
                    <img
                      src={currentSide === 'front' ? cert.frontImage : cert.backImage}
                      alt={cert.titleId}
                      className="max-h-[175px] w-auto object-contain rounded shadow-lg border border-slate-800/80"
                    />
                    
                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                        {lang === 'id' ? 'Buka Pratinjau HD' : 'Open HD Preview'}
                      </span>
                    </div>
                  </div>

                  {/* Flip button tag */}
                  <button
                    onClick={(e) => toggleCardFlip(cert.id, e)}
                    className="absolute bottom-2.5 right-3 px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700/80 flex items-center gap-1 transition-colors shadow-md z-10"
                    title="Beralih antara Sertifikat & Silabus Materi"
                  >
                    <BookOpen className="w-3 h-3 text-cyan-400" />
                    <span>{currentSide === 'front' ? (lang === 'id' ? 'Lihat Silabus' : 'View Syllabus') : (lang === 'id' ? 'Lihat Sertifikat' : 'View Front')}</span>
                  </button>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/80 shadow">
                      {cert.number}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category tag */}
                    <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-1">
                      {cert.category === 'programming' ? 'Software & Java' : cert.category === 'networking' ? 'Cisco Networking' : 'Systems & ERP'}
                    </div>

                    {/* Certificate Title */}
                    <h3 
                      onClick={() => onSelectCertificate(cert)}
                      className="text-base font-bold text-white line-clamp-2 hover:text-cyan-300 cursor-pointer transition-colors leading-snug mb-2"
                    >
                      {lang === 'id' ? cert.titleId : cert.titleEn}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {lang === 'id' ? cert.summaryId : cert.summaryEn}
                    </p>

                    {/* Key syllabus topics chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.syllabus.slice(0, 3).map((topic, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {lang === 'id' ? topic.id : topic.en}
                        </span>
                      ))}
                      {cert.syllabus.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                          +{cert.syllabus.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cert.issuer}</span>
                    </div>

                    <button
                      onClick={() => onSelectCertificate(cert)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors"
                    >
                      <span>{lang === 'id' ? 'Detail & Silabus' : 'Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Feedback */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <p className="text-slate-400 text-sm">
              {lang === 'id' ? 'Tidak ada sertifikat yang cocok dengan pencarian Anda.' : 'No certificates found matching your criteria.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
