import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  selectedColor: string = '#1d9bf0';
  backSelectedColor: string = '#000';

  constructor() {
    this.selectedColor = localStorage.getItem('selectedColor') || '#1d9bf0';
    this.backSelectedColor =
      localStorage.getItem('backSelectedColor') || '#000';
  }

  setSelectedColor(color: string) {
    this.selectedColor = color;
    localStorage.setItem('selectedColor', color);
  }

  setBackSelectedColor(color: string) {
    this.backSelectedColor = color;
    localStorage.setItem('setBackSelectedColor', color);
  }
}
