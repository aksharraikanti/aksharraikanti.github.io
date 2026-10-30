'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle, Copy, Check, Send, Sparkles } from 'lucide-react';
import { site } from '@/content/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const fieldErrorClass = 'mt-1 text-xs text-red-500';

export function Contact() {
  const [state, handleSubmit] = useForm(site.formspreeFormId);
  const formErrors = state.errors?.getFormErrors() ?? [];
  const hasFormError = !state.submitting && !state.succeeded && formErrors.length > 0;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's build something remarkable"
        description="Currently exploring Software Engineering and AI/ML opportunities. Whether you have a role, collaboration, or question, I'd love to connect."
      />
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact Methods Cards (2 columns on lg) */}
        <FadeIn className="lg:col-span-2 space-y-4">
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs font-mono uppercase text-text-secondary">Direct Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-surface hover:border-accent text-xs font-medium text-text-primary transition-all active:scale-98"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
            </button>
          </SpotlightCard>

          <SpotlightCard className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs font-mono uppercase text-text-secondary">Phone</p>
                <a
                  href={site.phoneHref}
                  className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs font-mono uppercase text-text-secondary">Location</p>
                <p className="text-sm font-semibold text-text-primary">{site.location}</p>
              </div>
            </div>
          </SpotlightCard>

          <div className="p-4 rounded-xl border border-border bg-surface/50 text-xs font-mono text-text-secondary flex items-center gap-2">
            <Sparkles size={14} className="text-accent flex-shrink-0" />
            <span>Fast response time &bull; Open for Summer 2025/2026</span>
          </div>
        </FadeIn>

        {/* Message Form (3 columns on lg) */}
        <FadeIn delay={0.1} className="lg:col-span-3">
          <SpotlightCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-mono uppercase text-text-secondary">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="focus-ring w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-mono uppercase text-text-secondary">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="focus-ring w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={fieldErrorClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-mono uppercase text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Hi Akshar, I came across your portfolio and wanted to discuss an opportunity..."
                  className="focus-ring w-full resize-none rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={fieldErrorClass} />
              </div>

              <Button type="submit" disabled={state.submitting} className="w-full sm:w-auto">
                {state.submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                <span>{state.submitting ? 'Sending…' : 'Send Direct Message'}</span>
              </Button>

              {state.succeeded && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500 dark:text-emerald-400"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>Thanks for reaching out! I&rsquo;ll get back to you shortly.</span>
                </div>
              )}
              {hasFormError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500 dark:text-red-400"
                >
                  <XCircle size={18} className="mt-0.5 shrink-0" />
                  <span>
                    {formErrors.map((error) => error.message).join(', ')} — please try again or email me
                    directly.
                  </span>
                </div>
              )}
            </form>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  );
}
