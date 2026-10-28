import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Award,
  Sparkles
} from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'id' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const { education, workExperience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Rekam Jejak & Riwayat' : 'Timeline & Milestones'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Pendidikan & Pengalaman Kerja' : 'Education & Work Experience'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Kombinasi latar belakang akademik berprestasi di Universitas Gunadarma dan pengalaman magang operasional pada institusi Bank Indonesia.'
              : 'Proven academic track record at Gunadarma University paired with operational discipline developed at Bank Indonesia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">
                {lang === 'id' ? 'Pendidikan Akademik' : 'Academic Education'}
              </h3>
            </div>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <span className="font-mono text-xs font-semibold text-indigo-400 bg-indigo-950/70 px-2.5 py-0.5 rounded-lg border border-indigo-800/60 inline-block mb-1.5">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {item.institution}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {lang === 'id' ? item.facultyId : item.facultyEn}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">IPK Kelulusan</span>
                    <span className="text-lg font-extrabold text-amber-300 font-mono">
                      {item.gpa}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-4 text-xs">
                  <span className="font-semibold text-cyan-300 block mb-0.5">
                    {lang === 'id' ? item.degreeId : item.degreeEn}
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {lang === 'id' ? item.descriptionId : item.descriptionEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {lang === 'id' ? 'Gelar S.Kom Terverifikasi' : 'Verified B.Comp Degree'}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">FIKTI-UG</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">
                {lang === 'id' ? 'Pengalaman Kerja & Magang' : 'Work & Internship Experience'}
              </h3>
            </div>

            {workExperience.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/70 px-2.5 py-0.5 rounded-lg border border-cyan-800/60 inline-block mb-1.5">
                      {item.period} • {item.badge}
                    </span>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      {item.company}
                    </h4>
                    <p className="text-xs text-indigo-300 font-medium mt-0.5">
                      {lang === 'id' ? item.roleId : item.roleEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-xs text-slate-300">
                  {(lang === 'id' ? item.tasksId : item.tasksEn).map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-500">
                    {lang === 'id' ? 'Disiplin Kerja & Kepatuhan SOP Institusi' : 'Professional Work Discipline & Institutional SOPs'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">Verified Intern</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
