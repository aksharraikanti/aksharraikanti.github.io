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
      <header className="sticky top-0 z-30 border-b border-border/60 bg-bg/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="focus-ring flex items-center gap-2 rounded-lg font-semibold">
            <Image
              src="/images/profile-64.webp"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
              priority
            />
            <span>{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="focus-ring hidden h-11 items-center gap-2 rounded-full border border-border px-3 text-sm text-text-secondary hover:border-accent sm:flex"
              aria-label="Open command palette"
            >
              <Search size={16} />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden rounded border border-border bg-bg px-1.5 py-0.5 text-xs lg:inline">⌘K</kbd>
            </button>
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary sm:hidden"
              aria-label="Open command palette"
            >
              <Search size={20} />
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </header>
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
