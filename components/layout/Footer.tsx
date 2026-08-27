import { Github, Linkedin } from 'lucide-react';
import { site } from '@/content/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary"
          >
            <Github size={20} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-surface hover:text-text-primary"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
