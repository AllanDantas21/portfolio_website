import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="border-t border-gray-200/50 dark:border-gray-800/50 py-8 mt-auto backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {{ currentYear }} {{ 'general.name' | translate }}. All Rights Reserved.</p>
        <p class="mt-2 text-xs opacity-70">Built with Angular & Tailwind CSS.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
