import React, { useState, useRef, useEffect } from 'react';
import { soundFX } from '../../utils/soundEffects';
import {
  Paintbrush,
  RotateCcw,
  Download,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Palette
} from 'lucide-react';

const PALETTE = [
  { name: 'Burgundy Noir', color: '#6B1F32' },
  { name: 'Dusky Pink', color: '#B9828F' },
  { name: 'Warm Charcoal', color: '#3B2929' },
  { name: 'Soft Rose', color: '#D4A7B2' },
  { name: 'Pure White', color: '#FFFFFF' }
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
  const [brushColor, setBrushColor] = useState(PALETTE[0].color); // Burgundy default
  const [brushSize, setBrushSize] = useState(4);
  const [activeLesson, setActiveLesson] = useState(0);
  const historyRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with warm off-white sketchpad tone
    ctx.fillStyle = '#FFF9F2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle sketch grid lines in soft beige
    ctx.strokeStyle = 'rgba(107, 31, 50, 0.05)';
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
    ctx.fillStyle = '#FFF9F2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(107, 31, 50, 0.05)';
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
    <div className="w-full glass-panel-burgundy rounded-3xl p-6 sm:p-8 border border-[#B9828F]/40 bg-[#FFF9F2] flex flex-col md:flex-row items-start gap-8 shadow-sm">
      
      {/* Left Canvas Workstation */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8D8C8] shadow-inner bg-[#FFF9F2]">
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

          <div className="absolute top-2 left-3 px-2 py-0.5 rounded bg-white/80 border border-[#E8D8C8] text-[10px] font-mono-code text-[#6B1F32] font-semibold pointer-events-none">
            Canvas Studio • Draw Here
          </div>
        </div>

        {/* Canvas Toolbar */}
        <div className="w-full max-w-[340px] flex items-center justify-between mt-3 pt-3 border-t border-[#E8D8C8]">
          <div className="flex items-center gap-1.5">
            {PALETTE.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  soundFX.playHover();
                  setBrushColor(p.color);
                }}
                className={`w-6 h-6 rounded-full border transition-transform cursor-pointer ${
                  brushColor === p.color ? 'scale-125 border-[#6B1F32] shadow-sm ring-1 ring-[#6B1F32]' : 'border-[#E8D8C8]'
                }`}
                style={{ backgroundColor: p.color }}
                title={p.name}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              className="p-1.5 rounded-lg bg-[#F7F0E6] hover:bg-[#E8D8C8] text-[#3B2929] text-xs flex items-center gap-1 cursor-pointer font-medium"
              title="Clear sketch"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#6B1F32]" />
              <span>Clear</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg bg-[#6B1F32] text-[#FFF9F2] font-bold text-xs flex items-center gap-1 cursor-pointer shadow-sm"
              title="Save PNG"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Lesson Guide */}
      <div className="w-full md:w-1/2 space-y-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#6B1F32] uppercase tracking-wider mb-1 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>Interactive Art Curriculum</span>
          </div>
          <h4 className="text-xl font-bold font-display text-[#3B2929]">
            DrawCraft Studio Preview
          </h4>
          <p className="text-xs text-gray-600">
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
                  ? 'bg-[#F7F0E6] border-[#6B1F32] text-[#3B2929] shadow-sm'
                  : 'bg-[#FFF9F2] border-[#E8D8C8] text-[#3B2929]/70 hover:bg-[#F7F0E6]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-[#6B1F32]">
                <span>{lesson.title}</span>
                {activeLesson === idx && <CheckCircle2 className="w-3.5 h-3.5 text-[#6B1F32]" />}
              </div>
              <div className="text-[11px] text-[#3B2929]/80 mt-1">
                {lesson.concept}
              </div>
              {activeLesson === idx && (
                <div className="text-[10px] text-[#B9828F] font-mono-code mt-1.5 border-t border-[#E8D8C8] pt-1 font-medium">
                  💡 Pro Tip: {lesson.tip}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-[11px] font-mono-code text-[#6B1F32] flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
          <span>Full project includes 30+ lessons, anatomy library & color harmony studio</span>
        </div>
      </div>

    </div>
  );
}
