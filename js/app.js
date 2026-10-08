/**
 * NISHA S — LUXURY FLORAL PORTFOLIO
 * Complete Vanilla JavaScript Application
 * Zero Dependencies / No Frameworks Required
 */

document.addEventListener('DOMContentLoaded', () => {
  initOpeningCurtain();
  initCustomCursor();
  initScrollProgress();
  initNavbarAndScrollSpy();
  initHeroParallax();
  initAudioSynthesizer();
  initPhilosophyTabs();
  initSkillsFilter();
  initVoltaBulbSimulator();
  initDrawCraftStudio();
  initTalkingDictionary();
  initProjectModals();
  initResumeModal();
  initContactFormAndConfetti();
  initBackToTop();
});

/* ==========================================================================
   1. OPENING CURTAIN INTERACTION
   ========================================================================== */
function initOpeningCurtain() {
  const curtain = document.getElementById('opening-curtain');
  const curtainContent = document.querySelector('.curtain-content');
  if (!curtain || !curtainContent) return;

  const unlockPortfolio = () => {
    playSound('chime');
    curtain.classList.add('hide');
    setTimeout(() => {
      curtain.style.display = 'none';
    }, 950);
  };

  curtainContent.addEventListener('click', unlockPortfolio);
  curtain.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') unlockPortfolio();
  });
}

/* ==========================================================================
   2. CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states
  const interactables = document.querySelectorAll('a, button, input, textarea, select, .glass-card, .service-card, .skill-card, .project-masterpiece, .bulb-canvas-container, #drawcraft-canvas');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ==========================================================================
   3. SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (docHeight > 0) ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================================================
   4. NAVBAR & SCROLL SPY
   ========================================================================== */
function initNavbarAndScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  // Sticky shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   5. HERO 3D TULIP PARALLAX (EXCLUSIVE TO #home)
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.getElementById('home');
  const tulipPhoto = document.querySelector('.hero-tulip-photo');
  if (!heroSection || !tulipPhoto) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    // 3D Parallax offset range
    targetX = relX * 28;
    targetY = relY * 24;
  });

  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function animateParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    tulipPhoto.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.04) rotate(${currentX * 0.04}deg)`;
    requestAnimationFrame(animateParallax);
  }
  requestAnimationFrame(animateParallax);
}

/* ==========================================================================
   6. AUDIO SYNTHESIZER (WEB AUDIO API)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  if (!toggleBtn) return;

  const saved = localStorage.getItem('nisha_portfolio_sound');
  if (saved !== null) {
    soundEnabled = saved === 'true';
    updateAudioBtnIcon(toggleBtn);
  }

  toggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('nisha_portfolio_sound', soundEnabled);
    updateAudioBtnIcon(toggleBtn);
    if (soundEnabled) playSound('chime');
  });

  // Attach soft click sounds to buttons
  document.querySelectorAll('.btn, .nav-link, .bulb-opt-btn, .draw-tool-btn').forEach(el => {
    el.addEventListener('click', () => playSound('click'));
  });
}

function updateAudioBtnIcon(btn) {
  if (soundEnabled) {
    btn.innerHTML = '🔊';
    btn.classList.remove('muted');
    btn.setAttribute('title', 'Sound Effects: ON (Click to mute)');
  } else {
    btn.innerHTML = '🔇';
    btn.classList.add('muted');
    btn.setAttribute('title', 'Sound Effects: OFF (Click to unmute)');
  }
}

function playSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'chime') {
      // Gentle floral harp harmonic
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now + i * 0.07);
        g.gain.setValueAtTime(0.07, now + i * 0.07);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.45);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(now + i * 0.07);
        o.stop(now + i * 0.07 + 0.45);
      });
    }
  } catch (e) {
    // Graceful fallback
  }
}

/* ==========================================================================
   7. DESIGN PHILOSOPHY TABS
   ========================================================================== */
function initPhilosophyTabs() {
  const tabs = document.querySelectorAll('.philosophy-tab-btn');
  const panels = document.querySelectorAll('.philosophy-content-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ==========================================================================
   8. SKILLS CATEGORY FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   9. VOLTA & CO. — BULB STUDIO SIMULATOR
   ========================================================================== */
function initVoltaBulbSimulator() {
  const canvas = document.getElementById('volta-bulb-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const brightnessSlider = document.getElementById('bulb-brightness');
  const brightnessVal = document.getElementById('brightness-val');
  const warmthSlider = document.getElementById('bulb-warmth');
  const warmthVal = document.getElementById('warmth-val');
  const toggleBtn = document.getElementById('bulb-toggle-power');
  const tintBtns = document.querySelectorAll('.tint-btn');
  const filamentBtns = document.querySelectorAll('.filament-btn');

  let isOn = true;
  let brightness = 80;
  let warmth = 2400; // Kelvin
  let currentTint = 'amber';
  let currentFilament = 'spiral';
  let animationFrameId;

  // Set high resolution canvas
  function resizeCanvas() {
    canvas.width = 240 * window.devicePixelRatio;
    canvas.height = 300 * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resizeCanvas();

  function drawBulb() {
    ctx.clearRect(0, 0, 240, 300);

    const centerX = 120;
    const centerY = 135;
    const bulbRadius = 75;

    // Background ambient radiance
    if (isOn && brightness > 0) {
      const glowFactor = brightness / 100;
      const glowRadius = bulbRadius * (1.2 + glowFactor * 0.8);

      let glowColor;
      if (currentTint === 'amber') glowColor = `rgba(255, 170, 70, ${0.45 * glowFactor})`;
      else if (currentTint === 'smoke') glowColor = `rgba(220, 190, 170, ${0.35 * glowFactor})`;
      else if (currentTint === 'emerald') glowColor = `rgba(80, 220, 160, ${0.45 * glowFactor})`;
      else glowColor = `rgba(255, 230, 180, ${0.45 * glowFactor})`;

      const radGrad = ctx.createRadialGradient(centerX, centerY, 15, centerX, centerY, glowRadius);
      radGrad.addColorStop(0, glowColor);
      radGrad.addColorStop(0.5, glowColor.replace(/[\d\.]+\)$/, `${0.2 * glowFactor})`));
      radGrad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Glass Bulb Silhouette
    ctx.beginPath();
    ctx.arc(centerX, 115, 60, Math.PI * 0.85, Math.PI * 0.15, false);
    ctx.quadraticCurveTo(centerX + 42, 195, centerX + 26, 215);
    ctx.lineTo(centerX - 26, 215);
    ctx.quadraticCurveTo(centerX - 42, 195, centerX - 60 * Math.cos(Math.PI * 0.15), 115 + 60 * Math.sin(Math.PI * 0.15));
    ctx.closePath();

    // Glass Tint Fill
    let glassFill;
    if (currentTint === 'amber') glassFill = 'rgba(230, 160, 60, 0.18)';
    else if (currentTint === 'smoke') glassFill = 'rgba(120, 100, 110, 0.3)';
    else if (currentTint === 'emerald') glassFill = 'rgba(40, 160, 110, 0.18)';
    else glassFill = 'rgba(255, 255, 255, 0.12)';

    ctx.fillStyle = glassFill;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Screw Base (Brass Hardware)
    ctx.fillStyle = '#C59A45';
    ctx.fillRect(centerX - 24, 215, 48, 22);
    ctx.strokeStyle = '#8E6822';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 24, 215, 48, 22);

    ctx.fillStyle = '#1A1114';
    ctx.beginPath();
    ctx.arc(centerX, 238, 14, 0, Math.PI);
    ctx.fill();

    // Tungsten Filament Supports
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(centerX - 12, 215);
    ctx.lineTo(centerX - 10, 155);
    ctx.moveTo(centerX + 12, 215);
    ctx.lineTo(centerX + 10, 155);
    ctx.stroke();

    // Glowing Filament Wire
    if (isOn && brightness > 0) {
      const glowVal = brightness / 100;
      const flicker = 1 + (Math.random() - 0.5) * 0.04;
      const filColor = `rgba(255, ${Math.min(255, 140 + (warmth - 1800) * 0.08)}, 70, ${glowVal * flicker})`;

      ctx.save();
      ctx.shadowColor = '#FFAA33';
      ctx.shadowBlur = 18 * glowVal;
      ctx.strokeStyle = filColor;
      ctx.lineWidth = 2.5 + glowVal * 1.5;
      ctx.beginPath();

      if (currentFilament === 'spiral') {
        ctx.moveTo(centerX - 10, 155);
        for (let i = 0; i < 7; i++) {
          const y = 155 - i * 8;
          const xOffset = (i % 2 === 0) ? 14 : -14;
          ctx.lineTo(centerX + xOffset, y);
        }
        ctx.lineTo(centerX + 10, 155);
      } else if (currentFilament === 'quad') {
        ctx.moveTo(centerX - 10, 155);
        ctx.lineTo(centerX - 18, 95);
        ctx.lineTo(centerX - 6, 95);
        ctx.lineTo(centerX, 145);
        ctx.lineTo(centerX + 6, 95);
        ctx.lineTo(centerX + 18, 95);
        ctx.lineTo(centerX + 10, 155);
      } else if (currentFilament === 'heart') {
        ctx.moveTo(centerX, 135);
        ctx.bezierCurveTo(centerX - 24, 85, centerX - 30, 120, centerX, 155);
        ctx.bezierCurveTo(centerX + 30, 120, centerX + 24, 85, centerX, 135);
      } else {
        // Zigzag Classic
        ctx.moveTo(centerX - 10, 155);
        ctx.lineTo(centerX - 15, 110);
        ctx.lineTo(centerX, 90);
        ctx.lineTo(centerX + 15, 110);
        ctx.lineTo(centerX + 10, 155);
      }

      ctx.stroke();

      // Hot core highlight
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    } else {
      // Cold off filament
      ctx.strokeStyle = '#554848';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(centerX - 10, 155);
      ctx.lineTo(centerX, 95);
      ctx.lineTo(centerX + 10, 155);
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(drawBulb);
  }

  drawBulb();

  // Controls listeners
  if (brightnessSlider) {
    brightnessSlider.addEventListener('input', (e) => {
      brightness = parseInt(e.target.value, 10);
      if (brightnessVal) brightnessVal.textContent = `${brightness}%`;
    });
  }

  if (warmthSlider) {
    warmthSlider.addEventListener('input', (e) => {
      warmth = parseInt(e.target.value, 10);
      if (warmthVal) warmthVal.textContent = `${warmth}K`;
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isOn = !isOn;
      toggleBtn.textContent = isOn ? '💡 ON' : '🌑 OFF';
      toggleBtn.classList.toggle('off', !isOn);
      playSound('click');
    });
  }

  tintBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tintBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTint = btn.getAttribute('data-tint');
      playSound('click');
    });
  });

  filamentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filamentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilament = btn.getAttribute('data-filament');
      playSound('click');
    });
  });
}

/* ==========================================================================
   10. DRAWCRAFT — DRAWING STUDIO SIMULATOR
   ========================================================================== */
function initDrawCraftStudio() {
  const canvas = document.getElementById('drawcraft-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let currentTool = 'pencil';
  let currentColor = '#2D141C';
  let currentSize = 3;
  let undoStack = [];

  function resizeDrawCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    saveState();
  }
  resizeDrawCanvas();
  window.addEventListener('resize', resizeDrawCanvas);

  function saveState() {
    if (undoStack.length > 15) undoStack.shift();
    undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  }

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function drawMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoords(e);

    if (currentTool === 'eraser') {
      ctx.strokeStyle = '#FFFDF9';
      ctx.lineWidth = currentSize * 3;
    } else if (currentTool === 'brush') {
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentSize * 2.2;
    } else if (currentTool === 'highlighter') {
      ctx.strokeStyle = `${currentColor}44`;
      ctx.lineWidth = currentSize * 3.5;
    } else {
      // Pencil / Pen
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = currentSize;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function stopDraw() {
    if (isDrawing) {
      isDrawing = false;
      ctx.closePath();
      saveState();
    }
  }

  // Mouse & Touch events
  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', drawMove);
  window.addEventListener('mouseup', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', drawMove, { passive: false });
  window.addEventListener('touchend', stopDraw);

  // Tools & Colors listeners
  const toolBtns = document.querySelectorAll('.draw-tool-btn');
  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toolBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTool = btn.getAttribute('data-tool');
    });
  });

  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      currentColor = swatch.getAttribute('data-color');
    });
  });

  const sizeSlider = document.getElementById('draw-stroke-size');
  if (sizeSlider) {
    sizeSlider.addEventListener('input', (e) => {
      currentSize = parseInt(e.target.value, 10);
    });
  }

  const undoBtn = document.getElementById('draw-undo-btn');
  if (undoBtn) {
    undoBtn.addEventListener('click', () => {
      if (undoStack.length > 1) {
        undoStack.pop();
        const prev = undoStack[undoStack.length - 1];
        ctx.putImageData(prev, 0, 0);
      }
    });
  }

  const clearBtn = document.getElementById('draw-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      saveState();
      playSound('click');
    });
  }

  const downloadBtn = document.getElementById('draw-download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'nisha-sketch.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Drawing saved to your downloads! 🎨');
    });
  }
}

/* ==========================================================================
   11. TALKING DICTIONARY AUDIO SYNTHESIS DEMO
   ========================================================================== */
function initTalkingDictionary() {
  const dictInput = document.getElementById('dict-input');
  const dictSpeakBtn = document.getElementById('dict-speak-btn');
  if (!dictInput || !dictSpeakBtn) return;

  function speakWord() {
    const text = dictInput.value.trim() || 'Aesthetic Web Design';
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
      showToast(`Speaking: "${text}" 🗣️`);
    } else {
      showToast('Speech synthesis not supported on this browser.');
    }
  }

  dictSpeakBtn.addEventListener('click', speakWord);
  dictInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') speakWord();
  });
}

/* ==========================================================================
   12. PROJECT DETAIL MODALS DATA & CONTROLLER
   ========================================================================== */
const PROJECT_MODAL_DATA = {
  'volta-and-co': {
    title: 'VOLTA & CO. — Vintage Bulbs',
    subtitle: 'Full-Stack Visually Immersive Vintage Lighting & Artisan Filament Web Experience',
    category: 'Full-Stack & Interactive 3D',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Express', 'MongoDB', 'Web Audio API', 'Canvas Confetti'],
    overview: 'VOLTA & CO. is a full-stack, visually immersive digital atelier dedicated to handcrafted vintage lighting, Edison bulbs, and luminous ambient spaces. It combines real-time filament glow physics with a comprehensive e-commerce catalog, customizer studio, and room ambiance simulator.',
    problem: 'Traditional lighting storefronts treat lighting as flat, static catalog items without conveying the warm radiance, filament geometry, color temperature, and ambient warmth that define vintage illumination.',
    solution: 'Designed and engineered an interactive digital experience where users can manipulate filament geometries, tweak glass tints, explore 360° views, simulate real-world room lighting, and customize bespoke lighting hardware with dynamic ambient glow calculations.',
    features: [
      'Interactive Filament & Glow Simulation: Real-time canvas glow physics with adjustable brightness and warmth.',
      'Bulb Studio Customizer: Full configurator allowing users to select bulb silhouettes, filament spirals, glass tints, and brass hardware.',
      'Ambiance Lab / Room Lighting Explorer: Spatial simulator demonstrating how lumen levels illuminate living spaces.',
      'Product Catalog & 360° Quick View: Faceted filtering, search, and rotational view modal.',
      'Cart, Coupons & Checkout Flow: Sliding cart drawer, promo validator, and multi-step checkout.'
    ]
  },
  'drawcraft': {
    title: 'DRAWCRAFT — Drawing Mastery Studio',
    subtitle: 'Comprehensive Drawing Mastery & Interactive Art Education Platform',
    category: 'Interactive Education & Canvas Studio',
    technologies: ['HTML5 Canvas API', 'JavaScript (ES6+)', 'Modern CSS', 'Node / Express', 'MongoDB'],
    overview: 'DrawCraft is an interactive visual art education platform bridging traditional sketching pedagogy with digital creativity through step-by-step lessons, an in-browser drawing studio, anatomy references, and color theory tools.',
    problem: 'Learning to draw online often suffers from passive video watching with no hands-on practice, lack of structural deconstruction, and missing guidance on lighting, anatomy, and color harmonies.',
    solution: 'Created an all-in-one digital atelier featuring step-by-step visual progression guides, a responsive digital drawing canvas with live brush physics, reference libraries, and daily challenges.',
    features: [
      'Interactive Digital Drawing Canvas: Supports pencil, pen, brush, highlighter, eraser, and PNG export.',
      'Step-by-Step Lesson Modules: Structured visual stage progressions (Shaded Sphere, Loomis Head, Eye).',
      'Color Studio & Harmony Wheel: Complementary, analogous, and triadic color schemes.',
      'Techniques & Materials Encyclopedia: Guides on graphite hardness (9H to 9B), cross-hatching, and blending.'
    ]
  },
  'painting-sales': {
    title: 'Painting Sales Marketplace',
    subtitle: 'Artisan Canvas Gallery & Artwork eCommerce Platform',
    category: 'eCommerce & Front-End UI',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Git'],
    overview: 'A modern, aesthetic storefront for independent artists to showcase and sell handcrafted oil, acrylic, and mixed-media canvas paintings with curated category filters, artwork detail modals, and seamless cart experience.',
    problem: 'Independent painters need a distraction-free, minimalist digital gallery to showcase physical texture, medium specifications, and canvas dimensions clearly to collectors.',
    solution: 'Built a responsive artwork catalog featuring high-resolution artwork inspection, dimensions and medium tags, instant category filtering, and an inquiry system.',
    features: [
      'Curated Canvas Gallery: Filterable gallery of original acrylic, oil, and watercolor paintings.',
      'Artwork Specification Inspector: Detailed breakdown of canvas dimensions and framing options.',
      'Artist Submission & Inquiry: Dedicated collector inquiry workflow.'
    ]
  },
  'talking-dictionary': {
    title: 'Talking Dictionary & Audio Thesaurus',
    subtitle: 'Accessibility-Driven Voice & Speech Synthesis Dictionary',
    category: 'Web APIs & Accessibility',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API', 'Dictionary API'],
    overview: 'A voice-enabled educational dictionary and thesaurus application designed to aid students and individuals with visual or reading impairments by converting word definitions and pronunciation into clear audio speech.',
    problem: 'Looking up unfamiliar vocabulary in print dictionaries is cumbersome and inaccessible to individuals with reading challenges or visual impairments.',
    solution: 'Created an instant search interface with Web Speech synthesis that speaks word meanings, phonetics, and antonyms aloud with single-click voice playback.',
    features: [
      'Instant Speech Synthesis: One-click vocal pronunciation and audio definition readouts.',
      'Comprehensive Thesaurus Index: Categorized synonyms, antonyms, and usage examples.',
      'High-Contrast Accessible UI: Clean, high-legibility interface optimized for quick word recall.'
    ]
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close');
  const openBtns = document.querySelectorAll('.open-project-modal-btn');
  if (!modal) return;

  function openModal(projectId) {
    const data = PROJECT_MODAL_DATA[projectId];
    if (!data) return;

    document.getElementById('modal-project-title').textContent = data.title;
    document.getElementById('modal-project-subtitle').textContent = data.subtitle;
    document.getElementById('modal-project-category').textContent = data.category;
    document.getElementById('modal-project-overview').textContent = data.overview;
    document.getElementById('modal-project-problem').textContent = data.problem;
    document.getElementById('modal-project-solution').textContent = data.solution;

    // Tech tags
    const techContainer = document.getElementById('modal-project-tech');
    techContainer.innerHTML = '';
    data.technologies.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Features list
    const featuresContainer = document.getElementById('modal-project-features');
    featuresContainer.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresContainer.appendChild(li);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    playSound('chime');
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-project');
      openModal(pId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

/* ==========================================================================
   13. RESUME VIEWER MODAL
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openBtn = document.getElementById('open-resume-modal-btn');
  const closeBtn = document.getElementById('resume-modal-close');
  if (!resumeModal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    playSound('chime');
  });

  function closeResume() {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeResume);
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('open')) closeResume();
  });
}

/* ==========================================================================
   14. CONTACT FORM & FLORAL CONFETTI
   ========================================================================== */
function initContactFormAndConfetti() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Copy Email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('nishaofficial137@gmail.com').then(() => {
        showToast('Email address copied to clipboard! 📋✨');
        playSound('chime');
      });
    });
  }

  // Form submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Trigger Confetti
      launchFloralConfetti();
      showToast(`Thank you, ${name}! Your message has been sent successfully. 🌷`);
      playSound('chime');
      form.reset();
    });
  }
}

// Floral Confetti Engine
function launchFloralConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#6B1F32', '#B9828F', '#E8D8C8', '#FFF9F2', '#8C2F46', '#D4A7B2'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 100,
      y: canvas.height / 2 + 100,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 16 - 6,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  let animationId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // Gravity
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      if (p.opacity > 0) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);

        // Petal shape
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      animationId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  updateConfetti();
}

/* ==========================================================================
   15. TOAST NOTIFICATION UTILITY
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}

/* ==========================================================================
   16. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playSound('click');
  });
}
