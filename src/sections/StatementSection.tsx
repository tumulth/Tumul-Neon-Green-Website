import React, { useRef } from 'react';
import { VariableProximity } from '../components/VariableProximity';

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 md:py-44 px-6 md:px-16 max-w-[1440px] mx-auto text-center relative overflow-hidden select-none border-t border-b border-black/5 dark:border-white/10 bg-[#F7F7F2] dark:bg-[#0C0C0B] transition-colors duration-300">
      {/* 01. Eyebrow Greeting (Generous whitespace & editorial presence) */}
      <div className="font-serif italic text-4xl sm:text-6xl text-[#6A6A64] dark:text-[#A0A09B] mb-10 md:mb-14 select-none flex items-center justify-center">
        <span>Hallo!</span>
      </div>

      {/* 02. Central Typographic Statement with Variable Proximity Engine */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto flex flex-col items-center cursor-default"
      >
        {/* Flanking Skill Badges - Left (Positioned with generous margin to never crowd text) */}
        <div className="hidden xl:flex flex-col gap-5 absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-orange-500">⚡</span>
            <span>Brand Identity</span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] translate-x-4 backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-sky-500">💧</span>
            <span>Typography & Grids</span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-emerald-500">👁</span>
            <span>Visual Systems</span>
          </div>
        </div>

        {/* Flanking Skill Badges - Right */}
        <div className="hidden xl:flex flex-col gap-5 absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-amber-500">💡</span>
            <span>Corporate Guidelines</span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] -translate-x-4 backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-pink-500">🎯</span>
            <span>Art Direction</span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 border border-black/10 dark:border-white/15 shadow-sm text-xs font-semibold text-[#111] dark:text-[#F5F4F0] backdrop-blur-sm hover:border-[#111] dark:hover:border-[#C8FF00] transition-all">
            <span className="text-lime-600 dark:text-[#C8FF00]">🌿</span>
            <span>Websites</span>
          </div>
        </div>

        {/* Dynamic Variable Proximity Editorial Headline */}
        <div className="max-w-4xl text-center leading-[1.24] text-3xl sm:text-5xl md:text-6xl lg:text-[66px] tracking-tight text-[#151515] dark:text-[#F0F0EA]">
          <VariableProximity
            label="I’m Tumul Thakur, a designer helping businesses turn their ideas into "
            className="text-[#151515] dark:text-[#F0F0EA] hover:text-black dark:hover:text-white transition-colors"
            fromFontVariationSettings="'wght' 350, 'opsz' 14"
            toFontVariationSettings="'wght' 950, 'opsz' 40"
            containerRef={containerRef}
            radius={130}
            falloff="gaussian"
          />
          <strong className="font-normal">
            <VariableProximity
              label="brands people remember."
              className="text-[#111111] dark:text-white"
              fromFontVariationSettings="'wght' 800, 'opsz' 40"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={130}
              falloff="gaussian"
            />
          </strong>
        </div>

        <p className="mt-8 md:mt-10 max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-[#555] dark:text-[#B5B5AE]">
          From visual identities to websites, I create thoughtful design systems that give brands a distinct point of view.
        </p>

        {/* Balanced Pill Badges for Mobile & Tablet */}
        <div className="flex xl:hidden flex-wrap justify-center gap-2.5 mt-10 pt-6 border-t border-black/5 dark:border-white/10">
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181816] border border-black/10 dark:border-white/15 text-xs font-semibold text-[#111] dark:text-[#F5F4F0]">
            ⚡ Brand Identity
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181816] border border-black/10 dark:border-white/15 text-xs font-semibold text-[#111] dark:text-[#F5F4F0]">
            💧 Typography & Grids
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181816] border border-black/10 dark:border-white/15 text-xs font-semibold text-[#111] dark:text-[#F5F4F0]">
            💡 Corporate Guidelines
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181816] border border-black/10 dark:border-white/15 text-xs font-semibold text-[#111] dark:text-[#F5F4F0]">
            🌿 Websites
          </span>
        </div>
      </div>
    </section>
  );
};
