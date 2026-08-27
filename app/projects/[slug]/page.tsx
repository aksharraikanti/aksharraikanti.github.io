import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}/`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <a
          href="/#projects"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary"
        >
          <ArrowLeft size={16} /> Back to projects
        </a>

        <FadeIn className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-3 text-text-secondary">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-text-secondary">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.githubUrl && (
              <LinkButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="primary">
                <Github size={16} /> View on GitHub
              </LinkButton>
            )}
            {project.liveUrl && (
              <LinkButton href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
                <ExternalLink size={16} /> Live demo
              </LinkButton>
            )}
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
