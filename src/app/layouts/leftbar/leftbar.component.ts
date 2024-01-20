import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss',
})
export class LeftbarComponent {
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
