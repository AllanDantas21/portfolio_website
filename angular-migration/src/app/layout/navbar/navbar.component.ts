import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent, ThemeToggleComponent } from '../../shared/components';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';

interface NavItem {
  href: string;
  labelKey: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LogoComponent,
    ThemeToggleComponent
  ],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-md"
         [ngClass]="{
           'bg-white/40 dark:bg-app-bg-dark/40 border-gray-200/20 dark:border-gray-800/20': !isScrolled,
           'bg-white/80 dark:bg-app-bg-dark/80 shadow-sm border-gray-200/50 dark:border-gray-800/50': isScrolled
         }">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 py-2">
        <div class="flex items-center justify-between h-12">
          <!-- Logo & Brand -->
          <div class="flex-shrink-0">
            <app-logo></app-logo>
          </div>

          <!-- Desktop Navigation Menu -->
          <div class="hidden md:flex items-center gap-1 font-medium">
            <ng-container *ngFor="let item of navItems">
              <a *ngIf="!item.isExternal"
                 [routerLink]="item.href"
                 routerLinkActive="bg-[#88ccca] text-[#202023] dark:bg-teal-500/20 dark:text-teal-300 font-semibold"
                 [routerLinkActiveOptions]="{ exact: item.href === '/' }"
                 class="px-3 py-1.5 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-200">
                {{ item.labelKey | translate }}
              </a>
              <a *ngIf="item.isExternal"
                 [href]="item.href"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-200">
                 <svg class="w-4 h-4 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                 </svg>
                {{ item.labelKey | translate }}
              </a>
            </ng-container>
          </div>

          <!-- Utility items on the right -->
          <div class="flex items-center gap-2">
            <!-- Language Switcher -->
            <button
              (click)="toggleLanguage()"
              class="px-2.5 py-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 active:scale-95 transition-all duration-200 text-xs font-bold tracking-wider"
              [attr.aria-label]="'Toggle language'"
            >
              {{ currentLang === 'en' ? 'PORTUGUÊS' : 'ENGLISH' }}
            </button>

            <!-- Theme Toggle Component -->
            <app-theme-toggle></app-theme-toggle>

            <!-- Mobile Menu Switcher -->
            <button
              (click)="isMobileMenuOpen = !isMobileMenuOpen"
              class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              [attr.aria-expanded]="isMobileMenuOpen"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" *ngIf="!isMobileMenuOpen">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" *ngIf="isMobileMenuOpen">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div class="md:hidden transition-all duration-300 ease-in-out border-t border-gray-200/30 dark:border-gray-800/30 bg-white/95 dark:bg-app-bg-dark/95"
           [ngClass]="{
             'max-h-0 overflow-hidden opacity-0 invisible': !isMobileMenuOpen, 
             'max-h-[300px] opacity-100 visible py-2': isMobileMenuOpen
           }"
           id="mobile-menu">
        <div class="px-4 space-y-1">
          <ng-container *ngFor="let item of mobileItems">
            <a *ngIf="!item.isExternal"
               [routerLink]="item.href"
               (click)="isMobileMenuOpen = false"
               routerLinkActive="bg-[#88ccca] text-[#202023] dark:bg-teal-500/20 dark:text-teal-300 font-semibold"
               [routerLinkActiveOptions]="{ exact: item.href === '/' }"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-200">
              {{ item.labelKey | translate }}
            </a>
            <a *ngIf="item.isExternal"
               [href]="item.href"
               target="_blank"
               rel="noopener noreferrer"
               (click)="isMobileMenuOpen = false"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-200">
              {{ item.labelKey | translate }}
            </a>
          </ng-container>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLang = 'en';
  private scrollListener!: () => void;
  private langSub!: Subscription;

  navItems: NavItem[] = [
    { href: '/projects', labelKey: 'nav.projects' },
    { href: '/awards', labelKey: 'nav.awards' },
    { href: '/skills', labelKey: 'nav.skills' },
    { href: '/terminal', labelKey: 'nav.terminal' },
    { href: 'https://github.com/AllanDantas21/Portfolio-Website', labelKey: 'nav.source', isExternal: true }
  ];

  mobileItems: NavItem[] = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/projects', labelKey: 'nav.projects' },
    { href: '/awards', labelKey: 'nav.awards' },
    { href: '/skills', labelKey: 'nav.skills' },
    { href: '/terminal', labelKey: 'nav.terminal' },
    { href: 'https://github.com/AllanDantas21', labelKey: 'nav.viewGithub', isExternal: true }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.langSub = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });

    if (typeof window !== 'undefined') {
      this.scrollListener = () => {
        this.isScrolled = window.scrollY > 20;
      };
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}
