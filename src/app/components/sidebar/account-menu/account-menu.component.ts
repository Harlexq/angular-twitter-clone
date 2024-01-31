import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../../layout/login/login.component';

@Component({
  selector: 'account-menu',
  standalone: true,
  imports: [RouterLink, NgStyle, MatDialogModule],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
})
export class AccountMenuComponent {
  isDropdownVisible = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private elRef: ElementRef
  ) {}

  dropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
    this.router.navigate([{ outlets: { aux: 'login' } }]);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.router.navigate([{ outlets: { aux: null } }]);
    }
  }
}
