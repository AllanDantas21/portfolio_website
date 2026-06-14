import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContainerComponent } from '../../shared/components';
import { fadeInUp } from '../../shared/animations';
import { LanguageService } from '../../shared/services/language.service';

interface HistoryLine {
  text: string;
  isInput: boolean;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    ContainerComponent
  ],
  template: `
    <app-container>
      <!-- Header -->
      <div [@fadeInUp] class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <span>🐚</span> Terminal CLI
        </h2>
        <p class="text-gray-700 dark:text-gray-400 mt-2 text-sm sm:text-base font-medium">
          {{ 'navigation.commands' | translate }}
        </p>
      </div>

      <!-- Terminal Window -->
      <div
        [@fadeInUp]
        (click)="focusInput()"
        class="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-800 bg-white/70 dark:bg-[#0a0f1d]/90 backdrop-blur-md transition-all duration-300 hover:shadow-teal-500/5"
      >
        <!-- Window Title Bar -->
        <div class="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 select-none">
          <div class="flex items-center gap-1.5">
            <span class="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></span>
            <span class="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></span>
          </div>
          <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 font-mono">
            allan&#64;macbook-pro: ~ (zsh)
          </div>
          <div class="w-12"></div> <!-- Spacer to center title -->
        </div>

        <!-- Terminal Terminal Body -->
        <div
          #terminalBody
          class="p-5 h-[380px] overflow-y-auto font-mono text-sm leading-relaxed text-gray-800 dark:text-green-400 bg-transparent scrollbar-thin scrollbar-thumb-teal-500"
        >
          <!-- Lines -->
          <div *ngFor="let line of history" class="mb-2.5">
            <span *ngIf="line.isInput" class="text-teal-600 dark:text-teal-400 font-bold mr-2 select-none">❯</span>
            <span
              [ngClass]="{
                'text-gray-900 dark:text-white font-semibold': line.isInput,
                'text-gray-800 dark:text-gray-300': !line.isInput && !isGreenOutput(line.text)
              }"
              class="whitespace-pre-wrap"
            >{{ line.text }}</span>
          </div>

          <!-- Active Input Prompt -->
          <form (ngSubmit)="onSubmit($event)" class="flex items-center mt-3">
            <span class="text-teal-600 dark:text-teal-400 font-bold mr-2 select-none">❯</span>
            <input
              #cmdInput
              type="text"
              name="command"
              [(ngModel)]="inputValue"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              class="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white font-semibold caret-teal-500 p-0"
              placeholder=""
            />
          </form>
        </div>
      </div>
    </app-container>
  `,
  styles: [`
    /* Custom scrollbar styles */
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
      background: transparent;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: rgba(20, 184, 166, 0.2);
      border-radius: 4px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover {
      background: rgba(20, 184, 166, 0.4);
    }
  `],
  animations: [fadeInUp]
})
export class TerminalComponent implements OnInit, OnDestroy {
  @ViewChild('terminalBody') private terminalBody!: ElementRef;
  @ViewChild('cmdInput') private cmdInput!: ElementRef;

  inputValue = '';
  history: HistoryLine[] = [];
  
  private translate = inject(TranslateService);
  private router = inject(Router);
  private languageService = inject(LanguageService);
  private langSub!: Subscription;

  ngOnInit() {
    this.langSub = this.languageService.currentLanguage$.subscribe(() => {
      this.initHistory();
    });
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private initHistory() {
    this.history = [
      { text: this.translate.instant('terminal.welcome'), isInput: false },
      { text: this.translate.instant('terminal.question'), isInput: false }
    ];
    this.scrollToBottom();
  }

  focusInput() {
    if (this.cmdInput) {
      this.cmdInput.nativeElement.focus();
    }
  }

  isGreenOutput(text: string): boolean {
    // Determine if text color should be default terminal green or secondary gray
    return text.startsWith('Available') || text.startsWith('Hi') || text.startsWith('My skills') || text.startsWith('Check out');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const cmd = this.inputValue.trim();
    if (!cmd) return;

    this.history.push({ text: cmd, isInput: true });
    
    const output = this.handleCommand(cmd);
    if (output !== null) {
      this.history.push({ text: output, isInput: false });
    }

    this.inputValue = '';
    this.scrollToBottom();
  }

  private handleCommand(cmd: string): string | null {
    const trimmed = cmd.toLowerCase();

    if (trimmed === '42') {
      this.router.navigate(['/42']);
      return null;
    }

    if (trimmed === 'clear') {
      this.history = [];
      setTimeout(() => this.initHistory(), 50);
      return null;
    }

    const commands: Record<string, string> = {
      help: this.translate.instant('terminal.help'),
      about: this.translate.instant('terminal.about'),
      skills: this.translate.instant('terminal.skills'),
      projects: this.translate.instant('terminal.projects')
    };

    if (commands[trimmed]) {
      return commands[trimmed];
    }

    return this.translate.instant('terminal.commandNotFound', { cmd });
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.terminalBody) {
        this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
      }
    }, 50);
  }
}
