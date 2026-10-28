import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Database, 
  Network, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: 'id' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projects[0]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Karya Nyata & Studi Kasus' : 'Real-world Projects & Case Studies'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Proyek Akademik & Implementasi Sistem' : 'Academic Projects & Implementations'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Penerapan konsep sistem informasi, analisis alur bisnis, serta rekayasa perangkat lunak dan jaringan dalam memecahkan permasalahan nyata industri.'
              : 'Applying information systems paradigms, business process modeling, and software engineering to solve concrete industrial challenges.'}
          </p>
        </div>

        {/* Featured Project Showcase: E-Commerce Alat Berat */}
        <div className="mb-14 rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/30">
                  Featured Academic Capstone
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  FIKTI Gunadarma
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === 'id' ? projects[0].titleId : projects[0].titleEn}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {lang === 'id' ? projects[0].descriptionId : projects[0].descriptionEn}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {(lang === 'id' ? projects[0].highlightsId : projects[0].highlightsEn).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[0].techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Interactive Visual Mockup / Architecture Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-inner space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    systems-arch.sqlite.ts
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-3 font-mono">
                  <div className="text-indigo-400 font-bold flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>Heavy Equipment Parts Schema</span>
                  </div>

                  <div className="text-slate-400 text-[11px] space-y-1">
                    <p className="text-emerald-400">✓ UML Use Case: Multi-Role Procurement</p>
                    <p className="text-cyan-400">✓ DB Engine: SQLite Relational Indexing</p>
                    <p className="text-amber-400">✓ Frontend: React.js + TypeScript Strict Mode</p>
                    <p className="text-indigo-300">✓ Validation: Black-Box QA Verification</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[10px] text-slate-400">
                    <span className="text-slate-200 font-bold block mb-0.5">Kompetensi yang Dibuktikan:</span>
                    Mampu mendesain alur e-commerce B2B suku cadang industri dengan integrasi bisnis rantai pasok dan query database relasional.
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Peran: Lead Developer & Analyst</span>
                  <span className="text-emerald-400 font-medium">Proyek Selesai</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Other Projects / Technical Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {proj.role}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {lang === 'id' ? proj.titleId : proj.titleEn}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {lang === 'id' ? proj.descriptionId : proj.descriptionEn}
                </p>

                <div className="space-y-2 mb-6">
                  {(lang === 'id' ? proj.highlightsId : proj.highlightsEn).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {proj.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
