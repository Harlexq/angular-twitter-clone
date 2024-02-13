import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MainBtnComponent } from '../../shared/main-btn/main-btn.component';
import { MatDialog } from '@angular/material/dialog';
import { DisplayService } from '../../services/display/display.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [RouterLink, MainBtnComponent, NgFor, NgIf],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  colors: string[] = [
    '#1d9bf0',
    '#ffd400',
    '#f91880',
    '#7856ff',
    '#ff7a00',
    '#00ba7c',
  ];

  backgroundcolors: any = [
    {
      title: 'Varsayılan',
      hexCode: '#fff',
      textCode: '#000',
    },
    {
      title: 'Loş',
      hexCode: '#15202b',
      textCode: '#fff',
    },
    {
      title: 'Işıklar Kapalı',
      hexCode: '#000',
      textCode: '#fff',
    },
  ];

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    public displayService: DisplayService
  ) {
    this.setSelectedColorFromLocalStorage();
    this.setSelectedBackColorFromLocalStorage();
  }

  close() {
    this.matDialog.closeAll();
    this.router.navigate([{ outlets: { view: null } }]);
  }

  selectColor(color: string) {
    this.displayService.setSelectedColor(color);
  }

  backSelectColor(color: string) {
    this.displayService.setBackSelectedColor(color);
  }

  private setSelectedBackColorFromLocalStorage() {
    const storedColor = localStorage.getItem('backSelectedColor');
    if (storedColor) {
      this.displayService.setBackSelectedColor(storedColor);
    }
  }

  private setSelectedColorFromLocalStorage() {
    const storedColor = localStorage.getItem('selectedColor');
    if (storedColor) {
      this.displayService.setSelectedColor(storedColor);
    }
  }
}
