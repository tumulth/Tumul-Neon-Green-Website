'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Project } from '../data/projects';
import { ProjectArt } from './ProjectArt';

interface MagneticProjectCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
  badgeIndex?: string;
}

export const MagneticProjectCard: React.FC<MagneticProjectCardProps> = ({
  project,
  onClick,
  className = '',
  badgeIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const isTouchRef = useRef(false);

  // Animation values using refs for smooth 60fps rAF loop without React re-render thrashing
  const animState = useRef({
    targetRotX: 0,
    targetRotY: 0,
    targetTx: 0,
    targetTy: 0,
    targetGlareX: 50,
    targetGlareY: 50,
    targetGlareOpacity: 0,

    currentRotX: 0,
    currentRotY: 0,
    currentTx: 0,
    currentTy: 0,
    currentGlareOpacity: 0,

    rafId: 0 as number,
    isRunning: false,
  });

  // Check for touch / reduced motion once on mount
  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    isTouchRef.current = isTouch || prefersReducedMotion;
  }, []);

  // Update loop
  const updateLoop = useCallback(() => {
    const state = animState.current;
    const lerpFactor = 0.12;

    state.currentRotX += (state.targetRotX - state.currentRotX) * lerpFactor;
    state.currentRotY += (state.targetRotY - state.currentRotY) * lerpFactor;
    state.currentTx += (state.targetTx - state.currentTx) * lerpFactor;
    state.currentTy += (state.targetTy - state.currentTy) * lerpFactor;
    state.currentGlareOpacity +=
      (state.targetGlareOpacity - state.currentGlareOpacity) * lerpFactor;

    // Apply 3D transforms
    if (frameRef.current) {
      frameRef.current.style.transform = `perspective(1100px) rotateX(${state.currentRotX.toFixed(
        3
      )}deg) rotateY(${state.currentRotY.toFixed(3)}deg) translate3d(${state.currentTx.toFixed(
        2
      )}px, ${state.currentTy.toFixed(2)}px, 0px)`;
    }

    // Parallax inner artwork (counter-translation + slight scale for layer detachment)
    if (innerRef.current) {
      const innerTx = -state.currentTx * 1.1;
      const innerTy = -state.currentTy * 1.1;
      innerRef.current.style.transform = `translate3d(${innerTx.toFixed(
        2
      )}px, ${innerTy.toFixed(2)}px, 28px) scale(1.025)`;
    }

    // Parallax floating badge (enhanced forward depth)
    if (badgeRef.current) {
      const badgeTx = state.currentTx * 1.4;
      const badgeTy = state.currentTy * 1.4;
      badgeRef.current.style.transform = `translate3d(${badgeTx.toFixed(
        2
      )}px, ${badgeTy.toFixed(2)}px, 42px)`;
    }

    // Subtle magnetic shift on metadata text
    if (textRef.current) {
      const textTx = state.currentTx * 0.45;
      textRef.current.style.transform = `translate3d(${textTx.toFixed(
        2
      )}px, 0px, 0px)`;
    }

    // Dynamic specular glare layer
    if (glareRef.current) {
      glareRef.current.style.opacity = state.currentGlareOpacity.toFixed(3);
      glareRef.current.style.background = `radial-gradient(circle 420px at ${state.targetGlareX.toFixed(
        1
      )}% ${state.targetGlareY.toFixed(
        1
      )}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 75%)`;
    }

    // Check if still moving
    const isSettled =
      Math.abs(state.targetRotX - state.currentRotX) < 0.01 &&
      Math.abs(state.targetRotY - state.currentRotY) < 0.01 &&
      Math.abs(state.targetTx - state.currentTx) < 0.05 &&
      Math.abs(state.targetTy - state.currentTy) < 0.05 &&
      Math.abs(state.targetGlareOpacity - state.currentGlareOpacity) < 0.005;

    if (!isSettled || state.targetGlareOpacity > 0.01) {
      state.rafId = requestAnimationFrame(updateLoop);
    } else {
      state.isRunning = false;
    }
  }, []);

  const startLoopIfNeeded = useCallback(() => {
    const state = animState.current;
    if (!state.isRunning) {
      state.isRunning = true;
      state.rafId = requestAnimationFrame(updateLoop);
    }
  }, [updateLoop]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchRef.current || !frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const relY = (e.clientY - rect.top) / rect.height; // 0 to 1

    const normX = (relX - 0.5) * 2; // -1 to 1
    const normY = (relY - 0.5) * 2; // -1 to 1

    // Subtle magnetic parameters (refined & silky, not overwhelming)
    const MAX_TILT = 7.5; // degrees
    const MAX_TRANSLATE = 10; // pixels

    const state = animState.current;
    state.targetRotX = -normY * MAX_TILT;
    state.targetRotY = normX * MAX_TILT;
    state.targetTx = normX * MAX_TRANSLATE;
    state.targetTy = normY * MAX_TRANSLATE;
    state.targetGlareX = relX * 100;
    state.targetGlareY = relY * 100;
    state.targetGlareOpacity = 1;

    startLoopIfNeeded();
  };

  const handleMouseEnter = () => {
    if (isTouchRef.current) return;
    setIsHovered(true);
    startLoopIfNeeded();
  };

  const handleMouseLeave = () => {
    if (isTouchRef.current) return;
    setIsHovered(false);

    const state = animState.current;
    state.targetRotX = 0;
    state.targetRotY = 0;
    state.targetTx = 0;
    state.targetTy = 0;
    state.targetGlareOpacity = 0;

    startLoopIfNeeded();
  };

  useEffect(() => {
    return () => {
      if (animState.current.rafId) {
        cancelAnimationFrame(animState.current.rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
      className={`group cursor-pointer flex flex-col gap-4 select-none ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Tilting Card Chassis */}
      <div
        ref={frameRef}
        className="w-full relative bg-[#EFEFEA] dark:bg-[#181816] p-4 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[36px] border border-black/10 dark:border-white/10 overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Specular Glare / Reflection Layer */}
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-[28px] sm:rounded-[36px] z-30 transition-opacity duration-300 mix-blend-overlay"
          style={{ opacity: 0 }}
        />

        {/* Ambient Subtle Border Accent on Hover */}
        <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] border-2 border-transparent group-hover:border-[#C8FF00]/60 transition-colors duration-300 pointer-events-none z-20" />

        {/* Floating Depth Badge (Elevated in 3D Space) */}
        <div
          ref={badgeRef}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111]/85 dark:bg-black/90 backdrop-blur-md text-[#F5F4F0] border border-white/10 shadow-lg text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>VIEW CASE</span>
            <span className="text-[#C8FF00]">↗</span>
          </div>
        </div>

        {/* Inner Parallax Artwork Container */}
        <div
          ref={innerRef}
          className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-[#121210] relative z-10"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          <ProjectArt
            projectId={project.id}
            className="w-full h-[320px] sm:h-[380px] md:h-[420px]"
            variant="hero"
          />
        </div>
      </div>

      {/* Title & Metadata Strip Below Image with Subtle Parallax Offset */}
      <div
        ref={textRef}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 transition-transform duration-300 ease-out"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#111111] dark:text-[#F5F4F0] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {badgeIndex && (
              <span className="font-mono text-xs text-[#8A8A84] dark:text-[#777]">
                /{badgeIndex}
              </span>
            )}
          </div>
          <p className="text-xs text-[#666] dark:text-[#A0A09B] font-serif italic mt-0.5">
            "{project.heroTagline}"
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#666] dark:text-[#AAA] shrink-0">
          <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1C1C1A] border border-black/10 dark:border-white/15 group-hover:border-black/25 dark:group-hover:border-white/30 transition-colors">
            {project.categoryTag}
          </span>
          <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1C1C1A] border border-black/10 dark:border-white/15 group-hover:border-black/25 dark:group-hover:border-white/30 transition-colors">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
};
