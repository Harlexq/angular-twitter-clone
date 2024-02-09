import { Component } from '@angular/core';
import { WhoFollowUsers } from '../../models/WhoFollowUsers';
import { MainBtnComponent } from '../../shared/main-btn/main-btn.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [MainBtnComponent, NgFor, NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  following: { [key: number]: boolean } = {};

  toggleFollowing(userId: number) {
    this.following[userId] = !this.following[userId];
  }

  isFollowing(userId: number): boolean {
    return this.following[userId] || false;
  }

  constructor() {}

  whoFollowUsers: WhoFollowUsers[] = [
    {
      id: 3,
      username: 'ncontextFerrari',
      fullName: 'Ferrari Türkiye',
      avatar:
        'https://pbs.twimg.com/profile_images/1590455043806961673/LwvFmU63_normal.jpg',
      verified: true,
    },
    {
      id: 4,
      username: 'F1Tarihi',
      fullName: 'F1 Tarihi',
      avatar:
        'https://pbs.twimg.com/profile_images/1602701917620211713/9dv6aYH7_normal.jpg',
    },
    {
      id: 5,
      username: '_elnano_f1',
      fullName: 'Emrah F1',
      avatar:
        'https://pbs.twimg.com/profile_images/1750767174807937024/c86UIRZK_normal.jpg',
    },
  ];
}
