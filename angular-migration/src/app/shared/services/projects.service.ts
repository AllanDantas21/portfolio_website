import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectDetail, BadgeColor } from '../models';

/**
 * ProjectsService
 * Manages portfolio projects data
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'fdf',
      badgeLabel: 'FDF',
      badgeColor: 'purple' as BadgeColor,
      difficulty: 'RANK 02'
    },
    {
      id: 'philo',
      badgeLabel: 'Philosophers',
      badgeColor: 'blue' as BadgeColor,
      difficulty: 'RANK 03'
    },
    {
      id: 'push_swap',
      badgeLabel: 'Push Swap',
      badgeColor: 'green' as BadgeColor,
      difficulty: 'RANK 02'
    },
    {
      id: 'minishell',
      badgeLabel: 'Minishell',
      badgeColor: 'red' as BadgeColor,
      difficulty: 'RANK 03'
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSubject.asObservable();

  constructor() {}

  /**
   * Get all projects
   */
  getAll(): Observable<Project[]> {
    return this.projects$;
  }

  /**
   * Get project by ID
   */
  getById(id: string): Observable<Project | undefined> {
    return new Observable(observer => {
      const project = this.projects.find(p => p.id === id);
      observer.next(project);
      observer.complete();
    });
  }

  /**
   * Search projects by keyword
   */
  search(keyword: string): Observable<Project[]> {
    return new Observable(observer => {
      const filtered = this.projects.filter(p =>
        p.badgeLabel.toLowerCase().includes(keyword.toLowerCase()) ||
        p.id.toLowerCase().includes(keyword.toLowerCase())
      );
      observer.next(filtered);
      observer.complete();
    });
  }
}
