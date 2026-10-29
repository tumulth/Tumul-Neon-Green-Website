import React from 'react';
import { FAQS } from '../data/site';
import { GUTTER } from '../components/Header';

export const Faq: React.FC = () => (
  <section id="questions" className={`on-paper bg-paper-2 text-ink ${GUTTER} py-28 sm:py-36 lg:py-44 scroll-mt-4`}>
    <div className="grid lg:grid-cols-12 gap-x-6 gap-y-10">
      <h2 data-reveal className="lg:col-span-3 display text-head">
        Questions
      </h2>
      <dl className="lg:col-start-5 lg:col-span-8 lg:columns-2 lg:gap-14 text-body">
        {FAQS.map((f, i) => (
          <div key={f.q} data-reveal style={{ '--d': i % 4 } as React.CSSProperties} className="break-inside-avoid mb-6">
            <dt className="inline font-semibold">{f.q}</dt> <dd className="inline">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
