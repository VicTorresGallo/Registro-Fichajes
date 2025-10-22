import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'fichar',
    loadComponent: () => import('./fichar/fichar.page').then( m => m.FicharPage)
  },
  {
    path: 'consultar',
    loadComponent: () => import('./consultar/consultar.page').then( m => m.ConsultarPage)
  },
];
