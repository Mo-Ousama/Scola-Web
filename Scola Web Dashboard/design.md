# Scola Educational Platform - Design Style Guide

## Design Philosophy

### Color Palette
**Primary Colors:**
- Deep Teal: #0D4F4F (Trust, stability, educational authority)
- Warm Coral: #FF6B6B (Energy, creativity, engagement)
- Soft Lavender: #A8A8FF (Innovation, technology, future-focused)

**Secondary Colors:**
- Sage Green: #8FBC8F (Growth, learning, nature)
- Warm Beige: #F5F5DC (Comfort, accessibility, warmth)
- Charcoal: #2F2F2F (Professional, readable, sophisticated)

**Accent Colors:**
- Golden Yellow: #FFD700 (Achievement, success, highlights)
- Soft Blue: #87CEEB (Calm, focus, digital learning)

### Typography
**Display Font:** "Canela" - Bold serif for headings and hero text
**Body Font:** "Suisse Int'l" - Clean sans-serif for readability
**Code Font:** "JetBrains Mono" - Monospace for code examples

**Hierarchy:**
- H1: 3.5rem (56px) - Hero headlines
- H2: 2.5rem (40px) - Section headers
- H3: 1.75rem (28px) - Subsection titles
- Body: 1rem (16px) - Standard text
- Small: 0.875rem (14px) - Captions and metadata

### Visual Language
**Approach:** Modern educational editorial meets playful innovation
**Inspiration:** Kinfolk magazine's minimalism + Wired's tech-forward aesthetic
**Tone:** Professional yet approachable, innovative but trustworthy

## Visual Effects & Animation

### Core Libraries Used
1. **Anime.js** - Smooth micro-interactions and element animations
2. **ECharts.js** - Data visualization for progress tracking and analytics
3. **p5.js** - Creative coding background effects and interactive elements
4. **Pixi.js** - Advanced visual effects for hero sections
5. **Typed.js** - Typewriter effects for dynamic text
6. **Splide.js** - Image carousels and content sliders
7. **Splitting.js** - Text animation effects

### Background Effects
**Hero Section:** Animated particle system using p5.js representing code nodes and connections
**Dashboard Backgrounds:** Subtle geometric patterns with soft color transitions
**Interactive Areas:** Liquid-metal displacement effects for premium feel

### Text Effects
**Hero Headlines:** Typewriter animation with gradient color cycling
**Section Titles:** Split-by-letter stagger animations on scroll
**Code Examples:** Syntax highlighting with smooth transitions
**Call-to-Action:** Subtle glow and scale effects on hover

### Interactive Elements
**Buttons:** 3D tilt effects with depth shadows
**Cards:** Lift and reveal animations with overlay information
**Progress Indicators:** Animated fill effects with particle trails
**Navigation:** Smooth morphing underlines and background transitions

### Scroll Motion Effects
**Reveal Animations:** Elements fade in with 20px upward translation
**Parallax Elements:** Subtle background movement (max 8% translateY)
**Stagger Timing:** 100ms delays between related elements
**Trigger Point:** Animation starts when element enters top 50% of viewport

### Hover Effects
**Interactive Cards:** 3D perspective tilt with shadow expansion
**Image Galleries:** Zoom with gradient mask reveals
**Navigation Items:** Color morphing with smooth transitions
**Buttons:** Glow edges with scale and shadow effects

## Layout & Composition

### Grid System
**Desktop:** 12-column grid with 24px gutters
**Tablet:** 8-column grid with 20px gutters  
**Mobile:** 4-column grid with 16px gutters

### Spacing Scale
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 48px
- XL: 72px
- XXL: 96px

### Component Styling
**Cards:** Soft shadows with rounded corners (12px radius)
**Buttons:** Pill-shaped with gradient backgrounds
**Forms:** Clean inputs with floating labels and focus states
**Modals:** Backdrop blur with centered content cards

## Image Treatment

### Hero Images
**Style:** High-contrast, editorial photography with natural lighting
**Treatment:** No color overlays, maintain authentic colors
**Aspect Ratios:** 16:9 for banners, 4:3 for cards, 1:1 for avatars

### Educational Content
**Illustrations:** Custom SVG icons with consistent line weights
**Photography:** Real students and teachers in authentic learning environments
**Screenshots:** Clean interface captures with subtle device frames

### Background Elements
**Patterns:** Subtle geometric shapes with low opacity
**Textures:** Paper-like grain for warmth and tactility
**Gradients:** Soft color transitions with natural color progression

## Responsive Design

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large: 1440px+

### Mobile-First Approach
**Navigation:** Collapsible hamburger menu with slide-out drawer
**Content:** Single-column layout with increased touch targets
**Images:** Optimized sizing with maintained aspect ratios
**Typography:** Scaled font sizes for optimal readability

## Accessibility

### Color Contrast
**Text on Background:** Minimum 4.5:1 ratio
**Interactive Elements:** Minimum 3:1 ratio for large text
**Focus States:** High contrast outlines for keyboard navigation

### Motion Preferences
**Reduced Motion:** Respect user preferences with CSS media queries
**Alternative Indicators:** Static alternatives for animated content
**Performance:** Optimized animations for smooth 60fps experience

This design system creates a cohesive, modern educational platform that feels both professional and engaging, perfect for learners from age 7 and up while maintaining the sophisticated aesthetic needed for adult learners.