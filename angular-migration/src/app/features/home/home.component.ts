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
              <span class="text-lg">{{ link.icon }}</span>
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
    { href: 'https://github.com/Allandantas21', labelKey: 'social.github', icon: '🐙' },
    { href: 'https://www.linkedin.com/in/adn21/', labelKey: 'social.linkedin', icon: '💼' },
    { href: 'https://instagram.com/Allan.dants', labelKey: 'social.instagram', icon: '📸' },
    { href: 'https://profile.intra.42.fr/users/aldantas', labelKey: 'social.fortytwo', icon: '🎓' }
  ];

  constructor() {}

  ngOnInit() {}
}
