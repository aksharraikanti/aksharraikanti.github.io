'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle } from 'lucide-react';
import { site } from '@/content/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import { submitToFormspree, type SubmitState } from '@/lib/formspree';

export function Contact() {
  const [state, setState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };

    setState('pending');
    const result = await submitToFormspree(site.formspreeEndpoint, data);
    setFeedback(result.message);
    setState(result.ok ? 'success' : 'error');
    if (result.ok) form.reset();
  }

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's talk" description="Have a role, project, or idea in mind? I'd love to hear about it." />
      <div className="grid gap-10 md:grid-cols-2">
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="focus-ring w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none"
              />
            </div>

            <Button type="submit" disabled={state === 'pending'} className="w-full sm:w-auto">
              {state === 'pending' && <Loader2 size={16} className="animate-spin" />}
              {state === 'pending' ? 'Sending…' : 'Send Message'}
            </Button>

            {state === 'success' && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}
            {state === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
              >
                <XCircle size={18} className="mt-0.5 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}
          </form>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-6">
          <a
            href={`mailto:${site.email}`}
            className="focus-ring flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
          >
            <Mail size={20} className="text-accent" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-text-secondary">{site.email}</p>
            </div>
          </a>
          <a
            href={site.phoneHref}
            className="focus-ring flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
          >
            <Phone size={20} className="text-accent" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-text-secondary">{site.phone}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
            <MapPin size={20} className="text-accent" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-text-secondary">{site.location}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
