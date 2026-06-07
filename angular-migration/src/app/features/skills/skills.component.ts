import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContainerComponent } from '../../shared/components';
import { SkillsService } from '../../shared/services/skills.service';
import { ExperienceService } from '../../shared/services/experience.service';
import { SkillItem, LanguageSkill, ExperienceItem } from '../../shared/models';
import { fadeInUp } from '../../shared/animations';
import { forkJoin } from 'rxjs';

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContainerComponent],
  template: `
    <app-container>
      <!-- Header -->
      <div [@fadeInUp] class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ 'skills.skillsTitle' | translate }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
          {{ 'skills.techIntro' | translate }}
        </p>
      </div>

      <!-- 1. Experience Timeline Section -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          <span>💼</span>
          {{ 'skills.experienceTitle' | translate }}
        </h3>
        
        <div class="relative">
          <!-- Central vertical line (desktop only) -->
          <div class="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>
          
          <div class="space-y-12 md:space-y-16 relative">
            <div *ngFor="let exp of experiences; let i = index" 
                 class="flex flex-col md:flex-row items-stretch justify-between w-full md:even:flex-row-reverse relative">
                 
              <!-- Content Card -->
              <div class="w-full md:w-[45%] bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-500/50 transition-all duration-300">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {{ 'skills.experiences.' + exp.id + '.year' | translate }}
                  </span>
                  <span class="px-2.5 py-0.5 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {{ exp.company }}
                  </span>
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {{ 'skills.experiences.' + exp.id + '.title' | translate }}
                </h4>
                
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span>{{ exp.type }}</span>
                  <span>•</span>
                  <span>{{ exp.location }}</span>
                </div>
                
                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {{ 'skills.experiences.' + exp.id + '.description' | translate }}
                </p>
                
                <div>
                  <span class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Tecnologias:
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <span *ngFor="let tech of exp.technologies" 
                          class="px-2 py-0.5 text-xs rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Central Icon Circle (desktop only) -->
              <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center border-4 border-white dark:border-[#111827] shadow z-10 text-base text-white hidden md:flex"
                   [style.background-color]="exp.color">
                <span>{{ getExpIcon(exp.id) }}</span>
              </div>

              <!-- Empty Spacer for desktop alignment -->
              <div class="hidden md:block w-[45%]"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-200/50 dark:border-gray-800/50 my-12"></div>

      <!-- 2. Technical Skills Grid -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          <span>🛠️</span>
          Habilidades Técnicas
        </h3>

        <!-- Categories Tabs -->
        <div class="flex border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto">
          <button *ngFor="let tab of tabs" 
                  (click)="activeTab = tab.id"
                  [ngClass]="{
                    'border-teal-500 text-teal-600 dark:text-teal-400 font-bold': activeTab === tab.id,
                    'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200': activeTab !== tab.id
                  }"
                  class="py-3 px-6 border-b-2 font-semibold text-sm transition-all duration-200 whitespace-nowrap focus:outline-none">
            {{ tab.label }}
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div *ngFor="let skill of getActiveSkills()" 
               class="bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4">
            
            <div class="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shadow-sm flex-shrink-0"
                 [style.background-color]="skill.color">
              {{ skill.name.slice(0, 2) }}
            </div>
            
            <div class="flex-1 min-w-0">
              <h4 class="text-base font-bold text-gray-900 dark:text-white truncate">
                {{ skill.name }}
              </h4>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ skill.category }}
              </span>
              <div class="w-full bg-gray-100 dark:bg-gray-800/50 h-1.5 rounded-full mt-2 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500"
                     [style.width.%]="skill.level"
                     [style.background-color]="skill.color"></div>
              </div>
            </div>
            <span class="text-xs font-bold text-gray-500 dark:text-gray-400 self-end mb-1">
              {{ skill.level }}%
            </span>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-200/50 dark:border-gray-800/50 my-12"></div>

      <!-- 3. Languages Section -->
      <section [@fadeInUp] class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          <span>🌐</span>
          {{ 'skills.languages' | translate }}
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div *ngFor="let lang of languages" 
               class="bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-6">
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ 'skills.languageSkills.' + lang.language.toLowerCase() | translate }}
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                {{ 'skills.languageSkills.' + (lang.language.toLowerCase() === 'portuguese' ? 'nativeDescription' : 'englishDescription') | translate }}
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
      <div class="border-t border-gray-200/50 dark:border-gray-800/50 my-12"></div>

      <!-- 4. Soft Skills Section -->
      <section [@fadeInUp] class="mb-12">
        <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          <span>🤝</span>
          {{ 'skills.softSkills' | translate }}
        </h3>
        
        <div class="bg-white dark:bg-[#1a2234] border border-gray-200/60 dark:border-gray-800/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div class="flex flex-wrap gap-3 mb-6 justify-center">
            <span *ngFor="let skill of softSkills" 
                  [ngClass]="getSoftSkillClass(skill)"
                  class="px-4 py-2 rounded-lg text-sm font-semibold tracking-wide border shadow-sm transition-all duration-200 hover:scale-105 select-none">
              {{ 'skills.softSkillsList.' + getSoftSkillKey(skill) | translate }}
            </span>
          </div>
          
          <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto border-t border-gray-100 dark:border-gray-800/50 pt-4">
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
    { id: 'programming', label: 'Linguagens' },
    { id: 'web', label: 'Web / Frameworks' },
    { id: 'tools', label: 'Ferramentas & DevOps' }
  ];

  constructor(
    private skillsService: SkillsService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    // Fetch all skills and experiences
    forkJoin({
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

  getExpIcon(id: string): string {
    switch (id) {
      case 'ciandt-analyst': return '💼';
      case 'ciandt-intern': return '💻';
      case 'fortytwo-rio': return '🏢';
      case 'ruminante': return '🚀';
      default: return '📍';
    }
  }

  getSoftSkillKey(skill: string): string {
    switch (skill) {
      case 'Teamwork': return 'teamwork';
      case 'Problem Solving': return 'problemSolving';
      case 'Autonomous Learning': return 'selfLearning';
      case 'Adaptability': return 'adaptability';
      case 'Resilience': return 'resilience';
      case 'Communication': return 'communication';
      default: return skill.toLowerCase();
    }
  }

  getSoftSkillClass(skill: string): string {
    const key = this.getSoftSkillKey(skill);
    switch (key) {
      case 'teamwork':
        return 'bg-teal-500/10 text-teal-600 border-teal-200/50 dark:bg-teal-500/20 dark:text-teal-300 dark:border-teal-800/50';
      case 'problemSolving':
        return 'bg-cyan-500/10 text-cyan-600 border-cyan-200/50 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-800/50';
      case 'selfLearning':
        return 'bg-purple-500/10 text-purple-600 border-purple-200/50 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-800/50';
      case 'adaptability':
        return 'bg-green-500/10 text-green-600 border-green-200/50 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800/50';
      case 'resilience':
        return 'bg-orange-500/10 text-orange-600 border-orange-200/50 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-800/50';
      case 'communication':
        return 'bg-pink-500/10 text-pink-600 border-pink-200/50 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-800/50';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  }
}
