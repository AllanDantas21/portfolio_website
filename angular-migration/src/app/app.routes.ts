import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Placeholder for future routes
  // { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
  // { path: 'skills', loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent) },
  // { path: 'awards', loadComponent: () => import('./features/awards/awards.component').then(m => m.AwardsComponent) },
];
