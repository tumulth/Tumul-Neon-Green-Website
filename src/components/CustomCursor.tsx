import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'arrow'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const cursorTypeRef = useRef<'default' | 'view' | 'arrow'>('default');
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Detect touch / mobile devices
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    let lastTargetCheck = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Record target coordinates
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      // Throttle role-checking to prevent DOM thrashing when moving over text
      const now = performance.now();
      if (now - lastTargetCheck > 40) {
        lastTargetCheck = now;
        const target = e.target as HTMLElement | null;
        if (!target) return;

        // Check for specific interactive elements
        const projectCard = target.closest('[data-cursor="view"]');
        const actionButton = target.closest(
          'a[href], button:not([disabled]), [role="button"], [data-cursor="arrow"], input[type="submit"]'
        );

        let nextType: 'default' | 'view' | 'arrow' = 'default';
        if (projectCard) {
          nextType = 'view';
        } else if (actionButton) {
          nextType = 'arrow';
        }

        if (nextType !== cursorTypeRef.current) {
          cursorTypeRef.current = nextType;
          setCursorType(nextType);
        }
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Frame-Based Stable LERP Loop with GPU-accelerated transform
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const factor = 0.16; // Smooth, stable interpolation without overshoot or vibration

    const render = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      // Snap to target if very close to eliminate subpixel micro-jitter
      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
        currentPos.current.x = targetPos.current.x;
        currentPos.current.y = targetPos.current.y;
      } else {
        currentPos.current.x += dx * factor;
        currentPos.current.y += dy * factor;
      }

      // Directly update DOM transform on GPU layer
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x.toFixed(1)}px, ${currentPos.current.y.toFixed(1)}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-200 select-none"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Default State: Sleek minimal dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111] dark:bg-[#C8FF00] dark:shadow-[0_0_8px_#C8FF00] transition-all duration-200 ease-out pointer-events-none ${
          cursorType === 'default'
            ? 'w-2.5 h-2.5 opacity-100 scale-100 shadow-sm'
            : 'w-2.5 h-2.5 opacity-0 scale-50'
        }`}
      />

      {/* View State: Large Editorial Lime Pill */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#C8FF00] text-[#111111] font-mono text-[11px] font-bold tracking-widest flex items-center justify-center uppercase shadow-2xl border border-black/15 transition-all duration-200 ease-out pointer-events-none ${
          cursorType === 'view'
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        VIEW
      </div>

      {/* Arrow State: Dark Pill with Lime Arrow */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#111111] dark:bg-[#1E1E1C] dark:border dark:border-white/20 text-[#C8FF00] text-xs font-mono font-bold flex items-center justify-center shadow-lg transition-all duration-200 ease-out pointer-events-none ${
          cursorType === 'arrow'
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        ↗
      </div>
    </div>
  );
};

