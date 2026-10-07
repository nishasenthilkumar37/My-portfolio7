import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import ResumeModal from './ResumeModal';
import {
  FileText,
  Download,
  Eye,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Code2,
  Briefcase
} from 'lucide-react';

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    soundFX.playSuccess();
    const link = document.createElement('a');
    link.href = OWNER_INFO.resumePdf;
    link.download = 'Nisha_S_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    soundFX.playClick();
    setShowModal(true);
  };

  return (
    <section id="resume" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-circle w-[550px] h-[550px] top-[20%] right-[-100px] bg-gradient-to-tl from-[#e6c88b]/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161624] border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(230,200,139,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // Official Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            Curriculum <span className="gold-gradient-text">Vitae & Summary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Review my verified academic record, programming competencies, and technical portfolio summary.
          </motion.p>
        </div>

        {/* Master Resume Presentation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#e6c88b]/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle watermark */}
          <div className="absolute top-0 right-0 p-8 text-white/[0.03] font-display font-black text-8xl pointer-events-none select-none">
            RESUME
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left 7 Cols: Quick Profile Synopsis */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e6c88b]/10 border border-[#e6c88b]/30 flex items-center justify-center text-[#e6c88b] shadow-md">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Nisha S
                  </h3>
                  <p className="text-xs font-mono-code text-[#e6c88b]">
                    Web Designer & Front-End Developer
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Graduate in <strong className="text-white">BSc Information Technology</strong> (CGPA 7.8) and currently pursuing <strong className="text-white">MBA System Management</strong>. Specialized in front-end development, responsive web design, React architectures, and database integrations.
              </p>

              {/* Quick Resume Bullet Points */}
              <div className="space-y-2.5 text-xs text-gray-300 font-mono-code">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#64dfdf] shrink-0" />
                  <span>BSc IT (Emerald Heights College, Ooty) — 7.8 CGPA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f4a6b8] shrink-0" />
                  <span>MBA System Management (The Nilgiri Institution) — Pursuing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e6c88b] shrink-0" />
                  <span>Stack: React, HTML, CSS, JavaScript, MongoDB, Python, SQL, Git</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Prominent Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4 p-6 rounded-2xl bg-black/40 border border-white/5">
              <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider mb-1">
                Resume Access Options
              </div>

              {/* View Resume Button */}
              <button
                onClick={handleView}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[#e6c88b] text-white font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#e6c88b]" />
                <span>View Resume Document</span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={handleDownload}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full py-4 px-6 rounded-xl bg-[#e6c88b] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(230,200,139,0.4)] hover:shadow-[0_0_35px_rgba(230,200,139,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <div className="text-[11px] font-mono-code text-center text-gray-400 mt-2">
                Format: Verified PDF • 211 KB
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Modal Dialog */}
      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
