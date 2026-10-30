'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react';
import { site } from '@/content/site';
import { navLinks } from '@/lib/nav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { MobileNav } from './MobileNav';
import { useCommandPalette } from '@/components/command-palette/CommandPaletteProvider';
import { Container } from '@/components/ui/Container';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { setOpen: setCommandPaletteOpen } = useCommandPalette();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/75 backdrop-blur-xl transition-colors">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="focus-ring flex items-center gap-2.5 rounded-full pr-3 py-1 hover:opacity-85 transition-opacity"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border">
              <Image
                src="/images/profile-64.webp"
                alt={site.name}
                width={32}
                height={32}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                {site.name}
              </span>
              <span className="text-xxs font-mono text-text-secondary hidden sm:inline-block">
                Purdue CS + AI
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary hover:bg-surface/80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="focus-ring hidden h-9 items-center gap-2 rounded-full border border-border bg-surface/60 px-3 text-xs text-text-secondary hover:border-accent hover:text-text-primary transition-colors sm:flex"
              aria-label="Open command palette"
            >
              <Search size={14} />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden rounded border border-border bg-surface px-1.5 py-0.5 text-xxs font-mono lg:inline">
                ⌘K
              </kbd>
            </button>
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary sm:hidden"
              aria-label="Open command palette"
            >
              <Search size={18} />
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </header>
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
