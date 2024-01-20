import { Component } from '@angular/core';
import { LeftbarComponent } from '../layouts/leftbar/leftbar.component';
import { RightbarComponent } from '../layouts/rightbar/rightbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [LeftbarComponent, RightbarComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {}
