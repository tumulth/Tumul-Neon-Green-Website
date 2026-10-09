import React, { useState } from 'react';
import { BorderGlow } from '../components/BorderGlow';
import { Lanyard } from '../components/Lanyard';
import {
  LANYARD_FRONT_IMAGE,
  LANYARD_BACK_IMAGE,
  LANYARD_STRAP_IMAGE,
} from '../data/lanyardAssets';

export const AboutBioSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'lanyard' | 'portrait'>('lanyard');

  const experiences = [
    {
      role: 'Sr. Visualizer',
      company: 'Bandish Studios',
      period: '2024 → 2025',
    },
    {
      role: 'Video Editor and Jr. Graphic Designer',
      company: 'House of Content',
      period: '2022 → 2024',
    },
    {
      role: 'Graphic Design Intern',
      company: 'Team Ranuver',
      period: '2021 → 2022',
    },
    {
      role: 'Graphic Design Intern',
      company: 'Paycrunch',
      period: '2020 → 2021',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      {/* Eyebrow & Headline (Directly matching reference photo) */}
      <div className="mb-14">
        <span className="font-serif italic text-base sm:text-lg text-[#8A8A84] dark:text-[#A0A09B] block mb-2">
          / Who Am I
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-[#111111] dark:text-[#F5F4F0]">
          Pushing Boundaries{' '}
          <span className="text-[#8A8A84] dark:text-[#777] font-normal">since 2021</span>
        </h2>
      </div>

      {/* 2-Column Split: Interactive 3D Lanyard on Left vs Bio & Experience on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive 3D Physics Lanyard Pass Badge */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="74 100 50"
            backgroundColor="#121212"
            borderRadius={28}
            glowRadius={42}
            glowIntensity={1.2}
            coneSpread={25}
            animated={false}
            colors={['#C8FF00', '#38bdf8', '#c084fc']}
            fillOpacity={0.4}
            className="w-full h-[480px] sm:h-[540px] lg:h-[580px] shadow-2xl"
          >
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
              {/* Ambient Subtle Lime Glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, #C8FF00 0%, transparent 70%)',
                }}
              />

              {/* Top Pass Coordinate Tag & View Mode Switcher */}
              <div className="absolute top-4 inset-x-6 z-20 flex justify-between items-center text-[10px] sm:text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#C8FF00] pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
                  <span>PUNE, IN [18.52° N]</span>
                </span>

                {/* View Switcher: 3D Pass vs Editorial Portrait */}
                <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-full border border-white/10">
                  <button
                    onClick={() => setViewMode('lanyard')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all ${viewMode === 'lanyard'
                      ? 'bg-[#C8FF00] text-black font-bold'
                      : 'text-white/60 hover:text-white'
                      }`}
                  >
                    3D PASS
                  </button>
                  <button
                    onClick={() => setViewMode('portrait')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all ${viewMode === 'portrait'
                      ? 'bg-[#C8FF00] text-black font-bold'
                      : 'text-white/60 hover:text-white'
                      }`}
                  >
                    PORTRAIT
                  </button>
                </div>
              </div>

              {/* Center Content based on View Mode */}
              {viewMode === 'lanyard' ? (
                /* 3D Physics Lanyard Canvas */
                <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                  <Lanyard
                    frontImage={LANYARD_FRONT_IMAGE}
                    backImage={LANYARD_BACK_IMAGE}
                    strapImage={LANYARD_STRAP_IMAGE}
                    cardColor="#111111"
                    strapColor="#141414"
                    finish="holographic"
                    metal="silver"
                    breeze={0.4}
                    gravity={0.9}
                    elasticity={0.55}
                    damping={0.48}
                    strapLength={0.46}
                    size={0.64}
                    interactive={true}
                    intro={true}
                  />
                </div>
              ) : (
                /* Editorial Portrait Card with Monochromatic Finish */
                <div className="w-full h-full relative flex flex-col justify-center items-center p-8 select-none">
                  <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#181818] border border-white/10 shadow-2xl">
                    <img
                      src="/tumul.png"
                      alt="Tumul Thakur Editorial Portrait"
                      className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.25] brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 font-mono text-[9px] text-[#C8FF00] tracking-widest uppercase">
                      PORTRAIT // TT-01
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-left font-mono">
                      <div className="text-[10px] text-[#C8FF00] uppercase tracking-wider">VISUAL DESIGNER</div>
                      <div className="text-base font-sans font-bold text-white">Tumul Thakur</div>
                      <div className="text-[10px] text-white/60 mt-0.5"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Interactive Prompt Overlay */}
              {viewMode === 'lanyard' && (
                <div className="absolute bottom-4 right-6 z-20 flex items-center text-[10px] font-mono pointer-events-none">
                  <span className="text-[#C8FF00] font-semibold tracking-wider">
                    DRAG TO SWING
                  </span>
                </div>
              )}
            </div>
          </BorderGlow>

          {/* Social Icons & Signature Below Photo */}
          <div className="flex items-center justify-between px-2 text-xs font-mono text-[#555] dark:text-[#AAA]">
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-[#C8FF00] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-[#C8FF00] transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-[#C8FF00] transition-colors"
              >
                Behance ↗
              </a>
            </div>
            <span className="text-[#8A8A84] dark:text-[#777]">Tumul Thakur</span>
          </div>
        </div>

        {/* Right Column: Bio Prose & Experience Table (Matching Reference) */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-base sm:text-lg text-[#333] dark:text-[#DDD] leading-relaxed font-sans">
            <p>
              I am a visual designer and art director based in Pune, India. My practice focuses on building comprehensive brand identities, multi-chapter corporate design guidelines, and motion graphics for infrastructure, engineering, hospitality, and consumer brands.
            </p>
            <p className="text-sm sm:text-base text-[#666] dark:text-[#AAA]">
              Over the last five years—most recently as Senior Visualizer at Bandish Studios—I have developed identity systems from initial vector drafts through to final vendor fabrication. I work directly with founders, creative directors, and engineering teams, translating complex operations into structured typography, mathematical grids, physical print specifications, and high-impact digital campaigns.
            </p>
          </div>

          {/* Clean Experience Table (Directly from reference layout) */}
          <div className="border-t border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10 text-xs sm:text-sm font-sans">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="py-4.5 grid grid-cols-1 sm:grid-cols-[1.35fr_1fr_110px] items-baseline sm:items-center gap-1.5 sm:gap-6 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
              >
                <div className="font-bold text-[#111111] dark:text-[#F5F4F0] leading-snug">
                  {exp.role}
                </div>
                <div className="text-[#666] dark:text-[#AAA] font-mono text-xs text-left">
                  {exp.company}
                </div>
                <div className="font-mono text-xs text-[#8A8A84] dark:text-[#777] sm:text-right">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
