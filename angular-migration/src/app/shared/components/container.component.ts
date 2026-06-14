import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ContainerComponent
 * Responsive container wrapper with customizable max-width
 */
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [ngClass]="{
        'max-w-xl': size === 'xl',
        'max-w-2xl': size === '2xl',
        'max-w-4xl': size === '4xl',
        'max-w-7xl': size === '7xl'
      }"
      class="mx-auto px-4 sm:px-6" 
      [class.py-12]="!noPadding"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ContainerComponent {
  @Input() noPadding = false;
  @Input() size: 'xl' | '2xl' | '4xl' | '7xl' = 'xl';
}
