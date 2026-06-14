import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components';
import { fadeInUp } from '../../shared/animations';

interface SocialLink {
  href: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ContainerComponent
  ],
  template: `
    <app-container>
      <!-- Greeting Banner -->
      <div [@fadeInUp] class="mb-8 p-3 rounded-lg bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-gray-800/50 text-center text-sm tracking-wide font-medium backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-default select-none">
        {{ 'general.greeting' | translate }}
      </div>

      <!-- Header Info (Name, Title, Avatar) -->
      <div [@fadeInUp] class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mb-10">
        <div class="text-center md:text-left flex-1">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ 'general.name' | translate }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mt-1.5 text-sm sm:text-base">
            {{ 'general.title' | translate }}
          </p>
        </div>
        <div class="flex-shrink-0">
          <img
            src="/images/allan.jpeg"
            [alt]="'general.name' | translate"
            class="w-24 h-24 rounded-full border-2 border-gray-200 dark:border-gray-800 shadow-md object-cover select-none pointer-events-none"
          />
        </div>
      </div>

      <!-- Bio / About Section -->
      <section [@fadeInUp] class="mb-12">
        <h3 class="text-lg font-bold border-b-2 border-teal-500 inline-block pb-1 mb-4 text-gray-900 dark:text-white">
          {{ 'navigation.about' | translate }}
        </h3>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
          {{ 'description.about' | translate }}
        </p>
        <div class="text-center mt-8">
          <a
            routerLink="/projects"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600 active:scale-95 transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-teal-500/20"
          >
            {{ 'description.portfolio' | translate }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </section>

      <!-- Web / Social Section -->
      <section [@fadeInUp] class="mb-12">
        <h3 class="text-lg font-bold border-b-2 border-teal-500 inline-block pb-1 mb-4 text-gray-900 dark:text-white">
          {{ 'navigation.web' | translate }}
        </h3>
        <ul class="space-y-2.5">
          <li *ngFor="let link of socialLinks">
            <a
              [href]="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-teal-600 dark:text-teal-400 font-semibold hover:bg-teal-500/10 active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              <!-- Icon Container -->
              <span class="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <ng-container [ngSwitch]="link.labelKey">
                  <!-- GitHub Icon -->
                  <svg *ngSwitchCase="'social.github'" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <!-- LinkedIn Icon -->
                  <svg *ngSwitchCase="'social.linkedin'" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <!-- Instagram Icon -->
                  <svg *ngSwitchCase="'social.instagram'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <!-- 42 Icon -->
                  <img *ngSwitchCase="'social.fortytwo'" src="https://cdn.simpleicons.org/42/currentColor" class="w-5 h-5 object-contain" alt="42" />
                </ng-container>
              </span>
              <span>{{ link.labelKey | translate }}</span>
            </a>
          </li>
        </ul>
      </section>

      <!-- CV Download Button Section -->
      <div [@fadeInUp] class="text-center py-4 border-t border-gray-100 dark:border-gray-900">
        <a
          [href]="'footer.resumeLink' | translate"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600 active:scale-95 transition-all duration-200 font-semibold text-sm shadow-sm hover:shadow-teal-500/20"
        >
          {{ 'navigation.resume' | translate }}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>
    </app-container>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class HomeComponent implements OnInit {
  socialLinks: SocialLink[] = [
    { href: 'https://github.com/Allandantas21', labelKey: 'social.github', icon: '' },
    { href: 'https://www.linkedin.com/in/adn21/', labelKey: 'social.linkedin', icon: '' },
    { href: 'https://instagram.com/Allan.dants', labelKey: 'social.instagram', icon: '' },
    { href: 'https://profile.intra.42.fr/users/aldantas', labelKey: 'social.fortytwo', icon: '' }
  ];

  constructor() {}

  ngOnInit() {}
}
