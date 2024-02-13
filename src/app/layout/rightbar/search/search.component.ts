import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayService } from '../../../services/display/display.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  query: string = '';
  setFocus: boolean = false;

  constructor(public displayService: DisplayService) {}

  clearQuery() {
    this.query = '';
  }
}
