import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExperienceItem } from '../models';

/**
 * ExperienceService
 * Manages work experience and timeline data
 */
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: ExperienceItem[] = [
    {
      id: 'ciandt-analyst',
      year: 'nov 2025 - presente',
      title: 'Systems Analyst Jr',
      company: 'CI&T',
      description: 'Currently working as Systems Analyst Jr at CI&T, developing solutions with modern technologies.',
      technologies: ['C#', 'AngularJS'],
      color: '#2D3748',
      location: 'Rio de Janeiro, Brasil',
      type: 'Full-time'
    },
    {
      id: 'ciandt-intern',
      year: 'mar 2025 - nov 2025',
      title: 'Software Engineering Intern',
      company: 'CI&T',
      description: 'Developed and maintained scalable microservices using Java and Spring Boot, applied TDD and DDD practices. Worked with AI agents using Python and Prompt Flow. Analytics with Looker Studio and data orchestration with Google Apps Script.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Prompt Flow', 'Looker Studio', 'Google Apps Script', 'TDD', 'DDD'],
      color: '#1A202C',
      location: 'Rio de Janeiro, Brasil · Remote',
      type: 'Part-time'
    },
    {
      id: 'fortytwo-rio',
      year: 'oct 2024 - mar 2025',
      title: 'Software Developer',
      company: '42 | RIO',
      description: 'Developed and automated data ingestion, transformation and validation processes. Optimized data pipeline for claims management at Austral insurance.',
      technologies: ['Python', 'Microsoft SQL Server', 'Dagster', 'Docker', 'Great Expectations', 'Linux', 'Git'],
      color: '#553C9A',
      location: 'Rio de Janeiro, Brasil',
      type: 'Internship'
    },
    {
      id: 'ruminante',
      year: 'Feb 2024 - set 2024',
      title: 'Software Developer',
      company: 'Ruminante',
      description: 'Developed and implemented web applications using modern stack with React, Next.js, Tailwind CSS and Golang. Deepened expertise in software architecture and distributed systems design.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Golang', 'TypeScript'],
      color: '#C05621',
      location: 'Rio de Janeiro, Brasil · Remote',
      type: 'Freelance'
    }
  ];

  private experiencesSubject = new BehaviorSubject<ExperienceItem[]>(this.experiences);
  experiences$ = this.experiencesSubject.asObservable();

  constructor() {}

  /**
   * Get all experiences
   */
  getAll(): Observable<ExperienceItem[]> {
    return this.experiences$;
  }

  /**
   * Get experience by ID
   */
  getById(id: string): Observable<ExperienceItem | undefined> {
    return new Observable(observer => {
      const experience = this.experiences.find(e => e.id === id);
      observer.next(experience);
      observer.complete();
    });
  }

  /**
   * Get experiences sorted by year (most recent first)
   */
  getChronological(): Observable<ExperienceItem[]> {
    return new Observable(observer => {
      const sorted = [...this.experiences].reverse();
      observer.next(sorted);
      observer.complete();
    });
  }

  /**
   * Get experiences by company
   */
  getByCompany(company: string): Observable<ExperienceItem[]> {
    return new Observable(observer => {
      const filtered = this.experiences.filter(e => e.company === company);
      observer.next(filtered);
      observer.complete();
    });
  }

  /**
   * Get all unique technologies used
   */
  getAllTechnologies(): Observable<string[]> {
    return new Observable(observer => {
      const techs = new Set<string>();
      this.experiences.forEach(exp => {
        exp.technologies.forEach(tech => techs.add(tech));
      });
      observer.next(Array.from(techs).sort());
      observer.complete();
    });
  }
}
