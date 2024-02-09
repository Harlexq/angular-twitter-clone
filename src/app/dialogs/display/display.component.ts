import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  constructor(private router: Router, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInsideModal = this.elementRef.nativeElement.contains(
      event.target
    );
    if (!clickedInsideModal) {
      this.router.navigate([{ outlets: { view: null } }]);
    }
  }
}
