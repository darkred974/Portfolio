import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LanguageService } from './app/services/language.service';
import { inject } from '@angular/core';

bootstrapApplication(AppComponent).catch(console.error);