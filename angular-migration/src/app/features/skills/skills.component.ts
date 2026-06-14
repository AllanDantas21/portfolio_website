import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerComponent } from '../../shared/components';
import { SkillsService } from '../../shared/services/skills.service';
import { ExperienceService } from '../../shared/services/experience.service';
import { SkillItem, LanguageSkill, ExperienceItem } from '../../shared/models';
import { fadeInUp } from '../../shared/animations';
import { combineLatest } from 'rxjs';

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContainerComponent],
  template: `
    <app-container size="4xl">
      <!-- Header -->
      <div [@fadeInUp] class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ 'skills.skillsTitle' | translate }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base font-medium">
          {{ 'skills.techIntro' | translate }}
        </p>
      </div>

      <!-- 1. Experience Timeline Section -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          {{ 'skills.experienceTitle' | translate }}
        </h3>
        
        <div class="relative">
          <!-- Central vertical line (desktop only) -->
          <div class="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-400 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>
          
          <div class="space-y-12 md:space-y-16 relative">
            <div *ngFor="let exp of experiences; let i = index" 
                 class="flex flex-col md:flex-row items-stretch justify-between w-full md:even:flex-row-reverse relative">
                 
              <!-- Content Card -->
              <div (mouseenter)="hoveredExp = exp.id"
                   (mouseleave)="hoveredExp = null"
                   [style.border-color]="hoveredExp === exp.id ? exp.color : ''"
                   class="w-full md:w-[45%] bg-white dark:bg-[#1a2234] border border-gray-300 dark:border-gray-800/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                    {{ 'skills.experiences.' + exp.id + '.year' | translate }}
                  </span>
                  <span class="px-2.5 py-0.5 text-xs font-bold rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                    {{ exp.company }}
                  </span>
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {{ 'skills.experiences.' + exp.id + '.title' | translate }}
                </h4>
                
                <div class="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-4">
                  <span>{{ exp.type }}</span>
                  <span>•</span>
                  <span>{{ exp.location }}</span>
                </div>
                
                <p class="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-5">
                  {{ 'skills.experiences.' + exp.id + '.description' | translate }}
                </p>
                
                <div>
                  <span class="block text-xs font-bold text-gray-700 dark:text-gray-400 mb-2">
                    {{ 'skills.technologies' | translate }}:
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <span *ngFor="let tech of exp.technologies" 
                          class="px-2.5 py-1 text-xs rounded border border-gray-300 dark:border-gray-700 bg-gray-100/40 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 font-medium">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Central Icon Circle (desktop only) -->
              <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center border-4 border-white dark:border-[#111827] shadow z-10 text-white hidden md:flex"
                   [style.background-color]="exp.color">
                <ng-container [ngSwitch]="exp.id">
                  <!-- Briefcase for ciandt-analyst -->
                  <svg *ngSwitchCase="'ciandt-analyst'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <!-- Laptop for ciandt-intern -->
                  <svg *ngSwitchCase="'ciandt-intern'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                    <line x1="12" y1="17" x2="12" y2="20"></line>
                  </svg>
                  <!-- Building for fortytwo-rio -->
                  <svg *ngSwitchCase="'fortytwo-rio'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="9" y1="22" x2="9" y2="16"></line>
                    <line x1="15" y1="22" x2="15" y2="16"></line>
                    <line x1="9" y1="16" x2="15" y2="16"></line>
                    <path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zM8 10h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"></path>
                  </svg>
                  <!-- Code for ruminante -->
                  <svg *ngSwitchCase="'ruminante'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <!-- Default marker -->
                  <svg *ngSwitchDefault viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </ng-container>
              </div>

              <!-- Empty Spacer for desktop alignment -->
              <div class="hidden md:block w-[45%]"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-800/80 my-12"></div>

      <!-- 2. Technical Skills Grid -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          {{ 'skills.hardSkills' | translate }}
        </h3>

        <!-- Categories Tabs -->
        <div class="flex border-b border-gray-300 dark:border-gray-800 mb-8 overflow-x-auto">
          <button *ngFor="let tab of tabs" 
                  (click)="activeTab = tab.id"
                  [ngClass]="{
                    'border-teal-500 text-teal-700 dark:text-teal-400 font-bold': activeTab === tab.id,
                    'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200': activeTab !== tab.id
                  }"
                  class="py-3 px-6 border-b-2 font-semibold text-sm transition-all duration-200 whitespace-nowrap focus:outline-none">
            {{ tab.label | translate }}
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div *ngFor="let skill of getActiveSkills()" 
               (mouseenter)="hoveredCard = skill.name"
               (mouseleave)="hoveredCard = null"
               [style.border-color]="hoveredCard === skill.name ? skill.color : ''"
               class="bg-white dark:bg-[#1a2234] border border-gray-300 dark:border-gray-800/80 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center gap-4">
            
            <!-- Skill Icon -->
            <div class="w-12 h-12 flex items-center justify-center">
              <img *ngIf="getSkillIconSlug(skill.name)" 
                   [src]="'https://cdn.simpleicons.org/' + getSkillIconSlug(skill.name) + '/' + (skill.name === 'Next.js' ? 'currentColor' : skill.color.replace('#', ''))" 
                   class="w-12 h-12 object-contain"
                   [alt]="skill.name" />
              <svg *ngIf="!getSkillIconSlug(skill.name)" 
                   [style.color]="skill.color"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                   class="w-12 h-12">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            
            <!-- Title & Category -->
            <div class="space-y-2">
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ skill.name }}
              </h4>
              <span class="inline-block px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-400 text-xs font-bold uppercase tracking-wider border border-teal-200/50 dark:border-transparent">
                {{ skill.category }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-800/80 my-12"></div>

      <!-- 3. Languages Section -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          {{ 'skills.languages' | translate }}
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div *ngFor="let lang of languages" 
               (mouseenter)="hoveredLang = lang.language"
               (mouseleave)="hoveredLang = null"
               [style.border-color]="hoveredLang === lang.language ? '#2dd4bf' : ''"
               class="bg-white dark:bg-[#1a2234] border border-gray-300 dark:border-gray-800/80 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-6">
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ 'skills.languageSkills.' + lang.language | translate }}
              </h4>
              <p class="text-sm text-gray-700 dark:text-gray-400 mt-1 font-medium">
                {{ 'skills.languageSkills.' + lang.description | translate }}
              </p>
            </div>
            
            <div class="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg class="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4.5" class="text-gray-100 dark:text-gray-800/70" fill="transparent" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4.5" class="text-teal-500" fill="transparent"
                        [attr.stroke-dasharray]="175.9" [attr.stroke-dashoffset]="175.9 - (175.9 * lang.level / 100)" />
              </svg>
              <span class="absolute text-xs font-bold text-gray-800 dark:text-white">{{ lang.level }}%</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-800/80 my-12"></div>

      <!-- 4. Soft Skills Section -->
      <section [@fadeInUp] class="mb-12">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          {{ 'skills.softSkills' | translate }}
        </h3>
        
        <div class="bg-white dark:bg-[#1a2234] border border-gray-300 dark:border-gray-800/80 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-4">
              <div *ngFor="let skill of softSkills.slice(0, 3)" 
                   [ngClass]="getSoftSkillClass(skill)"
                   class="px-4 py-2.5 rounded-lg text-sm font-bold tracking-wide border shadow-sm transition-all duration-200 hover:scale-[1.02] select-none text-center md:text-left">
                {{ 'skills.softSkillsList.' + skill | translate }}
              </div>
            </div>
            <div class="space-y-4">
              <div *ngFor="let skill of softSkills.slice(3, 6)" 
                   [ngClass]="getSoftSkillClass(skill)"
                   class="px-4 py-2.5 rounded-lg text-sm font-bold tracking-wide border shadow-sm transition-all duration-200 hover:scale-[1.02] select-none text-center md:text-left">
                {{ 'skills.softSkillsList.' + skill | translate }}
              </div>
            </div>
          </div>
          
          <p class="text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto border-t border-gray-200 dark:border-gray-800/50 pt-4">
            {{ 'skills.soft' | translate }}
          </p>
        </div>
      </section>
    </app-container>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class SkillsComponent implements OnInit {
  experiences: ExperienceItem[] = [];
  programmingSkills: SkillItem[] = [];
  webSkills: SkillItem[] = [];
  toolsSkills: SkillItem[] = [];
  languages: LanguageSkill[] = [];
  softSkills: string[] = [];

  activeTab = 'programming';
  tabs: Tab[] = [
    { id: 'programming', label: 'skills.programmingLanguages' },
    { id: 'web', label: 'skills.webDevelopment' },
    { id: 'tools', label: 'skills.toolsTechnologies' }
  ];

  hoveredCard: string | null = null;
  hoveredExp: string | null = null;
  hoveredLang: string | null = null;

  constructor(
    private skillsService: SkillsService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    // Fetch all skills and experiences
    combineLatest({
      programming: this.skillsService.getProgrammingSkills(),
      web: this.skillsService.getWebSkills(),
      tools: this.skillsService.getToolsSkills(),
      languages: this.skillsService.getLanguageSkills(),
      soft: this.skillsService.getSoftSkills(),
      experiences: this.experienceService.getChronological()
    }).subscribe(data => {
      this.programmingSkills = data.programming;
      this.webSkills = data.web;
      this.toolsSkills = data.tools;
      this.languages = data.languages;
      this.softSkills = data.soft;
      this.experiences = data.experiences;
    });
  }

  getActiveSkills(): SkillItem[] {
    if (this.activeTab === 'programming') {
      return this.programmingSkills;
    } else if (this.activeTab === 'web') {
      return this.webSkills;
    } else {
      return this.toolsSkills;
    }
  }

  getSkillIconSlug(name: string): string {
    switch (name) {
      case 'C': return 'c';
      case 'C++': return 'cplusplus';
      case 'Python': return 'python';
      case 'Java': return 'java';
      case 'Rust': return 'rust';
      case 'TypeScript': return 'typescript';
      case 'JavaScript': return 'javascript';
      case 'React': return 'react';
      case 'Next.js': return 'nextdotjs';
      case 'Angular': return 'angular';
      case 'Linux': return 'linux';
      case 'Git': return 'git';
      case 'Docker': return 'docker';
      case 'Nginx': return 'nginx';
      case 'Bash': return 'gnubash';
      case 'Vim': return 'vim';
      case 'SQL Server': return 'microsoftsqlserver';
      case 'Prompt Flow': return 'microsoft';
      default: return '';
    }
  }

  getSoftSkillClass(skill: string): string {
    switch (skill) {
      case 'teamwork':
        return 'bg-teal-50/80 text-teal-800 border-teal-200/60 dark:bg-teal-500/20 dark:text-teal-300 dark:border-teal-800/50';
      case 'problemSolving':
        return 'bg-cyan-50/80 text-cyan-800 border-cyan-200/60 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-800/50';
      case 'selfLearning':
        return 'bg-purple-50/80 text-purple-800 border-purple-200/60 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-800/50';
      case 'adaptability':
        return 'bg-green-50/80 text-green-800 border-green-200/60 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800/50';
      case 'resilience':
        return 'bg-orange-50/80 text-orange-800 border-orange-200/60 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-800/50';
      case 'communication':
        return 'bg-pink-50/80 text-pink-800 border-pink-200/60 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-800/50';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  }
}
