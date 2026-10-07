import React from 'react';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import { LinkedInIcon } from '../ui/Icons';
import {
  ArrowUp,
  Mail,
  MapPin,
  Sparkles,
  Code2
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
    <footer className="relative bg-[#060609] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 overflow-hidden">
      
      {/* Background ambient accent */}
      <div className="ambient-glow-circle w-[500px] h-[500px] bottom-[-200px] left-[50%] -translate-x-1/2 bg-gradient-to-t from-[#e6c88b]/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#e6c88b] to-[#f4a6b8] flex items-center justify-center font-bold text-[#08080c] font-display text-base">
                NS
              </div>
              <div>
                <span className="font-bold font-display text-white text-lg">
                  {OWNER_INFO.name}
                </span>
                <span className="text-xs font-mono-code text-[#e6c88b] block">
                  {OWNER_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Crafting immersive, interactive, and high-performance digital experiences tailored for web design & front-end excellence.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono-code text-gray-400">
              <MapPin className="w-4 h-4 text-[#f4a6b8]" />
              <span>{OWNER_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Links (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#e6c88b] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono-code">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="text-left text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Connect (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#64dfdf] mb-4">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs font-mono-code">
              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-[#e6c88b] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#e6c88b]" />
                <span className="truncate">{OWNER_INFO.email}</span>
              </a>

              <a
                href={OWNER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#64dfdf] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#64dfdf]" />
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

          <div className="flex items-center gap-2">
            <span>Designed & Built with React & Three.js</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#e6c88b] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
