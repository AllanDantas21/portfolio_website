import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  ContainerComponent,
  HeroSectionComponent,
  SocialLinkComponent,
  BadgeComponent
} from '../../shared/components';
import { fadeInUp, scaleIn } from '../../shared/animations';

/**
 * HomeComponent
 * Portfolio landing page
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ContainerComponent,
    HeroSectionComponent,
    SocialLinkComponent,
    BadgeComponent
  ],
  template: `
    <app-container>
      <!-- Hero Section -->
      <app-hero-section
        [title]="'general.greeting' | translate"
        [subtitle]="'general.title' | translate"
        [description]="'home.bio' | translate"
      ></app-hero-section>

      <!-- Social Links Section -->
      <section class="py-12">
        <div class="flex flex-wrap justify-center gap-4">
          <app-social-link
            href="https://github.com/Allandantas21"
            label="@Allandantas21"
            icon="🐙"
          ></app-social-link>

          <app-social-link
            href="https://www.linkedin.com/in/adn21/"
            label="@Allan Dantas"
            icon="💼"
          ></app-social-link>

          <app-social-link
            href="https://instagram.com/Allan.dants"
            label="@Allan.dants"
            icon="📸"
          ></app-social-link>

          <app-social-link
            href="https://profile.intra.42.fr/users/aldantas"
            label="{{ 'social.fortytwo' | translate }}"
            icon="🎓"
          ></app-social-link>
        </div>
      </section>

      <!-- CTA Section -->
      <section [@fadeInUp] class="py-12 text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ 'home.cta' | translate }}
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            class="px-6 py-3 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors font-semibold"
          >
            {{ 'buttons.viewProjects' | translate }}
          </a>
          <a
            href="/skills"
            class="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold"
          >
            {{ 'buttons.learnMore' | translate }}
          </a>
        </div>
      </section>
    </app-container>
  `,
  styles: [],
  animations: [fadeInUp, scaleIn]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
