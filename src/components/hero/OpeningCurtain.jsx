import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';

export default function OpeningCurtain({ onComplete }) {
  // states: 'entering' -> 'ready' (tulip settled, showing 'Click here') -> 'transitioning' -> 'finished'
  const [stage, setStage] = useState('entering');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
    }

    // Step 1: Tulip enters diagonally from top-left and settles
    const enterTimer = setTimeout(() => {
      setStage('ready');
      soundFX.playHover();
    }, 1200);

    return () => clearTimeout(enterTimer);
  }, []);

  const handleTulipClick = () => {
    if (stage === 'transitioning' || stage === 'finished') return;

    soundFX.playClick();
    setStage('transitioning');

    // Wait for the graceful glide transition before revealing portfolio
    setTimeout(() => {
      soundFX.playChime(520, 0.4);
      setStage('finished');
      if (onComplete) onComplete();
    }, 1500);
  };

  if (stage === 'finished') return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F0E6] overflow-hidden select-none cursor-pointer"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
        onClick={handleTulipClick}
      >
        {/* Soft floral atmospheric ambient tints */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8D8C8]/50 filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#B9828F]/15 filter blur-3xl pointer-events-none" />

        {/* Minimalist Watermark / Monogram */}
        <div className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono-code text-[#6B1F32]/60 uppercase tracking-widest pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B1F32]" />
          <span>Nisha S • Portfolio</span>
        </div>

        {/* ========================================================
            Realistic Tulip with Corner Entry & Graceful Glide
        ======================================================== */}
        <div className="relative flex flex-col items-center justify-center z-10 px-4">
          
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : { x: '-60vw', y: '-50vh', rotate: -25, scale: 0.75, opacity: 0 }
            }
            animate={
              stage === 'transitioning'
                ? prefersReducedMotion
                  ? { opacity: 0, scale: 1.05 }
                  : {
                      x: ['0vw', '45vw', '90vw'],
                      y: ['0vh', '-15vh', '30vh'],
                      scale: [1, 1.25, 0.8],
                      rotate: [0, 18, 45],
                      opacity: [1, 0.9, 0],
                      transition: {
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                : {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
            }
            className="relative flex flex-col items-center"
          >
            {/* Soft shadow under flower */}
            <div className="absolute bottom-2 w-32 h-6 rounded-full bg-[#3B2929]/10 filter blur-md pointer-events-none" />

            {/* Realistic Photographic Tulip Image */}
            <div className="relative w-48 sm:w-56 md:w-64 aspect-square rounded-3xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(107,31,50,0.15)] border border-[#E8D8C8]/60 bg-[#FFF9F2] group hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/realistic-tulip.jpg"
                alt="Realistic Burgundy Tulip"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* "Click here" Interactive Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={
                stage === 'ready'
                  ? { opacity: [0.65, 1, 0.65], y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{
                duration: 2.5,
                repeat: stage === 'ready' ? Infinity : 0,
                ease: 'easeInOut'
              }}
              className="mt-6 flex flex-col items-center gap-1.5"
            >
              <button
                type="button"
                className="text-lg sm:text-xl font-display font-semibold text-[#6B1F32] hover:text-[#4A1220] tracking-wide flex items-center gap-2 cursor-pointer transition-colors"
                aria-label="Click here to enter portfolio"
              >
                <span>Click here</span>
              </button>
              
              <span className="text-[11px] font-mono-code text-[#B9828F] uppercase tracking-widest">
                to enter experience
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Minimal Skip Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            soundFX.playClick();
            setStage('finished');
            if (onComplete) onComplete();
          }}
          className="absolute bottom-6 right-6 z-40 px-3.5 py-1.5 rounded-lg bg-[#E8D8C8]/60 hover:bg-[#E8D8C8] text-xs font-mono-code text-[#6B1F32] transition-colors cursor-pointer"
        >
          Skip ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
