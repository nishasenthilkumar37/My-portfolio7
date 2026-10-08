// Authentic Portfolio Data for Nisha S
// Web Designer & Front-End Developer

export const OWNER_INFO = {
  name: "Nisha S",
  title: "Web Designer & Front-End Developer",
  tagline: "Bridging artistic visual identity with interactive front-end engineering.",
  bio: "I am a web designer and front-end developer passionate about crafting immersive, intuitive, and responsive digital experiences. With a foundation in Information Technology and systems management, I transform creative concepts into performant, elegant web applications.",
  email: "nishaofficial137@gmail.com",
  location: "Ooty, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/nisha-senthil-kumar-321440264",
  github: "https://github.com/",
  resumePdf: "/Nisha_Resume.pdf",
  resumeDocx: "/Nisha_Resume.docx",
  characterImage: "/assets/nisha-creative-character.png",
  avatarSvg: "/assets/images/avatar.svg",
  availability: "Available for Projects & Collaborations",
  educationHighlight: [
    {
      degree: "BSc Information Technology",
      institution: "Emerald Heights College for Women, Ooty",
      period: "Sep 2020 – May 2023",
      score: "CGPA 7.8",
      status: "Completed"
    },
    {
      degree: "MBA System Management",
      institution: "The Nilgiri Institution (Correspondence)",
      period: "Sep 2025 – Present",
      status: "Pursuing"
    }
  ]
};

