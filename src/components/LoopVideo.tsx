import React, { useEffect, useRef } from 'react';

interface LoopVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

// A muted loop that only downloads when it comes near the screen,
// and stays on its poster for people who prefer reduced motion.
export const LoopVideo: React.FC<LoopVideoProps> = ({ src, poster, label, className = '' }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.src) v.src = src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      width={480}
      height={1038}
      className={className}
    />
  );
};
