import React from 'react';
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
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6B1F32] via-[#B9828F] to-[#E8D8C8] origin-left z-50 pointer-events-none"
      style={{
        scaleX,
        boxShadow: '0 0 8px rgba(107, 31, 50, 0.4)'
      }}
    />
  );
}
