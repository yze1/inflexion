# Website Styleguide: Minimal AI / Policy Advisory Interface System

This styleguide defines the visual system for the Foresight website. It controls color, typography, component finish, motion, accessibility, and visual tone. Page flow, content hierarchy, header/footer content, and section order belong in `architecture.md`.

## 1. Core Direction

The website should feel like a premium AI policy advisory firm: calm, spacious, precise, and technical without becoming cold. The visual language should be mostly white, soft blue, light grey, charcoal text, fine borders, large whitespace, translucent atmospheric gradients, and quiet policy-intelligence interface surfaces.

The strongest reference direction is a restrained editorial interface system: pale blue atmospheric sections, oversized lightweight typography, modular content cards, soft data graphics, thin dividers, and lots of white space. The site should avoid dense “startup template” design. It should feel closer to a refined policy briefing interface than a generic AI SaaS site.

The guiding principles:

White-first interface  
Soft blue brand atmosphere  
Large typographic hierarchy  
Minimal UI chrome  
Grid-compatible components  
Low visual noise  
Functional rather than decorative components  
Subtle grain and gradients  
Readable across mobile, desktop, and large screens  

## 2. Brand Colour System

Use CSS variables from the start. The main color must be named `--brand-color`.

```css
:root {
  --brand-color: #BAD5F3;

  --background: #FFFFFF;
  --background-soft: #F8FAFC;
  --background-blue: #EEF6FF;

  --text-primary: #111111;
  --text-secondary: #6F7478;
  --text-muted: #A6ADB3;

  --border-light: rgba(17, 17, 17, 0.08);
  --border-medium: rgba(17, 17, 17, 0.14);

  --surface: #FFFFFF;
  --surface-soft: #F7F9FB;
  --surface-blue: #EFF6FE;

  --success: #66D6B6;
  --warning: #EFD98B;
  --danger: #E9A0A0;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-soft: 0 12px 40px rgba(17, 17, 17, 0.035);
}
```

The brand color should behave as an atmospheric accent, not a loud CTA color. It works best in gradients, chart fills, hover states, active nav items, tags, section glows, data visualization, and subtle background fields.

Avoid saturated blues. Avoid neon cyan. Avoid dark corporate navy unless used sparingly for text or button states.

## 3. Typography

Use TeX Gyre Heros for almost everything. It should define the overall identity of the site: Swiss, clean, functional, slightly editorial.

Use Space Mono only for captions, metadata, labels, coordinates, eyebrow text, small technical annotations, form hints, and UI diagnostics.

```css
@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/assets/fonts/texgyreheros-regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/assets/fonts/texgyreheros-bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Space Mono";
  src: url("/assets/fonts/SpaceMono-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Space Mono";
  src: url("/assets/fonts/SpaceMono-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-main: "TeX Gyre Heros", "Helvetica Neue", Arial, sans-serif;
  --font-caption: "Space Mono", "SF Mono", monospace;
}
```

### Type Scale

Hero headline:

```css
font-family: var(--font-main);
font-size: clamp(3.25rem, 8vw, 8.5rem);
line-height: 0.95;
letter-spacing: -0.055em;
font-weight: 400;
```

Large section headline:

```css
font-size: clamp(2.5rem, 5vw, 6rem);
line-height: 1;
letter-spacing: -0.045em;
font-weight: 400;
```

Medium heading:

```css
font-size: clamp(1.75rem, 3vw, 3.5rem);
line-height: 1.05;
letter-spacing: -0.035em;
font-weight: 400;
```

Body copy:

```css
font-size: clamp(1rem, 1.15vw, 1.2rem);
line-height: 1.45;
letter-spacing: -0.015em;
font-weight: 400;
color: var(--text-secondary);
```

Caption / metadata:

```css
font-family: var(--font-caption);
font-size: 0.72rem;
line-height: 1.35;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--text-muted);
```

### Typography Behaviour

Headlines should be large, light, and spacious. Use weight 400 wherever possible. Avoid bold display typography unless needed for contrast inside compact interface modules.

