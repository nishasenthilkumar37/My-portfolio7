import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { Sparkles, Code2, Palette } from 'lucide-react';

export default function OpeningCurtain({ onComplete }) {
  const [phase, setPhase] = useState('sealed'); // sealed -> splitting -> popout -> finished

  useEffect(() => {
    // Play initial subtle entrance chime
    const timer0 = setTimeout(() => {
      soundFX.playChime(440, 0.3);
    }, 400);

    // Trigger split
    const timer1 = setTimeout(() => {
      setPhase('splitting');
      soundFX.playWhoosh();
    }, 1200);

    // Trigger dramatic popout of Nisha S
    const timer2 = setTimeout(() => {
      setPhase('popout');
      soundFX.playChime(880, 0.4);
    }, 1800);

    // Finish curtain overlay
    const timer3 = setTimeout(() => {
      setPhase('finished');
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundFX.playClick();
    setPhase('finished');
    if (onComplete) onComplete();
  };

  if (phase === 'finished') return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center overflow-hidden bg-[#050508]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      >
        {/* Left Monolithic Split Panel */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#09090f] border-r border-[#e6c88b]/20 z-20 flex flex-col justify-between p-8"
          initial={{ x: 0 }}
          animate={phase === 'splitting' || phase === 'popout' ? { x: '-105%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#e6c88b] uppercase font-mono-code">
            <span className="w-2 h-2 rounded-full bg-[#e6c88b] animate-ping"></span>
            PORTFOLIO 2026
          </div>
          <div className="text-right text-gray-700 font-mono-code text-xs">
            CREATIVE WEB DESIGN & ARCHITECTURE
          </div>
        </motion.div>

        {/* Right Monolithic Split Panel */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#09090f] border-l border-[#e6c88b]/20 z-20 flex flex-col justify-between p-8 text-right"
          initial={{ x: 0 }}
          animate={phase === 'splitting' || phase === 'popout' ? { x: '105%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-xs tracking-widest text-gray-400 font-mono-code uppercase">
            FRONT-END ENGINEERING
          </div>
          <div className="text-left text-gray-700 font-mono-code text-xs">
            OOTY, TAMIL NADU
          </div>
        </motion.div>

        {/* Center Golden Laser Seam Line (active before and during split) */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#e6c88b] to-transparent z-30 pointer-events-none"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={
            phase === 'sealed'
              ? { opacity: [0, 1, 0.8], scaleY: 1 }
              : { opacity: 0, scaleY: 1.4 }
          }
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{
            boxShadow: '0 0 25px 4px rgba(230, 200, 139, 0.8), 0 0 50px 8px rgba(244, 166, 184, 0.4)'
          }}
        />

        {/* Sealed Center Emblem (Before Split) */}
        {phase === 'sealed' && (
          <motion.div
            className="z-30 flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e6c88b]/20 to-[#f4a6b8]/10 border border-[#e6c88b]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(230,200,139,0.3)]">
              <span className="font-display text-2xl font-bold text-[#e6c88b]">NS</span>
            </div>
            <p className="text-xs font-mono-code text-[#e6c88b] tracking-[0.3em] uppercase">
              Initializing Experience
            </p>
          </motion.div>
        )}

        {/* DRAMATIC POP-OUT: Name "Nisha S" explodes outward from the split seam */}
        {(phase === 'splitting' || phase === 'popout') && (
          <motion.div
            className="z-10 flex flex-col items-center justify-center text-center px-4 select-none"
            initial={{ scale: 0.3, opacity: 0, filter: 'blur(12px)' }}
            animate={{
              scale: [0.3, 1.25, 1],
              opacity: [0, 1, 1],
              filter: ['blur(12px)', 'blur(0px)', 'blur(0px)']
            }}
            transition={{ duration: 1.3, times: [0, 0.65, 1], ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top decorative pill */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12121c]/80 border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(230,200,139,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Portfolio</span>
            </motion.div>

            {/* The Dramatic Name POP */}
            <motion.h1
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight font-display mb-3"
              style={{
                textShadow: '0 0 60px rgba(230, 200, 139, 0.5), 0 0 100px rgba(244, 166, 184, 0.3)'
              }}
            >
              <span className="gold-gradient-text">Nisha S</span>
            </motion.h1>

            {/* Role Subtitle */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 text-lg sm:text-2xl text-gray-300 font-light tracking-wide"
            >
              <span className="flex items-center gap-1.5 text-[#f4a6b8]">
                <Palette className="w-5 h-5" /> Web Designer
              </span>
              <span className="text-[#e6c88b] font-mono-code font-bold">&</span>
              <span className="flex items-center gap-1.5 text-[#64dfdf]">
                <Code2 className="w-5 h-5" /> Front-End Developer
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-6 right-6 z-40 px-4 py-2 rounded-lg bg-[#151522]/80 hover:bg-[#1f1f33] border border-white/10 text-xs font-mono-code text-gray-400 hover:text-[#e6c88b] transition-colors cursor-pointer"
          aria-label="Skip Opening Intro"
        >
          Skip Intro ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
