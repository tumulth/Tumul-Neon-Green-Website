import React, { useState } from 'react';
import { VideoCaseStudyItem } from './bimacmeAssets';

interface VideoCaseStudyProps {
  video: VideoCaseStudyItem;
  className?: string;
}

export const VideoCaseStudy: React.FC<VideoCaseStudyProps> = ({
  video,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  // High quality YouTube thumbnail with fallback
  const thumbUrl = thumbError
    ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className={`group flex flex-col gap-4 border border-[#111111]/10 dark:border-white/10 bg-[#EFEFEA] dark:bg-[#141412] p-4 sm:p-5 transition-colors duration-300 ${className}`}
    >
      {/* 16:9 Video Embed / Interactive Preview Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-black border border-black/10 dark:border-white/10">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
            role="button"
            tabIndex={0}
            aria-label={`Play ${video.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true);
            }}
          >
            <img
              src={thumbUrl}
              alt={`${video.title} video thumbnail`}
              onError={() => setThumbError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105 filter brightness-90 group-hover/thumb:brightness-100"
            />

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FE2] animate-pulse" />
              <span>{video.number} // VIDEO STUDY</span>
            </div>

            {/* Center Play Trigger */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-black dark:text-white shadow-2xl transition-transform duration-300 group-hover/thumb:scale-110">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-current text-[#111111] dark:text-[#F5F4F0]"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Floating Indicator */}
            <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-wider text-white/80 bg-black/50 px-2 py-0.5 rounded">
              CLICK TO PLAY
            </div>
          </div>
        )}
      </div>

      {/* Video Metadata & External Link */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pt-1">
        <div className="flex flex-col gap-1 max-w-xl">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#3D7FE2] dark:text-[#70A5F5] font-semibold tracking-wider">
            <span>{video.number}</span>
            <span>·</span>
            <span>{video.label}</span>
          </div>
          <h3 className="font-sans font-bold text-lg sm:text-xl text-[#111111] dark:text-[#F5F4F0] tracking-tight leading-snug">
            {video.title}
          </h3>
          {video.description && (
            <p className="text-xs sm:text-sm text-[#555550] dark:text-[#AAA] font-sans leading-relaxed mt-0.5">
              {video.description}
            </p>
          )}
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start sm:self-auto inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#111111] dark:text-[#F5F4F0] hover:text-[#3D7FE2] dark:hover:text-[#70A5F5] transition-colors py-1 px-2.5 rounded border border-[#111111]/15 dark:border-white/15"
          data-cursor="arrow"
        >
          <span>OPEN ON YOUTUBE</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};
