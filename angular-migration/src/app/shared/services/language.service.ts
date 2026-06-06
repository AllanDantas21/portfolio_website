import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'pt';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'app-language';
  private readonly AVAILABLE_LANGUAGES: Language[] = ['en', 'pt'];
  private currentLanguageSubject = new BehaviorSubject<Language>(this.getInitialLanguage());

  currentLanguage$: Observable<Language> = this.currentLanguageSubject.asObservable();

  constructor(private translateService: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const language = this.currentLanguageSubject.value;
    this.translateService.setDefaultLanguage('en');
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
    localStorage.setItem(this.LANGUAGE_KEY, language);
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
