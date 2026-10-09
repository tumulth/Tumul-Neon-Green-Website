import React from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { CaseStudySection } from './CaseStudySection';
import { CaseStudyImage } from './CaseStudyImage';
import { VideoCaseStudy } from './VideoCaseStudy';
import {
  BIMACME_IMAGE_ASSETS,
  BIMACME_VIDEO_CASE_STUDIES,
} from './bimacmeAssets';

interface BimacmeCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const BimacmeCaseStudy: React.FC<BimacmeCaseStudyProps> = ({
  project,
  onSelectProject,
}) => {
  // Find next project in roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const img01 = BIMACME_IMAGE_ASSETS[0]; // Primary logo
  const img02 = BIMACME_IMAGE_ASSETS[1]; // Brand foundation
  const img03 = BIMACME_IMAGE_ASSETS[2]; // Logo construction
  const img04 = BIMACME_IMAGE_ASSETS[3]; // Identity anatomy
  const img05 = BIMACME_IMAGE_ASSETS[4]; // Colour system
  const img06 = BIMACME_IMAGE_ASSETS[5]; // Typography
  const img07 = BIMACME_IMAGE_ASSETS[6]; // Corporate stationery
  const img08 = BIMACME_IMAGE_ASSETS[7]; // Presentation folder
  const img09 = BIMACME_IMAGE_ASSETS[8]; // Employee ID
  const img10 = BIMACME_IMAGE_ASSETS[9]; // Social media
  const img11 = BIMACME_IMAGE_ASSETS[10]; // Application 11
  const img12 = BIMACME_IMAGE_ASSETS[11]; // Application 12

  return (
    <div className="w-full flex flex-col divide-y divide-[#111111]/10 dark:divide-white/10 select-text">
      {/* ==================================================
          PROJECT HEADER & METADATA
          ================================================== */}
      <header className="pb-12 md:pb-16 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3D7FE2] dark:text-[#70A5F5] font-semibold">
            <span>PROJECT CASE STUDY</span>
            <span>·</span>
            <span>{project.number}</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0] leading-none">
            {project.title}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif italic text-[#4A4A45] dark:text-[#C5C5C0] max-w-3xl leading-relaxed">
            "Building a visual identity around precision, coordination, and the systems behind modern construction."
          </p>
        </div>

        {/* Editorial Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#111111]/10 dark:border-white/10 text-xs">
          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1.5 font-medium">
              CLIENT
            </span>
            <span className="font-sans font-bold text-sm text-[#111111] dark:text-[#F5F4F0]">
              BIMACME Engineering Solutions
            </span>
          </div>

          <div>
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1.5 font-medium">
              YEAR & LOCATION
            </span>
            <span className="font-sans font-bold text-sm text-[#111111] dark:text-[#F5F4F0] block">
              2025 · Pune / Global
            </span>
          </div>

          <div className="col-span-2 md:col-span-1">
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1.5 font-medium">
              CATEGORY
            </span>
            <span className="font-sans font-medium text-xs text-[#111111] dark:text-[#F5F4F0] leading-snug block">
              Branding / Visual Identity
              <span className="text-[#8A8A84] dark:text-[#777] block mt-0.5">
                Architecture & Engineering
              </span>
            </span>
          </div>

          <div className="col-span-2 md:col-span-1">
            <span className="font-mono text-[#8A8A84] dark:text-[#777] uppercase tracking-wider block mb-1.5 font-medium">
              SERVICES
            </span>
            <span className="font-sans font-medium text-xs text-[#111111] dark:text-[#F5F4F0] leading-snug block">
              Brand Strategy · Visual Identity · Brand Applications · Social Media · Video Editing
            </span>
          </div>
        </div>
      </header>

      {/* ==================================================
          01 / THE BRAND
          ================================================== */}
      <CaseStudySection
        label="01 / THE BRAND"
        headline="Designing for a business built on precision."
        paragraphs={[
          'BIMACME operates at the intersection of architecture, engineering, and digital construction. Their work involves turning complex building information into coordinated, constructible systems.',
          'The challenge was to translate that technical expertise into a brand that felt clear, contemporary, and confident — without relying on the predictable visual language of engineering and construction brands.',
          'The identity needed to communicate structure without feeling rigid, and technical expertise without feeling inaccessible.',
        ]}
      />

      {/* ==================================================
          02 / THE IDENTITY + IDENTITY VISUALS (01 - 04)
          ================================================== */}
      <CaseStudySection
        label="02 / THE IDENTITY"
        headline="Geometry and negative space: constructing the split-A mark."
        paragraphs={[
          'The identity is centred around a custom geometric symbol and a disciplined typographic system.',
          'The mark combines simple geometric facets to create an abstract “A”, with the negative space forming a channel that represents the flow and coordination of MEP systems at the core of BIMACME\'s work.',
          'Paired with a bold lowercase wordmark, the identity balances technical authority with contemporary digital character.',
        ]}
      >
        <div className="flex flex-col gap-10 md:gap-14 pt-4">
          {/* IMAGE 01: Hero Primary Identity */}
          <CaseStudyImage
            asset={img01}
            priority={true}
            className="w-full"
            imageClassName="w-full max-h-[640px]"
          />

          {/* IMAGE 02 & IMAGE 03: Asymmetric 2-Column Spread */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <CaseStudyImage asset={img02} />
            <CaseStudyImage asset={img03} />
          </div>

          {/* IMAGE 04: Full Width Identity Anatomy */}
          <CaseStudyImage
            asset={img04}
            className="w-full"
            imageClassName="w-full max-h-[640px]"
          />
        </div>
      </CaseStudySection>

      {/* ==================================================
          03 / THE VISUAL SYSTEM + SYSTEM VISUALS (05 - 06)
          ================================================== */}
      <CaseStudySection
        label="03 / THE VISUAL SYSTEM"
        headline="Controlled color palettes and dual typographic hierarchy."
        paragraphs={[
          'The identity extends beyond the symbol through a controlled color palette, typographic rules, and strict layout datum lines.',
          'Marine Navy (#0C1D49) and Traditional Blue (#3D7FE2) establish corporate authority, while Chrome White (#E8F1F6) provides clean contrast across digital interfaces and printed sheets.',
          'Effra Sans Serif serves as the primary display typeface, while Switzer Regular provides clean, readable structure for technical specification sheets and documentation.',
          'The result is a unified system designed for consistent execution across stationery, site gear, and motion graphics.',
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start pt-4">
          <CaseStudyImage asset={img05} />
          <CaseStudyImage asset={img06} />
        </div>
      </CaseStudySection>

      {/* ==================================================
          04 / BRAND APPLICATIONS + APPLICATION VISUALS (07 - 12)
          ================================================== */}
      <CaseStudySection
        label="04 / BRAND APPLICATIONS"
        headline="Corporate collateral, credential badging, and site gear."
        paragraphs={[
          'A brand identity proves its worth when applied to everyday business operations.',
          'I translated the system into high-finish physical and digital collateral, establishing grid datum lines for presentation folders, correspondence envelopes, bilingual employee credentials, and high-visibility on-site safety apparel.',
        ]}
      >
        <div className="flex flex-col gap-10 md:gap-14 pt-4">
          {/* Pair 1: Stationery & Collateral */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <CaseStudyImage asset={img07} />
            <CaseStudyImage asset={img08} />
          </div>

          {/* Pair 2: Employee ID & Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <CaseStudyImage asset={img09} />
            <CaseStudyImage asset={img10} />
          </div>

          {/* Pair 3: Future / Additional Touchpoints (11 & 12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <CaseStudyImage asset={img11} />
            <CaseStudyImage asset={img12} />
          </div>
        </div>
      </CaseStudySection>

      {/* ==================================================
          05 / VIDEO & MOTION + 3 YOUTUBE EMBEDS
          ================================================== */}
      <CaseStudySection
        label="05 / VIDEO & MOTION"
        headline="Technical video explainer edits and motion graphics."
        paragraphs={[
          'To help BIMACME communicate their technical consulting capabilities to enterprise partners, I edited and animated a series of video case studies in Premiere Pro and After Effects.',
          'The edits break down complex 3D BIM models, MEP clash detection, and builder works coordination into clear visual sequences with on-screen telemetry callouts and structured pacing.',
        ]}
        subheading="CASE STUDY"
        subheadingBody="The following videos demonstrate BIMACME's approach to Builder Works Coordination, Constructible Modeling, and digital MEP workflows."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {BIMACME_VIDEO_CASE_STUDIES.map((video) => (
            <VideoCaseStudy key={video.id} video={video} />
          ))}
        </div>
      </CaseStudySection>

      {/* ==================================================
          06 / THE RESULT
          ================================================== */}
      <CaseStudySection
        label="06 / THE RESULT"
        headline="One system. Multiple touchpoints."
        paragraphs={[
          'The BIMACME identity establishes a consistent visual language across brand, communication, physical applications, social media, and video.',
          'Rather than treating technical expertise as something that needs to look complicated, the system uses clarity, geometry, and restraint to make that expertise visible.',
          'The result is a brand that feels aligned with the way BIMACME works:',
        ]}
      >
        <div className="pt-2">
          <div className="p-8 sm:p-10 md:p-12 bg-[#EAE8E2] dark:bg-[#141412] border-l-4 border-[#3D7FE2] flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D7FE2] dark:text-[#70A5F5] font-semibold">
              CORE OUTCOME
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#111111] dark:text-[#F5F4F0] leading-snug">
              "Structured, precise, and built for complexity."
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* ==================================================
          NEXT PROJECT NAVIGATION
          ================================================== */}
      <footer className="pt-12 md:pt-16 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <span className="font-mono text-xs text-[#8A8A84] dark:text-[#777] uppercase tracking-widest block mb-1">
            NEXT CASE STUDY
          </span>
          <span className="text-xl sm:text-2xl font-bold uppercase text-[#111111] dark:text-[#F5F4F0] font-sans">
            {nextProject.number} — {nextProject.title}
          </span>
        </div>

        <button
          onClick={() => onSelectProject(nextProject)}
          className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] hover:bg-[#3D7FE2] dark:hover:bg-white font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-200 border border-[#111111] dark:border-[#C8FF00]"
          data-cursor="arrow"
        >
          NEXT PROJECT →
        </button>
      </footer>
    </div>
  );
};
