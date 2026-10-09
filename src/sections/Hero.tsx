import React from 'react';
import { motion } from 'motion/react';
import Aurora from '../components/Aurora';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact?: () => void;
  onNavigateToWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#F7F7F2] dark:bg-[#0C0C0B] transition-colors duration-300 px-6 sm:px-8 md:px-12 pt-20 pb-16">
      {/* Dynamic React Bits Aurora Shader Wave Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-55 dark:opacity-75 z-0 transition-opacity duration-500">
        <Aurora
          colorStops={['#C8FF00', '#ff9500', '#C8FF00']}
          blend={theme === 'dark' ? 0.7 : 0.85}
          amplitude={1.1}
          speed={1.4}
          lightMode={theme === 'light'}
        />
      </div>

      {/* Peach -> Cream -> Acid-Lime Ambient Radiance */}
      <div
        className="absolute top-0 left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none opacity-45 dark:opacity-20 blur-[130px] transition-colors duration-700"
        style={{
          background: 'radial-gradient(circle, #FED7AA 0%, #FFF5EB 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-12 right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none opacity-35 dark:opacity-20 blur-[130px] transition-colors duration-700"
        style={{
          background: 'radial-gradient(circle, #C8FF00 0%, #FFB703 40%, transparent 70%)',
        }}
      />

      {/* Tactile Editorial Print Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 z-1"
        style={{
          backgroundImage: 'radial-gradient(rgba(17, 17, 17, 0.05) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Hero Centerpiece: Editorial Typography-Led Focal Point (Strictly Vertically & Horizontally Centered) */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center my-auto">
        {/* Primary Bold Sans-Serif Statement with Staggered Slide-Up Reveal */}
        <h1 className="font-sans font-black tracking-[-0.035em] sm:tracking-[-0.04em] text-[#111111] dark:text-[#F5F4F0] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[106px] leading-[0.98] sm:leading-[0.92] select-none uppercase">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.12,
            }}
          >
            BRANDS NEED MORE
          </motion.span>
          <motion.span
            className="block mt-1 sm:mt-2.5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.28,
            }}
          >
            THAN GOOD DESIGN.
          </motion.span>
        </h1>

        {/* Expressive Secondary Statement (Distinct, slightly smaller Serif Italic with vertical rhythm) */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[46px] font-serif italic tracking-tight leading-snug select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.44,
          }}
        >
          <span className="text-[#666660] dark:text-[#A5A59E] font-normal">
            THEY NEED A{' '}
          </span>
          <span className="relative inline-block font-normal text-[#111111] dark:text-white underline decoration-[#C8FF00] decoration-2 sm:decoration-[3px] underline-offset-4 sm:underline-offset-8">
            POINT OF VIEW.
          </span>
        </motion.div>

        {/* Subtle Supporting Copy */}
        <motion.p
          className="mt-7 sm:mt-8 md:mt-10 text-xs sm:text-sm font-mono tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#73736C] dark:text-[#9A9A92]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6,
          }}
        >
          Visual identity &middot; Art direction &middot; Digital experiences
        </motion.p>

        {/* Single Primary CTA */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.72,
          }}
        >
          <button
            onClick={onExploreWork}
            className="group inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#111111] dark:bg-[#C8FF00] text-[#F5F4F0] dark:text-[#111111] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:scale-105 hover:bg-[#C8FF00] hover:text-[#111111] dark:hover:bg-white transition-all duration-200 shadow-xl"
            data-cursor="arrow"
          >
            <span>EXPLORE WORK</span>
            <span className="group-hover:translate-y-1 transition-transform duration-200 text-sm">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
