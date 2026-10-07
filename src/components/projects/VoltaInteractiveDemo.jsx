import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { soundFX } from '../../utils/soundEffects';
import { Lightbulb, Zap, Sliders, Sparkles } from 'lucide-react';

const FILAMENT_TYPES = [
  { id: 'spiral', name: 'Spiral Coil' },
  { id: 'squirrel', name: 'Squirrel Cage' },
  { id: 'quad', name: 'Quad Loop' }
];

const GLASS_TINTS = [
  { id: 'amber', name: 'Amber Glow', hex: 'rgba(230, 160, 60, 0.25)', glow: 'rgba(245, 175, 65, ' },
  { id: 'smoke', name: 'Smoke Quartz', hex: 'rgba(120, 120, 140, 0.25)', glow: 'rgba(200, 190, 210, ' },
  { id: 'clear', name: 'Clear Crystal', hex: 'rgba(200, 230, 255, 0.15)', glow: 'rgba(220, 240, 255, ' },
  { id: 'rose', name: 'Rose Tint', hex: 'rgba(185, 130, 143, 0.25)', glow: 'rgba(185, 130, 143, ' }
];

export default function VoltaInteractiveDemo() {
  const [isOn, setIsOn] = useState(true);
  const [brightness, setBrightness] = useState(85);
  const [filamentType, setFilamentType] = useState('spiral');
  const [glassTint, setGlassTint] = useState(GLASS_TINTS[0]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let time = 0;

    const render = () => {
      time += 0.04;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 10;
      const bulbRadius = 68;

      const alpha = isOn ? (brightness / 100) : 0.05;
      const flicker = isOn ? (Math.sin(time * 15) * 0.02 + 0.98) : 1;
      const effectiveAlpha = alpha * flicker;

      // 1. Outer Ambient Glow Field
      if (isOn && brightness > 0) {
        const glowRadius = bulbRadius * (1.6 + (brightness / 100) * 1.5);
        const radialGrad = ctx.createRadialGradient(
          centerX, centerY, 10,
          centerX, centerY, glowRadius
        );
        radialGrad.addColorStop(0, `${glassTint.glow}${effectiveAlpha * 0.8})`);
        radialGrad.addColorStop(0.5, `${glassTint.glow}${effectiveAlpha * 0.3})`);
        radialGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Glass Bulb Envelope
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY - 15, bulbRadius, Math.PI * 0.15, Math.PI * 0.85, false);
      ctx.quadraticCurveTo(centerX + 32, centerY + bulbRadius + 20, centerX + 24, centerY + bulbRadius + 38);
      ctx.lineTo(centerX - 24, centerY + bulbRadius + 38);
      ctx.quadraticCurveTo(centerX - 32, centerY + bulbRadius + 20, centerX - bulbRadius * Math.cos(Math.PI * 0.15), centerY - 15 + bulbRadius * Math.sin(Math.PI * 0.15));
      ctx.closePath();

      ctx.fillStyle = glassTint.hex;
      ctx.fill();

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = isOn ? `${glassTint.glow}${0.4 + effectiveAlpha * 0.4})` : 'rgba(107, 31, 50, 0.25)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX - 10, centerY - 25, bulbRadius - 14, Math.PI * 0.8, Math.PI * 1.25, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.stroke();
      ctx.restore();

      // 3. Brass Socket Base
      const socketY = centerY + bulbRadius + 36;
      ctx.fillStyle = '#b48a3c';
      ctx.fillRect(centerX - 22, socketY, 44, 28);
      ctx.fillStyle = '#8c651e';
      ctx.fillRect(centerX - 24, socketY + 6, 48, 4);
      ctx.fillRect(centerX - 24, socketY + 14, 48, 4);
      ctx.fillRect(centerX - 24, socketY + 22, 48, 4);

      // 4. Filament Supports
      ctx.strokeStyle = '#6B1F32';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX - 12, socketY);
      ctx.lineTo(centerX - 12, centerY + 25);
      ctx.moveTo(centerX + 12, socketY);
      ctx.lineTo(centerX + 12, centerY + 25);
      ctx.stroke();

      // 5. Glowing Tungsten Filament
      if (isOn && brightness > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(255, 245, 200, ${Math.min(1, effectiveAlpha + 0.2)})`;
        ctx.shadowColor = glassTint.glow + '1)';
        ctx.shadowBlur = 18 * effectiveAlpha;
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        if (filamentType === 'spiral') {
          let sy = centerY + 22;
          ctx.moveTo(centerX - 12, sy);
          for (let y = sy; y > centerY - 45; y -= 6) {
            const xOffset = Math.sin((y - sy) * 0.35 + time * 3) * 12;
            ctx.lineTo(centerX + xOffset, y);
          }
          ctx.lineTo(centerX + 12, sy);
        } else if (filamentType === 'squirrel') {
          ctx.moveTo(centerX - 12, centerY + 20);
          ctx.lineTo(centerX - 22, centerY - 40);
          ctx.lineTo(centerX - 6, centerY - 45);
          ctx.lineTo(centerX, centerY + 15);
          ctx.lineTo(centerX + 6, centerY - 45);
          ctx.lineTo(centerX + 22, centerY - 40);
          ctx.lineTo(centerX + 12, centerY + 20);
        } else {
          ctx.moveTo(centerX - 12, centerY + 20);
          ctx.bezierCurveTo(centerX - 35, centerY - 20, centerX - 10, centerY - 55, centerX - 4, centerY - 40);
          ctx.bezierCurveTo(centerX + 4, centerY - 55, centerX + 35, centerY - 20, centerX + 12, centerY + 20);
        }

        ctx.stroke();
        ctx.restore();
      } else {
        ctx.strokeStyle = '#8C2F46';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(centerX - 12, centerY + 20);
        ctx.lineTo(centerX, centerY - 35);
        ctx.lineTo(centerX + 12, centerY + 20);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isOn, brightness, filamentType, glassTint]);

  const handleToggle = () => {
    soundFX.playClick();
    setIsOn(!isOn);
  };

  return (
    <div className="w-full glass-panel-burgundy rounded-3xl p-6 sm:p-8 border border-[#B9828F]/40 bg-[#FFF9F2] flex flex-col md:flex-row items-center gap-8 shadow-sm">
      
      {/* Left Canvas Preview Area */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-[280px] h-[340px] flex items-center justify-center rounded-2xl bg-[#3B2929] border border-[#E8D8C8] overflow-hidden shadow-inner">
          <canvas
            ref={canvasRef}
            width={280}
            height={340}
            className="w-full h-full cursor-pointer"
            onClick={handleToggle}
            title="Click bulb to toggle power"
          />

          {/* Interactive Power Switch */}
          <button
            onClick={handleToggle}
            className={`absolute bottom-3 px-3 py-1.5 rounded-full text-xs font-mono-code flex items-center gap-1.5 transition-all cursor-pointer ${
              isOn
                ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold shadow-md'
                : 'bg-white/20 text-gray-300 hover:bg-white/30'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>{isOn ? 'POWER: ON' : 'POWER: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Right Interactive Controls */}
      <div className="w-full md:w-1/2 space-y-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#6B1F32] uppercase tracking-wider mb-1 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>Interactive Simulator</span>
          </div>
          <h4 className="text-xl font-bold font-display text-[#3B2929]">
            Filament & Glow Lab
          </h4>
          <p className="text-xs text-gray-600">
            Real-time physics and color temperature preview from Volta & Co.
          </p>
        </div>

        {/* Brightness Dimmer */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono-code text-[#3B2929]">
            <span>Dimmer / Lumens</span>
            <span className="text-[#6B1F32] font-bold">{isOn ? `${brightness}%` : '0%'}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            disabled={!isOn}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-[#6B1F32] cursor-pointer"
          />
        </div>

        {/* Filament Geometry Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono-code text-[#3B2929] block font-medium">
            Filament Geometry
          </label>
          <div className="grid grid-cols-3 gap-2">
            {FILAMENT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  soundFX.playClick();
                  setFilamentType(type.id);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                  filamentType === type.id
                    ? 'bg-[#6B1F32] text-[#FFF9F2] font-bold shadow-sm'
                    : 'bg-[#F7F0E6] text-[#3B2929]/70 hover:bg-[#E8D8C8]'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Glass Tint Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono-code text-[#3B2929] block font-medium">
            Glass Envelope Tint
          </label>
          <div className="grid grid-cols-2 gap-2">
            {GLASS_TINTS.map((tint) => (
              <button
                key={tint.id}
                onClick={() => {
                  soundFX.playClick();
                  setGlassTint(tint);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code flex items-center gap-2 transition-all cursor-pointer ${
                  glassTint.id === tint.id
                    ? 'bg-[#6B1F32]/10 border border-[#6B1F32] text-[#6B1F32] font-bold'
                    : 'bg-[#F7F0E6] border border-[#E8D8C8] text-[#3B2929]/70 hover:bg-[#E8D8C8]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tint.hex }} />
                <span>{tint.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
