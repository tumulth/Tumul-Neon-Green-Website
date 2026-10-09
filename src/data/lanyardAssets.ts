/**
 * Art-directed SVG assets for Tumul Thakur's 3D Interactive Lanyard Pass
 */

const createSvgDataUrl = (svgContent: string): string => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent.trim())}`;
};

// Front Face of the Badge (Obsidian + Lime Accent + Swiss Grid)
export const LANYARD_FRONT_IMAGE = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1125" width="800" height="1125">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <linearGradient id="limeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C8FF00"/>
      <stop offset="100%" stop-color="#9DE000"/>
    </linearGradient>
    <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#ffffff" fill-opacity="0.08"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="1125" fill="url(#cardBg)"/>
  <rect width="800" height="1125" fill="url(#dotGrid)"/>

  <!-- Outer Swiss Framing Border -->
  <rect x="40" y="40" width="720" height="1045" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.5"/>

  <!-- Top Lime Tag -->
  <rect x="40" y="40" width="720" height="12" fill="url(#limeGradient)"/>

  <!-- Top Metadata Bar -->
  <g transform="translate(70, 90)">
    <text font-family="'Space Mono', monospace, sans-serif" font-size="16" font-weight="700" fill="#C8FF00" letter-spacing="3">
      STUDIO PASS // 2026
    </text>
    <text x="660" y="0" text-anchor="end" font-family="'Space Mono', monospace, sans-serif" font-size="14" fill="#888888" letter-spacing="2">
      PUNE, IN [18.52° N]
    </text>
  </g>

  <!-- Lanyard Slot Cutout Guide Area -->
  <rect x="310" y="115" width="180" height="28" rx="14" fill="#000000" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1.5"/>

  <!-- Hero Portrait Monogram & Halo -->
  <g transform="translate(400, 390)">
    <circle r="150" fill="none" stroke="#C8FF00" stroke-width="2" stroke-opacity="0.4" stroke-dasharray="6 6"/>
    <circle r="130" fill="#1c1c1c" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2"/>
    <circle r="120" fill="#111111"/>
    
    <!-- Monogram TT in Display Serif -->
    <text text-anchor="middle" y="48" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="140" fill="#ffffff">
      TT
    </text>

    <!-- Lime Chip Accent -->
    <rect x="-18" y="70" width="36" height="6" rx="3" fill="#C8FF00"/>
  </g>

  <!-- Name & Title -->
  <g transform="translate(400, 620)" text-anchor="middle">
    <text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1">
      TUMUL THAKUR
    </text>
    <text y="42" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="28" fill="#C8FF00">
      Visual Designer &amp; Creative Director
    </text>
    <text y="80" font-family="'Space Mono', monospace, sans-serif" font-size="14" fill="#888888" letter-spacing="3">
      INDEPENDENT STUDIO · PUNE
    </text>
  </g>

  <!-- Divider Line -->
  <line x1="70" y1="760" x2="730" y2="760" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>

  <!-- Spec Grid -->
  <g transform="translate(70, 810)">
    <g>
      <text font-family="'Space Mono', monospace, sans-serif" font-size="12" fill="#666666" letter-spacing="2">ROLE</text>
      <text y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#ffffff">DIRECTOR</text>
    </g>
    <g transform="translate(230, 0)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="12" fill="#666666" letter-spacing="2">CLEARANCE</text>
      <text y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#C8FF00">LEVEL 01</text>
    </g>
    <g transform="translate(460, 0)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="12" fill="#666666" letter-spacing="2">ISSUED</text>
      <text y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#ffffff">Q1 2026</text>
    </g>
  </g>

  <!-- Barcode & Serial Strip -->
  <g transform="translate(70, 920)">
    <!-- Procedural Barcode Lines -->
    <rect x="0" y="0" width="6" height="55" fill="#ffffff"/>
    <rect x="10" y="0" width="3" height="55" fill="#ffffff"/>
    <rect x="18" y="0" width="10" height="55" fill="#ffffff"/>
    <rect x="34" y="0" width="4" height="55" fill="#ffffff"/>
    <rect x="44" y="0" width="8" height="55" fill="#ffffff"/>
    <rect x="58" y="0" width="3" height="55" fill="#ffffff"/>
    <rect x="66" y="0" width="12" height="55" fill="#ffffff"/>
    <rect x="84" y="0" width="5" height="55" fill="#ffffff"/>
    <rect x="94" y="0" width="14" height="55" fill="#ffffff"/>
    <rect x="114" y="0" width="4" height="55" fill="#ffffff"/>
    <rect x="124" y="0" width="8" height="55" fill="#ffffff"/>
    <rect x="138" y="0" width="5" height="55" fill="#ffffff"/>
    <rect x="148" y="0" width="14" height="55" fill="#ffffff"/>
    <rect x="168" y="0" width="4" height="55" fill="#ffffff"/>
    <rect x="178" y="0" width="10" height="55" fill="#ffffff"/>
    <rect x="194" y="0" width="6" height="55" fill="#ffffff"/>
    <rect x="206" y="0" width="3" height="55" fill="#ffffff"/>
    <rect x="214" y="0" width="12" height="55" fill="#ffffff"/>
    <rect x="232" y="0" width="5" height="55" fill="#ffffff"/>
    <rect x="242" y="0" width="8" height="55" fill="#ffffff"/>
    <rect x="256" y="0" width="4" height="55" fill="#ffffff"/>
    <rect x="266" y="0" width="12" height="55" fill="#ffffff"/>
    <rect x="284" y="0" width="6" height="55" fill="#ffffff"/>
    <rect x="296" y="0" width="4" height="55" fill="#ffffff"/>
    <rect x="306" y="0" width="10" height="55" fill="#ffffff"/>

    <text x="360" y="24" font-family="'Space Mono', monospace, sans-serif" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="3">
      NO. 9407-TT-PUNE
    </text>
    <text x="360" y="46" font-family="'Space Mono', monospace, sans-serif" font-size="11" fill="#888888" letter-spacing="1">
      ALL ACCESS // AUTH 08-26
    </text>
  </g>

  <!-- Bottom Accent Strip -->
  <g transform="translate(70, 1030)">
    <rect width="660" height="2" fill="#C8FF00"/>
    <text y="24" font-family="'Space Mono', monospace, sans-serif" font-size="10" fill="#666666" letter-spacing="2">
      CONFIDENTIAL &amp; PROPRIETARY · TUMUL THAKUR DESIGN
    </text>
  </g>
</svg>
`);

