'use client';

import { useState } from 'react';
import { ArrowDown, Copy, Check, FileText, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroBackground } from './HeroBackground';

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
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20 pb-16">
      <HeroBackground />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow Kicker Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-mono tracking-wider backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-text-secondary">Purdue CS + AI</span>
            <span className="text-border">/</span>
            <span className="text-accent font-medium">Seeking SWE & AI Roles</span>
          </div>

          {/* Apple Keynote Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&rsquo;m {site.firstName} Raikanti.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-text-secondary">
              Building agentic systems with architectural precision.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl leading-relaxed">
            Software engineer and double major in Computer Science & Artificial Intelligence at
            Purdue University. Shipped production AI agents at{' '}
            <strong className="text-text-primary font-semibold">Google</strong> and{' '}
            <strong className="text-text-primary font-semibold">Tesla</strong>, co-founded B2B AI
            startup <strong className="text-text-primary font-semibold">Brydge</strong> (pitched
            to YC & a16z), and engineered enterprise RAG systems at Textron, Kohl&rsquo;s, and TransSIGHT.
          </p>

          {/* Tactile Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href="#projects" variant="primary">
              <ArrowDown size={16} /> Explore Projects
            </LinkButton>
            <LinkButton href={site.resumePath} target="_blank" rel="noreferrer" variant="secondary">
              <FileText size={16} /> View Resume
            </LinkButton>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent transition-colors duration-200 min-h-[44px]"
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

          {/* Apple Keynote Metric Strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/60 pt-8">
            <div className="rounded-xl border border-border/40 bg-surface/50 p-4 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">Track Record</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-text-primary">7 Roles</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-surface/50 p-4 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">Leadership</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-text-primary">Co-Founder</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-surface/50 p-4 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">Engineering</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-text-primary">Google & Tesla</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-surface/50 p-4 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">Academics</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-text-primary">Purdue &apos;26</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
