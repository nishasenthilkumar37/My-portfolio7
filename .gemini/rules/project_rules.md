# Project Rules & Technology Directives

## Core Technology Directives
1. **Plain Web Standards Only**:
   - This project strictly uses **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)**.
   - **DO NOT** introduce, install, or generate React, React JSX, React components, Vite, Next.js, TypeScript, npm packages, build tools, or frontend frameworks.
   - All website features must run directly by opening `index.html` in any web browser without any compilation, bundling, or build steps.

2. **File Structure & Organization**:
   - `index.html`: Master semantic HTML structure containing all sections, modals, and templates.
   - `css/style.css`: Master CSS3 style sheet (custom properties, responsive layout, animations, glassmorphism, themes).
   - `js/app.js`: Master vanilla JavaScript application file (opening curtain, 3D parallax, Web Audio API, Canvas simulators, modals, form validation, confetti).
   - `assets/`: Images, icons, and document assets (`assets/realistic-tulip.jpg`, `assets/Nisha_Resume.pdf`, etc.).

3. **Visual Identity & Theme**:
   - Palette: Cream (`#F7F0E6`), Deep Burgundy (`#6B1F32`), Dusky Pink (`#B9828F`), Soft Beige (`#E8D8C8`), Dark Brown (`#3B2929`), and Off-White (`#FFF9F2`).
   - Tulip Background: The realistic tulip photographic background is **strictly scoped to the Hero section (`#home`)** and must not be placed on other sections.
   - Contrast & Readability: Always maintain high contrast and clear text readability.

4. **Preservation of Interactive Systems**:
   - Do not remove or degrade existing interactive features: Opening curtain entrance, 3D Hero parallax, VOLTA & CO. Bulb Studio Canvas simulator, DRAWCRAFT Canvas Studio, Talking Dictionary speech synthesis demo, Resume viewer, and Contact form with confetti.
