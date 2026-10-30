import { Hero } from '@/components/hero/Hero';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { About } from '@/components/sections/About';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <About />
      <ExperienceTimeline />
      <ProjectsGrid />
      <Skills />
      <Contact />
    </main>
  );
}
