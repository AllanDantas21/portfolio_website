import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * SharedModule
 * Exports common modules, components, directives, and pipes
 * to be used across feature modules
 */
@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule {}
