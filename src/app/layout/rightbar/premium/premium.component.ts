import { Component } from '@angular/core';
import { MainBtnComponent } from '../../../shared/main-btn/main-btn.component';

@Component({
  selector: 'app-premium',
  standalone: true,
  imports: [MainBtnComponent],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss',
})
export class PremiumComponent {}
