import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'portfolio',
    renderMode: RenderMode.Client,
  },
  {
    path: 'bio',
    renderMode: RenderMode.Client,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
