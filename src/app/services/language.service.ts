import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: 'FR' | 'EN' = 'FR';


  private translations = {

    FR: {
      home: "Accueil",
      projects: "Projets",
      careers: "Parcours",
      contact: "Contact"
    },

    EN: {
      home: "Home",
      projects: "Projects",
      careers: "Careers",
      contact: "Contact"
    }

  };


  changeLanguage() {
    this.language = this.language === 'FR' ? 'EN' : 'FR';
  }


  translate(key: 'home' | 'projects' | 'careers' | 'contact'): string {
    return this.translations[this.language][key];
  }
}
