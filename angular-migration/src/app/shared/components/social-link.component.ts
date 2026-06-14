import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { scaleIn } from '../../shared/animations';

/**
 * SocialLinkComponent
 * Social media link button
 */
@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      [@scaleIn]
      [href]="href"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-all duration-200"
      [attr.aria-label]="label"
    >
      <span *ngIf="icon" class="text-lg">{{ icon }}</span>
      <span>{{ label }}</span>
    </a>
  `,
  styles: [],
  animations: [scaleIn]
})
export class SocialLinkComponent {
  @Input() href = '#';
  @Input() label = '';
  @Input() icon?: string;
}
