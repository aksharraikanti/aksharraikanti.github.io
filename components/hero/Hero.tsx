'use client';

import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
      <HeroBackground />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Software Engineer &middot; Purdue University
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&rsquo;m {site.firstName} Raikanti.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">{site.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href={site.resumePath} target="_blank" rel="noreferrer" variant="primary">
              View Resume
            </LinkButton>
            <LinkButton href={site.github} target="_blank" rel="noreferrer" variant="secondary">
              <Github size={16} /> GitHub
            </LinkButton>
            <LinkButton href={site.linkedin} target="_blank" rel="noreferrer" variant="secondary">
              <Linkedin size={16} /> LinkedIn
            </LinkButton>
          </div>

          <a
            href="#about"
            className="focus-ring mt-16 inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary"
          >
            <ArrowDown size={16} />
            Scroll to learn more
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
