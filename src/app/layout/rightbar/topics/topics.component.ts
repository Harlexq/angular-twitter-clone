import { Component } from '@angular/core';
import { TopicsItemsComponent } from './topics-items/topics-items.component';
import { SidebarSectionComponent } from '../../../components/sidebar-section/sidebar-section.component';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [TopicsItemsComponent, SidebarSectionComponent],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent {}
