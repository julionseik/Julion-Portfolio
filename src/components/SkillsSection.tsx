import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Network, 
  Workflow, 
  Terminal, 
  CheckCircle, 
  Sparkles,
  Layers,
  Cpu,
  BadgeCheck
} from 'lucide-react';

interface SkillsSectionProps {
  lang: 'id' | 'en';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kompetensi & Keahlian Teknis' : 'Technical Competencies & Skills'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Keahlian Berdasarkan CV & Sertifikasi' : 'Skills Backed by CV & Credentials'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Kombinasi kemampuan rekayasa perangkat lunak modern, analisis alur sistem informasi enterprise, serta perancangan database terstruktur.'
              : 'A versatile blend of modern software engineering, enterprise system analysis, and structured relational database design.'}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === index
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {getIcon(category.iconName)}
              <span>{lang === 'id' ? category.titleId : category.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                {getIcon(skillCategories[activeTab].iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'id' ? skillCategories[activeTab].titleId : skillCategories[activeTab].titleEn}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {skillCategories[activeTab].skills.length} {lang === 'id' ? 'Keahlian Teruji' : 'Verified Capabilities'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800/60">
              <BadgeCheck className="w-4 h-4" />
              <span>{lang === 'id' ? 'Terverifikasi Teori & Praktik' : 'Theory & Practical Verified'}</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'id' ? skill.descriptionId : skill.descriptionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Gunadarma FIKTI Competency</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary Grid of All Categories */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                activeTab === idx
                  ? 'bg-slate-800 border-indigo-500/60 shadow-md'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60'
              }`}
            >
              <span className="text-xs font-bold text-slate-200 block truncate">
                {lang === 'id' ? cat.titleId : cat.titleEn}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                {cat.skills.length} item
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