Use narrow text blocks. Long paragraphs should not exceed 620px. Hero text can be wider, but still needs controlled line breaks.

Preferred headline rhythm:

```text
Preparing clients
to navigate AI policy
```

Avoid marketing clichés such as “next-gen”, “revolutionary”, “seamless”, “unlock”, “elevate”, and “supercharge”. Use direct functional language.

## 4. Header and Navigation

Navigation should be minimal, thin, and horizontally spacious.

Header styling should use a translucent white surface, a thin bottom border, restrained spacing, and a small logo or wordmark. Active states should use a tiny underline or light blue highlight, not a heavy filled button.

```css
.nav {
  min-height: 72px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
}
```

```css
.nav-link {
  font-size: 0.88rem;
  color: rgba(17, 17, 17, 0.62);
  text-decoration: none;
}

.nav-link.is-active {
  color: var(--text-primary);
}

.nav-link.is-active::after {
  background: var(--brand-color);
}
```

Mobile navigation should collapse into a simple menu button. Avoid full-screen flashy overlays. Use a white panel with thin dividers.

## 5. Atmospheric Sections

Atmospheric sections should feel open, pale, and restrained. Use white-to-blue gradients and grain overlays as visual tone, not as structural direction. Architecture determines where hero, briefing, service, and CTA sections appear.

Example atmospheric background:

```css
.atmospheric-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 10%, rgba(186, 213, 243, 0.72), transparent 38%),
    linear-gradient(180deg, rgba(186, 213, 243, 0.45) 0%, #FFFFFF 72%);
}
```

Do not use multiple competing CTA styles. One primary action and one quiet secondary link is enough.

## 6. Grainy Gradient System

The site should use grain as a controlled texture layer, not as a visible dirty overlay.

Use a pseudo-element or fixed texture layer:

```css
.grain::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.13;
  mix-blend-mode: multiply;
  background-image: url("/assets/noise.png");
  background-size: 180px 180px;
}
```

If using CSS-only noise:

```css
.noise-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 100;
  opacity: 0.035;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(0,0,0,0.18) 0 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(0,0,0,0.12) 0 1px, transparent 1px);
  background-size: 3px 3px, 4px 4px;
}
```

Gradient rules:

Use gradients at low opacity.  
Use blue, white, light grey, and occasional pale mint/yellow only.  
Avoid rainbow gradients.  
Avoid high contrast bloom.  
Avoid dark-to-neon AI clichés.  
Do not place body text over busy gradients.  
Use gradients primarily as atmosphere behind key sections, transitions, and policy-intelligence surfaces.

## 7. Cards and Content Surfaces

Cards and content surfaces should be flat, pale, and quiet. Use thin borders and minimal shadows. Architecture determines where cards appear and what information they contain.

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: clamp(24px, 3vw, 48px);
  box-shadow: var(--shadow-soft);
}
```

Cards should contain one clear idea each. Avoid icons plus title plus paragraph plus list plus graph unless the card is intentionally an interface-style information module.

Use Foresight-relevant content from `foresight.md`, such as policy strategy, legislative monitoring, policymaker engagement, strategic advocacy, regulatory risk, and AI policy intelligence.

## 8. Buttons

Buttons should be restrained. Avoid pill shapes for large buttons. Use slightly rounded rectangles.

Primary:

```css
.button-primary {
  background: #111111;
  color: #FFFFFF;
  border: 1px solid #111111;
  border-radius: 6px;
  padding: 12px 18px;
  font-family: var(--font-main);
  font-size: 0.92rem;
  letter-spacing: -0.01em;
}
```

Secondary:

```css
.button-secondary {
  background: rgba(255,255,255,0.72);
  color: #111111;
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 12px 18px;
}
```

Brand button:

```css
.button-brand {
  background: var(--brand-color);
  color: #111111;
  border: 1px solid rgba(17,17,17,0.06);
  border-radius: 6px;
}
```

Hover states should be subtle:

```css
.button:hover {
  transform: translateY(-1px);
}

