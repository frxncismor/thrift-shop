import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent {
  @Input() public title: string = '';
  @Input() public quantity: number = 0;
}
