import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'projects', 
    title: 'nav.projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) 
  },
  { 
    path: 'projects/:projectId', 
    title: 'nav.projects',
    loadComponent: () => import('./features/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent) 
  },
  { 
    path: 'skills', 
    title: 'nav.skills',
    loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent) 
  },
  { 
    path: 'awards', 
    title: 'nav.awards',
    loadComponent: () => import('./features/awards/awards.component').then(m => m.AwardsComponent) 
  },
  { 
    path: 'terminal', 
    title: 'nav.terminal',
    loadComponent: () => import('./features/terminal/terminal.component').then(m => m.TerminalComponent) 
  },
  { 
    path: '42', 
    title: 'nav.game',
    loadComponent: () => import('./features/game-42/game-42.component').then(m => m.Game42Component) 
  },
  {
    path: '404',
    title: 'notFound.title',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    title: 'notFound.title',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
