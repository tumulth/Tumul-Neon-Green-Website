import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import {
  RENEWABLES_SECTIONS,
  COLOR_PALETTE_DATA,
  TYPOGRAPHY_DATA,
  RenewablesSection,
} from './renewablesData';

interface SangreenRenewablesCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const SangreenRenewablesCaseStudy: React.FC<SangreenRenewablesCaseStudyProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeColorTint, setActiveColorTint] = useState<string>('#3faca2');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string>('700');
  const [previewImage, setPreviewImage] = useState<{ src: string; caption: string } | null>(null);

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const categories = [
    { id: 'ALL', label: 'COMPLETE NARRATIVE (10)' },
    { id: 'IDENTITY', label: '01–03 IDENTITY & SYSTEM' },
    { id: 'APPLICATIONS', label: '04–05 APPLICATIONS & BROCHURE' },
    { id: 'ENVIRONMENT', label: '06–07 WORKPLACE & INSTALLATION' },
    { id: 'EXPERIENCE', label: '08 EXHIBITION ARCHITECTURE' },
    { id: 'GOVERNANCE', label: '09–10 GUIDELINES & CLOSING' },
  ];

  const filteredSections =
    activeCategory === 'ALL'
      ? RENEWABLES_SECTIONS
      : RENEWABLES_SECTIONS.filter((s) => s.category === activeCategory);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`renewables-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="w-full flex flex-col select-text font-sans bg-[#FBFBFA] dark:bg-[#0A161A] text-[#111111] dark:text-[#E6F4F3] transition-colors duration-300">
      {/* ==================================================
          01 — EDITORIAL COVER & PROJECT HERO
          ================================================== */}
      <section className="pb-12 border-b border-[#111111]/10 dark:border-white/10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#3faca2] dark:text-[#57c2b8] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3faca2] shadow-sm animate-pulse" />
            <span>CASE STUDY // 2025 EDITION</span>
          </div>
          <div className="font-mono text-xs text-[#8A8A84] dark:text-[#7A989E] flex items-center gap-2">
            <span>BANDISH STUDIOS COLLABORATION</span>
            <span>·</span>
            <span>10 SECTIONS</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-none">
              SANGREEN
            </h1>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#3faca2] dark:text-[#4AC5BB] leading-none">
              FUTURE RENEWABLES
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#333333] dark:text-[#CFE7E4] max-w-3xl leading-relaxed mt-2">
            "ENVIRONMENTAL GRAPHICS & SPATIAL ARCHITECTURE FOR CLEAN ENERGY."
          </p>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#96B8BC] max-w-3xl leading-relaxed">
            Sangreen Future Renewables develops utility-scale wind and clean power infrastructure. In collaboration with Bandish Studios, I designed the visual identity guidelines, technical capabilities monograph, workplace environmental graphics, and trade exhibition pavilion—translating complex Balance of Plant engineering into structured typography, technical turbine schematics, and architectural spaces.
          </p>
        </div>

        {/* Corporate Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#111111]/10 dark:border-white/10 text-xs">
          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#7A989E] uppercase tracking-wider block mb-1">
              CLIENT
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              Sangreen Future Renewables
            </span>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#7A989E] uppercase tracking-wider block mb-1">
              YEAR & COLLABORATOR
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              2025 · Bandish Studios
            </span>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#7A989E] uppercase tracking-wider block mb-1">
              PRIMARY COLOR ANCHOR
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#3faca2] border border-black/10 inline-block shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#d9d9d9] border border-black/10 inline-block" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#111111] border border-white/20 inline-block" />
              <span className="font-mono text-[11px] text-[#555] dark:text-[#A7C8CD]">#3FACA2 · Light Sea Green</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#7A989E] uppercase tracking-wider block mb-1">
              TYPE SYSTEM
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              Rubik Sans-Serif (300–900)
            </span>
          </div>
        </div>

        {/* Hero Image Presentation */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/15 shadow-xl bg-white dark:bg-[#122227] group">
          <img
            src="/projects/sangreen-renewables/imgi_22_image.webp"
            alt="Workplace environmental graphics and wind turbine mural"
            className="w-full h-auto object-cover max-h-[620px] transition-transform duration-700 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase bg-[#3faca2]/90 backdrop-blur-md px-2.5 py-1 rounded w-fit mb-1 font-bold">
                ENVIRONMENTAL HERO // REAL ARCHITECTURE
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/95 max-w-xl">
                Workplace environmental graphics — wind turbine visual vocabulary translated to architectural scale inside the company headquarters.
              </p>
            </div>
            <button
              onClick={() =>
                setPreviewImage({
                  src: '/projects/sangreen-renewables/imgi_22_image.webp',
                  caption: 'Sangreen Future Renewables workplace environmental graphic installation.',
                })
              }
              className="text-[11px] font-mono px-3 py-1.5 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 self-start sm:self-auto transition-colors"
            >
              EXPAND VIEW ↗
            </button>
          </div>
        </div>

        {/* Narrative Flow Pills */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1 text-xs font-mono text-[#777] dark:text-[#88A6AC]">
          <span className="font-bold text-[#111] dark:text-white uppercase tracking-wider shrink-0">NARRATIVE ARC:</span>
          <span className="px-2.5 py-1 rounded bg-[#3faca2]/10 dark:bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8] font-semibold shrink-0">
            IDENTITY
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#3faca2]/10 dark:bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8] font-semibold shrink-0">
            SYSTEM
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#3faca2]/10 dark:bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8] font-semibold shrink-0">
            APPLICATION
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#3faca2]/10 dark:bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8] font-semibold shrink-0">
            ENVIRONMENT
          </span>
        </div>

        {/* Category Jump Navigation */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#3faca2] text-white border-[#3faca2] dark:bg-[#3faca2] dark:border-[#3faca2] font-bold shadow-sm'
                  : 'bg-white/90 dark:bg-[#13272E] text-[#555] dark:text-[#A7C8CD] border-black/10 dark:border-white/10 hover:border-[#3faca2] dark:hover:border-[#3faca2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ==================================================
          CHAPTER SECTIONS CONTAINER
          ================================================== */}
      <div className="flex flex-col divide-y divide-[#111111]/10 dark:divide-white/10">
        {filteredSections.map((section) => (
          <article
            key={section.id}
            id={`renewables-sec-${section.id}`}
            className="py-16 md:py-24 flex flex-col gap-10 scroll-mt-20"
          >
            {/* Section Header */}
            <header className="flex flex-col gap-3 max-w-4xl">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#3faca2] dark:text-[#57c2b8] font-bold uppercase">
                <span className="px-2.5 py-0.5 rounded bg-[#3faca2]/10 dark:bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8]">
                  {section.number} // 10
                </span>
                <span>—</span>
                <span>{section.title}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-tight font-sans">
                {section.heading}
              </h2>

              <p className="text-lg sm:text-xl font-serif italic text-[#3faca2] dark:text-[#67D5CC]">
                "{section.statement}"
              </p>

              <div className="flex flex-col gap-2.5 text-base sm:text-lg text-[#444444] dark:text-[#B3D3D7] leading-relaxed max-w-3xl mt-1">
                {section.copy.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </header>

            {/* ==================================================
                SECTION SPECIFIC BESPOKE MODULES
                ================================================== */}

            {/* SECTION 02: THE IDENTITY - TECHNICAL CONSTRUCTION SHOWCASE */}
            {section.id === '02-identity' && (
              <div className="flex flex-col gap-8">
                {/* Primary Logo on Turquoise Field */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-lg bg-[#3faca2] p-8 md:p-14 flex flex-col items-center justify-center text-center">
                  <img
                    src="/projects/sangreen-renewables/imgi_4_image.webp"
                    alt="Sangreen Future Renewables logo on signature turquoise field"
                    className="w-full max-w-2xl h-auto object-contain drop-shadow-md cursor-pointer hover:scale-[1.01] transition-transform"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_4_image.webp',
                        caption: 'Primary Sangreen Future Renewables emblem on signature Light Sea Green field.',
                      })
                    }
                  />
                  <div className="mt-4 font-mono text-xs uppercase tracking-widest text-white/90">
                    PRIMARY EMBLEM // LIGHT SEA GREEN SIGNATURE
                  </div>
                </div>

                {/* Technical Construction Dual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Horizontal Construction Blueprint */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-black p-6 shadow-md">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#888]">
                      <span className="text-[#3faca2] font-bold">GRID BLUEPRINT // HORIZONTAL</span>
                      <span>GEOMETRIC ALIGNMENT</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_5_image.webp"
                      alt="Horizontal logo technical construction grid"
                      className="w-full h-auto object-contain cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_5_image.webp',
                          caption: 'Horizontal mark technical construction grid on black with geometric alignment guides.',
                        })
                      }
                    />
                    <p className="text-xs text-[#AAA] font-mono leading-relaxed">
                      Proportional bounding box maintaining precise optical margins between the continuous-energy monogram and the bold typographic wordmark.
                    </p>
                  </div>

                  {/* Stacked Construction Blueprint */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-black p-6 shadow-md">
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#888]">
                      <span className="text-[#3faca2] font-bold">GRID BLUEPRINT // STACKED</span>
                      <span>ANGULAR GUIDES</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_6_image.webp"
                      alt="Stacked logo technical construction grid"
                      className="w-full h-auto object-contain cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_6_image.webp',
                          caption: 'Stacked mark technical construction blueprint with proportion curves and angle markers.',
                        })
                      }
                    />
                    <p className="text-xs text-[#AAA] font-mono leading-relaxed">
                      Vertical stack configuration engineered for badges, building elevations, and square spatial formats without loss of visual weight.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 03: VISUAL LANGUAGE - COLOR, TYPOGRAPHY & SIZE SPECS */}
            {section.id === '03-visual-language' && (
              <div className="flex flex-col gap-10">
                {/* Official Standards Assets Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Color Standards Artifact */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">STANDARDS SHEET // COLOR PALETTE</span>
                      <span>HEX · CMYK · RGB</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_9_image.webp"
                      alt="Color palette official specifications"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_9_image.webp',
                          caption: 'Color palette specifications: Light Sea Green (#3faca2) and Light Grey (#d9d9d9).',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Defines Light Sea Green (#3faca2) and Light Grey (#d9d9d9) with strict CMYK printing formulas for architectural and print reproduction.
                    </p>
                  </div>

                  {/* Typography Standards Artifact */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">STANDARDS SHEET // TYPOGRAPHY</span>
                      <span>RUBIK GROTESK</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_10_image.webp"
                      alt="Rubik typography specification"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_10_image.webp',
                          caption: 'Corporate Typography standards: Rubik family across 5 core weights.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Rubik provides geometric warmth and industrial legibility across five weights (Light to Black) with complete Latin character sets.
                    </p>
                  </div>
                </div>

                {/* Interactive Color Swatch System */}
                <div className="p-6 md:p-8 rounded-xl border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] shadow-md flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#111111]/10 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] dark:text-white uppercase tracking-tight font-sans">
                        INTERACTIVE COLOR SPECIFICATIONS
                      </h3>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC]">
                        Click any color swatch below to copy its HEX code or examine exact reproduction values.
                      </p>
                    </div>
                    {copiedColor && (
                      <span className="text-xs font-mono px-3 py-1 bg-[#3faca2] text-white rounded font-bold animate-pulse">
                        COPIED {copiedColor}
                      </span>
                    )}
                  </div>

                  {/* Primary Color Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-5 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-[#F9FBFA] dark:bg-[#0E1B20] flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-10 h-10 rounded-md border border-black/10 shadow-sm"
                            style={{ backgroundColor: activeColorTint }}
                          />
                          <div>
                            <div className="font-bold text-sm text-[#111] dark:text-white">
                              {COLOR_PALETTE_DATA.primary.name}
                            </div>
                            <div className="font-mono text-xs text-[#3faca2] font-semibold">
                              {activeColorTint}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(activeColorTint)}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-[#3faca2] hover:text-white transition-colors"
                        >
                          COPY HEX
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-3 border-t border-black/10 dark:border-white/10">
                        <div>
                          <span className="text-[#888] dark:text-[#7A989E] block text-[10px]">CMYK</span>
                          <span className="font-semibold text-[#111] dark:text-white">
                            {COLOR_PALETTE_DATA.primary.cmyk}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#888] dark:text-[#7A989E] block text-[10px]">RGB</span>
                          <span className="font-semibold text-[#111] dark:text-white">
                            {COLOR_PALETTE_DATA.primary.rgb}
                          </span>
                        </div>
                      </div>

                      {/* Tint Ladder */}
                      <div className="flex flex-col gap-1.5 pt-2">
                        <span className="text-[10px] font-mono text-[#888] uppercase tracking-wider">
                          TINT SCALE (CLICK TO SELECT)
                        </span>
                        <div className="grid grid-cols-6 gap-2">
                          {COLOR_PALETTE_DATA.primary.tints.map((t) => (
                            <button
                              key={t.hex}
                              onClick={() => {
                                setActiveColorTint(t.hex);
                                copyToClipboard(t.hex);
                              }}
                              className={`h-12 rounded border flex flex-col items-center justify-end p-1 transition-transform ${
                                activeColorTint === t.hex
                                  ? 'border-[#111] dark:border-white scale-105 shadow-md'
                                  : 'border-black/10 hover:scale-105'
                              }`}
                              style={{ backgroundColor: t.hex }}
                              title={`${t.label} - ${t.hex}`}
                            >
                              <span
                                className={`text-[8px] font-mono font-bold ${
                                  t.hex === '#e6f6f4' || t.hex === '#bce7e3'
                                    ? 'text-[#248178]'
                                    : 'text-white'
                                }`}
                              >
                                {t.hex.slice(1, 7)}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Secondary & Supporting Colors */}
                    <div className="p-5 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-[#F9FBFA] dark:bg-[#0E1B20] flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-md bg-[#d9d9d9] border border-black/10 shadow-sm" />
                          <div>
                            <div className="font-bold text-sm text-[#111] dark:text-white">
                              {COLOR_PALETTE_DATA.secondary.name}
                            </div>
                            <div className="font-mono text-xs text-[#777] dark:text-[#AAA] font-semibold">
                              {COLOR_PALETTE_DATA.secondary.hex}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(COLOR_PALETTE_DATA.secondary.hex)}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-[#3faca2] hover:text-white transition-colors"
                        >
                          COPY HEX
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-3 border-t border-black/10 dark:border-white/10">
                        <div>
                          <span className="text-[#888] dark:text-[#7A989E] block text-[10px]">CMYK</span>
                          <span className="font-semibold text-[#111] dark:text-white">
                            {COLOR_PALETTE_DATA.secondary.cmyk}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#888] dark:text-[#7A989E] block text-[10px]">RGB</span>
                          <span className="font-semibold text-[#111] dark:text-white">
                            {COLOR_PALETTE_DATA.secondary.rgb}
                          </span>
                        </div>
                      </div>

                      {/* Light Grey Tint Ladder */}
                      <div className="flex flex-col gap-1.5 pt-2">
                        <span className="text-[10px] font-mono text-[#888] uppercase tracking-wider">
                          GREY SCALE (CLICK TO SELECT)
                        </span>
                        <div className="grid grid-cols-6 gap-2">
                          {COLOR_PALETTE_DATA.secondary.tints.map((t) => (
                            <button
                              key={t.hex}
                              onClick={() => copyToClipboard(t.hex)}
                              className="h-12 rounded border border-black/10 flex flex-col items-center justify-end p-1 hover:scale-105 transition-transform"
                              style={{ backgroundColor: t.hex }}
                              title={`${t.label} - ${t.hex}`}
                            >
                              <span className="text-[8px] font-mono text-[#444] font-bold">
                                {t.hex.slice(1, 7)}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Minimum Size Thresholds & Reproduction Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Minimum Size Specs */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">MINIMUM REPRODUCTION SIZES</span>
                      <span>PRESERVING LEGIBILITY</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_7_image.webp"
                      alt="Minimum size specifications"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_7_image.webp',
                          caption: 'Minimum size rules: Stacked lockup W 100/80/60px, Horizontal lockup W 240/120/82px.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Stacked lockups remain legible down to 60px width; horizontal lockups preserve character definition down to 82px.
                    </p>
                  </div>

                  {/* Contrast & Ground Colorways */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">COLORWAY CONTRAST MATRIX</span>
                      <span>APPROVED GROUNDS</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_8_image.webp"
                      alt="Colorway matrix on multiple backgrounds"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_8_image.webp',
                          caption: 'Approved logo colorways on white, light grey, carbon black, and signature teal backgrounds.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Strict contrast hierarchy ensures the mark never appears on unauthorized or low-contrast textures.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 04: BRAND APPLICATIONS - CURATED ASYMMETRICAL EDITORIAL GRID */}
            {section.id === '04-applications' && (
              <div className="flex flex-col gap-8">
                {/* Asymmetric Tier 1: Business Cards & ID Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Business Cards (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">01 // STATIONERY</span>
                        <span>BUSINESS CARDS</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        Executive Business Cards
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Front features isolated logo and company URL; back presents contact hierarchy, physical address, and custom QR access.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_11_image.webp"
                        alt="Sangreen Future Renewables business cards mockup"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_11_image.webp',
                            caption: 'Corporate business card stack — crisp white card stock with Light Sea Green base footer.',
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* ID Card (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">02 // IDENTIFICATION</span>
                        <span>STAFF CREDENTIAL</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        Employee Security ID
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Branded portrait credential featuring employee photograph, blood group, department, emergency phone, and teal woven lanyard.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_13_image.webp"
                        alt="Employee ID card with teal lanyard"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_13_image.webp',
                            caption: 'Employee ID card credential with custom teal lanyard and safety clasp.',
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Asymmetric Tier 2: Desk Nameplate & Circular Badges */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Desk Nameplate (6 Cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">03 // WORKPLACE ARTIFACT</span>
                        <span>DESK NAMEPLATE</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        Architectural Nameplate
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Triangular desktop acrylic fixture featuring executive title, turbine array illustration, and turquoise edge rule.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_14_image.webp"
                        alt="Sangreen desk nameplate on executive desk"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_14_image.webp',
                            caption: 'Desk Nameplate — triangular desk acrylic featuring executive title and fine-line wind turbine graphic.',
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Circular Badges (6 Cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">04 // MERCHANDISE</span>
                        <span>PIN BUTTONS</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        Circular Corporate Badges
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Satin-finish metal pin badges showcasing both horizontal and stacked logo variations on vibrant turquoise fields.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_15_image.webp"
                        alt="Circular badges front and back mockup"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_15_image.webp',
                            caption: 'Circular Badges — satin-finish pin badges in horizontal and stacked lockups with turquoise rim.',
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Tier 3: Letterhead & Sticker Application */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Folded Letterhead (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">05 // DOCUMENTATION</span>
                        <span>OFFICIAL LETTERHEAD</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        Corporate Letterhead
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Generous white space layout with top right logo placement, formal corporate entity credentials, and signature turquoise footer ribbon.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_12_image.webp"
                        alt="Folded letterhead on concrete texture"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_12_image.webp',
                            caption: 'Official Letterhead — folded corporate paper stock on concrete ground.',
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Sustainability Sticker Badge (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#7A989E] mb-3">
                        <span className="text-[#3faca2] font-bold">06 // GRAPHIC BADGE</span>
                        <span>SUSTAINABILITY EMBLEM</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#111] dark:text-white font-sans mb-1">
                        "Growing a Sustainable Future"
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#88A6AC] mb-4">
                        Dimensional sticker application designed for vehicle fleets, promotional packages, and field machinery.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#F5F5F5] dark:bg-[#0A161A]">
                      <img
                        src="/projects/sangreen-renewables/imgi_19_image.webp"
                        alt="Growing a Sustainable Future turbine badge"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/sangreen-renewables/imgi_19_image.webp',
                            caption: 'Renewable energy graphic badge — "GROWING A SUSTAINABLE FUTURE" dimensional application.',
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 05: CORPORATE COMMUNICATION - BROCHURE HERO */}
            {section.id === '05-corporate-comm' && (
              <div className="flex flex-col gap-6">
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-xl bg-white dark:bg-[#122227] p-4 sm:p-6 md:p-8 group">
                  <img
                    src="/projects/sangreen-renewables/imgi_16_image.webp"
                    alt="Corporate profile brochure spread - Accelerate the wind energy transition"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_16_image.webp',
                        caption: 'Corporate profile — "ACCELERATE THE WIND ENERGY TRANSITION" cover, EPC capabilities, and live wind pipeline spread.',
                      })
                    }
                  />
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-[#666] dark:text-[#88A6AC]">
                    <div>
                      <span className="font-bold text-[#111] dark:text-white uppercase">CAPTION:</span> Corporate profile — information hierarchy, service matrix, and wind pipeline visual system.
                    </div>
                    <button
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_16_image.webp',
                          caption: 'Corporate profile brochure — information hierarchy and visual system.',
                        })
                      }
                      className="text-[11px] font-mono px-3 py-1 rounded bg-[#3faca2] text-white font-bold hover:bg-[#34968d] transition-colors self-start sm:self-auto"
                    >
                      VIEW HIGH RESOLUTION ↗
                    </button>
                  </div>
                </div>

                {/* Visible Capabilities Data Callout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-white/70 dark:bg-[#122227]/70">
                    <div className="text-2xl sm:text-3xl font-black text-[#3faca2] font-mono">1.5 GW</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666] dark:text-[#88A6AC] mt-1">ORDER BOOK</div>
                    <p className="text-[11px] text-[#777] dark:text-[#7A989E] mt-1">Confirmed utility-scale wind commitments documented in profile.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-white/70 dark:bg-[#122227]/70">
                    <div className="text-2xl sm:text-3xl font-black text-[#3faca2] font-mono">5 GW</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666] dark:text-[#88A6AC] mt-1">ENQUIRY PIPELINE</div>
                    <p className="text-[11px] text-[#777] dark:text-[#7A989E] mt-1">Commercial wind energy inquiries in active bidding.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-white/70 dark:bg-[#122227]/70">
                    <div className="text-2xl sm:text-3xl font-black text-[#3faca2] font-mono">17 GW</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666] dark:text-[#88A6AC] mt-1">WTG ERECTION</div>
                    <p className="text-[11px] text-[#777] dark:text-[#7A989E] mt-1">Total wind turbine generator installation legacy.</p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 06: ENVIRONMENTAL BRANDING - ARCHITECTURAL PHOTOGRAPHY */}
            {section.id === '06-environmental' && (
              <div className="flex flex-col gap-8">
                {/* Full Width Wall Graphic */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-lg bg-white dark:bg-[#122227] group">
                  <img
                    src="/projects/sangreen-renewables/imgi_20_image.webp"
                    alt="Workplace signage - acrylic Mission and Vision panels"
                    className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_20_image.webp',
                        caption: 'Workplace signage — acrylic Mission and Vision panels mounted on turquoise accent walls.',
                      })
                    }
                  />
                  <div className="p-4 bg-white/95 dark:bg-[#122227]/95 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#666] dark:text-[#88A6AC]">
                    <span>OUR MISSION & VISION // CAST ACRYLIC SIGNAGE SYSTEM</span>
                    <span className="text-[#3faca2] font-semibold">TATHWADE HEADQUARTERS</span>
                  </div>
                </div>

                {/* Dual Architectural Environments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Corridor "WINDS OF CHANGE BRING POWER" */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">CORRIDOR GRAPHIC</span>
                      <span>PERSPECTIVE INSTALLATION</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_25_image.webp"
                      alt="Corridor environmental graphics with Winds of Change Bring Power"
                      className="w-full h-auto object-cover rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_25_image.webp',
                          caption: 'Corridor environmental graphic: "WINDS OF CHANGE BRING POWER." directional wall and speech-bubble mural.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Directional corridor mural featuring bold white typography against the signature turquoise landscape band.
                    </p>
                  </div>

                  {/* Turbine Speech Bubble Graphic Wall */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">MEETING SUITE WALL</span>
                      <span>QUOTE BUBBLE MURAL</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_23_image.webp"
                      alt="Meeting room speech bubble turbine wall mural"
                      className="w-full h-auto object-cover rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_23_image.webp',
                          caption: 'Meeting zone feature wall — framed quote bubble graphic integrated with office greenery.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Framed architectural speech-bubble feature wall paired with internal planter boxes and natural lighting.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 07: REAL-WORLD IMPLEMENTATION - DOCUMENTARY INSTALLATION EVIDENCE */}
            {section.id === '07-implementation' && (
              <div className="flex flex-col gap-8">
                {/* Hero Installation Shot: Worker on Ladder */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-xl bg-white dark:bg-[#122227] group">
                  <img
                    src="/projects/sangreen-renewables/imgi_24_image.webp"
                    alt="Installer on ladder applying environmental graphics"
                    className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_24_image.webp',
                        caption: 'Environmental graphics during installation — worker on ladder applying large-format wall vinyl and turbine mural.',
                      })
                    }
                  />
                  <div className="p-4 bg-white/95 dark:bg-[#122227]/95 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#666] dark:text-[#88A6AC]">
                    <div>
                      <span className="text-[#3faca2] font-bold uppercase">CAPTION:</span> "Environmental graphics during installation."
                    </div>
                    <span className="text-[#111] dark:text-white font-medium">AUTHENTIC SITE DOCUMENTATION</span>
                  </div>
                </div>

                {/* Secondary Documentary Shots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Worker at Baseboard */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">SITE EXECUTION // 02</span>
                      <span>CORRIDOR BASEBOARD</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_26_image.webp"
                      alt="Installer working on corridor graphic baseboard"
                      className="w-full h-auto object-cover rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_26_image.webp',
                          caption: 'Translating the visual system into the workplace — installer detailing corridor graphics alongside ladder and tools.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Caption: "Translating the visual system into the workplace." Unvarnished proof of physical execution amidst tools and building site reality.
                    </p>
                  </div>

                  {/* Logo Wall in Renovation Progress */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#8A8A84] dark:text-[#88A6AC]">
                      <span className="text-[#3faca2] font-bold">SITE EXECUTION // 03</span>
                      <span>SURFACE PREPARATION</span>
                    </div>
                    <img
                      src="/projects/sangreen-renewables/imgi_21_image.webp"
                      alt="Workplace interior fitout and brand surface prep"
                      className="w-full h-auto object-cover rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/sangreen-renewables/imgi_21_image.webp',
                          caption: 'Workplace interior fitout — paint preparation, drop cloths, and logo alignment in real construction environment.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#A7C8CD]">
                      Caption: "Workplace interior fitout and brand surface prep." Logo mural positioned and checked against lighting conditions prior to handover.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 08: EXHIBITION / EXPERIENCE - 3D PAVILION ARCHITECTURE */}
            {section.id === '08-exhibition' && (
              <div className="flex flex-col gap-8">
                {/* Exterior Perspective */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-xl bg-white dark:bg-[#122227] group">
                  <img
                    src="/projects/sangreen-renewables/imgi_17_image.webp"
                    alt="Exhibition booth exterior 3D architectural perspective"
                    className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_17_image.webp',
                        caption: 'Exhibition booth exterior — 3D architectural perspective showing branded fascia, louvered partition walls, and backlit "WE MAKE IT EASY" feature tower.',
                      })
                    }
                  />
                  <div className="p-4 bg-white/95 dark:bg-[#122227]/95 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#666] dark:text-[#88A6AC]">
                    <span>TRADE PAVILION // EXTERIOR SPATIAL VIEW</span>
                    <span className="text-[#3faca2] font-semibold">"WE MAKE IT EASY" CAPABILITY TOWER</span>
                  </div>
                </div>

                {/* Interior Lounge View */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-xl bg-white dark:bg-[#122227] group">
                  <img
                    src="/projects/sangreen-renewables/imgi_18_image.webp"
                    alt="Exhibition booth interior VIP seating area"
                    className="w-full h-auto object-cover max-h-[580px] transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_18_image.webp',
                        caption: 'Exhibition booth interior — VIP hospitality lounge with hardwood decking, modern seating, and technical capability storyboards.',
                      })
                    }
                  />
                  <div className="p-4 bg-white/95 dark:bg-[#122227]/95 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#666] dark:text-[#88A6AC]">
                    <span>VIP HOSPITALITY SUITE // INTERIOR LOUNGE</span>
                    <span className="text-[#3faca2] font-semibold">HARDWOOD DECK & BRAND ACCENT WALLS</span>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 09: BRAND GUIDELINES - DOCUMENTATION ARTIFACT */}
            {section.id === '09-guidelines' && (
              <div className="flex flex-col gap-6">
                <div className="relative w-full rounded-xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-2xl bg-white p-6 sm:p-10 flex flex-col items-center justify-center text-center group">
                  <img
                    src="/projects/sangreen-renewables/imgi_3_image.webp"
                    alt="2025 Brand Identity Guidelines cover artwork"
                    className="w-full max-w-3xl h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/sangreen-renewables/imgi_3_image.webp',
                        caption: 'Official 2025 Brand Identity Guidelines publication cover.',
                      })
                    }
                  />
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full max-w-3xl pt-4 border-t border-black/10 text-xs font-mono text-[#666]">
                    <span>PUBLICATION // 2025 BRAND IDENTITY GUIDELINES</span>
                    <span className="text-[#3faca2] font-bold">AUTHORITATIVE DOCUMENT ARTIFACT</span>
                  </div>
                </div>
              </div>
            )}

            {/* Section Specifications Strip */}
            {section.specs && section.specs.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-lg border border-[#111111]/10 dark:border-white/10 bg-white/60 dark:bg-[#122227]/60 text-xs font-mono">
                {section.specs.map((spec, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-[#888] dark:text-[#7A989E] block text-[10px] uppercase tracking-wider mb-0.5">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-[#111] dark:text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* ==================================================
          BANDISH STUDIOS DEDICATED COLLABORATION CREDIT
          ================================================== */}
      <section className="my-16 md:my-24 p-8 sm:p-12 md:p-16 rounded-2xl border border-[#3faca2]/30 bg-gradient-to-br from-[#3faca2]/10 via-[#3faca2]/5 to-transparent dark:from-[#3faca2]/20 dark:via-[#13272E] dark:to-[#0A161A] flex flex-col items-center text-center gap-8 shadow-xl">
        <div className="flex flex-col items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-[#3faca2]/20 text-[#248178] dark:text-[#57c2b8] font-mono text-xs font-bold uppercase tracking-widest">
            COLLABORATION CREDIT
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111111] dark:text-white font-sans">
            THANK YOU, BANDISH STUDIOS.
          </h3>
          <p className="text-base sm:text-lg text-[#555] dark:text-[#B3D3D7] max-w-xl leading-relaxed">
            Thank you for the opportunity to contribute to this project and to lead the visual identity work for Sangreen Future Renewables.
          </p>
        </div>

        {/* Bandish Studios Authentic Artifact Image */}
        <div className="w-full max-w-xl rounded-xl overflow-hidden border border-[#3faca2]/30 shadow-2xl bg-[#3faca2] p-6 sm:p-8 flex flex-col items-center">
          <img
            src="/projects/sangreen-renewables/imgi_27_image.webp"
            alt="Bandish Studios thank you credit screen"
            className="w-full h-auto object-contain drop-shadow-md cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() =>
              setPreviewImage({
                src: '/projects/sangreen-renewables/imgi_27_image.webp',
                caption: 'Bandish Studios — Films, Ads, Branding collaboration credit.',
              })
            }
          />
        </div>

        <div className="font-mono text-xs text-[#777] dark:text-[#7A989E] tracking-wider uppercase">
          BANDISH FILMS · ADS · BRANDING // SANGREEN FUTURE RENEWABLES (2025)
        </div>
      </section>

      {/* ==================================================
          NEXT PROJECT ROSTER NAVIGATION
          ================================================== */}
      <div className="pt-10 border-t border-[#111111]/10 dark:border-white/10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888] uppercase tracking-widest">
            NEXT CASE STUDY // {nextProject.number}
          </span>
          <span className="font-mono text-xs text-[#3faca2] dark:text-[#57c2b8] font-bold">
            04 / 06 PROJECTS
          </span>
        </div>

        <button
          onClick={() => onSelectProject(nextProject)}
          className="group text-left p-6 sm:p-8 rounded-xl border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#122227] hover:border-[#3faca2] dark:hover:border-[#3faca2] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs text-[#3faca2] dark:text-[#57c2b8] font-bold block mb-1">
              PROJECT {nextProject.number} · {nextProject.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] dark:text-white group-hover:text-[#3faca2] dark:group-hover:text-[#57c2b8] transition-colors">
              {nextProject.title}
            </h3>
            <p className="text-sm font-serif italic text-[#666] dark:text-[#AAA] mt-1 max-w-xl">
              "{nextProject.heroTagline}"
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#111111] dark:text-white font-bold group-hover:translate-x-1 transition-transform self-start sm:self-auto shrink-0">
            <span>VIEW CASE STUDY</span>
            <span>→</span>
          </div>
        </button>
      </div>

      {/* ==================================================
          LIGHTBOX IMAGE PREVIEW MODAL
          ================================================== */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-10 right-0 font-mono text-xs text-white/80 hover:text-white bg-white/10 px-3 py-1 rounded"
            >
              CLOSE [ESC] ✕
            </button>
            <img
              src={previewImage.src}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="mt-3 text-xs sm:text-sm font-mono text-white/80 text-center max-w-2xl">
              {previewImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
