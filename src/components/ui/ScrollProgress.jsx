import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#e6c88b] via-[#f4a6b8] to-[#64dfdf] origin-left z-50 pointer-events-none"
      style={{
        scaleX,
        boxShadow: '0 0 10px rgba(230, 200, 139, 0.8), 0 0 20px rgba(100, 223, 223, 0.4)'
      }}
    />
  );
}
