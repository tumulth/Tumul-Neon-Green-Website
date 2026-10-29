import React from 'react';
import { getProject } from '../data/projects';
import { GUTTER } from '../components/Header';
import { LoopVideo } from '../components/LoopVideo';
import { Link } from '../router';

// The three 2026 websites, shown as they look on a phone. Subculture plays a real scroll.
const SITES = [
  { id: 'subculture', shot: '/projects/subculture/scroll-poster.jpg', video: '/projects/subculture/scroll.mp4', offset: 'lg:mt-0' },
  { id: 'mi-cocina', shot: '/projects/mi-cocina/phone-01.jpg', offset: 'lg:mt-24' },
  { id: 'bimacme-website', shot: '/projects/bimacme-website/phone-01.jpg', offset: 'lg:mt-48' },
];

export const Websites: React.FC = () => (
  <section className={`bg-ink text-paper ${GUTTER} py-28 sm:py-36 lg:py-44`}>
    <div className="grid lg:grid-cols-12 gap-x-6 gap-y-16">
      <div className="lg:col-span-4">
        <h2 data-reveal className="display text-head">
          Three websites
        </h2>
        <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-8 text-body max-w-[40ch]">
          In 2026 I designed and built websites for a café in Aundh, a Mexican restaurant in Baner and an engineering
          firm that works for UK contractors. Each one starts on the phone, and puts its menu, services and address on
          the page as real text that people and search engines can read.
        </p>
        <p data-reveal style={{ '--d': 2 } as React.CSSProperties} className="mt-6 text-small text-soft-dark">
          Design, build and art direction by me.
        </p>
      </div>

      <ul className="lg:col-span-8 grid grid-cols-3 gap-3 sm:gap-6 items-start">
        {SITES.map((s, i) => {
          const p = getProject(s.id)!;
          return (
            <li key={s.id} data-reveal style={{ '--d': i + 1 } as React.CSSProperties} className={s.offset}>
              <Link to={`/work/${p.id}`} className="group block">
                <span className="block overflow-hidden bg-[#1b1b19]">
                  {s.video ? (
                    <LoopVideo
                      src={s.video}
                      poster={s.shot}
                      label={`Scrolling through the ${p.title} website on a phone`}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <img
                      src={s.shot}
                      alt={`${p.title} website on a phone`}
                      width={640}
                      height={1385}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </span>
                <span className="mt-4 block text-body font-semibold group-hover:text-lime transition-colors">
                  {p.title}
                </span>
                <span className="block text-small text-soft-dark">{p.place}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
