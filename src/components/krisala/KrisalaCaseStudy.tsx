import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import {
  KRISALA_KEYFRAMES,
  KRISALA_METRICS_SUMMARY,
  MotionKeyframe,
} from './krisalaData';
import { KrisalaHeroVideo } from './KrisalaHeroVideo';
import { KrisalaCampaignGrid } from './KrisalaCampaignGrid';

interface KrisalaCaseStudyProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
}

export const KrisalaCaseStudy: React.FC<KrisalaCaseStudyProps> = ({
  project,
  onSelectProject,
}) => {
  const [activeChapter, setActiveChapter] = useState<string>('ALL');
  const [videoSeekSeconds, setVideoSeekSeconds] = useState<number>(15);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  // Next project in circular roster
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const chapters = [
    { id: 'ALL', label: 'ALL CHAPTERS (05)' },
    { id: 'krisala-ch-01', label: '01 VISION & INTRODUCTION' },
    { id: 'krisala-ch-02', label: '02 THE HERO FILM' },
    { id: 'krisala-ch-03', label: '03 GRAPHIC SYSTEM & MOTION' },
    { id: 'krisala-ch-04', label: '04 DIGITAL CAMPAIGN & REACH' },
    { id: 'krisala-ch-05', label: '05 CLOSING & CREDITS' },
  ];

  const handleScrollToChapter = (chapterId: string) => {
    setActiveChapter(chapterId);
    if (chapterId === 'ALL') {
      const el = document.getElementById('krisala-ch-01');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(chapterId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeekVideo = (seconds: number) => {
    setVideoSeekSeconds(seconds);
    const filmEl = document.getElementById('krisala-ch-02');
    filmEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenExternal = (url: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex flex-col select-text font-sans bg-[#FBFBFB] dark:bg-[#0B0D0F] text-[#151719] dark:text-[#F3F4F6] transition-colors duration-300">
      {/* ==================================================
          01 — INTRODUCTION (Cover & Architectural Opening)
          ================================================== */}
      <section
        id="krisala-ch-01"
        className="pb-16 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-10 scroll-mt-20"
      >
        {/* Eyebrow & Category Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#2D6A4F] dark:text-[#52B788] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F] dark:bg-[#52B788] animate-pulse" />
            <span>KRISALA × HIRANANDANI // NORTH HINJAWADI, PUNE</span>
          </div>
          <div className="font-mono text-xs text-[#737476] dark:text-[#9A9BA0] flex items-center gap-2">
            <span>VISUAL COMMUNICATION</span>
            <span>·</span>
            <span>MOTION GRAPHICS</span>
            <span>·</span>
            <span>CAMPAIGN STRATEGY</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-[#737476] dark:text-[#888] mb-1">
              TOWNSHIP COLLABORATION 2025
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#151719] dark:text-white leading-none">
              KRISALA × HIRANANDANI
            </h1>
          </div>

          <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#2D6A4F] dark:text-[#52B788] tracking-tight mt-2">
            "IDEAS IN WHITE."
          </p>

          <p className="text-base sm:text-xl text-[#444] dark:text-[#CCC] max-w-4xl leading-relaxed mt-2 font-light">
            For a landmark 105-acre sustainable township in North Hinjawadi, Pune, visual communication had to convey resort-style architecture alongside complex smart-city engineering. In collaboration with Bandish Studios, I art-directed the on-screen motion graphics and data telemetry overlays for the 4K hero film, designed neoclassical architectural line art, and developed the 11-asset social media campaign that generated over 1,00,000+ organic impressions.
          </p>
        </div>

        {/* Strategic Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#151719]/10 dark:border-white/10 text-xs font-mono">
          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              CLIENTS
            </span>
            <span className="font-bold text-[#151719] dark:text-white">
              Krisala Developers × Hiranandani Communities
            </span>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              LOCATION & SCALE
            </span>
            <span className="font-bold text-[#2D6A4F] dark:text-[#52B788]">
              North Hinjawadi, Pune (105+ Acres)
            </span>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              CREDIT COLLABORATION
            </span>
            <span className="font-bold text-[#151719] dark:text-white">
              With Bandish Studios
            </span>
          </div>

          <div>
            <span className="text-[#737476] dark:text-[#888] uppercase tracking-wider block mb-1">
              ROLE
            </span>
            <span className="font-bold text-[#151719] dark:text-white">
              Graphic Ideation, Motion & Campaign
            </span>
          </div>
        </div>

        {/* Cinematic Architectural Still Hero Background */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[#151719]/15 dark:border-white/15 shadow-2xl bg-white dark:bg-[#121417] group">
          <img
            src="/projects/krisala-hiranandani/youtube_hero_poster.jpg"
            alt="Ideas In White — Architectural Pure White Space"
            className="w-full h-auto object-cover max-h-[640px] transition-transform duration-700 group-hover:scale-[1.01]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase bg-[#2D6A4F] px-2.5 py-1 rounded w-fit mb-2 font-bold shadow-md">
                IDEAS IN WHITE // ARCHITECTURAL CANVAS
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/95 max-w-xl">
                Purity of space, biophilic green gradients, and neoclassical architectural scale — conceptualizing a living environment ahead of its time.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  handleOpenExternal(
                    'https://www.youtube.com/watch?v=Y8ilDKs7T4w&t=15s'
                  )
                }
                className="text-[11px] font-mono px-3.5 py-1.5 rounded bg-[#2D6A4F] text-white hover:bg-[#1f4a37] shadow-md transition-colors"
              >
                WATCH FILM ↗
              </button>
              <button
                onClick={() =>
                  setPreviewImage({
                    src: '/projects/krisala-hiranandani/youtube_hero_poster.jpg',
                    caption:
                      'Krisala x Hiranandani — Ideas In White titular architectural canvas.',
                  })
                }
                className="text-[11px] font-mono px-3.5 py-1.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-colors"
              >
                EXPAND POSTER ↗
              </button>
            </div>
          </div>
        </div>

        {/* Narrative Chapter Navigation Pills (Smooth scrolling down the case study) */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleScrollToChapter(ch.id)}
              className={`px-3.5 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                activeChapter === ch.id
                  ? 'bg-[#151719] text-white border-[#151719] dark:bg-[#2D6A4F] dark:border-[#2D6A4F] font-bold shadow-sm'
                  : 'bg-white/90 dark:bg-[#181B20] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-[#2D6A4F] hover:text-[#151719]'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </section>

      {/* ==================================================
          02 — THE FILM (Hero Video Embed)
          ================================================== */}
      <section
        id="krisala-ch-02"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-10 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#2D6A4F] dark:text-[#52B788] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20">
              02 // 05
            </span>
            <span>—</span>
            <span>THE VISION ON SCREEN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            SHAPING THE NARRATIVE.
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-[#2D6A4F] dark:text-[#52B788]">
            "Bridging smart city technology with emotional resonance."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            The hero film required a visual language that could seamlessly bridge raw data—smart city sensors, IoT integration, and environmental metrics—with the emotional resonance of a forever home. Every on-screen graphic, typography treatment, and overlay was ideated and designed to enhance the cinematic storytelling without overpowering the architecture.
          </p>
        </header>

        {/* Prominent 16:9 Hero Video Player with Custom Poster */}
        <KrisalaHeroVideo timecodeSeconds={videoSeekSeconds} />
      </section>

      {/* ==================================================
          03 — GRAPHIC SYSTEM & MOTION
          ================================================== */}
      <section
        id="krisala-ch-03"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#2D6A4F] dark:text-[#52B788] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20">
              03 // 05
            </span>
            <span>—</span>
            <span>THE GRAPHIC SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            DATA, DESIGNED.
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-[#2D6A4F] dark:text-[#52B788]">
            "Minimalist telemetry and fine lines visualizing unseen engineering."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            To communicate the township's 100+ digital touchpoints, 50% renewable energy goals, and architectural flow, a custom suite of motion graphics and visual elements was developed. The graphics remain minimal, utilizing fine lines, clean typography, and subtle tracking animations to visualize the unseen technology powering the city.
          </p>
        </header>

        {/* Visual Keyframes Gallery: Minimalist, Architectural Motion Stills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KRISALA_KEYFRAMES.map((frame: MotionKeyframe) => (
            <div
              key={frame.id}
              onClick={() =>
                setPreviewImage({
                  src: frame.image,
                  caption: `${frame.title} — ${frame.subtitle}`,
                })
              }
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Keyframe Stills Image */}
              <div className="relative aspect-video overflow-hidden bg-black/5 dark:bg-white/5">
                <img
                  src={frame.image}
                  alt={frame.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/10 font-bold">
                    FRAME // {frame.number}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-[10px] bg-white/95 dark:bg-black/90 text-black dark:text-white px-3 py-1 rounded-md shadow-md opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold">
                  <span>EXPAND PREVIEW</span>
                  <span>↗</span>
                </div>
              </div>

              {/* Minimal Meta & Title */}
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#2D6A4F] dark:text-[#52B788] font-bold">
                  <span>MOTION KEYFRAME {frame.number}</span>
                  <span className="text-[#888] font-normal">IDEAS IN WHITE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#151719] dark:text-white tracking-tight">
                  {frame.title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#BBB] leading-relaxed font-light">
                  {frame.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          04 — DIGITAL CAMPAIGN & REACH (Social links and metrics)
          ================================================== */}
      <section
        id="krisala-ch-04"
        className="py-16 md:py-24 border-b border-[#151719]/10 dark:border-white/10 flex flex-col gap-10 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#2D6A4F] dark:text-[#52B788] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20">
              04 // 05
            </span>
            <span>—</span>
            <span>SOCIAL ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151719] dark:text-white leading-tight">
            MEASURABLE IMPACT.
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-[#2D6A4F] dark:text-[#52B788]">
            "Translating 'Ideas in White' into high-reach digital visibility."
          </p>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#BBB] leading-relaxed max-w-3xl mt-1 font-light">
            The visual system was translated into a high-reach social media campaign. Across reels and posts, the graphic elements maintained the premium 'Ideas in White' aesthetic while being optimized for mobile engagement, generating over 1,00,000+ organic impressions across 11 campaign assets.
          </p>
        </header>

        {/* Sleek, Data-Driven Grid with 11 Verified Working Campaign Assets */}
        <KrisalaCampaignGrid
          onPreviewImage={(src, caption) => setPreviewImage({ src, caption })}
        />
      </section>

      {/* ==================================================
          05 — CLOSING / CREDIT (Bandish Studios Partnership)
          ================================================== */}
      <section
        id="krisala-ch-05"
        className="py-16 md:py-24 flex flex-col gap-12 scroll-mt-20"
      >
        <header className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#2D6A4F] dark:text-[#52B788] font-bold uppercase">
            <span className="px-2.5 py-0.5 rounded bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20">
              05 // 05
            </span>
            <span>—</span>
            <span>PROJECT SYNTHESIS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151719] dark:text-white leading-none">
            DESIGNED FOR THE FUTURE.
          </h2>

          <p className="text-lg sm:text-2xl font-serif italic text-[#2D6A4F] dark:text-[#52B788] mt-1">
            "A visual communication system built for clarity, scale, and sustainable growth."
          </p>
        </header>

        {/* Dedicated Bandish Studios Collaboration Box */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#2D6A4F]/30 bg-gradient-to-br from-[#2D6A4F]/10 via-transparent to-[#151719]/5 dark:from-[#2D6A4F]/15 dark:via-[#121417] dark:to-[#0B0D0F] shadow-xl flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#2D6A4F] dark:text-[#52B788] font-bold block mb-1">
                OFFICIAL COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#151719] dark:text-white uppercase tracking-tight">
                IN COLLABORATION WITH BANDISH STUDIOS.
              </h3>
            </div>
            <div className="font-mono text-xs text-[#737476] dark:text-[#888] bg-white/80 dark:bg-black/50 px-3.5 py-2 rounded border border-black/10 dark:border-white/10 self-start sm:self-auto">
              BANDISH STUDIOS // PUNE
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#444] dark:text-[#CCC] leading-relaxed max-w-3xl">
            Thank you to the Bandish Studios team for the partnership and the opportunity to lead the graphic ideation and design for this landmark project.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono">
            <div>
              <span className="text-[#888] block text-[9px] uppercase mb-0.5">
                TOWNSHIP
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                Ideas In White
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[9px] uppercase mb-0.5">
                DISCIPLINE
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                Motion & Art Direction
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[9px] uppercase mb-0.5">
                TOTAL ASSETS
              </span>
              <span className="font-bold text-[#2D6A4F] dark:text-[#52B788]">
                1 Hero Film + 11 Posts
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[9px] uppercase mb-0.5">
                YEAR
              </span>
              <span className="font-bold text-[#151719] dark:text-white">
                2025
              </span>
            </div>
          </div>
        </div>

        {/* Next Project Roster Navigation */}
        <div className="pt-8 border-t border-[#151719]/10 dark:border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs text-[#737476] dark:text-[#888]">
            <span className="uppercase tracking-widest">
              NEXT CASE STUDY // {nextProject.number}
            </span>
            <span className="text-[#2D6A4F] dark:text-[#52B788] font-bold">
              06 / 07 PROJECTS
            </span>
          </div>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group text-left p-6 sm:p-8 rounded-xl border border-[#151719]/10 dark:border-white/10 bg-white dark:bg-[#121417] hover:border-[#2D6A4F] dark:hover:border-[#52B788] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs text-[#2D6A4F] dark:text-[#52B788] font-bold block mb-1">
                PROJECT {nextProject.number} · {nextProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#151719] dark:text-white group-hover:text-[#2D6A4F] dark:group-hover:text-[#52B788] transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm font-serif italic text-[#666] dark:text-[#AAA] mt-1 max-w-xl">
                "{nextProject.heroTagline}"
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#151719] dark:text-white font-bold group-hover:translate-x-1 transition-transform self-start sm:self-auto shrink-0">
              <span>VIEW CASE STUDY</span>
              <span>→</span>
            </div>
          </button>
        </div>
      </section>

      {/* Lightbox Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-10 right-0 font-mono text-xs text-white/80 hover:text-white bg-white/10 px-3 py-1 rounded cursor-pointer"
            >
              CLOSE [ESC] ✕
            </button>
            <img
              src={previewImage.src}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="mt-3 text-xs sm:text-sm font-mono text-white/80 text-center max-w-2xl">
              {previewImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
