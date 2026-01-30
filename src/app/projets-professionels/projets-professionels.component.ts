import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { Projets } from '../models/projets.model';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './projets-professionels.component.html',
  styleUrl: './projets-professionels.component.scss'
})
export class ProjetsProfessionelsComponent implements OnInit {
  projects: Projets[] = []

  constructor(private projets: ProjetsService) {}

  ngOnInit(): void {
    this.projects = this.projets['projets']
  }
}
