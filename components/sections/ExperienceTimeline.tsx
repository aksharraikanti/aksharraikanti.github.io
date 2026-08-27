import { Sparkles } from 'lucide-react';
import { experience } from '@/content/experience';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { cn } from '@/lib/cn';
import { formatDateRange } from '@/lib/date';

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Seven roles across Big Tech, a startup I co-founded, and a handful of internships — reverse-chronological."
      />
      <ol className="relative space-y-8 border-l border-border pl-8">
        {experience.map((role, index) => (
          <FadeIn as="li" key={role.id} delay={index * 0.05} className="relative">
            <span
              className={cn(
                'absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-bg',
                role.featured ? 'bg-accent' : 'bg-text-secondary'
              )}
              aria-hidden="true"
            />
            <div
              className={cn(
                'rounded-2xl border p-6 transition-colors',
                role.featured
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-border bg-surface'
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{role.role}</h3>
                {role.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-contrast">
                    <Sparkles size={12} /> Co-Founder
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
              <p className="mt-1 text-sm text-text-secondary">
                {role.location} &middot; {formatDateRange(role.startDate, role.endDate)}
                {role.note ? ` (${role.note})` : ''}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {role.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {role.featured && (
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-accent/20 pt-6">
                  <AnimatedCounter value={20} suffix="+" label="Tools integrated" />
                  <AnimatedCounter value={5} label="Pilot customers" />
                  <AnimatedCounter value={4} label="VCs pitched" />
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
