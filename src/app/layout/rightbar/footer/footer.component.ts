import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerItems = [
    {
      title: 'Hizmet Şartları',
      path: '/home',
    },
    {
      title: 'Gizlilik Politikası',
      path: '/home',
    },
    {
      title: 'Çerez Politikası',
      path: '/home',
    },
    {
      title: 'Imprint',
      path: '/home',
    },
    {
      title: 'Erişilebilirlik',
      path: '/home',
    },
    {
      title: 'Reklam bilgisi',
      path: '/home',
    },
    {
      title: 'Daha Fazla',
    },
    {
      title: '© 2024 X Corp.',
    },
  ];
}
