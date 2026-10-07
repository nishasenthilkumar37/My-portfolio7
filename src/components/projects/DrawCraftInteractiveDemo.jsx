import React, { useState, useRef, useEffect } from 'react';
import { soundFX } from '../../utils/soundEffects';
import {
  Paintbrush,
  RotateCcw,
  Download,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Palette
} from 'lucide-react';

const PALETTE = [
  { name: 'Charcoal Noir', color: '#1e293b' },
  { name: 'Champagne Gold', color: '#e6c88b' },
  { name: 'Rose Quartz', color: '#f4a6b8' },
  { name: 'Cyan Glow', color: '#64dfdf' },
  { name: 'Chalk White', color: '#ffffff' }
];

const MINI_LESSONS = [
  {
    title: 'Lesson 1: Shaded Sphere & Light',
    concept: 'Highlight -> Midtone -> Core Shadow -> Reflected Bounce',
    tip: 'Keep your wrist loose and feather your cross-hatch strokes.'
  },
  {
    title: 'Lesson 2: Loomis Head Method',
    concept: 'Ball + Brow Line + Center Axis + Jaw Drop',
    tip: 'Divide the face into equal thirds: brow to nose base, nose base to chin.'
  },
  {
    title: 'Lesson 3: Realistic Eye Specular',
    concept: 'Preserve catchlight white highlight before shading iris fibers.',
    tip: 'The upper eyelid casts a soft shadow on the top of the iris.'
  }
];

export default function DrawCraftInteractiveDemo() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState(PALETTE[1].color); // Gold default
  const [brushSize, setBrushSize] = useState(4);
  const [activeLesson, setActiveLesson] = useState(0);
  const historyRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with rich dark sketchpad tone
    ctx.fillStyle = '#0e0e18';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle sketch grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Save initial canvas state
    saveState();
  }, []);

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (historyRef.current.length > 10) {
      historyRef.current.shift();
    }
    historyRef.current.push(canvas.toDataURL());
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveState();
  };

  const handleClear = () => {
    soundFX.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0e0e18';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // redraw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(canvas.width, y => y);
      ctx.stroke();
    }
    saveState();
  };

  const handleDownload = () => {
    soundFX.playSuccess();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'DrawCraft-MySketch.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="w-full glass-panel-gold rounded-3xl p-6 sm:p-8 border border-[#e6c88b]/40 flex flex-col md:flex-row items-start gap-8 shadow-2xl">
      
      {/* Left Canvas Workstation */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0e0e18]">
          <canvas
            ref={canvasRef}
            width={340}
            height={255}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full cursor-crosshair touch-none"
            title="Sketch freely on this canvas"
          />

          <div className="absolute top-2 left-3 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono-code text-gray-400 pointer-events-none">
            Canvas Studio • Draw Here
          </div>
        </div>

        {/* Canvas Toolbar */}
        <div className="w-full max-w-[340px] flex items-center justify-between mt-3 pt-3 border-t border-white/10">
          {/* Color swatches */}
          <div className="flex items-center gap-1.5">
            {PALETTE.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  soundFX.playHover();
                  setBrushColor(p.color);
                }}
                className={`w-6 h-6 rounded-full border transition-transform cursor-pointer ${
                  brushColor === p.color ? 'scale-125 border-white shadow-sm' : 'border-white/20'
                }`}
                style={{ backgroundColor: p.color }}
                title={p.name}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs flex items-center gap-1 cursor-pointer"
              title="Clear sketch"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg bg-[#e6c88b] text-[#0a0a10] font-bold text-xs flex items-center gap-1 cursor-pointer"
              title="Save PNG"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Lesson Guide & Interactive Curriculum */}
      <div className="w-full md:w-1/2 space-y-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#64dfdf] uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Art Curriculum</span>
          </div>
          <h4 className="text-xl font-bold font-display text-white">
            DrawCraft Studio Preview
          </h4>
          <p className="text-xs text-gray-400">
            Interactive drawing lessons and structured visual stages from the DrawCraft platform.
          </p>
        </div>

        {/* Mini Lesson Selector */}
        <div className="space-y-2">
          {MINI_LESSONS.map((lesson, idx) => (
            <div
              key={idx}
              onClick={() => {
                soundFX.playClick();
                setActiveLesson(idx);
              }}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                activeLesson === idx
                  ? 'bg-[#64dfdf]/10 border-[#64dfdf] text-white shadow-md'
                  : 'bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>{lesson.title}</span>
                {activeLesson === idx && <CheckCircle2 className="w-3.5 h-3.5 text-[#64dfdf]" />}
              </div>
              <div className="text-[11px] text-gray-300 mt-1">
                {lesson.concept}
              </div>
              {activeLesson === idx && (
                <div className="text-[10px] text-[#e6c88b] font-mono-code mt-1.5 border-t border-white/5 pt-1">
                  💡 Pro Tip: {lesson.tip}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-[11px] font-mono-code text-gray-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#e6c88b]" />
          <span>Full project includes 30+ lessons, anatomy library & color harmony studio</span>
        </div>
      </div>

    </div>
  );
}
