import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}/`,
    lastModified: new Date(),
  }));

  return [
    { url: `${site.url}/`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
