'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Copy, Check, FileText, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <HeroBackground />
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: Typographic Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Live Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-mono tracking-wider backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-text-secondary font-medium">Purdue CS + AI</span>
              <span className="text-border">&bull;</span>
              <span className="text-accent font-semibold">Seeking SWE & AI Roles</span>
            </div>

            {/* Apple Keynote Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Hi, I&rsquo;m {site.firstName} Raikanti.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-text-secondary">
                Building agentic systems with architectural precision.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed mx-auto lg:mx-0">
              Double major in Computer Science & Artificial Intelligence at Purdue University.
              Engineered production AI agents at{' '}
              <strong className="text-text-primary font-semibold">Google</strong> and{' '}
              <strong className="text-text-primary font-semibold">Tesla</strong>, co-founded B2B AI
              startup <strong className="text-text-primary font-semibold">Brydge</strong> (pitched
              to YC & a16z), and built scalable RAG pipelines at Textron, Kohl&rsquo;s, and TransSIGHT.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <LinkButton href="#projects" variant="primary">
                <ArrowDown size={16} /> Explore Projects
              </LinkButton>
              <LinkButton href={site.resumePath} target="_blank" rel="noreferrer" variant="secondary">
                <FileText size={16} /> View Resume
              </LinkButton>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent transition-all duration-200 min-h-[44px] active:scale-98"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>
              <LinkButton href={site.github} target="_blank" rel="noreferrer" variant="ghost">
                <Github size={16} /> GitHub
              </LinkButton>
              <LinkButton href={site.linkedin} target="_blank" rel="noreferrer" variant="ghost">
                <Linkedin size={16} /> LinkedIn
              </LinkButton>
            </div>

            {/* Keynote Metric Strip */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border/60 pt-8">
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3.5 backdrop-blur-sm text-center lg:text-left">
                <p className="text-xxs font-mono uppercase tracking-wider text-text-secondary">Experience</p>
                <p className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-text-primary">7 Roles</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3.5 backdrop-blur-sm text-center lg:text-left">
                <p className="text-xxs font-mono uppercase tracking-wider text-text-secondary">Leadership</p>
                <p className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-text-primary">Co-Founder</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3.5 backdrop-blur-sm text-center lg:text-left">
                <p className="text-xxs font-mono uppercase tracking-wider text-text-secondary">Engineering</p>
                <p className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-text-primary">Google & Tesla</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3.5 backdrop-blur-sm text-center lg:text-left">
                <p className="text-xxs font-mono uppercase tracking-wider text-text-secondary">Academics</p>
                <p className="mt-0.5 text-xl sm:text-2xl font-bold tracking-tight text-text-primary">Purdue &apos;26</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hardware-Framed Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-[340px] flex-shrink-0"
          >
            <div className="relative group">
              {/* Outer Ambient Specular Rim Glow */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-accent/25 via-accent/5 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              <SpotlightCard className="p-3 rounded-3xl border border-border/80 shadow-2xl">
                <div className="relative aspect-portrait w-full overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    src="/images/profile-640.webp"
                    alt={site.name}
                    fill
                    sizes="(min-width: 1024px) 340px, 80vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Vignette Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Floating Glass Status Chip */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-surface/85 backdrop-blur-md border border-border/70 flex items-center justify-between text-xs shadow-lg">
                    <div>
                      <p className="font-semibold text-text-primary">{site.name}</p>
                      <p className="text-xxs font-mono text-text-secondary">Purdue CS + AI &bull; Class of 2026</p>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
