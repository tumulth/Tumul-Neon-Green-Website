import React from 'react';
import { Project } from '../../data/projects';
import { GUTTER } from '../Header';
import { Link } from '../../router';
import { LoopVideo } from '../LoopVideo';
import { WEBSITE_STUDIES, Shot } from './websiteData';

interface WebsiteCaseStudyProps {
  project: Project;
  next: Project;
}

const Figure: React.FC<{ shot: Shot; className?: string; eager?: boolean }> = ({ shot, className = '', eager }) => (
  <figure data-reveal className={className}>
    <img
      src={shot.src}
      alt={shot.alt}
      width={2000}
      height={1250}
      loading={eager ? 'eager' : 'lazy'}
      className="w-full h-auto block bg-paper-2"
    />
    <figcaption className="mt-3 text-small text-soft max-w-[60ch]">{shot.caption}</figcaption>
  </figure>
);

// Spans for the gallery after the first shot: wide, then pairs.
const SPANS = ['lg:col-span-12', 'lg:col-span-6', 'lg:col-span-6'];

export const WebsiteCaseStudy: React.FC<WebsiteCaseStudyProps> = ({ project, next }) => {
  const study = WEBSITE_STUDIES[project.id];
  const [first, ...gallery] = study.desktop;
  const facts = [
    { label: 'Client', value: project.client },
    { label: 'Where', value: project.place },
    { label: 'Year', value: project.year },
    { label: 'My role', value: project.role.join(', ') },
  ].filter((f) => f.value);

  return (
    <article className="bg-paper text-ink on-paper">
      <header className={`${GUTTER} pt-28 sm:pt-36 pb-14`}>
        <nav aria-label="Breadcrumb" className="text-small text-soft">
          <Link to="/work" className="link">
            Work
          </Link>{' '}
          / {project.discipline}
        </nav>
        <h1 className="display lines text-head mt-6">
          <span className="line">
            <span data-line>{project.title}</span>
          </span>
        </h1>
        <div className="mt-8 grid lg:grid-cols-12 gap-x-6 gap-y-10">
          <p data-intro className="lg:col-span-6 text-lead">
            {project.heroTagline}
          </p>
          <dl data-intro className="lg:col-start-8 lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-5 text-small">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-soft">{f.label}</dt>
                <dd className="font-semibold">{f.value}</dd>
              </div>
            ))}
            {project.liveUrl && (
              <div className="col-span-2">
                <a href={project.liveUrl} target="_blank" rel="noopener" className="btn bg-ink text-paper hover:bg-lime hover:text-ink">
                  Visit the live site
                </a>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className={GUTTER}>
        <Figure shot={first} eager />
      </div>

      <section className={`${GUTTER} py-24 sm:py-32 grid lg:grid-cols-12 gap-x-6 gap-y-12`}>
        <div data-reveal className="lg:col-span-5">
          <h2 className="text-lead font-semibold">The brief</h2>
          <p className="mt-4 text-body max-w-[58ch]">{project.challenge}</p>
        </div>
        <div data-reveal style={{ '--d': 1 } as React.CSSProperties} className="lg:col-start-7 lg:col-span-6">
          <h2 className="text-lead font-semibold">What I did</h2>
          <p className="mt-4 text-body max-w-[62ch]">{project.approach}</p>
        </div>
      </section>

      <section aria-label="Screens" className={`${GUTTER} grid lg:grid-cols-12 gap-x-6 gap-y-14`}>
        {gallery.map((shot, i) => {
          // A half-width shot with no partner after it takes the full width instead.
          const alone = i % SPANS.length === 1 && i === gallery.length - 1;
          return <Figure key={shot.src} shot={shot} className={alone ? SPANS[0] : SPANS[i % SPANS.length]} />;
        })}
      </section>

      <section
        className={`${GUTTER} mt-24 sm:mt-32 py-24 sm:py-32`}
        style={{ backgroundColor: study.field, color: study.fieldInk }}
      >
        <h2 data-reveal className="display text-head">
          On a phone
        </h2>
        <ul className="mt-12 grid grid-cols-3 gap-3 sm:gap-8 lg:w-3/4">
          {study.phones.map((shot, i) => (
            <li key={shot.src} data-reveal style={{ '--d': i } as React.CSSProperties} className={i === 1 ? 'mt-10 sm:mt-20' : ''}>
              {i === 0 && study.video ? (
                <LoopVideo src={study.video} poster={shot.src} label={shot.alt} className="w-full h-auto block" />
              ) : (
                <img src={shot.src} alt={shot.alt} width={640} height={1385} loading="lazy" className="w-full h-auto block" />
              )}
              <p className="mt-3 text-small">{shot.caption}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${GUTTER} py-24 sm:py-32 grid lg:grid-cols-12 gap-x-6 gap-y-14`}>
        <div className="lg:col-span-5">
          <h2 data-reveal className="text-lead font-semibold">
            Colour and type
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {project.visualSystem.primaryColors.map((c, i) => (
              <li key={c.hex} data-reveal style={{ '--d': i } as React.CSSProperties}>
                <span className="block aspect-[4/3]" style={{ backgroundColor: c.hex }} />
                <span className="mt-2 block text-small font-semibold">
                  {c.name} <span className="text-soft font-normal tabular">{c.hex}</span>
                </span>
                <span className="block text-small text-soft">{c.role}</span>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-6 text-body">
            {project.visualSystem.fontPairing}.
          </p>
        </div>

        <div className="lg:col-start-7 lg:col-span-6">
          <h2 data-reveal className="text-lead font-semibold">
            What’s on the site
          </h2>
          <dl className="mt-6 flex flex-col gap-6 text-body">
            {project.applications.map((a, i) => (
              <div key={a.title} data-reveal style={{ '--d': i } as React.CSSProperties}>
                <dt className="font-semibold">{a.title}</dt>
                <dd className="mt-1 max-w-[56ch]">{a.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`on-lime bg-lime text-ink ${GUTTER} py-24 sm:py-32`}>
        <h2 data-reveal className="text-lead font-semibold">
          Where it landed
        </h2>
        <p data-reveal style={{ '--d': 1 } as React.CSSProperties} className="mt-4 text-lead max-w-[40ch]">
          {project.outcome}
        </p>
        {project.liveUrl && (
          <p data-reveal style={{ '--d': 2 } as React.CSSProperties} className="mt-8">
            <a href={project.liveUrl} target="_blank" rel="noopener" className="btn bg-ink text-paper hover:bg-paper hover:text-ink">
              Visit {project.title}
            </a>
          </p>
        )}
      </section>

      <nav aria-label="Next project" className={`${GUTTER} py-20 sm:py-28`}>
        <Link to={`/work/${next.id}`} className="group block">
          <span className="text-small text-soft">Next project</span>
          <span className="mt-2 block display text-head group-hover:text-soft transition-colors">{next.title}</span>
          <span className="block text-small text-soft">{next.discipline}</span>
        </Link>
      </nav>
    </article>
  );
};
