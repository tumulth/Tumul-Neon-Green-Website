import React, { useState } from 'react';
import {
  LiveSocialAsset,
  LIVE_CAMPAIGN_ASSETS,
  SOCIAL_METRICS_SUMMARY,
} from './socialMediaData';

interface SocialMediaArchiveGridProps {
  onPreviewImage: (src: string, caption: string) => void;
}

export const SocialMediaArchiveGrid: React.FC<SocialMediaArchiveGridProps> = ({
  onPreviewImage,
}) => {
  const [filter, setFilter] = useState<string>('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'ALL CAMPAIGN ASSETS (20)' },
    { id: 'BANDHAN BANK', label: 'BANDHAN BANK REELS (10)' },
    { id: 'SMART BAZAAR', label: 'SMART BAZAAR CREATIVES (10)' },
  ];

  const filteredAssets =
    filter === 'ALL'
      ? LIVE_CAMPAIGN_ASSETS
      : LIVE_CAMPAIGN_ASSETS.filter((a) => a.client === filter);

  const handleOpenLink = (url: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Editorial Aggregate Performance Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-lg">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            CAMPAIGN ASSETS
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#151719] dark:text-white tracking-tight">
            20
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            11 Reels · 9 Carousels
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            TOTAL LIKES
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#D84A38] dark:text-[#FF6B6B] tracking-tight">
            300K+
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            Direct User Endorsements
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            TOTAL VIEWS
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#151719] dark:text-white tracking-tight">
            90M+
          </div>
          <span className="text-[11px] font-mono text-[#666] dark:text-[#AAA]">
            Video Plays & Impressions
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#737476] dark:text-[#888] block mb-1">
            STUDIO PARTNER
          </span>
          <div className="text-2xl sm:text-3xl font-black text-[#151719] dark:text-white tracking-tight">
            BANDISH
          </div>
          <span className="text-[11px] font-mono text-[#2D6A4F] dark:text-[#52B788] font-bold">
            Content Ideation & Motion
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
              filter === tab.id
                ? 'bg-[#151719] text-white border-[#151719] dark:bg-white dark:text-[#111] dark:border-white font-bold shadow-md'
                : 'bg-white/90 dark:bg-[#181B20] text-[#555] dark:text-[#AAA] border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white'
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
            className="group flex flex-col justify-between rounded-2xl overflow-hidden border border-[#151719]/15 dark:border-white/15 bg-white dark:bg-[#121417] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Visual Thumbnail opening Instagram URL directly */}
            <a
              href={asset.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenLink(asset.url, e)}
              className="block relative aspect-square overflow-hidden bg-black/5 dark:bg-white/5 cursor-pointer group/thumb"
              title={`View ${asset.client} ${asset.type.toLowerCase()} on Instagram`}
            >
              <img
                src={asset.image}
                alt={asset.headline}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top Meta Badges */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
                <span
                  className={`font-mono text-[10px] tracking-widest font-black uppercase px-2.5 py-1 rounded shadow-md border ${
                    asset.type === 'REEL'
                      ? 'bg-[#D84A38] text-white border-white/20'
                      : 'bg-[#151719] text-white border-white/20 dark:bg-white dark:text-black'
                  }`}
                >
                  {asset.type === 'REEL' ? '▶ REEL' : '✦ POST'}
                </span>

                <span className="font-mono text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-white border border-white/15 font-bold">
                  {asset.client}
                </span>
              </div>

              {/* Bottom Overlay Action & Expand Trigger */}
              <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between text-white font-mono text-[11px]">
                <span className="font-bold drop-shadow">
                  {asset.date}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onPreviewImage(
                      asset.image,
                      `${asset.client} (${asset.type}) — ${asset.headline}`
                    );
                  }}
                  className="bg-white/95 dark:bg-black/80 hover:bg-white text-black dark:text-white px-2.5 py-1 rounded shadow-md text-[10px] font-bold transition-transform hover:scale-105 cursor-pointer"
                  title="Expand thumbnail preview"
                >
                  PREVIEW ↗
                </button>
              </div>
            </a>

            {/* Editorial Content Body */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#737476] dark:text-[#9A9BA0]">
                  <span className="font-bold uppercase tracking-wider text-[#151719] dark:text-white">
                    ASSET // #{String(asset.index).padStart(2, '0')}
                  </span>
                  <span>{asset.date}</span>
                </div>

                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpenLink(asset.url, e)}
                  className="text-base font-bold text-[#151719] dark:text-white leading-snug group-hover:text-[#D84A38] dark:group-hover:text-[#FF6B6B] transition-colors line-clamp-2"
                >
                  {asset.headline}
                </a>

                <p className="text-xs text-[#555] dark:text-[#AAA] leading-relaxed line-clamp-2 font-light">
                  {asset.fullCaption}
                </p>
              </div>

              {/* Card Action Footer without stats */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-xs font-mono text-[#666] dark:text-[#AAA]">
                  <span className="font-bold text-[#151719] dark:text-white uppercase tracking-wider text-[11px]">
                    {asset.client}
                  </span>
                  <span>·</span>
                  <span className="uppercase text-[10px] tracking-wider text-[#D84A38] dark:text-[#FF6B6B] font-bold">
                    {asset.type === 'REEL' ? 'MOTION REEL' : 'CAROUSEL'}
                  </span>
                </div>

                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpenLink(asset.url, e)}
                  className="inline-flex items-center gap-1 font-bold px-3 py-1.5 rounded-lg bg-[#151719] hover:bg-black dark:bg-white dark:hover:bg-white/90 text-white dark:text-black text-[11px] transition-all shadow-sm group-hover:scale-105 shrink-0"
                >
                  <span>VIEW ON IG</span>
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
