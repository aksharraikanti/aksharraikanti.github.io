import { cn } from '@/lib/cn';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const base =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 min-h-[44px]';

const variants = {
  primary: 'bg-accent text-accent-contrast hover:opacity-90',
  secondary: 'border border-border bg-surface text-text-primary hover:border-accent',
  ghost: 'text-text-primary hover:bg-surface',
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
