import { Component, OnInit, OnDestroy, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components';
import { scaleIn, fadeInUp } from '../../shared/animations';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

@Component({
  selector: 'app-game-42',
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
      <div [@fadeInUp] class="text-center mb-8 select-none">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <span>🎯</span> Click 42
        </h2>
        <p class="text-gray-700 dark:text-gray-400 mt-2 text-sm sm:text-base font-medium">
          Click the target 42 times before the timer runs out!
        </p>
      </div>

      <!-- Game Panel -->
      <div [@fadeInUp] class="w-full max-w-2xl mx-auto flex flex-col items-center">
        <!-- Stats Dashboard -->
        <div class="w-full flex items-center justify-between px-6 py-4 mb-4 rounded-xl bg-white/40 dark:bg-gray-900/40 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm shadow-sm select-none">
          <div class="flex flex-col">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ 'game.score' | translate }}</span>
            <span class="text-2xl font-black text-teal-700 dark:text-teal-400 font-mono">{{ score }} / 42</span>
          </div>

          <div class="flex flex-col items-center">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ 'game.timeLeft' | translate }}</span>
            <span
              [ngClass]="{
                'text-red-500 animate-pulse': timeLeft <= 10,
                'text-gray-800 dark:text-gray-200': timeLeft > 10
              }"
              class="text-2xl font-black font-mono transition-colors"
            >
              {{ timeLeft }}s
            </span>
          </div>

          <button
            (click)="resetGame()"
            class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-teal-500/20 text-teal-700 dark:text-teal-400 hover:bg-teal-500/10 active:scale-95 transition-all duration-200"
          >
            {{ 'game.reset' | translate }}
          </button>
        </div>

        <!-- Play Board Area -->
        <div
          #boardContainer
          (click)="handleContainerClick($event)"
          class="relative w-full aspect-video md:h-[400px] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-800 bg-gray-50/50 dark:bg-black/40 overflow-hidden shadow-inner cursor-crosshair select-none"
        >
          <!-- Grid Overlay Pattern -->
          <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>

          <!-- Countdown Overlay Screen -->
          <div
            *ngIf="!gameStarted && !gameOver"
            class="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-[#0a0f1d]/90 backdrop-blur-md z-10 transition-opacity duration-300"
          >
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Get ready!</span>
            <h1 class="text-6xl font-black text-teal-500 font-mono animate-scalePulse">
              {{ startTimer > 0 ? startTimer : 'GO!' }}
            </h1>
          </div>

          <!-- Game Over/Win Overlay Screen -->
          <div
            *ngIf="gameOver"
            class="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-[#0a0f1d]/95 backdrop-blur-md z-10"
          >
            <span class="text-5xl mb-4 animate-bounce">
              {{ gameWon ? '🏆' : '💀' }}
            </span>
            <h2
              [ngClass]="{
                'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500': gameWon,
                'text-red-500': !gameWon
              }"
              class="text-3xl font-black uppercase tracking-wide mb-6"
            >
              {{ (gameWon ? 'game.win' : 'game.over') | translate }}
            </h2>
            <button
              (click)="resetGame()"
              class="px-6 py-2.5 bg-teal-500 text-white hover:bg-teal-600 font-bold text-sm rounded-xl active:scale-95 shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200"
            >
              Play Again
            </button>
          </div>

          <!-- Target Glowing Orb -->
          <div
            *ngIf="gameStarted && !gameOver"
            (click)="handleTargetClick($event)"
            [ngClass]="{ 'pop-animation': animateClick }"
            [ngStyle]="{
              'top': targetPosition.top,
              'left': targetPosition.left
            }"
            class="absolute w-12 h-12 rounded-full cursor-pointer flex items-center justify-center select-none pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
            style="transition: top 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);"
          >
            <!-- Glowing Ring -->
            <div class="absolute inset-0 rounded-full bg-red-500 opacity-75 blur-md animate-ping"></div>
            <!-- Core Orb -->
            <div class="relative w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 border border-white/40 shadow-lg shadow-red-500/50 flex items-center justify-center">
              <!-- Target Bullseye Inner Dot -->
              <div class="w-3 h-3 rounded-full bg-white shadow-inner"></div>
            </div>
          </div>

          <!-- Click Ripples -->
          <span
            *ngFor="let ripple of ripples"
            [ngStyle]="{
              'left.px': ripple.x,
              'top.px': ripple.y
            }"
            class="ripple"
          ></span>
        </div>
      </div>
    </app-container>
  `,
  styles: [`
    .bg-grid-pattern {
      background-size: 20px 20px;
      background-image: 
        linear-gradient(to right, rgb(20, 184, 166) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(20, 184, 166) 1px, transparent 1px);
    }

    @keyframes pop {
      0% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.4); }
      100% { transform: translate(-50%, -50%) scale(1); }
    }
    .pop-animation {
      animation: pop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes scalePulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.8; }
    }
    .animate-scalePulse {
      animation: scalePulse 1s infinite;
    }

    .ripple {
      position: absolute;
      width: 32px;
      height: 32px;
      background: rgba(20, 184, 166, 0.35);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      pointer-events: none;
      animation: ripple-animation 500ms cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
    }

    @keyframes ripple-animation {
      to {
        transform: translate(-50%, -50%) scale(3.5);
        opacity: 0;
      }
    }
  `],
  animations: [fadeInUp, scaleIn]
})
export class Game42Component implements OnInit, OnDestroy {
  @ViewChild('boardContainer') private boardContainer!: ElementRef;

  private platformId = inject(PLATFORM_ID);
  
  score = 0;
  targetPosition = { top: '50%', left: '50%' };
  timeLeft = 42;
  gameOver = false;
  gameWon = false;
  animateClick = false;
  startTimer = 3;
  gameStarted = false;
  ripples: Ripple[] = [];

  private countdownInterval: any;
  private gameTimerInterval: any;
  private targetMoveInterval: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown();
    }
  }

  ngOnDestroy() {
    this.clearAllIntervals();
  }

  private startCountdown() {
    this.startTimer = 3;
    this.gameStarted = false;
    this.gameOver = false;
    
    this.countdownInterval = setInterval(() => {
      if (this.startTimer > 1) {
        this.startTimer--;
      } else {
        clearInterval(this.countdownInterval);
        this.gameStarted = true;
        this.startTimer = 0;
        this.startGameTimers();
      }
    }, 1000);
  }

  private startGameTimers() {
    this.timeLeft = 42;
    this.score = 0;
    this.moveTarget();

    // Game duration timer (1s ticks)
    this.gameTimerInterval = setInterval(() => {
      if (this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.endGame(false);
      }
    }, 1000);

    // Target random relocation every 1s if not clicked
    this.targetMoveInterval = setInterval(() => {
      if (!this.animateClick) {
        this.moveTarget();
      }
    }, 1000);
  }

  private moveTarget() {
    const top = Math.random() * 80 + 10 + '%';
    const left = Math.random() * 80 + 10 + '%';
    this.targetPosition = { top, left };
  }

  handleTargetClick(event: MouseEvent) {
    event.stopPropagation(); // Avoid triggering container click
    if (this.gameOver || this.animateClick) return;

    this.score++;
    if (this.score >= 42) {
      this.endGame(true);
    } else {
      this.animateClick = true;
      setTimeout(() => {
        this.animateClick = false;
        this.moveTarget();
      }, 200);
    }
  }

  handleContainerClick(event: MouseEvent) {
    if (!this.gameStarted || this.gameOver) return;

    const rect = this.boardContainer.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = { x, y, id: Date.now() };
    this.ripples.push(ripple);

    setTimeout(() => {
      this.ripples = this.ripples.filter(r => r.id !== ripple.id);
    }, 500);
  }

  resetGame() {
    this.clearAllIntervals();
    this.score = 0;
    this.timeLeft = 42;
    this.gameOver = false;
    this.gameWon = false;
    this.animateClick = false;
    this.startCountdown();
  }

  private endGame(won: boolean) {
    this.clearAllIntervals();
    this.gameOver = true;
    this.gameWon = won;
  }

  private clearAllIntervals() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.gameTimerInterval) clearInterval(this.gameTimerInterval);
    if (this.targetMoveInterval) clearInterval(this.targetMoveInterval);
  }
}
