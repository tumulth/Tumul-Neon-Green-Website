import React from 'react';

interface ProjectArtProps {
  projectId: string;
  className?: string;
  variant?: 'hero' | 'card' | 'gallery' | 'detail';
}

export const ProjectArt: React.FC<ProjectArtProps> = ({ projectId, className = '', variant = 'card' }) => {
  switch (projectId) {
    case 'bimacme':
      return (
        <div className={`relative overflow-hidden bg-[#0C1D49] select-none group/art ${className}`}>
          <img
            src="/projects/bimacme/image-01.jpg"
            alt="BIMACME Brand Identity"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/art:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FE2]" />
            <span>BIMACME // 01</span>
          </div>
        </div>
      );

    case 'sangreen-logistics':
      return (
        <div className={`relative overflow-hidden bg-[#F2F4F7] select-none group/art flex items-center justify-center ${className}`}>
          <img
            src="/projects/sangreen/imgi_3_image.webp"
            alt="Sangreen Logistics Brand Guidelines Cover"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/art:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#274482]/90 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#459652]" />
            <span>SANGREEN // 02</span>
          </div>
        </div>
      );

    case 'sangreen-future-renewables':
      return (
        <div className={`relative overflow-hidden bg-white dark:bg-[#0A161A] select-none flex items-center justify-center ${className}`}>
          {/* Authentic Brand Identity Guidelines Hero Artwork */}
          <img
            src="/projects/sangreen-renewables/imgi_3_image.webp"
            alt="Sangreen Future Renewables Brand Identity Guidelines 2025"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#3faca2]/95 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>RENEWABLES // 2025</span>
          </div>
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-mono text-[9px] tracking-wider pointer-events-none drop-shadow">
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">BANDISH STUDIOS</span>
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">LIGHT SEA GREEN #3FACA2</span>
          </div>
        </div>
      );

    case 'sidhivinayak-precast':
      return (
        <div className={`relative overflow-hidden bg-[#15181C] select-none flex items-center justify-center ${className}`}>
          {/* Authentic Siddhivinayak Precast Brand Kit Cover */}
          <img
            src="/projects/siddhivinayak-precast/cover-brandkit.jpg"
            alt="Siddhivinayak Precast Brand Kit on Concrete Architecture"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#EC6E2F]/95 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>PRECAST // BRAND KIT</span>
          </div>
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-mono text-[9px] tracking-wider pointer-events-none drop-shadow">
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">BANDISH STUDIOS</span>
            <span className="bg-[#28585D]/80 px-2 py-0.5 rounded backdrop-blur-sm">ORANGE #EC6E2F</span>
          </div>
        </div>
      );

    case 'krisala-hiranandani':
      return (
        <div className={`relative overflow-hidden bg-white select-none flex items-center justify-center ${className}`}>
          {/* Authentic Krisala x Hiranandani "Ideas In White" Motion Poster */}
          <img
            src="/projects/krisala-hiranandani/youtube_hero_poster.jpg"
            alt="Krisala x Hiranandani — Ideas In White"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#2D6A4F]/95 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] animate-pulse" />
            <span>IDEAS IN WHITE // MOTION & CAMPAIGN</span>
          </div>
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-mono text-[9px] tracking-wider pointer-events-none drop-shadow">
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">BANDISH STUDIOS</span>
            <span className="bg-[#2D6A4F]/80 px-2 py-0.5 rounded backdrop-blur-sm">105+ ACRES PUNE</span>
          </div>
        </div>
      );

    case 'social-media-creatives':
      return (
        <div className={`relative overflow-hidden bg-[#121417] select-none flex items-center justify-center ${className}`}>
          {/* Authentic Social Media Creatives Cover Slide */}
          <img
            src="/projects/social-media-creatives/01-cover-hero.png"
            alt="Social Media Creatives (2024–2025) Cover"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#D84A38]/95 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>2024 — 2025 // CREATIVES</span>
          </div>
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-mono text-[9px] tracking-wider pointer-events-none drop-shadow">
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">BANDISH STUDIOS</span>
            <span className="bg-[#FFE600] text-black font-black px-2 py-0.5 rounded backdrop-blur-sm">MULTI-BRAND</span>
          </div>
        </div>
      );

    case 'soma-cafe':
      return (
        <div className={`relative overflow-hidden bg-[#234133] select-none flex items-center justify-center ${className}`}>
          {/* Authentic Soma Cafe Storefront Exterior */}
          <img
            src="/projects/soma-cafe/01-storefront-hero.jpg"
            alt="Soma Cafe Architectural Storefront"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />
          
          {/* Top Editorial Badge */}
          <div className="absolute top-3.5 left-3.5 font-mono text-[9px] tracking-widest uppercase bg-[#234133]/90 backdrop-blur-md px-2.5 py-1 rounded text-[#FAF8F5] border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span>HOSPITALITY BRANDING // SOMA CAFE</span>
          </div>

          {/* Bottom Editorial Bar */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-[#FAF8F5] font-mono text-[9px] tracking-wider pointer-events-none drop-shadow">
            <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">CHEF VANSH SHARMA</span>
            <span className="bg-[#C5A059] text-[#0E1310] font-bold px-2 py-0.5 rounded backdrop-blur-sm">WARMTH, REFINED</span>
          </div>
        </div>
      );

    case 'portrait-art':
    default:
      return (
        <div className={`relative overflow-hidden bg-[#111111] text-[#F5F4F0] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
          {/* Monochromatic Camera Crosshairs */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/40" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/40" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40" />

          {/* Grain */}
          <div className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 flex justify-between items-start text-[10px] font-mono text-[#8A8A84]">
            <span>DIRECTOR & DESIGNER</span>
            <span className="text-[#C8FF00]">PUNE, IN</span>
          </div>

          <div className="relative z-10 my-6 flex flex-col items-center text-center">
            {/* Artistic Monogram Silhouette */}
            <div className="w-28 h-28 rounded-full border border-white/20 flex items-center justify-center relative mb-4 bg-gradient-to-b from-[#222] to-[#0D0D0D]">
              <span className="font-serif italic text-6xl text-white select-none">T</span>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C8FF00] text-[#111] flex items-center justify-center text-[10px] font-bold font-mono">
                TT
              </div>
            </div>

            <div className="text-xl font-bold tracking-tight text-white uppercase font-sans">
              Tumul Thakur
            </div>
            <div className="font-serif italic text-sm text-[#8A8A84] mt-0.5">
              Visual Designer · Creative Director
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#8A8A84] pt-3 border-t border-white/10">
            <span>BANDISH STUDIOS</span>
            <span className="text-[#C8FF00]">AVAILABLE 2026</span>
          </div>
        </div>
      );
  }
};
