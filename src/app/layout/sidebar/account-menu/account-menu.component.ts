import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../../dialogs/login/login.component';

@Component({
  selector: 'account-menu',
  standalone: true,
  imports: [RouterLink, MatDialogModule, NgIf, NgFor],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
})
export class AccountMenuComponent {
  isDropdownVisible = false;
  users: any;

  constructor(private router: Router, private dialog: MatDialog) {}

  dropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.isDropdownVisible &&
      !(event.target as HTMLElement).closest('.dropdown-menu')
    ) {
      this.isDropdownVisible = false;
    }
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '600px',
      height: '650px',
      backdropClass: 'backdrop',
      disableClose: true,
    });
    this.router.navigate([{ outlets: { aux: 'login' } }]);
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
