import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { Sparkles, BrainCircuit, Cpu, Database, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function BentoGrid() {
  return (
    <Section id="overview" className="pt-8 pb-16">
      <SectionHeading
        eyebrow="Architectural Focus"
        title="Engineering across the full stack of AI"
        description="From low-level systems programming in C++ to production multi-agent systems and enterprise cloud pipelines."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Bento 1: Brydge - Startup Leadership (Spans 2 columns on desktop) */}
        <FadeIn className="md:col-span-2">
          <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                  <Sparkles size={14} />
                  <span>Co-Founder & COO &bull; Brydge</span>
                </span>
                <span className="text-xs font-mono text-text-secondary">Dec 2025 – Apr 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary mb-3">
                Autonomous Multi-Agent Enterprise Platform
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                Co-founded and scaled a B2B SaaS startup integrating 20+ enterprise tools (GitHub,
                Jira, Confluence, Slack, M365) via unified semantic search and autonomous execution.
                Shipped end-to-end encryption, secured 5 paying pilot customers, and pitched to
                Y Combinator, a16z Speedrun, Accel Atoms, and Pear VC.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
              {['Multi-Agent Systems', 'Semantic Search', 'Product Strategy', 'Go-To-Market', 'E2E Encryption'].map(
                (skill) => (
                  <Badge key={skill}>{skill}</Badge>
                )
              )}
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Bento 2: Big Tech AI Agents (Google & Tesla) */}
        <FadeIn>
          <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <BrainCircuit size={18} />
                </span>
                <span className="text-xs font-mono text-text-secondary">Google &bull; Tesla</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-text-primary mb-2">
                Production AI Agents
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Engineered Gemini tool-calling bug triage agents at Google (~75% MTTT reduction) and
                multimodal post-deployment health check agents at Tesla with 85% accuracy.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
              <Badge>Gemini API</Badge>
              <Badge>Multimodal AI</Badge>
              <Badge>Tool Calling</Badge>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Bento 3: Low-Level Systems Programming (Malloc) */}
        <FadeIn>
          <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Cpu size={18} />
                </span>
                <span className="text-xs font-mono text-text-secondary">Systems</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-text-primary mb-2">
                Memory Management & C++
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Wrote a dynamic memory allocator from scratch in C++ implementing `malloc`, `free`, and
                `calloc` with explicit free lists, boundary-tag coalescing, and first-fit placement.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                <Badge>C++</Badge>
                <Badge>Memory Allocator</Badge>
              </div>
              <Link
                href="/projects/malloc-implementation/"
                className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
              >
                <span>Write-up</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Bento 4: Enterprise RAG & Cloud Data (Textron, Kohl's, TransSIGHT) (Spans 2 columns on desktop) */}
        <FadeIn className="md:col-span-2">
          <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Database size={18} />
                </span>
                <span className="text-xs font-mono text-text-secondary">Enterprise Systems</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary mb-2">
                RAG Architecture & Distributed Pipelines
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                Constructed FAISS and Microsoft Semantic Kernel agentic routing at Textron cutting
                misroutes by 40%. Engineered automated Apache Airflow (MWAA) pipelines on AWS at
                TransSIGHT, and architected high-throughput Spring Boot backends with Google Spanner at
                Kohl&rsquo;s.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
              {['FAISS', 'Semantic Kernel', 'Apache Airflow', 'AWS', 'Spring Boot', 'Google Spanner'].map(
                (tech) => (
                  <Badge key={tech}>{tech}</Badge>
                )
              )}
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  );
}
