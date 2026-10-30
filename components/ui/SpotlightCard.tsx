'use client';

import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/cn';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover',
        className
      )}
      {...props}
    >
      {/* Specular Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${
            spotlightColor || 'var(--color-spotlight, rgba(41, 151, 255, 0.12))'
          }, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Specular Border Illumination */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 dark:block hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
