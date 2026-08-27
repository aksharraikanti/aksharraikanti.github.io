import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FadeIn } from '@/components/motion/FadeIn';

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About Me" title="Building agentic systems, one team at a time" />
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
        <FadeIn>
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl border border-border md:mx-0 md:w-full">
            <Image
              src="/images/profile-640.webp"
              alt="Akshar Raikanti"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-4 text-text-secondary">
          <p>
            I&rsquo;m a Computer Science and Artificial Intelligence student at Purdue University
            (B.S. in both, expected December 2026) who spends more time shipping agentic AI
            systems than sitting in lecture halls. Over the past two years I&rsquo;ve built
            production AI agents at Google and Tesla, co-founded and ran operations for a B2B AI
            startup that pitched to Y Combinator and a16z, and shipped RAG pipelines and backend
            systems at Textron, Kohl&rsquo;s, and TransSIGHT.
          </p>
          <p>
            My focus is on agentic AI &mdash; systems that reason, call tools, and take action
            autonomously &mdash; along with the RAG, vector search, and multi-agent orchestration
            infrastructure that makes them reliable in production. I&rsquo;m equally comfortable
            architecting a backend in Java Spring Boot or Node.js, training a model in PyTorch, or
            pitching a product roadmap to investors.
          </p>
          <p>
            Outside of internships and Brydge, I&rsquo;m usually deep in a systems-programming
            side project (see: a malloc implementation written from scratch) or building something
            new with LangChain, LangGraph, and whatever the latest model API has to offer.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
