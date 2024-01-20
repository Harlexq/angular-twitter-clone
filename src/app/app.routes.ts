import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const title = '/ X';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/pages.component').then((c) => c.PagesComponent),
    title: `Anasayfa ${title}`,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.component').then(
            (c) => c.ExploreComponent
          ),
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./pages/messages/messages.component').then(
            (c) => c.MessagesComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
      },
    ],
  },
];
