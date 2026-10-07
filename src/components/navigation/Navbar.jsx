import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Menu,
  X,
  Send,
  ArrowRight,
  Code2
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const newMuted = soundFX.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <>
      {/* Floating Top Navbar Container */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand Pill */}
          <div
            onClick={() => handleNavClick('#home')}
            onMouseEnter={() => soundFX.playHover()}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer ${
              isScrolled ? 'border-[#e6c88b]/40 bg-[#0d0d15]/90 shadow-lg' : 'border-white/10 bg-[#0d0d15]/60'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e6c88b] to-[#f4a6b8] flex items-center justify-center font-bold text-[#08080c] font-display text-sm shadow-sm">
              NS
            </div>
            <div>
              <span className="font-bold font-display text-white text-sm tracking-wide">
                Nisha S
              </span>
              <span className="text-[10px] font-mono-code text-[#e6c88b] block -mt-0.5">
                Web Designer
              </span>
            </div>
          </div>

          {/* Desktop Navigation Pill Dock */}
          <nav
            className={`pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-2xl glass-panel border transition-all duration-300 ${
              isScrolled ? 'border-[#e6c88b]/30 bg-[#0d0d15]/90 shadow-xl' : 'border-white/10 bg-[#0d0d15]/60'
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-code tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#0a0a10] font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-[#e6c88b] rounded-xl shadow-sm z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-[#e6c88b] text-gray-300 hover:text-[#e6c88b] transition-all cursor-pointer"
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-[#e6c88b]" />}
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              onMouseEnter={() => soundFX.playHover()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#e6c88b] to-[#f3d9a2] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2.5 rounded-xl glass-panel border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-50 glass-panel-gold rounded-3xl p-6 border border-[#e6c88b]/40 shadow-2xl lg:hidden flex flex-col space-y-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full py-3 px-4 rounded-xl text-left text-sm font-mono-code flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#e6c88b] text-[#0a0a10] font-bold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono-code text-gray-400">
                {OWNER_INFO.location}
              </span>
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-4 py-2 rounded-xl bg-[#e6c88b] text-[#0a0a10] font-bold text-xs font-mono-code"
              >
                Let's Work Together
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
