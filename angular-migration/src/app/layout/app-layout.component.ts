import { Component, OnInit, OnDestroy } from '@angular/core';
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
    <div class="min-h-screen flex flex-col bg-white dark:bg-[#111827] text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <app-navbar></app-navbar>

      <!-- Main Content Container -->
      <main [@fadeInUp] class="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-20 pb-8">
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
  private themeSub!: Subscription;

  constructor(private themeService: ThemeService) {}

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
