import React from 'react';

interface CaseStudySectionProps {
  label: string;
  headline: string;
  paragraphs: string[];
  subheading?: string;
  subheadingBody?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  label,
  headline,
  paragraphs,
  subheading,
  subheadingBody,
  className = '',
  children,
}) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 flex flex-col gap-8 md:gap-12 ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-4xl">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#3D7FE2] dark:text-[#70A5F5] font-semibold">
          {label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0] leading-[1.12]">
          {headline}
        </h2>
        <div className="mt-2 flex flex-col gap-4 text-base sm:text-lg md:text-xl text-[#3A3A36] dark:text-[#CCCCCC] leading-relaxed max-w-3xl font-normal">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {subheading && (
          <div className="mt-4 pt-6 border-t border-[#111111]/10 dark:border-white/10 flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888] font-semibold">
              {subheading}
            </span>
            {subheadingBody && (
              <p className="text-sm sm:text-base text-[#555550] dark:text-[#AAA] leading-relaxed">
                {subheadingBody}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Optional Injected Visuals / Children */}
      {children && <div className="w-full mt-2">{children}</div>}
    </section>
  );
};
