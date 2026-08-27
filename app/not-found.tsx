import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/" variant="primary">
            Back home
          </LinkButton>
          <LinkButton href="/#projects" variant="secondary">
            View projects
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}
