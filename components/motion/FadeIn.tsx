'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li';
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === 'li' ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