export const SERVICES = [
  {
    id: "responsive-design",
    number: "01",
    title: "Responsive Website Design",
    subtitle: "Fluid layouts across all viewports",
    icon: "Layout",
    description: "Designing websites that adapt seamlessly across all devices — desktop, laptop, tablet, and mobile — with clean layouts, intuitive UX, and accessible color contrast.",
    deliverables: [
      "Mobile-First Responsive Layouts",
      "Adaptive Grid & Flexbox Architectures",
      "Touch-Optimized Mobile Interfaces",
      "Cross-Browser Compatibility"
    ],
    accent: "from-amber-500/20 to-amber-500/5",
    borderGlow: "rgba(230, 200, 139, 0.4)"
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Page Design",
    subtitle: "High-impact conversion experiences",
    icon: "Sparkles",
    description: "Creating high-impact, single-page promotional websites tailored to highlight your product, service, or brand with compelling visual storytelling and clear calls to action.",
    deliverables: [
      "Cinematic Hero Presentations",
      "Engaging Conversion Funnels",
      "Interactive Product Showcases",
      "Visual Hierarchy & Scroll Motion"
    ],
    accent: "from-rose-500/20 to-rose-500/5",
    borderGlow: "rgba(244, 166, 184, 0.4)"
  },
  {
    id: "portfolio-dev",
    number: "03",
    title: "Portfolio Website Development",
    subtitle: "Brand-defining personal showcases",
    icon: "Palette",
    description: "Building personal, creative, and professional portfolio websites that effectively showcase your skills, case studies, and achievements with memorable interactive depth.",
    deliverables: [
      "Custom Brand Visual Identity",
      "Interactive Case-Study Drawers",
      "Micro-Animations & Physics",
      "Interactive Work Demonstrations"
    ],
    accent: "from-teal-500/20 to-teal-500/5",
    borderGlow: "rgba(100, 223, 223, 0.4)"
  },
  {
    id: "business-web",
    number: "04",
    title: "Business Website Development",
    subtitle: "Credible & scalable web presence",
    icon: "Building2",
    description: "Developing clean, trustworthy multi-page websites for small businesses, agencies, and services looking to establish a polished, modern online presence.",
    deliverables: [
      "Structured Multi-Page Architectures",
      "Service & Product Showcases",
      "Interactive Contact & Inquiry Forms",
      "Performance & SEO-Ready Setup"
    ],
    accent: "from-indigo-500/20 to-indigo-500/5",
    borderGlow: "rgba(165, 180, 252, 0.4)"
  },
  {
    id: "website-redesign",
    number: "05",
    title: "Website Redesign",
    subtitle: "Modernizing outdated interfaces",
    icon: "RefreshCw",
    description: "Modernizing outdated websites with refreshed visual aesthetics, improved user navigation, better mobile responsiveness, accessible typography, and faster load times.",
    deliverables: [
      "Visual & UX Overhaul",
      "Legacy Code Refactoring",
      "Performance & Asset Optimization",
      "Enhanced Design Systems"
    ],
    accent: "from-cyan-500/20 to-cyan-500/5",
    borderGlow: "rgba(56, 178, 172, 0.4)"
  },
  {
    id: "react-frontend",
    number: "06",
    title: "React Front-End Development",
    subtitle: "Component-driven digital solutions",
    icon: "Code2",
    description: "Building dynamic, interactive user interfaces with React component architecture, clean state management, modular styling, and smooth API integrations.",
    deliverables: [
      "Reusable React Component Libraries",
      "Clean State & Effect Management",
      "Framer Motion & GSAP Animations",
      "Interactive Canvas & WebGL Hooks"
    ],
    accent: "from-amber-400/20 to-amber-400/5",
    borderGlow: "rgba(230, 200, 139, 0.4)"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Core Development",
    skills: [
      { name: "JavaScript (ES6+)", level: "Primary", description: "Modern async patterns, DOM manipulation, Web APIs & interactive logic", icon: "⚡", color: "#f7df1e" },
      { name: "HTML5", level: "Core", description: "Semantic markup, accessibility (a11y), SEO-friendly structure & canvas elements", icon: "🌐", color: "#e34f26" },
      { name: "CSS3 / Modern CSS", level: "Core", description: "Flexbox, CSS Grid, custom properties, keyframe animations & responsive queries", icon: "🎨", color: "#2965f1" },
      { name: "Python", level: "Foundation", description: "Algorithm fundamentals, scripting, data handling & backend integration", icon: "🐍", color: "#3776ab" },
      { name: "Java & C", level: "Academic", description: "Object-oriented programming, data structures & core computational logic", icon: "☕", color: "#007396" }
    ]
  },
  {
    name: "Databases & Architecture",
    skills: [
      { name: "MongoDB", level: "Database", description: "Document schemas, NoSQL collections & database integration with Express/Node", icon: "🍃", color: "#47a248" },
      { name: "SQL", level: "Database", description: "Relational database queries, table design & structured data management", icon: "🗄️", color: "#336791" },
      { name: "Node / Express Basics", level: "Backend", description: "RESTful API route architecture, JSON endpoints & middleware", icon: "🚀", color: "#68a063" }
    ]
  },
  {
    name: "Tools & Creative Tech",
    skills: [
      { name: "Git", level: "Version Control", description: "Branching, committing, staging & version history management", icon: "🌿", color: "#f05032" },
      { name: "GitHub", level: "Collaboration", description: "Repository hosting, project tracking & deployment workflows", icon: "🐙", color: "#ffffff" },
      { name: "Three.js / 3D Canvas", level: "Interactive", description: "WebGL scenes, 3D mesh rendering, lighting & interactive canvas effects", icon: "🔮", color: "#e6c88b" },
      { name: "Framer Motion", level: "Animation", description: "Declarative spring animations, layout transitions & scroll effects", icon: "✨", color: "#ff0055" },
      { name: "Responsive UI/UX", level: "Design", description: "Wireframing, typography, color balance & user journey optimization", icon: "📐", color: "#f4a6b8" }
    ]
  }
];

