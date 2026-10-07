import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { EDUCATION_DATA } from '../../data/portfolioData';
import {
  Sparkles,
  GraduationCap,
  Calendar,
  MapPin
} from 'lucide-react';

export default function EducationSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden bg-[#F7F0E6]">
      {/* Background ambient accents */}
      <div className="ambient-glow-circle w-[500px] h-[500px] top-[20%] left-[-100px] bg-gradient-to-tr from-[#E8D8C8]/60 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F2] border border-[#B9828F]/30 text-[#6B1F32] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>05 // Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#3B2929] mb-6 max-w-3xl"
          >
            Educational <span className="burgundy-gradient-text">Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            An authentic timeline representing my academic journey from foundational science to Information Technology and Systems Management.
          </motion.p>
        </div>

        {/* Timeline Journey */}
        <div className="relative border-l-2 border-[#E8D8C8] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EDUCATION_DATA.map((edu, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    idx === 0
                      ? 'bg-[#6B1F32] border-[#6B1F32] text-[#FFF9F2] shadow-sm'
                      : idx === 1
                      ? 'bg-[#B9828F] border-[#B9828F] text-[#FFF9F2] shadow-sm'
                      : 'bg-[#FFF9F2] border-[#E8D8C8] text-[#6B1F32] group-hover:border-[#6B1F32]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Education Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#E8D8C8] bg-[#FFF9F2] group-hover:border-[#B9828F] transition-all duration-300 shadow-sm">
                  
                  {/* Top Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#F7F0E6] border border-[#E8D8C8] text-xs font-mono-code text-[#6B1F32] flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#B9828F]" />
                      {edu.period}
                    </span>

                    <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-[#F7F0E6] text-[#3B2929] font-medium border border-[#E8D8C8]">
                      {edu.badge}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-2xl font-bold font-display text-[#3B2929] group-hover:text-[#6B1F32] transition-colors mb-1">
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-gray-500 mb-4">
                    <span className="text-[#3B2929] font-semibold">{edu.institution}</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B9828F]" />
                      {edu.location}
                    </span>
                    {edu.score && (
                      <span className="text-[#6B1F32] font-bold">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-[#3B2929]/80 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Skills Gained Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E8D8C8]">
                    <span className="text-[11px] font-mono-code text-[#6B1F32] uppercase mr-1 font-semibold">
                      Competencies:
                    </span>
                    {edu.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#F7F0E6] border border-[#E8D8C8] text-[11px] font-mono-code text-[#3B2929]"
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
