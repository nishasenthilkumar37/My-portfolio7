import React, { useState } from 'react';
import OpeningCurtain from './components/hero/OpeningCurtain';
import ParticleBackground from './components/3d/ParticleBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import ServicesSection from './components/services/ServicesSection';
import SkillsSection from './components/skills/SkillsSection';
import ProjectsSection from './components/projects/ProjectsSection';
import EducationSection from './components/education/EducationSection';
import ResumeSection from './components/resume/ResumeSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/navigation/Footer';

export default function App() {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08080c] text-white selection:bg-[#e6c88b]/30 selection:text-[#fff8e7] overflow-x-hidden">
      
      {/* 1. Split-Screen Opening Animation */}
      {!curtainDone && (
        <OpeningCurtain onComplete={() => setCurtainDone(true)} />
      )}

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Custom Follower Cursor */}
      <CustomCursor />

      {/* 4. Ambient 3D Particles & Glows */}
      <ParticleBackground />

      {/* 5. Floating Navigation Dock */}
      <Navbar />

      {/* 6. Main Portfolio Layout */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* Hero Section with 3D Tulip Canvas & Character */}
        <HeroSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Services / What I Can Do */}
        <ServicesSection />

        {/* Interactive Skills Laboratory */}
        <SkillsSection />

        {/* Featured Projects with Live Simulators & Modals */}
        <ProjectsSection />

        {/* Education Timeline */}
        <EducationSection />

        {/* Dedicated Resume Section */}
        <ResumeSection />

        {/* Contact & Let's Work Together */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
