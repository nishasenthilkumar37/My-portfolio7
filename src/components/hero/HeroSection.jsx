import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import TulipScene from '../3d/TulipScene';
import {
  Sparkles,
  ArrowRight,
  Send,
  GraduationCap,
  Palette,
  Code2,
  Compass,
  Laptop,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function HeroSection() {
  const [characterLoaded, setCharacterLoaded] = useState(false);

  const scrollToSection = (id) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* 3D Floating Tulip Canvas in Hero Background / Right Layer */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-70 lg:opacity-100 flex items-center justify-end overflow-hidden">
        <div className="w-full lg:w-[48%] h-[550px] sm:h-[650px] lg:h-[750px] relative pointer-events-auto">
          <TulipScene />
          {/* Subtle 3D Tulip interaction hint */}
          <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-[#12121c]/70 border border-[#e6c88b]/20 text-[10px] font-mono-code text-[#e6c88b]/80 backdrop-blur-md hidden sm:flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6c88b] animate-ping" />
            Interactive 3D Tulip (React Three Fiber)
          </div>
        </div>
      </div>

      {/* Main Hero Content Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Column: Typography, Credentials & CTAs (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Status & Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161622]/90 border border-[#e6c88b]/30 shadow-[0_0_20px_rgba(230,200,139,0.15)] backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64dfdf] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64dfdf]"></span>
            </span>
            <span className="text-xs font-mono-code text-[#f8fafc] font-medium tracking-wide">
              {OWNER_INFO.availability}
            </span>
            <span className="text-xs font-mono-code text-[#e6c88b] hidden sm:inline">• Ooty, India</span>
          </motion.div>

          {/* Main Cinematic Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl xl:text-8xl font-black font-display tracking-tight leading-[1.05] mb-4"
          >
            <span className="text-white">Hello, I'm </span>
            <br />
            <span className="gold-gradient-text drop-shadow-[0_4px_30px_rgba(230,200,139,0.35)]">
              {OWNER_INFO.name}
            </span>
          </motion.h1>

          {/* Role Subtitle with Glowing Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-light text-gray-200 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f4a6b8]/10 border border-[#f4a6b8]/30 text-[#f4a6b8] font-medium text-base sm:text-lg">
              <Palette className="w-4 h-4" /> Web Designer
            </span>
            <span className="text-[#e6c88b] font-mono-code font-bold">&</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#64dfdf]/10 border border-[#64dfdf]/30 text-[#64dfdf] font-medium text-base sm:text-lg">
              <Code2 className="w-4 h-4" /> Front-End Developer
            </span>
          </motion.div>

          {/* Education Highlights Pill Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="w-full sm:max-w-xl glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 mb-8 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#e6c88b] uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Qualifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#64dfdf] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">BSc Information Tech</div>
                  <div className="text-xs text-gray-400">Emerald Heights College, Ooty</div>
                  <div className="text-[11px] font-mono-code text-[#e6c88b] mt-0.5">CGPA: 7.8</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#f4a6b8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">MBA System Management</div>
                  <div className="text-xs text-gray-400">The Nilgiri Institution</div>
                  <div className="text-[11px] font-mono-code text-[#f4a6b8] mt-0.5">Pursuing</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prominent CTAs: Explore My Work & Let's Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* CTA 1: Explore My Work */}
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#e6c88b] via-[#f3d9a2] to-[#c89d53] text-[#0a0a10] font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(230,200,139,0.4)] hover:shadow-[0_6px_35px_rgba(230,200,139,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CTA 2: Let's Work Together */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundFX.playHover()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#161624]/90 hover:bg-[#202033] border border-[#e6c88b]/40 hover:border-[#e6c88b] text-white font-medium text-sm tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(230,200,139,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#e6c88b]" />
              <span>Let's Work Together</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Creative Illustrated Designer Character & Holographic Dock (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center"
          >
            {/* Glowing Holographic Backdrop Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#e6c88b]/20 via-[#f4a6b8]/20 to-[#64dfdf]/15 filter blur-2xl animate-pulse-glow" />
            <div className="absolute w-full h-full rounded-3xl border border-[#e6c88b]/20 rotate-3 transition-transform duration-700 hover:rotate-6" />
            <div className="absolute w-full h-full rounded-3xl border border-[#64dfdf]/20 -rotate-3 transition-transform duration-700 hover:-rotate-6" />

            {/* Main Character Showcase Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel-gold p-3 shadow-2xl flex flex-col items-center justify-end">
              
              {/* Background Geometric Grid Accent */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e6c88b_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Character Image (Stylized Anime Creative Web Designer) */}
              <img
                src={OWNER_INFO.characterImage}
                alt="Nisha S — Creative Web Designer Illustration"
                className={`relative z-10 w-full h-full object-cover object-top rounded-2xl transition-all duration-700 ${
                  characterLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-95'
                }`}
                onLoad={() => setCharacterLoaded(true)}
                onError={(e) => {
                  // Graceful fallback to SVG avatar if image has path issue
                  e.currentTarget.src = OWNER_INFO.avatarSvg;
                }}
              />

              {/* Floating Creative Designer Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-4 z-20 px-3 py-1.5 rounded-xl bg-[#0e0e18]/90 border border-[#e6c88b]/40 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono-code text-[#e6c88b]"
              >
                <Palette className="w-3.5 h-3.5 text-[#e6c88b]" />
                <span>Creative UI/UX</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 right-4 z-20 px-3 py-1.5 rounded-xl bg-[#0e0e18]/90 border border-[#64dfdf]/40 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-mono-code text-[#64dfdf]"
              >
                <Code2 className="w-3.5 h-3.5 text-[#64dfdf]" />
                <span>React & Modern CSS</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-gray-400 hover:text-[#e6c88b] transition-colors z-20"
      >
        <span className="text-[11px] font-mono-code uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
