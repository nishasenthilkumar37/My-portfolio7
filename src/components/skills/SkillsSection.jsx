import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { SKILL_CATEGORIES, ALL_SKILLS_FLAT } from '../../data/portfolioData';
import {
  Sparkles,
  Layers,
  Cpu,
  Database,
  Terminal,
  Code2,
  Grid3X3,
  Orbit,
  ExternalLink
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(ALL_SKILLS_FLAT[3]); // Default React
  const [viewMode, setViewMode] = useState('interactive-grid'); // 'interactive-grid' | 'categories'

  const categories = ['All', 'Core Development', 'Databases & Architecture', 'Tools & Creative Tech'];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-circle w-[600px] h-[600px] top-[15%] left-[-150px] bg-gradient-to-tr from-[#e6c88b]/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161624] border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(230,200,139,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // Skills & Technologies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            A Focused, Modern <span className="gold-gradient-text">Technical Arsenal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Grounded in fundamental software principles, dynamic web architectures, and interactive modern tooling.
          </motion.p>

          {/* View Mode Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-white/10"
          >
            <button
              onClick={() => {
                soundFX.playClick();
                setViewMode('interactive-grid');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                viewMode === 'interactive-grid'
                  ? 'bg-[#e6c88b] text-[#0a0a10] font-bold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Interactive Skill Matrix</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setViewMode('categories');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                viewMode === 'categories'
                  ? 'bg-[#e6c88b] text-[#0a0a10] font-bold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Categorized Stacks</span>
            </button>
          </motion.div>
        </div>

        {/* View 1: Interactive Skill Matrix with Detail Inspector */}
        {viewMode === 'interactive-grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols: Interactive Grid of Skills */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {ALL_SKILLS_FLAT.map((skill, index) => {
                const isSelected = selectedSkill?.name === skill.name;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    onClick={() => {
                      soundFX.playHover();
                      setSelectedSkill(skill);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    className={`relative p-5 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden ${
                      isSelected
                        ? 'border-[#e6c88b] bg-[#1a1a2b] shadow-[0_0_30px_rgba(230,200,139,0.25)] -translate-y-1'
                        : 'border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Top Accent Dot */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono-code uppercase text-gray-400 tracking-wider">
                        {skill.category}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                      />
                    </div>

                    {/* Skill Name */}
                    <div>
                      <div className="text-lg font-bold font-display text-white group-hover:text-[#e6c88b] transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-mono-code line-clamp-1">
                        {skill.tag}
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeSkillIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#e6c88b]"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right 4 Cols: Live Skill Inspector Drawer */}
            <div className="lg:col-span-4 glass-panel-gold rounded-3xl p-7 border border-[#e6c88b]/30 sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-code text-[#e6c88b] uppercase tracking-wider">
                  Technology Inspector
                </span>
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedSkill.color, boxShadow: `0 0 12px ${selectedSkill.color}` }}
                />
              </div>

              <h3 className="text-3xl font-black font-display text-white mb-2">
                {selectedSkill.name}
              </h3>
              <div className="text-xs font-mono-code text-[#64dfdf] mb-6">
                Category: {selectedSkill.category} • {selectedSkill.tag}
              </div>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <div className="text-xs text-[#e6c88b] font-mono-code uppercase mb-1">
                    Applied In
                  </div>
                  <div className="text-gray-200 font-medium">
                    {selectedSkill.name === 'React' || selectedSkill.name === 'Tailwind CSS'
                      ? 'VOLTA & CO., DrawCraft, Painting Sales, Portfolio'
                      : selectedSkill.name === 'Three.js'
                      ? 'Portfolio 3D Tulip Blossom, VOLTA & CO. Ambient Lighting'
                      : selectedSkill.name === 'MongoDB'
                      ? 'VOLTA & CO. Backend, DrawCraft Lesson Datastores'
                      : selectedSkill.name === 'Python'
                      ? 'Algorithm design, scripting & academic development'
                      : selectedSkill.name === 'HTML' || selectedSkill.name === 'CSS' || selectedSkill.name === 'JavaScript'
                      ? 'Core web design, responsive layouts, DOM manipulation'
                      : 'Version control, branch workflows & project hosting'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <div className="text-xs text-[#64dfdf] font-mono-code uppercase mb-1">
                    Core Strength
                  </div>
                  <div className="text-gray-300 text-xs leading-relaxed">
                    Used to write clean, modular, and performant code with strict adherence to modern standards and zero bloated dependencies.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-gray-400">
                <span>Verified in project codebases</span>
                <span className="text-emerald-400">● Active Stack</span>
              </div>
            </div>

          </div>
        )}

        {/* View 2: Structured Categorized Cards */}
        {viewMode === 'categories' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="glass-panel rounded-3xl p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#e6c88b]/10 border border-[#e6c88b]/30 flex items-center justify-center text-[#e6c88b]">
                      {catIdx === 0 ? <Code2 className="w-5 h-5" /> : catIdx === 1 ? <Database className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white text-sm flex items-center gap-2">
                            <span>{skill.icon}</span>
                            <span>{skill.name}</span>
                          </span>
                          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
