import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerComponent } from '../../../shared/components';
import { ProjectsService } from '../../../shared/services/projects.service';
import { fadeInUp } from '../../../shared/animations';
import { switchMap, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ContainerComponent
  ],
  template: `
    <app-container>
      <div *ngIf="detail$ | async as detail; else loading" [@fadeInUp] class="w-full">
        <!-- Breadcrumb & Title Header -->
        <div class="flex items-center gap-2 text-sm sm:text-base font-semibold mb-8 flex-wrap select-none">
          <a routerLink="/projects" class="text-teal-700 dark:text-teal-400 hover:underline">
            Projects
          </a>
          <span class="text-gray-400 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 flex-wrap">
            <span>{{ detail.title }}</span>
            <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold font-sans">
              {{ detail.date }}
            </span>
          </h3>
        </div>

        <!-- Image 1 or Cover (if exists) -->
        <div *ngIf="detail.image1" class="mb-6 rounded-xl overflow-hidden shadow border border-gray-200/40 dark:border-gray-800/40 bg-gray-50 dark:bg-gray-900/50">
          <img
            [src]="detail.image1"
            [alt]="detail.title"
            class="w-full h-auto object-cover select-none pointer-events-none"
          />
        </div>

        <!-- Description 1 -->
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-justify">
          {{ detail.description1 | translate }}
        </p>

        <!-- Image 2 (if exists) -->
        <div *ngIf="detail.image2" class="mb-6 rounded-xl overflow-hidden shadow border border-gray-200/40 dark:border-gray-800/40 bg-gray-50 dark:bg-gray-900/50">
          <img
            [src]="detail.image2"
            [alt]="detail.title"
            class="w-full h-auto object-cover select-none pointer-events-none"
          />
        </div>

        <!-- Description 2 -->
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-justify">
          {{ detail.description2 | translate }}
        </p>

        <!-- Description 3 to 5 (if they exist) -->
        <p *ngIf="detail.description3" class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-justify">
          {{ detail.description3 | translate }}
        </p>
        <p *ngIf="detail.description4" class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-justify">
          {{ detail.description4 | translate }}
        </p>
        <p *ngIf="detail.description5" class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-justify">
          {{ detail.description5 | translate }}
        </p>

        <!-- Metadata Section (GitHub Repo Link) -->
        <div class="mt-8 pt-6 border-t border-gray-150 dark:border-gray-900">
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-sm sm:text-base flex-wrap">
              <span class="px-2 py-0.5 rounded bg-green-500/10 text-green-800 dark:text-green-400 font-bold text-xs uppercase tracking-wide">
                Repository
              </span>
              <a
                [href]="detail.repoLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 font-semibold hover:underline"
              >
                {{ detail.repoLink }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ng-template #loading>
        <div class="flex flex-col items-center justify-center py-20 text-gray-500">
          <svg class="animate-spin h-8 w-8 text-teal-500 mb-3" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-sm font-semibold">Carregando detalhes do projeto...</span>
        </div>
      </ng-template>
    </app-container>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);
  private titleService = inject(Title);

  detail$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('projectId') || '';
      return this.projectsService.getProjectDetail(id);
    }),
    tap(detail => {
      if (detail) {
        this.titleService.setTitle(`${detail.title} - Allan Dantas`);
      }
    })
  );
}
