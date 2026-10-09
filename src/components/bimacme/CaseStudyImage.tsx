import React, { useState } from 'react';
import { CaseStudyAsset } from './bimacmeAssets';

interface CaseStudyImageProps {
  asset: CaseStudyAsset;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const CaseStudyImage: React.FC<CaseStudyImageProps> = ({
  asset,
  priority = false,
  className = '',
  imageClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`flex flex-col gap-3 group select-none ${className}`}>
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-[#EAE8E2] dark:bg-[#141412] border border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        {!hasError ? (
          <img
            src={asset.src}
            alt={asset.alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-auto object-contain transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-[1.01] ${imageClassName}`}
          />
        ) : (
          /* Subtle Editorial Reserved Slot when asset file is pending */
          <div className="w-full min-h-[260px] sm:min-h-[340px] md:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-[#E8E6E0] dark:bg-[#121210] border border-dashed border-[#111111]/20 dark:border-white/15">
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#8A8A84] dark:text-[#777] uppercase tracking-widest">
              <span>ASSET ARCHIVE // {asset.number}</span>
              <span className="w-2 h-2 rounded-full bg-[#3D7FE2]/60" />
            </div>

            <div className="flex flex-col gap-1 max-w-md">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D7FE2] dark:text-[#70A5F5] font-semibold">
                {asset.title}
              </span>
              <p className="text-sm font-sans text-[#555] dark:text-[#999] leading-snug">
                {asset.caption}
              </p>
            </div>

            <div className="font-mono text-[10px] text-[#8A8A84] dark:text-[#666] tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A84]" />
              <span>Drop {asset.src.split('/').pop()} into public/projects/bimacme/</span>
            </div>
          </div>
        )}

        {/* Loading subtle skeleton if not loaded yet */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/40 animate-pulse" />
        )}
      </div>

      {/* Editorial Caption Metadata */}
      <figcaption className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 px-0.5 pt-1">
        <div className="flex items-baseline gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider">
          <span className="text-[#3D7FE2] dark:text-[#70A5F5] font-bold">
            {asset.number}
          </span>
          <span className="text-[#8A8A84] dark:text-[#777]">/</span>
          <span className="font-semibold text-[#111111] dark:text-[#F5F4F0] uppercase">
            {asset.title}
          </span>
        </div>
        <p className="text-xs text-[#555550] dark:text-[#999] font-sans leading-relaxed max-w-md sm:text-right">
          {asset.caption}
        </p>
      </figcaption>
    </figure>
  );
};
