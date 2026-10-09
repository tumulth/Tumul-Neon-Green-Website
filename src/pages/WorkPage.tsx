import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projects';
import { ProjectArt } from '../components/ProjectArt';

interface WorkPageProps {
  onBackToHome: () => void;
  onOpenCaseStudy: (project: Project) => void;
  onOpenContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onBackToHome,
  onOpenCaseStudy,
  onOpenContact,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'BRANDING' | 'SYSTEMS' | 'DIGITAL'>('ALL');
  const [viewMode, setViewMode] = useState<'GRID' | 'ROSTER'>('GRID');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'BRANDING') return p.category.includes('BRANDING') || p.category.includes('IDENTITY');
    if (filter === 'SYSTEMS') return p.category.includes('SYSTEM') || p.category.includes('COMMUNICATION');
    if (filter === 'DIGITAL') return p.category.includes('DIGITAL') || p.category.includes('UI') || p.category.includes('SOCIAL');
    return true;
  });

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24 bg-[#F7F7F2] dark:bg-[#0C0C0B] text-[#111111] dark:text-[#F5F4F0] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb & Back action */}
        <div className="flex items-center justify-between pb-8 border-b border-[#111111]/10 dark:border-white/10 text-xs font-mono">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-[#111111] dark:text-[#F5F4F0] hover:text-[#8A8A84] dark:hover:text-[#C8FF00] transition-colors uppercase font-bold"
            data-cursor="arrow"
          >
            <span>←</span>
            <span>BACK TO HOME</span>
          </button>

          <div className="flex items-center gap-2 text-[#8A8A84] dark:text-[#AAA]">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span>FULL CLIENT ROSTER · {PROJECTS.length} COMMISSIONS</span>
          </div>
        </div>

        {/* Page Headline */}
        <div className="my-10 md:my-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#8A8A84] dark:text-[#888] uppercase tracking-widest block mb-2">
              CLIENT ARCHIVE // 2023 — 2026
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#111111] dark:text-[#F5F4F0] leading-none font-sans">
              ALL WORKS
            </h1>
            <p className="mt-4 text-base sm:text-xl font-serif italic text-[#8A8A84] dark:text-[#AAA] max-w-xl">
              A curated archive of {PROJECTS.length} brand identity systems, corporate guidelines, motion campaigns, and packaging projects designed by Tumul Thakur.
            </p>
          </div>

          {/* Controls: Filter Pills + Grid/Roster Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-white dark:bg-[#181816] rounded-full border border-black/10 dark:border-white/15 shadow-sm">
              {(['ALL', 'BRANDING', 'SYSTEMS', 'DIGITAL'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-150 ${
                    filter === tab
                      ? 'bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] font-bold'
                      : 'text-[#111111] dark:text-[#F5F4F0] hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-[#181816] rounded-full border border-black/10 dark:border-white/15 text-xs font-mono">
              <button
                onClick={() => setViewMode('GRID')}
                className={`px-3 py-1 rounded-full ${
                  viewMode === 'GRID'
                    ? 'bg-[#111111] dark:bg-[#C8FF00] text-white dark:text-black font-bold'
                    : 'text-[#666] dark:text-[#AAA]'
                }`}
              >
                GRID
              </button>
              <button
                onClick={() => setViewMode('ROSTER')}
                className={`px-3 py-1 rounded-full ${
                  viewMode === 'ROSTER'
                    ? 'bg-[#111111] dark:bg-[#C8FF00] text-white dark:text-black font-bold'
                    : 'text-[#666] dark:text-[#AAA]'
                }`}
              >
                INDEX
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Uniform, Symmetrical, Beautiful 2-Column Grid */}
        {viewMode === 'GRID' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                data-cursor="view"
                className="group cursor-pointer flex flex-col gap-4"
              >
                {/* Uniform Rounded Mockup Card Frame */}
                <div className="w-full bg-[#EFEFEA] dark:bg-[#181816] p-4 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[36px] border border-black/10 dark:border-white/10 overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-300">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-[#121210]">
                    <ProjectArt
                      projectId={project.id}
                      className="w-full h-[320px] sm:h-[380px] md:h-[420px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      variant="hero"
                    />
                  </div>
                </div>

                {/* Symmetrical Metadata Strip Below */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#111111] dark:text-[#F5F4F0] group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xs text-[#666] dark:text-[#A0A09B] font-serif italic mt-0.5">
                      "{project.heroTagline}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#666] dark:text-[#AAA] shrink-0">
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1C1C1A] border border-black/10 dark:border-white/15">
                      {project.categoryTag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1C1C1A] border border-black/10 dark:border-white/15">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Client Index Roster Table */
          <div className="bg-white dark:bg-[#181816] rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#1E1E1B] text-[11px] font-mono text-[#8A8A84] dark:text-[#AAA] uppercase">
                    <th className="py-4 px-6">NO.</th>
                    <th className="py-4 px-6">CLIENT / ENTITY</th>
                    <th className="py-4 px-6">DISCIPLINE</th>
                    <th className="py-4 px-6">YEAR</th>
                    <th className="py-4 px-6">DELIVERABLES</th>
                    <th className="py-4 px-6 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/10 text-xs">
                  {filteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => onOpenCaseStudy(project)}
                      className="hover:bg-[#F5F4F0] dark:hover:bg-[#22221E] cursor-pointer transition-colors group"
                    >
                      <td className="py-4 px-6 font-mono font-bold text-[#8A8A84] dark:text-[#777] group-hover:text-black dark:group-hover:text-white">
                        {project.number}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-sm text-[#111111] dark:text-[#F5F4F0] uppercase font-sans">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-[#8A8A84] dark:text-[#888]">{project.client}</div>
                      </td>
                      <td className="py-4 px-6 font-mono text-[#555] dark:text-[#BBB]">
                        {project.categoryTag}
                      </td>
                      <td className="py-4 px-6 font-mono text-[#8A8A84] dark:text-[#777]">
                        {project.year}
                      </td>
                      <td className="py-4 px-6 text-[#555] dark:text-[#BBB] max-w-xs truncate">
                        {project.deliverables.slice(0, 2).join(', ')}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#111111] dark:text-[#F5F4F0] group-hover:text-[#A8EB12] dark:group-hover:text-[#C8FF00]">
                          <span>CASE STUDY</span>
                          <span>→</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-20 p-10 md:p-14 rounded-3xl bg-white dark:bg-[#181816] border border-black/10 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#8A8A84] dark:text-[#888] uppercase tracking-wider block mb-1">
              COMMISSION AN IDENTITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#111111] dark:text-[#F5F4F0]">
              Planning a brand launch or looking to formalize your corporate guidelines?
            </h3>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-all whitespace-nowrap shadow-md"
            data-cursor="arrow"
          >
            START A CONVERSATION →
          </button>
        </div>
      </div>
    </div>
  );
};
