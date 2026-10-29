import React from 'react';
import { SERVICES } from '../data/site';
import { GUTTER } from '../components/Header';
import { Link } from '../router';

export const Services: React.FC = () => (
  <section id="services" className={`on-paper bg-paper-2 text-ink ${GUTTER} py-28 sm:py-36 lg:py-44 scroll-mt-4`}>
    <h2 data-reveal className="display text-head">
      What I design
    </h2>
    <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-6 text-body max-w-[52ch]">
      Six kinds of work, for businesses in Pune, Mumbai and further away. Most projects start as a brand identity and
      grow into a website or a guidelines book.
    </p>

    <table className="mt-14 lg:mt-20 w-full text-lead border-collapse">
      <caption className="sr-only">Design services by Tumul Thakur, with what each includes and an example project</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Service</th>
          <th scope="col">What you get</th>
          <th scope="col">Example</th>
        </tr>
      </thead>
      <tbody>
        {SERVICES.map((s, i) => (
          <tr
            key={s.name}
            data-reveal
            style={{ '--d': i } as React.CSSProperties}
            className="flex flex-col lg:table-row py-4 lg:py-0"
          >
            <th scope="row" className="text-left font-semibold lg:font-normal lg:w-[33%] lg:py-3 align-top">
              {s.name}
            </th>
            <td className="text-body lg:text-lead text-soft lg:text-ink lg:w-[37%] lg:py-3 align-top">{s.includes}</td>
            <td className="text-body lg:text-lead lg:text-right lg:py-3 align-top">
              {s.examples.map((e, j) => (
                <React.Fragment key={e.label}>
                  {j > 0 && ', '}
                  <Link to={`/work/${e.projectId}`} className="link">
                    {e.label}
                  </Link>
                </React.Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
