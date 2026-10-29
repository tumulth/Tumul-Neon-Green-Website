import React from 'react';
import { FAQS } from '../data/site';

// Plain answers to what people ask before hiring a designer. Also published as FAQPage structured data.
export const FaqSection: React.FC = () => (
  <section
    id="questions"
    className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-300"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-4 lg:sticky lg:top-28">
        <span className="font-serif italic text-base sm:text-lg text-[#8A8A84] dark:text-[#A0A09B] block mb-2">
          / Questions
        </span>
        <h2 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0]">
          Before you hire me
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#555] dark:text-[#BBB] max-w-sm">
          What clients and recruiters in Pune and Mumbai usually ask first.
        </p>
      </div>

      <dl className="lg:col-span-8 divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
        {FAQS.map((f) => (
          <div key={f.q} className="py-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-2 md:gap-8">
            <dt className="font-bold text-base sm:text-lg text-[#111111] dark:text-[#F5F4F0] leading-snug">{f.q}</dt>
            <dd className="text-sm sm:text-base text-[#444] dark:text-[#CCC] leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