.button:active {
  transform: scale(0.98);
}
```

## 9. Policy Intelligence UI Surfaces

Policy intelligence and briefing surfaces should use the same visual language as the site. These can include article previews, source metadata, jurisdiction tags, service summaries, partner details, and concise risk or relevance notes.

Interface container:

```css
.interface-frame {
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(17,17,17,0.08);
  border-radius: 18px;
  box-shadow: 0 24px 80px rgba(32, 62, 92, 0.08);
  backdrop-filter: blur(18px);
  overflow: hidden;
}
```

Internal UI rules:

Thin dividers  
Soft blue chart fills  
Very light grey surfaces  
Minimal labels  
Clear source and date metadata  
Sparse buttons  
No heavy icons  
No dark mode panels unless used as contrast blocks  

Interface typography:

```css
.ui-label {
  font-family: var(--font-caption);
  font-size: 0.68rem;
  text-transform: uppercase;
  color: var(--text-muted);
}

.ui-emphasis {
  font-family: var(--font-main);
  font-size: clamp(1.75rem, 3vw, 3.5rem);
  letter-spacing: -0.04em;
  color: var(--text-primary);
}
```

## 10. Data Visualisation

Charts should look like interface texture, not generic analytics.

Use:

Soft blue bars  
Thin vertical rhythm lines  
Circular progress rings  
Muted green for constructive or low-risk states  
Light grey inactive states  
Space Mono captions  

Avoid:

High saturation  
Thick chart strokes  
Default chart colors  
3D charts  
Over-labelled axes  

Example:

```css
.chart-bar {
  background: linear-gradient(
    180deg,
    rgba(186, 213, 243, 0.9),
    rgba(186, 213, 243, 0.35)
  );
  border-radius: 2px 2px 0 0;
}
```

## 11. Image Direction

Use imagery sparingly. The site should not feel like a stock-photo template.

Photography direction:

Desaturated  
Soft daylight  
Corporate but not generic  
Low contrast  
Cool white/blue tone  
Cropped with lots of negative space  
Optional grain overlay  
Rounded corners that match card surfaces  

Image containers should use the same radius language as the rest of the interface. Use `var(--radius-lg)` for editorial images, image strips, and framed visuals so they align with cards and policy cells. When an image is inside a framed figure, the image itself should inherit the container radius to avoid square image corners inside rounded UI surfaces.

```css
.editorial-figure,
.framed-image {
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.editorial-figure img,
.framed-image img {
  border-radius: inherit;
}
```

Interface visuals:

Floating information surfaces  
Soft shadows  
Pale blue backplates  
Glass only if extremely subtle  
No heavy 3D gloss  
No neon reflections  

## 12. Iconography

Use custom SVG marks or very simple geometric icons. Avoid generic thin-line icon packs.

Icon style:

Filled or semi-filled  
Simple geometry  
Consistent weight  
Small scale  
Used as UI markers, not decoration  

Example system:

Small square  
Three-line menu glyph  
Arrow up-right  
Circular process node  
Dot matrix control icon  

### Foresight Icon Application

The custom icons in `assets/icons/` are part of the policy-intelligence interface language. They should be used as quiet semantic markers inside cards, service rows, forms, and advisory surfaces, not as large illustrations or decorative hero art.

Icon containers should remain small, square, and lightly framed:

```css
.icon-mark {
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  color: var(--text-primary);
  background: rgba(186, 213, 243, 0.16);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
}

.icon-mark img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  opacity: 0.82;
}
```

Use icons by meaning:

Policy Radar: policy monitoring, emerging signals, and market/regulatory scanning.  
Capitol Node: government oversight, public institutions, and policymaker context.  
Regulatory Grid: regulatory frameworks, AI governance systems, and structured compliance questions.  
Signal Lines: policy-intelligence feeds, updates, metadata, and real-time monitoring.  
Risk Ring: risk assessment, readiness, exposure, uncertainty, and issue pressure.  
Stakeholder Orbit: policymaker engagement, stakeholder mapping, coalition strategy, and advocacy.  
Briefing Document: briefing requests, advisory memos, issue summaries, and client-ready analysis.  
AI Governance Chip: AI-specific governance, emerging technology, model oversight, and technical-policy translation.  
Decision Path: scenario planning, policy choices, strategic options, and decision support.  
Legislative Timeline: legislative monitoring, procedural movement, policy trackers, and staged developments.  
Jurisdiction Marker: state-level policy, federal/state comparison, geography, and jurisdictional scope.  
Advisory Compass: advisory services, strategic direction, navigation, and client guidance.

Application rules:

Keep icons optically secondary to headings and body copy.  
Use one icon per card or row.  
Do not enlarge icons above 56px unless they are inside a deliberate interface module.  
Do not place icons inside filled circles or pill badges.  
Use pale blue only as a surface or active accent, not as a saturated icon fill.  
Pair Space Mono labels with icons when the surface behaves like a tracker, feed, or briefing module.  
Prefer semantic variety across adjacent cards so repeated sections feel mapped, not patterned.

## 13. Borders, Dividers, and Lines

Use borders as the main structural device.

```css
.divider {
  height: 1px;
  background: rgba(17, 17, 17, 0.08);
}
```

Gridlines can appear in technical or policy-intelligence surfaces, but they should be faint.

```css
.grid-background {
  background-image:
    linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px);
  background-size: 64px 64px;
}
```

## 14. Motion

Motion should be slow, subtle, and functional.

Use:

Fade-in on scroll  
Small upward movement  
Very slow ambient gradient drift  
Slight hover lift on cards  
Micro button scale on click  

Avoid:

Parallax overload  
Fast scroll-jacking  
Bouncy easing  
Animated counters everywhere  
Excessive loading animations  

```css
.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

