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
      id: 'hackathon1',
      title: 'Vale | 42Rio Hackathon',
      year: '2024',
      placement: '1st Place',
      badgeColor: 'gold',
      imageUrl: '/awards/vale.jpeg'
    },
    {
      id: 'hackathon2',
      title: 'Modular Carnival Hackathon',
      year: '2025',
      placement: '2nd Place',
      badgeColor: 'silver',
      imageUrl: '/awards/paga.jpeg'
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
}
