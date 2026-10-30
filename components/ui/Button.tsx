import { cn } from '@/lib/cn';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const base =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 min-h-[44px] active:scale-98';

const variants = {
  primary:
    'bg-accent text-accent-contrast hover:opacity-95 hover:scale-102 shadow-sm',
  secondary:
    'border border-border bg-surface text-text-primary hover:border-accent hover:scale-102 shadow-sm',
  ghost: 'text-text-primary hover:bg-surface/80',
};

type Variant = keyof typeof variants;

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function LinkButton({
  variant = 'primary',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
