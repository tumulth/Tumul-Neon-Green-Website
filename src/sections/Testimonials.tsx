import React from 'react';
import { TESTIMONIALS } from '../data/site';
import { GUTTER } from '../components/Header';

export const Testimonials: React.FC = () => {
  const [lead, ...rest] = TESTIMONIALS;
  return (
    <section
      aria-label="What clients say"
      className={`on-lime bg-lime text-ink ${GUTTER} py-24 sm:py-32 min-h-[100svh] grid grid-rows-[auto_1fr_auto] gap-y-20`}
    >
      <figure data-reveal className="max-w-[54rem] lg:mx-auto lg:text-center">
        <blockquote className="text-body sm:text-lead font-semibold">
          <p>“{lead.quote}”</p>
        </blockquote>
        <figcaption className="mt-6 text-body">
          {lead.author}, {lead.work.toLowerCase()}
        </figcaption>
      </figure>

      <div aria-hidden="true" />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
        {rest.map((t, i) => (
          <li
            key={t.author}
            data-reveal
            style={{ '--d': i } as React.CSSProperties}
            className={i % 2 === 1 ? 'lg:mt-16' : ''}
          >
            <figure>
              <blockquote className="text-body">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-4 text-small">
                <span className="font-semibold">{t.author}</span>
                <br />
                {t.work}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
