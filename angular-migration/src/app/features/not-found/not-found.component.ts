import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components';
import { fadeInUp } from '../../shared/animations';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ContainerComponent
  ],
  template: `
    <app-container>
      <div [@fadeInUp] class="flex flex-col items-center justify-center py-12 select-none text-center">
        <!-- 404 Graphic/Emoji -->
        <div class="relative mb-8 flex items-center justify-center">
          <span class="text-8xl animate-bounce duration-1000">🔍</span>
          <span class="absolute -bottom-2 -right-2 text-2xl font-black px-2 py-0.5 rounded bg-red-500 text-white font-mono shadow-md">
            404
          </span>
        </div>

        <!-- Glassmorphic Card -->
        <div class="w-full max-w-md bg-white/40 dark:bg-gray-900/40 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-8">
          <h1 class="text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
            {{ 'notFound.title' | translate }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            {{ 'notFound.description' | translate }}
          </p>
        </div>

        <!-- Return Home CTA -->
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white hover:bg-teal-600 active:scale-95 transition-all duration-200 font-bold text-sm shadow-md shadow-teal-500/20 hover:shadow-teal-500/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          {{ 'notFound.home' | translate }}
        </a>
      </div>
    </app-container>
  `,
  styles: [],
  animations: [fadeInUp]
})
export class NotFoundComponent implements OnInit {
  ngOnInit() {}
}
