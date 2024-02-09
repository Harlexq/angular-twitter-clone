import { Component } from '@angular/core';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemsComponent, AccountMenuComponent, LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
