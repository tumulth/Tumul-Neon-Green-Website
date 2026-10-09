import React, { useState } from 'react';

interface ContactProps {
  onOpenDrawer: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenDrawer }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('tumul41@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-44 border-t border-[#111111]/10 bg-[#F5F4F0] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#8A8A84] mb-8">
          <span>06 / INITIATE CONTACT</span>
          <span>·</span>
          <span>NEW COMMISSIONS</span>
        </div>

        {/* Huge Headlines */}
        <div className="flex flex-col gap-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black uppercase tracking-[-0.03em] text-[#111111] leading-[0.9] select-none text-balance">
            HAVE A PROJECT IN MIND?
          </h2>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#111111] leading-[0.98] tracking-tight text-balance">
            Let's make something distinctive.
          </div>
        </div>

        {/* Contact Action Bar */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-[#111111]/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Direct Email (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84]">
              DIRECT CORRESPONDENCE
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:tumul41@gmail.com?subject=Project%20Inquiry%20via%20Portfolio"
                className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-[#111111] hover:text-[#8A8A84] transition-colors tracking-tight underline decoration-2 underline-offset-8"
                data-cursor="arrow"
              >
                tumul41@gmail.com
              </a>

              <button
                onClick={handleCopy}
                className="px-3 py-1.5 text-xs font-mono border border-[#111111] bg-white hover:bg-[#111111] hover:text-[#C8FF00] transition-colors"
                data-cursor="arrow"
                title="Copy email to clipboard"
              >
                {copied ? 'COPIED TO CLIPBOARD ✓' : 'COPY'}
              </button>
            </div>
            <p className="text-xs font-mono text-[#8A8A84] mt-2">
              Replies usually within 24 hours · Available across all global timezones
            </p>
          </div>

          {/* Large CTA & Location (Span 5) */}
          <div className="lg:col-span-5 flex flex-col sm:items-end gap-6">
            <button
              onClick={onOpenDrawer}
              className="w-full sm:w-auto px-8 py-5 bg-[#111111] text-[#F5F4F0] text-sm md:text-base font-mono font-bold uppercase tracking-widest hover:bg-[#C8FF00] hover:text-[#111111] transition-colors duration-200 border border-[#111111] shadow-lg group flex items-center justify-center gap-3"
              data-cursor="arrow"
            >
              <span>START A CONVERSATION</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <div className="text-xs font-mono text-right text-[#8A8A84] flex flex-col sm:items-end gap-1">
              <span className="text-[#111111] font-semibold">PUNE, MAHARASHTRA, INDIA</span>
              <span>18.5204° N, 73.8567° E</span>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="mt-16 pt-8 border-t border-[#111111]/10 flex flex-wrap justify-between items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#111111]">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A8A84] transition-colors flex items-center gap-1.5"
              data-cursor="arrow"
            >
              <span>LINKEDIN</span>
              <span className="text-[10px]">↗</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A8A84] transition-colors flex items-center gap-1.5"
              data-cursor="arrow"
            >
              <span>INSTAGRAM</span>
              <span className="text-[10px]">↗</span>
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A8A84] transition-colors flex items-center gap-1.5"
              data-cursor="arrow"
            >
              <span>BEHANCE</span>
              <span className="text-[10px]">↗</span>
            </a>

            <a
              href="https://readcv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A8A84] transition-colors flex items-center gap-1.5"
              data-cursor="arrow"
            >
              <span>READ.CV</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          <div className="text-[#8A8A84]">
            © 2026 TUMUL THAKUR · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
};
