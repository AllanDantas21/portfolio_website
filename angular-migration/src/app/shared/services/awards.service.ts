import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Award } from '../models';

/**
 * AwardsService
 * Manages awards and badges data
 */
@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  private awards: Award[] = [
    {
      id: 'rank-02',
      title: '42 Rank 02',
      description: 'Achieved Rank 02 in 42 School common core curriculum',
      category: 'Education',
      date: '2024'
    },
    {
      id: 'rank-03',
      title: '42 Rank 03',
      description: 'Achieved Rank 03 milestone in 42 School',
      category: 'Education',
      date: '2024'
    },
    {
      id: 'top-performer',
      title: 'Top Performer',
      description: 'Recognition for outstanding work at CI&T',
      category: 'Work',
      date: '2025'
    }
  ];

  private awardsSubject = new BehaviorSubject<Award[]>(this.awards);
  awards$ = this.awardsSubject.asObservable();

  constructor() {}

  /**
   * Get all awards
   */
  getAll(): Observable<Award[]> {
    return this.awards$;
  }

  /**
   * Get award by ID
   */
  getById(id: string): Observable<Award | undefined> {
    return new Observable(observer => {
      const award = this.awards.find(a => a.id === id);
      observer.next(award);
      observer.complete();
    });
  }

  /**
   * Get awards by category
   */
  getByCategory(category: string): Observable<Award[]> {
    return new Observable(observer => {
      const filtered = this.awards.filter(a => a.category === category);
      observer.next(filtered);
      observer.complete();
    });
  }

  /**
   * Get all categories
   */
  getCategories(): Observable<string[]> {
    return new Observable(observer => {
      const categories = new Set(this.awards.map(a => a.category).filter((c): c is string => Boolean(c)));
      observer.next(Array.from(categories));
      observer.complete();
    });
  }
}
