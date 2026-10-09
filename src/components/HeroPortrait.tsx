import React, { useState, useRef, useEffect, useCallback } from 'react';

interface HeroPortraitProps {
  className?: string;
}

const DEFAULT_PORTRAIT_URL =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85';

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '' }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 0, my: 0 });
  const isHoveredRef = useRef(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
      setImgError(false);
    }
  };

  // 3D Parallax Tilt effect on mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current || !isHoveredRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    setTilt({
      rx: -normY * 10,
      ry: normX * 12,
      mx: normX * 8,
      my: normY * 8,
    });
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setTilt({ rx: 0, ry: 0, mx: 0, my: 0 });
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const photoSource = customPhotoUrl || DEFAULT_PORTRAIT_URL;

  return (
    <div
      ref={cardRef}
      className={`relative select-none perspective-[1200px] ${className}`}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: isHoveredRef.current ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Asymmetric Lime Gradient Aura Bleed */}
      <div className="absolute -top-12 -right-8 w-72 h-72 rounded-full bg-[#C8FF00]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-6 w-60 h-60 rounded-full bg-[#A8EB12]/25 blur-3xl pointer-events-none -z-10" />

      {/* Decorative Shadow Clip Polygon (Creates Offset Tension) */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 bg-[#111111]/90 -z-10 transition-transform duration-500"
        style={{
          clipPath: 'polygon(0% 0%, 100% 4%, 96% 100%, 0% 96%)',
        }}
      />

      {/* Main Charcoal / Sepia-Tone Portrait with Unique Polygon Clip-Path */}
      <div
        className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[380px] sm:h-[450px] md:h-[500px] lg:h-[540px] bg-[#161514] overflow-hidden group shadow-2xl"
        style={{
          clipPath: 'polygon(0% 0%, 100% 4%, 96% 100%, 0% 96%)',
        }}
      >
        {/* Subtle Sepia & Film Grain Tint Overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 mix-blend-color opacity-30 bg-[#7A5835]" />
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)',
            backgroundSize: '10px 10px',
          }}
        />

        {/* Specular Sheen on hover */}
        <div
          className="absolute inset-0 pointer-events-none z-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.ry * 3}% ${50 - tilt.rx * 3}%, rgba(200,255,0,0.18), transparent 60%)`,
          }}
        />

        {/* Drafting Crosshairs & Optical Markings */}
        <div className="absolute top-4 left-4 z-30 font-mono text-[9px] text-[#C8FF00] tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-sm bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>PORTRAIT // TT-01</span>
        </div>
        <div className="absolute top-4 right-8 z-30 font-mono text-[9px] text-white/70 tracking-wider backdrop-blur-sm bg-black/40 px-2 py-0.5 rounded border border-white/10">
          f/1.4 · 50MM
        </div>
        <div className="absolute bottom-6 left-5 z-30 font-mono text-[10px] text-white/90 tracking-widest uppercase backdrop-blur-sm bg-black/50 px-2.5 py-1 rounded border border-white/10">
          TUMUL THAKUR // PUNE
        </div>
        <div className="absolute bottom-6 right-8 z-30 font-mono text-[9px] text-[#C8FF00] tracking-wider uppercase font-bold backdrop-blur-sm bg-black/50 px-2 py-1 rounded border border-white/10">
          DIR. 2026
        </div>

        {/* Center Target Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none opacity-20 text-white font-mono text-xs">
          +
        </div>

        {!imgError ? (
          <img
            src={photoSource}
            alt="Tumul Thakur — Visual Designer"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top filter grayscale contrast-125 sepia-[0.25] brightness-95 transition-transform duration-700 group-hover:scale-105"
            style={{
              transform: `translate3d(${-tilt.mx}px, ${-tilt.my}px, 0) scale(1.04)`,
            }}
          />
        ) : (
          /* High-Fidelity Monochrome Typographic Monolith Fallback */
          <div className="relative w-full h-full flex flex-col justify-between p-8 bg-gradient-to-b from-[#1C1B1A] via-[#141312] to-[#0A0A09]">
            <div className="flex justify-between items-start pt-6">
              <span className="font-mono text-xs text-[#C8FF00] tracking-widest">
                VISUAL IDENTITY
              </span>
              <span className="font-mono text-xs text-white/40">MH / IN</span>
            </div>
            <div className="my-auto text-center">
              <div className="text-6xl font-serif italic text-white/90 leading-none">
                Tumul
              </div>
              <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#C8FF00] mt-3">
                Creative Director
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/40 pb-4 border-t border-white/10 pt-4">
              <span>EST. 2021</span>
              <span>INDEPENDENT PRACTICE</span>
            </div>
          </div>
        )}

        {/* Photo Upload Trigger Button */}
        <label
          className="absolute bottom-14 right-8 z-30 bg-[#111111]/90 hover:bg-[#C8FF00] hover:text-[#111111] text-white text-[9px] font-mono px-2.5 py-1.5 rounded shadow-lg cursor-pointer border border-white/20 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5"
          title="Upload custom portrait photo"
        >
          <span>📷 REPLACE PHOTO</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Floating Metadata Tag Pinched to Bottom-Left of the Polygon */}
      <div className="absolute -bottom-4 -left-4 z-30 bg-white/95 dark:bg-[#181816]/95 border border-black/10 dark:border-white/15 shadow-lg px-3.5 py-1.5 backdrop-blur-md text-[10px] font-mono flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
        <span className="font-bold text-[#111111] dark:text-[#F5F4F0]">PUNE, MH // 18.52° N</span>
      </div>
    </div>
  );
};
