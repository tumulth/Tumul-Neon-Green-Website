import React from 'react';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateWork?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateWork,
  onOpenContact,
}) => {
  return (
    <footer className="pt-16 pb-6 bg-[#F7F7F2] dark:bg-[#0C0C0B] text-[#111111] dark:text-[#F5F4F0] overflow-hidden border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Navigation Links & Copyright Row (Directly from Reference Photo) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 border-b border-black/10 dark:border-white/10 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
            <button
              onClick={() => {
                onNavigateHome?.();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase text-[#111] dark:text-[#F5F4F0]"
            >
              Home
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('about');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase text-[#111] dark:text-[#F5F4F0]"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigateWork?.();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase text-[#111] dark:text-[#F5F4F0]"
            >
              Work (7)
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase text-[#111] dark:text-[#F5F4F0]"
            >
              Services
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase text-[#111] dark:text-[#F5F4F0]"
            >
              Contact
            </button>
          </div>

          <div className="text-[#8A8A84] dark:text-[#777]">
            © 2026 Tumul Thakur. All rights reserved.
          </div>
        </div>

        {/* Full-Width Italic Serif Signature */}
        <div className="pt-8 pb-4 text-center overflow-hidden select-none px-4">
          <div className="text-[10vw] sm:text-[11vw] md:text-[11.5vw] font-serif italic font-normal text-[#111111] dark:text-[#F5F4F0] leading-[0.9] tracking-tight whitespace-nowrap hover:opacity-90 transition-opacity">
            Tumul Thakur
          </div>
        </div>
      </div>
    </footer>
  );
};
