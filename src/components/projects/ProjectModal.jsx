import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import VoltaInteractiveDemo from './VoltaInteractiveDemo';
import DrawCraftInteractiveDemo from './DrawCraftInteractiveDemo';
import { GitHubIcon } from '../ui/Icons';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'features' | 'simulator'

  useEffect(() => {
    soundFX.playChime(700, 0.25);
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
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] glass-panel-gold rounded-3xl border border-[#e6c88b]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto"
        >
          {/* Top Modal Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0d0d15]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#e6c88b]/10 border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-gray-400 hidden sm:inline">
                Case Study
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Modal Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab('overview');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#e6c88b] text-[#0a0a10] font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                    ? 'bg-[#e6c88b] text-[#0a0a10] font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                      ? 'bg-[#64dfdf] text-[#0a0a10] font-bold shadow-md'
                      : 'text-[#64dfdf] hover:bg-[#64dfdf]/10 border border-[#64dfdf]/30'
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
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h3 className="text-base font-bold font-display text-[#e6c88b] mb-2 uppercase tracking-wide text-xs">
                    Project Overview
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono-code text-[#f4a6b8] uppercase mb-2">
                      Challenge / Problem Statement
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono-code text-[#64dfdf] uppercase mb-2">
                      Engineered Solution
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Contribution */}
                <div className="p-6 rounded-2xl bg-[#e6c88b]/5 border border-[#e6c88b]/20">
                  <div className="text-xs font-mono-code text-[#e6c88b] uppercase mb-2">
                    My Role & Key Contributions
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider mb-3">
                    Technologies & Libraries Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code text-gray-200"
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
                    className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#e6c88b]/10 text-[#e6c88b] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 font-display">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
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

          {/* Footer Bar with Action Links */}
          <div className="p-6 border-t border-white/10 bg-[#0d0d15]/90 flex items-center justify-between">
            <div className="text-xs font-mono-code text-gray-400">
              Verified from real project codebase
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code transition-colors cursor-pointer"
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
