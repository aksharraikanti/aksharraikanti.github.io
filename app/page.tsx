import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/sections/About';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Skills } from '@/components/sections/Skills';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}
