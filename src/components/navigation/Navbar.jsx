import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  Send,
  ArrowRight,
  Flower2
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
            className={`pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer bg-[#FFF9F2]/90 ${
              isScrolled ? 'border-[#B9828F]/50 shadow-md' : 'border-[#E8D8C8]'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-[#6B1F32] flex items-center justify-center font-bold text-[#FFF9F2] font-display text-sm shadow-sm">
              NS
            </div>
            <div>
              <span className="font-bold font-display text-[#3B2929] text-sm tracking-wide">
                Nisha S
              </span>
              <span className="text-[10px] font-mono-code text-[#B9828F] font-semibold block -mt-0.5">
                Web Designer
              </span>
            </div>
          </div>

          {/* Desktop Navigation Pill Dock */}
          <nav
            className={`pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-2xl glass-panel border transition-all duration-300 bg-[#FFF9F2]/90 ${
              isScrolled ? 'border-[#B9828F]/50 shadow-md' : 'border-[#E8D8C8]'
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
                      ? 'text-[#FFF9F2] font-bold'
                      : 'text-[#3B2929]/75 hover:text-[#6B1F32] hover:bg-[#F7F0E6]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-[#6B1F32] rounded-xl shadow-sm z-0"
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
              className="p-2.5 rounded-xl glass-panel border border-[#E8D8C8] bg-[#FFF9F2]/90 hover:border-[#B9828F] text-[#6B1F32] transition-all cursor-pointer shadow-sm"
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#6B1F32]" />}
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              onMouseEnter={() => soundFX.playHover()}
              className="btn-primary hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono-code uppercase tracking-wider shadow-sm cursor-pointer"
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
              className="lg:hidden p-2.5 rounded-xl glass-panel border border-[#E8D8C8] bg-[#FFF9F2] text-[#6B1F32] hover:bg-[#F7F0E6] transition-colors cursor-pointer"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl p-6 border border-[#B9828F]/40 bg-[#FFF9F2] shadow-2xl lg:hidden flex flex-col space-y-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full py-3 px-4 rounded-xl text-left text-sm font-mono-code flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold'
                      : 'text-[#3B2929] hover:bg-[#F7F0E6]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#E8D8C8] flex items-center justify-between">
              <span className="text-xs font-mono-code text-gray-500">
                {OWNER_INFO.location}
              </span>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary px-4 py-2 text-xs font-mono-code"
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
