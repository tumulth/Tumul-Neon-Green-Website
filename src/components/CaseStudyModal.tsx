import React, { useEffect, useRef } from 'react';
import { Project, PROJECTS } from '../data/projects';
import { ProjectArt } from './ProjectArt';
import { BimacmeCaseStudy } from './bimacme/BimacmeCaseStudy';
import { SangreenBrandGuidelines } from './sangreen/SangreenBrandGuidelines';
import { SangreenRenewablesCaseStudy } from './sangreen-renewables/SangreenRenewablesCaseStudy';
import { SiddhivinayakCaseStudy } from './siddhivinayak/SiddhivinayakCaseStudy';
import { KrisalaCaseStudy } from './krisala/KrisalaCaseStudy';
import { SocialMediaCreativesCaseStudy } from './social-media/SocialMediaCreativesCaseStudy';
import { SomaCafeCaseStudy } from './soma/SomaCafeCaseStudy';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalTitle = document.title;
    if (project) {
      document.title = `${project.title} — ${project.categoryTag} | Tumul Thakur`;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Allow keyboard arrow keys and page down/up to scroll the modal
      if (scrollContainerRef.current) {
        if (e.key === 'ArrowDown') {
          scrollContainerRef.current.scrollTop += 60;
        } else if (e.key === 'ArrowUp') {
          scrollContainerRef.current.scrollTop -= 60;
        } else if (e.key === 'PageDown' || e.key === ' ') {
          scrollContainerRef.current.scrollTop += window.innerHeight * 0.75;
        } else if (e.key === 'PageUp') {
          scrollContainerRef.current.scrollTop -= window.innerHeight * 0.75;
        }
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project in circular order
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Guaranteed wheel scrolling inside the modal regardless of Lenis or parent listeners
  const handleModalWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        ref={scrollContainerRef}
        data-lenis-prevent="true"
        onWheel={handleModalWheel}
        className={`relative w-full ${
          project.id === 'bimacme' ||
          project.id === 'sangreen-logistics' ||
          project.id === 'sangreen-future-renewables' ||
          project.id === 'sidhivinayak-precast' ||
          project.id === 'krisala-hiranandani' ||
          project.id === 'social-media-creatives' ||
          project.id === 'soma-cafe'
            ? 'max-w-5xl lg:max-w-6xl'
            : 'max-w-4xl'
        } bg-[#F5F4F0] dark:bg-[#0C0C0B] text-[#111111] dark:text-[#F5F4F0] h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 overscroll-contain select-text transition-colors duration-300`}
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close button & numbering */}
        <div className="sticky top-0 z-30 bg-[#F5F4F0]/95 dark:bg-[#0C0C0B]/95 backdrop-blur-md border-b border-[#111111]/10 dark:border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs text-[#8A8A84] dark:text-[#888]">
            <span className="text-[#111111] dark:text-[#F5F4F0] font-bold">{project.number}</span>
            <span>/</span>
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center text-[#111111] dark:text-[#F5F4F0] hover:bg-[#111111] dark:hover:bg-[#C8FF00] hover:text-white dark:hover:text-black transition-colors"
            aria-label="Close Case Study"
            data-cursor="arrow"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 md:px-12 py-10 md:py-16 flex flex-col gap-14">
          {project.id === 'bimacme' ? (
            <BimacmeCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'sangreen-logistics' ? (
            <SangreenBrandGuidelines
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'sangreen-future-renewables' ? (
            <SangreenRenewablesCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'sidhivinayak-precast' ? (
            <SiddhivinayakCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'krisala-hiranandani' ? (
            <KrisalaCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'social-media-creatives' ? (
            <SocialMediaCreativesCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : project.id === 'soma-cafe' ? (
            <SomaCafeCaseStudy
              project={project}
              onSelectProject={onSelectProject}
              onClose={onClose}
            />
          ) : (
            <>
              {/* Section 1: Project Title & Metadata Header */}
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A84] dark:text-[#888] block mb-2">
                    CASE STUDY // {project.categoryTag}
                  </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0] leading-none">
                {project.title}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-serif italic text-[#8A8A84] dark:text-[#AAA] max-w-2xl leading-relaxed">
                "{project.heroTagline}"
              </p>
            </div>

            {/* Editorial Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#111111]/10 dark:border-white/10 text-xs">
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  CLIENT
                </span>
                <span className="font-semibold text-[#111111] dark:text-[#F5F4F0]">{project.client}</span>
              </div>
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  YEAR
                </span>
                <span className="font-semibold text-[#111111] dark:text-[#F5F4F0]">{project.year}</span>
              </div>
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  ROLE
                </span>
                <span className="font-medium text-[#111111] dark:text-[#F5F4F0] leading-snug">
                  {project.role.join(' · ')}
                </span>
              </div>
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  LOCATION
                </span>
                <span className="font-semibold text-[#111111] dark:text-[#F5F4F0]">Pune / Global</span>
              </div>
            </div>
          </div>

          {/* Section 2: Large Visual Showcase */}
          <div className="rounded-none border border-[#111111]/15 dark:border-white/10 overflow-hidden shadow-sm">
            <ProjectArt
              projectId={project.id}
              className="w-full min-h-[380px] md:min-h-[460px]"
              variant="hero"
            />
          </div>

          {/* Section 3: The Challenge & The Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">
                01 / THE CHALLENGE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#111111] dark:text-[#F5F4F0] leading-snug">
                Dismantling category noise with uncompromising creative intent.
              </h2>
              <p className="text-sm md:text-base text-[#444440] dark:text-[#BBB] leading-relaxed mt-2">
                {project.challenge}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">
                02 / THE APPROACH
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#111111] dark:text-[#F5F4F0] leading-snug">
                Systematic engineering translated into physical and digital touchpoints.
              </h2>
              <p className="text-sm md:text-base text-[#444440] dark:text-[#BBB] leading-relaxed mt-2">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Section 4: The Visual System Architecture */}
          <div className="bg-[#EAE8E2] dark:bg-[#181816] p-8 md:p-10 border border-[#111111]/10 dark:border-white/10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-[#111111]/10 dark:border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">
                  03 / DESIGN SYSTEM SPECIFICATION
                </span>
                <h3 className="text-2xl font-sans font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0] mt-1">
                  Visual Architecture & Tokens
                </h3>
              </div>
              <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888]">
                {project.visualSystem.gridConcept}
              </span>
            </div>

            {/* Color Palette Swatches */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A84] dark:text-[#888] block mb-3">
                CHROMATIC HARMONY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.visualSystem.primaryColors.map((color, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div
                      className="w-full h-16 rounded border border-black/10 dark:border-white/10 shadow-inner flex items-end p-2"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span
                        className="text-[10px] font-mono px-1 py-0.5 rounded font-bold"
                        style={{
                          backgroundColor:
                            color.hex === '#FFFFFF' || color.hex === '#FBF9F3'
                              ? '#000000'
                              : '#FFFFFF',
                          color:
                            color.hex === '#FFFFFF' || color.hex === '#FBF9F3'
                              ? '#FFFFFF'
                              : '#000000',
                        }}
                      >
                        {color.hex}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] dark:text-[#F5F4F0]">{color.name}</div>
                      <div className="text-[11px] text-[#8A8A84] dark:text-[#888]">{color.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Design Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#111111]/10 dark:border-white/10 text-xs">
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  TYPOGRAPHY SPEC
                </span>
                <span className="font-bold text-[#111111] dark:text-[#F5F4F0] text-sm block">
                  {project.visualSystem.fontPairing}
                </span>
              </div>
              <div>
                <span className="font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
                  CORE TENET
                </span>
                <p className="italic text-[#111111] dark:text-[#F5F4F0] font-serif text-sm">
                  "{project.visualSystem.designPhilosophy}"
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Applications & Collateral */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">
              04 / APPLICATIONS & TOUCHPOINTS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.applications.map((app, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-[#141412] border border-[#111111]/10 dark:border-white/10 flex flex-col justify-between gap-4"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[11px] text-[#8A8A84] dark:text-[#888] uppercase tracking-wider">
                      {app.category}
                    </span>
                    <span className="font-mono text-xs text-[#111111] dark:text-[#F5F4F0] font-bold">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#111111] dark:text-[#F5F4F0] tracking-tight mb-2">
                      {app.title}
                    </h4>
                    <p className="text-xs text-[#555550] dark:text-[#AAA] leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Outcome */}
          <div className="p-8 border-l-2 border-[#111111] dark:border-[#C8FF00] bg-white dark:bg-[#141412] flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A84] dark:text-[#888]">
              05 / MEASURED OUTCOME
            </span>
            <p className="text-base sm:text-lg font-serif text-[#111111] dark:text-[#F5F4F0] leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Bottom Navigation: Next Project CTA */}
          <div className="pt-10 border-t border-[#111111]/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888] uppercase tracking-widest block mb-1">
                NEXT CASE STUDY
              </span>
              <span className="text-xl font-bold uppercase text-[#111111] dark:text-[#F5F4F0]">
                {nextProject.number} — {nextProject.title}
              </span>
            </div>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="px-6 py-3.5 bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-200 border border-[#111111] dark:border-[#C8FF00]"
              data-cursor="arrow"
            >
              NEXT PROJECT →
            </button>
          </div>
        </>
      )}
    </div>
      </div>
    </div>
  );
};
