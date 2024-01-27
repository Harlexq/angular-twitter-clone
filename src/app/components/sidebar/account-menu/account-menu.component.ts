import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'account-menu',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
})
export class AccountMenuComponent {
  isDropdownVisible = false;

  dropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
