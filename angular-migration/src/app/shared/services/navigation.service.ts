import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

/**
 * NavigationService
 * Manages application navigation and routes
 */
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentRouteSubject = new BehaviorSubject<string>('/');
  currentRoute$: Observable<string> = this.currentRouteSubject.asObservable();

  private navItems: NavItem[] = [
    { label: 'nav.home', path: '/' },
    { label: 'nav.projects', path: '/projects' },
    { label: 'nav.skills', path: '/skills' },
    { label: 'nav.awards', path: '/awards' }
  ];

  constructor(private router: Router) {
    this.trackRouteChanges();
  }

  getNavItems(): NavItem[] {
    return this.navItems;
  }

  navigate(path: string, queryParams?: any): Promise<boolean> {
    if (queryParams) {
      return this.router.navigate([path], { queryParams });
    }
    return this.router.navigate([path]);
  }

  navigateToProject(projectId: string): Promise<boolean> {
    return this.navigate(`/projects/${projectId}`);
  }

  /**
   * Track route changes
   */
  private trackRouteChanges(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRouteSubject.next(event.urlAfterRedirects);
    });
  }

  getCurrentRoute(): string {
    return this.currentRouteSubject.value;
  }


  isRouteActive(path: string): boolean {
    return this.currentRouteSubject.value === path;
  }

  /**
   * Go back
   */
  goBack(): void {
    window.history.back();
  }
}
