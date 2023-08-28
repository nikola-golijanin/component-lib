import { Component } from '@angular/core';
import { Card } from 'ui-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-components';
  cards: Card[] = [
    {
      title: 'Title example',
      description: 'Description example',
      link: 'link example',
    },
    {
      title: 'Title example2',
      description: 'Description example2',
      link: 'link example2',
    },
  ];

  onCardChange(cards: Card[]) {
    console.log(cards);
  }
}
