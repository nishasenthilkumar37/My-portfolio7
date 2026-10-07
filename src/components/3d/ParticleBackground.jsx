import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle ambient gradients */}
      <div className="ambient-glow-circle w-[550px] h-[550px] top-[-100px] left-[-100px] bg-gradient-to-br from-[#e6c88b]/15 to-transparent"></div>
      <div className="ambient-glow-circle w-[650px] h-[650px] top-[40%] right-[-150px] bg-gradient-to-tl from-[#f4a6b8]/12 to-transparent"></div>
      <div className="ambient-glow-circle w-[600px] h-[600px] bottom-[-150px] left-[20%] bg-gradient-to-tr from-[#64dfdf]/10 to-transparent"></div>

      {/* R3F Canvas with gentle stardust */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <Sparkles
          count={70}
          scale={[18, 18, 10]}
          size={1.5}
          speed={0.3}
          color="#e6c88b"
          opacity={0.35}
        />
        <Sparkles
          count={50}
          scale={[15, 15, 10]}
          size={1.2}
          speed={0.4}
          color="#f4a6b8"
          opacity={0.25}
        />
      </Canvas>
    </div>
  );
}
