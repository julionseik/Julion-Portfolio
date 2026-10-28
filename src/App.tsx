/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { CvModal } from './components/CvModal';
import { CertificateItem } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Fixed Header */}
      <Navbar 
        onOpenCvModal={() => setIsCvModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenCvModal={() => setIsCvModalOpen(true)}
          lang={lang}
        />
        
        <AboutSection 
          lang={lang}
        />

        <SkillsSection 
          lang={lang}
        />

        <ProjectsSection 
          lang={lang}
        />

        <CertificatesSection 
          onSelectCertificate={(cert) => setSelectedCert(cert)}
          lang={lang}
        />

        <ExperienceSection 
          lang={lang}
        />

        <ContactSection 
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCvModal={() => setIsCvModalOpen(true)}
        lang={lang}
      />

      {/* Certificate Viewer Modal */}
      <CertificateModal 
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        lang={lang}
      />

      {/* CV Viewer Modal */}
      <CvModal 
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
