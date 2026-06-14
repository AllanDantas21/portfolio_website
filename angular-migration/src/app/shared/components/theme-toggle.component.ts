import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../services/theme.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-9 h-9 flex items-center justify-center overflow-hidden">
      <!-- Sun icon for dark mode (click to go light) -->
      <button
        *ngIf="theme === 'dark'"
        (click)="toggleTheme()"
        [@themeAnim]
        class="absolute p-2 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        [attr.aria-label]="'Switch to light mode'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.93 4.93l1.59 1.59m10.96 10.96l1.59 1.59m-17.77 0l1.59-1.59M18.36 4.93l-1.59 1.59M21 12h-2.25M5.25 12H3m9-7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" />
        </svg>
      </button>

      <!-- Moon icon for light mode (click to go dark) -->
      <button
        *ngIf="theme === 'light'"
        (click)="toggleTheme()"
        [@themeAnim]
        class="absolute p-2 rounded-lg bg-purple-500/10 text-purple-700 hover:bg-purple-500/20 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
        [attr.aria-label]="'Switch to dark mode'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
        </svg>
      </button>
    </div>
  `,
  animations: [
    trigger('themeAnim', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(20px)', opacity: 0 }))
      ])
    ])
  ]
})
export class ThemeToggleComponent implements OnDestroy {
  theme: Theme = 'light';
  private sub: Subscription;

  constructor(private themeService: ThemeService) {
    this.sub = this.themeService.theme$.subscribe(t => {
      this.theme = t;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
