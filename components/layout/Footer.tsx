'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { site } from '@/content/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-12 text-xs">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left text-text-secondary">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <span className="hidden sm:inline text-border">&bull;</span>
          <p className="font-mono text-xxs">
            Purdue University CS &bull; AI
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Send Email"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="focus-ring flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface text-text-secondary hover:text-text-primary text-xs font-mono transition-colors ml-2"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
