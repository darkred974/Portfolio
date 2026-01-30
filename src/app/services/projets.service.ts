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
                title: "SOKOBAN",
                description: "SOKOBAN est un jeu qui consiste à déplacer avec votre personnage des boxes sur des points précis. Pour ce projet, nous devions refaire ce jeu tout en apprenant la lib NCURSES avec le langage C mais au lieu de l'afficher avec une lib graphique, nous devions afficher le jeu sur le terminal.",
                link: 'https://github.com/dred974/sokoban'
            },
            {
                id: 1,
                title: "MON PREMIER RPG",
                description: "RPG (Role-Playing Game) est un jeu de rôle où vous incarnez un personnage pour suivre une aventure dans un monde imaginaire. C'est un jeu que nous devions réalisé en groupe et qui devait être fait en 4 semaines. C'est aussi la première fois que j'en réalise un. Le langage utilisé durant ce projet était le C avec la librairie CSFML qui est une librairie graphique.",
                link: 'https://github.com/dred974/my_first_rpg'
            },
            {
                id: 2,
                title: "Search Guardian Angel",
                description: "Search Guardian Angel est un site que j'ai réalisé lors d'un événement qui est la WebCup. Cette événement consiste à faire un site web en 24 heures et le thème était, faire un site pour les personnes qui cherche des anges gardiens pour des services de la vie de tous les jours.",
                link: 'https://github.com/dred974/search_guardian_angel'
            },
            {
                id: 3,
                title: "R-TYPE",
                description: "R-TYPE est un jeu d'arcade multijoueur inspiré des classiques du shoot 'em up. Les joueurs peuvent coopérer en équipe de deux pour affronter des vagues d'ennemis et survivre aux affrontements. Le jeu propose trois niveaux, chacun présentant des défis uniques, et se conclut par une confrontation avec un boss final. Préparez-vous pour une expérience intense et immersive",
                link: 'https://github.com/dred974/r-type'
            },
        ]
    }
}