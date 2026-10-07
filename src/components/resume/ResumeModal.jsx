import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import { LinkedInIcon } from '../ui/Icons';
import {
  X,
  Download,
  FileText,
  GraduationCap,
  Code2,
  Mail,
  MapPin
} from 'lucide-react';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    soundFX.playChime(600, 0.2);
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
          className="fixed inset-0 bg-[#3B2929]/50 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] rounded-3xl border border-[#B9828F]/40 bg-[#FFF9F2] shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8D8C8] bg-[#F7F0E6]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#6B1F32]/10 text-[#6B1F32] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-[#3B2929]">Nisha S — Resume</h3>
                <p className="text-xs font-mono-code text-gray-500">Web Designer & Front-End Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="btn-primary px-4 py-2 text-xs font-mono-code flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                }}
                className="w-9 h-9 rounded-full bg-[#FFF9F2] border border-[#E8D8C8] text-[#6B1F32] hover:bg-[#E8D8C8] flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#FFF9F2]">
            
            {/* Header / Contact */}
            <div className="p-6 rounded-2xl bg-[#F7F0E6] border border-[#E8D8C8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-black font-display text-[#3B2929]">Nisha S</h2>
                <div className="text-sm font-mono-code text-[#6B1F32] font-semibold mt-1">
                  Web Designer & Front-End Developer
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono-code text-[#3B2929]/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#6B1F32]" />
                  <span>{OWNER_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B9828F]" />
                  <span>{OWNER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#6B1F32]" />
                  <a
                    href={OWNER_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#6B1F32] transition-colors underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#6B1F32] flex items-center gap-2 font-bold">
                <Code2 className="w-4 h-4 text-[#B9828F]" />
                <span>Professional Summary</span>
              </h4>
              <div className="p-5 rounded-2xl bg-[#F7F0E6]/50 border border-[#E8D8C8] text-sm text-[#3B2929]/80 leading-relaxed">
                As a graduate with a Bachelor of Science in Information Technology (BSc IT) and currently pursuing an MBA in System Management, I bring a strong foundation in software programming, web architecture, and database management. Proficient in HTML, Modern CSS, JavaScript, React, Python, Java, SQL, and MongoDB, with a focus on building engaging, performant, and responsive digital applications.
              </div>
            </div>

            {/* Education Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#6B1F32] flex items-center gap-2 font-bold">
                <GraduationCap className="w-4 h-4 text-[#B9828F]" />
                <span>Education</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                  <div className="text-xs font-mono-code text-[#B9828F] font-semibold">Sep 2025 – Present</div>
                  <div className="font-bold text-[#3B2929] text-base">MBA in System Management</div>
                  <div className="text-xs text-gray-500">The Nilgiri Institution (Correspondence) • Ooty</div>
                  <div className="text-xs font-mono-code text-[#6B1F32] font-bold mt-1">Status: Pursuing</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                  <div className="text-xs font-mono-code text-[#B9828F] font-semibold">Sep 2020 – May 2023</div>
                  <div className="font-bold text-[#3B2929] text-base">BSc in Information Technology</div>
                  <div className="text-xs text-gray-500">Emerald Heights College for Women • Ooty</div>
                  <div className="text-xs font-mono-code text-[#6B1F32] font-bold mt-1">CGPA: 7.8 / 10</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                  <div className="text-xs font-mono-code text-gray-500">Jun 2019 – Apr 2020</div>
                  <div className="font-bold text-[#3B2929] text-base">HSC (Higher Secondary)</div>
                  <div className="text-xs text-gray-500">Govt Model Higher Secondary School • Thuneri</div>
                  <div className="text-xs font-mono-code text-gray-600 mt-1">Score: 61%</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                  <div className="text-xs font-mono-code text-gray-500">Jun 2017 – Apr 2018</div>
                  <div className="font-bold text-[#3B2929] text-base">SSLC (Secondary School)</div>
                  <div className="text-xs text-gray-500">Govt Model Higher Secondary School • Thuneri</div>
                  <div className="text-xs font-mono-code text-gray-600 mt-1">Score: 76%</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#6B1F32] flex items-center gap-2 font-bold">
                <Code2 className="w-4 h-4 text-[#B9828F]" />
                <span>Technical Proficiencies</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono-code">
                <div className="p-3 rounded-xl bg-[#F7F0E6]/60 border border-[#E8D8C8]">
                  <div className="text-[#6B1F32] uppercase text-[10px] mb-1 font-bold">Web Development</div>
                  <div className="text-[#3B2929] font-medium">React, HTML5, CSS3, JavaScript, Vite</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F0E6]/60 border border-[#E8D8C8]">
                  <div className="text-[#6B1F32] uppercase text-[10px] mb-1 font-bold">Programming Languages</div>
                  <div className="text-[#3B2929] font-medium">Python, Java, C</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F0E6]/60 border border-[#E8D8C8]">
                  <div className="text-[#6B1F32] uppercase text-[10px] mb-1 font-bold">Databases & Tools</div>
                  <div className="text-[#3B2929] font-medium">SQL, MongoDB, Git, GitHub</div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-[#E8D8C8] bg-[#F7F0E6] flex items-center justify-between">
            <span className="text-xs font-mono-code text-gray-500">
              PDF file ready for download
            </span>
            <button
              onClick={handleDownload}
              className="btn-primary px-6 py-2.5 text-xs font-mono-code flex items-center gap-2 cursor-pointer"
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