## 15. Accessibility

The light blue brand color should not be used alone for small text. Use it for backgrounds, highlights, or large display text only when contrast remains readable.

Text contrast rules:

Primary text: `#111111` on white  
Secondary text: no lighter than `#6F7478` for body copy  
Muted text: only for labels, captions, non-essential metadata  
Buttons: ensure clear contrast  
Do not place small white text over pale blue gradients  

Minimum tap target: 44px height.  
Keyboard focus states must be visible.

```css
:focus-visible {
  outline: 2px solid var(--brand-color);
  outline-offset: 3px;
}
```

## 16. Copywriting Style

Use direct advisory language.

Good:

```text
Monitor AI policy developments before they become regulatory risk.
Help clients anticipate, shape, and navigate AI regulation.
Translate legislative activity into strategic options.
Prepare leaders to engage policymakers with clarity.
```

Avoid:

```text
Unlock seamless AI transformation.
Supercharge your next-generation AI policy journey.
Elevate your business with AI-powered innovation.
```

Tone:

Plain  
Confident  
Specific  
Operational  
Minimal  
No hype  

## 17. CSS Foundation

A usable foundation:

```css
* {
  box-sizing: border-box;
}

html {
  font-family: var(--font-main);
  background: var(--background);
  color: var(--text-primary);
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text-primary);
}

img,
video,
canvas,
svg {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

::selection {
  background: rgba(186, 213, 243, 0.55);
  color: #111111;
}
```

## 18. Visual Rules Summary

Use white as the main surface.  
Use `#BAD5F3` as atmosphere, not decoration.  
Use TeX Gyre Heros for the whole identity.  
Use Space Mono only for captions and metadata.  
Use thin borders instead of heavy shadows.  
Use large type and large spacing.  
Use grainy gradients with restraint.  
Use modular policy-intelligence and advisory content surfaces.  
Let `architecture.md` define page flow and structural layout.  
Avoid generic SaaS icons, saturated colors, heavy blur, neon AI styling, and copywriting clichés.  
Keep everything readable before making it expressive.

## 19. Motion Guide

