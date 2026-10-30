import { skills } from '@/content/skills';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Arsenal"
        title="Languages, frameworks & infrastructure"
        description="Core competencies developed across systems programming, large-scale distributed backends, and agentic AI platforms."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.06} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-7">
              <h3 className="mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} className="text-xs py-1.5 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
