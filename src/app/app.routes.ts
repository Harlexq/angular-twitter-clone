import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

const title = '/ X';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
    title: `Anasayfa ${title}`,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./layout/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./layout/explore/explore.component').then(
            (c) => c.ExploreComponent
          ),
        title: `Keşfet ${title}`,
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./layout/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
        title: `Bildirimler ${title}`,
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./layout/messages/messages.component').then(
            (c) => c.MessagesComponent
          ),
        title: `Mesajlar ${title}`,
      },
      {
        path: '**',
        loadComponent: () =>
          import('./layout/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
        title: `Sayfa Bulunamadı ${title}`,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: `Giriş Yap ${title}`,
    outlet: 'aux',
  },
];
