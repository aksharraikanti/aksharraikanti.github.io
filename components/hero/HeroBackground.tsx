'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [canRender3D, setCanRender3D] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    setCanRender3D(!shouldReduceMotion && supportsWebGL());
  }, [shouldReduceMotion]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);

    function handleVisibility() {
      setTabVisible(document.visibilityState === 'visible');
    }
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Overhead Keynote Radial Light Beam */}
      <div className="absolute inset-x-0 top-0 h-[650px] keynote-beam" />

      {/* Faint Technical 24px Micro-Grid with Radial Mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      {/* Ambient 3D Metallic Core Scene */}
      {canRender3D && (
        <div className="absolute right-0 top-1/4 h-[550px] w-full max-w-2xl opacity-40 dark:opacity-60 transition-opacity duration-700">
          <HeroScene active={inView && tabVisible} />
        </div>
      )}
    </div>
  );
}