Motion should make the website feel more deliberate, interactive, and premium without becoming decorative or distracting. The site should feel like an advisory briefing unfolding as the user moves through it: calm, structured, and controlled.

Motion must support hierarchy, readability, and conversion. It should never compete with the content.

### Motion Principles

Use motion to:

Guide attention  
Create pacing between sections  
Clarify hierarchy  
Make scroll behaviour feel responsive  
Add polish to interface elements  
Reinforce the site’s advisory, policy-intelligence tone  

Avoid motion that feels:

Playful  
Bouncy  
Overly technological  
Fast or aggressive  
Decorative without function  
Similar to generic SaaS templates  

The correct motion language is:

Slow  
Subtle  
Editorial  
Precise  
Atmospheric  
Functional  

### Timing System

Use a small set of consistent durations.

Fast interaction:

```css
--motion-fast: 180ms;
```

Used for buttons, links, hover states, active states, and small UI feedback.

Standard reveal:

```css
--motion-standard: 650ms;
```

Used for section content, cards, headings, paragraphs, and image reveals.

Slow emphasis:

```css
--motion-slow: 900ms;
```

Used for hero loading, major section transitions, strategic statements, and CTA arrival.

Ambient motion:

```css
--motion-ambient: 18s;
```

Used only for subtle gradient drift or background atmosphere.

### Easing System

Use restrained, premium easing. Avoid elastic, bounce, or playful easing.

Primary easing:

```css
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
```

Use for scroll reveals and section entrances.

Interaction easing:

```css
--ease-interaction: cubic-bezier(0.22, 1, 0.36, 1);
```

Use for buttons, links, cards, and navigation states.

Ambient easing:

```css
--ease-ambient: ease-in-out;
```

Use only for slow background movement.

### Page Load Behaviour

The page should not appear all at once. The first screen should load in a controlled sequence:

1. Header fades in
2. Eyebrow label appears
3. Hero headline appears line by line
4. Hero body copy fades in
5. Primary and secondary CTAs fade in last

The load animation should feel like a briefing opening, not a splash screen.

Do not use a full-screen loader unless the site is waiting for live content, news data, or external API content.

Recommended behaviour:

```text
Header: fade in, 400ms
Eyebrow: fade + slight upward movement, 500ms
Hero headline: staggered line reveal, 700–900ms
Body copy: fade + slight upward movement, 650ms
CTA buttons: fade + slight upward movement, 650ms
```

Maximum total perceived load sequence: around 1.2 seconds.

### Hero Motion

The hero section should feel composed and editorial.

Hero headline:

Use a line-by-line reveal. Each line should move upward slightly while fading in.

