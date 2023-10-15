import { Component, Input } from '@angular/core';
interface card {
  img: string;
}
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {
  @Input() gender: string = '';
  menCards: card[] = [];
  womenCards: card[] = [];
  ngOnInit(): void {
    if (this.gender === 'men') {
      this.menCards = [
        { img: './../../../assets/images/man-1.jpeg' },
        { img: './../../../assets/images/man-2.jpeg' },
        { img: './../../../assets/images/man-3.jpeg' },
        { img: './../../../assets/images/man-4.jpeg' },
        { img: './../../../assets/images/man-1.jpeg' },
        { img: './../../../assets/images/man-2.jpeg' },
        { img: './../../../assets/images/man-3.jpeg' },
        { img: './../../../assets/images/man-4.jpeg' },
        { img: './../../../assets/images/man-1.jpeg' },
      ]
    } else if (this.gender === 'women') {
      this.womenCards = [
        { img: './../../../assets/images/model-1.jpeg' },
        { img: './../../../assets/images/model-2.jpeg' },
        { img: './../../../assets/images/model-3.jpeg' },
        { img: './../../../assets/images/model-4.jpeg' },
        { img: './../../../assets/images/model-1.jpeg' },
        { img: './../../../assets/images/model-2.jpeg' },
        { img: './../../../assets/images/model-3.jpeg' },
        { img: './../../../assets/images/model-4.jpeg' },
        { img: './../../../assets/images/model-1.jpeg' },
      ]
    } else {
      this.womenCards = [
        { img: './../../../assets/images/model-1.jpeg' },
        { img: './../../../assets/images/model-2.jpeg' },
        { img: './../../../assets/images/model-3.jpeg' },
        { img: './../../../assets/images/model-4.jpeg' },
        { img: './../../../assets/images/model-1.jpeg' },
        { img: './../../../assets/images/model-2.jpeg' },
        { img: './../../../assets/images/model-3.jpeg' },
        { img: './../../../assets/images/model-4.jpeg' },
        { img: './../../../assets/images/model-1.jpeg' },
      ]
      this.menCards = [
        { img: './../../../assets/images/man-1.jpeg' },
        { img: './../../../assets/images/man-2.jpeg' },
        { img: './../../../assets/images/man-3.jpeg' },
        { img: './../../../assets/images/man-4.jpeg' },
        { img: './../../../assets/images/man-1.jpeg' },
        { img: './../../../assets/images/man-2.jpeg' },
        { img: './../../../assets/images/man-3.jpeg' },
        { img: './../../../assets/images/man-4.jpeg' },
        { img: './../../../assets/images/man-1.jpeg' },
      ]
    }

  }

}
