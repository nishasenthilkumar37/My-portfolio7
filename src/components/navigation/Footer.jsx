import React from 'react';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import { LinkedInIcon } from '../ui/Icons';
import {
  ArrowUp,
  Mail,
  MapPin
} from 'lucide-react';

const FOOTER_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    soundFX.playClick();
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FFF9F2] border-t border-[#E8D8C8] pt-16 pb-12 px-4 sm:px-8 overflow-hidden">
      
      {/* Background ambient accent */}
      <div className="ambient-glow-circle w-[500px] h-[500px] bottom-[-200px] left-[50%] -translate-x-1/2 bg-gradient-to-t from-[#E8D8C8]/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8D8C8]">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#6B1F32] flex items-center justify-center font-bold text-[#FFF9F2] font-display text-base shadow-sm">
                NS
              </div>
              <div>
                <span className="font-bold font-display text-[#3B2929] text-lg">
                  {OWNER_INFO.name}
                </span>
                <span className="text-xs font-mono-code text-[#6B1F32] font-semibold block">
                  {OWNER_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Crafting immersive, interactive, and high-performance digital experiences tailored for web design & front-end excellence.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#6B1F32] font-medium">
              <MapPin className="w-4 h-4 text-[#B9828F]" />
              <span>{OWNER_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Links (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#6B1F32] mb-4 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono-code">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="text-left text-[#3B2929]/70 hover:text-[#6B1F32] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Connect (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#B9828F] mb-4 font-bold">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs font-mono-code">
              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex items-center gap-2 text-[#3B2929] hover:text-[#6B1F32] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6B1F32]" />
                <span className="truncate">{OWNER_INFO.email}</span>
              </a>

              <a
                href={OWNER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#3B2929] hover:text-[#6B1F32] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#6B1F32]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-500">
          <div>
            © {new Date().getFullYear()} Nisha S. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[#6B1F32]">
            <span>Designed & Engineered with React & Vite</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F0E6] hover:bg-[#E8D8C8] text-[#6B1F32] transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