export const ALL_SKILLS_FLAT = [
  { name: "HTML", category: "Frontend", color: "#e34f26", tag: "Markup & Semantics" },
  { name: "CSS", category: "Frontend", color: "#2965f1", tag: "Styling & Responsive" },
  { name: "JavaScript", category: "Frontend", color: "#f7df1e", tag: "Dynamic Logic & Web APIs" },
  { name: "MongoDB", category: "Database", color: "#47a248", tag: "NoSQL Database" },
  { name: "Python", category: "Programming", color: "#3776ab", tag: "Scripting & Algorithms" },
  { name: "Git", category: "Tooling", color: "#f05032", tag: "Version Control" },
  { name: "GitHub", category: "Tooling", color: "#e2e8f0", tag: "Repository Management" },
  { name: "Three.js", category: "Interactive", color: "#e6c88b", tag: "3D & WebGL" },
  { name: "Web Audio API", category: "Interactive", color: "#f4a6b8", tag: "Audio Synthesis" },
  { name: "Responsive UI", category: "Design", color: "#64dfdf", tag: "Mobile & Desktop UX" }
];

export const PROJECTS = [
  {
    id: "volta-and-co",
    title: "VOLTA & CO. — Vintage Bulbs",
    subtitle: "Full-Stack Visually Immersive Vintage Lighting & Artisan Filament Web Experience",
    badge: "Featured Masterwork",
    category: "Full-Stack & Interactive 3D",
    heroImage: "/assets/images/project-aura-ui.svg",
    liveDemoAvailable: true,
    hasInteractiveSimulator: true,
    simulatorType: "bulb-studio",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Express",
      "MongoDB",
      "Web Audio API",
      "Canvas Confetti"
    ],
    overview: "VOLTA & CO. is a full-stack, visually immersive digital atelier dedicated to handcrafted vintage lighting, Edison bulbs, and luminous ambient spaces. It combines real-time filament glow physics with a comprehensive e-commerce catalog, customizer studio, and room ambiance simulator.",
    problemStatement: "Traditional lighting storefronts treat lighting as flat, static catalog items without conveying the warm radiance, filament geometry, color temperature, and ambient warmth that define vintage illumination.",
    solution: "Designed and engineered an interactive digital experience where users can manipulate filament geometries, tweak glass tints, explore 360° views, simulate real-world room lighting, and customize bespoke lighting hardware with dynamic ambient glow calculations.",
    keyFeatures: [
      {
        title: "Interactive Filament & Glow Simulation",
        desc: "Real-time canvas glow physics with adjustable brightness, filament warmth, and flicker effects using custom rendering."
      },
      {
        title: "Bulb Studio Customizer",
        desc: "Full interactive configurator allowing users to select bulb silhouettes (Edison, Globe, Tubular, Teardrop), filament spirals, glass tints (Amber, Smoke, Clear, Emerald), and brass/matte hardware."
      },
      {
        title: "Ambiance Lab / Room Lighting Explorer",
        desc: "Interactive spatial simulator demonstrating how varying lumen levels and color temperatures (1800K candle warm to 3000K soft white) illuminate distinct interiors (Living Room, Study, Loft)."
      },
      {
        title: "Product Catalog & 360° Quick View",
        desc: "Faceted category filtering, instant search, specifications breakdown, and smooth 360-degree rotation view modal."
      },
      {
        title: "Cart, Coupons & Checkout Flow",
        desc: "Interactive sliding cart drawer, promo coupon validator, shipping estimation, and multi-step checkout modal with confetti."
      },
      {
        title: "Bulb Anatomy & Craft Science Guide",
        desc: "Interactive educational section highlighting tungsten filament physics, hand-blown borosilicate glass, and brass base anatomy."
      }
    ],
    contribution: "Architected the full-stack system, designed the dark vintage luxury aesthetic, engineered the dynamic glow canvas algorithms, implemented the responsive UI components in React, integrated audio feedback via Web Audio API, and built the Express/MongoDB product schema.",
    githubUrl: "https://github.com/",
    liveUrl: "#"
  },
  {
    id: "drawcraft-drawing-mastery",
    title: "DRAWCRAFT — Drawing Mastery Studio",
    subtitle: "Comprehensive Drawing Mastery & Interactive Art Education Platform",
    badge: "Featured Masterwork",
    category: "Interactive Education & Canvas Studio",
    heroImage: "/assets/images/project-how-to-draw.svg",
    liveDemoAvailable: true,
    hasInteractiveSimulator: true,
    simulatorType: "drawing-canvas",
    technologies: [
      "React",
      "Vite",
      "Node / Express",
      "MongoDB",
      "Modern CSS",
      "Lucide Icons",
      "HTML5 Canvas API"
    ],
    overview: "DrawCraft is an interactive, comprehensive drawing mastery and visual art education platform. Built with React and Vite, it bridges traditional sketching pedagogy with digital creativity through step-by-step interactive lessons, an in-browser drawing canvas, anatomy references, and color theory studios.",
    problemStatement: "Learning to draw online often suffers from passive video watching with no hands-on practice, lack of structural step-by-step deconstruction, and missing guidance on lighting, anatomy, and color harmonies.",
    solution: "Created an all-in-one digital atelier featuring step-by-step visual progression guides, a responsive digital drawing canvas with live brush physics, reference libraries, daily timed sketching challenges, and art assessment quizzes.",
    keyFeatures: [
      {
        title: "Interactive Digital Drawing Canvas",
        desc: "Feature-packed browser canvas supporting pencil/pen/brush strokes, stroke size slider, opacity controls, color palette, undo/redo stack, and PNG export."
      },
      {
        title: "Step-by-Step Lesson Modules",
        desc: "Structured visual stage progression (e.g. 3D Shaded Sphere, Loomis Head Construction, Realistic Eye) with step-by-step instructions, pro tips, and key concepts."
      },
      {
        title: "Reference Library & Form Guides",
        desc: "Curated collection of 3D geometric primitives, human anatomy, dynamic pose grids, and light-angle studies for practice."
      },
      {
        title: "Color Studio & Harmony Wheel",
        desc: "Interactive color wheel illustrating complementary, analogous, and triadic color schemes with color temperature sliders."
      },
      {
        title: "Daily Challenges & Timed Sprints",
        desc: "Daily sketching prompts with countdown timers to encourage consistent practice and creative habits."
      },
      {
        title: "Techniques & Materials Encyclopedia",
        desc: "Guides on graphite hardness grades (9H to 9B), cross-hatching, blending stumps, eraser techniques, and paper textures."
      }
    ],
    contribution: "Designed the clean educational user experience, developed the HTML5 Canvas drawing engine with pressure simulation, structured the comprehensive multi-step art curriculum dataset, and built the responsive React client architecture.",
    githubUrl: "https://github.com/",
    liveUrl: "#"
  },
  {
    id: "painting-sales-marketplace",
    title: "Painting Sales Marketplace",
    subtitle: "Artisan Canvas Gallery & Artwork eCommerce Platform",
    badge: "Portfolio Project",
    category: "eCommerce & Front-End UI",
    heroImage: "/assets/images/project-painting-sales.svg",
    liveDemoAvailable: false,
    hasInteractiveSimulator: false,
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "MongoDB", "Git"],
    overview: "A modern, aesthetic storefront for independent artists to showcase and sell handcrafted oil, acrylic, and mixed-media canvas paintings with curated category filters, artwork detail modals, and seamless cart experience.",
    problemStatement: "Independent painters need a distraction-free, minimalist digital gallery to showcase physical texture, medium specifications, and canvas dimensions clearly to prospective art collectors.",
    solution: "Built a responsive artwork catalog featuring high-resolution artwork inspection, dimensions and medium tags, instant category filtering, and an inquiry system.",
    keyFeatures: [
      { title: "Curated Canvas Gallery", desc: "Filterable gallery of original acrylic, oil, and watercolor paintings with texture previews." },
      { title: "Artwork Specification Inspector", desc: "Detailed breakdown of canvas dimensions, medium composition, framing options, and artist notes." },
      { title: "Artist Submission & Inquiry", desc: "Dedicated workflow for collectors to submit inquiries or artists to list new artwork." }
    ],
    contribution: "Developed the front-end gallery interface, implemented category filtering states, built the artwork modal viewer, and connected MongoDB backend models.",
    githubUrl: "https://github.com/",
    liveUrl: "#"
  },
  {
    id: "talking-dictionary",
    title: "Talking Dictionary & Audio Thesaurus",
    subtitle: "Accessibility-Driven Voice & Speech Synthesis Dictionary",
    badge: "Academic Project",
    category: "Web APIs & Accessibility",
    heroImage: "/assets/images/project-talking-dictionary.svg",
    liveDemoAvailable: false,
    hasInteractiveSimulator: false,
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Speech API", "Dictionary API"],
    overview: "A voice-enabled educational dictionary and thesaurus application designed to aid students and individuals with visual or reading impairments by converting word definitions, synonyms, and pronunciation into clear audio speech.",
    problemStatement: "Looking up unfamiliar vocabulary in print dictionaries is cumbersome and inaccessible to individuals with reading challenges or visual impairments.",
    solution: "Created an instant search interface with Web Speech synthesis that speaks word meanings, phonetics, and antonyms aloud with single-click voice playback.",
    keyFeatures: [
      { title: "Instant Speech Synthesis", desc: "One-click vocal pronunciation and audio definition readouts." },
      { title: "Comprehensive Thesaurus Index", desc: "Categorized synonyms, antonyms, parts of speech, and usage examples." },
      { title: "High-Contrast Accessible UI", desc: "Clean, high-legibility interface optimized for quick word recall." }
    ],
    contribution: "Engineered the Web Speech API integration, designed the responsive lookup layout, and handled asynchronous dictionary data fetching.",
    githubUrl: "https://github.com/",
    liveUrl: "#"
  }
];

