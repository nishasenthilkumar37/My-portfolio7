import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { SERVICES } from '../../data/portfolioData';
import {
  Sparkles,
  Layout,
  Palette,
  Building2,
  RefreshCw,
  Code2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const ICON_MAP = {
  Layout: Layout,
  Sparkles: Sparkles,
  Palette: Palette,
  Building2: Building2,
  RefreshCw: RefreshCw,
  Code2: Code2
};

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToContact = () => {
    soundFX.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-circle w-[600px] h-[600px] top-[25%] right-[-150px] bg-gradient-to-bl from-[#64dfdf]/10 to-transparent" />

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
            <span>02 // What I Can Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 max-w-3xl"
          >
            Services Tailored for <span className="gold-gradient-text">Impact & Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            From high-converting landing pages to comprehensive React web applications, I bring your digital visions to life.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComp = ICON_MAP[service.icon] || Code2;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl glass-panel p-7 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#e6c88b]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] cursor-default overflow-hidden"
              >
                {/* Dynamic Corner Gradient Accent on Hover */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.accent} rounded-bl-full pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#e6c88b]/50 group-hover:bg-[#e6c88b]/10 flex items-center justify-center text-[#e6c88b] transition-all duration-300 shadow-md">
                      <IconComp className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-3xl font-black font-display text-white/15 group-hover:text-[#e6c88b]/30 font-mono-code transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#e6c88b] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono-code text-gray-400 mb-4">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono-code uppercase text-[#e6c88b] tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#64dfdf] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Prompt */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono-code text-gray-400 group-hover:text-white transition-colors">
                    Ready to build?
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#e6c88b] flex items-center justify-center text-gray-400 group-hover:text-[#0a0a10] transition-all duration-300 cursor-pointer"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
