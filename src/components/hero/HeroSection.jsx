import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import {
  Sparkles,
  ArrowRight,
  Send,
  GraduationCap,
  Palette,
  Code2,
  CheckCircle2,
  ChevronDown,
  Flower2,
  Layers
} from 'lucide-react';

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for 3D parallax
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations & translations for realistic tulip background
  const bgRotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const bgRotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-45, 45]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);
  const bgScale = useTransform(smoothY, [-0.5, 0.5], [1.08, 1.04]);

  // Foreground card 3D offset (opposite direction for multi-layer depth)
  const fgRotateX = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const fgRotateY = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const fgTranslateX = useTransform(smoothX, [-0.5, 0.5], [25, -25]);
  const fgTranslateY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#F7F0E6]"
      style={{ perspective: 1200 }}
    >
      {/* ========================================================
          1. 3D MOVING TULIP BACKGROUND (PROMINENT, VIVID & CLEAR)
      ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Interactive 3D Tulip Canvas Plane */}
        <motion.div
          className="absolute inset-[-6%] w-[112%] h-[112%] z-0 flex items-center justify-center"
          style={{
            x: bgTranslateX,
            y: bgTranslateY,
            rotateX: bgRotateX,
            rotateY: bgRotateY,
            scale: bgScale,
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center'
          }}
        >
          {/* Tulip Photographic Background Layer - HIGH VISIBILITY & VIBRANT */}
          <motion.div
            animate={{
              y: [0, -16, 0],
              rotate: [0, 1.2, 0],
              scale: [1.02, 1.06, 1.02]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-full h-full relative"
          >
            <img
              src="/assets/realistic-tulip.jpg"
              alt="Realistic 3D Burgundy Tulip Background"
              className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center] opacity-100 filter saturate-[1.28] contrast-[1.14] brightness-[1.03]"
            />
          </motion.div>
        </motion.div>

        {/* Directional Soft Scrim: Preserves text readability on left, leaves tulips clearly noticeable on right and center */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(247, 240, 230, 0.88) 0%, rgba(247, 240, 230, 0.72) 35%, rgba(247, 240, 230, 0.3) 65%, rgba(247, 240, 230, 0.05) 90%, transparent 100%)'
          }}
        />

        {/* Soft Radial Backlight to give tulips depth */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 80% 50%, transparent 30%, rgba(247, 240, 230, 0.4) 85%)'
          }}
        />

        {/* Top & Bottom seamless blend */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F0E6] via-[#F7F0E6]/70 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F7F0E6] via-[#F7F0E6]/75 to-transparent z-10" />
      </div>

      {/* ========================================================
          2. HERO FOREGROUND CONTENT (CRYSTAL-CLEAR & POLISHED)
      ======================================================== */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left Column: Typography, Credentials & CTAs (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Status & Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFF9F2]/95 border border-[#B9828F]/40 shadow-sm mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9828F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B1F32]"></span>
            </span>
            <span className="text-xs font-mono-code text-[#6B1F32] font-semibold tracking-wide">
              {OWNER_INFO.availability}
            </span>
            <span className="text-xs font-mono-code text-[#B9828F] hidden sm:inline">• Ooty, India</span>
          </motion.div>

          {/* Main Name Heading with Burgundy Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl xl:text-8xl font-black font-display tracking-tight leading-[1.05] mb-4 text-[#3B2929] drop-shadow-sm"
          >
            <span>Hello, I'm </span>
            <br />
            <span className="burgundy-gradient-text">
              {OWNER_INFO.name}
            </span>
          </motion.h1>

          {/* Role Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-serif-sub text-[#6B1F32] mb-6 italic"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#FFF9F2]/95 border border-[#B9828F]/30 text-[#6B1F32] font-medium text-base sm:text-lg not-italic font-sans backdrop-blur-md shadow-xs">
              <Palette className="w-4 h-4 text-[#B9828F]" /> Web Designer
            </span>
            <span className="text-[#B9828F] font-mono-code font-bold not-italic">&</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#FFF9F2]/95 border border-[#B9828F]/30 text-[#6B1F32] font-medium text-base sm:text-lg not-italic font-sans backdrop-blur-md shadow-xs">
              <Code2 className="w-4 h-4 text-[#6B1F32]" /> Front-End Developer
            </span>
          </motion.div>

          {/* Academic Qualifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="w-full sm:max-w-xl glass-panel rounded-2xl p-4 sm:p-5 border border-[#E8D8C8] mb-8 shadow-sm backdrop-blur-md bg-[#FFF9F2]/95"
          >
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#6B1F32] uppercase tracking-wider mb-3 font-semibold">
              <GraduationCap className="w-4 h-4 text-[#B9828F]" />
              <span>Academic Background</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F0E6]/90 border border-[#E8D8C8]">
                <CheckCircle2 className="w-4 h-4 text-[#6B1F32] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#3B2929]">BSc Information Tech</div>
                  <div className="text-xs text-gray-600">Emerald Heights College, Ooty</div>
                  <div className="text-[11px] font-mono-code text-[#6B1F32] font-bold mt-0.5">CGPA: 7.8</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F0E6]/90 border border-[#E8D8C8]">
                <CheckCircle2 className="w-4 h-4 text-[#B9828F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#3B2929]">MBA System Management</div>
                  <div className="text-xs text-gray-600">The Nilgiri Institution</div>
                  <div className="text-[11px] font-mono-code text-[#B9828F] font-bold mt-0.5">Pursuing</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Buttons (Burgundy & Dusky Pink Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Button: Burgundy bg, cream text */}
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => soundFX.playHover()}
              className="btn-primary group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm tracking-wide cursor-pointer shadow-md"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button: Cream bg, burgundy border, dusky-pink hover */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundFX.playHover()}
              className="btn-secondary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm tracking-wide cursor-pointer bg-[#FFF9F2]/90 backdrop-blur-md"
            >
              <Send className="w-4 h-4 text-[#6B1F32]" />
              <span>Let's Work Together</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: 3D Floating Glassmorphic Botanical Station (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <motion.div
            style={{
              x: fgTranslateX,
              y: fgTranslateY,
              rotateX: fgRotateX,
              rotateY: fgRotateY,
              transformStyle: 'preserve-3d'
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[390px] flex flex-col items-center"
          >
            {/* Ambient Backdrop Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#E8D8C8]/60 via-[#B9828F]/25 to-[#FFF9F2] filter blur-xl pointer-events-none" />
            
            {/* Glassmorphic Botanical Card */}
            <div className="relative w-full rounded-3xl overflow-hidden glass-panel-burgundy p-6 shadow-xl border border-[#B9828F]/40 bg-[#FFF9F2]/85 backdrop-blur-xl flex flex-col space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E8D8C8]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#6B1F32]/10 text-[#6B1F32] flex items-center justify-center">
                    <Flower2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-display text-[#3B2929]">Botanical Visual Identity</h3>
                    <p className="text-[10px] font-mono-code text-[#B9828F]">Tulipa • Velvet Burgundy</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#6B1F32] animate-pulse" />
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F0E6]/85 border border-[#E8D8C8] space-y-2">
                <div className="text-xs font-mono-code text-[#6B1F32] uppercase font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#B9828F]" />
                  <span>3D Motion & Parallax</span>
                </div>
                <p className="text-xs text-[#3B2929]/80 leading-relaxed font-serif-sub text-sm italic">
                  Move your cursor across the screen to experience real-time 3D depth and subtle floral perspective movement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                <div className="p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8D8C8] text-[#6B1F32] font-semibold">
                  ✓ Organic Parallax
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8D8C8] text-[#6B1F32] font-semibold">
                  ✓ 60fps Physics
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-gray-500">
                <span>Interactive Hero Background</span>
                <span className="text-[#6B1F32] font-semibold">● 3D Dynamic</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-[#6B1F32]/70 hover:text-[#6B1F32] transition-colors z-20"
      >
        <span className="text-[11px] font-mono-code uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
