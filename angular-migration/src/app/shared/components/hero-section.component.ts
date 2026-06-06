import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../shared/animations';

/**
 * HeroSectionComponent
 * Hero section with title and description
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [@fadeInUp] class="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ title }}
        </h1>
        <p *ngIf="subtitle" class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {{ subtitle }}
        </p>
        <div *ngIf="description" class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ description }}
        </div>
      </div>
    </section>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class HeroSectionComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() description?: string;
}
