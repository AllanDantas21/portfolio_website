import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ContainerComponent
 * Responsive container wrapper
 */
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" [class.py-12]="!noPadding">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ContainerComponent {
  @Input() noPadding = false;
}
