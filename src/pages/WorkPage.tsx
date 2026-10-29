import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projects';
import { GUTTER } from '../components/Header';
import { Link } from '../router';

const FILTERS: { label: string; match: (p: Project) => boolean }[] = [
  { label: 'All', match: () => true },
  { label: 'Websites', match: (p) => p.discipline === 'Website' },
  { label: 'Brand identity', match: (p) => /brand/i.test(p.discipline) },
  { label: 'Campaigns and social', match: (p) => /campaign|social/i.test(p.discipline) },
];

// Wide, then a pair at 7 and 5 columns, then the pair flipped.
const SPANS = ['lg:col-span-12', 'lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'];

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState(0);
  const shown = PROJECTS.filter(FILTERS[filter].match);

  return (
    <div className="on-paper bg-paper text-ink">
      <header className={`${GUTTER} pt-28 sm:pt-36 pb-14`}>
        <h1 className="display lines text-head">
          <span className="line">
            <span data-line>All work</span>
          </span>
        </h1>
        <p data-intro className="mt-6 text-lead max-w-[34ch]">
          {PROJECTS.length} projects: websites, brand identities, guidelines and campaigns, for companies in Pune,
          Mumbai and the UK.
        </p>
        <div data-intro role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              type="button"
              aria-pressed={filter === i}
              onClick={() => setFilter(i)}
              className={`min-h-[44px] px-4 text-small font-semibold transition-colors active:scale-[0.97] ${
                filter === i ? 'bg-ink text-paper' : 'bg-paper-2 text-ink hover:bg-[#d3d3cc]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <ul className={`${GUTTER} pb-28 sm:pb-36 grid lg:grid-cols-12 gap-x-6 gap-y-16 sm:gap-y-20`}>
        {shown.map((p, i) => (
          <li key={p.id} data-reveal className={SPANS[i % SPANS.length]}>
            <Link to={`/work/${p.id}`} className="group block">
              <span className="block overflow-hidden bg-paper-2">
                <img
                  src={p.cover}
                  alt={p.coverAlt}
                  width={1600}
                  height={1200}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                    i % SPANS.length === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                />
              </span>
              <h2 className="mt-5 text-lead font-semibold group-hover:underline decoration-[0.08em] underline-offset-4">
                {p.title}
              </h2>
              <p className="mt-1 text-body max-w-[56ch]">{p.summary}</p>
              <p className="mt-2 text-small text-soft tabular">
                {[p.discipline, p.place, p.year, p.agency && `with ${p.agency}`].filter(Boolean).join(' · ')}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
