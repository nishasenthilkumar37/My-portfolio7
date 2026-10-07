import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO, DESIGN_PHILOSOPHY } from '../../data/portfolioData';
import {
  Sparkles,
  MapPin,
  GraduationCap,
  HeartHandshake,
  Layers,
  Code2,
  Palette,
  Terminal,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="ambient-glow-circle w-[500px] h-[500px] top-[10%] left-[-100px] bg-gradient-to-br from-[#e6c88b]/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161624] border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(230,200,139,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            Crafting Digital Realities with <span className="gold-gradient-text">Code & Aesthetic</span> Precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            A personal blend of visual creativity, structural front-end engineering, and analytical systems management.
          </motion.p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Grounded Story (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e6c88b]/10 to-transparent rounded-bl-full pointer-events-none" />

              <h3 className="text-2xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Palette className="w-6 h-6 text-[#e6c88b]" />
                <span>Designer Mindset, Developer Execution</span>
              </h3>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-white font-medium">Nisha S</strong>, a passionate web designer and front-end developer based in the scenic heights of <span className="text-[#e6c88b]">Ooty, Tamil Nadu</span>. My mission is to build web experiences that captivate users visually while remaining exceptionally performant, accessible, and responsive.
                </p>
                <p>
                  Having graduated with a <strong className="text-white">BSc in Information Technology</strong> (CGPA 7.8) from Emerald Heights College for Women, and currently pursuing an <strong className="text-white">MBA in System Management</strong>, I unite hands-on programming logic with broader systems thinking and user empathy.
                </p>
                <p>
                  Whether designing bespoke landing pages, building interactive React applications like <strong className="text-[#f4a6b8]">VOLTA & CO.</strong> and <strong className="text-[#64dfdf]">DrawCraft</strong>, or modernizing existing websites, I focus on clean component architectures, silky 60fps micro-interactions, and thoughtful typography.
                </p>
              </div>

              {/* Location & Contact Meta Pill Box */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-9 h-9 rounded-xl bg-[#e6c88b]/10 border border-[#e6c88b]/30 flex items-center justify-center text-[#e6c88b]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono-code uppercase">Location</div>
                    <div className="font-medium text-white">{OWNER_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-9 h-9 rounded-xl bg-[#64dfdf]/10 border border-[#64dfdf]/30 flex items-center justify-center text-[#64dfdf]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono-code uppercase">Academic Focus</div>
                    <div className="font-medium text-white">IT & System Management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Design Philosophy Tabs */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10">
              <div className="text-xs font-mono-code text-[#e6c88b] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>My Core Principles</span>
              </div>

              <div className="flex gap-2 p-1.5 bg-[#0e0e16] rounded-2xl border border-white/5 mb-6 overflow-x-auto">
                {DESIGN_PHILOSOPHY.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundFX.playClick();
                      setActiveTab(idx);
                    }}
                    className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono-code uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-[#e6c88b] text-[#0a0a10] font-bold shadow-[0_0_20px_rgba(230,200,139,0.4)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="text-sm font-semibold text-[#e6c88b] mb-1 font-display">
                  {DESIGN_PHILOSOPHY[activeTab].subtitle}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {DESIGN_PHILOSOPHY[activeTab].desc}
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Character Visual Showcase & Key Highlights (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Character Spotlight Card */}
            <div className="glass-panel-gold rounded-3xl p-6 border border-[#e6c88b]/30 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#e6c88b]/40 shadow-lg shrink-0">
                  <img
                    src={OWNER_INFO.characterImage}
                    alt="Nisha S"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = OWNER_INFO.avatarSvg;
                    }}
                  />
                </div>
                <div>
                  <div className="text-lg font-bold font-display text-white">Nisha S</div>
                  <div className="text-xs text-[#e6c88b] font-mono-code">Front-End Developer & Designer</div>
                  <div className="inline-flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    BSc IT • MBA (Pursuing)
                  </div>
                </div>
              </div>

              <blockquote className="text-xs italic text-gray-300 border-l-2 border-[#e6c88b]/50 pl-3 py-1 my-3">
                "A digital product is complete not when there is nothing left to add, but when every interaction feels natural and delightful."
              </blockquote>
            </div>

            {/* Value Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-[#64dfdf]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#64dfdf]/10 flex items-center justify-center text-[#64dfdf] mb-2">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="font-semibold text-white text-sm">Clean React Code</div>
                <div className="text-xs text-gray-400 mt-1">Reusable components, structured hooks & clean state flows.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-[#f4a6b8]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#f4a6b8]/10 flex items-center justify-center text-[#f4a6b8] mb-2">
                  <Palette className="w-4 h-4" />
                </div>
                <div className="font-semibold text-white text-sm">Modern Visual UI</div>
                <div className="text-xs text-gray-400 mt-1">Refined palettes, dark aesthetics & intuitive typography.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-[#e6c88b]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#e6c88b]/10 flex items-center justify-center text-[#e6c88b] mb-2">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="font-semibold text-white text-sm">Full Responsiveness</div>
                <div className="text-xs text-gray-400 mt-1">Fluid scaling from compact mobile screens to 4K displays.</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="font-semibold text-white text-sm">Systems Thinking</div>
                <div className="text-xs text-gray-400 mt-1">MBA-backed perspective on user journeys and business value.</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
