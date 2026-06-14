import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService, Theme } from '../shared/services/theme.service';
import { fadeInUp } from '../shared/animations';
import { Subscription } from 'rxjs';

/**
 * AppLayoutComponent
 * Main layout wrapper for the application
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-app-bg-light dark:bg-app-bg-dark text-app-text-light dark:text-app-text-dark transition-colors duration-300">
      <app-navbar></app-navbar>

      <!-- Main Content Container -->
      <main [@fadeInUp] class="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-20 pb-8">
        <ng-content></ng-content>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  theme: Theme = 'light';
  private themeService = inject(ThemeService);
  private themeSub!: Subscription;

  ngOnInit() {
    this.themeSub = this.themeService.theme$.subscribe(t => {
      this.theme = t;
    });
  }

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}
