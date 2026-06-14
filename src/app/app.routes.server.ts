import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:projectId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { projectId: 'fdf' },
        { projectId: 'philo' },
        { projectId: 'push_swap' },
        { projectId: 'minishell' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
