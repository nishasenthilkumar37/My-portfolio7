import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import VoltaInteractiveDemo from './VoltaInteractiveDemo';
import DrawCraftInteractiveDemo from './DrawCraftInteractiveDemo';
import {
  X,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'features' | 'simulator'

  useEffect(() => {
    soundFX.playChime(600, 0.25);
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

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop Overlay */}
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
          className="relative z-10 w-full max-w-5xl max-h-[90vh] rounded-3xl border border-[#B9828F]/40 bg-[#FFF9F2] shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Top Modal Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8D8C8] bg-[#F7F0E6]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FFF9F2] border border-[#B9828F]/40 text-[#6B1F32] text-xs font-mono-code uppercase tracking-wider font-bold">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-gray-500 hidden sm:inline">
                Case Study
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-[#FFF9F2] border border-[#E8D8C8] hover:bg-[#E8D8C8] text-[#6B1F32] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#FFF9F2]">
            
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#3B2929] mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#3B2929]/80 font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Modal Tabs */}
            <div className="flex gap-2 border-b border-[#E8D8C8] pb-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab('overview');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold shadow-sm'
                    : 'text-[#3B2929]/70 hover:text-[#6B1F32] hover:bg-[#F7F0E6]'
                }`}
              >
                Project Overview & Architecture
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab('features');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                  activeTab === 'features'
                    ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold shadow-sm'
                    : 'text-[#3B2929]/70 hover:text-[#6B1F32] hover:bg-[#F7F0E6]'
                }`}
              >
                Key Features ({project.keyFeatures?.length || 0})
              </button>

              {project.hasInteractiveSimulator && (
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab('simulator');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-code flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'simulator'
                      ? 'bg-[#B9828F] text-[#FFF9F2] font-bold shadow-sm'
                      : 'text-[#6B1F32] hover:bg-[#B9828F]/15 border border-[#B9828F]/40'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Live Simulator</span>
                </button>
              )}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl border border-[#E8D8C8] bg-[#F7F0E6]/50">
                  <h3 className="text-base font-bold font-display text-[#6B1F32] mb-2 uppercase tracking-wide text-xs">
                    Project Overview
                  </h3>
                  <p className="text-sm text-[#3B2929]/80 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                    <div className="text-xs font-mono-code text-[#6B1F32] uppercase mb-2 font-bold">
                      Challenge / Problem Statement
                    </div>
                    <p className="text-sm text-[#3B2929]/80 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F7F0E6]/40 border border-[#E8D8C8]">
                    <div className="text-xs font-mono-code text-[#B9828F] uppercase mb-2 font-bold">
                      Engineered Solution
                    </div>
                    <p className="text-sm text-[#3B2929]/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Contribution */}
                <div className="p-6 rounded-2xl bg-[#6B1F32]/5 border border-[#6B1F32]/20">
                  <div className="text-xs font-mono-code text-[#6B1F32] uppercase mb-2 font-bold">
                    My Role & Key Contributions
                  </div>
                  <p className="text-sm text-[#3B2929]/90 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <div className="text-xs font-mono-code text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                    Technologies & Libraries Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-[#F7F0E6] border border-[#E8D8C8] text-xs font-mono-code text-[#6B1F32] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: KEY FEATURES */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-2xl glass-panel border border-[#E8D8C8] bg-[#F7F0E6]/40 hover:border-[#B9828F] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#6B1F32]/10 text-[#6B1F32] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#3B2929] mb-1 font-display">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: LIVE SIMULATOR */}
            {activeTab === 'simulator' && project.hasInteractiveSimulator && (
              <div>
                {project.simulatorType === 'bulb-studio' ? (
                  <VoltaInteractiveDemo />
                ) : (
                  <DrawCraftInteractiveDemo />
                )}
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-[#E8D8C8] bg-[#F7F0E6] flex items-center justify-between">
            <div className="text-xs font-mono-code text-gray-500">
              Verified from real project codebase
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                }}
                className="btn-primary px-5 py-2.5 text-xs font-mono-code transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
