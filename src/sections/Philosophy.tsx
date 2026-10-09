import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-28 md:py-40 border-t border-[#111111]/10 bg-[#111111] text-[#F5F4F0] relative overflow-hidden">
      {/* Subtle background hairline grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#8A8A84] mb-8">
          <span>03 / DESIGN PHILOSOPHY</span>
          <span>·</span>
          <span className="text-[#C8FF00]">MANIFESTO</span>
        </div>

        {/* Large Typographic Statement */}
        <div className="flex flex-col gap-4 max-w-5xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight text-[#F5F4F0] leading-[0.98] select-none text-balance">
            I DON'T JUST MAKE THINGS LOOK GOOD.
          </h2>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#C8FF00] leading-[1] tracking-normal text-balance">
            I build visual languages that help ideas communicate.
          </div>
        </div>

        {/* 3 Core Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 pt-12 border-t border-white/15">
          {/* Tenet 01 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#C8FF00] font-bold">
              TENET 01 / SUBSTANCE BEFORE DECORATION
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
              Form as an Argument
            </h3>
            <p className="text-sm text-[#A0A09C] leading-relaxed font-sans">
              Every curve, typeface choice, and millimeter of negative space must defend its reason for being. Decorative fluff is an apology for lack of conviction.
            </p>
          </div>

          {/* Tenet 02 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#C8FF00] font-bold">
              TENET 02 / SYSTEMIC DURABILITY
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
              Cohesion Across Scale
            </h3>
            <p className="text-sm text-[#A0A09C] leading-relaxed font-sans">
              A great identity isn't just a static SVG logo. It is a living, resilient mathematical system that functions on a 40-foot freight trailer as effortlessly as in a 16px digital favicon.
            </p>
          </div>

          {/* Tenet 03 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#C8FF00] font-bold">
              TENET 03 / DISTINCTIVE FRICTION
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
              Memorable In An Age of Clones
            </h3>
            <p className="text-sm text-[#A0A09C] leading-relaxed font-sans">
              When category conventions homogenize into cookie-cutter templates, intentional asymmetry and unapologetic typography create the vital friction that arrests human memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
