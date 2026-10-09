import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/projects';

export const Experience: React.FC = () => {
  const [hoveredExp, setHoveredExp] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-24 md:py-36 border-t border-[#111111]/10 bg-[#F5F4F0]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A84] mb-3">
              04 / TRAJECTORY & LEADERSHIP
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-[#111111]">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-sm md:text-base font-serif italic text-[#8A8A84] max-w-sm">
            5+ years leading visual systems, identity architectures, and digital design across studios, tech platforms, and independent ventures.
          </p>
        </div>

        {/* Editorial Timeline Rows */}
        <div className="flex flex-col pt-4">
          {EXPERIENCES.map((item, index) => {
            const isHovered = hoveredExp?.company === item.company;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredExp(item)}
                onMouseLeave={() => setHoveredExp(null)}
                className={`py-8 md:py-12 border-b border-[#111111]/15 transition-all duration-300 ${
                  isHovered ? 'bg-[#EAE8E2]/60 -mx-4 px-4' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Column 1: Period & Location (Span 3) */}
                  <div className="lg:col-span-3 flex flex-col gap-1">
                    <span className="font-mono text-xs font-bold tracking-wider text-[#111111]">
                      {item.period}
                    </span>
                    <span className="font-mono text-[11px] text-[#8A8A84]">
                      {item.location} · {item.type}
                    </span>
                  </div>

                  {/* Column 2: Studio & Role (Span 5) */}
                  <div className="lg:col-span-5 flex flex-col gap-1">
                    <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-[#111111]">
                      {item.company}
                    </h3>
                    <div className="text-base font-serif italic text-[#8A8A84]">
                      {item.role}
                    </div>
                  </div>

                  {/* Column 3: Narrative & Key Impact (Span 4) */}
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    <p className="text-xs sm:text-sm text-[#444440] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-col gap-1.5 pt-2 border-t border-[#111111]/10">
                      {item.keyWork.map((kw, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-[#666660]">
                          <span className="text-[#111111] mt-0.5">·</span>
                          <span>{kw}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Affiliation note */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#8A8A84]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span>CONTINUOUS PRACTICE SINCE 2021</span>
          </div>
          <div>BASED IN PUNE, INDIA · AVAILABLE REMOTELY GLOBALLY</div>
        </div>
      </div>
    </section>
  );
};
