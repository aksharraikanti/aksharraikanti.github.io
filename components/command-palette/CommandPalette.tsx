'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FileText, Github, Linkedin, Mail, Moon, Sun, User, Briefcase, Sparkles, FolderGit2 } from 'lucide-react';
import { site } from '@/content/site';
import { projects } from '@/content/projects';
import { useCommandPalette } from './CommandPaletteProvider';

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  function go(path: string) {
    setOpen(false);
    router.push(path);
  }

  function goExternal(url: string) {
    setOpen(false);
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[60] bg-black/40"
      contentClassName="fixed left-1/2 top-24 z-[70] w-[min(32rem,90vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
    >
      <Command.Input
        placeholder="Jump to a section, project, or action..."
        className="focus-ring w-full border-b border-border bg-transparent px-4 py-4 text-base outline-none placeholder:text-text-secondary"
      />
      <Command.List className="max-h-96 overflow-y-auto p-2">
        <Command.Empty className="px-4 py-6 text-sm text-text-secondary">No results found.</Command.Empty>

        <Command.Group heading="Navigate" className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-text-secondary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
          <Item icon={<User size={16} />} onSelect={() => go('/#about')}>About</Item>
          <Item icon={<Briefcase size={16} />} onSelect={() => go('/#experience')}>Experience</Item>
          <Item icon={<Sparkles size={16} />} onSelect={() => go('/#skills')}>Skills</Item>
          <Item icon={<FolderGit2 size={16} />} onSelect={() => go('/#projects')}>Projects</Item>
          <Item icon={<Mail size={16} />} onSelect={() => go('/#contact')}>Contact</Item>
        </Command.Group>

        <Command.Group heading="Projects" className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-text-secondary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
          {projects.map((project) => (
            <Item key={project.slug} icon={<FolderGit2 size={16} />} onSelect={() => go(`/projects/${project.slug}/`)}>
              {project.title}
            </Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions" className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-text-secondary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
          <Item icon={<FileText size={16} />} onSelect={() => goExternal(site.resumePath)}>Open Resume</Item>
          <Item icon={<Github size={16} />} onSelect={() => goExternal(site.github)}>Open GitHub</Item>
          <Item icon={<Linkedin size={16} />} onSelect={() => goExternal(site.linkedin)}>Open LinkedIn</Item>
          <Item
            icon={resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            onSelect={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
              setOpen(false);
            }}
          >
            Toggle theme
          </Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

function Item({
  children,
  icon,
  onSelect,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary aria-selected:bg-bg"
    >
      <span className="text-text-secondary">{icon}</span>
      {children}
    </Command.Item>
  );
}
