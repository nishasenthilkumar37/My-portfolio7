import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO, DESIGN_PHILOSOPHY } from '../../data/portfolioData';
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Layers,
  Code2,
  Palette,
  Terminal,
  Compass,
  Flower2,
  CheckCircle2
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden bg-[#F7F0E6]">
      {/* Background soft ambient accents */}
      <div className="ambient-glow-circle w-[500px] h-[500px] top-[10%] left-[-100px] bg-gradient-to-br from-[#E8D8C8]/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F2] border border-[#B9828F]/30 text-[#6B1F32] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>01 // About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#3B2929] mb-6 max-w-3xl"
          >
            Crafting Digital Realities with <span className="burgundy-gradient-text">Code & Aesthetic</span> Precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            A personal blend of visual creativity, structural front-end engineering, and analytical systems management.
          </motion.p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="glass-panel rounded-3xl p-8 border border-[#E8D8C8] relative overflow-hidden bg-[#FFF9F2]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B9828F]/15 to-transparent rounded-bl-full pointer-events-none" />

              <h3 className="text-2xl font-bold font-display text-[#3B2929] mb-4 flex items-center gap-3">
                <Palette className="w-6 h-6 text-[#6B1F32]" />
                <span>Designer Mindset, Developer Execution</span>
              </h3>

              <div className="space-y-4 text-[#3B2929]/80 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-[#6B1F32] font-semibold">Nisha S</strong>, a passionate web designer and front-end developer based in the scenic heights of <span className="text-[#6B1F32] font-medium">Ooty, Tamil Nadu</span>. My focus is building web experiences that captivate users visually while remaining exceptionally performant, accessible, and responsive.
                </p>
                <p>
                  Having graduated with a <strong className="text-[#3B2929] font-semibold">BSc in Information Technology</strong> (CGPA 7.8) from Emerald Heights College for Women, and currently pursuing an <strong className="text-[#3B2929] font-semibold">MBA in System Management</strong>, I unite hands-on programming logic with broader systems thinking and user empathy.
                </p>
                <p>
                  Whether designing bespoke landing pages, building interactive React applications like <strong className="text-[#6B1F32]">VOLTA & CO.</strong> and <strong className="text-[#B9828F]">DrawCraft</strong>, or modernizing existing websites, I focus on clean component architectures, silky 60fps micro-interactions, and thoughtful typography.
                </p>
              </div>

              {/* Location & Contact Meta Pill Box */}
              <div className="mt-6 pt-6 border-t border-[#E8D8C8] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-[#3B2929]">
                  <div className="w-9 h-9 rounded-xl bg-[#6B1F32]/10 border border-[#B9828F]/30 flex items-center justify-center text-[#6B1F32]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono-code uppercase">Location</div>
                    <div className="font-semibold text-[#3B2929]">{OWNER_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#3B2929]">
                  <div className="w-9 h-9 rounded-xl bg-[#B9828F]/15 border border-[#B9828F]/30 flex items-center justify-center text-[#6B1F32]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono-code uppercase">Academic Focus</div>
                    <div className="font-semibold text-[#3B2929]">IT & System Management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Philosophy Tabs */}
            <div className="glass-panel rounded-3xl p-6 border border-[#E8D8C8] bg-[#FFF9F2]">
              <div className="text-xs font-mono-code text-[#6B1F32] uppercase tracking-wider mb-4 flex items-center gap-2 font-semibold">
                <Terminal className="w-4 h-4 text-[#B9828F]" />
                <span>My Core Principles</span>
              </div>

              <div className="flex gap-2 p-1.5 bg-[#F7F0E6] rounded-2xl border border-[#E8D8C8] mb-6 overflow-x-auto">
                {DESIGN_PHILOSOPHY.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundFX.playClick();
                      setActiveTab(idx);
                    }}
                    className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono-code uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold shadow-sm'
                        : 'text-[#3B2929]/70 hover:text-[#6B1F32] hover:bg-white/60'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-2xl bg-[#F7F0E6]/60 border border-[#E8D8C8]"
              >
                <div className="text-sm font-semibold text-[#6B1F32] mb-1 font-display">
                  {DESIGN_PHILOSOPHY[activeTab].subtitle}
                </div>
                <p className="text-sm text-[#3B2929]/80 leading-relaxed">
                  {DESIGN_PHILOSOPHY[activeTab].desc}
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Botanical Floral Quote & Key Value Pillars (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Botanical Spotlight & Quote Card */}
            <div className="glass-panel-burgundy rounded-3xl p-6 border border-[#B9828F]/30 bg-[#FFF9F2] relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#B9828F]/40 shadow-sm shrink-0 bg-[#F7F0E6] flex items-center justify-center">
                  <img
                    src="/assets/realistic-tulip.jpg"
                    alt="Realistic Burgundy Tulip"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold font-display text-[#3B2929]">Nisha S</div>
                  <div className="text-xs text-[#6B1F32] font-mono-code font-medium">Front-End Developer & Designer</div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B1F32] inline-block" />
                    BSc IT • MBA (Pursuing)
                  </div>
                </div>
              </div>

              <blockquote className="text-xs italic text-[#3B2929]/80 font-serif-sub text-sm border-l-2 border-[#6B1F32] pl-3 py-1 my-3">
                "A digital product is complete not when there is nothing left to add, but when every interaction feels natural, elegant, and delightful."
              </blockquote>
            </div>

            {/* Value Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel rounded-2xl p-4 border border-[#E8D8C8] bg-[#FFF9F2] hover:border-[#6B1F32]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#6B1F32]/10 flex items-center justify-center text-[#6B1F32] mb-2">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="font-semibold text-[#3B2929] text-sm">Clean React Code</div>
                <div className="text-xs text-gray-500 mt-1">Reusable components, structured hooks & clean state flows.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-[#E8D8C8] bg-[#FFF9F2] hover:border-[#B9828F]/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#B9828F]/15 flex items-center justify-center text-[#6B1F32] mb-2">
                  <Palette className="w-4 h-4" />
                </div>
                <div className="font-semibold text-[#3B2929] text-sm">Warm Visual Identity</div>
                <div className="text-xs text-gray-500 mt-1">Refined cream, burgundy & dusky pink aesthetic balance.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-[#E8D8C8] bg-[#FFF9F2] hover:border-[#6B1F32]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#6B1F32]/10 flex items-center justify-center text-[#6B1F32] mb-2">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="font-semibold text-[#3B2929] text-sm">Full Responsiveness</div>
                <div className="text-xs text-gray-500 mt-1">Fluid scaling from compact mobile screens to 4K displays.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-[#E8D8C8] bg-[#FFF9F2] hover:border-[#B9828F]/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#B9828F]/15 flex items-center justify-center text-[#6B1F32] mb-2">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="font-semibold text-[#3B2929] text-sm">Systems Thinking</div>
                <div className="text-xs text-gray-500 mt-1">MBA-backed perspective on user journeys and business value.</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
