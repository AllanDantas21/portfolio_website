import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerComponent } from '../../shared/components';
import { AwardsService } from '../../shared/services/awards.service';
import { Award } from '../../shared/models';
import { fadeInUp } from '../../shared/animations';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContainerComponent],
  template: `
    <app-container>
      <!-- Header -->
      <div [@fadeInUp] class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ 'awards.awardsTitle' | translate }}
        </h2>
      </div>

      <!-- Awards List Stack -->
      <div [@fadeInUp] class="space-y-10">
        <div
          *ngFor="let award of awards"
          class="bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col md:flex-row items-center gap-8">
            <!-- Image Column -->
            <div class="w-full md:w-[40%] flex items-center justify-center flex-shrink-0 select-none">
              <img
                [src]="award.imageUrl"
                [alt]="award.title"
                class="max-w-full max-h-[220px] md:max-h-[260px] object-contain rounded-xl filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            <!-- Content Column -->
            <div class="w-full md:w-[60%] flex flex-col text-center md:text-left">
              <!-- Placement Badge -->
              <div class="mb-3">
                <span
                  [ngClass]="getBadgeClass(award.badgeColor)"
                  class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border shadow-sm"
                >
                  {{ award.placement }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                {{ 'awards.' + award.id + '.title' | translate }}
              </h3>

              <!-- Year -->
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 block">
                {{ award.year }}
              </span>

              <!-- Scrollable Description -->
              <div class="max-h-[140px] overflow-y-auto no-scrollbar pr-1">
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {{ 'awards.' + award.id + '.description' | translate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `],
  animations: [fadeInUp]
})
export class AwardsComponent implements OnInit {
  awards: Award[] = [];

  constructor(private awardsService: AwardsService) {}

  ngOnInit() {
    this.awardsService.getAll().subscribe(a => {
      this.awards = a;
    });
  }

  getBadgeClass(color: string): string {
    if (color === 'gold') {
      return 'bg-amber-500/10 text-amber-600 border-amber-200/50 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-800/50';
    } else if (color === 'silver') {
      return 'bg-slate-400/15 text-slate-600 border-slate-200/50 dark:bg-slate-400/20 dark:text-slate-300 dark:border-slate-700/50';
    }
    return 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
  }
}
