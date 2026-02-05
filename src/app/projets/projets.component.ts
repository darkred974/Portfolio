import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Projets } from '../models/projets.model';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  providers: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent implements OnInit {
  epitechProjects: Projets[] = [];
  stageProjects: Projets[] = [];
  webcupProjects: Projets[] = [];

  currentImageIndex: { [key: number]: number } = {};

  constructor(private projetsService: ProjetsService) {}

  ngOnInit(): void {
    this.epitechProjects = this.projetsService.getByType('EPITECH');
    this.stageProjects = this.projetsService.getByType('STAGE');
    this.webcupProjects = this.projetsService.getByType('WEBCUP');

    this.initImageIndexes(this.epitechProjects);
    this.initImageIndexes(this.stageProjects);
    this.initImageIndexes(this.webcupProjects);
  }

  private initImageIndexes(projects: Projets[]): void {
    projects.forEach((project: Projets) => {
      this.currentImageIndex[project.id] = 0;
    });
  }

  nextImage(project: Projets): void {
    this.currentImageIndex[project.id] =
      (this.currentImageIndex[project.id] + 1) % project.images.length;
  }

  prevImage(project: Projets): void {
    this.currentImageIndex[project.id] =
      (this.currentImageIndex[project.id] - 1 + project.images.length) % project.images.length;
  }
}
