import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Linkedin,
  MapPin,
  Eye
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'structured'>('visual');
  const { profile, education, workExperience, skillCategories } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Curriculum Vitae
                </span>
                <span className="text-[11px] text-slate-400">
                  {profile.fullName}, S.Kom
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {lang === 'id' ? 'Curriculum Vitae Resmi' : 'Official Curriculum Vitae'}
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

        {/* View Switcher Controls */}
        <div className="px-4 sm:px-6 pt-4 pb-2 bg-slate-900/90 border-b border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('visual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === 'visual'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pratinjau Dokumen Asli' : 'Original Document View'}</span>
            </button>
            <button
              onClick={() => setViewMode('structured')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === 'structured'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Format Digital Interaktif' : 'Digital Resume View'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.cvPdfUrl}
              download="CV_Soleman_Julion_Seik_SKom.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Unduh PDF Asli' : 'Download PDF'}</span>
            </a>
            <a
              href={profile.cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'id' ? 'Tab Baru' : 'New Tab'}</span>
            </a>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {viewMode === 'visual' ? (
            /* Visual Snapshot of original CV */
            <div className="flex flex-col items-center">
              <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-2 sm:p-4 overflow-hidden border border-slate-700">
                <img
                  src={profile.cvPreviewUrl}
                  alt="Soleman Julion Seik CV Document Preview"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
          ) : (
            /* Structured Resume View */
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              
              {/* Header Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-white">
                      {profile.fullName}
                    </h2>
                    <p className="text-sm text-indigo-400 font-semibold mt-0.5">
                      Fresh Graduate • Sarjana Komputer (S.Kom)
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Jurusan Sistem Informasi, Fakultas FIKTI Universitas Gunadarma (IPK 3.4)
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-400 space-y-1">
                    <p className="flex items-center gap-1.5 justify-end">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{profile.email}</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-end">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{profile.phone}</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{profile.location}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  {lang === 'id' ? profile.bioId : profile.bioEn}
                </div>
              </div>

              {/* Education */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>{lang === 'id' ? 'Pendidikan' : 'Education'}</span>
                </div>
                {education.map((edu, i) => (
                  <div key={i} className="pl-4 border-l-2 border-indigo-500 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <h4 className="font-bold text-white text-sm">{edu.institution}</h4>
                      <span className="font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <p className="text-xs text-indigo-300 font-medium">
                      {lang === 'id' ? edu.degreeId : edu.degreeEn} — <span className="text-amber-300 font-bold">IPK {edu.gpa}</span>
                    </p>
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      {lang === 'id' ? edu.descriptionId : edu.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Work Experience */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}</span>
                </div>
                {workExperience.map((exp, i) => (
                  <div key={i} className="pl-4 border-l-2 border-cyan-500 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <h4 className="font-bold text-white text-sm">{exp.company}</h4>
                      <span className="font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-cyan-300 font-medium">
                      {lang === 'id' ? exp.roleId : exp.roleEn}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {(lang === 'id' ? exp.tasksId : exp.tasksEn).map((task, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Academic Projects */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'id' ? 'Proyek Akademik Utama' : 'Key Academic Projects'}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white text-sm">
                    Heavy Equipment Spare Parts E-Commerce System
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Developed a comprehensive e-commerce website for heavy equipment spare parts using TypeScript and SQLite, applying information systems concepts and business processes throughout the application development process.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["TypeScript", "React.js", "SQLite", "UML Modeling", "Black-Box Testing"].map((tech, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">
            {profile.fullName} • Lulusan FIKTI Universitas Gunadarma
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
          >
            {lang === 'id' ? 'Tutup' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
