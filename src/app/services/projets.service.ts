import { Injectable } from "@angular/core";
import { Projets } from "../models/projets.model";

@Injectable({
    providedIn: 'root',
})
export class ProjetsService {
    private projets: Projets[] = []

    constructor() {
        this.projets = [
            {
                id: 0,
                type: "EPITECH",
                title: "projects.sokoban.title",
                description: "projects.sokoban.description",
                link: 'https://github.com/darkred974/sokoban',
                images: [
                    "./assets/sokoban_image_1.png",
                    "./assets/sokoban_image_2.png",
                    "./assets/sokoban_image_3.png",
                ]
            },
            {
                id: 1,
                type: "EPITECH",
                title: "projects.rpg.title",
                description: "projects.rpg.description",
                link: 'https://github.com/darkred974/rpg',
                images: [
                    "./assets/rpg_image_1.png",
                    "./assets/rpg_image_2.png",
                    "./assets/rpg_image_3.png",
                    "./assets/rpg_image_4.png",
                ]
            },
            {
                id: 2,
                type: "STAGE",
                title: "projects.archik.title",
                description: "projects.archik.description",
                link: 'https://github.com/darkred974/archik-interieur',
                images: [
                    "./assets/archikinterieur_image_1.png",
                    "./assets/archikinterieur_image_2.png",
                    "./assets/archikinterieur_image_3.png",
                    "./assets/archikinterieur_image_4.png",
                    "./assets/archikinterieur_image_5.png",
                ]
            },
            {
                id: 3,
                type: "STAGE",
                title: "projects.jackpot.title",
                description: "projects.jackpot.description",
                link: 'https://github.com/darkred974/qui-veut-gagner-le-jackpot',
                images: [
                    "./assets/QVGLJ_image_1.png",
                    "./assets/QVGLJ_image_2.png",
                ]
            },
            {
                id: 4,
                type: "WEBCUP",
                title: "projects.sga.title",
                description: "projects.sga.description",
                link: 'https://github.com/darkred974/search-guardian-angel',
                images: [
                    "./assets/sga_image_1.png",
                    "./assets/sga_image_2.png",
                    "./assets/sga_image_3.png",
                ]
            },
            {
                id: 5,
                type: "WEBCUP",
                title: "projects.theend.title",
                description: "projects.theend.description",
                link: 'https://github.com/darkred974/theend-page',
                images: [
                    "./assets/theend-page_1.png",
                    "./assets/theend-page_2.png",
                    "./assets/theend-page_3.png",
                ]
            },
        ]
    }

    getAll(): Projets[] {
        return this.projets
    }

    getByType(type: string): Projets[] {
        return this.projets.filter(p => p.type === type)
    }
}