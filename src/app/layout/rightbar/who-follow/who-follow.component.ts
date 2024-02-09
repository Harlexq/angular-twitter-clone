import { Component } from '@angular/core';
import { SidebarSectionComponent } from '../../../components/sidebar-section/sidebar-section.component';
import { UserCardComponent } from '../../../components/user-card/user-card.component';

@Component({
  selector: 'who-follow',
  standalone: true,
  imports: [SidebarSectionComponent, UserCardComponent],
  templateUrl: './who-follow.component.html',
  styleUrl: './who-follow.component.scss',
})
export class WhoFollowComponent {}
