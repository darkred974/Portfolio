import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Projets } from '../models/projets.model';
import { HostListener } from '@angular/core';

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
  isMobileOrTablet: boolean = false;
  private touchStartX = 0;
  slideDirection: { [key: number]: 'left' | 'right' | null } = {};
  isFullscreen = false;
  fullscreenProject: Projets | null = null;



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
  

  @HostListener('window:resize')
  checkScreenSize(): void {
    this.isMobileOrTablet = window.innerWidth <= 1024;
  }

  openFullscreen(project: Projets): void {
    this.fullscreenProject = project;
    this.isFullscreen = true;
  }

  closeFullscreen(): void {
    this.isFullscreen = false;
    this.fullscreenProject = null;
  }

  private triggerAnimation(project: Projets, direction: 'left' | 'right'): void {
    this.slideDirection[project.id] = null;

    setTimeout(() => {
      this.slideDirection[project.id] = direction;
    }, 0);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent, project: Projets): void {
    const touchEndX = event.changedTouches[0].screenX;
    const diff = touchEndX - this.touchStartX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? this.prevImage(project) : this.nextImage(project);
    }
  }

  private initImageIndexes(projects: Projets[]): void {
    projects.forEach((project: Projets) => {
      this.currentImageIndex[project.id] = 0;
      this.slideDirection[project.id] = null;
    });
  }

  nextImage(project: Projets): void {
    this.triggerAnimation(project, 'left');

    this.currentImageIndex[project.id] =
      (this.currentImageIndex[project.id] + 1) % project.images.length;
  }

  prevImage(project: Projets): void {
    this.triggerAnimation(project, 'right');

    this.currentImageIndex[project.id] =
      (this.currentImageIndex[project.id] - 1 + project.images.length) % project.images.length;
  }
}
