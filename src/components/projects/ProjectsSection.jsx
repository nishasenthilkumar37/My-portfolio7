import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { PROJECTS } from '../../data/portfolioData';
import ProjectModal from './ProjectModal';
import VoltaInteractiveDemo from './VoltaInteractiveDemo';
import DrawCraftInteractiveDemo from './DrawCraftInteractiveDemo';
import { GitHubIcon } from '../ui/Icons';
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  Sliders,
  Paintbrush,
  CheckCircle2,
  ExternalLink,
  Layers,
  Zap
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (proj) => {
    soundFX.playClick();
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-circle w-[700px] h-[700px] top-[30%] right-[-200px] bg-gradient-to-bl from-[#e6c88b]/10 to-transparent" />
      <div className="ambient-glow-circle w-[600px] h-[600px] bottom-[10%] left-[-150px] bg-gradient-to-tr from-[#64dfdf]/10 to-transparent" />

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
            <span>04 // Featured Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            Cinematic Creations & <span className="gold-gradient-text">Interactive Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Deep dive into my flagship full-stack web applications, featuring real-time physics engines, interactive canvases, and modular React architectures.
          </motion.p>
        </div>

        {/* ========================================================
            PROJECT 1: VOLTA & CO. — VINTAGE BULBS (Cinematic Card)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#e6c88b]/30 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-6 right-8 text-[11px] font-mono-code text-[#e6c88b] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e6c88b]/10 border border-[#e6c88b]/20">
            ★ Featured Masterwork
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 Cols: Project Narrative & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono-code text-[#64dfdf] uppercase tracking-wider block mb-2">
                  Full-Stack Immersive E-Commerce & Physics
                </span>
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
                  VOLTA & CO. <span className="gold-gradient-text">— Vintage Bulbs</span>
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A visually captivating digital atelier for bespoke vintage lighting. Features real-time filament physics, customizable bulb silhouettes, room ambiance simulator, full e-commerce shopping cart, coupon system, and Web Audio soundscapes.
                </p>
              </div>

              {/* Key Highlights Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Zap className="w-4 h-4 text-[#e6c88b]" />
                  <span>Real-Time Glow Physics</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Sliders className="w-4 h-4 text-[#f4a6b8]" />
                  <span>Bulb Studio Customizer</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Layers className="w-4 h-4 text-[#64dfdf]" />
                  <span>Ambiance Room Simulator</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Code2 className="w-4 h-4 text-[#a5b4fc]" />
                  <span>Cart & Checkout Engine</span>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[0].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-black/40 border border-[#e6c88b]/20 text-[11px] font-mono-code text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleOpenProject(PROJECTS[0])}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-6 py-3 rounded-xl bg-[#e6c88b] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(230,200,139,0.35)] hover:shadow-[0_0_35px_rgba(230,200,139,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 6 Cols: Live Interactive Filament Glow Simulator Embedded */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <VoltaInteractiveDemo />
            </div>

          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 2: DRAWCRAFT — DRAWING MASTERY STUDIO (Cinematic Card)
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-gold rounded-3xl p-8 sm:p-10 border border-[#64dfdf]/30 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-6 right-8 text-[11px] font-mono-code text-[#64dfdf] uppercase tracking-widest px-3 py-1 rounded-full bg-[#64dfdf]/10 border border-[#64dfdf]/20">
            ★ Featured Masterwork
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 Cols: Project Narrative & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono-code text-[#f4a6b8] uppercase tracking-wider block mb-2">
                  Comprehensive Drawing Mastery & Interactive Art Education
                </span>
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
                  DRAWCRAFT <span className="cyan-gradient-text">— Art Education Platform</span>
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  An interactive sketching and visual art education studio designed with React and Vite. Combines step-by-step visual lessons (Loomis method, 3D shaded forms, facial anatomy) with a digital drawing canvas, daily timed challenges, and color theory studios.
                </p>
              </div>

              {/* Key Highlights Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Paintbrush className="w-4 h-4 text-[#64dfdf]" />
                  <span>Interactive Drawing Canvas</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Sparkles className="w-4 h-4 text-[#e6c88b]" />
                  <span>Step-by-Step Lesson Modules</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Layers className="w-4 h-4 text-[#f4a6b8]" />
                  <span>3D Anatomy & Pose Reference</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Code2 className="w-4 h-4 text-[#a5b4fc]" />
                  <span>Color Harmony Wheels</span>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[1].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-black/40 border border-[#64dfdf]/20 text-[11px] font-mono-code text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleOpenProject(PROJECTS[1])}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-6 py-3 rounded-xl bg-[#64dfdf] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(100,223,223,0.35)] hover:shadow-[0_0_35px_rgba(100,223,223,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 6 Cols: Live Interactive Sketchpad Canvas Embedded */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <DrawCraftInteractiveDemo />
            </div>

          </div>
        </motion.div>

        {/* ========================================================
            ADDITIONAL GENUINE PROJECTS (Grid)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(2).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code text-[#e6c88b] uppercase tracking-wider">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono-code text-gray-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#e6c88b] transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono-code text-gray-400 mb-4">
                  {proj.subtitle}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {proj.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono-code text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => handleOpenProject(proj)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="text-xs font-mono-code text-[#e6c88b] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Project Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
