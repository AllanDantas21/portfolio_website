import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CoreModule
 * Provides singleton services and application-wide providers
 * Should be imported only once in AppModule or via standalone config
 */
@NgModule({
  imports: [CommonModule],
  providers: [
    // Singleton services to be provided here
  ]
})
export class CoreModule {}
