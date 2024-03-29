import { Routes } from '@angular/router';
import { LoginComponent } from './dialogs/login/login.component';
import { VerifiedChooseComponent } from './dialogs/verified-choose/verified-choose.component';
import { DisplayComponent } from './dialogs/display/display.component';

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
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.component').then(
            (c) => c.ExploreComponent
          ),
        title: `Keşfet ${title}`,
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
        title: `Bildirimler ${title}`,
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./pages/messages/messages.component').then(
            (c) => c.MessagesComponent
          ),
        title: `Mesajlar ${title}`,
      },
      {
        path: 'harlexq/lists',
        loadComponent: () =>
          import('./pages/lists/lists.component').then((c) => c.ListsComponent),
        title: `Listeler ${title}`,
      },
      {
        path: 'i/bookmarks',
        loadComponent: () =>
          import('./pages/bookmarks/bookmarks.component').then(
            (c) => c.BookmarksComponent
          ),
        title: `Yer İşaretleri ${title}`,
      },
      {
        path: 'harlexq/communities',
        loadComponent: () =>
          import('./pages/communities/communities.component').then(
            (c) => c.CommunitiesComponent
          ),
        title: `Topluluklar ${title}`,
      },
      {
        path: 'harlexq',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
        title: `Harlex ${title}`,
      },
      {
        path: 'i/trends',
        loadComponent: () =>
          import('./pages/trends/trends.component').then(
            (c) => c.TrendsComponent
          ),
        title: `Gündemler ${title}`,
      },
      {
        path: 'i/connect-people',
        loadComponent: () =>
          import('./pages/connect-people/connect-people.component').then(
            (c) => c.ConnectPeopleComponent
          ),
        title: `Bağlan ${title}`,
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
        title: `Sayfa Bulunamadı ${title}`,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'aux',
  },
  {
    path: 'i/verified-choose',
    component: VerifiedChooseComponent,
    outlet: 'verified-choose',
  },
  {
    path: 'display',
    component: DisplayComponent,
    outlet: 'view',
  },
];
