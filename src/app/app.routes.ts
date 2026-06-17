import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { ParcoursComponent } from './parcours/parcours.component';

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
        path: 'parcours',
        component: ParcoursComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
