import { Component } from '@angular/core';
import { TopicsItems } from '../../../../models/TopicsItems';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NumberFormatPipe } from '../../../../pipes/number-format.pipe';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'topics-items',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, NumberFormatPipe, MatMenuModule],
  templateUrl: './topics-items.component.html',
  styleUrl: './topics-items.component.scss',
})
export class TopicsItemsComponent {
  constructor() {}

  topics: TopicsItems[] = [
    {
      title: 'Siyaset · Gündemdekiler',
      topic: { type: 'tag', value: 'Deprem' },
      postCount: 264000,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'starlink', value: 'Acun' },
      postCount: 24800,
    },
    {
      title: 'Siyaset · Gündemdekiler',
      topic: { type: 'starlink', value: 'Çağlayan Adliyesi' },
      postCount: 120000,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'tag', value: 'Alper Gezeravcı' },
      postCount: 1515,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'starlink', value: 'istifa' },
    },
    {
      title: 'Haberler · Gündemdekiler',
      topic: { type: 'tag', value: 'SONDAKİKA' },
      postCount: 26500,
    },
    {
      title: 'Spor · Gündemdekiler',
      topic: { type: 'tag', value: 'Bandırma' },
      postCount: 11500,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'starlink', value: 'Hilmicem' },
      postCount: 4579,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'tag', value: 'Efe Akman' },
      postCount: 2354,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: { type: 'starlink', value: 'Reyting' },
      postCount: 2776,
    },
  ];
}
