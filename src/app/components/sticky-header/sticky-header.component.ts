import { Component, Input } from '@angular/core';

@Component({
  selector: 'sticky-header',
  standalone: true,
  imports: [],
  templateUrl: './sticky-header.component.html',
  styleUrl: './sticky-header.component.scss',
})
export class StickyHeaderComponent {
  @Input({ required: true }) title: string = '';
}
