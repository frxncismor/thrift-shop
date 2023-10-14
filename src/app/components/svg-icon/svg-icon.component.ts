import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnChanges {

  @Input() public name?: string;
  @Input() public width?: string;
  @Input() public height?: string;

  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
  ) {
  }

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/svg/${this.name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, "image/svg+xml");
        if (this.height) {
          doc.getElementsByClassName("icon")[0].setAttribute("height", this.height)
        }
        if (this.width) {
          doc.getElementsByClassName("icon")[0].setAttribute("width", this.width)
        }
        const stringSvg = new XMLSerializer().serializeToString(doc);
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(stringSvg);
      });
  }

}
