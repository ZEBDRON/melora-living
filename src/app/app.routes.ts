import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Melora Living | Senior Living',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About Us | Melora Living',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: 'Care & Services | Melora Living',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'gallery',
    title: 'Gallery | Melora Living',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.Gallery),
  },
  {
    path: 'contact',
    title: 'Contact Us | Melora Living',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
