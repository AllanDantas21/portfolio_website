import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/models';
import { fadeInUp } from '../../shared/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ContainerComponent
  ],
  template: `
    <app-container>
      <!-- Header -->
      <div [@fadeInUp] class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ 'projects.ecole42Projects' | translate }}
        </h2>
      </div>

      <!-- Projects Grid -->
      <div [@fadeInUp] class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
        <div *ngFor="let project of projects" class="h-full">
          <a
            [routerLink]="['/projects', project.id]"
            class="flex flex-col h-full bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
          >
            <!-- Badge Icon and Difficulty -->
            <div class="flex flex-col items-center gap-4 mb-4">
              <div class="badge-42 flex items-center justify-center p-2 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                <img
                  [src]="getBadgeUrl(project.id)"
                  [alt]="project.badgeLabel"
                  class="w-28 h-28 object-contain select-none pointer-events-none filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
                />
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wider">
                {{ project.difficulty }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-center text-gray-900 dark:text-white mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
              {{ 'projects.' + project.id + '.title' | translate }}
            </h3>

            <!-- Short Description -->
            <p class="text-sm text-center text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
              {{ 'projects.' + project.id + '.description' | translate }}
            </p>
          </a>
        </div>
      </div>
    </app-container>
  `,
  styles: [`
    @keyframes badgePulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .badge-42:hover {
      animation: badgePulse 1.5s infinite ease-in-out;
    }
  `],
  animations: [fadeInUp]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAll().subscribe(p => {
      this.projects = p;
    });
  }

  getBadgeUrl(id: string): string {
    const filename = id === 'philo' ? 'philosophers' : id;
    return `/badges/${filename}m.webp`;
  }
}
