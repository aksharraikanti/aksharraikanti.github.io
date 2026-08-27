import { skills } from '@/content/skills';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Tools I reach for" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, index) => (
          <FadeIn
            key={group.category}
            delay={index * 0.06}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
