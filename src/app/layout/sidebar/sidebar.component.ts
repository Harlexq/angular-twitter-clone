import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarItemsComponent,
    AccountMenuComponent,
    LogoComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
