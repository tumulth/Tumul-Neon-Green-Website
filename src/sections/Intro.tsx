import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="py-24 md:py-36 border-t border-[#111111]/10 bg-[#F5F4F0] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Number & Label */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs text-[#8A8A84] uppercase tracking-widest">
              00 / POSITIONING
            </span>
            <span className="text-sm font-semibold tracking-tight uppercase text-[#111111]">
              Creative Direction
            </span>
          </div>

          {/* Right Column: Large Editorial Statement & Supporting Context */}
          <div className="lg:col-span-9 flex flex-col gap-10 md:gap-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-[#111111] leading-[1.15] text-balance">
              I work across{' '}
              <span className="font-serif italic font-normal text-[#111111]">branding</span>,{' '}
              digital design, visual systems and communication — turning ideas into identities{' '}
              <span className="underline decoration-1 underline-offset-8 decoration-[#111111]/30 hover:decoration-[#111111] transition-all">
                people remember
              </span>
              .
            </h2>

            {/* Asymmetrical 2-Column Note with Editorial Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-[#111111]/10 text-sm sm:text-base text-[#4A4A45] leading-relaxed">
              <div>
                <p>
                  Based in Pune, India, I collaborate with forward-thinking founders, independent cultural ventures, and ambitious enterprises worldwide. My focus is not superficial aesthetics, but deep systematic coherence that empowers brands to command attention.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <p>
                  From tactile physical packaging and monolithic spatial signage to dynamic digital micro-interactions, every touchpoint is treated as an intentional piece of editorial art direction.
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A84] pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  <span>PUNE BASED · GLOBAL PRACTICE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
