import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeColor = 'gold' | 'silver' | 'bronze' | 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'purple' | 'pink' | 'yellow' | 'orange' | 'cyan';

/**
 * BadgeComponent
 * Displays a colored badge/label
 */
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [ngClass]="['badge', 'badge-' + color]" class="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
      {{ label }}
    </span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .badge-red {
      background-color: #fecaca;
      color: #7f1d1d;
    }

    .badge-green {
      background-color: #bbf7d0;
      color: #065f46;
    }

    .badge-blue {
      background-color: #bfdbfe;
      color: #1e3a8a;
    }

    .badge-purple {
      background-color: #ddd6fe;
      color: #4c1d95;
    }

    .badge-yellow {
      background-color: #fef3c7;
      color: #78350f;
    }

    .badge-orange {
      background-color: #fed7aa;
      color: #7c2d12;
    }

    .badge-pink {
      background-color: #fbcfe8;
      color: #831843;
    }

    .badge-cyan {
      background-color: #a5f3fc;
      color: #164e63;
    }

    .badge-teal {
      background-color: #99f6e4;
      color: #134e4a;
    }

    .badge-gray {
      background-color: #e5e7eb;
      color: #374151;
    }

    .badge-gold {
      background-color: #fef3c7;
      color: #78350f;
    }

    .badge-silver {
      background-color: #f3f4f6;
      color: #1f2937;
    }

    .badge-bronze {
      background-color: #fed7aa;
      color: #7c2d12;
    }
  `]
})
export class BadgeComponent {
  @Input() label = '';
  @Input() color: BadgeColor = 'gray';
}
