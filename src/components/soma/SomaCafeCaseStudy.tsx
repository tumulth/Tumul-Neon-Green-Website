import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import {
  SOMA_ASSETS,
  SOMA_COLOR_PALETTE,
  SOMA_PROJECT_METADATA,
  SomaImageItem,
} from './somaData';

interface SomaCafeCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const SomaCafeCaseStudy: React.FC<SomaCafeCaseStudyProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeChapter, setActiveChapter] = useState<string>('ALL');
  const [previewImage, setPreviewImage] = useState<SomaImageItem | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const chapters = [
    { id: 'ALL', label: 'ALL CHAPTERS (05)' },
    { id: 'soma-ch-01', label: '01 STOREFRONT' },
    { id: 'soma-ch-02', label: '02 THE MARK' },
    { id: 'soma-ch-03', label: '03 TACTILE' },
    { id: 'soma-ch-04', label: '04 CULINARY' },
    { id: 'soma-ch-05', label: '05 CLOSING' },
  ];

  const handleScrollToChapter = (chapterId: string) => {
    setActiveChapter(chapterId);
    if (chapterId === 'ALL') {
      const el = document.getElementById('soma-ch-01');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(chapterId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col divide-y divide-[#1C1E1B]/10 dark:divide-white/10 select-text font-sans bg-[#FAF8F5] dark:bg-[#0E1310] text-[#1C1E1B] dark:text-[#F3EFEA] -mx-6 md:-mx-12 px-6 md:px-12 transition-colors duration-300">
      {/* ==================================================
          CHAPTER QUICK JUMP PILL NAVIGATION
          ================================================== */}
      <div className="sticky top-16 z-20 -mx-6 md:-mx-12 px-6 md:px-12 py-3 bg-[#FAF8F5]/90 dark:bg-[#0E1310]/90 backdrop-blur-md border-b border-[#1C1E1B]/10 dark:border-white/10 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#234133] dark:bg-[#C5A059] ring-4 ring-[#234133]/20 dark:ring-[#C5A059]/20" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#234133] dark:text-[#C5A059] font-bold">
            SOMA CAFE // HOSPITALITY BRANDING
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleScrollToChapter(ch.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-200 ${
                activeChapter === ch.id
                  ? 'bg-[#234133] text-[#FAF8F5] dark:bg-[#C5A059] dark:text-[#0E1310] font-bold shadow-sm'
                  : 'bg-white/60 dark:bg-white/5 text-[#555] dark:text-[#BBB] hover:bg-black/5 dark:hover:bg-white/10'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==================================================
          PROJECT HERO & EDITORIAL OPENING
          ================================================== */}
      <header className="pt-8 pb-14 md:pb-20 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#234133] dark:text-[#C5A059] font-semibold">
            <span>SOMA CAFE</span>
            <span>·</span>
            <span>VISUAL IDENTITY</span>
            <span>·</span>
            <span>HOSPITALITY BRANDING</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic font-normal tracking-tight text-[#1C1E1B] dark:text-[#F3EFEA] leading-[0.95]">
            Warmth, Refined.
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif text-[#4A4A45] dark:text-[#C5C5C0] max-w-4xl leading-relaxed">
            "{SOMA_PROJECT_METADATA.heroTagline}"
          </p>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#AAA] max-w-3xl leading-relaxed font-sans font-light mt-2">
            The serif wordmark uses generous character spacing and a restrained monogram drafted on concentric circular guides. The same proportions carry through from the brushed brass storefront lettering and duplexed 350gsm business cards down to the greaseproof parchment and custom-glazed ceramic dining plates.
          </p>
        </div>

        {/* Editorial Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#1C1E1B]/10 dark:border-white/10 text-xs font-mono">
          <div>
            <span className="text-[#888] dark:text-[#777] uppercase tracking-wider block mb-1">
              BRAND / CLIENT
            </span>
            <span className="font-sans font-semibold text-sm text-[#1C1E1B] dark:text-[#F3EFEA]">
              {SOMA_PROJECT_METADATA.client}
            </span>
          </div>
          <div>
            <span className="text-[#888] dark:text-[#777] uppercase tracking-wider block mb-1">
              DISCIPLINE
            </span>
            <span className="font-sans font-semibold text-sm text-[#1C1E1B] dark:text-[#F3EFEA]">
              Hospitality & Identity
            </span>
          </div>
          <div>
            <span className="text-[#888] dark:text-[#777] uppercase tracking-wider block mb-1">
              CULINARY DIRECTION
            </span>
            <span className="font-sans font-semibold text-sm text-[#1C1E1B] dark:text-[#F3EFEA]">
              Chef {SOMA_PROJECT_METADATA.chefDetails.name}
            </span>
          </div>
          <div>
            <span className="text-[#888] dark:text-[#777] uppercase tracking-wider block mb-1">
              PALETTE / TONE
            </span>
            <span className="font-sans font-semibold text-sm text-[#234133] dark:text-[#C5A059]">
              Forest Green & Antique Cream
            </span>
          </div>
        </div>

        {/* Brand Color System Strip */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#888] dark:text-[#777]">
            <span className="uppercase tracking-widest">
              00 // BRAND COLOR FOUNDATION
            </span>
            <span>5 CURATED TONES</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SOMA_COLOR_PALETTE.map((color, idx) => (
              <div
                key={color.name}
                onClick={() => setSelectedColorIndex(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[130px] ${
                  selectedColorIndex === idx
                    ? 'border-[#234133] dark:border-[#C5A059] shadow-md ring-2 ring-[#234133]/20 dark:ring-[#C5A059]/20 bg-white dark:bg-[#151D18]'
                    : 'border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:border-black/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="font-mono text-[10px] text-[#888] dark:text-[#AAA]">
                    {color.pantone.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <div className="font-sans font-semibold text-xs text-[#1C1E1B] dark:text-[#F3EFEA]">
                    {color.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#234133] dark:text-[#C5A059] mt-0.5">
                    {color.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 p-4 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-[#234133] dark:text-[#C5A059]">
                {SOMA_COLOR_PALETTE[selectedColorIndex].name}
              </span>
              <span className="text-[#666] dark:text-[#AAA]">
                · CMYK: {SOMA_COLOR_PALETTE[selectedColorIndex].cmyk}
              </span>
              <span className="text-[#666] dark:text-[#AAA] hidden sm:inline">
                · {SOMA_COLOR_PALETTE[selectedColorIndex].pantone}
              </span>
            </div>
            <p className="text-[#555] dark:text-[#BBB] text-[11px] italic max-w-md">
              {SOMA_COLOR_PALETTE[selectedColorIndex].description}
            </p>
          </div>
        </div>
      </header>

      {/* ==================================================
          01 — INTRODUCTION (The Storefront)
          ================================================== */}
      <section id="soma-ch-01" className="py-14 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#234133] dark:text-[#C5A059]">
            <span>01 — INTRODUCTION</span>
            <span>/</span>
            <span>THE STOREFRONT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#1C1E1B] dark:text-[#F3EFEA] leading-tight">
            "Warmth, Refined."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
            <p className="lg:col-span-8 text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed font-light">
              Building a new hospitality brand from the ground up requires a delicate balance of warmth and sophistication. The goal for Soma was to craft a visual identity that feels instantly welcoming yet undeniably premium—reflecting a promise of comfort, care, and uncompromising quality.
            </p>
            <div className="lg:col-span-4 p-4 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-center text-xs font-mono text-[#555] dark:text-[#AAA]">
              <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
                ARCHITECTURAL SPECIFICATION
              </span>
              <span>Facade: Matte Forest Green Lacquer</span>
              <span>Lettering: Solid Brushed Brass · Dual-Script</span>
              <span>Lighting: Warm 2400K Ambient Lanterns</span>
            </div>
          </div>
        </div>

        {/* Hero Architectural Storefront Image */}
        <div className="relative group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-lg">
          <img
            src={SOMA_ASSETS.storefrontHero.src}
            alt={SOMA_ASSETS.storefrontHero.alt}
            className="w-full h-auto max-h-[720px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01] cursor-pointer"
            onClick={() => setPreviewImage(SOMA_ASSETS.storefrontHero)}
          />

          <div className="p-5 md:p-6 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif italic text-lg text-[#1C1E1B] dark:text-[#F3EFEA]">
                The Storefront Architectural Facade
              </h3>
              <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-0.5">
                {SOMA_ASSETS.storefrontHero.caption}
              </p>
            </div>
            <button
              onClick={() => setPreviewImage(SOMA_ASSETS.storefrontHero)}
              className="px-4 py-2 rounded-full border border-black/15 dark:border-white/15 text-xs font-mono hover:bg-[#234133] hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-black transition-colors shrink-0"
            >
              INSPECT STOREFRONT ARCHITECTURE ↗
            </button>
          </div>
        </div>

        {/* 3 Editorial Architecture Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-2 font-bold">
                01.1 // FACADE COLORWAY
              </span>
              <h4 className="font-serif text-xl text-[#1C1E1B] dark:text-[#F3EFEA] mb-2">
                Grounding Forest Green
              </h4>
              <p className="text-xs text-[#666] dark:text-[#AAA] leading-relaxed">
                The deep olive/forest green exterior grounds the establishment against the urban sidewalk, projecting enduring heritage, serenity, and warmth without resorting to predictable cafe clichés.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[11px] text-[#888]">
              RAL 6005 / PANTONE 5535 C
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-2 font-bold">
                01.2 // ARCHITECTURAL SIGNAGE
              </span>
              <h4 className="font-serif text-xl text-[#1C1E1B] dark:text-[#F3EFEA] mb-2">
                Brushed Brass Serif
              </h4>
              <p className="text-xs text-[#666] dark:text-[#AAA] leading-relaxed">
                Solid brass lettering mounted with precise standoffs catches afternoon sunlight and streetlamp illumination, creating delicate shadows that highlight the bespoke serif curvature.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[11px] text-[#888]">
              SOLID BRASS · SATIN LACQUER
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-2 font-bold">
                01.3 // CULTURAL RESONANCE
              </span>
              <h4 className="font-serif text-xl text-[#1C1E1B] dark:text-[#F3EFEA] mb-2">
                Bilingual 'सोमा' Detail
              </h4>
              <p className="text-xs text-[#666] dark:text-[#AAA] leading-relaxed">
                The dual-language 'सोमा' Devanagari lettering integrates local cultural heritage with international fine-dining poise, celebrating root connections in modern hospitality.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[11px] text-[#888]">
              DUAL-SCRIPT HARMONY
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — THE IDENTITY (Logo & Construction)
          ================================================== */}
      <section id="soma-ch-02" className="py-14 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#234133] dark:text-[#C5A059]">
            <span>02 — THE IDENTITY</span>
            <span>/</span>
            <span>THE MARK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#1C1E1B] dark:text-[#F3EFEA] leading-tight">
            "Timeless Typography."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
            <p className="lg:col-span-8 text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed font-light">
              In a market filled with established names, the visual language needed to stand out while maintaining a timeless appeal. The core identity relies on a high-contrast serif wordmark and a delicate 'S' monogram, built on rigorous geometric principles to ensure perfect balance across every scale.
            </p>
            <div className="lg:col-span-4 p-4 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-center text-xs font-mono text-[#555] dark:text-[#AAA]">
              <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
                TYPOGRAPHIC PRINCIPLES
              </span>
              <span>Primary: High-Contrast Editorial Serif</span>
              <span>Monogram: Geometric 'S' with Golden Ratio arcs</span>
              <span>Secondary: Neutral Grotesk for culinary information</span>
            </div>
          </div>
        </div>

        {/* Visual Sequence: Wordmark & Monogram + Drafting Construction Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Centered Wordmark on Forest Green */}
          <div className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-md">
            <div className="relative overflow-hidden bg-[#234133] p-8 md:p-12 flex items-center justify-center min-h-[380px] cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.wordmarkMonogram)}>
              <img
                src={SOMA_ASSETS.wordmarkMonogram.src}
                alt={SOMA_ASSETS.wordmarkMonogram.alt}
                className="w-full h-auto max-h-[340px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#FAF8F5]/70 uppercase">
                HERO WORDMARK & MONOGRAM
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  The Primary Identity Anchor
                </h3>
                <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-1">
                  High-contrast serif wordmark and balanced 'S' monogram centered on deep forest green.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#888]">
                <span>SCALE: VECTOR MASTERS</span>
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.wordmarkMonogram)}
                  className="text-[#234133] dark:text-[#C5A059] font-bold hover:underline"
                >
                  EXPAND ↗
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Logo Construction Blueprint */}
          <div className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-md">
            <div className="relative overflow-hidden bg-[#FAF8F5] dark:bg-[#111613] p-8 md:p-12 flex items-center justify-center min-h-[380px] cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.logoConstruction)}>
              <img
                src={SOMA_ASSETS.logoConstruction.src}
                alt={SOMA_ASSETS.logoConstruction.alt}
                className="w-full h-auto max-h-[340px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#234133] dark:text-[#C5A059] uppercase font-bold">
                GEOMETRIC DRAFTING BLUEPRINT
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  Drafting Lines & Circular Grids
                </h3>
                <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-1">
                  Exact concentric compass circles, optical vertical stems, and baseline drafting ratios.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#888]">
                <span>PRECISION: 1:1.618 GOLDEN RATIOS</span>
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.logoConstruction)}
                  className="text-[#234133] dark:text-[#C5A059] font-bold hover:underline"
                >
                  EXPAND ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Technical Blueprint Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-1 font-bold">
              01 // OPTICAL KERNING
            </span>
            <p className="text-xs text-[#666] dark:text-[#AAA]">
              Generous letter-spacing across the four characters (S-O-M-A) ensures monumentality when cast in metal or embroidered on aprons.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-1 font-bold">
              02 // CIRCULAR CURVATURE
            </span>
            <p className="text-xs text-[#666] dark:text-[#AAA]">
              The 'S' spine is drafted via tangent circle pairs, yielding smooth optical weight transitions without digital distortion.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-1 font-bold">
              03 // SERIF TERMINALS
            </span>
            <p className="text-xs text-[#666] dark:text-[#AAA]">
              Teardrop ball terminals and sharp bracketed serifs evoke mid-century European fine-press publications and classical bistro identity.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs text-[#234133] dark:text-[#C5A059] block mb-1 font-bold">
              04 // MULTI-SCALE LEGIBILITY
            </span>
            <p className="text-xs text-[#666] dark:text-[#AAA]">
              Calibrated to maintain crisp integrity from a 12mm wax seal up to a 2.4m architectural facade banner.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — TACTILE COMMUNICATION (Stationery & Business Cards)
          ================================================== */}
      <section id="soma-ch-03" className="py-14 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#234133] dark:text-[#C5A059]">
            <span>03 — TACTILE COMMUNICATION</span>
            <span>/</span>
            <span>TANGIBLE ELEGANCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#1C1E1B] dark:text-[#F3EFEA] leading-tight">
            "The Identity in Hand."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
            <p className="lg:col-span-8 text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed font-light">
              A premium brand is felt as much as it is seen. The stationery suite translates the visual identity into tactile experiences, utilizing heavy paper stocks, subtle embossing, and rich brand colors to immediately communicate trust and elegance to partners and guests.
            </p>
            <div className="lg:col-span-4 p-4 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-center text-xs font-mono text-[#555] dark:text-[#AAA]">
              <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
                PRINT FINISHING SPECIFICATION
              </span>
              <span>Stock: 350gsm Colorplan Imperial Blue/Forest Green</span>
              <span>Finishing: Deep Blind Deboss & Foil Stamping</span>
              <span>Lining: Custom Ornamental Botanical Pattern</span>
            </div>
          </div>
        </div>

        {/* Editorial Overlapping Stationery Showcase */}
        <div className="flex flex-col gap-8">
          {/* Card Suite 1: Vansh Sharma Head Chef Business Cards */}
          <div className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-lg">
            <div className="relative overflow-hidden cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.businessCards)}>
              <img
                src={SOMA_ASSETS.businessCards.src}
                alt={SOMA_ASSETS.businessCards.alt}
                className="w-full h-auto max-h-[640px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] text-[#234133] dark:text-[#C5A059] uppercase tracking-wider font-bold">
                CHEF'S CREDENTIALS // VANSH SHARMA
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-serif italic text-2xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  Executive Business Cards — Head Chef Vansh Sharma
                </h3>
                <p className="text-xs text-[#555] dark:text-[#AAA] font-mono mt-1 leading-relaxed">
                  The crisp white textured cotton card contrasts against the deep forest green brand card. Featuring delicate serif typesetting, blind debossed 'S' monogram, and gold foil contact coordinates resting on tactile pleated paper.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.businessCards)}
                  className="px-4 py-2 rounded-full border border-black/15 dark:border-white/15 text-xs font-mono hover:bg-[#234133] hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-black transition-colors"
                >
                  VIEW CARD DETAILS ↗
                </button>
              </div>
            </div>
          </div>

          {/* Card Suite 2: Custom Lined Green Envelopes */}
          <div className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-lg">
            <div className="relative overflow-hidden cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.envelopes)}>
              <img
                src={SOMA_ASSETS.envelopes.src}
                alt={SOMA_ASSETS.envelopes.alt}
                className="w-full h-auto max-h-[640px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] text-[#234133] dark:text-[#C5A059] uppercase tracking-wider font-bold">
                BESPOKE LINED CORRESPONDENCE
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-serif italic text-2xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  Custom Forest Green Envelopes & Pattern Lining
                </h3>
                <p className="text-xs text-[#555] dark:text-[#AAA] font-mono mt-1 leading-relaxed">
                  Both open and closed envelope iterations reveal an intricate internal ornamental pattern lining. When unsealed by guests or purveyors, the interior flap surprises with refined geometric botanical flourishes.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.envelopes)}
                  className="px-4 py-2 rounded-full border border-black/15 dark:border-white/15 text-xs font-mono hover:bg-[#234133] hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-black transition-colors"
                >
                  VIEW ENVELOPE LINING ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stationery Sensory Philosophy Strip */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div>
            <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
              WEIGHT & SUBSTRATE
            </span>
            <p className="text-[#666] dark:text-[#AAA] leading-relaxed">
              350gsm duplexed cotton board delivers substantial hand-feel, eliminating flimsy commercial card stock in favor of artisanal heft.
            </p>
          </div>
          <div>
            <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
              EMBOSSED MONOGRAM
            </span>
            <p className="text-[#666] dark:text-[#AAA] leading-relaxed">
              Tactile blind debossing catches natural raking light, creating tangible sensory connection before a single word is read.
            </p>
          </div>
          <div>
            <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
              ORNAMENTAL REVEAL
            </span>
            <p className="text-[#666] dark:text-[#AAA] leading-relaxed">
              The internal envelope lining echoes bespoke Parisian pastry packaging, turning simple correspondence into an editorial moment.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — THE CULINARY EXPERIENCE (Signage & Tableware)
          ================================================== */}
      <section id="soma-ch-04" className="py-14 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#234133] dark:text-[#C5A059]">
            <span>04 — THE CULINARY EXPERIENCE</span>
            <span>/</span>
            <span>SEAMLESS INTEGRATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#1C1E1B] dark:text-[#F3EFEA] leading-tight">
            "Crafting the Moment."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
            <p className="lg:col-span-8 text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed font-light">
              A successful hospitality brand seamlessly integrates into the guest's environment. From the sidewalk to the table setting, every element—clean typography, balanced colors, and refined symbols—works together to frame the culinary craft without overpowering it.
            </p>
            <div className="lg:col-span-4 p-4 rounded-xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col justify-center text-xs font-mono text-[#555] dark:text-[#AAA]">
              <span className="text-[#234133] dark:text-[#C5A059] font-bold block mb-1">
                TOUCHPOINT HARMONY
              </span>
              <span>Tableware: Ceramic with Forest Green Rim & 'S' Monogram</span>
              <span>Bakery: Glazed Cruffins & Laminated Viennoiserie</span>
              <span>Packaging: Custom Monogram Parchment & Sealed Bags</span>
            </div>
          </div>
        </div>

        {/* Primary Pairing: Sidewalk Cruffin Pastry + Overhead Dining Flatlay */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visual A: Cruffin & Sidewalk A-Frame Sign */}
          <div className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-md">
            <div className="relative overflow-hidden cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.sidewalkCruffin)}>
              <img
                src={SOMA_ASSETS.sidewalkCruffin.src}
                alt={SOMA_ASSETS.sidewalkCruffin.alt}
                className="w-full h-[440px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] text-[#234133] dark:text-[#C5A059] uppercase tracking-wider font-bold">
                THE SIDEWALK GREETING
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  Glazed Cruffin & Sidewalk A-Frame
                </h3>
                <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-1">
                  Hand-held caramelized cruffin pastry with the deep green branded A-frame sidewalk sign subtly blurred in the outdoor sunlight.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#888]">
                <span>OUTDOOR HOSPITALITY PRESENCE</span>
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.sidewalkCruffin)}
                  className="text-[#234133] dark:text-[#C5A059] font-bold hover:underline"
                >
                  EXPAND ↗
                </button>
              </div>
            </div>
          </div>

          {/* Visual B: Overhead Dining Tableware Flatlay */}
          <div className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] shadow-md">
            <div className="relative overflow-hidden cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.diningTableware)}>
              <img
                src={SOMA_ASSETS.diningTableware.src}
                alt={SOMA_ASSETS.diningTableware.alt}
                className="w-full h-[440px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] text-[#234133] dark:text-[#C5A059] uppercase tracking-wider font-bold">
                THE TABLE SERVICE FLATLAY
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-[#151D18] border-t border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-xl text-[#1C1E1B] dark:text-[#F3EFEA]">
                  Custom Ceramic Plates & 'S' Monogram
                </h3>
                <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-1">
                  Overhead table setting showcasing handmade pasta, artisan bread, and black coffee on custom white plates with green rim and 'S' monogram.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#888]">
                <span>CUSTOM CERAMIC MONOGRAM PLATES</span>
                <button
                  onClick={() => setPreviewImage(SOMA_ASSETS.diningTableware)}
                  className="text-[#234133] dark:text-[#C5A059] font-bold hover:underline"
                >
                  EXPAND ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Culinary Craft Editorial Gallery */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#234133] dark:text-[#C5A059] font-bold">
              04.1 // CULINARY ART DIRECTION & TOUCHPOINTS
            </span>
            <span className="font-mono text-xs text-[#888]">
              8 EDITORIAL PLATES & PROCESS SHOTS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Chef Vansh */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.chefVansh)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.chefVansh.src}
                  alt={SOMA_ASSETS.chefVansh.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Chef Vansh Sharma
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Directing bakery craft in branded forest green linen apron.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  CULINARY LEADERSHIP
                </span>
              </div>
            </div>

            {/* 2. Baker Sugar Dusting */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.bakerCraft)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.bakerCraft.src}
                  alt={SOMA_ASSETS.bakerCraft.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Bakery Sugar Dusting
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Fine confectioner's sugar falling over freshly baked cruffins.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  ARTISANAL KITCHEN CRAFT
                </span>
              </div>
            </div>

            {/* 3. Plated Asparagus */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.platedAsparagus)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.platedAsparagus.src}
                  alt={SOMA_ASSETS.platedAsparagus.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Plated Green Asparagus
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Charred spears with rich cream reduction and viola blossoms.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  FINE DINING SAVORY
                </span>
              </div>
            </div>

            {/* 4. Artisan Burger & Monogram Parchment */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.artisanBurger)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.artisanBurger.src}
                  alt={SOMA_ASSETS.artisanBurger.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Artisan Burger Presentation
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Served on bespoke monogram-printed greaseproof parchment.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  CASUAL GOURMET SERVICE
                </span>
              </div>
            </div>

            {/* 5. Patisserie & Macarons */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.dessertPastry)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.dessertPastry.src}
                  alt={SOMA_ASSETS.dessertPastry.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Patisserie & French Macarons
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Delicate raspberry tart and macarons on parchment paper.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  PASTRY SHOWCASE
                </span>
              </div>
            </div>

            {/* 6. Takeaway Tote Bag */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.takeawayTote)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.takeawayTote.src}
                  alt={SOMA_ASSETS.takeawayTote.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Branded Takeaway Shopping Tote
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Heavy-gauge forest green kraft tote with embossed gold seal.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  PACKAGING TOUCHPOINT
                </span>
              </div>
            </div>

            {/* 7. Afternoon Tea Service */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.teaService)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.teaService.src}
                  alt={SOMA_ASSETS.teaService.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Artisan Tea Pouring Ritual
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Clear glass teapot pouring alongside flaky butter cruffin.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  BEVERAGE RITUAL
                </span>
              </div>
            </div>

            {/* 8. Packaged Cruffin Sealed Label */}
            <div className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#151D18] flex flex-col cursor-pointer"
                 onClick={() => setPreviewImage(SOMA_ASSETS.packagedCruffin)}>
              <div className="overflow-hidden h-64 bg-[#F2EFE9] dark:bg-[#151D18]">
                <img
                  src={SOMA_ASSETS.packagedCruffin.src}
                  alt={SOMA_ASSETS.packagedCruffin.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif italic text-base text-[#1C1E1B] dark:text-[#F3EFEA]">
                    Packaged Cruffin & Monogram Seal
                  </h4>
                  <p className="text-[11px] text-[#666] dark:text-[#AAA] font-mono mt-1">
                    Transparent pouch closed with circular green embossed label.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#234133] dark:text-[#C5A059] mt-3">
                  RETAIL VIENNOISERIE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Channel Extension: Instagram Profile Showcase */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 mt-4">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#234133] dark:text-[#C5A059] font-bold block mb-2">
              DIGITAL HOSPITALITY TOUCHPOINT
            </span>
            <h3 className="font-serif italic text-3xl text-[#1C1E1B] dark:text-[#F3EFEA] mb-3">
              Curated Editorial Instagram Presence
            </h3>
            <p className="text-sm text-[#555] dark:text-[#AAA] leading-relaxed mb-4">
              Extending the hospitality warmth into digital feeds: the @soma.cafe channel communicates daily viennoiserie bakes, chef tables, and tranquil cafe atmosphere through warm editorial photography and minimal typography.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666] dark:text-[#BBB]">
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] dark:bg-white/5 border border-black/10 dark:border-white/10">
                237K COMMUNITY FOLLOWERS
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] dark:bg-white/5 border border-black/10 dark:border-white/10">
                108 CURATED POSTS
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] dark:bg-white/5 border border-black/10 dark:border-white/10">
                @SOMA.CAFE
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs cursor-pointer group"
               onClick={() => setPreviewImage(SOMA_ASSETS.instagramShowcase)}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/15 bg-black transition-transform duration-500 group-hover:scale-105">
              <img
                src={SOMA_ASSETS.instagramShowcase.src}
                alt={SOMA_ASSETS.instagramShowcase.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center font-mono text-[10px] text-[#888] mt-2">
              CLICK TO INSPECT PROFILE MOCKUP ↗
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — CLOSING
          ================================================== */}
      <section id="soma-ch-05" className="py-14 md:py-24 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#234133] dark:text-[#C5A059] font-bold">
            05 — CLOSING
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif italic font-normal tracking-tight text-[#1C1E1B] dark:text-[#F3EFEA] leading-tight">
            "A Timeless Invitation."
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#4A4A45] dark:text-[#C5C5C0] leading-relaxed max-w-2xl mx-auto">
            A cohesive, memorable brand experience built on simplicity, clarity, and the true ethos of hospitality.
          </p>
        </div>

        {/* Holistic System Summary Card */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#234133] to-[#15271E] text-[#FAF8F5] shadow-xl border border-[#234133]/40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5A059] uppercase tracking-widest font-bold">
              <span>HOSPITALITY DESIGN SUMMARY</span>
              <span>·</span>
              <span>SOMA / SOMA CAFE</span>
            </div>
            <h3 className="font-serif italic text-3xl sm:text-4xl text-white">
              From Storefront to Table Setting
            </h3>
            <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
              By grounding the identity in high-contrast serif typography, circular drafting principles, rich forest green, and tactile unbleached paper stocks, Soma establishes an enduring culinary atmosphere that feels deeply rooted, welcoming, and undeniably refined.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-[#C5A059] block">MONOGRAM</span>
                <span className="text-white">Geometric 'S'</span>
              </div>
              <div>
                <span className="text-[#C5A059] block">SIGNAGE</span>
                <span className="text-white">Brushed Brass</span>
              </div>
              <div>
                <span className="text-[#C5A059] block">TABLEWARE</span>
                <span className="text-white">Rimmed Ceramics</span>
              </div>
              <div>
                <span className="text-[#C5A059] block">COMMUNITY</span>
                <span className="text-white">All-Day Dining</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[200px]">
            <span className="font-serif italic text-6xl text-[#C5A059] mb-1">
              S
            </span>
            <span className="font-serif uppercase tracking-widest text-sm text-white font-semibold">
              S O M A
            </span>
            <span className="font-mono text-[10px] text-[#FAF8F5]/70 mt-1">
              CAFE & PATISSERIE
            </span>
          </div>
        </div>

        {/* Project Credits & Deliverables List */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#151D18] border border-black/10 dark:border-white/10 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#234133] dark:text-[#C5A059] font-bold">
              DELIVERED BRAND ASSETS & TOUCHPOINTS
            </span>
            <span className="font-mono text-xs text-[#888]">
              8 KEY MILESTONES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {SOMA_PROJECT_METADATA.services.map((service, idx) => (
              <div key={service} className="flex items-start gap-2">
                <span className="text-[#234133] dark:text-[#C5A059] font-bold">
                  0{idx + 1}.
                </span>
                <span className="text-[#555] dark:text-[#CCC]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Card in circular roster */}
        {nextProject && (
          <div
            onClick={() => onSelectProject(nextProject)}
            className="group cursor-pointer p-8 rounded-2xl border border-[#1C1E1B]/15 dark:border-white/10 bg-white dark:bg-[#151D18] hover:border-[#234133] dark:hover:border-[#C5A059] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-xl"
            data-cursor="view"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#888] dark:text-[#777] uppercase tracking-wider mb-2">
                <span>NEXT PROJECT IN ROSTER</span>
                <span>·</span>
                <span>{nextProject.number}</span>
              </div>
              <h4 className="text-3xl sm:text-4xl font-sans font-black uppercase text-[#1C1E1B] dark:text-[#F3EFEA] group-hover:text-[#234133] dark:group-hover:text-[#C5A059] transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-sm font-serif italic text-[#666] dark:text-[#AAA] mt-1">
                "{nextProject.heroTagline}"
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#1C1E1B] dark:text-[#F3EFEA] group-hover:translate-x-1 transition-transform">
                EXPLORE CASE STUDY →
              </span>
            </div>
          </div>
        )}
      </section>

      {/* ==================================================
          HIGH RESOLUTION LIGHTBOX MODAL
          ================================================== */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white font-mono text-xs tracking-wider transition-colors border border-white/20"
            >
              CLOSE ✕
            </button>

            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center max-w-2xl">
              <p className="text-sm font-sans font-medium text-white/90">
                {previewImage.caption}
              </p>
              <span className="font-mono text-[11px] text-[#C5A059] uppercase tracking-wider block mt-1">
                {previewImage.category.toUpperCase()} SPECIFICATION // SOMA CAFE ARCHIVE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
