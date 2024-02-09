import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { PremiumComponent } from './premium/premium.component';
import { TopicsComponent } from './topics/topics.component';
import { WhoFollowComponent } from './who-follow/who-follow.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'rightbar',
  standalone: true,
  imports: [
    SearchComponent,
    PremiumComponent,
    TopicsComponent,
    WhoFollowComponent,
    FooterComponent,
  ],
  templateUrl: './rightbar.component.html',
  styleUrl: './rightbar.component.scss',
})
export class RightbarComponent {}
