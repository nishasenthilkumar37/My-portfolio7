import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import { LinkedInIcon } from '../ui/Icons';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  GraduationCap,
  Code2,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    soundFX.playChime(660, 0.2);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleDownload = () => {
    soundFX.playSuccess();
    const link = document.createElement('a');
    link.href = OWNER_INFO.resumePdf;
    link.download = 'Nisha_S_Resume.pdf';
    link.click();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] glass-panel-gold rounded-3xl border border-[#e6c88b]/40 shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0d0d15]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#e6c88b]/10 text-[#e6c88b] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">Nisha S — Resume</h3>
                <p className="text-xs font-mono-code text-gray-400">Web Designer & Front-End Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-[#e6c88b] text-[#0a0a10] font-bold text-xs font-mono-code flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                }}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body: Render Structured Resume Document */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#090910]">
            
            {/* Header / Contact */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-black font-display text-white">Nisha S</h2>
                <div className="text-sm font-mono-code text-[#e6c88b] mt-1">
                  Web Designer & Front-End Developer
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono-code text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#e6c88b]" />
                  <span>{OWNER_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f4a6b8]" />
                  <span>{OWNER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#64dfdf]" />
                  <a
                    href={OWNER_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#e6c88b] flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Professional Summary</span>
              </h4>
              <div className="p-5 rounded-2xl glass-panel text-sm text-gray-300 leading-relaxed">
                As a graduate with a Bachelor of Science in Information Technology (BSc IT) and currently pursuing an MBA in System Management, I bring a strong foundation in software programming, web architecture, and database management. Proficient in HTML, Modern CSS, JavaScript, React, Python, Java, SQL, and MongoDB, with a focus on building engaging, performant, and responsive digital applications.
              </div>
            </div>

            {/* Education Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#64dfdf] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="text-xs font-mono-code text-[#f4a6b8]">Sep 2025 – Present</div>
                  <div className="font-bold text-white text-base">MBA in System Management</div>
                  <div className="text-xs text-gray-400">The Nilgiri Institution (Correspondence) • Ooty</div>
                  <div className="text-xs font-mono-code text-[#e6c88b] mt-1">Status: Pursuing</div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="text-xs font-mono-code text-[#64dfdf]">Sep 2020 – May 2023</div>
                  <div className="font-bold text-white text-base">BSc in Information Technology</div>
                  <div className="text-xs text-gray-400">Emerald Heights College for Women • Ooty</div>
                  <div className="text-xs font-mono-code text-[#e6c88b] mt-1">CGPA: 7.8 / 10</div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="text-xs font-mono-code text-gray-400">Jun 2019 – Apr 2020</div>
                  <div className="font-bold text-white text-base">HSC (Higher Secondary)</div>
                  <div className="text-xs text-gray-400">Govt Model Higher Secondary School • Thuneri</div>
                  <div className="text-xs font-mono-code text-gray-300 mt-1">Score: 61%</div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="text-xs font-mono-code text-gray-400">Jun 2017 – Apr 2018</div>
                  <div className="font-bold text-white text-base">SSLC (Secondary School)</div>
                  <div className="text-xs text-gray-400">Govt Model Higher Secondary School • Thuneri</div>
                  <div className="text-xs font-mono-code text-gray-300 mt-1">Score: 76%</div>
                </div>
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#f4a6b8] flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Technical Proficiencies</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono-code">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-gray-400 uppercase text-[10px] mb-1">Web Development</div>
                  <div className="text-white font-medium">React, HTML5, CSS3, JavaScript, Vite</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-gray-400 uppercase text-[10px] mb-1">Programming Languages</div>
                  <div className="text-white font-medium">Python, Java, C</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-gray-400 uppercase text-[10px] mb-1">Databases & Tools</div>
                  <div className="text-white font-medium">SQL, MongoDB, Git, GitHub</div>
                </div>
              </div>
            </div>

            {/* Experimental Learning & Co-Curricular */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#e6c88b]">
                Experimental Learning & Activities
              </h4>
              <div className="p-5 rounded-2xl glass-panel space-y-2 text-xs text-gray-300">
                <div>
                  <strong className="text-white">News Headlines Project (Project Lead):</strong> Design and develop an application displaying news headlines utilizing experimental learning principles.
                </div>
                <div>
                  <strong className="text-white">Talking Dictionary & Audio Thesaurus:</strong> Search index with voice speech synthesis to assist students and physically disabled learners in vocabulary recall.
                </div>
                <div>
                  <strong className="text-white">Client-Server Presentation:</strong> Presented a technical academic presentation on client-server architecture in college.
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-white/10 bg-[#0d0d15]/90 flex items-center justify-between">
            <span className="text-xs font-mono-code text-gray-400">
              PDF file ready for download
            </span>
            <button
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-xl bg-[#e6c88b] text-[#0a0a10] font-bold text-xs font-mono-code flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Nisha_Resume.pdf</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
