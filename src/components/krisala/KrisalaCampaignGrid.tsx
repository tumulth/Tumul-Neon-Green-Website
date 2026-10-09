import React, { useState } from 'react';
import {
  InstagramCampaignAsset,
  KRISALA_CAMPAIGN_ASSETS,
  KRISALA_METRICS_SUMMARY,
} from './krisalaData';

interface KrisalaCampaignGridProps {
  onPreviewImage: (src: string, caption: string) => void;
}

export const KrisalaCampaignGrid: React.FC<KrisalaCampaignGridProps> = ({
  onPreviewImage,
}) => {
  const [filter, setFilter] = useState<string>('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'ALL CAMPAIGN ASSETS (11)' },
    { id: 'TEASER', label: 'TEASERS & REVOLUTION (2)' },
    { id: 'HERITAGE', label: 'HERITAGE & INCEPTION (4)' },
    { id: 'ARCH', label: 'ARCHITECTURE & LINES (2)' },
    { id: 'FILM', label: 'KEYNOTE & FILM (3)' },
  ];

  const filteredAssets =
    filter === 'ALL'
      ? KRISALA_CAMPAIGN_ASSETS
      : KRISALA_CAMPAIGN_ASSETS.filter((a) => a.theme === filter);

  const handleOpenLink = (url: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Editorial Aggregate Performance Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-xl border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            MEASURABLE IMPACT
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#2D6A4F] dark:text-[#52B788] tracking-tight">
            1,00,000+
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            Organic Impressions
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            CAMPAIGN ASSETS
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#151719] dark:text-white tracking-tight">
            11
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            Reels & Carousels
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            TOTAL VERIFIED LIKES
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#151719] dark:text-white tracking-tight">
            {KRISALA_METRICS_SUMMARY.totalLikes.toLocaleString()}+
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            High-Intent Engagements
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            STUDIO COLLABORATION
          </span>
          <div className="text-2xl sm:text-3xl font-black text-[#151719] dark:text-white tracking-tight">
            BANDISH
          </div>
          <span className="text-[11px] font-mono text-[#2D6A4F] dark:text-[#52B788] font-bold">
            Graphic Ideation & Design
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border ${
              filter === tab.id
                ? 'bg-[#151719] text-white border-[#151719] dark:bg-[#2D6A4F] dark:border-[#2D6A4F] font-bold shadow-sm'
                : 'bg-white/90 dark:bg-[#181B20] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-[#2D6A4F]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Editorial Campaign Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="group flex flex-col justify-between rounded-xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Clickable Visual Thumbnail directly opening Instagram URL */}
            <a
              href={asset.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenLink(asset.url, e)}
              className="block relative aspect-[4/5] overflow-hidden bg-black/5 dark:bg-white/5 cursor-pointer group/thumb"
              title={`Open ${asset.headline} on Instagram`}
            >
              <img
                src={asset.localImage}
                alt={asset.headline}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

              {/* Top Tag Bar */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] tracking-widest uppercase bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-white border border-white/10">
                  ASSET {String(asset.index).padStart(2, '0')} // {asset.theme}
                </span>
                <span className="font-mono text-[10px] text-white/90 bg-black/65 backdrop-blur-md px-2 py-0.5 rounded">
                  {asset.postDate}
                </span>
              </div>

              {/* Hover Overlay Prompts */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold shadow-2xl transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform">
                  <span>OPEN ON INSTAGRAM</span>
                  <span>↗</span>
                </div>
              </div>

              {/* Expand Lightbox Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPreviewImage(
                    asset.localImage,
                    `${asset.headline} — ${asset.captionSnippet}`
                  );
                }}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] bg-white/90 text-black px-2.5 py-1 rounded backdrop-blur-sm shadow-md hover:bg-white z-10"
                title="Expand Full Resolution View"
              >
                EXPAND ↗
              </button>

              {/* Bold Editorial Metric Badge in Bottom Corner */}
              <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#52B788] font-bold">
                  EST. REACH
                </div>
                <div className="text-2xl font-black text-white leading-none tracking-tight">
                  {asset.views}
                </div>
              </div>
            </a>

            {/* Content & Metrics Body */}
            <div className="p-5 flex flex-col justify-between gap-4 flex-1">
              <div>
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpenLink(asset.url, e)}
                  className="group/title block cursor-pointer"
                >
                  <h4 className="text-lg font-black text-[#151719] dark:text-white leading-snug group-hover/title:text-[#2D6A4F] dark:group-hover/title:text-[#52B788] transition-colors">
                    {asset.headline}
                  </h4>
                </a>
                <p className="text-xs text-[#666] dark:text-[#AAA] font-mono mt-1.5 leading-relaxed line-clamp-2">
                  {asset.subheadline}
                </p>
              </div>

              {/* Social Engagement Metrics Strip with Prominent Button */}
              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4 text-[#151719] dark:text-white">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#D84A38] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-bold text-sm">{asset.likes}</span>
                    <span className="text-[10px] text-[#737476] dark:text-[#888]">likes</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#737476] dark:text-[#AAA] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                    </svg>
                    <span className="font-bold text-sm">{asset.comments}</span>
                    <span className="text-[10px] text-[#737476] dark:text-[#888]">comments</span>
                  </div>
                </div>

                {/* External Action Button */}
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpenLink(asset.url, e)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#2D6A4F] hover:bg-[#1f4a37] text-white text-[11px] font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
                >
                  <span>VIEW REEL</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
