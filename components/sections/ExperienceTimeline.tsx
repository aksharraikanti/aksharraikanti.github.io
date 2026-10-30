'use client';

import { Sparkles, Calendar, MapPin, Building2 } from 'lucide-react';
import { experience } from '@/content/experience';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { formatDateRange } from '@/lib/date';

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built & led"
        description="Seven roles across Big Tech, a startup I co-founded, and high-impact engineering internships — reverse-chronological."
      />
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8 ml-2 sm:ml-4">
        {experience.map((role, index) => (
          <FadeIn as="li" key={role.id} delay={index * 0.05} className="relative group">
            {/* Timeline node */}
            <span
              className={`absolute left-0 -translate-x-1/2 top-6 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                role.featured
                  ? 'border-accent bg-accent ring-4 ring-accent/20'
                  : 'border-border bg-surface group-hover:border-accent'
              }`}
              aria-hidden="true"
            />

            {/* Spotlight Card */}
            <SpotlightCard
              className={`p-6 sm:p-7 ${
                role.featured
                  ? 'border-accent/40 bg-accent/5'
                  : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary">
                      {role.role}
                    </h3>
                    {role.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-contrast">
                        <Sparkles size={12} /> Co-Founder
                      </span>
                    )}
                    {role.company === 'Google' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-blue-500 dark:text-blue-400">
                        Big Tech
                      </span>
                    )}
                    {role.company === 'Tesla' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-red-500 dark:text-red-400">
                        Autonomous Systems
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-base font-semibold text-accent flex items-center gap-1.5">
                    <Building2 size={16} />
                    {role.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatDateRange(role.startDate, role.endDate)}
                    {role.note ? ` (${role.note})` : ''}
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5">
                    <MapPin size={14} />
                    {role.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-sm text-text-secondary leading-relaxed">
                {role.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Startup Metrics */}
              {role.featured && (
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-accent/20 pt-6">
                  <AnimatedCounter value={20} suffix="+" label="Tools integrated" />
                  <AnimatedCounter value={5} label="Pilot customers" />
                  <AnimatedCounter value={4} label="VCs pitched" />
                </div>
              )}

              {/* Skills Badges */}
              <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-1.5">
                {role.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
