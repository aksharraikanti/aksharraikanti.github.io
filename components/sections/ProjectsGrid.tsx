import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/content/projects';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';

export function ProjectsGrid() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of AI-powered apps and systems-programming projects, each with its own write-up."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <Link
              href={`/projects/${project.slug}/`}
              className="focus-ring group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              {project.githubUrl && (
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-text-secondary">
                  <Github size={14} /> View source
                </span>
              )}
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