```css
.hero-line {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity var(--motion-slow) var(--ease-premium),
    transform var(--motion-slow) var(--ease-premium);
}

.hero-line.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Hero supporting copy should reveal after the headline. Do not animate individual words.

Hero CTAs should reveal last. Buttons should not pulse, bounce, glow, or loop.

### Scroll Reveal Behaviour

Most page sections should reveal as they enter the viewport. The motion should be subtle enough that the user notices the page responding, not the animation itself.

Default scroll reveal:

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity var(--motion-standard) var(--ease-premium),
    transform var(--motion-standard) var(--ease-premium);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Use this on section labels, section headlines, intro paragraphs, cards, images, CTA blocks, partner bios, and policy intelligence modules.

Avoid applying reveal motion to every small text element. Animate grouped content, not every sentence.

### Section Reveal Sequence

Each section should reveal in a consistent order:

1. Section label / eyebrow
2. Main heading
3. Supporting copy
4. Cards, images, or interface modules
5. CTA or secondary link

Use staggered delays between child elements.

Recommended delay rhythm:

```text
Eyebrow: 0ms
Heading: 80ms
Paragraph: 160ms
Cards / images: 240ms onwards
CTA: 320ms
```

Do not exceed long stagger chains. Large sections should feel paced, not slow.

### “Why Now” Motion

The “Why Now” section should use sequential reveal because it is the strongest argument-building section of the site.

The three points should appear one after another as the user scrolls:

1. AI is outpacing regulation
2. Governments are developing oversight
3. Early engagement shapes outcomes

Each item should feel like a step in the argument. Use a subtle fade-up and optional border emphasis.

Recommended behaviour:

```text
Card enters from 16px below
Icon fades in first
Heading follows
Body copy follows
Border becomes slightly more visible on hover
```

Do not use animated counters or dramatic timeline effects.

### Services Motion

Services should feel like selectable areas of expertise.

Service cards should reveal in a staggered grid. On hover, use a small lift and a slight border change.

```css
.service-card {
  transition:
    transform var(--motion-fast) var(--ease-interaction),
    border-color var(--motion-fast) var(--ease-interaction),
    box-shadow var(--motion-fast) var(--ease-interaction);
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-medium);
  box-shadow: 0 18px 48px rgba(17, 17, 17, 0.045);
}
```

Hover should imply focus and quality. It should not feel like a clickable game element.

### Strategic Vision Motion

The Strategic Vision section should move slower than the rest of the page. This section acts as a key positioning statement.

Recommended behaviour:

```text
Large statement fades in slowly
Background gradient shifts subtly
Image fades in with slight scale from 1.02 to 1
Text remains stable and readable
```

Use slow emphasis motion here, not repeated animation. Avoid scroll-jacking. Do not lock the user into this section.

### Biography Motion

Partner bios should use minimal motion. Trust and authority are more important than visual novelty.

Recommended reveal order:

1. Image or contextual Capitol photograph
2. Name
3. Role / credentials
4. Biography text

Use simple fade-up only. Avoid hover effects on bios unless the cards link to dedicated profile pages.

Capitol imagery should appear with a soft opacity reveal and very slight scale reduction.

```css
.bio-image {
  opacity: 0;
  transform: scale(1.015);
  transition:
    opacity var(--motion-slow) var(--ease-premium),
    transform var(--motion-slow) var(--ease-premium);
}

.bio-image.is-visible {
  opacity: 1;
  transform: scale(1);
}
```

### CTA Motion

The final “Request a Briefing” section should become slightly more present as the user reaches it.

Recommended behaviour:

```text
CTA container fades in
Heading reveals first
Body copy reveals second
Button reveals last
Button hover uses a slight upward lift
```

Do not use pulsing CTA buttons. The premium feeling should come from timing, spacing, and clarity.

### Navigation Motion

Navigation should remain stable. It should not distract during reading.

Use subtle link opacity changes on hover, a small underline reveal for active or hovered links, the header backdrop blur already defined in the styleguide, and optional header shrink on scroll only if it remains calm.

Example:

```css
.nav-link {
  transition:
    color var(--motion-fast) var(--ease-interaction),
    opacity var(--motion-fast) var(--ease-interaction);
}

.nav-link::after {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--motion-fast) var(--ease-interaction);
}

.nav-link:hover::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}
```

Avoid animated menu icons beyond a simple open/close transition.

### Button Motion

Buttons should respond quickly and quietly.

```css
.button {
  transition:
    transform var(--motion-fast) var(--ease-interaction),
    background-color var(--motion-fast) var(--ease-interaction),
    border-color var(--motion-fast) var(--ease-interaction),
    color var(--motion-fast) var(--ease-interaction);
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  transform: scale(0.98);
}
```

Do not add glow, bounce, pulse, shake, or repeating CTA motion.

### Image Motion

Images should reveal softly and settle into place.

Use fade in, slight scale from 1.015 or 1.02 to 1, and optional slow parallax only if extremely subtle.

Avoid large parallax movement, horizontal sliding, fast zooms, rotations, and image masking effects that feel like portfolio-site decoration.

Recommended image reveal:

```css
.image-reveal {
  opacity: 0;
  transform: scale(1.02);
  transition:
    opacity var(--motion-slow) var(--ease-premium),
    transform var(--motion-slow) var(--ease-premium);
}

