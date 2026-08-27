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
      className="absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,var(--color-accent)_0%,transparent_60%)] opacity-20 dark:opacity-30"
    >
      {canRender3D && (
        <div className="absolute inset-0" aria-hidden="true">
          <HeroScene active={inView && tabVisible} />
        </div>
      )}
    </div>
  );
}
