import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: 'FR' | 'EN' = 'FR';

  private translations: any = {
    FR: {},
    EN: {}
  };

  constructor(private http: HttpClient) {}

  async loadTranslations() {

    const fr = await firstValueFrom(
      this.http.get('./assets/i18n/fr.json')
    );

    const en = await firstValueFrom(
      this.http.get('./assets/i18n/en.json')
    );

    this.translations.FR = fr;
    this.translations.EN = en;
  }

  changeLanguage() {
    this.language = this.language === 'FR' ? 'EN' : 'FR';
  }

  translate(key: string) {
    return this.resolveKey(this.translations[this.language], key) ?? key;
  }

  private resolveKey(obj: any, path: string) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
  }

}
