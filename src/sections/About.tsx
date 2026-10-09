import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-[#111111]/10 bg-[#F5F4F0]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A84] mb-3">
              05 / BIOGRAPHY & PROFILE
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-[#111111]">
              ABOUT TUMUL
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8A8A84] uppercase">
            PUNE, INDIA · VISUAL DESIGNER
          </span>
        </div>

        {/* Editorial Body: Asymmetrical Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Core Narrative (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111111] leading-snug">
              Designing with systematic logic, typographic rigor, and a clear point of view.
            </h3>

            <div className="flex flex-col gap-5 text-sm sm:text-base text-[#444440] leading-relaxed">
              <p>
                I am Tumul Thakur, a Visual Designer and Art Director based in Pune, India. Over the last five years, I have partnered with engineering consultancies, intermodal freight networks, and boutique hospitality flagships to build enduring visual identity systems.
              </p>
              <p>
                My practice focuses on typographic hierarchy, geometric logo construction, multi-chapter corporate brand manuals, and motion graphics. I believe that effective brand design is not superficial decoration; it is an operational standard that provides clarity and consistency across physical print, environmental spaces, and digital touchpoints.
              </p>
              <p>
                Whether formalizing 26-section brand guidelines for national freight fleets or drafting custom brass signage and ceramic tableware for dining concepts, I prioritize craft, restraint, and functional purpose.
              </p>
            </div>

            {/* Disciplines tags */}
            <div className="pt-4 border-t border-[#111111]/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] block mb-3">
                DISCIPLINARY FOCUS
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Brand Architecture',
                  'Visual Identity Systems',
                  'Editorial & Book Design',
                  'Packaging & Unboxing',
                  'Digital Art Direction',
                  'Type Selection & Hierarchy',
                  'Creative Strategy',
                  'Spatial & Environmental Signage'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-[#EAE8E2] text-[#111111] px-3 py-1 border border-[#111111]/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details, City Context & Studio Principles (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-white p-8 md:p-10 border border-[#111111]/15 shadow-sm">
            <div className="border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#8A8A84] uppercase tracking-wider block mb-1">
                LOCATION & TIMEZONE
              </span>
              <h4 className="text-xl font-bold uppercase text-[#111111]">
                Pune, Maharashtra, India
              </h4>
              <p className="text-xs font-mono text-[#8A8A84] mt-1">
                18°31'13.4" N, 73°51'24.1" E · UTC+05:30 (IST)
              </p>
            </div>

            <div className="flex flex-col gap-4 text-xs">
              <div>
                <span className="font-mono text-[#8A8A84] uppercase tracking-wider block mb-1">
                  COLLABORATION PHILOSOPHY
                </span>
                <p className="text-[#444] leading-relaxed">
                  Direct partnership with decision makers. No bloated account management tiers, no junior pass-offs, and zero unnecessary buzzwords.
                </p>
              </div>

              <div>
                <span className="font-mono text-[#8A8A84] uppercase tracking-wider block mb-1">
                  AVAILABILITY
                </span>
                <p className="text-[#111111] font-semibold">
                  Select identity systems and advisory commissions for Q2 / Q3 2026.
                </p>
              </div>

              <div>
                <span className="font-mono text-[#8A8A84] uppercase tracking-wider block mb-1">
                  COMMUNICATION
                </span>
                <p className="text-[#444]">
                  Async-first, Figma, Slack, Notion, and scheduled video sessions.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8A8A84]">STATUS</span>
              <span className="text-[#111111] font-bold bg-[#C8FF00] px-2 py-0.5">
                ● COMMISSIONS OPEN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
