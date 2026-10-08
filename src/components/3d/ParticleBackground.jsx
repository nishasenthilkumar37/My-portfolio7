import React from 'react';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F7F0E6]" aria-hidden="true">
      {/* Soft warm botanical ambient light circles */}
      <div className="ambient-glow-circle w-[650px] h-[650px] top-[-100px] left-[-150px] bg-gradient-to-br from-[#E8D8C8]/60 to-transparent"></div>
      <div className="ambient-glow-circle w-[700px] h-[700px] top-[35%] right-[-200px] bg-gradient-to-tl from-[#B9828F]/15 to-transparent"></div>
      <div className="ambient-glow-circle w-[650px] h-[650px] bottom-[-150px] left-[15%] bg-gradient-to-tr from-[#E8D8C8]/50 to-transparent"></div>
      
      {/* Soft parchment/paper subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6B1F32_1px,transparent_1px)] [background-size:24px_24px]"></div>
    </div>
  );
}
