import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit & Positioning',
      tag: 'Category & Archetypes',
      description:
        'Deconstructing sector clichés, auditing competitors, and establishing typographic rules, mathematical grids, and aesthetic criteria before sketching vectors.',
    },
    {
      number: '02',
      title: 'Draft & Form System',
      tag: 'Geometric Craft',
      description:
        'Drafting geometric logomarks, proportional wordmarks, and balanced color palettes stress-tested across print collateral, outdoor signage, and mobile interfaces.',
    },
    {
      number: '03',
      title: 'Production & Standards',
      tag: 'Guidelines & Assets',
      description:
        'Publishing multi-chapter brand guidelines, print-ready vector packages, motion presets, and vendor fabrication specifications for long-term consistency.',
    },
  ];

  const reviews = [
    {
      number: '01',
      quote:
        'Really liked how the entire brand identity came together. The work felt clean, professional and aligned with what we wanted to communicate.',
      author: 'BIMACME',
      role: 'Brand Identity',
      tag: '01 · Brand Identity',
      initials: 'BM',
      bg: '#0C1D49',
      accent: '#C8FF00',
    },
    {
      number: '02',
      quote:
        'Tumul understood the vibe we were going for and brought some really good ideas to the table. The creatives have been great to work with.',
      author: 'Butta Burger',
      role: 'Creative Direction',
      tag: '02 · Creative Direction',
      initials: 'BB',
      bg: '#2A1810',
      accent: '#E5A93C',
    },
    {
      number: '03',
      quote:
        'Loved the creativity and attention to detail. The designs feel on brand and give us a much stronger visual presence.',
      author: 'Burgyard',
      role: 'Visual Presence',
      tag: '03 · Visual Presence',
      initials: 'BY',
      bg: '#1A2A20',
      accent: '#52B788',
    },
    {
      number: '04',
      quote:
        'Great experience working together. Tumul understood the brief well and translated our ideas into designs that felt right for the brand.',
      author: 'Buyers Match',
      role: 'Brand Design',
      tag: '04 · Brand Design',
      initials: 'BM',
      bg: '#162238',
      accent: '#4EA8DE',
    },
    {
      number: '05',
      quote:
        'Really enjoyed working with Tumul. He brought a fresh perspective to the project and was great at translating ideas into visuals.',
      author: 'Masala Chai with Rahul Mahajan',
      role: 'Visual Concepts & Media',
      tag: '05 · Visual Concepts',
      initials: 'MC',
      bg: '#331A12',
      accent: '#F38D68',
    },
    {
      number: '06',
      quote:
        'Working with Tumul was smooth and easy. He understood the vision and put together work that felt thoughtful and well executed.',
      author: 'Nikhil Kapahi',
      role: 'Client Endorsement',
      tag: '06 · Endorsement',
      initials: 'NK',
      bg: '#1E1B2E',
      accent: '#C8FF00',
    },
  ];

  // Duplicate reviews for seamless continuous infinite marquee
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 md:py-36 border-t border-black/10 dark:border-white/10 bg-[#F9F9F5] dark:bg-[#0E0E0D] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="font-serif italic text-base sm:text-lg text-[#8A8A84] dark:text-[#A0A09B] block mb-2">
            / Methodology & Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0] uppercase font-sans">
            How I Build Brands
          </h2>
          <p className="mt-3 text-sm text-[#666] dark:text-[#AAA] font-sans">
            A disciplined, iterative design process connecting strategic positioning with production-grade craft.
          </p>
        </div>

        {/* 3 Process Cards with Distinctive Hover POP & Spring Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Subtle curved connector line indicator */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-[#C8FF00] via-[#A8EB12] to-[#C8FF00] -z-0 opacity-80" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-white dark:bg-[#181816] p-8 md:p-10 rounded-3xl border border-black/10 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(200,255,0,0.25)] hover:border-[#A8EB12] dark:hover:border-[#C8FF00] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-serif italic text-[#111111] dark:text-[#F5F4F0] group-hover:text-[#84CC16] dark:group-hover:text-[#C8FF00] group-hover:scale-110 transition-transform origin-left">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A84] dark:text-[#AAA] bg-[#F5F4F0] dark:bg-[#222220] px-3 py-1 rounded-full border border-black/5 dark:border-white/10 group-hover:bg-[#C8FF00]/30 transition-colors">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#111111] dark:text-[#F5F4F0] uppercase font-sans mb-3 group-hover:translate-x-1 transition-transform">
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#BBB] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#111111]/5 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8A8A84] dark:text-[#888]">
                <span>PHASE 0{idx + 1}</span>
                <span className="text-[#111111] dark:text-[#F5F4F0] font-semibold group-hover:text-[#C8FF00] transition-colors">
                  TUMUL THAKUR →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Sliding Client Reviews Marquee */}
      <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#777] block mb-1">
              CLIENT TESTIMONIALS & ENDORSEMENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#111] dark:text-[#F5F4F0]">
              Trusted by founders across three continents
            </h3>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-[#8A8A84] dark:text-[#777]">
            HOVER TO PAUSE SLIDE ↻
          </span>
        </div>

        {/* Marquee Track Container with Gradient Fade on Edges */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {marqueeReviews.map((rev, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[420px] bg-white dark:bg-[#181816] p-7 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-2 hover:border-[#C8FF00] transition-all duration-300 flex flex-col justify-between shrink-0 cursor-default group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif text-[#C8FF00] leading-none group-hover:scale-125 transition-transform origin-left">
                      “
                    </span>
                    <span className="font-mono text-[10px] text-[#8A8A84] dark:text-[#AAA] uppercase bg-[#F5F4F0] dark:bg-[#222220] px-2.5 py-0.5 rounded-full border border-black/5 dark:border-white/10">
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#222] dark:text-[#E5E5DF] font-serif italic leading-relaxed">
                    {rev.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-black/5 dark:border-white/10">
                  <div
                    className="w-10 h-10 rounded-full font-mono font-bold text-xs flex items-center justify-center text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: rev.bg }}
                  >
                    <span style={{ color: rev.accent }}>{rev.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#111111] dark:text-[#F5F4F0]">
                      {rev.author}
                    </div>
                    <div className="text-xs text-[#8A8A84] dark:text-[#888] font-mono">
                      {rev.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
