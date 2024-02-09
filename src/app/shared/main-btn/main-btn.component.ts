import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.scss',
})
export class MainBtnComponent {
  @Input() size?: 'normal' | 'large' | 'small' = 'normal';
  @Input() variant?: 'primary' | 'white' | 'white-outlet' = 'primary';
}
