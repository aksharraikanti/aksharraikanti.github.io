import Link from 'next/link';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projects } from '@/content/projects';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function ProjectsGrid() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Systems & AI Applications"
        description="Distributed consensus in Go, multi-agent LLM evaluation harnesses, low-level systems in C++, and production AI platforms."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05} className="h-full">
            <SpotlightCard className="group flex h-full flex-col justify-between p-6">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-2 py-0.5 text-xxs font-mono font-medium text-accent">
                        <Sparkles size={10} /> Featured
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="focus-ring p-1 rounded-lg text-text-secondary hover:text-accent transition-colors"
                    aria-label={`View write-up for ${project.title}`}
                  >
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </Link>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 4).map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="hover:text-accent transition-colors flex items-center gap-1 font-sans font-medium"
                  >
                    <span>Read Architecture</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={14} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
