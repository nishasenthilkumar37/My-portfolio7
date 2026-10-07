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
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden bg-[#F7F0E6]">
      {/* Soft floral background glow */}
      <div className="ambient-glow-circle w-[600px] h-[600px] top-[25%] right-[-150px] bg-gradient-to-bl from-[#B9828F]/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F2] border border-[#B9828F]/30 text-[#6B1F32] text-xs font-mono-code uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>02 // What I Can Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#3B2929] mb-6 max-w-3xl"
          >
            Services Tailored for <span className="burgundy-gradient-text">Impact & Elegance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed"
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl glass-panel p-7 sm:p-8 flex flex-col justify-between border border-[#E8D8C8] bg-[#FFF9F2] hover:border-[#B9828F] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(107,31,50,0.12)] cursor-default overflow-hidden"
              >
                {/* Dynamic Subtle Corner Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#B9828F]/20 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-400 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#F7F0E6] border border-[#E8D8C8] group-hover:border-[#B9828F] group-hover:bg-[#6B1F32]/10 flex items-center justify-center text-[#6B1F32] transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-3xl font-black font-display text-[#3B2929]/15 group-hover:text-[#6B1F32]/25 font-mono-code transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-display text-[#3B2929] group-hover:text-[#6B1F32] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono-code text-[#B9828F] mb-4 font-medium">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#3B2929]/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-[#E8D8C8]">
                    <div className="text-[11px] font-mono-code uppercase text-[#6B1F32] tracking-wider mb-2 font-semibold">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#3B2929]/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B1F32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Prompt */}
                <div className="mt-8 pt-4 border-t border-[#E8D8C8] flex items-center justify-between">
                  <span className="text-xs font-mono-code text-gray-500 group-hover:text-[#6B1F32] transition-colors font-medium">
                    Ready to build?
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="w-8 h-8 rounded-full bg-[#F7F0E6] group-hover:bg-[#6B1F32] flex items-center justify-center text-[#6B1F32] group-hover:text-[#FFF9F2] transition-all duration-300 cursor-pointer"
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
