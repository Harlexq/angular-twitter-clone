import { Component } from '@angular/core';
import { StickyHeaderComponent } from '../../components/sticky-header/sticky-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StickyHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