export const EDUCATION_DATA = [
  {
    period: "Sep 2025 – Present",
    degree: "MBA in System Management",
    institution: "The Nilgiri Institution (Correspondence)",
    location: "Ooty, Tamil Nadu",
    status: "Pursuing",
    badge: "Currently Pursuing",
    description: "Deepening knowledge in systems management, digital enterprise architectures, IT strategic leadership, workflow optimization, and technology business alignment.",
    skillsGained: ["System Analysis", "IT Project Planning", "Strategic Management", "Database Systems"]
  },
  {
    period: "Sep 2020 – May 2023",
    degree: "BSc in Information Technology",
    institution: "Emerald Heights College for Women",
    location: "Ooty, Tamil Nadu",
    status: "Graduated",
    score: "CGPA: 7.8 / 10",
    badge: "Graduated with 7.8 CGPA",
    description: "Built a solid academic foundation in computer science, web technologies, software programming (C, Java, Python), database management systems, and client-server architectures.",
    skillsGained: ["Web Development", "Computer Science Principles", "Programming Fundamentals", "Database Management"]
  },
  {
    period: "Jun 2019 – Apr 2020",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Model Higher Secondary School",
    location: "Thuneri, Tamil Nadu",
    status: "Completed",
    score: "Score: 61%",
    badge: "Completed",
    description: "Completed secondary education with focus on science and mathematics fundamentals.",
    skillsGained: ["Mathematics", "Science Foundations", "Analytical Thinking"]
  },
  {
    period: "Jun 2017 – Apr 2018",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government Model Higher Secondary School",
    location: "Thuneri, Tamil Nadu",
    status: "Completed",
    score: "Score: 76%",
    badge: "Completed",
    description: "Foundational secondary school education with distinction in academic coursework.",
    skillsGained: ["Academic Discipline", "Foundational Science"]
  }
];

export const DESIGN_PHILOSOPHY = [
  {
    title: "Artistry in Logic",
    subtitle: "Where aesthetics meet clean code",
    desc: "Every line of CSS and React code should serve both aesthetic harmony and rock-solid usability."
  },
  {
    title: "Responsive by Nature",
    subtitle: "Flawless on any viewport",
    desc: "Web experiences must feel native, fluid, and deliberate whether viewed on a 4K monitor or an iPhone."
  },
  {
    title: "Sensory Engagement",
    subtitle: "Motion with purpose",
    desc: "Subtle micro-interactions, ambient lighting, and gentle depth elevate a website from informative to unforgettable."
  }
];
