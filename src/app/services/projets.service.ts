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
                title: "SOKOBAN",
                description: "Sokoban est un jeu de réflexion où le joueur doit déplacer des caisses vers des emplacements précis. Ce projet consistait à recréer le jeu en langage C en utilisant la bibliothèque ncurses, avec un affichage entièrement réalisé dans le terminal, sans interface graphique.",
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
                title: "MON PREMIER RPG",
                description: "RPG est un jeu de rôle développé en équipe en 4 semaines, en langage C avec la bibliothèque graphique CSFML. Il s'agit de mon premier projet de ce type.",
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
                title: "Archik Intérieur",
                description: "Archik Intérieur est un site que j'ai fait pour une cliente lors de mon stage. Ce fut le premier projet que j'ai dû réalisé lors de ce stage. Je vous laisse aller le voir par vous-même.",
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
                title: "QUI VEUT GAGNER LE JACKPOT ?",
                description: "QUI VEUT GAGNER LE JACKPOT ? est un mini-jeu que j'ai réalisé en Angular durant le dernier mois de mon stage. Ce jeu reprend une machine à sous que l'on peut voir dans les casinos. Je vous laisse aller testez par vous-même.",
                link: 'https://github.com/darkred974/qui-veut-gagner-le-jackpot',
                images: [
                    "./assets/QVGLJ_image_1.png",
                    "./assets/QVGLJ_image_2.png",
                ]
            },
            {
                id: 4,
                type: "WEBCUP",
                title: "Search Guardian Angel",
                description: "Search Guardian Angel est un site que j'ai réalisé lors d'un événement qui est la WebCup. Cette événement consiste à faire un site web en 24 heures et le thème était, faire un site pour les personnes qui cherche des anges gardiens pour des services de la vie de tous les jours.",
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
                title: "TheEnd.page",
                description: "TheEnd.page est un site qui permet aux gens qui sont en fin de projet ou que leur adventure professionnelle se termine, de pouvoir créer sa propre page de départ personnalisée.",
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