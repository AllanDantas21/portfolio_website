import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SkillItem, LanguageSkill } from '../models';

/**
 * SkillsService
 * Manages skills and programming languages data
 */
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private programmingSkills: SkillItem[] = [
    { name: 'C', level: 95, category: 'Systems', color: '#A8B9CC' },
    { name: 'C++', level: 90, category: 'Systems', color: '#00599C' },
    { name: 'Python', level: 85, category: 'Backend', color: '#3776AB' },
    { name: 'Java', level: 75, category: 'Backend', color: '#ED8B00' },
    { name: 'Rust', level: 70, category: 'Systems', color: '#CE422B' },
    { name: 'TypeScript', level: 82, category: 'Frontend', color: '#3178C6' }
  ];

  private webSkills: SkillItem[] = [
    { name: 'JavaScript', level: 88, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', level: 85, category: 'Frontend', color: '#61DAFB' },
    { name: 'Next.js', level: 80, category: 'Framework', color: '#000000' },
    { name: 'Angular', level: 85, category: 'Frontend', color: '#DD0031' }
  ];

  private toolsSkills: SkillItem[] = [
    { name: 'Linux', level: 92, category: 'OS', color: '#FCC624' },
    { name: 'Git', level: 88, category: 'VCS', color: '#F05032' },
    { name: 'Docker', level: 75, category: 'DevOps', color: '#2496ED' },
    { name: 'Nginx', level: 70, category: 'Web Server', color: '#009639' },
    { name: 'Bash', level: 85, category: 'Shell', color: '#4EAA25' },
    { name: 'Vim', level: 80, category: 'Editor', color: '#019733' },
    { name: 'SQL Server', level: 75, category: 'Database', color: '#CC2927' },
    { name: 'Prompt Flow', level: 65, category: 'AI/ML', color: '#0078D4' },
    { name: 'MCP', level: 70, category: 'Protocol', color: '#6366F1' }
  ];

  private languageSkills: LanguageSkill[] = [
    { language: 'portuguese', level: 100, description: 'nativeDescription' },
    { language: 'english', level: 70, description: 'englishDescription' }
  ];

  private softSkills: string[] = [
    'teamwork',
    'problemSolving',
    'selfLearning',
    'adaptability',
    'resilience',
    'communication'
  ];

  private programmingSubject = new BehaviorSubject<SkillItem[]>(this.programmingSkills);
  private webSubject = new BehaviorSubject<SkillItem[]>(this.webSkills);
  private toolsSubject = new BehaviorSubject<SkillItem[]>(this.toolsSkills);
  private languagesSubject = new BehaviorSubject<LanguageSkill[]>(this.languageSkills);
  private softSkillsSubject = new BehaviorSubject<string[]>(this.softSkills);

  programming$ = this.programmingSubject.asObservable();
  web$ = this.webSubject.asObservable();
  tools$ = this.toolsSubject.asObservable();
  languages$ = this.languagesSubject.asObservable();
  softSkills$ = this.softSkillsSubject.asObservable();

  /**
   * Get all programming skills
   */
  getProgrammingSkills(): Observable<SkillItem[]> {
    return this.programming$;
  }

  /**
   * Get all web skills
   */
  getWebSkills(): Observable<SkillItem[]> {
    return this.web$;
  }

  /**
   * Get all tools skills
   */
  getToolsSkills(): Observable<SkillItem[]> {
    return this.tools$;
  }

  /**
   * Get language skills
   */
  getLanguageSkills(): Observable<LanguageSkill[]> {
    return this.languages$;
  }

  /**
   * Get soft skills
   */
  getSoftSkills(): Observable<string[]> {
    return this.softSkills$;
  }

  /**
   * Get skills by category
   */
  getByCategory(category: string): Observable<SkillItem[]> {
    return new Observable(observer => {
      const all = [...this.programmingSkills, ...this.webSkills, ...this.toolsSkills];
      const filtered = all.filter(s => s.category === category);
      observer.next(filtered);
      observer.complete();
    });
  }

  /**
   * Get skill by name
   */
  getByName(name: string): Observable<SkillItem | undefined> {
    return new Observable(observer => {
      const all = [...this.programmingSkills, ...this.webSkills, ...this.toolsSkills];
      const skill = all.find(s => s.name === name);
      observer.next(skill);
      observer.complete();
    });
  }
}
