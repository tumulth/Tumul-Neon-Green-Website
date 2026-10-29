import React from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { LoopVideo } from '../LoopVideo';
import { WEBSITE_STUDIES } from './websiteData';

interface WebsiteCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

// Case study for the websites (Subculture, Mi Cocina, Bimacme), built from real screenshots of the live sites.
export const WebsiteCaseStudy: React.FC<WebsiteCaseStudyProps> = ({ project, onSelectProject }) => {
  const study = WEBSITE_STUDIES[project.id];
  const [first, ...gallery] = study.desktop;
  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      {/* Title & Metadata */}
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A84] dark:text-[#888] block mb-2">
            CASE STUDY // {project.categoryTag}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0] leading-none">
            {project.title}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-[#555] dark:text-[#AAA] max-w-2xl leading-relaxed">
            {project.heroTagline}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#111111]/10 dark:border-white/10 text-xs">
          {[
            ['CLIENT', project.client],
            ['WHERE', project.place],
            ['YEAR', project.year],
            ['MY ROLE', project.role.join(' · ')],
          ].map(([label, value]) => (
            <div key={label}>
              <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">{label}</span>
              <span className="font-semibold text-[#111111] dark:text-[#F5F4F0] leading-snug">{value}</span>
            </div>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener"
            className="self-start px-6 py-3.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] hover:bg-[#C8FF00] hover:text-[#111111] font-mono text-xs font-bold uppercase tracking-widest transition-colors"
            data-cursor="arrow"
          >
            VISIT THE LIVE SITE ↗
          </a>
        )}
      </div>

      {/* Hero Screenshot */}
      <figure className="flex flex-col gap-3">
        <img src={first.src} alt={first.alt} width={2000} height={1250} className="w-full h-auto rounded-2xl border border-black/10 dark:border-white/10 shadow-md" />
        <figcaption className="text-xs text-[#8A8A84] dark:text-[#888]">{first.caption}</figcaption>
      </figure>

      {/* Brief & Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">01 / THE BRIEF</span>
          <p className="text-sm md:text-base text-[#333] dark:text-[#CCC] leading-relaxed">{project.challenge}</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">02 / WHAT I DID</span>
          <p className="text-sm md:text-base text-[#333] dark:text-[#CCC] leading-relaxed">{project.approach}</p>
        </div>
      </div>

      {/* Screens */}
      <div className="flex flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">03 / THE SCREENS</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gallery.map((shot, i) => (
            <figure key={shot.src} className={`flex flex-col gap-3 ${i % 3 === 0 || i === gallery.length - 1 ? 'sm:col-span-2' : ''}`}>
              <img src={shot.src} alt={shot.alt} width={2000} height={1250} loading="lazy" className="w-full h-auto rounded-2xl border border-black/10 dark:border-white/10" />
              <figcaption className="text-xs text-[#8A8A84] dark:text-[#888]">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Phones */}
      <div className="rounded-3xl p-8 md:p-12 flex flex-col gap-8" style={{ backgroundColor: study.field, color: study.fieldInk }}>
        <span className="font-mono text-xs uppercase tracking-widest opacity-80">04 / ON A PHONE</span>
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {study.phones.map((shot, i) => (
            <figure key={shot.src} className={`flex flex-col gap-2 ${i === 1 ? 'mt-8 sm:mt-14' : ''}`}>
              {i === 0 && study.video ? (
                <LoopVideo src={study.video} poster={shot.src} label={shot.alt} className="w-full h-auto rounded-xl" />
              ) : (
                <img src={shot.src} alt={shot.alt} width={640} height={1385} loading="lazy" className="w-full h-auto rounded-xl" />
              )}
              <figcaption className="text-xs">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Colour & Type */}
      <div className="bg-[#EAE8E2] dark:bg-[#181816] p-8 md:p-10 border border-[#111111]/10 dark:border-white/10 rounded-3xl flex flex-col gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">05 / COLOUR AND TYPE</span>
          <p className="mt-2 text-sm font-semibold text-[#111111] dark:text-[#F5F4F0]">{project.visualSystem.fontPairing}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.visualSystem.primaryColors.map((c) => (
            <div key={c.hex} className="flex flex-col gap-2">
              <div className="w-full h-16 rounded border border-black/10 dark:border-white/10" style={{ backgroundColor: c.hex }} />
              <div>
                <div className="text-xs font-semibold text-[#111111] dark:text-[#F5F4F0]">
                  {c.name} <span className="font-mono font-normal text-[#8A8A84]">{c.hex}</span>
                </div>
                <div className="text-[11px] text-[#8A8A84] dark:text-[#888]">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's on the site */}
      <div className="flex flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">06 / WHAT’S ON THE SITE</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.applications.map((a) => (
            <div key={a.title} className="p-6 bg-white dark:bg-[#141412] border border-[#111111]/10 dark:border-white/10 rounded-2xl">
              <span className="font-mono text-[11px] text-[#8A8A84] dark:text-[#888] uppercase tracking-wider">{a.category}</span>
              <h2 className="mt-2 font-bold text-base text-[#111111] dark:text-[#F5F4F0]">{a.title}</h2>
              <p className="mt-1 text-xs text-[#555550] dark:text-[#AAA] leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="p-8 border-l-2 border-[#111111] dark:border-[#C8FF00] bg-white dark:bg-[#141412] flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">07 / WHERE IT LANDED</span>
        <p className="text-base sm:text-lg font-serif text-[#111111] dark:text-[#F5F4F0] leading-relaxed">{project.outcome}</p>
      </div>

      {/* Next Project */}
      <div className="pt-10 border-t border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888] uppercase tracking-widest block mb-1">NEXT CASE STUDY</span>
          <span className="text-xl font-bold uppercase text-[#111111] dark:text-[#F5F4F0]">
            {next.number} — {next.title}
          </span>
        </div>
        <a
          href={`/work/${next.id}`}
          onClick={(e) => {
            e.preventDefault();
            onSelectProject(next);
          }}
          className="px-6 py-3.5 bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] hover:bg-[#C8FF00] hover:text-[#111111] font-mono text-xs font-bold uppercase tracking-widest transition-colors"
          data-cursor="arrow"
        >
          NEXT PROJECT →
        </a>
      </div>
    </>
  );
};