.image-reveal.is-visible {
  opacity: 1;
  transform: scale(1);
}
```

### Card Motion

Cards should feel responsive but stable.

Default card reveal:

```text
Fade in
Move up 12–16px
Stagger by 80ms
```

Card hover:

```text
Move up 2–3px
Slightly strengthen border
Very subtle shadow increase
```

Do not rotate cards, tilt cards, or add 3D hover effects.

### Icon Motion

Icons should remain secondary. They can fade in with their parent card but should not animate independently unless they communicate a functional state.

Allowed:

Icon opacity reveal  
Slight upward movement with parent card  
Tiny hover opacity change  

Avoid:

Spinning icons  
Looping radar effects  
Animated line drawing  
Pulsing policy icons  
Decorative SVG path animation  

### Policy Intelligence / News Module Motion

If the site includes an AI legislation or policy news module, motion should make the feed feel live without becoming distracting.

Recommended behaviour:

```text
Current article fades in on page load
Older articles reveal in a row of three
Metadata appears immediately, not delayed
New content state may use a quiet “updated” label
```

Avoid ticker-style movement, auto-scrolling news, and flashing update indicators.

For dynamic JSON-loaded content, use a simple loaded state:

```text
Skeleton or blank state
Content fades in after load
No spinner unless loading takes longer than expected
```

### Ambient Background Motion

Ambient gradient motion should be nearly imperceptible.

Use only on hero atmosphere, Strategic Vision section, large CTA background, and policy intelligence surfaces.

Example:

```css
@keyframes gradient-drift {
  0% {
    background-position: 50% 0%;
  }

  50% {
    background-position: 52% 4%;
  }

  100% {
    background-position: 50% 0%;
  }
}

.atmospheric-section {
  background-size: 120% 120%;
  animation: gradient-drift var(--motion-ambient) var(--ease-ambient) infinite;
}
```

Do not animate grain aggressively. Grain should remain static or almost static.

### Scroll Behaviour

Use native scrolling. Do not scroll-jack the page.

Allowed:

Scroll-triggered reveals  
Subtle section progression  
Anchor link smooth scroll  
Sticky header  
Optional light active nav state  

Avoid:

Forced scroll speeds  
Pinned sections that trap the user  
Horizontal scrolling sections  
Full-page snap scrolling  
Scroll effects that delay access to content  

Smooth anchor scrolling is acceptable:

```css
html {
  scroll-behavior: smooth;
}
```

### Reduced Motion

The site must support users who prefer reduced motion.

When reduced motion is active:

Remove transform movement  
Remove ambient gradient animation  
Remove long transitions  
Keep content immediately accessible  
Use opacity-only reveals or no reveal at all  

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }

  .reveal,
  .image-reveal,
  .hero-line {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Implementation Notes

Use CSS for simple transitions, hover states, and ambient background movement.

Use JavaScript Intersection Observer for scroll-triggered reveal states.

Avoid large animation libraries unless the site later requires complex timeline sequencing.

Recommended class structure:

```text
.reveal
.reveal-stagger
.image-reveal
.hero-line
.motion-delay-1
.motion-delay-2
.motion-delay-3
.is-visible
```

Recommended motion delays:

```css
.motion-delay-1 { transition-delay: 80ms; }
.motion-delay-2 { transition-delay: 160ms; }
.motion-delay-3 { transition-delay: 240ms; }
.motion-delay-4 { transition-delay: 320ms; }
```

Do not delay essential information so long that the page feels slower.

### Motion Rules Summary

Use motion to clarify hierarchy.  
Reveal sections as the user reaches them.  
Keep movement small: usually 12–18px.  
Use slow, editorial easing.  
Use staggered reveals sparingly.  
Make buttons and cards feel responsive.  
Keep partner bios stable and trustworthy.  
Keep CTA motion subtle and conversion-focused.  
Avoid scroll-jacking, bouncing, looping decorative animation, and excessive parallax.  
Respect reduced-motion preferences.  
Motion should make the website feel more considered, not more animated.
