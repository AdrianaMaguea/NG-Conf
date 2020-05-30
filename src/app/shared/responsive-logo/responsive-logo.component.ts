import { Component, OnInit, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-responsive-logo',
  templateUrl: './responsive-logo.component.html',
  styleUrls: ['./responsive-logo.component.scss']
})
export class ResponsiveLogoComponent implements OnChanges {

  @Input() width?: string;
  @Input() height?: string;
  @Input() color?: any;

  nativeElement: HTMLElement;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        this.nativeElement.style.setProperty(`--${key}`, `${String(changes[key].currentValue)}`);
      }
    }
  }

}
