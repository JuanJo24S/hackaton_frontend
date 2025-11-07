import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () => import('./Pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'nav',
    loadComponent: () => import('./nav/nav.page').then( m => m.NavPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.page').then( m => m.HomePage)
  },
];
