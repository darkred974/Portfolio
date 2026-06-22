import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {

    constructor(public languageService: LanguageService) {}
}
