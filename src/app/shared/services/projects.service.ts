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

  private projectDetails: ProjectDetail[] = [
    {
      id: 'fdf',
      title: 'Fdf - Fil de Fer',
      date: '10/2023',
      image1: '/images/content/fdf1.0.avif',
      image2: '/images/content/fdf2.0.avif',
      description1: 'projects.fdf.description1',
      description2: 'projects.fdf.description2',
      repoLink: 'https://github.com/AllanDantas21/fdf/'
    },
    {
      id: 'philo',
      title: 'Philosophers',
      date: '05/2024',
      image1: '/images/content/philo1.webp',
      description1: 'projects.philo.description1',
      description2: 'projects.philo.description2',
      repoLink: 'https://github.com/AllanDantas21/philosophers'
    },
    {
      id: 'push_swap',
      title: 'Push Swap',
      date: '01/2024',
      image1: '/images/content/Tower_of_hanoi.webp',
      description1: 'projects.push_swap.description1',
      description2: 'projects.push_swap.description2',
      description3: 'projects.push_swap.description3',
      description4: 'projects.push_swap.description4',
      description5: 'projects.push_swap.description5',
      repoLink: 'https://github.com/AllanDantas21/push_swap/'
    },
    {
      id: 'minishell',
      title: 'Minishell',
      date: '26/05/2024',
      image1: '/images/content/bash-img.webp',
      description1: 'projects.minishell.description1',
      description2: 'projects.minishell.description2',
      repoLink: 'https://github.com/AllanDantas21/42cursus_minishell'
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSubject.asObservable();

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
   * Get project detail by ID
   */
  getProjectDetail(id: string): Observable<ProjectDetail | undefined> {
    return new Observable(observer => {
      const detail = this.projectDetails.find(p => p.id === id);
      observer.next(detail);
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
