import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  hover: boolean = false;
  cardIsHovered: boolean = false;
  @Input() public img: string = '';
}
