'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, FileText, ArrowUpRight } from 'lucide-react';
import { site } from '@/content/site';
import { navLinks } from '@/lib/nav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { MobileNav } from './MobileNav';
import { useCommandPalette } from '@/components/command-palette/CommandPaletteProvider';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { setOpen: setCommandPaletteOpen } = useCommandPalette();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className="glass-dock pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 rounded-full px-3 py-2 transition-all duration-300 w-full max-w-3xl"
        >
          {/* Avatar & Brand */}
          <Link
            href="/"
            className="focus-ring flex items-center gap-2 rounded-full pr-1.5 py-0.5 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-7 w-7 rounded-full overflow-hidden border border-border flex-shrink-0">
              <Image
                src="/images/profile-64.webp"
                alt={site.name}
                width={28}
                height={28}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="text-xs font-semibold tracking-tight text-text-primary hidden sm:inline-block">
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-text-primary/10 text-text-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Quick Resume Link */}
            <a
              href={site.resumePath}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-text-primary hover:border-accent hover:text-accent transition-colors"
            >
              <FileText size={13} />
              <span>Resume</span>
              <ArrowUpRight size={12} className="text-text-secondary" />
            </a>

            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="focus-ring flex h-8 items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 text-xs text-text-secondary hover:border-accent hover:text-text-primary transition-colors"
              aria-label="Open command palette"
            >
              <Search size={13} />
              <kbd className="hidden sm:inline-block rounded border border-border bg-surface px-1 py-0.2 text-xxs font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary md:hidden"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
