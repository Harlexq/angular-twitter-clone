import { Component } from '@angular/core';
import { MainBtnComponent } from '../../../../shared/main-btn/main-btn.component';

@Component({
  selector: 'sidebar-items-new',
  standalone: true,
  imports: [MainBtnComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent {}
