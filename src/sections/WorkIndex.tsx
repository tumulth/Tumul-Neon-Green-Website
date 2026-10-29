import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { GUTTER } from '../components/Header';
import { Link } from '../router';

const meta = (p: (typeof PROJECTS)[number]) => [p.discipline, p.place, p.year].filter(Boolean).join(' · ');

export const WorkIndex: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = PROJECTS[active];

  return (
    <section id="work" className={`bg-paper text-ink ${GUTTER} py-28 sm:py-36 lg:py-44 scroll-mt-4`}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-7">
          <h2 data-reveal className="text-lead font-semibold">
            Selected work
          </h2>
          <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-3 text-body max-w-[48ch]">
            Websites, brand identities, guidelines and campaigns, made in Pune for clients in Pune, Mumbai and the UK.
          </p>

          <ol className="mt-12 lg:mt-16 flex flex-col gap-10 lg:gap-0">
            {PROJECTS.map((p, i) => (
              <li key={p.id} data-reveal style={{ '--d': Math.min(i, 6) } as React.CSSProperties}>
                <Link
                  to={`/work/${p.id}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block lg:py-1.5"
                  aria-label={`${p.title}: ${p.discipline}${p.place ? `, ${p.place}` : ''}, ${p.year}`}
                >
                  <img
                    src={p.cover}
                    alt=""
                    width={800}
                    height={600}
                    loading="lazy"
                    className="lg:hidden w-full aspect-[16/10] object-cover mb-4 bg-paper-2"
                  />
                  <span
                    className={`display text-head work-name block lg:inline ${
                      i === active ? 'lg:text-ink' : 'lg:text-soft'
                    } group-hover:text-ink`}
                  >
                    {p.title}
                  </span>
                  <span className="lg:hidden block mt-1 text-small text-soft tabular">{meta(p)}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="hidden lg:block lg:col-start-8 lg:col-span-5">
          <div className="sticky top-[14vh] mt-[7.5rem]">
            <Link to={`/work/${current.id}`} className="work-frame relative block aspect-[4/3] overflow-hidden bg-paper-2" tabIndex={-1}>
              {PROJECTS.map((p, i) => (
                <img
                  key={p.id}
                  src={p.cover}
                  alt={i === active ? p.coverAlt : ''}
                  width={1600}
                  height={1200}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: i === active ? 1 : 0 }}
                />
              ))}
            </Link>
            <p className="mt-4 text-small text-soft tabular">
              {meta(current)}
              {current.agency && ` · with ${current.agency}`}
            </p>
            <p className="mt-1 text-body max-w-[46ch]">{current.summary}</p>
          </div>
        </div>
      </div>

      <p data-reveal className="mt-16 text-body">
        <Link to="/work" className="link font-semibold">
          See all {PROJECTS.length} projects as pictures
        </Link>
      </p>
    </section>
  );
};
