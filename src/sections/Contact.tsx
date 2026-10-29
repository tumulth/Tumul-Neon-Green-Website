import React, { useState } from 'react';
import { SITE } from '../data/site';
import { GUTTER } from '../components/Header';
import { useFit } from '../components/useFit';

const NEEDS = ['Brand identity', 'Website', 'Brand guidelines', 'Campaign or social', 'Motion or video', 'A full-time designer'];
const PLACES = ['Pune', 'Mumbai', 'Elsewhere in India', 'Outside India'];
const TIMES = ['This month', 'In 1–3 months', 'Just exploring'];

const HIRING = 'A full-time designer';

// Turns the visitor's choices into a ready-to-send email, so nothing is lost in a form.
const compose = (needs: string[], place: string, time: string) => {
  const hiring = needs.includes(HIRING);
  const work = needs.filter((n) => n !== HIRING);
  const subject = hiring
    ? `Full-time role${place ? `, ${place}` : ''}`
    : `${work.length ? work.join(' + ') : 'A project'}${place ? `, ${place}` : ''}`;
  const lines = ['Hi Tumul,', ''];
  if (hiring) lines.push(`We’re hiring a designer${place ? ` in ${place}` : ''}.`);
  if (work.length) lines.push(`I’m looking for: ${work.join(', ')}.`);
  if (place && !hiring) lines.push(`Based in: ${place}.`);
  if (time) lines.push(`Timing: ${time.toLowerCase()}.`);
  lines.push('', hiring ? 'About the role:' : 'About the project:', '');
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  return { subject, href };
};

interface ChoiceProps {
  label: string;
  options: string[];
  isOn: (o: string) => boolean;
  onPick: (o: string) => void;
}

const Choice: React.FC<ChoiceProps> = ({ label, options, isOn, onPick }) => (
  <fieldset className="mt-6">
    <legend className="text-small text-soft-dark">{label}</legend>
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={isOn(o)}
          onClick={() => onPick(o)}
          className={`min-h-[44px] px-4 text-small font-semibold transition-colors active:scale-[0.97] ${
            isOn(o) ? 'bg-lime text-ink' : 'bg-[#1d1d1b] text-paper hover:bg-[#2a2a27]'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  </fieldset>
);

export const Contact: React.FC = () => {
  const [needs, setNeeds] = useState<string[]>([]);
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const mail = compose(needs, place, time);
  const fitRef = useFit<HTMLAnchorElement>();

  const toggle = (o: string) => setNeeds((n) => (n.includes(o) ? n.filter((x) => x !== o) : [...n, o]));

  return (
    <section id="contact" className={`bg-ink text-paper ${GUTTER} pt-28 sm:pt-36 pb-10 min-h-[100svh] flex flex-col scroll-mt-0`}>
      <div className="grid lg:grid-cols-12 gap-x-6 gap-y-10">
        <div className="lg:col-span-5">
          <h2 data-reveal className="text-lead font-semibold max-w-[22ch]">
            Tell me what you’re making, or the role you’re hiring for.
          </h2>
          <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-4 text-body text-soft-dark max-w-[44ch]">
            Pick what fits and I’ll write the first lines of the email for you. It opens in your own mail app, so you can
            change anything before you send.
          </p>
        </div>

        <div data-reveal style={{ '--d': 2 } as React.CSSProperties} className="lg:col-start-7 lg:col-span-6">
          <Choice label="I need" options={NEEDS} isOn={(o) => needs.includes(o)} onPick={toggle} />
          <Choice label="From" options={PLACES} isOn={(o) => o === place} onPick={(o) => setPlace(o === place ? '' : o)} />
          <Choice label="When" options={TIMES} isOn={(o) => o === time} onPick={(o) => setTime(o === time ? '' : o)} />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={mail.href} className="btn bg-lime text-ink hover:bg-paper">
              Write the email
            </a>
            <span className="text-small text-soft-dark" aria-live="polite">
              Subject: {mail.subject}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-40">
        <a
          ref={fitRef}
          href={`mailto:${SITE.email}`}
          className="block display normal-case fit text-[14.5vw] leading-[0.9] tracking-[-0.01em] hover:text-lime transition-colors"
        >
          {SITE.email}
        </a>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 text-small">
        <p>
          {SITE.city}, {SITE.region}, {SITE.country} · IST, UTC+5:30
        </p>
        <ul className="flex gap-6">
          {SITE.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener me" className="link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
