import { useEffect, useRef } from 'react';

// Sizes a single line of display type to run exactly from margin to margin.
// The element starts at a vw estimate (so prerendered HTML is close) and is corrected once fonts load.
export const useFit = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.style.fontSize = '';
      const ratio = el.clientWidth / el.scrollWidth;
      if (ratio < 1 || ratio > 1.01) {
        el.style.fontSize = `${parseFloat(getComputedStyle(el).fontSize) * ratio * 0.995}px`;
      }
    };
    document.fonts.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return ref;
};
