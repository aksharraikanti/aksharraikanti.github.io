'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const GLOW_SIZE = 640;

/**
 * Full-page ambient glow that eases toward the pointer (mouse or touch-drag,
 * both delivered via pointermove). Fixed behind all content, pointer-events
 * disabled so it never intercepts clicks/scroll.
 */
export function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 55, damping: 20, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 55, damping: 20, mass: 0.7 });

  useEffect(() => {
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 3);

    if (shouldReduceMotion) return;

    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [shouldReduceMotion, x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute rounded-full opacity-[0.16] blur-[120px] dark:opacity-[0.24]"
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          marginLeft: -GLOW_SIZE / 2,
          marginTop: -GLOW_SIZE / 2,
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
}
