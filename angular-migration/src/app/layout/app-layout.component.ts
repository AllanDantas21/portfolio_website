import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../shared/services/theme.service';
import { LanguageService } from '../shared/services/language.service';
import { fadeInUp } from '../shared/animations';

/**
 * AppLayoutComponent
 * Main layout wrapper for the application
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <div class="min-h-screen flex flex-col" [class.dark]="(theme$ | async) === 'dark'">
      <!-- Header/Navbar -->
      <header class="border-b border-gray-200 dark:border-gray-800">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <a href="/" class="text-2xl font-bold text-primary">
                {{ 'general.name' | translate }}
              </a>
            </div>
            <div class="flex items-center gap-4">
              <!-- Theme Toggle -->
              <button
                (click)="toggleTheme()"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                [attr.aria-label]="'Toggle theme'"
              >
                <span *ngIf="(theme$ | async) === 'light'">🌙</span>
                <span *ngIf="(theme$ | async) === 'dark'">☀️</span>
              </button>

              <!-- Language Toggle -->
              <button
                (click)="toggleLanguage()"
                class="px-3 py-2 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors font-semibold"
              >
                {{ (language$ | async) === 'en' ? 'PT' : 'EN' }}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="flex-1">
        <ng-content></ng-content>
      </main>

      <!-- Footer -->
      <footer class="border-t border-gray-200 dark:border-gray-800 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 {{ 'general.name' | translate }}. Built with Angular & TypeScript.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class AppLayoutComponent implements OnInit {
  theme$!: any;
  language$!: any;

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.theme$ = this.themeService.theme$;
    this.language$ = this.languageService.currentLanguage$;
  }

  ngOnInit() {
    // Theme is handled by service
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
