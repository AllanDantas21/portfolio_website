import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

export type Language = 'en' | 'pt';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'app-language';
  private readonly AVAILABLE_LANGUAGES: Language[] = ['en', 'pt'];
  private platformId = inject(PLATFORM_ID);
  private translateService = inject(TranslateService);
  private currentLanguageSubject = new BehaviorSubject<Language>('en');

  currentLanguage$: Observable<Language> = this.currentLanguageSubject.asObservable();

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const language = this.getInitialLanguage();
      this.currentLanguageSubject.next(language);
    }
    const language = this.currentLanguageSubject.value;
    this.translateService.use(language);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  getAvailableLanguages(): Language[] {
    return this.AVAILABLE_LANGUAGES;
  }

  setLanguage(language: Language): void {
    if (!this.AVAILABLE_LANGUAGES.includes(language)) {
      console.warn(`Language ${language} is not available`);
      return;
    }

    this.currentLanguageSubject.next(language);
    this.translateService.use(language);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.LANGUAGE_KEY, language);
    }
  }

  toggleLanguage(): void {
    const currentLanguage = this.currentLanguageSubject.value;
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    this.setLanguage(newLanguage);
  }

  /**
   * Get translated string
   */
  get(key: string): Observable<string> {
    return this.translateService.get(key);
  }

  private getInitialLanguage(): Language {
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as Language;
    if (savedLanguage === 'en' || savedLanguage === 'pt') {
      return savedLanguage;
    }

    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('pt')) {
      return 'pt';
    }

    return 'en';
  }
}
