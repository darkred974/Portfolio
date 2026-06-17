import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { LanguageService } from './services/language.service';

export function initLang(langService: LanguageService) {
  return () => langService.loadTranslations();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [LanguageService],
      multi: true
    }
  ]
};