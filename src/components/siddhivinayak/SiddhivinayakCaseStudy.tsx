import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import {
  PRECAST_SECTIONS,
  PRECAST_COLOR_PALETTE,
  PRECAST_TYPOGRAPHY_SPECS,
  SiddhivinayakSection,
} from './siddhivinayakData';

interface SiddhivinayakCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const SiddhivinayakCaseStudy: React.FC<SiddhivinayakCaseStudyProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeColor, setActiveColor] = useState<string>('#EC6E2F');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string>('700');
  const [testText, setTestText] = useState<string>(
    'SIDDHIVINAYAK PRECAST // STRUCTURAL INTEGRITY 2024'
  );
  const [previewImage, setPreviewImage] = useState<{ src: string; caption: string } | null>(null);

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const categories = [
    { id: 'ALL', label: 'ALL CHAPTERS (07)' },
    { id: 'FOUNDATION', label: '01–02 FOUNDATION' },
    { id: 'IDENTITY', label: '03 IDENTITY & MARK' },
    { id: 'SYSTEM', label: '04–05 PALETTE & UBUNTU' },
    { id: 'APPLICATION', label: '06 CORPORATE APPLICATIONS' },
    { id: 'REFINEMENT', label: '07 CLOSING & CREDIT' },
  ];

  const filteredSections =
    activeCategory === 'ALL'
      ? PRECAST_SECTIONS
      : PRECAST_SECTIONS.filter((s) => s.category === activeCategory);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full flex flex-col select-text font-['Ubuntu',sans-serif] bg-[#F4F4F5] dark:bg-[#0F1113] text-[#231F20] dark:text-[#F2F2F3] transition-colors duration-300">
      {/* ==================================================
          01 — ARCHITECTURAL COVER & HERO SECTION
          ================================================== */}
      <section className="pb-12 border-b border-[#231F20]/10 dark:border-white/10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#EC6E2F] font-bold">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#EC6E2F] shadow-sm animate-pulse" />
            <span>BRAND KIT // INDUSTRIAL IDENTITY</span>
          </div>
          <div className="font-mono text-xs text-[#737476] dark:text-[#9A9BA0] flex items-center gap-2">
            <span>PRECAST CONCRETE MANUFACTURING</span>
            <span>·</span>
            <span>07 SECTIONS</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#231F20] dark:text-white leading-none">
              SIDDHIVINAYAK
            </h1>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EC6E2F] leading-none">
              PRECAST
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#28585D] dark:text-[#6FA2A7] max-w-3xl leading-relaxed mt-2">
            "PRECISION SET IN CONCRETE."
          </p>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#BBB] max-w-3xl leading-relaxed">
            Siddhivinayak Precast is a manufacturer of heavy civil infrastructure and precast concrete products. In collaboration with Bandish Studios, I developed an industrial Brand Kit that reflects the structural permanence of their engineering—formalizing a continuous-loop infinity mark, high-visibility Deep Carrot Orange (#EC6E2F) palette standards, site security badging, and executive print correspondence.
          </p>
        </div>

        {/* Heavy Industrial Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#231F20]/10 dark:border-white/10 text-xs font-mono">
          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              CLIENT
            </span>
            <span className="font-bold text-[#231F20] dark:text-white">
              Siddhivinayak Precast Pipes
            </span>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              DISCIPLINE
            </span>
            <span className="font-bold text-[#231F20] dark:text-white">
              Brand Kit & Industrial Guidelines
            </span>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              PRIMARY PALETTE
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#EC6E2F] border border-black/10 inline-block shadow-sm" title="Deep Carrot Orange #EC6E2F" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#28585D] border border-black/10 inline-block shadow-sm" title="Dark Slate Gray #28585D" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#737476] border border-black/10 inline-block shadow-sm" title="Sonic Silver #737476" />
              <span className="text-[11px] text-[#444] dark:text-[#AAA]">#EC6E2F · #28585D</span>
            </div>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              PRIMARY TYPEFACE
            </span>
            <span className="font-bold text-[#231F20] dark:text-white">
              Ubuntu (300 to 700)
            </span>
          </div>
        </div>

        {/* Immersive Full-Bleed Hero Image (Concrete Formwork Architectural Background) */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 shadow-2xl bg-white dark:bg-[#15181C] group">
          <img
            src="/projects/siddhivinayak-precast/cover-brandkit.jpg"
            alt="Siddhivinayak Precast Brand Kit Cover on Concrete Architecture"
            className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase bg-[#EC6E2F] px-2.5 py-1 rounded w-fit mb-1 font-bold shadow-md">
                BRAND KIT // OFFICIAL COVER
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/95 max-w-xl">
                Achieving Creativity & Consistency — formalized guidelines set against raw architectural concrete formwork.
              </p>
            </div>
            <button
              onClick={() =>
                setPreviewImage({
                  src: '/projects/siddhivinayak-precast/cover-brandkit.jpg',
                  caption: 'Siddhivinayak Precast Brand Kit publication cover on concrete architectural background.',
                })
              }
              className="text-[11px] font-mono px-3.5 py-1.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-colors self-start sm:self-auto"
            >
              EXPAND VIEW ↗
            </button>
          </div>
        </div>

        {/* Narrative Flow Banner */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1 text-xs font-mono text-[#737476] dark:text-[#9A9BA0]">
          <span className="font-bold text-[#231F20] dark:text-white uppercase tracking-wider shrink-0">
            NARRATIVE ARC:
          </span>
          <span className="px-2.5 py-1 rounded bg-[#EC6E2F]/10 dark:bg-[#EC6E2F]/20 text-[#D15516] dark:text-[#FF8749] font-bold shrink-0">
            FOUNDATION
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#28585D]/10 dark:bg-[#28585D]/30 text-[#28585D] dark:text-[#6FA2A7] font-bold shrink-0">
            IDENTITY
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#737476]/15 dark:bg-[#737476]/30 text-[#444] dark:text-[#CCC] font-bold shrink-0">
            SYSTEM
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#EC6E2F]/10 dark:bg-[#EC6E2F]/20 text-[#D15516] dark:text-[#FF8749] font-bold shrink-0">
            APPLICATION
          </span>
          <span className="shrink-0">→</span>
          <span className="px-2.5 py-1 rounded bg-[#28585D]/10 dark:bg-[#28585D]/30 text-[#28585D] dark:text-[#6FA2A7] font-bold shrink-0">
            REFINEMENT
          </span>
        </div>

        {/* Category Jump Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#28585D] text-white border-[#28585D] dark:bg-[#EC6E2F] dark:border-[#EC6E2F] font-bold shadow-sm'
                  : 'bg-white/90 dark:bg-[#181B20] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-[#28585D] dark:hover:border-[#EC6E2F]'
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
      <div className="flex flex-col divide-y divide-[#231F20]/10 dark:divide-white/10">
        {filteredSections.map((section) => (
          <article
            key={section.id}
            id={`precast-sec-${section.id}`}
            className="py-16 md:py-24 flex flex-col gap-10 scroll-mt-20"
          >
            {/* Section Header */}
            <header className="flex flex-col gap-3 max-w-4xl">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#EC6E2F] font-bold uppercase">
                <span className="px-2.5 py-0.5 rounded bg-[#EC6E2F]/10 dark:bg-[#EC6E2F]/20 text-[#D15516] dark:text-[#FF8749]">
                  {section.number} // 07
                </span>
                <span>—</span>
                <span>{section.title}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#231F20] dark:text-white leading-tight">
                {section.heading}
              </h2>

              <p className="text-lg sm:text-xl font-serif italic text-[#28585D] dark:text-[#6FA2A7]">
                "{section.statement}"
              </p>

              <div className="flex flex-col gap-2.5 text-base sm:text-lg text-[#555] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1">
                {section.copy.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </header>

            {/* ==================================================
                SECTION SPECIFIC VISUAL MODULES
                ================================================== */}

            {/* SECTION 02: THE FOUNDATION (ABOUT US / FLYOVER INFRASTRUCTURE) */}
            {section.id === '02-foundation' && (
              <div className="flex flex-col gap-6">
                <div className="relative w-full rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 shadow-xl bg-white dark:bg-[#15181C] p-4 sm:p-6 md:p-8 group">
                  <img
                    src="/projects/siddhivinayak-precast/foundation-about.jpg"
                    alt="Metro rail flyover construction with precast piers"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/siddhivinayak-precast/foundation-about.jpg',
                        caption: 'About Us & Vision — heavy civil metro rail flyover construction utilizing high-grade precast concrete piers.',
                      })
                    }
                  />
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-[#737476] dark:text-[#9A9BA0]">
                    <div>
                      <span className="font-bold text-[#231F20] dark:text-white uppercase">CAPTION:</span> Monumental civil flyover infrastructure — concrete precast piers, segmental launchers, and utility trenches.
                    </div>
                    <button
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/siddhivinayak-precast/foundation-about.jpg',
                          caption: 'Monumental civil flyover infrastructure.',
                        })
                      }
                      className="text-[11px] font-mono px-3 py-1 rounded bg-[#28585D] text-white font-bold hover:bg-[#1e4448] transition-colors self-start sm:self-auto"
                    >
                      VIEW HIGH RESOLUTION ↗
                    </button>
                  </div>
                </div>

                {/* Industrial Capabilities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-lg border border-[#231F20]/10 dark:border-white/10 bg-white/70 dark:bg-[#15181C]/70">
                    <div className="text-xl font-black text-[#EC6E2F]">RCC PIPES</div>
                    <p className="text-[11px] text-[#666] dark:text-[#999] mt-1 font-mono">Spun concrete conduits for high-pressure stormwater & municipal sewers.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-[#231F20]/10 dark:border-white/10 bg-white/70 dark:bg-[#15181C]/70">
                    <div className="text-xl font-black text-[#28585D] dark:text-[#6FA2A7]">HDPE LINED</div>
                    <p className="text-[11px] text-[#666] dark:text-[#999] mt-1 font-mono">Corrosion-resistant thermoplastic interior lining for aggressive effluents.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-[#231F20]/10 dark:border-white/10 bg-white/70 dark:bg-[#15181C]/70">
                    <div className="text-xl font-black text-[#EC6E2F]">POLE BASES</div>
                    <p className="text-[11px] text-[#666] dark:text-[#999] mt-1 font-mono">Precision foundation blocks for highway lighting & utility grid lines.</p>
                  </div>
                  <div className="p-4 rounded-lg border border-[#231F20]/10 dark:border-white/10 bg-white/70 dark:bg-[#15181C]/70">
                    <div className="text-xl font-black text-[#28585D] dark:text-[#6FA2A7]">CHAMBERS</div>
                    <p className="text-[11px] text-[#666] dark:text-[#999] mt-1 font-mono">Precast stormwater & electrical cable trenches for smart transit networks.</p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 03: THE MARK (LOGO PRESENTATION SLIDE) */}
            {section.id === '03-mark' && (
              <div className="flex flex-col gap-6">
                <div className="relative w-full rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 shadow-xl bg-white dark:bg-[#15181C] p-4 sm:p-6 md:p-8 group">
                  <img
                    src="/projects/siddhivinayak-precast/logo-identity.jpg"
                    alt="Siddhivinayak Precast Logo Presentation Slide"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/siddhivinayak-precast/logo-identity.jpg',
                        caption: 'Logo Presentation Slide — infinity mark symbolizing excellence, isolated on white and Anti-Flash White with clear-space rules.',
                      })
                    }
                  />
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-[#737476] dark:text-[#9A9BA0]">
                    <div>
                      <span className="font-bold text-[#231F20] dark:text-white uppercase">STANDARDS:</span> Isolated primary emblem, Anti-Flash White field reproduction, and rectangular clear-space boundary.
                    </div>
                    <span className="text-[#EC6E2F] font-bold">SYMBOLIZING EXCELLENCE</span>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 04: COLOUR SYSTEM (COLORS SLIDE + INTERACTIVE SWATCH LAB) */}
            {section.id === '04-color' && (
              <div className="flex flex-col gap-8">
                {/* Official Presentation Slide */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 shadow-xl bg-white dark:bg-[#15181C] p-4 sm:p-6 md:p-8 group">
                  <img
                    src="/projects/siddhivinayak-precast/color-palette.jpg"
                    alt="Official Color Palette Slide"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/siddhivinayak-precast/color-palette.jpg',
                        caption: 'Official Colors Slide — subtle hues, harmonious elegance with exact CMYK and HEX coordinates.',
                      })
                    }
                  />
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-[#737476] dark:text-[#9A9BA0]">
                    <span>OFFICIAL STANDARDS // DEEP CARROT ORANGE · DARK SLATE GRAY · SONIC SILVER</span>
                    <span className="text-[#EC6E2F] font-bold">SUBTLE HUES, HARMONIOUS ELEGANCE</span>
                  </div>
                </div>

                {/* Interactive Palette Grid Blocks */}
                <div className="p-6 md:p-8 rounded-xl border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] shadow-md flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#231F20]/10 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="text-lg font-black text-[#231F20] dark:text-white uppercase tracking-tight">
                        INTERACTIVE REPRODUCTION MATRIX
                      </h3>
                      <p className="text-xs text-[#737476] dark:text-[#9A9BA0] font-mono">
                        Click any industrial swatch to copy its verified HEX code for digital or print specification.
                      </p>
                    </div>
                    {copiedHex && (
                      <span className="text-xs font-mono px-3 py-1 bg-[#EC6E2F] text-white rounded font-bold animate-pulse">
                        COPIED {copiedHex}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PRECAST_COLOR_PALETTE.map((swatch) => (
                      <div
                        key={swatch.hex}
                        onClick={() => {
                          setActiveColor(swatch.hex);
                          copyToClipboard(swatch.hex);
                        }}
                        className={`p-5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                          activeColor === swatch.hex
                            ? 'border-[#EC6E2F] ring-2 ring-[#EC6E2F]/30 shadow-lg scale-[1.02]'
                            : 'border-black/10 dark:border-white/10 hover:border-[#28585D] hover:shadow-md'
                        } ${
                          swatch.hex === '#F2F2F3'
                            ? 'bg-[#F2F2F3] text-[#231F20]'
                            : 'bg-[#F9FAFB] dark:bg-[#121417]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="w-12 h-12 rounded border border-black/10 shadow-sm"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(swatch.hex);
                            }}
                            className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-[#EC6E2F] hover:text-white transition-colors"
                          >
                            COPY HEX
                          </button>
                        </div>

                        <div>
                          <div className="font-bold text-base text-[#231F20] dark:text-white">
                            {swatch.name}
                          </div>
                          <div className="font-mono text-xs text-[#EC6E2F] font-bold mt-0.5">
                            {swatch.hex}
                          </div>
                          <p className="text-[11px] text-[#666] dark:text-[#AAA] mt-2 font-mono leading-relaxed">
                            {swatch.role}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-black/10 dark:border-white/10 text-[10px] font-mono text-[#555] dark:text-[#AAA]">
                          <div>
                            <span className="text-[#888] block text-[9px]">CMYK</span>
                            <span className="font-bold">{swatch.cmyk}</span>
                          </div>
                          <div>
                            <span className="text-[#888] block text-[9px]">RGB</span>
                            <span className="font-bold">{swatch.rgb}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 05: TYPOGRAPHY SYSTEM (UBUNTU SHOWCASE & LIVE TESTER) */}
            {section.id === '05-typography' && (
              <div className="flex flex-col gap-8">
                {/* Official Presentation Slides Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Typography Slide 06 */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0]">
                      <span className="text-[#EC6E2F] font-bold">TYPEFACE SHOWCASE // 06</span>
                      <span>UBUNTU FAMILY</span>
                    </div>
                    <img
                      src="/projects/siddhivinayak-precast/typography-ubuntu.jpg"
                      alt="Typography slide - Words that speak, fonts that define"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/siddhivinayak-precast/typography-ubuntu.jpg',
                          caption: 'Typography slide — Words that speak, fonts that define with Ubuntu typeface showcase.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#AAA] font-mono">
                      "Ubuntu is a sleek, modern corporate font that balances professionalism with a touch of warmth... conveys trust and innovation."
                    </p>
                  </div>

                  {/* Typeface Slide 07 */}
                  <div className="flex flex-col gap-3 rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-5 shadow-md">
                    <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0]">
                      <span className="text-[#EC6E2F] font-bold">WEIGHTS COMPARISON // 07</span>
                      <span>Aa (REGULAR) & Bb (BOLD)</span>
                    </div>
                    <img
                      src="/projects/siddhivinayak-precast/typeface-weights.jpg"
                      alt="Typeface comparison - Ubuntu Regular and Ubuntu Bold"
                      className="w-full h-auto object-contain rounded border border-black/5 dark:border-white/5 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/siddhivinayak-precast/typeface-weights.jpg',
                          caption: 'Typeface comparison — Aa (Ubuntu Regular) and Bb (Ubuntu Bold) structural comparison.',
                        })
                      }
                    />
                    <p className="text-xs text-[#555] dark:text-[#AAA] font-mono">
                      Contrasting Ubuntu Regular (400) for high-density tabular catalogs with Ubuntu Bold (700) for structural environmental headings.
                    </p>
                  </div>
                </div>

                {/* Live Ubuntu Type Tester Laboratory */}
                <div className="p-6 md:p-8 rounded-xl border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] shadow-md flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="text-lg font-black text-[#231F20] dark:text-white uppercase tracking-tight">
                        LIVE TYPE SYSTEM EXPLORER
                      </h3>
                      <p className="text-xs text-[#737476] dark:text-[#9A9BA0] font-mono">
                        Test interactive weights and rendered letterforms of the official Ubuntu type family.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                      {PRECAST_TYPOGRAPHY_SPECS.weights.map((w) => (
                        <button
                          key={w.weight}
                          onClick={() => setSelectedWeight(w.weight)}
                          className={`px-3 py-1 rounded transition-colors ${
                            selectedWeight === w.weight
                              ? 'bg-[#EC6E2F] text-white font-bold'
                              : 'bg-black/5 dark:bg-white/10 text-[#555] dark:text-[#AAA] hover:bg-black/10'
                          }`}
                        >
                          {w.name} ({w.weight})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-mono text-[#888] uppercase tracking-wider">
                      INTERACTIVE STRING TEST:
                    </label>
                    <input
                      type="text"
                      value={testText}
                      onChange={(e) => setTestText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-[#F9FAFB] dark:bg-[#101215] text-[#231F20] dark:text-white font-mono text-sm focus:outline-none focus:border-[#EC6E2F]"
                      placeholder="Type custom text..."
                    />
                  </div>

                  {/* Rendered Output in Ubuntu Font */}
                  <div
                    className="p-6 rounded-lg border border-dashed border-black/20 dark:border-white/20 bg-[#F4F4F5] dark:bg-[#0E1012] min-h-[140px] flex items-center justify-center text-center overflow-x-auto"
                    style={{ fontFamily: 'Ubuntu, sans-serif', fontWeight: selectedWeight }}
                  >
                    <div className="text-2xl sm:text-4xl md:text-5xl text-[#231F20] dark:text-white tracking-tight leading-tight">
                      {testText || 'SIDDHIVINAYAK PRECAST'}
                    </div>
                  </div>

                  {/* Weight Usage Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono pt-2">
                    {PRECAST_TYPOGRAPHY_SPECS.weights.map((w) => (
                      <div
                        key={w.name}
                        className={`p-3.5 rounded border transition-colors ${
                          selectedWeight === w.weight
                            ? 'border-[#EC6E2F] bg-[#EC6E2F]/5 dark:bg-[#EC6E2F]/10'
                            : 'border-black/10 dark:border-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm text-[#231F20] dark:text-white mb-1">
                          {w.name}
                        </div>
                        <p className="text-[11px] text-[#666] dark:text-[#AAA] leading-relaxed">
                          {w.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 06: CORPORATE APPLICATIONS (EDITORIAL MOCKUP GRID) */}
            {section.id === '06-applications' && (
              <div className="flex flex-col gap-8">
                {/* Asymmetric Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Business Card (7 Cols) — Dark Ridged Industrial Texture */}
                  <div className="lg:col-span-7 flex flex-col justify-between rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0] mb-3">
                        <span className="text-[#EC6E2F] font-bold">01 // STATIONERY</span>
                        <span>BUSINESS CARDS</span>
                      </div>
                      <h4 className="text-xl font-black text-[#231F20] dark:text-white mb-1">
                        Executive Business Cards
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mb-4">
                        Front and back cards resting on dark, ridged industrial substrate. Shows executive designation, full precast product offerings, and custom contact QR code.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#15181C]">
                      <img
                        src="/projects/siddhivinayak-precast/mockup-businesscard.jpg"
                        alt="Siddhivinayak Precast business cards on dark ridged texture"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/siddhivinayak-precast/mockup-businesscard.jpg',
                            caption: 'Executive business cards — front and back presentation resting on dark, ridged industrial substrate.',
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Letterhead (5 Cols) — Raw Concrete Texture */}
                  <div className="lg:col-span-5 flex flex-col justify-between rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0] mb-3">
                        <span className="text-[#EC6E2F] font-bold">02 // CORRESPONDENCE</span>
                        <span>OFFICIAL LETTERHEAD</span>
                      </div>
                      <h4 className="text-xl font-black text-[#231F20] dark:text-white mb-1">
                        Tri-Folded Letterhead
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mb-4">
                        Tri-folded formal stationery resting on raw aggregate concrete, framing executive correspondence with precision infinity branding.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#15181C]">
                      <img
                        src="/projects/siddhivinayak-precast/mockup-letterhead.jpg"
                        alt="Tri-folded letterhead on raw concrete"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/siddhivinayak-precast/mockup-letterhead.jpg',
                            caption: 'Corporate Letterhead — tri-folded formal letterhead resting on raw cast concrete.',
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Tier 2: ID Card & A4 Envelope */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* ID Card (6 Cols) — High-Visibility Orange Lanyard */}
                  <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0] mb-3">
                        <span className="text-[#EC6E2F] font-bold">03 // IDENTIFICATION</span>
                        <span>EMPLOYEE ID BADGE</span>
                      </div>
                      <h4 className="text-xl font-black text-[#231F20] dark:text-white mb-1">
                        High-Visibility Security ID
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mb-4">
                        Employee identification badge featuring safety clip and vibrant Deep Carrot Orange nylon lanyard for site and plant visibility.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#15181C]">
                      <img
                        src="/projects/siddhivinayak-precast/mockup-idcard.jpg"
                        alt="Employee ID card with orange lanyard"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/siddhivinayak-precast/mockup-idcard.jpg',
                            caption: 'Employee ID Card — security credential with high-visibility Deep Carrot Orange lanyard and clip.',
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* A4 Envelope (6 Cols) — Orange Flap Accent */}
                  <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 bg-white dark:bg-[#15181C] p-6 shadow-md group">
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#737476] dark:text-[#9A9BA0] mb-3">
                        <span className="text-[#EC6E2F] font-bold">04 // MAILING SYSTEM</span>
                        <span>A4 ENVELOPE</span>
                      </div>
                      <h4 className="text-xl font-black text-[#231F20] dark:text-white mb-1">
                        Corporate A4 Envelope
                      </h4>
                      <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mb-4">
                        Clean envelope face with official contact credentials and full-bleed Deep Carrot Orange closure flap for distinctive physical mailing.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-[#15181C]">
                      <img
                        src="/projects/siddhivinayak-precast/mockup-envelope.jpg"
                        alt="A4 envelope with orange flap"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        onClick={() =>
                          setPreviewImage({
                            src: '/projects/siddhivinayak-precast/mockup-envelope.jpg',
                            caption: 'Corporate A4 Envelope — clean address face with signature Deep Carrot Orange closure flap.',
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 07: CLOSING & BANDISH STUDIOS CREDIT (MIRRORING THE HERO) */}
            {section.id === '07-closing' && (
              <div className="flex flex-col gap-8">
                {/* Concrete Architectural Closing Slide (Structural Loop) */}
                <div className="relative w-full rounded-xl overflow-hidden border border-[#231F20]/15 dark:border-white/15 shadow-2xl bg-white dark:bg-[#15181C] group">
                  <img
                    src="/projects/siddhivinayak-precast/closing-credit.jpg"
                    alt="Bandish Studios thank you closing slide on raw concrete architecture"
                    className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() =>
                      setPreviewImage({
                        src: '/projects/siddhivinayak-precast/closing-credit.jpg',
                        caption: 'Closing slide — Bandish Studios thank you credit over concrete architectural structure, mirroring the hero opening in a complete structural loop.',
                      })
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                    <div>
                      <div className="font-mono text-[10px] tracking-widest uppercase bg-[#28585D] px-2.5 py-1 rounded w-fit mb-1 font-bold shadow-md">
                        STRUCTURAL LOOP // FINAL CLOSING
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-white/95 max-w-xl">
                        Bandish Studios — "Thank you / For giving us the opportunity to work on this project", placed over the concrete architectural background mirroring the hero at the top.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setPreviewImage({
                          src: '/projects/siddhivinayak-precast/closing-credit.jpg',
                          caption: 'Bandish Studios collaboration credit on concrete formwork.',
                        })
                      }
                      className="text-[11px] font-mono px-3.5 py-1.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-colors self-start sm:self-auto"
                    >
                      EXPAND VIEW ↗
                    </button>
                  </div>
                </div>

                {/* Final Closing Statement Box */}
                <div className="p-8 sm:p-12 rounded-xl border border-[#EC6E2F]/30 bg-gradient-to-br from-[#EC6E2F]/10 via-[#28585D]/10 to-transparent dark:from-[#EC6E2F]/15 dark:via-[#15181C] dark:to-[#0F1113] flex flex-col items-center text-center gap-4 shadow-lg">
                  <div className="px-3 py-1 rounded bg-[#EC6E2F]/20 text-[#D15516] dark:text-[#FF8749] font-mono text-xs font-bold uppercase tracking-widest">
                    SYSTEM FORMALIZATION
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#231F20] dark:text-white">
                    A FOUNDATION FOR GROWTH.
                  </h3>
                  <p className="text-base text-[#555] dark:text-[#CCC] max-w-xl leading-relaxed">
                    The Siddhivinayak Precast Brand Kit formalizes the visual language, ensuring that whether on a manufacturing floor or a corporate document, the brand remains as unyielding as the products they build.
                  </p>
                  <div className="font-mono text-xs text-[#737476] dark:text-[#888] tracking-wider uppercase mt-2">
                    BANDISH STUDIOS // CREATING MAGIC: ONE FRAME AT A TIME
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Strip */}
            {section.specs && section.specs.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-lg border border-[#231F20]/10 dark:border-white/10 bg-white/60 dark:bg-[#15181C]/60 text-xs font-mono">
                {section.specs.map((spec, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-[#737476] dark:text-[#888] block text-[10px] uppercase tracking-wider mb-0.5">
                      {spec.label}
                    </span>
                    <span className="font-bold text-[#231F20] dark:text-white">
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
          NEXT PROJECT ROSTER NAVIGATION
          ================================================== */}
      <div className="pt-10 border-t border-[#231F20]/10 dark:border-white/10 flex flex-col gap-6">
        <div className="flex items-center justify-between font-mono text-xs text-[#737476] dark:text-[#888]">
          <span className="uppercase tracking-widest">NEXT CASE STUDY // {nextProject.number}</span>
          <span className="text-[#EC6E2F] font-bold">05 / 06 PROJECTS</span>
        </div>

        <button
          onClick={() => onSelectProject(nextProject)}
          className="group text-left p-6 sm:p-8 rounded-xl border border-[#231F20]/10 dark:border-white/10 bg-white dark:bg-[#15181C] hover:border-[#EC6E2F] dark:hover:border-[#EC6E2F] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs text-[#EC6E2F] font-bold block mb-1">
              PROJECT {nextProject.number} · {nextProject.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#231F20] dark:text-white group-hover:text-[#EC6E2F] transition-colors">
              {nextProject.title}
            </h3>
            <p className="text-sm font-serif italic text-[#666] dark:text-[#AAA] mt-1 max-w-xl">
              "{nextProject.heroTagline}"
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#231F20] dark:text-white font-bold group-hover:translate-x-1 transition-transform self-start sm:self-auto shrink-0">
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
