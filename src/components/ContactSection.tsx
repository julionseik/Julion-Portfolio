import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ContactSectionProps {
  lang: 'id' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Mari Berkolaborasi' : 'Get in Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Hubungi Soleman Julion Seik' : 'Contact Soleman Julion Seik'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'Terbuka untuk posisi Junior Software Engineer, Fullstack Web Developer, System Analyst, IT Specialist, maupun kolaborasi proyek teknologi.'
              : 'Open to Junior Software Engineer, Fullstack Web Developer, System Analyst, IT Specialist opportunities, and tech collaborations.'}
          </p>
        </div>

        {/* Direct Contacts Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/80">
                    Respon Cepat
                  </span>
                </div>
                
                <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">
                  WhatsApp / Telepon
                </span>
                <p className="text-white font-bold text-base sm:text-lg font-mono">
                  {profile.phone}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'id' ? 'Tersedia untuk panggilan wawancara & pesan langsung' : 'Available for interview calls & direct messages'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? (lang === 'id' ? 'Tersalin' : 'Copied') : (lang === 'id' ? 'Salin Nomor' : 'Copy Number')}</span>
                </button>

                <a
                  href={`https://wa.me/${profile.whatsappClean}?text=Halo%20Soleman%20Julion%20Seik,%20saya%20melihat%20portofolio%20Anda.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
                >
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-lg border border-indigo-800/80">
                    Email Resmi
                  </span>
                </div>
                
                <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">
                  Surat Elektronik
                </span>
                <p className="text-white font-bold text-base sm:text-lg font-mono break-all">
                  {profile.email}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'id' ? 'Untuk surat undangan, rekrutmen & berkas formal' : 'For official invitations, recruitment & formal files'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (lang === 'id' ? 'Tersalin' : 'Copied') : (lang === 'id' ? 'Salin Email' : 'Copy Email')}</span>
                </button>

                <a
                  href={`mailto:${profile.email}?subject=Peluang%20Kerja%20-%20Soleman%20Julion%20Seik`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
                >
                  <span>Kirim Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/80">
                    Jejaring
                  </span>
                </div>
                
                <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">
                  LinkedIn Profile
                </span>
                <p className="text-white font-bold text-base sm:text-lg">
                  Soleman Julion Seik
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  linkedin.com/in/soleman-julion-seik-26325a222
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-end">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <span>Buka Profil LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-800/80">
                    Lokasi
                  </span>
                </div>
                
                <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">
                  Domisili Saat Ini
                </span>
                <p className="text-white font-bold text-base sm:text-lg">
                  {profile.location}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'id' ? 'Siap bekerja di Jabodetabek (On-site / Hybrid) maupun Remote' : 'Open for Jabodetabek (On-site / Hybrid) or Remote roles'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{lang === 'id' ? 'Status: Siap Segera Bergabung' : 'Status: Ready to Join Immediately'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
