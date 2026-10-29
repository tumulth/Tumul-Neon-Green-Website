import React from 'react';
import { SITE, EXPERIENCE, CLIENTS, TOOLS } from '../data/site';
import { GUTTER } from '../components/Header';

const FACTS = [
  { label: 'Based in', value: 'Pune, Maharashtra' },
  { label: 'Designing since', value: String(SITE.since) },
  { label: 'Open to', value: 'Freelance and full-time' },
  { label: 'Tools', value: TOOLS },
];

export const About: React.FC = () => (
  <section id="about" className={`on-paper bg-paper text-ink ${GUTTER} py-28 sm:py-36 lg:py-44 scroll-mt-4`}>
    <div className="grid lg:grid-cols-12 gap-x-6 gap-y-12">
      <div className="lg:col-span-4">
        <img
          data-reveal
          src={SITE.portrait}
          alt="Tumul Thakur, brand and website designer in Pune"
          width={900}
          height={1123}
          loading="lazy"
          className="w-full max-w-[420px] aspect-[4/5] object-cover bg-paper-2"
        />
        <dl data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-8 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5 text-small">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt className="text-soft">{f.label}</dt>
              <dd className="font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-8">
        <h2 data-reveal className="display text-head">
          About me
        </h2>
        <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-8 text-body sm:text-lead font-semibold sm:font-normal max-w-[46ch]">
          I’m a brand and website designer in Pune. Since 2020 I’ve made logos, guidelines, websites, campaigns and
          films for companies that make real things.
        </p>
        <div data-reveal style={{ '--d': 2 } as React.CSSProperties} className="mt-8 text-body max-w-[62ch] flex flex-col gap-4">
          <p>
            Concrete pipes, freight networks, wind farms, a township in Hinjawadi, cafés in Aundh and a Mexican kitchen
            in Baner. What they share is that they were better at what they do than they looked, and my job was to close
            that gap.
          </p>
          <p>
            I care most about the part after the logo: the guidelines a printer can follow, the ID card on a site
            engineer’s lanyard, the menu a customer reads on a phone. Before going independent I was a Senior Visualiser
            at Bandish Studios in Pune, and before that I edited video and designed at House of Content.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          <div data-reveal>
            <h3 className="text-body font-semibold">Experience</h3>
            <ul className="mt-4 flex flex-col gap-3 text-small">
              {EXPERIENCE.map((j) => (
                <li key={j.role + j.years} className="flex justify-between gap-6">
                  <span>
                    <span className="font-semibold">{j.role}</span>
                    <br />
                    {j.company}
                  </span>
                  <span className="text-soft tabular whitespace-nowrap">{j.years}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ '--d': 1 } as React.CSSProperties}>
            <h3 className="text-body font-semibold">Clients</h3>
            <ul className="mt-4 columns-2 gap-6 text-small leading-[1.9]">
              {CLIENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-4 text-small text-soft">Some through Bandish Studios and House of Content.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
