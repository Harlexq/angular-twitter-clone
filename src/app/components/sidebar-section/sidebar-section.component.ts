import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar-section',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './sidebar-section.component.html',
  styleUrl: './sidebar-section.component.scss',
})
export class SidebarSectionComponent {
  @Input({ required: true }) title: string = '';
  @Input() more?: string = '';
}
