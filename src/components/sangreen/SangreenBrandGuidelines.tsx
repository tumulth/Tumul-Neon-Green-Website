import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { SANGREEN_SECTIONS, SangreenSection } from './sangreenData';

interface SangreenBrandGuidelinesProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const SangreenBrandGuidelines: React.FC<SangreenBrandGuidelinesProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const categories = [
    { id: 'ALL', label: 'ALL CHAPTERS (26)' },
    { id: 'FOUNDATION', label: '01–03 FOUNDATION' },
    { id: 'IDENTITY', label: '04–09 LOGO' },
    { id: 'SYSTEM', label: '10–11 SYSTEM' },
    { id: 'APPLICATIONS', label: '12–18 APPLICATIONS' },
    { id: 'MERCHANDISE', label: '19–23 MERCHANDISE' },
    { id: 'GOVERNANCE', label: '24–26 GOVERNANCE' },
  ];

  const filteredSections =
    activeCategory === 'ALL'
      ? SANGREEN_SECTIONS
      : SANGREEN_SECTIONS.filter((s) => s.category === activeCategory);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`sangreen-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full flex flex-col select-text font-sans bg-[#FBFBFA] dark:bg-[#0E0F12] text-[#111111] dark:text-[#F0F2F5] transition-colors duration-300">
      {/* ==================================================
          EDITORIAL COVER HEADER
          ================================================== */}
      <div className="pb-10 border-b border-[#111111]/10 dark:border-white/10 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#274482] dark:text-[#6490E8] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#459652]" />
            <span>CORPORATE BRAND GUIDELINES // SYSTEM 2025</span>
          </div>
          <div className="font-mono text-xs text-[#8A8A84] dark:text-[#888]">
            SPECIFICATION DOCUMENT · 26 SECTIONS
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#274482] dark:text-[#FFFFFF] leading-none">
            SANGREEN
            <span className="block text-[#459652] font-medium tracking-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
              LOGISTICS
            </span>
          </h1>

          <p className="mt-2 text-lg sm:text-2xl md:text-3xl font-serif italic text-[#3A3D42] dark:text-[#C5CCD8] max-w-3xl leading-relaxed">
            "A 26-chapter brand governance manual engineered for intermodal freight scale and highway visibility."
          </p>
        </div>

        {/* Corporate Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#111111]/10 dark:border-white/10 text-xs">
          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1">
              CLIENT
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              Sangreen Logistics Pvt. Ltd.
            </span>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1">
              HQ LOCATION
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              Tathwade, Pune / Global Intermodal
            </span>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1">
              PRIMARY PALETTE
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#274482] border border-black/10 inline-block" title="Dusk Blue #274482" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#459652] border border-black/10 inline-block" title="Light Forest Green #459652" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#FFFFFF] border border-black/20 inline-block" title="White #FFFFFF" />
              <span className="font-mono text-[11px] text-[#555] dark:text-[#AAA]">#274482 · #459652</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1">
              PRIMARY TYPEFACE
            </span>
            <span className="font-bold text-[#111111] dark:text-[#FFFFFF]">
              Rubik Sans-Serif
            </span>
          </div>
        </div>

        {/* Chapter Category Filter Bar */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#274482] text-white border-[#274482] dark:bg-[#459652] dark:border-[#459652] font-bold shadow-sm'
                  : 'bg-white/80 dark:bg-[#18191E] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-[#274482] dark:hover:border-[#459652]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==================================================
          26 EDITORIAL SPECIFICATION CHAPTERS
          ================================================== */}
      <div className="flex flex-col divide-y divide-[#111111]/10 dark:divide-white/10">
        {filteredSections.map((section) => (
          <article
            key={section.id}
            id={`sangreen-sec-${section.id}`}
            className="py-16 md:py-24 flex flex-col gap-10 scroll-mt-20"
          >
            {/* Chapter Header */}
            <header className="flex flex-col gap-3 max-w-4xl">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#274482] dark:text-[#6490E8] font-bold uppercase">
                <span className="px-2 py-0.5 rounded bg-[#274482]/10 dark:bg-[#274482]/30 text-[#274482] dark:text-[#8BB1FF]">
                  {section.number} // 26
                </span>
                <span>—</span>
                <span>{section.title}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-tight font-sans">
                {section.heading}
              </h2>

              <div className="flex flex-col gap-2.5 text-base sm:text-lg text-[#3A3D42] dark:text-[#CCD2DC] leading-relaxed max-w-3xl mt-1">
                {section.copy.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </header>

            {/* Custom Interactive Module for Specific Sections */}
            {section.id === 'colour-palette' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white dark:bg-[#15161C] border border-[#111111]/10 dark:border-white/10 rounded-xl shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="w-full h-20 rounded bg-[#274482] border border-black/10 flex items-end p-2 text-white font-mono text-[10px] font-bold">
                    #274482
                  </div>
                  <span className="font-bold text-xs text-[#111111] dark:text-white">Dusk Blue</span>
                  <span className="font-mono text-[10px] text-[#666] dark:text-[#888]">CMYK: 100/84/18/4 · RGB: 39/68/130</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full h-20 rounded bg-[#459652] border border-black/10 flex items-end p-2 text-white font-mono text-[10px] font-bold">
                    #459652
                  </div>
                  <span className="font-bold text-xs text-[#111111] dark:text-white">Forest Green</span>
                  <span className="font-mono text-[10px] text-[#666] dark:text-[#888]">CMYK: 85/15/99/2 · RGB: 69/150/82</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full h-20 rounded bg-[#000000] border border-black/10 flex items-end p-2 text-white font-mono text-[10px] font-bold">
                    #000000
                  </div>
                  <span className="font-bold text-xs text-[#111111] dark:text-white">Dark Neutral</span>
                  <span className="font-mono text-[10px] text-[#666] dark:text-[#888]">CMYK: 75/68/67/90 · RGB: 0/0/0</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-full h-20 rounded bg-[#FFFFFF] border border-black/20 flex items-end p-2 text-black font-mono text-[10px] font-bold">
                    #FFFFFF
                  </div>
                  <span className="font-bold text-xs text-[#111111] dark:text-white">Pure White</span>
                  <span className="font-mono text-[10px] text-[#666] dark:text-[#888]">CMYK: 0/0/0/0 · RGB: 255/255/255</span>
                </div>
              </div>
            )}

            {section.id === 'typography' && (
              <div className="p-6 bg-white dark:bg-[#15161C] border border-[#111111]/10 dark:border-white/10 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="flex justify-between items-center border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase text-[#274482] dark:text-[#6490E8] font-bold tracking-wider">
                    SPECIFICATION // RUBIK SANS-SERIF
                  </span>
                  <span className="font-mono text-xs text-[#777]">GOOGLE FONTS OPEN LICENSE</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-[#888] block">HEADINGS</span>
                    <span className="font-bold text-sm text-[#111111] dark:text-white">Rubik Bold & Black</span>
                    <span className="font-mono text-[10px] text-[#666]">32pt / 28pt</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#888] block">SUBHEADINGS</span>
                    <span className="font-medium text-sm text-[#111111] dark:text-white">Rubik Medium</span>
                    <span className="font-mono text-[10px] text-[#666]">24pt / 20pt</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#888] block">BODY COPY</span>
                    <span className="font-normal text-sm text-[#111111] dark:text-white">Rubik Regular</span>
                    <span className="font-mono text-[10px] text-[#666]">18pt / 16pt</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#888] block">METADATA & CAPTIONS</span>
                    <span className="font-light text-sm text-[#111111] dark:text-white">Rubik Light</span>
                    <span className="font-mono text-[10px] text-[#666]">10pt / 8pt</span>
                  </div>
                </div>
              </div>
            )}

            {/* Curated Images Grid */}
            <div className="w-full flex flex-col gap-8">
              {section.images.length === 1 ? (
                /* Full-bleed or large isolated hero image */
                <figure className="flex flex-col gap-3 group">
                  <div className="relative w-full overflow-hidden rounded-xl bg-white dark:bg-[#14151A] border border-[#111111]/10 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <img
                      src={section.images[0].src}
                      alt={section.images[0].alt}
                      loading="lazy"
                      className="w-full h-auto object-contain max-h-[640px] mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    />
                  </div>
                  {section.images[0].caption && (
                    <figcaption className="flex items-center gap-2 font-mono text-[11px] text-[#666] dark:text-[#999] tracking-wider uppercase px-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#274482] dark:bg-[#459652]" />
                      <span>{section.images[0].caption}</span>
                    </figcaption>
                  )}
                </figure>
              ) : (
                /* 2 or 3 Column Symmetrical Editorial Spread */
                <div className={`grid grid-cols-1 ${
                  section.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
                } gap-6 md:gap-8`}>
                  {section.images.map((img, imgIdx) => (
                    <figure key={imgIdx} className="flex flex-col gap-3 group">
                      <div className="relative w-full overflow-hidden rounded-xl bg-white dark:bg-[#14151A] border border-[#111111]/10 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto object-contain max-h-[500px] mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="flex items-center gap-2 font-mono text-[11px] text-[#666] dark:text-[#999] tracking-wider uppercase px-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#274482] dark:bg-[#459652]" />
                          <span>{img.caption}</span>
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ==================================================
          CLOSING STATEMENT & ROSTER FOOTER
          ================================================== */}
      <footer className="pt-16 pb-12 border-t border-[#111111]/10 dark:border-white/10 flex flex-col gap-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#274482] text-white flex flex-col gap-4 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#459652] font-bold bg-white/10 px-3 py-1 rounded w-fit">
            SANGREEN LOGISTICS // SUMMARY
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight leading-tight">
            MOVEMENT, MADE CLEAR.
          </h3>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            A comprehensive visual identity standard ensuring structural clarity, institutional trust, and operational precision across all domestic and international freight touchpoints.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6">
          <div>
            <span className="font-mono text-xs text-[#8A8A84] dark:text-[#777] uppercase tracking-widest block mb-1">
              NEXT CASE STUDY
            </span>
            <span className="text-xl sm:text-2xl font-bold uppercase text-[#111111] dark:text-[#FFFFFF] font-sans">
              {nextProject.number} — {nextProject.title}
            </span>
          </div>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#274482] text-white hover:bg-[#459652] font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-lg shadow-md"
            data-cursor="arrow"
          >
            NEXT PROJECT →
          </button>
        </div>
      </footer>
    </div>
  );
};
