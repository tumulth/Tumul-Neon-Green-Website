import React from 'react';
import { SpotlightCard } from '../components/SpotlightCard';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
      <SpotlightCard
        className="w-full rounded-[32px] md:rounded-[44px] !bg-[#121212] !border-[#262626] py-20 md:py-28 px-6 text-center shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center relative group"
        spotlightColor="rgba(200, 255, 0, 0.22)"
      >
        {/* Subtle Ambient Metadata Badges */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-[#C8FF00] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>COLLABORATION // 2026</span>
        </div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-white/40 tracking-wider hidden sm:block">
          PUNE, IN [18.52° N]
        </div>

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-4">
          <span className="font-serif italic text-base sm:text-lg text-[#C8FF00]">
            / Start a Conversation
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#A3A39E] max-w-lg mx-auto font-sans leading-relaxed">
            Available for brand identity commissions, corporate design guidelines, and campaign art direction. Let's discuss your scope, timeline, and deliverables.
          </p>

          <button
            onClick={onOpenContact}
            className="mt-6 px-8 py-4 rounded-full bg-[#C8FF00] text-[#111111] text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3 group/btn"
            data-cursor="arrow"
          >
            <span>GET IN TOUCH</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </SpotlightCard>
    </section>
  );
};

