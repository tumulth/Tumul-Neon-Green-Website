import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import {
  PRESENTATION_SLIDES,
  PresentationSlide,
} from './socialMediaData';
import { SocialMediaArchiveGrid } from './SocialMediaArchiveGrid';

interface SocialMediaCreativesCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const SocialMediaCreativesCaseStudy: React.FC<
  SocialMediaCreativesCaseStudyProps
> = ({ project, onSelectProject, onClose }) => {
  const [activeChapter, setActiveChapter] = useState<string>('ALL');
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const chapters = [
    { id: 'ALL', label: 'ALL CHAPTERS (07)' },
    { id: 'social-ch-01', label: '01 INTRODUCTION' },
    { id: 'social-ch-02', label: '02 BANDHAN BANK' },
    { id: 'social-ch-03', label: '03 HOSPITALITY' },
    { id: 'social-ch-04', label: '04 SMART BAZAAR' },
    { id: 'social-ch-05', label: '05 BANDISH STUDIOS' },
    { id: 'social-ch-06', label: '06 LIVE ARCHIVE' },
    { id: 'social-ch-07', label: '07 CLOSING & CREDITS' },
  ];

  const handleScrollToChapter = (chapterId: string) => {
    setActiveChapter(chapterId);
    if (chapterId === 'ALL') {
      const el = document.getElementById('social-ch-01');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(chapterId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slide access helpers
  const slide01 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-01')!;
  const slide02 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-02')!;
  const slide03 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-03')!;
  const slide04 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-04')!;
  const slide05 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-05')!;
  const slide06 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-06')!;
  const slide07 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-07')!;
  const slide08 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-08')!;
  const slide09 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-09')!;
  const slide10 = PRESENTATION_SLIDES.find((s) => s.id === 'slide-10')!;

  return (
    <div className="w-full flex flex-col select-text font-sans bg-[#FAFAFA] dark:bg-[#0B0D0F] text-[#151719] dark:text-[#F3F4F6] transition-colors duration-300">
      {/* ==================================================
          01 — INTRODUCTION (Title Cover & Cascading Mosaic)
          ================================================== */}
      <section
        id="social-ch-01"
        className="pb-16 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-10 scroll-mt-20"
      >
        {/* Eyebrow & Category Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#D84A38] dark:text-[#FF6B6B] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D84A38] dark:bg-[#FF6B6B] animate-pulse" />
            <span>SOCIAL MEDIA CREATIVES // 2024 – 2025 ARCHIVE</span>
          </div>
          <div className="font-mono text-xs text-[#737476] dark:text-[#9A9BA0] flex items-center gap-2">
            <span>DIGITAL MARKETING</span>
            <span>·</span>
            <span>VISUAL COMMUNICATION</span>
            <span>·</span>
            <span>CONTENT STRATEGY</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-[#737476] dark:text-[#888] mb-1">
              BANDISH STUDIOS COLLABORATION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#151719] dark:text-white leading-none">
              SOCIAL MEDIA CREATIVES
            </h1>
          </div>

          <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#D84A38] dark:text-[#FF6B6B] tracking-tight mt-2">
            "HIGH-DENSITY CAMPAIGNS & MOTION ACROSS BANKING, RETAIL & HOSPITALITY."
          </p>

          <p className="text-base sm:text-xl text-[#3A3C40] dark:text-[#CCCCCC] leading-relaxed max-w-4xl mt-3 font-light">
            Throughout 2024 and 2025, in collaboration with Bandish Studios, I developed and executed social media campaign systems across diverse commercial sectors—national banking (Bandhan Bank), nationwide retail (Smart Bazaar), luxury hospitality (The Central Park Hotel & Parc Estique), and creative agency culture. I built modular 4:5 and 9:16 grid frameworks, produced animated Instagram reels, and ensured distinct typographical discipline across hundreds of mobile assets.
          </p>
        </div>

        {/* Strategic Overview Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121417] text-xs font-mono shadow-sm">
          <div>
            <span className="text-[#888] block text-[10px] uppercase tracking-wider mb-1">
              CLIENT ROSTER
            </span>
            <span className="font-bold text-[#151719] dark:text-white leading-tight block">
              Bandhan Bank, Smart Bazaar, Central Park, Parc Estique
            </span>
          </div>

          <div>
            <span className="text-[#888] block text-[10px] uppercase tracking-wider mb-1">
              PRODUCTION VOLUME
            </span>
            <span className="font-bold text-[#151719] dark:text-white leading-tight block">
              100+ High-Impact Creatives & Motion Reels
            </span>
          </div>

          <div>
            <span className="text-[#888] block text-[10px] uppercase tracking-wider mb-1">
              COLLABORATION
            </span>
            <span className="font-bold text-[#D84A38] dark:text-[#FF6B6B] leading-tight block">
              Developed with Bandish Studios
            </span>
          </div>

          <div>
            <span className="text-[#888] block text-[10px] uppercase tracking-wider mb-1">
              CREATIVE METHOD
            </span>
            <span className="font-bold text-[#151719] dark:text-white leading-tight block">
              Agility → Brand Adaptability → Rapid Execution
            </span>
          </div>
        </div>

        {/* Clean, Wide-Column Hero Cover Image */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 shadow-2xl bg-white dark:bg-[#121417] group">
          <img
            src={slide01.image}
            alt={slide01.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-[#D84A38] px-2.5 py-1 rounded w-fit font-bold shadow-md">
                PRESENTATION COVER // BANDISH STUDIOS
              </span>
              <p className="text-sm sm:text-base font-medium text-white/95 max-w-2xl drop-shadow">
                Cascading grid of colorful digital assets spanning national banking, hypermarket retail, and boutique hospitality.
              </p>
            </div>

            <button
              onClick={() =>
                setPreviewImage({
                  src: slide01.image,
                  caption: `${slide01.title} — ${slide01.description}`,
                })
              }
              className="px-4 py-2 rounded-lg bg-white/95 text-black hover:bg-white text-xs font-mono font-bold transition-all shadow-md self-start sm:self-auto cursor-pointer"
            >
              EXPAND COVER ↗
            </button>
          </div>
        </div>

        {/* Sticky Chapter Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t border-black/10 dark:border-white/10">
          <span className="text-xs font-mono text-[#888] uppercase tracking-wider shrink-0 mr-2">
            CHAPTERS:
          </span>
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleScrollToChapter(ch.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                activeChapter === ch.id
                  ? 'bg-[#151719] text-white border-[#151719] dark:bg-white dark:text-[#111] dark:border-white font-bold shadow-sm'
                  : 'bg-white/90 dark:bg-[#181B20] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-[#D84A38] hover:text-[#151719]'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </section>

      {/* ==================================================
          02 — CLIENT: BANDHAN BANK (Corporate / Finance)
          ================================================== */}
      <section
        id="social-ch-02"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#003B70] dark:text-[#4A90E2] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#003B70]/10 dark:bg-[#003B70]/30">
              02 // 07
            </span>
            <span>—</span>
            <span>CORPORATE & FINANCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            BANDHAN BANK
          </h2>

          <p className="text-2xl sm:text-3xl font-serif italic text-[#003B70] dark:text-[#4A90E2]">
            "DESIGNING FOR TRUST."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            For the financial sector, clarity is just as important as engagement. The visual language for Bandhan Bank focused on clean typography, structured information hierarchies, and approachable imagery to communicate financial products securely and effectively.
          </p>
        </header>

        {/* Visual Grid Sequence: Device Mockup followed by Dense Masonry Grid */}
        <div className="flex flex-col gap-10">
          {/* 1. Mobile Device Mockup: NRI Banking Services */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide02.image}
                alt={slide02.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#003B70] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
                SLIDE // 02 · MOBILE DEVICE MOCKUP
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide02.image,
                    caption: `${slide02.title} — ${slide02.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MOCKUP ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#003B70] dark:text-[#4A90E2] font-bold uppercase">
                  {slide02.client} // NRI BANKING SERVICES
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide02.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide02.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  TRUST ARCHITECTURE
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  NRI COMPLIANCE
                </span>
              </div>
            </div>
          </div>

          {/* 2. Dense Masonry Grid: Volume of Products */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide03.image}
                alt={slide03.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#D84A38] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
                SLIDE // 03 · DENSE MASONRY CAMPAIGN GRID
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide03.image,
                    caption: `${slide03.title} — ${slide03.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MASONRY SPREAD ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#D84A38] dark:text-[#FF6B6B] font-bold uppercase">
                  {slide03.client} // COMPREHENSIVE PRODUCT SUITE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide03.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide03.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#D84A38]/10 text-[#D84A38] dark:text-[#FF6B6B] font-bold">
                  HIGH-VOLUME PORTFOLIO
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  CYBER AWARENESS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — CLIENT: THE CENTRAL PARK HOTEL & PARC ESTIQUE (Hospitality)
          ================================================== */}
      <section
        id="social-ch-03"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#B87333] dark:text-[#E5A96A] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#B87333]/10 dark:bg-[#B87333]/30">
              03 // 07
            </span>
            <span>—</span>
            <span>PREMIUM HOSPITALITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            THE CENTRAL PARK HOTEL & PARC ESTIQUE
          </h2>

          <p className="text-2xl sm:text-3xl font-serif italic text-[#B87333] dark:text-[#E5A96A]">
            "SELLING THE EXPERIENCE."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            Hospitality marketing relies on craving, atmosphere, and urgency. The creatives for The Central Park Hotel and Hotel Parc Estique utilized bold typography, rich food photography, and vibrant color palettes to drive event bookings, weekend brunches, and match-day screenings.
          </p>
        </header>

        {/* Visual Grid Sequence: 3 High-Impact Presentations */}
        <div className="flex flex-col gap-10">
          {/* 1. Central Park Hotel Mobile Mockup (Sunday Brunch & Biryani) */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide04.image}
                alt={slide04.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#B87333] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
                SLIDE // 04 · CENTRAL PARK HOTEL MOCKUP
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide04.image,
                    caption: `${slide04.title} — ${slide04.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MOCKUP ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#B87333] dark:text-[#E5A96A] font-bold uppercase">
                  {slide04.client} // SUNDAY BRUNCH & BIRYANI
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide04.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide04.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#B87333]/15 text-[#B87333] dark:text-[#E5A96A] font-bold">
                  WEEKEND DINING
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  CULINARY SENSORY
                </span>
              </div>
            </div>
          </div>

          {/* 2. Central Park Hotel Masonry Grid (Mango Coolers, Summer Delights) */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide05.image}
                alt={slide05.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#E67E22] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
                SLIDE // 05 · SEASONAL SUMMER MASONRY
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide05.image,
                    caption: `${slide05.title} — ${slide05.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MASONRY SPREAD ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#E67E22] font-bold uppercase">
                  {slide05.client} // SEASONAL FESTIVALS & COOLERS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide05.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide05.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#E67E22]/15 text-[#E67E22] font-bold">
                  MANGO FESTIVAL
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  ATMOSPHERIC URGENCY
                </span>
              </div>
            </div>
          </div>

          {/* 3. Hotel Parc Estique Mobile Mockup (IND vs PAK & Mother's Day) */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide06.image}
                alt={slide06.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#8E44AD] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
                SLIDE // 06 · PARC ESTIQUE EVENT MOCKUP
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide06.image,
                    caption: `${slide06.title} — ${slide06.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MOCKUP ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8E44AD] dark:text-[#BB86FC] font-bold uppercase">
                  {slide06.client} // IND VS PAK & MOTHER’S DAY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide06.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide06.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#8E44AD]/15 text-[#8E44AD] dark:text-[#BB86FC] font-bold">
                  HIGH-ENERGY SCREENINGS
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  EMOTIONAL OCCASIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — CLIENT: SMART BAZAAR (Retail)
          ================================================== */}
      <section
        id="social-ch-04"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#D32F2F] dark:text-[#EF5350] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#D32F2F]/10 dark:bg-[#D32F2F]/30">
              04 // 07
            </span>
            <span>—</span>
            <span>HYPERMARKET RETAIL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            SMART BAZAAR
          </h2>

          <p className="text-2xl sm:text-3xl font-serif italic text-[#D32F2F] dark:text-[#EF5350]">
            "RETAIL AT SCALE."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            Retail creatives require immediate visual impact. The Smart Bazaar assets were designed to be highly scroll-stopping, blending seasonal greetings with product promotions in a bright, energetic visual style.
          </p>
        </header>

        {/* Feature: Smart Bazaar Mobile Mockup */}
        <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
          <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
            <img
              src={slide07.image}
              alt={slide07.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#D32F2F] text-white px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-bold shadow-md">
              SLIDE // 07 · SMART BAZAAR MOCKUP
            </div>
            <button
              onClick={() =>
                setPreviewImage({
                  src: slide07.image,
                  caption: `${slide07.title} — ${slide07.description}`,
                })
              }
              className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              EXPAND MOCKUP ↗
            </button>
          </div>

          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#D32F2F] dark:text-[#EF5350] font-bold uppercase">
                {slide07.client} // VADA PAV, BEDDING EXPO & TEEJ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                {slide07.title}
              </h3>
              <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                {slide07.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
              <span className="px-2.5 py-1 rounded bg-[#D32F2F]/15 text-[#D32F2F] dark:text-[#EF5350] font-bold">
                SCROLL-STOPPING SPEED
              </span>
              <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                PROMOTIONS AT SCALE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — CLIENT: BANDISH STUDIOS (Agency / Culture)
          ================================================== */}
      <section
        id="social-ch-05"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#E6B800] dark:text-[#FFD54F] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#E6B800]/15 dark:bg-[#E6B800]/30 text-[#8C6D00] dark:text-[#FFD54F]">
              05 // 07
            </span>
            <span>—</span>
            <span>AGENCY & CULTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            BANDISH STUDIOS
          </h2>

          <p className="text-2xl sm:text-3xl font-serif italic text-[#8C6D00] dark:text-[#FFD54F]">
            "CULTURE & CRAFT."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            Internal agency branding requires a balance of professionalism and creative flair. The social media assets for Bandish Studios highlighted company culture, hiring campaigns, and involvement in the International Marathi Film Festival, using a bold yellow and dynamic graphic aesthetic.
          </p>
        </header>

        {/* Visual Grid Sequence: Mockup followed by Masonry Grid */}
        <div className="flex flex-col gap-10">
          {/* 1. Bandish Studios Mobile Mockup (Diwali & Film Festival) */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide08.image}
                alt={slide08.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#FFE600] text-black px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-black shadow-md">
                SLIDE // 08 · BANDISH AGENCY MOCKUP
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide08.image,
                    caption: `${slide08.title} — ${slide08.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MOCKUP ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8C6D00] dark:text-[#FFD54F] font-bold uppercase">
                  {slide08.client} // DIWALI & MARATHI FILM FESTIVAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide08.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide08.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#FFE600]/25 text-[#735A00] dark:text-[#FFD54F] font-black">
                  ICONIC YELLOW
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  FILM FESTIVAL
                </span>
              </div>
            </div>
          </div>

          {/* 2. Bandish Studios Masonry Grid (Hiring, Jamming, Getaways) */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg group">
            <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={slide09.image}
                alt={slide09.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-black text-[#FFE600] px-3 py-1 rounded-md font-mono text-[10px] tracking-widest font-black shadow-md border border-[#FFE600]/40">
                SLIDE // 09 · AGENCY LIFE & CULTURE MASONRY
              </div>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: slide09.image,
                    caption: `${slide09.title} — ${slide09.description}`,
                  })
                }
                className="absolute bottom-4 right-4 bg-white/95 text-black hover:bg-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                EXPAND MASONRY SPREAD ↗
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#8C6D00] dark:text-[#FFD54F] font-bold uppercase">
                  {slide09.client} // HIRING, JAMMING & RETREATS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white">
                  {slide09.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#AAA] max-w-3xl">
                  {slide09.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono shrink-0">
                <span className="px-2.5 py-1 rounded bg-black text-[#FFE600] font-black">
                  TALENT INBOUND
                </span>
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10">
                  STUDIO SPIRIT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          06 — LIVE CAMPAIGN ARCHIVE (The Grid)
          ================================================== */}
      <section
        id="social-ch-06"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-10 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#D84A38] dark:text-[#FF6B6B] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#D84A38]/10 dark:bg-[#D84A38]/20">
              06 // 07
            </span>
            <span>—</span>
            <span>LIVE CAMPAIGN ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            THE ARCHIVE
          </h2>

          <p className="text-2xl sm:text-3xl font-serif italic text-[#D84A38] dark:text-[#FF6B6B]">
            "ENGAGEMENT IN MOTION."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            A curated selection of live campaigns, reels, and high-performing posts across multiple brand channels. Explore authentic engagement data and click through directly to the live assets on Instagram.
          </p>
        </header>

        {/* Custom Data-Driven Grid with 19 Verified Campaign Assets */}
        <SocialMediaArchiveGrid
          onPreviewImage={(src, caption) => setPreviewImage({ src, caption })}
        />
      </section>

      {/* ==================================================
          07 — CLOSING / CREDIT
          ================================================== */}
      <section
        id="social-ch-07"
        className="py-16 md:py-24 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#151719] dark:text-white font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-black/10 dark:bg-white/15">
              07 // 07
            </span>
            <span>—</span>
            <span>PROJECT SYNTHESIS & CREDITS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151719] dark:text-white leading-none">
            BUILT FOR THE FEED.
          </h2>

          <p className="text-lg sm:text-2xl font-serif italic text-[#737476] dark:text-[#AAA] mt-1">
            "A year of creating thumb-stopping visuals, built on the principles of strong hierarchy, brand adaptability, and rapid execution."
          </p>
        </header>

        {/* Final Bandish Studios Slide */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 shadow-2xl bg-white dark:bg-[#121417] group">
          <img
            src={slide10.image}
            alt={slide10.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-[#FFE600] text-black px-2.5 py-1 rounded w-fit font-black shadow-md">
                CLOSING SLIDE // BANDISH STUDIOS
              </span>
              <p className="text-sm sm:text-base font-medium text-white/95 max-w-2xl drop-shadow">
                Thank you! For giving us the opportunity to work on this project.
              </p>
            </div>

            <button
              onClick={() =>
                setPreviewImage({
                  src: slide10.image,
                  caption: `${slide10.title} — ${slide10.description}`,
                })
              }
              className="px-4 py-2 rounded-lg bg-white/95 text-black hover:bg-white text-xs font-mono font-bold transition-all shadow-md self-start sm:self-auto cursor-pointer"
            >
              EXPAND VIEW ↗
            </button>
          </div>
        </div>

        {/* Dedicated Final Credit Box */}
        <div className="p-8 sm:p-12 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121417] flex flex-col gap-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
                OFFICIAL COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#151719] dark:text-white">
                DEVELOPED WITH BANDISH STUDIOS
              </h3>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#FFE600] text-black font-mono text-xs font-black tracking-wider w-fit">
              STUDIO PARTNERSHIP
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl font-light">
            Special recognition to the entire team at Bandish Studios for the seamless creative collaboration, dynamic brainstorms, and mutual commitment to elevating digital marketing into high-craft graphic design.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-mono">
            <div>
              <span className="text-[#888] block text-[10px] uppercase mb-0.5">
                DISCIPLINE
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                Social Media Design
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px] uppercase mb-0.5">
                TIMEFRAME
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                2024 — 2025
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px] uppercase mb-0.5">
                TOTAL SLIDES
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                10 Curated Presentations
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px] uppercase mb-0.5">
                LIVE ASSETS
              </span>
              <span className="font-bold text-[#D84A38] dark:text-[#FF6B6B]">
                20 Working Campaigns
              </span>
            </div>
          </div>
        </div>

        {/* Circular Next Project Navigation */}
        <div className="pt-12 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737476] dark:text-[#888]">
              EXPLORE NEXT PROJECT
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-2xl sm:text-4xl font-black text-[#151719] dark:text-white hover:text-[#D84A38] dark:hover:text-[#FF6B6B] transition-colors text-left flex items-center gap-3 cursor-pointer group"
            >
              <span>{nextProject.title}</span>
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('social-ch-01');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 font-mono text-xs uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#151719] dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-md cursor-pointer"
            >
              CLOSE CASE STUDY ✕
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          LIGHTBOX MODAL (Image Full Preview)
          ================================================== */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-7xl max-h-[92vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white font-mono text-sm uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>CLOSE</span>
              <span>✕</span>
            </button>

            <img
              src={previewImage.src}
              alt={previewImage.caption}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            <p className="text-xs sm:text-sm font-mono text-white/80 text-center max-w-3xl px-4 py-2 bg-black/60 rounded-lg border border-white/10">
              {previewImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
