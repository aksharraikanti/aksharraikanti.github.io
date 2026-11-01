import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FadeIn } from '@/components/motion/FadeIn';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Background"
        title="Building intelligent systems, from hardware to production agents"
      />
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
        <FadeIn>
          <SpotlightCard className="p-2 sm:p-2.5">
            <div className="relative aspect-portrait w-full overflow-hidden rounded-xl bg-neutral-900">
              <Image
                src="/images/profile-640.webp"
                alt="Akshar Raikanti"
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-text-primary">Akshar Raikanti</p>
                  <p className="text-xxs font-mono text-text-secondary">Purdue CS + AI &apos;26</p>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              </div>
            </div>
          </SpotlightCard>

          <div className="mt-4 space-y-2 text-xs font-mono text-text-secondary">
            <div className="flex items-center gap-2 p-2.5 rounded-xl border border-border bg-surface/60">
              <GraduationCap size={16} className="text-accent" />
              <span>B.S. Dual Major (CS & AI)</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl border border-border bg-surface/60">
              <MapPin size={16} className="text-accent" />
              <span>San Francisco Bay Area, CA / West Lafayette, IN</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-5 text-text-secondary leading-relaxed">
          <p className="text-base sm:text-lg text-text-primary font-medium">
            I&rsquo;m a Computer Science and Artificial Intelligence student at Purdue University
            (B.S. in both, expected December 2026) dedicated to engineering robust, autonomous
            agentic architectures and high-performance software.
          </p>
          <p>
            Over the past two years, I&rsquo;ve engineered production AI agents at{' '}
            <strong className="text-text-primary">Google</strong> (synthesizing thermal log telemetry
            to reduce triage times by ~75%) and <strong className="text-text-primary">Tesla</strong>{' '}
            (deploying multimodal document parsing and log health check agents). As Co-Founder &
            COO at <strong className="text-text-primary">Brydge</strong>, I drove product strategy,
            built multi-agent platforms integrating 20+ enterprise APIs, and pitched to leading VC
            partners including Y Combinator, a16z, and Accel.
          </p>
          <p>
            My technical focus centers on <strong className="text-text-primary">agentic AI</strong> &mdash;
            systems that autonomously plan, call tools, and execute workflows with deterministic reliability &mdash;
            along with low-level systems programming in C++ (like building a custom dynamic memory
            allocator from scratch) and large-scale cloud data pipelines in Python, Airflow, and AWS.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-border bg-surface">
              <p className="text-xs font-mono uppercase text-accent mb-1 flex items-center gap-1.5">
                <Sparkles size={14} /> Agentic AI Focus
              </p>
              <p className="text-xs text-text-secondary">
                Tool-calling models, multi-agent orchestration, FAISS vector search, and sub-second RAG retrieval.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface">
              <p className="text-xs font-mono uppercase text-accent mb-1 flex items-center gap-1.5">
                <Sparkles size={14} /> Systems Rigor
              </p>
              <p className="text-xs text-text-secondary">
                Systems programming in C/C++, explicit free lists, cache-friendly data structures, and distributed services.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
