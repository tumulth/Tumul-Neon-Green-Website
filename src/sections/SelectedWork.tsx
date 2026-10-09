import React from 'react';
import { Project, PROJECTS } from '../data/projects';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { ProjectArt } from '../components/ProjectArt';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
  onViewAllWork: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenCaseStudy,
  onViewAllWork,
}) => {
  // Top 4 curated projects for the stacked card deck
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="selected-work" className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/10 dark:border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-serif italic text-base sm:text-lg text-[#8A8A84] dark:text-[#A0A09B]">
              / Best Projects
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0]">
            Selected Works
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onViewAllWork}
            className="px-5 py-2.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-all shadow-sm flex items-center gap-2 group"
            data-cursor="arrow"
          >
            <span>SHOW ALL WORK</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* React Bits <ScrollStack /> Component Integration */}
      <div className="w-full">
        <ScrollStack
          useWindowScroll={true}
          className="w-full"
          itemDistance={70}
          itemScale={0.035}
          itemStackDistance={24}
          stackPosition="15%"
          scaleEndPosition="8%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
        >
          {featuredProjects.map((project, index) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="!p-6 sm:!p-8 md:!p-10 !rounded-[28px] sm:!rounded-[36px] bg-[#FFFFFF] dark:bg-[#161614] border border-black/10 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div
                onClick={() => onOpenCaseStudy(project)}
                className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 select-none"
              >
                {/* Left Column: Typography, Narrative, & Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Tagline / Spec */}
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
                        <span className="font-mono text-xs font-bold text-[#111111] dark:text-[#C8FF00]">
                          /0{index + 1}
                        </span>
                        <span className="text-[#888] dark:text-[#666] font-mono text-xs">·</span>
                        <span className="font-mono text-xs text-[#777] dark:text-[#AAA] uppercase tracking-wider">
                          {project.categoryTag}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#888] dark:text-[#777]">
                        {project.year}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Poetic Tagline */}
                    <p className="mt-3 font-serif italic text-base sm:text-xl text-[#555] dark:text-[#B0B0A8] leading-relaxed max-w-xl">
                      "{project.heroTagline}"
                    </p>

                    {/* Deliverables Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.deliverables.slice(0, 3).map((item, dIndex) => (
                        <span
                          key={dIndex}
                          className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#666] dark:text-[#BBB]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#888] dark:text-[#777] uppercase tracking-wider">
                      Client: {project.client}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCaseStudy(project);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] text-xs font-mono font-bold uppercase tracking-wider group-hover:scale-105 transition-transform"
                      data-cursor="view"
                    >
                      <span>VIEW CASE STUDY</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Preview Container */}
                <div className="w-full lg:w-[46%] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md bg-white dark:bg-[#10100E] shrink-0">
                  <ProjectArt
                    projectId={project.id}
                    className="w-full h-[240px] sm:h-[300px] md:h-[340px]"
                    variant="card"
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Bottom Action: Navigate to Full Archive */}
      <div className="mt-14 text-center">
        <button
          onClick={onViewAllWork}
          className="px-8 py-4 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-all shadow-md inline-flex items-center gap-3 group"
          data-cursor="arrow"
        >
          <span>EXPLORE ALL PROJECTS</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
};
