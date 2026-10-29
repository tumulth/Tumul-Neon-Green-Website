import React from 'react';
import { SITE } from '../data/site';
import { GUTTER } from '../components/Header';
import { Link } from '../router';
import { useFit } from '../components/useFit';

const PAGES = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
  { label: 'Questions', to: '/#questions' },
  { label: 'Contact', to: '/#contact' },
];

export const Footer: React.FC = () => {
  const fitRef = useFit<HTMLParagraphElement>();
  return (
  <footer className={`on-paper bg-paper text-ink ${GUTTER} pt-10 pb-5 min-h-[70svh] grid grid-rows-[auto_1fr_auto]`}>
    <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-8 text-body">
      <div className="lg:col-span-3">
        <p className="font-semibold">{SITE.name}</p>
        <p className="text-soft">
          Brand and website designer
          <br />
          {SITE.city}, {SITE.region}, {SITE.country}
        </p>
      </div>
      <nav aria-label="Footer" className="lg:col-span-3">
        <ul>
          {PAGES.map((p, i) => (
            <li key={p.to}>
              <Link to={p.to} className={`${i === 0 ? '' : 'text-soft'} hover:text-ink transition-colors`}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="lg:col-span-3">
        {SITE.socials.map((s, i) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noopener me" className={`${i === 0 ? '' : 'text-soft'} hover:text-ink transition-colors`}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="lg:col-span-3">
        <a href={`mailto:${SITE.email}`} className="link">
          {SITE.email}
        </a>
        <p className="text-soft">Freelance and full-time</p>
      </div>
    </div>

    <div aria-hidden="true" />

    <div>
      <p ref={fitRef} aria-hidden="true" className="display fit text-[16vw] leading-[0.8] select-none">
        Tumul Thakur
      </p>
      <p className="mt-4 text-small text-soft">© 2026 Tumul Thakur. Designed and built in Pune.</p>
    </div>
  </footer>
  );
};
