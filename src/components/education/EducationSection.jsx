import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { EDUCATION_DATA } from '../../data/portfolioData';
import {
  Sparkles,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export default function EducationSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-circle w-[500px] h-[500px] top-[20%] left-[-100px] bg-gradient-to-tr from-[#f4a6b8]/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161624] border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(230,200,139,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            Educational <span className="gold-gradient-text">Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            An authentic timeline representing my academic journey from foundational science to Information Technology and Systems Management.
          </motion.p>
        </div>

        {/* Timeline Journey */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EDUCATION_DATA.map((edu, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group"
              >
                {/* Timeline node icon on the vertical line */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    idx === 0
                      ? 'bg-[#e6c88b] border-[#e6c88b] text-[#0a0a10] shadow-[0_0_15px_rgba(230,200,139,0.5)]'
                      : idx === 1
                      ? 'bg-[#64dfdf] border-[#64dfdf] text-[#0a0a10] shadow-[0_0_15px_rgba(100,223,223,0.5)]'
                      : 'bg-[#161622] border-white/20 text-gray-400 group-hover:border-[#e6c88b]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Education Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 group-hover:border-[#e6c88b]/40 transition-all duration-300">
                  
                  {/* Top Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#e6c88b] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>

                    <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-white/[0.04] text-gray-300">
                      {edu.badge}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#e6c88b] transition-colors mb-1">
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-gray-400 mb-4">
                    <span className="text-gray-300 font-medium">{edu.institution}</span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#f4a6b8]" />
                      {edu.location}
                    </span>
                    {edu.score && (
                      <span className="text-[#e6c88b] font-bold">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Skills Gained Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono-code text-gray-400 uppercase mr-1">
                      Competencies:
                    </span>
                    {edu.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono-code text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