// Back Face of the Badge (Typography Manifesto + Direct Contact)
export const LANYARD_BACK_IMAGE = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1125" width="800" height="1125">
  <defs>
    <linearGradient id="cardBackBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f0f0f"/>
      <stop offset="100%" stop-color="#181818"/>
    </linearGradient>
    <pattern id="dotGridBack" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#C8FF00" fill-opacity="0.06"/>
    </pattern>
  </defs>

  <rect width="800" height="1125" fill="url(#cardBackBg)"/>
  <rect width="800" height="1125" fill="url(#dotGridBack)"/>

  <!-- Border -->
  <rect x="40" y="40" width="720" height="1045" fill="none" stroke="#C8FF00" stroke-opacity="0.25" stroke-width="1.5"/>

  <!-- Top Lime Tag -->
  <rect x="40" y="40" width="720" height="12" fill="#C8FF00"/>

  <g transform="translate(70, 100)">
    <text font-family="'Space Mono', monospace, sans-serif" font-size="14" font-weight="700" fill="#C8FF00" letter-spacing="3">
      MANIFESTO // APPROACH
    </text>
  </g>

  <!-- Lanyard Slot Cutout Guide Area -->
  <rect x="310" y="115" width="180" height="28" rx="14" fill="#000000" stroke="#C8FF00" stroke-opacity="0.3" stroke-width="1.5"/>

  <!-- Manifesto Statement -->
  <g transform="translate(70, 260)">
    <text font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="52" fill="#ffffff" width="660">
      "I build visual languages
    </text>
    <text y="64" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="52" fill="#C8FF00">
      that help ideas
    </text>
    <text y="128" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="52" fill="#ffffff">
      communicate."
    </text>

    <text y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#A0A09C" line-height="1.6">
      Specializing in Brand Identity, Visual Systems,
    </text>
    <text y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#A0A09C">
      Digital Platforms and Art Direction.
    </text>
  </g>

  <!-- Capabilities Table -->
  <g transform="translate(70, 580)">
    <line x1="0" y1="0" x2="660" y2="0" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
    
    <g transform="translate(0, 35)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="13" fill="#C8FF00">01</text>
      <text x="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#ffffff">BRAND IDENTITY &amp; STRATEGY</text>
    </g>
    <line x1="0" y1="55" x2="660" y2="55" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>

    <g transform="translate(0, 90)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="13" fill="#C8FF00">02</text>
      <text x="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#ffffff">SYSTEMATIC DESIGN TOKENS</text>
    </g>
    <line x1="0" y1="110" x2="660" y2="110" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>

    <g transform="translate(0, 145)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="13" fill="#C8FF00">03</text>
      <text x="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#ffffff">VISUAL DESIGN &amp; UI/UX</text>
    </g>
    <line x1="0" y1="165" x2="660" y2="165" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>

    <g transform="translate(0, 200)">
      <text font-family="'Space Mono', monospace, sans-serif" font-size="13" fill="#C8FF00">04</text>
      <text x="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#ffffff">EDITORIAL &amp; ART DIRECTION</text>
    </g>
    <line x1="0" y1="220" x2="660" y2="220" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
  </g>

  <!-- Contact Coordinates -->
  <g transform="translate(70, 890)">
    <text font-family="'Space Mono', monospace, sans-serif" font-size="13" fill="#666666" letter-spacing="2">DIRECT INQUIRIES</text>
    <text y="30" font-family="'Space Mono', monospace, sans-serif" font-size="20" font-weight="700" fill="#ffffff">tumul41@gmail.com</text>
    
    <text y="70" font-family="'Space Mono', monospace, sans-serif" font-size="12" fill="#888888" letter-spacing="2">
      PUNE, MH, INDIA · GLOBAL COMMISSIONS
    </text>
  </g>

  <!-- Bottom Strip -->
  <g transform="translate(70, 1030)">
    <text font-family="'Space Mono', monospace, sans-serif" font-size="11" fill="#C8FF00" letter-spacing="2">
      CLICK CARD TO FLIP · DRAG TO SWING
    </text>
  </g>
</svg>
`);

// Repeating Texture for the Lanyard Strap Band
export const LANYARD_STRAP_IMAGE = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 192" width="768" height="192">
  <defs>
    <linearGradient id="strapBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111111"/>
      <stop offset="50%" stop-color="#181818"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
  </defs>

  <!-- Background Ribbon -->
  <rect width="768" height="192" fill="url(#strapBg)"/>

  <!-- Top and Bottom Edge Stitching -->
  <line x1="0" y1="12" x2="768" y2="12" stroke="#C8FF00" stroke-width="3" stroke-dasharray="8 6"/>
  <line x1="0" y1="180" x2="768" y2="180" stroke="#C8FF00" stroke-width="3" stroke-dasharray="8 6"/>

  <!-- High-Contrast Swiss Typographic Pattern -->
  <g transform="translate(0, 105)" fill="#ffffff" font-family="'Space Mono', monospace, sans-serif" font-weight="700" font-size="34" letter-spacing="4">
    <text x="24">TUMUL THAKUR</text>
    <text x="320" fill="#C8FF00">✦</text>
    <text x="360">STUDIO PASS</text>
    <text x="670" fill="#C8FF00">✦</text>
  </g>
</svg>
`);
