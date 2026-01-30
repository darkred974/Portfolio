import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsProfessionelsComponent } from './projets-professionels/projets-professionels.component';
import { ProjetsPersonnelsComponent } from './projets-personnels/projets-personnels.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'projets',
        component: ProjetsComponent
    },
    {
        path: 'projets-professionnels',
        component: ProjetsProfessionelsComponent
    },
    {
        path: 'projets-personnels',
        component: ProjetsPersonnelsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
