import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService]
    });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all projects', async () => {
    service.getAll().subscribe(projects => {
      expect(projects).toBeDefined();
      expect(projects.length).toBe(4);
      expect(projects[0].id).toBe('fdf');
    });
  });

  it('should fetch project details by ID', () => {
    service.getProjectDetail('fdf').subscribe(detail => {
      expect(detail).toBeDefined();
      expect(detail?.title).toBe('Fdf - Fil de Fer');
    });
  });

  it('should return undefined for non-existent project detail ID', () => {
    service.getProjectDetail('unknown').subscribe(detail => {
      expect(detail).toBeUndefined();
    });
  });

  it('should search projects by keyword', () => {
    service.search('Philo').subscribe(results => {
      expect(results.length).toBe(1);
      expect(results[0].id).toBe('philo');
    });
  });
});
