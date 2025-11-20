import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    loadComponent: () => import('./nav/nav.page').then( m => m.NavPage),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.page').then( m => m.HomePage),
    canActivate: [authGuard]
  },
  {
    path: 'product-detail',
    loadComponent: () => import('./Pages/product-detail/product-detail.page').then( m => m.ProductDetailPage),
    canActivate: [authGuard]
  },
  {
    path: 'artisan',
    loadComponent: () => import('./Pages/artisan/artisan.page').then( m => m.ArtisanPage),
    canActivate: [authGuard]
  },
  {
    path: 'crear-producto',
    loadComponent: () => import('./Pages/crear-producto/crear-producto.page').then( m => m.CrearProductoPage),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadComponent: () => import('./Pages/auth/auth.page').then( m => m.AuthPage)
  },
];
