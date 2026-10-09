import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/projects';

interface ServicesProps {
  onSelectProjectByTitle: (title: string) => void;
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectProjectByTitle, onOpenContact }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(SERVICES[0]);

  return (
    <section id="services" className="py-24 md:py-36 border-t border-[#111111]/10 dark:border-white/10 bg-[#F5F4F0] dark:bg-[#0C0C0B] relative transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 dark:border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A84] dark:text-[#888] mb-3">
              02 / CAPABILITIES & DISCIPLINES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0]">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm md:text-base font-serif italic text-[#8A8A84] dark:text-[#999] max-w-sm">
            Hands-on visual identity systems, corporate brand manuals, and motion design tailored for founders, infrastructure leaders, and creative studios.
          </p>
        </div>

        {/* Interactive Editorial Service Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          {/* Left Column: Interactive Service List (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            {SERVICES.map((service) => {
              const isActive = activeService?.number === service.number;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group py-6 md:py-8 border-b border-[#111111]/15 dark:border-white/10 cursor-pointer transition-all duration-200 flex flex-col justify-center ${
                    isActive
                      ? 'bg-[#EAE8E2]/70 dark:bg-[#181816] -mx-4 px-4'
                      : 'hover:bg-[#EAE8E2]/30 dark:hover:bg-[#141413]/50'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-[#8A8A84] dark:text-[#777]">
                        {service.number}
                      </span>
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight uppercase transition-all duration-200 ${
                          isActive
                            ? 'text-[#111111] dark:text-[#F5F4F0] translate-x-2'
                            : 'text-[#111111]/70 dark:text-[#F5F4F0]/60 group-hover:text-[#111111] dark:group-hover:text-white group-hover:translate-x-1'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      {isActive && (
                        <span className="hidden sm:inline font-mono text-[11px] text-[#111111] uppercase tracking-wider bg-[#C8FF00] px-2 py-0.5 font-semibold">
                          ACTIVE
                        </span>
                      )}
                      <span
                        className={`w-8 h-8 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center text-xs transition-transform duration-200 ${
                          isActive
                            ? 'rotate-90 bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111]'
                            : 'group-hover:rotate-45 text-[#111] dark:text-white'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Mobile Expanded Preview */}
                  {isActive && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-[#111111]/10 dark:border-white/10 flex flex-col gap-3 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-[#444] dark:text-[#BBB] font-sans">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.capabilities.map((cap, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-white dark:bg-[#222] px-2 py-0.5 border border-black/10 dark:border-white/10 text-[#111] dark:text-[#F5F4F0]"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Preview Card (Span 5) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            {activeService && (
              <div className="p-8 bg-white dark:bg-[#181816] border border-[#111111]/15 dark:border-white/10 shadow-sm flex flex-col gap-6 animate-in fade-in duration-200">
                <div className="flex justify-between items-start border-b border-[#111111]/10 dark:border-white/10 pb-4">
                  <div className="font-mono text-xs text-[#8A8A84] dark:text-[#777]">
                    CAPABILITY SPEC // {activeService.number}
                  </div>
                  <div className="font-mono text-xs font-bold text-[#111111] dark:text-[#F5F4F0]">
                    {activeService.title}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-serif italic text-[#111111] dark:text-[#F5F4F0] leading-snug">
                    "{activeService.tagline}"
                  </h4>
                  <p className="mt-3 text-sm text-[#555550] dark:text-[#A0A09B] leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888] block mb-3">
                    CORE DELIVERABLES
                  </span>
                  <div className="flex flex-col gap-2">
                    {activeService.capabilities.map((cap, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-[#111111]/5 dark:border-white/5"
                      >
                        <span className="text-[#111111] dark:text-[#E0E0DB]">{cap}</span>
                        <span className="text-[#8A8A84] dark:text-[#777]">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button
                    onClick={() => onSelectProjectByTitle(activeService.associatedProject)}
                    className="w-full py-3 bg-[#EAE8E2] dark:bg-[#222220] hover:bg-[#111111] dark:hover:bg-[#C8FF00] hover:text-white dark:hover:text-[#111111] text-[#111] dark:text-[#F5F4F0] transition-colors text-xs font-mono font-bold uppercase tracking-wider text-center"
                    data-cursor="arrow"
                  >
                    SEE IN ACTION: {activeService.associatedProject.toUpperCase()} →
                  </button>
                  <button
                    onClick={onOpenContact}
                    className="text-center text-xs font-mono text-[#8A8A84] dark:text-[#888] hover:text-[#111111] dark:hover:text-[#C8FF00] underline transition-colors"
                  >
                    INQUIRE ABOUT THIS CAPABILITY
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
