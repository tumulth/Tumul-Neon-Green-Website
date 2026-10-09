import React, { useState, useEffect } from 'react';

interface KrisalaHeroVideoProps {
  className?: string;
  timecodeSeconds?: number;
}

export const KrisalaHeroVideo: React.FC<KrisalaHeroVideoProps> = ({
  className = '',
  timecodeSeconds = 15,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(timecodeSeconds);

  useEffect(() => {
    if (timecodeSeconds !== currentTime) {
      setCurrentTime(timecodeSeconds);
      setIsPlaying(true);
    }
  }, [timecodeSeconds]);

  const handleOpenYouTube = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://www.youtube.com/watch?v=Y8ilDKs7T4w&t=${currentTime}s`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={`relative w-full flex flex-col gap-4 ${className}`}>
      {/* 16:9 Cinematic Video Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#0E1012] shadow-2xl group">
        {isPlaying ? (
          <iframe
            key={currentTime}
            src={`https://www.youtube.com/embed/Y8ilDKs7T4w?autoplay=1&start=${currentTime}&rel=0&modestbranding=1`}
            title="Krisala x Hiranandani — Ideas In White (Hero Film)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer overflow-hidden group/poster"
            role="button"
            tabIndex={0}
            aria-label="Play Krisala x Hiranandani Hero Film"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true);
            }}
          >
            {/* Custom High-Quality Poster Image */}
            <img
              src="/projects/krisala-hiranandani/youtube_hero_poster.jpg"
              alt="Ideas In White — Krisala x Hiranandani Hero Film Poster"
              className="w-full h-full object-cover transition-transform duration-700 group-hover/poster:scale-[1.02] filter brightness-95 group-hover/poster:brightness-100"
              loading="eager"
            />

            {/* Subtle Architectural Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase bg-white/90 dark:bg-black/75 backdrop-blur-md px-3 py-1 rounded border border-black/10 dark:border-white/15 text-[#151719] dark:text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span>OFFICIAL HERO FILM // 16:9 CINEMATIC</span>
            </div>

            {/* Top Right Duration / Timestamp */}
            <div className="absolute top-4 right-4 font-mono text-[10px] tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 hidden sm:block">
              RESOLUTION: 4K UHD // YOUTUBE EMBED
            </div>

            {/* Minimalist Styled Play Trigger (No generic red YouTube icon) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Outer animated halo ring */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/40 group-hover/poster:border-[#2D6A4F] transition-all duration-500 scale-90 group-hover/poster:scale-110 opacity-70 group-hover/poster:opacity-100" />

                {/* Center glassmorphic trigger */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-white/60 dark:border-white/20 shadow-xl flex items-center justify-center text-[#151719] dark:text-white transition-transform duration-300 group-hover/poster:scale-105 group-hover/poster:bg-[#2D6A4F] group-hover/poster:text-white">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-current transition-colors"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white drop-shadow-md">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#52B788] font-bold">
                  KRISALA × HIRANANDANI
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Ideas In White — The Landmark Vision Film
                </div>
              </div>
              <div className="font-mono text-[11px] px-3 py-1 rounded bg-white/20 backdrop-blur-md border border-white/20 hidden sm:block">
                CLICK TO LAUNCH FILM ↗
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Strip: Direct External Link to YouTube + Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-[#151719]/10 dark:border-white/10 bg-white dark:bg-[#121417] text-xs font-mono">
        <div className="flex flex-wrap items-center gap-4 text-[#737476] dark:text-[#AAA]">
          <div>
            <span className="text-[#888] block text-[9px] uppercase">SCALE</span>
            <span className="font-bold text-[#151719] dark:text-white">105+ Acres, Hinjawadi</span>
          </div>
          <div>
            <span className="text-[#888] block text-[9px] uppercase">COLLABORATION</span>
            <span className="font-bold text-[#151719] dark:text-white">With Bandish Studios</span>
          </div>
          <div>
            <span className="text-[#888] block text-[9px] uppercase">TOUCHPOINTS</span>
            <span className="font-bold text-[#2D6A4F] dark:text-[#52B788]">100+ Smart IoT Sensors</span>
          </div>
        </div>

        {/* Direct Working Link to YouTube */}
        <button
          onClick={handleOpenYouTube}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#151719] hover:bg-[#2D6A4F] text-white font-mono text-xs font-bold transition-all shadow-sm hover:scale-105 self-start sm:self-auto cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current text-[#D84A38]" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>OPEN IN YOUTUBE (4K UHD)</span>
          <span>↗</span>
        </button>
      </div>
    </div>
  );
};
