import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizedTitleStrategy extends TitleStrategy {
  private readonly titleService = inject(Title);
  private readonly translate = inject(TranslateService);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(routerState);
    if (titleKey) {
      this.translate.get(titleKey).subscribe(translatedTitle => {
        this.titleService.setTitle(`${translatedTitle} - Allan Dantas`);
      });
    } else {
      this.translate.get('general.title').subscribe(translatedTitle => {
        this.titleService.setTitle(`Allan Dantas - ${translatedTitle}`);
      });
    }
  }
}
